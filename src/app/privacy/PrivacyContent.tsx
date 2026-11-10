"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import { PRIVACY_CONFIG, privacyRequestEmail } from "@/lib/privacy";
import { openCookieSettings } from "@/lib/consent";

const toc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "data-we-collect", label: "Data we collect" },
  { id: "why-we-use-it", label: "Why we use it" },
  { id: "who-we-share-with", label: "Who we share it with" },
  { id: "cookies", label: "Cookies and tracking" },
  { id: "outside-india", label: "Processing outside India" },
  { id: "how-long", label: "How long we keep it" },
  { id: "your-rights", label: "Your rights" },
  { id: "grievance", label: "Grievance officer" },
  { id: "children", label: "Children" },
  { id: "security", label: "Security and breaches" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

/** Visible placeholder for a fact Grox Media has not confirmed yet. Never guessed. */
function Todo({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-amber-100 px-1.5 py-0.5 text-sm font-medium text-amber-900">
      [TODO: {children}]
    </mark>
  );
}

const h2 = "scroll-mt-32 text-xl font-bold text-[#111827]";
const p = "mt-4 leading-relaxed text-gray-600";
const ul = "mt-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-600";
const link = "font-semibold text-[#1e40af] underline hover:no-underline";

function Divider() {
  return <div className="my-8 border-b border-gray-100" />;
}

const processors: {
  name: string;
  does: string;
  data: string;
  when: React.ReactNode;
}[] = [
  {
    name: "Brevo",
    does: "Delivers the emails our forms send (the notification to us and the acknowledgement to you).",
    data: "Name, email address, phone number, message.",
    when: "When you submit a form.",
  },
  {
    name: "Google (company mailbox)",
    does: "Receives your enquiry in our email inbox.",
    data: "Everything in your enquiry, including the consent record.",
    when: "When you submit a form.",
  },
  {
    name: "Google Analytics, Google Ads and Google Tag Manager",
    does: "Measure visits to the site and how our ads perform.",
    data: "IP address, device and browser details, pages viewed, and the fact that a form was submitted (not what you wrote).",
    when: "Only if you accept cookies.",
  },
  {
    name: "OpenAI advertising pixel",
    does: "Measures how our ads perform.",
    data: "Page and device details, and the fact that a form was submitted.",
    when: "Only if you accept cookies.",
  },
  {
    name: "Google Maps",
    does: "Shows the map of our office on the Contact page.",
    data: "IP address and browser details.",
    when: "Only if you accept cookies or press “Load map”.",
  },
  {
    name: "Cloudflare, DigitalOcean and UploadThing",
    does: "Store and deliver the images and videos shown on our pages.",
    data: "IP address and browser details.",
    when: "Whenever a page loads that media.",
  },
  {
    name: "Website hosting provider",
    does: "Runs the server this website is hosted on.",
    data: "Everything the website processes, including server logs.",
    when: (
      <>
        Always. <Todo>name and country of the hosting provider</Todo>
      </>
    ),
  },
  {
    name: "WhatsApp (Meta)",
    does: "Lets you message us from the WhatsApp button.",
    data: "Your phone number and the message you send.",
    when: "Only if you choose to message us on WhatsApp.",
  },
];

export default function PrivacyContent() {
  const c = PRIVACY_CONFIG;

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-200/40 to-blue-200/30 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <SectionBadge>Legal</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-4xl font-extrabold text-[#111827] md:text-5xl"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-3 text-sm text-gray-400"
          >
            Last updated: {c.lastUpdated} · Version {c.policyVersion}
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <motion.aside
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:sticky lg:top-32 lg:col-span-1 lg:block lg:self-start"
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#111827]">
                Contents
              </p>
              <nav aria-label="Table of contents">
                <ul className="space-y-1">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block border-l-2 border-transparent py-2 pl-3 text-sm text-gray-500 transition-colors hover:border-[#1e40af] hover:text-[#1e40af]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12 lg:col-span-3"
          >
            <p className="leading-relaxed text-gray-600">
              This policy explains what personal data {c.entityName} collects
              through groxmedia.in, why we collect it, who we share it with,
              how long we keep it, and the choices and rights you have under
              India&apos;s Digital Personal Data Protection Act, 2023 (the
              &ldquo;DPDP Act&rdquo;) and the rules made under it. We have
              tried to write it in plain language.
            </p>

            <Divider />

            <h2 id="who-we-are" className={h2}>
              Who we are
            </h2>
            <p className={p}>
              {c.entityName} (&ldquo;Grox Media&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) decides why and how the personal data
              described here is used, which makes us the &ldquo;Data
              Fiduciary&rdquo; under the DPDP Act. Our address is{" "}
              {c.registeredAddress}.
            </p>

            <Divider />

            <h2 id="data-we-collect" className={h2}>
              Data we collect
            </h2>
            <ul className={ul}>
              <li>
                <strong>What you type into our forms</strong> — the Contact
                form, the &ldquo;Get started&rdquo; form, and the enquiry forms
                on our service, portfolio and city pages: your name, email
                address, phone number and message. For a project or service
                enquiry we also note which project or service you asked about.
                We need all four details so that we can reply and discuss your
                project.
              </li>
              <li>
                <strong>A record of your consent</strong> — the time you sent
                the form, which form it was, and which version of this policy
                you saw. We keep it with your enquiry as proof.
              </li>
              <li>
                <strong>Messages you send us directly</strong> by email, phone
                or WhatsApp — your email address or phone number and what you
                write.
              </li>
              <li>
                <strong>Technical data our server records automatically</strong>{" "}
                whenever you visit — your IP address, the date and time, the
                pages requested and your browser type.
              </li>
              <li>
                <strong>Analytics and advertising data</strong> — only if you
                accept cookies (see{" "}
                <a href="#cookies" className={link}>
                  Cookies and tracking
                </a>
                ): your IP address, device and browser details, pages viewed,
                the site you came from, and the fact that a form was
                submitted. This does not include what you wrote in the form.
              </li>
            </ul>
            <p className={p}>
              We do not ask for payment details on this website.
            </p>

            <Divider />

            <h2 id="why-we-use-it" className={h2}>
              Why we use it
            </h2>
            <ul className={ul}>
              <li>
                To reply to your enquiry, discuss your project and send you a
                quote — based on your consent when you submit the form.
              </li>
              <li>
                To keep a record of that consent and to deal with any request
                you make about your data.
              </li>
              <li>To keep the website secure and working (server records).</li>
              <li>
                To measure how the site is used and how our ads perform — only
                if you accept cookies.
              </li>
              <li>To meet our legal obligations.</li>
            </ul>
            <p className={p}>
              We do not sell your personal data. The email you receive after
              sending a form is an acknowledgement of your enquiry, not
              marketing. If we ever wish to send you marketing, we will ask for
              your permission separately and you can say no.
            </p>

            <Divider />

            <h2 id="who-we-share-with" className={h2}>
              Who we share it with
            </h2>
            <p className={p}>
              We use the service providers below to run the website and handle
              enquiries. They receive only what they need to do that job.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Provider</th>
                    <th className="px-4 py-3 font-semibold">What it does</th>
                    <th className="px-4 py-3 font-semibold">Data it receives</th>
                    <th className="px-4 py-3 font-semibold">When</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {processors.map((row) => (
                    <tr key={row.name} className="align-top">
                      <th scope="row" className="px-4 py-3 font-medium text-[#111827]">
                        {row.name}
                      </th>
                      <td className="px-4 py-3">{row.does}</td>
                      <td className="px-4 py-3">{row.data}</td>
                      <td className="px-4 py-3">{row.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={p}>
              We may also disclose data if a law, court or government authority
              requires it. Links to other websites (for example Instagram and
              LinkedIn) are ordinary links: nothing is sent to those sites
              until you click, and their own privacy policies then apply.
            </p>

            <Divider />

            <h2 id="cookies" className={h2}>
              Cookies and tracking
            </h2>
            <p className={p}>
              When you first visit, we show a banner. Until you press{" "}
              <strong>Accept</strong>, we do not load Google Analytics, Google
              Ads, Google Tag Manager or the OpenAI pixel, and none of their
              cookies are set. Pressing <strong>Reject</strong> loads none of
              them either, and the site works the same.
            </p>
            <p className={p}>
              We remember your choice in your browser&apos;s local storage.
              This website does not set any other cookies of its own.
            </p>
            <p className={p}>
              You can change your mind at any time, as easily as you chose:{" "}
              <button
                type="button"
                onClick={openCookieSettings}
                className={`${link} cursor-pointer`}
              >
                open cookie settings
              </button>{" "}
              or use &ldquo;Cookie settings&rdquo; at the bottom of any page.
              If you reject after having accepted, we remove the cookies we
              can and reload the page. Cookies that Google places on its own
              domains (for example doubleclick.net) can only be removed in
              your browser&apos;s settings.
            </p>

            <Divider />

            <h2 id="outside-india" className={h2}>
              Processing outside India
            </h2>
            <p className={p}>
              Some of the providers above (for example Google, Brevo and
              OpenAI) are based outside India or may process data on servers
              outside India. By sending a form or accepting cookies you
              understand that your data may be processed by them for the
              purposes in this policy. We use them only to provide the services
              described here.
            </p>

            <Divider />

            <h2 id="how-long" className={h2}>
              How long we keep it
            </h2>
            <ul className={ul}>
              <li>
                <strong>Enquiry details and consent record:</strong>{" "}
                {c.enquiryRetention ? (
                  <>{c.enquiryRetention}, and then we delete them.</>
                ) : (
                  <Todo>retention period for enquiries, e.g. 12 months</Todo>
                )}
              </li>
              <li>
                <strong>Server records:</strong>{" "}
                {c.serverLogRetention ? (
                  <>{c.serverLogRetention}.</>
                ) : (
                  <Todo>how long web-server logs are kept</Todo>
                )}
              </li>
              <li>
                <strong>Analytics data:</strong> kept for the period set in our
                Google account settings, and only if you accepted cookies.{" "}
                <Todo>confirm the Google Analytics retention setting</Todo>
              </li>
            </ul>
            <p className={p}>
              If you ask us to erase your details, we delete them sooner,
              unless the law requires us to keep them.
            </p>

            <Divider />

            <h2 id="your-rights" className={h2}>
              Your rights
            </h2>
            <ul className={ul}>
              <li>
                <strong>Access</strong> — ask for a summary of the personal
                data we hold about you and who we have shared it with.
              </li>
              <li>
                <strong>Correction</strong> — ask us to correct or complete
                details that are wrong or incomplete.
              </li>
              <li>
                <strong>Erasure</strong> — ask us to delete your personal data.
              </li>
              <li>
                <strong>Withdraw consent</strong> — at any time. It is as easy
                to withdraw as to give: write to us, or use cookie settings for
                cookies. Withdrawing does not affect what we did lawfully
                before you withdrew.
              </li>
              <li>
                <strong>Grievance redressal</strong> — raise a complaint with
                us (see below).
              </li>
              <li>
                <strong>Nominate someone</strong> — name another person to
                exercise these rights for you if you die or cannot act for
                yourself.
              </li>
            </ul>
            <p className={p}>
              To use any of these rights, email{" "}
              <a href={`mailto:${privacyRequestEmail}`} className={link}>
                {privacyRequestEmail}
              </a>{" "}
              with the subject &ldquo;Privacy request&rdquo; and tell us what
              you would like. We may ask you to confirm who you are before we
              act, and we will respond within the time the law requires.
            </p>

            <Divider />

            <h2 id="grievance" className={h2}>
              Grievance officer
            </h2>
            <p className={p}>
              If you have a complaint about how we handle your personal data,
              contact our grievance officer first:
            </p>
            <ul className={ul}>
              <li>
                <strong>Name and designation:</strong>{" "}
                {c.grievanceOfficerName ?? (
                  <Todo>name and designation of the grievance officer</Todo>
                )}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${privacyRequestEmail}`} className={link}>
                  {privacyRequestEmail}
                </a>
              </li>
              <li>
                <strong>Address:</strong> {c.registeredAddress}
              </li>
            </ul>
            <p className={p}>
              If you are not satisfied with our response, you may complain to
              the Data Protection Board of India.
            </p>

            <Divider />

            <h2 id="children" className={h2}>
              Children
            </h2>
            <p className={p}>
              Our services are for businesses and adults. We do not knowingly
              collect personal data from anyone under 18. If you believe a
              child has sent us their details, email us and we will delete
              them. If we ever need to process a child&apos;s data, we will
              first obtain verifiable consent from a parent or lawful guardian.
            </p>

            <Divider />

            <h2 id="security" className={h2}>
              Security and breaches
            </h2>
            <p className={p}>
              We take reasonable steps to protect your data, including serving
              this website over HTTPS and keeping the credentials our website
              uses out of its code. If a personal data breach affects your
              data, we will tell you and the Data Protection Board of India in
              the way the law requires.
            </p>

            <Divider />

            <h2 id="changes" className={h2}>
              Changes to this policy
            </h2>
            <p className={p}>
              When we change this policy we update the date and version number
              at the top of this page. This is version {c.policyVersion},
              published on {c.lastUpdated}.
            </p>

            <Divider />

            <h2 id="contact" className={h2}>
              Contact
            </h2>
            <p className={p}>
              Questions about privacy? Email{" "}
              <a href={`mailto:${c.contactEmail}`} className={link}>
                {c.contactEmail}
              </a>{" "}
              or call {c.contactPhone}.
            </p>
          </motion.div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Also see:{" "}
          <Link href="/terms" className="font-medium text-[#1e40af] hover:underline">
            Terms of Service →
          </Link>
        </p>
      </div>
    </main>
  );
}
