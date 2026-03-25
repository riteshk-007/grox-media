"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  question: string;
  answer: string;
  accent?: "blue" | "orange";
};

export default function AccordionItem({
  question,
  answer,
  accent = "blue",
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const bar =
    accent === "blue"
      ? "bg-groxBlue"
      : "bg-groxOrange";

  return (
    <div className="mb-3 overflow-hidden rounded-xl border border-gray-100 bg-white/80">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-3 p-4 text-left"
      >
        <span className={cn("mt-1.5 h-10 w-1 shrink-0 rounded-full", bar)} />
        <span className="flex-1 font-semibold text-[#111827]">{question}</span>
        <ChevronDown
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 text-gray-400 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-50 px-4 pb-4 pl-[2.25rem] pr-4 text-[#6b7280] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
