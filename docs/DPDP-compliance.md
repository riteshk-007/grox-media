# DPDP compliance notes — groxmedia.in

How this website handles personal data under India's Digital Personal Data
Protection Act, 2023 and the DPDP Rules, 2025. The main obligations apply from
**May 2027**; the site is built to comply now.

Nothing here is legal advice. Items marked **TODO** are facts Grox Media must
confirm — they are deliberately left blank rather than guessed.

---

## 1. Where personal data goes

| Where | What | How |
|---|---|---|
| Enquiry forms (14 forms, see below) | name, email, phone, message (+ project/service asked about) | `POST /api/form` or `/api/enquiry` → e-mail only. **There is no database.** |
| Company mailbox (Gmail) | every enquiry + its consent record | the only long-term store of enquiry data |
| Brevo SMTP | the same fields, in transit | delivers the admin notification and the visitor's acknowledgement |
| Web-server logs (nginx) | IP, time, URL, user agent | automatic; **TODO: retention** |
| Analytics / ads (only after consent) | IP, device, pages, "form submitted" event | Google Analytics + Google Ads via GTM, OpenAI pixel |
| Browser `localStorage` | the visitor's cookie choice | key `grox_cookie_consent_v1`; no cookie is set for it |

The 14 forms: contact page, home contact section, portfolio enquiry dialog,
"Get started" dialog, and the 10 city landing pages (designing/development ×
Delhi, Gurgaon, Mumbai, Noida, Pune). A form that does not send
`consent: true` is rejected by the server with HTTP 400.

### Not covered by this codebase — audit separately
- **The blog** at `groxmedia.in/blog/` is a separate WordPress install. Check
  its comment form, plugins and any trackers, and cover them in the policy.
- **The Google Tag Manager container** (`GTM-N9RXMV37`) is configured in
  Google's console. At last check it loads Google Analytics and Google Ads
  only. Re-check after any change there.
- `src/components/shared/ContactSection.tsx` is unused and still has an `age`
  field. The API now ignores `age`; delete the file if it will not be used.

---

## 2. Vendors (processors)

| Vendor | Purpose | Data shared | Country (HQ — confirm data location) |
|---|---|---|---|
| Brevo | e-mail delivery (SMTP) | name, email, phone, message | France |
| Google (Gmail / Workspace) | company mailbox | all enquiry data | USA |
| Google Analytics / Ads / Tag Manager | measurement, ad conversions — **after consent** | IP, device, pages, form-submitted event | USA |
| OpenAI (advertising pixel) | ad conversions — **after consent** | page/device data, form-submitted event | USA |
| Google Maps (embed) | office map — **after consent or click** | IP, browser data | USA |
| Cloudflare (R2) | image hosting | IP, browser data | USA |
| DigitalOcean (Spaces CDN) | video hosting | IP, browser data | USA |
| UploadThing (`utfs.io`, `ufs.sh`) | image hosting | IP, browser data | **TODO: confirm** |
| WhatsApp / Meta | click-to-chat button | phone number, message — only if the visitor clicks | USA |
| VPS / hosting provider | runs the server | everything the site processes | **TODO: confirm provider and country** |

Instagram and LinkedIn are plain outbound links; nothing is sent until clicked.

---

## 3. Consent

**Forms.** `ConsentCheckbox` sits above every submit button: unchecked by
default, required, states what is collected and why, links to the policy. The
browser blocks submit without it, and `src/lib/formGuard.ts` blocks it again on
the server. There is no marketing/newsletter use of form data, so there is no
second (marketing) checkbox. If marketing is ever added it needs its own
separate, optional box.

**Proof of consent.** With no database, the proof lives in the admin e-mail:
every notification ends with a *Consent record* block (time in IST and UTC,
form name, policy version shown). Searching the mailbox for the visitor's email
finds both the enquiry and the proof.

