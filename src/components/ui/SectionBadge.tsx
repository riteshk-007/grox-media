"use client";

import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-500",
        className
      )}
    >
      {children}
    </div>
  );
}
