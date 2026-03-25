"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const testimonials = [
  {
    name: "Dinesh Verma",
    company: "MonarkFX",
    role: "Founder & CEO",
    quote:
      "Professional and timely delivery. The website exceeded our expectations.",
  },
  {
    name: "Sanjeev Kumar",
    company: "EDAWS",
    role: "Founder",
    quote: "Reliable partner. Smooth process and quality work guaranteed.",
  },
  {
    name: "Nitesh",
    company: "Nifty Nitesh",
    role: "Founder",
    quote: "Solid development and excellent support. Highly recommended.",
  },
  {
    name: "Rahul Sharma",
    company: "TechFlow",
    role: "CTO",
    quote:
      "Grox Media transformed our digital presence. The team is incredibly talented.",
  },
  {
    name: "Priya Patel",
    company: "DesignStudio",
    role: "Creative Director",
    quote:
      "A perfect blend of creativity and technical expertise. Loved working with them.",
  },
  {
    name: "Vikram Singh",
    company: "BrightCart",
    role: "Co-founder",
    quote:
      "Clear communication, fast iterations, and a storefront that actually converts.",
  },
  {
    name: "Ananya Mehta",
    company: "HealthFirst Clinics",
    role: "Operations Head",
    quote:
      "They made our patient portal intuitive and secure. Our team adopted it without friction.",
  },
  {
    name: "Karan Malhotra",
    company: "UrbanBuild",
    role: "Marketing Director",
    quote:
      "Campaign landing pages and tracking set up properly from day one. Rare to see that discipline.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dot, setDot] = useState(0);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = (card?.offsetWidth ?? 300) + 24;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const w = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 300;
      const i = Math.round(el.scrollLeft / (w + 24));
      setDot(Math.min(testimonials.length - 1, Math.max(0, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge>Client Testimonials</SectionBadge>
          <h2 className="mt-4 text-3xl font-extrabold text-[#111827] md:text-4xl">
            Happy Clients Testimonials
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#6b7280]">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience with Grox Media.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent md:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent md:hidden" />

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:thin] lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:auto]"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                data-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="snap-center min-w-[min(100%,300px)] flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:min-w-0 lg:w-full"
              >
                <Quote className="h-8 w-8 text-gray-200" />
                <p className="mt-4 text-lg italic leading-relaxed text-[#374151]">
                  &quot;{t.quote}&quot;
                </p>
                <div className="my-6 h-px bg-gray-100" />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-groxBlue text-lg font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#111827]">{t.name}</p>
                    <p className="text-sm text-[#6b7280]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${i === dot ? "bg-groxBlue" : "bg-gray-200"
                    }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
