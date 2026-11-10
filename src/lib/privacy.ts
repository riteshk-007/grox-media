/**
 * Single source of truth for privacy / DPDP-related facts used by the forms,
 * the cookie banner and the Privacy Policy page.
 *
 * Values that Grox Media has not confirmed are `null` and render as a visible
 * "[TODO]" marker on the policy page — nothing here is guessed.
 */

/** Bump this (and `lastUpdated`) whenever the Privacy Policy text changes. */
export const PRIVACY_POLICY_VERSION = "2026-11-10";

export const PRIVACY_CONFIG = {
  policyVersion: PRIVACY_POLICY_VERSION,
  lastUpdated: "10 November 2026",

  /** Name used across the site and in structured data. TODO: confirm exact registered name. */
  entityName: "Grox Media LLP",
  /** Public contact already published on the site and in the previous policy. */
  contactEmail: "info@groxmedia.in",
  contactPhone: "+91 92668 06477",
  registeredAddress:
    "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201305",

  // ── TODO: to be supplied by Grox Media before the policy is published ──
  /** Name and designation of the person who handles privacy grievances. */
  grievanceOfficerName: null as string | null,
  /** Dedicated grievance e-mail. Until set, the policy points to `contactEmail`. */
  grievanceEmail: null as string | null,
  /** How long enquiry e-mails are kept, e.g. "12 months". */
  enquiryRetention: null as string | null,
  /** How long web-server access logs are kept. */
  serverLogRetention: null as string | null,
} as const;

/** The e-mail users should write to for privacy requests and grievances. */
export const privacyRequestEmail =
  PRIVACY_CONFIG.grievanceEmail ?? PRIVACY_CONFIG.contactEmail;

export const CONSENT_REQUIRED_MESSAGE =
  "Please tick the box to agree before sending.";

/** What the client sends with every form so the server can record consent. */
export function consentPayload(formName: string) {
  return {
    consent: true as const,
    consentFormName: formName,
    privacyPolicyVersion: PRIVACY_POLICY_VERSION,
  };
}
