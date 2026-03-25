"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const toc = [
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use-your-data", label: "How we use your data" },
  { id: "third-party-services", label: "Third-party services" },
  { id: "your-choices", label: "Your choices" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
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
            Last updated: March 2026
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
            <h2
              id="information-we-collect"
              className="scroll-mt-32 text-xl font-bold text-[#111827] first:mt-0"
            >
              Information we collect
            </h2>
            <p className="mb-8 mt-4 leading-relaxed text-gray-600">
              We collect only the data you give us directly — for example,
              contact info you submit through forms (name, email, phone,
              message). We don&apos;t collect payment information on this site.
            </p>

            <div className="my-8 border-b border-gray-100" />

            <h2
              id="how-we-use-your-data"
              className="scroll-mt-32 text-xl font-bold text-[#111827]"
            >
              How we use your data
            </h2>
            <p className="mb-8 mt-4 leading-relaxed text-gray-600">
              We use contact information to reply to your questions, provide
              estimates, and communicate about projects. We may save anonymous
              analytics to understand site usage and improve the product.
            </p>

            <div className="my-8 border-b border-gray-100" />

            <h2
              id="third-party-services"
              className="scroll-mt-32 text-xl font-bold text-[#111827]"
            >
              Third-party services
            </h2>
            <p className="mb-8 mt-4 leading-relaxed text-gray-600">
              We may use third-party services (analytics, hosting, chat) that
              may collect limited technical data. We choose trusted providers
              and don&apos;t share personal data except to deliver services you
              request.
            </p>

            <div className="my-8 border-b border-gray-100" />

            <h2 id="your-choices" className="scroll-mt-32 text-xl font-bold text-[#111827]">
              Your choices
            </h2>
            <p className="mb-8 mt-4 leading-relaxed text-gray-600">
              You can ask us to remove your data by contacting
              groxmedia55@gmail.com. We&apos;ll respond quickly and delete your
              personal information where required.
            </p>

            <div className="my-8 border-b border-gray-100" />

            <h2 id="contact" className="scroll-mt-32 text-xl font-bold text-[#111827]">
              Contact
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              If you have questions about privacy, email us at{" "}
              <a
                href="mailto:groxmedia55@gmail.com"
                className="font-semibold text-[#1e40af] underline hover:no-underline"
              >
                groxmedia55@gmail.com
              </a>
              .
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
