"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { FAQ_ITEMS } from "@/components/shared/Faq";

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <SectionBadge>FAQs</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-4xl font-extrabold text-[#111827] md:text-5xl lg:text-6xl"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-500"
          >
            Find answers to common questions about our services, process, and
            technologies.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="text-3xl font-extrabold leading-tight text-[#111827] md:text-4xl">
              Got Questions?
              <br />
              <span className="text-[#ea580c]">We&apos;ve Got Answers.</span>
            </h2>
            <div className="my-6 h-1 w-16 rounded-full bg-[#1e40af]" />
            <p className="text-gray-500">
              Can&apos;t find what you&apos;re looking for? Feel free to reach
              out to our team.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full border-2 border-[#1e40af] px-6 py-3 font-semibold text-[#1e40af] transition-all hover:bg-[#1e40af] hover:text-white"
            >
              Contact Us →
            </Link>
          </motion.div>

          <div className="lg:col-span-2">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.4) }}
                  className={`mb-4 overflow-hidden rounded-2xl border bg-white shadow-sm transition-all ${isOpen ? "border-blue-100 shadow-md" : "border-gray-100"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left hover:border-gray-200"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-4">
                      <span
                        className={`w-1 shrink-0 rounded-full bg-[#1e40af] transition-all ${isOpen ? "h-10" : "h-6"
                          }`}
                      />
                      <span className="text-base font-semibold text-[#111827]">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-50 px-6 pb-5">
                          <p className="ml-0.5 border-l-2 border-gray-100 pl-5 leading-relaxed text-gray-500">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center gap-4 bg-gray-50/50 py-16 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-[#111827]">
              Still Have Questions?
            </h3>
            <p className="mt-2 text-gray-500">
              We&apos;re here to help. Reach out to our team anytime.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:+919266806477"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1e40af] px-6 py-3 font-semibold text-[#1e40af] transition hover:bg-[#1e40af]/5"
            >
              <Phone className="h-4 w-4" />
              Call Us: +91 92668 06477
            </a>
            <a
              href="mailto:groxmedia55@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e40af] px-6 py-3 font-semibold text-white transition hover:bg-[#1e3a8a]"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
