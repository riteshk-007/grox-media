"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AccordionItem from "@/components/ui/AccordionItem";
import { FAQ_ITEMS } from "@/components/shared/Faq";

const preview = FAQ_ITEMS.slice(0, 5);

export default function FAQPreview() {
  return (
    <section className="py-12 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[#6b7280]">
              Find quick answers about our services, process, and technologies.
            </p>
            <Link
              href="/faqs"
              className="mt-6 inline-flex text-sm font-semibold text-groxBlue hover:underline"
            >
              View all FAQs →
            </Link>
          </motion.div>
          <div>
            {preview.map((f, i) => (
              <AccordionItem
                key={f.question}
                question={f.question}
                answer={f.answer}
                accent={i % 2 === 0 ? "blue" : "orange"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
