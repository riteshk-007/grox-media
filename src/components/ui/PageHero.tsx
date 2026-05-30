"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import { cn } from "@/lib/utils";
import { fadeUp, defaultTransition } from "@/lib/motion";

type PageHeroVariant = "services" | "portfolio" | "about" | "contact" | "blog" | "faq" | "default";

type PageHeroProps = {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  variant?: PageHeroVariant;
};

const gradients: Record<PageHeroVariant, string> = {
  services:  "from-blue-600/15 via-groxBlue/8 to-transparent",
  portfolio: "from-groxOrange/15 via-amber-400/8 to-transparent",
  about:     "from-emerald-500/15 via-teal-400/8 to-transparent",
  contact:   "from-violet-500/15 via-purple-400/8 to-transparent",
  blog:      "from-rose-500/15 via-pink-400/8 to-transparent",
  faq:       "from-amber-500/15 via-yellow-400/8 to-transparent",
  default:   "from-amber-400/20 via-groxOrange/10 to-groxBlue/10",
};

export default function PageHero({
  badge,
  title,
  subtitle,
  className,
  variant = "default",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-gray-100 bg-white/60 py-16 md:py-24",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br blur-3xl opacity-50",
          gradients[variant]
        )}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition={defaultTransition}
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
