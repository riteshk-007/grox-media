"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const testimonials = [
  {
    name: "Dinesh Verma",
    company: "Monark FX",
    role: "Founder & CEO",
    project: "Financial Services Platform",
    stars: 5,
    quote:
      "Grox Media built our entire trading platform from scratch — Razorpay integration, live Zoom sessions, client dashboards. Everything worked on day one. The attention to detail on the payment flows was exceptional. Couldn't have asked for a better partner.",
  },
  {
    name: "Sanjeev Kumar",
    company: "EDAWS",
    role: "Founder",
    project: "Business Website",
    stars: 5,
    quote:
      "Fast turnaround, clean code, and they actually listened to what we needed. No unnecessary back-and-forth. The site went live ahead of schedule and has been running without issues ever since.",
  },
  {
    name: "Nitesh",
    company: "Nifty Nitesh",
    role: "Founder",
    project: "Brand & Web",
    stars: 5,
    quote:
      "These guys know their craft. They handled everything — design, development, deployment. Post-launch support was quick whenever I had questions. Genuinely reliable team.",
  },
  {
    name: "Rohit Agarwal",
    company: "Aashey",
    role: "Founder",
    project: "Ecommerce Store",
    stars: 5,
    quote:
      "We needed a premium ecommerce experience for our ghee brand and Grox Media delivered exactly that. The product pages, cart flow, and mobile experience are all top-notch. Sales have been strong since launch.",
  },
  {
    name: "Priya Sharma",
    company: "Nutry Bites",
    role: "Co-founder",
    project: "Ecommerce Platform",
    stars: 5,
    quote:
      "Our makhana brand needed a website that felt fresh and trustworthy. The team nailed the design on the first revision. The checkout process is smooth and our customers love it.",
  },
  {
    name: "Vikram Mehra",
    company: "SLJ Solutions",
    role: "Director",
    project: "Interior Design Website",
    stars: 5,
    quote:
      "The portfolio website they built for us genuinely impresses clients before we even walk into a meeting. The admin panel makes updating projects effortless. Great investment.",
  },
  {
    name: "Dr. Ananya Bose",
    company: "Panacea Medcare",
    role: "Medical Director",
    project: "Healthcare Website",
    stars: 5,
    quote:
      "Building a multilingual healthcare website — English, French, and Arabic — is not simple. Grox Media handled the i18n implementation perfectly. The site looks professional and performs well globally.",
  },
  {
    name: "Arjun Shrestha",
    company: "Shrestha Academy",
    role: "Founder & Director",
    project: "EdTech Platform",
    stars: 5,
    quote:
      "Our MERN stack platform handles thousands of students — online courses, e-books, offline class management, progress tracking. Grox Media architected it all cleanly. Scalable, stable, and exactly what we envisioned.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dot, setDot] = useState(0);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 16;
    const w = (card?.offsetWidth ?? 280) + gap;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector<HTMLElement>("[data-card]");
      const gap = 16;
      const w = (card?.offsetWidth ?? 280) + gap;
      const i = Math.round(el.scrollLeft / w);
      setDot(Math.min(testimonials.length - 1, Math.max(0, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-14 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        {/* Heading */}
        <div className="text-center">
          <SectionBadge>Client Testimonials</SectionBadge>
          <h2 className="mt-4 text-2xl font-extrabold text-[#111827] sm:text-3xl md:text-4xl">
            Happy Clients Testimonials
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#6b7280] sm:text-base">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience with Grox Media.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-10">
          {/* Fade edges — mobile only */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent lg:hidden" />

          <div
            ref={scrollRef}
            className={[
              /* mobile/tablet: horizontal scroll */
              "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              /* desktop: switch to grid */
              "lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 xl:grid-cols-4",
              "lg:[scrollbar-width:auto]",
            ].join(" ")}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                data-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={[
                  /* sizing */
                  "w-[calc(85vw-16px)] max-w-[340px] flex-none snap-center",
                  /* desktop overrides */
                  "lg:w-full lg:max-w-none lg:flex-auto",
                  /* card styles */
                  "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6",
                  /* ← keep height flexible so text never clips */
                  "flex flex-col",
                ].join(" ")}
              >
                {/* Top row — quote icon + stars */}
                <div className="flex items-start justify-between gap-2">
                  <Quote className="h-6 w-6 flex-shrink-0 text-groxOrange/30 sm:h-7 sm:w-7" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star key={si} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Project badge */}
                <span className="mt-3 inline-block self-start rounded-full bg-groxBlue/8 px-2.5 py-0.5 text-[11px] font-semibold text-groxBlue">
                  {t.project}
                </span>

                {/* Quote text */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#374151] sm:text-base">
                  &quot;{t.quote}&quot;
                </p>

                <div className="my-4 h-px bg-gray-100" />

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-groxBlue text-sm font-bold text-white sm:h-11 sm:w-11 sm:text-base">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-[#111827] text-sm sm:text-base">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-[#6b7280] sm:text-sm">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav dots + arrows — mobile/tablet only */}
          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm active:scale-95 transition-transform"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${i === dot ? "w-5 bg-groxBlue" : "w-2 bg-gray-200"
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm active:scale-95 transition-transform"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}