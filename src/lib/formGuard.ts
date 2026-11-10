import type { NextRequest } from "next/server";
import { PRIVACY_POLICY_VERSION } from "./privacy";

/**
 * Server-side guard shared by every form API route.
 *
 * Enforces what the browser cannot be trusted to enforce:
 *  - explicit consent (DPDP) — a form without `consent: true` is rejected
 *  - field presence, type and length (data minimisation + abuse protection)
 *  - rate limiting (spam / mail-relay abuse)
 * and provides HTML escaping for anything that ends up inside an e-mail.
 */

// ─── escaping ────────────────────────────────────────────────────────────────

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape text before placing it inside an HTML e-mail body. */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/** Collapse line breaks so user text can never inject e-mail headers. */
export function singleLine(value: string): string {
  return value.replace(/[\r\n  ]+/g, " ").trim();
}

// ─── rate limiting (in-memory; the app runs as a single PM2 process) ────────

const hits = new Map<string, number[]>();

function allow(key: string, limit: number, windowMs: number, now: number): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  // Keep memory bounded: drop stale keys occasionally.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return true;
}

function clientIp(request: NextRequest): string | null {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim() || null;
  return request.headers.get("x-real-ip");
}

// ─── validation ──────────────────────────────────────────────────────────────

export type GuardedSubmission = {
  name: string;
  email: string;
  mobileNumber: string;
  message: string;
  /** Optional text fields requested by the route, trimmed and length-limited. */
  extras: Record<string, string>;
  consent: {
    formName: string;
    clientPolicyVersion: string;
    receivedAt: Date;
  };
};

export type GuardResult =
  | { ok: true; data: GuardedSubmission }
  | { ok: false; status: number; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const v = value.trim();
  return v.length > max ? null : v;
}

/**
 * @param extraFields optional extra text fields to accept, as `name -> max length`.
 *                    Anything not listed here is ignored (never stored or mailed).
 */
export async function guardSubmission(
  request: NextRequest,
  extraFields: Record<string, number> = {}
): Promise<GuardResult> {
  const now = Date.now();

  // Rate limits. The per-IP limit is skipped when the proxy gives us no IP, so
  // that visitors never share one bucket; the global cap still applies.
  const ip = clientIp(request);
  if (!allow("global", 100, 10 * 60_000, now) || (ip && !allow(`ip:${ip}`, 5, 10 * 60_000, now))) {
    return { ok: false, status: 429, error: "Too many requests. Please try again in a few minutes." };
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed as Record<string, unknown>;
  } catch {
    return { ok: false, status: 400, error: "Invalid request." };
  }

  // DPDP: no consent, no processing. Checked before anything else is read.
  if (body.consent !== true) {
    return { ok: false, status: 400, error: "Please agree to the Privacy Policy to send this form." };
  }

  const name = text(body.name, 100);
  const email = text(body.email, 254);
  const mobileNumber = text(body.mobileNumber, 25);
  const message = text(body.message, 5000);

  if (!name || !email || !mobileNumber || !message) {
    return { ok: false, status: 400, error: "All fields are required" };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, status: 400, error: "Please enter a valid email address." };
  }
  const digits = mobileNumber.replace(/[^0-9]/g, "");
  if (digits.length < 7 || digits.length > 15) {
    return { ok: false, status: 400, error: "Please enter a valid phone number." };
  }

  // One enquiry mail per address per hour keeps the auto-reply from being used
  // to send repeated mail to someone else's inbox.
  if (!allow(`email:${email.toLowerCase()}`, 3, 60 * 60_000, now)) {
    return { ok: false, status: 429, error: "Too many requests. Please try again later." };
  }

  const extras: Record<string, string> = {};
  for (const [field, max] of Object.entries(extraFields)) {
    const v = text(body[field], max);
    if (v) extras[field] = v;
  }

  const rawForm = typeof body.consentFormName === "string" ? body.consentFormName : "";
  const formName = /^[a-z0-9_-]{1,60}$/i.test(rawForm) ? rawForm : "unknown";
  const rawVersion = typeof body.privacyPolicyVersion === "string" ? body.privacyPolicyVersion : "";
  const clientPolicyVersion = /^[0-9a-z._-]{1,20}$/i.test(rawVersion) ? rawVersion : "unknown";

  return {
    ok: true,
    data: {
      name,
      email,
      mobileNumber,
      message,
      extras,
      consent: { formName, clientPolicyVersion, receivedAt: new Date(now) },
    },
  };
}

// ─── consent record + safe logging ──────────────────────────────────────────

/**
 * HTML block added to the admin e-mail. There is no database, so the admin
 * inbox is the only place a record of consent can live: it proves who agreed,
 * when, on which form, and which version of the policy they were shown.
 */
export function buildConsentProof(consent: GuardedSubmission["consent"]): string {
  const ist = consent.receivedAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return `
        <div class="field">
          <div class="label">Consent record (DPDP)</div>
          <div class="value">
            Consent given: Yes<br/>
            Form: ${escapeHtml(consent.formName)}<br/>
            Time: ${escapeHtml(ist)} IST (${consent.receivedAt.toISOString()})<br/>
            Privacy Policy version shown: ${escapeHtml(consent.clientPolicyVersion)} (current: ${PRIVACY_POLICY_VERSION})
          </div>
        </div>`;
}

/** Log a failure without leaking the visitor's details (SMTP errors often echo addresses). */
export function logMailError(error: unknown): void {
  const e = error as { code?: string; responseCode?: number; name?: string } | null;
  console.error("Mail error:", e?.name ?? "Error", e?.code ?? "", e?.responseCode ?? "");
}