**Cookies.** `src/components/layout/CookieConsent.tsx` is the only place
Google Ads, GTM and the OpenAI pixel are loaded, and only after **Accept**.
Reject and Accept have equal size and prominence. "Cookie settings" in the
footer re-opens the banner; rejecting after accepting clears first-party
tracking cookies and reloads. `trackLeadSubmission()` does nothing without
consent. The Google Maps embed on /contact also waits for consent or a click.

---

## 4. Retention (no database → the mailbox is the data store)

There is no job that can delete data automatically, because there is no
database. Retention is therefore a **mailbox rule**:

1. **TODO (client):** decide the retention period for enquiries (e.g. 12 months).
2. In the company mailbox, create a recurring task or filter that deletes
   enquiry messages (subject starts `New Contact:` or `New Project Enquiry:`)
   older than that period — and the same for the visitor-copy in "Sent".
3. Put the period in `src/lib/privacy.ts` (`enquiryRetention`) so the policy
   states it.
4. **TODO:** set a retention period for nginx logs (`logrotate`) and put it in
   `serverLogRetention`. Set the Google Analytics data-retention setting and
   record it on the policy page.

---

## 5. Handling a privacy request (access, correction, erasure, withdrawal)

Requests arrive at the privacy e-mail shown on the policy page
(`privacyRequestEmail` in `src/lib/privacy.ts`).

1. Acknowledge and **verify identity** — ask them to write from the e-mail
   address used in the enquiry, or confirm details of it.
2. Search the mailbox (Inbox, Sent, Trash) for that e-mail address and phone
   number.
3. **Access** → send a summary of what is held and the vendors in section 2.
   **Correction** → correct it where it is stored and reply to confirm.
   **Erasure / withdrawal of consent** → permanently delete every message (and
   empty Trash). Reply to confirm.
4. If they accepted cookies and want analytics data removed, withdraw their
   consent from Google Analytics if needed; we cannot identify a visitor there
   by name.
5. Keep a one-line log (date, request type, done) — without the personal data.
6. Respond within the time the law requires.

Complaints go to the grievance officer first (**TODO: name**). If unresolved,
the person may complain to the Data Protection Board of India.

---

## 6. Personal data breach — what to do

1. **Contain**: change the SMTP password and mailbox password, revoke unknown
   sessions, remove the cause (e.g. rotate server credentials).
2. **Record**: what happened, when it was found, which data and how many people.
3. **Inform** — as the DPDP Act and Rules require — the affected people and
   the **Data Protection Board of India**. Check the current Rules for the
   exact content and deadlines before sending.
4. **Fix and review**: close the gap, update this document.

Contact for incidents: **TODO: name and number of the person responsible.**

---

## 7. Security measures in the code

- Form input is validated server-side (type, length, e-mail and phone format)
  and unknown fields are ignored.
- All user text is HTML-escaped before it goes into an e-mail body; line breaks
  are stripped from subjects (no header injection).
- Rate limits: 5 submissions per IP per 10 min, 3 per e-mail address per hour,
  100 site-wide per 10 min (in-memory; the app runs as one PM2 process).
- Failures are logged without the visitor's details.
- Baseline security headers are set in `next.config.mjs`. No
  Content-Security-Policy yet — add one only after testing it against GTM.
- SMTP credentials are environment variables and were verified **not** to be in
  the browser bundles. They are named `NEXT_PUBLIC_*`, which is risky: any
  client code that reads one would publish it. **Recommended:** rename to
  `SMTP_HOST` etc. on the server and in `src/app/api/*/route.ts` together.

---

## 8. Decisions the client must make

1. Exact registered name of the company (the site uses "Grox Media LLP").
2. Grievance officer — name, designation, and a dedicated e-mail if wanted.
3. Retention periods: enquiries, server logs, Google Analytics.
4. Name and country of the hosting provider; location of UploadThing data.
5. Whether to keep **phone number as a required field** (it is required today).
6. Whether the acknowledgement e-mail should keep **echoing the visitor's
   message**. It is sent to whatever address is typed in, which someone else
   could abuse; rate limits reduce but do not remove that.
7. Who audits the blog (WordPress) and the GTM container.
8. Whether to rename the `NEXT_PUBLIC_SMTP_*` variables (see section 7).
