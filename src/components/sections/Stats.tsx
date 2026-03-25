"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle } from "lucide-react";

type StatItem =
  | { label: string; target: number; suffix: string }
  | { label: string; raw: string };

const stats: StatItem[] = [
  { label: "Experts", target: 50, suffix: "+" },
  { label: "Success Rate", target: 98, suffix: "%" },
  { label: "Cost Saving", target: 40, suffix: "%" },
  { label: "Available", raw: "24/7" },
  { label: "Modern Stack", target: 100, suffix: "%" },
  { label: "Projects Done", target: 5000, suffix: "+" },
];

function CountCell({
  target,
  suffix,
  raw,
}: {
  target?: number;
  suffix?: string;
  raw?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(raw ?? "0");

  useEffect(() => {
    if (raw || target === undefined || !isInView) return;
    const c = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix ?? ""}`),
    });
    return () => c.stop();
  }, [isInView, target, suffix, raw]);

  return (
    <div ref={ref} className="text-4xl font-bold text-[#111827] tabular-nums">
      {display}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-10 md:py-14 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-4xl">
          Why Choose Grox Media
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#6b7280]">
          We Don&apos;t Just Code, We Create Success
        </p>
        <div className="mt-10 gap-2 md:gap-4  pb-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:pb-0 hide-scrollbar">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="min-w-[140px] flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm md:min-w-0"
            >
              {"raw" in s ? (
                <div className="text-2xl sm:text-3xl font-bold text-[#111827]">{s.raw}</div>
              ) : (
                <CountCell target={s.target} suffix={s.suffix} />
              )}
              <p className="mt-2 text-sm text-[#6b7280]">{s.label}</p>
              <p className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-medium text-emerald-600">
                <CheckCircle className="h-3.5 w-3.5" />
                Guaranteed
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
