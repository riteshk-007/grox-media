/**
 * Cookie / tracking consent state.
 *
 * Choice is kept in localStorage (never in a cookie, so remembering a "no"
 * does not itself set a cookie). Everything is wrapped in try/catch because
 * storage can be blocked (private windows, strict browser settings).
 */

export const CONSENT_STORAGE_KEY = "grox_cookie_consent_v1";
/** Fired on `window` after the choice changes, so other components can react. */
export const CONSENT_CHANGED_EVENT = "grox:consent-changed";
/** Fired by the footer link to re-open the banner and let the visitor change their mind. */
export const OPEN_SETTINGS_EVENT = "grox:open-cookie-settings";

export type ConsentStatus = "granted" | "denied";

type StoredConsent = { status: ConsentStatus; savedAt: string };

export function readConsent(): ConsentStatus | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    return parsed.status === "granted" || parsed.status === "denied" ? parsed.status : null;
  } catch {
    return null;
  }
}

export function writeConsent(status: ConsentStatus): void {
  try {
    const value: StoredConsent = { status, savedAt: new Date().toISOString() };
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* storage unavailable: the choice then only lasts for this page view */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: status }));
}

/** True only when the visitor has explicitly accepted tracking. */
export function hasTrackingConsent(): boolean {
  return typeof window !== "undefined" && readConsent() === "granted";
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

// Cookies set by the analytics / advertising tags this site can load.
const TRACKING_COOKIE = /^(_ga|_gid|_gat|_gcl_|_gac_|__gads|__gpi|_oaiq|oai_)/i;

/**
 * Best-effort removal of first-party tracking cookies when consent is
 * withdrawn. Third-party cookies (e.g. doubleclick.net) belong to other
 * domains and can only be removed through the browser's own settings — the
 * Privacy Policy says so.
 */
export function clearTrackingCookies(): void {
  try {
    const host = window.location.hostname;
    const parts = host.split(".");
    const domains = new Set<string>([host, `.${host}`]);
    if (parts.length >= 2) domains.add(`.${parts.slice(-2).join(".")}`);

    for (const pair of document.cookie.split(";")) {
      const name = pair.split("=")[0]?.trim();
      if (!name || !TRACKING_COOKIE.test(name)) continue;
      const expire = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = expire;
      domains.forEach((d) => {
        document.cookie = `${expire}; domain=${d}`;
      });
    }
  } catch {
    /* ignore */
  }
}
