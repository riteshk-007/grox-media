"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { FAQ_ITEMS, CATEGORIES } from "@/components/shared/Faq";
import { cn } from "@/lib/utils";

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === activeCategory);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-groxBlue/15 to-groxOrange/15 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
            <SectionBadge>FAQs</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-2xl sm:text-4xl font-extrabold text-[#111827] md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-500"
          >
            Everything you need to know about our services — websites, SEO, graphic design, and video editing.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">

        {/* Category filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-150",
                activeCategory === cat
                  ? "border-groxBlue bg-groxBlue text-white shadow-sm"
                  : "border-gray-200 bg-white text-gray-500 hover:border-groxBlue hover:text-groxBlue"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200",
                    isOpen ? "border-groxBlue/30 shadow-md" : "border-gray-100"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <span className={cn(
                        "w-1 shrink-0 rounded-full transition-all duration-200",
                        isOpen ? "h-10 bg-groxOrange" : "h-5 bg-groxBlue"
                      )} />
                      <span className="text-sm font-semibold text-[#111827] sm:text-base">
                        {item.question}
                      </span>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="hidden rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-500 sm:inline">
                        {item.category}
                      </span>
                      <ChevronDown className={cn(
                        "h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300",
                        isOpen && "rotate-180 text-groxBlue"
                      )} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-50 px-5 pb-5 pt-4 sm:px-6">
                          <p className="border-l-2 border-groxOrange/40 pl-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-groxBlue to-blue-700 p-8 text-center text-white sm:p-10"
        >
          <h3 className="text-xl font-bold sm:text-2xl">Still Have Questions?</h3>
          <p className="mt-2 text-white/75">Our team typically responds within a few hours.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919266806477"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              +91 92668 06477
            </a>
            <a
              href="mailto:groxmedia55@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-groxBlue transition hover:bg-gray-100"
            >
              <Mail className="h-4 w-4" />
              groxmedia55@gmail.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Form →
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
