"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { FAQ_ITEMS } from "@/components/shared/Faq";
import { cn } from "@/lib/utils";

// One from each key category for home preview
const PREVIEW_QUESTIONS = [
  "What technologies do you use to build websites?",
  "What does your SEO service include?",
  "What graphic design services do you offer?",
  "What types of videos do you edit?",
  "How long does it take to build a website?",
  "How do I start a project with Grox Media?",
];

const preview = PREVIEW_QUESTIONS
  .map((q) => FAQ_ITEMS.find((f) => f.question === q))
  .filter(Boolean) as typeof FAQ_ITEMS;

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <SectionBadge>FAQs</SectionBadge>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#6b7280]">
            Quick answers about our websites, SEO, design, and video services.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {preview.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200",
                  isOpen ? "border-groxBlue/30 shadow-md" : "border-gray-100"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <span className={cn(
                      "w-1 shrink-0 rounded-full transition-all duration-200",
                      isOpen ? "h-8 bg-groxOrange" : "h-5 bg-groxBlue"
                    )} />
                    <span className="text-sm font-semibold text-[#111827] sm:text-base">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300",
                    isOpen && "rotate-180 text-groxBlue"
                  )} />
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
                      <div className="border-t border-gray-50 px-5 pb-4 pt-3 sm:px-6">
                        <p className="border-l-2 border-groxOrange/40 pl-4 text-sm leading-relaxed text-gray-500">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-groxBlue px-6 py-2.5 text-sm font-semibold text-groxBlue transition hover:bg-groxBlue hover:text-white"
          >
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
