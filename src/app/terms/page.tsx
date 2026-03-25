"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const toc = [
  { id: "acceptance-of-terms", label: "Acceptance of terms" },
  { id: "use-of-content", label: "Use of content" },
  { id: "limitation-of-liability", label: "Limitation of liability" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-3 text-sm text-gray-400"
          >
            Last updated: {new Date().getFullYear()}
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
              id="acceptance-of-terms"
              className="scroll-mt-32 text-xl font-bold text-[#111827]"
            >
              Acceptance of terms
            </h2>
            <p className="mb-8 mt-4 leading-relaxed text-gray-600">
              By using the site you agree to these terms. If you don&apos;t
              agree, please don&apos;t use the site.
            </p>

            <div className="my-8 border-b border-gray-100" />

            <h2
              id="use-of-content"
              className="scroll-mt-32 text-xl font-bold text-[#111827]"
            >
              Use of content
            </h2>
            <p className="mb-8 mt-4 leading-relaxed text-gray-600">
              All content on this site is provided for informational purposes.
              You may not redistribute or republish without permission.
            </p>

            <div className="my-8 border-b border-gray-100" />

            <h2
              id="limitation-of-liability"
              className="scroll-mt-32 text-xl font-bold text-[#111827]"
            >
              Limitation of liability
            </h2>
            <p className="mb-8 mt-4 leading-relaxed text-gray-600">
              We do our best to provide accurate information, but we aren&apos;t
              liable for indirect damages. For custom work, see our agreement
              terms.
            </p>

            <div className="my-8 border-b border-gray-100" />

            <h2 id="contact" className="scroll-mt-32 text-xl font-bold text-[#111827]">
              Contact
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Questions about these terms? Email{" "}
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
          <Link
            href="/privacy"
            className="font-medium text-[#1e40af] hover:underline"
          >
            Privacy Policy →
          </Link>
        </p>
      </div>
    </main>
  );
}
