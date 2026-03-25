"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
};

export default function PageHero({
  badge,
  title,
  subtitle,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-gray-100 bg-white/60 py-16 md:py-24",
        className
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-400/20 via-groxOrange/10 to-groxBlue/10 blur-3xl opacity-40" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <SectionBadge>{badge}</SectionBadge>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[#111827] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-2xl text-lg leading-relaxed text-[#6b7280]">
              {subtitle}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
