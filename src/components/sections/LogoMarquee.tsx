"use client";

import type { TechItem } from "@/data/technologies";
import { marqueeRow1, marqueeRow2, marqueeRow3 } from "@/data/technologies";

function Row({
  items,
  direction,
}: {
  items: TechItem[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`flex w-max shrink-0 gap-10 will-change-transform md:gap-12 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
    >
      {doubled.map((item, i) => (
        <div
          key={`${item.name}-${i}`}
          className="flex shrink-0 items-center gap-2 opacity-40 transition hover:opacity-70"
        >
          <item.Icon className="h-8 w-8 text-gray-700" aria-hidden />
          <span className="whitespace-nowrap text-sm font-semibold text-gray-600">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="w-full max-w-full overflow-x-hidden border-y border-gray-100 bg-white/50 py-8">
      <div className="relative mx-auto w-full max-w-full space-y-5 md:space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="w-full overflow-x-hidden">
          <Row items={marqueeRow1} direction="left" />
        </div>
        <div className="w-full overflow-x-hidden">
          <Row items={marqueeRow2} direction="right" />
        </div>
        <div className="w-full overflow-x-hidden">
          <Row items={marqueeRow3} direction="left" />
        </div>
      </div>
    </section>
  );
}
