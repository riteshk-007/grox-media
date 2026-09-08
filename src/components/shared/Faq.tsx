"use client";

import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import AccordionItem from "@/components/ui/AccordionItem";
import { FAQ_ITEMS, CATEGORIES, type FaqItem } from "@/data/faqs";

// Re-exported so existing imports from this module keep working.
export { FAQ_ITEMS, CATEGORIES };
export type { FaqItem };


type FaqProps = {
  limit?: number;
};

const Faq: React.FC<FaqProps> = ({ limit }) => {
  const [showAll] = useState(false);
  const router = useRouter();

  const faqs = useMemo(() => FAQ_ITEMS, []);

  const hasLimit = typeof limit === "number" && limit > 0;
  const initialCount = hasLimit ? Math.min(limit!, faqs.length) : faqs.length;

  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialCount);

  const shouldShowButton = hasLimit && limit! < faqs.length && !showAll;

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12">
      <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-[#111827]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-0">
        {visibleFaqs.map((f, idx) => (
          <AccordionItem
            key={f.question}
            question={f.question}
            answer={f.answer}
            accent={idx % 2 === 0 ? "blue" : "orange"}
          />
        ))}
      </div>

      {shouldShowButton ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => router.push("/faqs")}
            className="inline-block rounded-full bg-groxBlue px-8 py-4 text-lg sm:text-base font-medium text-white transition hover:bg-blue-800"
            aria-label="View all FAQs"
          >
            View all FAQs
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default Faq;
