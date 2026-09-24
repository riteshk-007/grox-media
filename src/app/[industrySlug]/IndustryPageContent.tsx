"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Plug,
  LayoutList,
  Target,
  XCircle,
  TrendingUp,
  Smartphone,
  Search,
  MessageCircle,
  KeyRound,
  Clock,
  BadgeCheck,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import GetStartedDialog from "@/components/shared/GetStartedDialog";
import { industryPages, getIndustryPage } from "@/data/industryPages";
import { cn } from "@/lib/utils";

// No scroll-triggered entrance animations on this page: content must be
// visible immediately (fast scrolling left sections looking empty, and
// hidden-until-scrolled text hurts LCP).

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-groxBlue focus-visible:ring-offset-2";

const h2Class =
  "mt-4 text-balance text-2xl !font-normal tracking-tight text-[#111827] sm:text-3xl md:text-4xl";
const bodyClass = "text-base leading-relaxed text-[#4b5563] md:text-[17px] md:leading-[1.85]";
const cardClass = "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm";

const trustPoints = [
  { Icon: Smartphone, label: "Mobile-first design" },
  { Icon: Search, label: "SEO-ready structure" },
  { Icon: MessageCircle, label: "WhatsApp & call buttons" },
  { Icon: KeyRound, label: "You own the website" },
];

const whyUsPoints = [
  {
    Icon: MapPin,
    title: "Delhi NCR team",
    description: "Registered office in Sector 90, Noida, serving clients across Gurgaon, Delhi, and the NCR.",
  },
  {
    Icon: MessageSquare,
    title: "Clear scoping first",
    description: "A free discovery call, then a written proposal with scope, timeline, and pricing before work starts.",
  },
  {
    Icon: Clock,
    title: "24-hour email response",
    description: "Reachable Monday to Saturday, 10 AM – 7 PM IST, with a 24-hour response time on email.",
  },
  {
    Icon: ShieldCheck,
    title: "NDA on request",
    description: "We sign NDAs before project discussions, and all deliverables belong to you on final payment.",
  },
];

const processSteps = [
  { title: "Free consultation", description: "We understand your business, customers, and what the website must achieve — bookings, calls, orders, or enquiries." },
  { title: "Proposal & sitemap", description: "You receive a page list, feature list, timeline, and fixed quote before any work begins." },
  { title: "Design", description: "Custom homepage and inner-page designs in your brand style, revised until you approve." },
  { title: "Development & content", description: "Mobile-first build with SEO setup, forms, WhatsApp, and integrations, plus content placement." },
  { title: "Launch & training", description: "Testing on real devices, launch, Google Search Console setup, and admin-panel training for your team." },
];

function SectionHeader({ badge, title, id, center = true }: { badge: string; title: string; id: string; center?: boolean }) {
  return (
    <div className={cn(center && "mx-auto max-w-2xl text-center")}>
      <SectionBadge>{badge}</SectionBadge>
      <h2 id={id} className={h2Class}>{title}</h2>
    </div>
  );
}

export default function IndustryPageContent({ slug }: { slug: string }) {
  const page = getIndustryPage(slug);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!page) return null;
  const { industry, location, depth } = page;
  const { extras } = page;

  const otherLocation = industryPages.find(
    (p) => p.industry.key === industry.key && p.location.key !== location.key
  );
  const locPages = industryPages.filter((p) => p.location.key === location.key);
  const selfIdx = locPages.findIndex((p) => p.slug === page.slug);
  // Nine neighbouring industries (wrapping around) keep the list short while
  // every page still receives internal links from several others.
  const sameLocation = Array.from({ length: Math.min(9, locPages.length - 1) }, (_, i) =>
    locPages[(selfIdx + 1 + i) % locPages.length]
  );

  const featureTitles = industry.features.map((f) => f.title);
  const packages = [
    {
      name: "Starter",
      price: "Budget-friendly start",
      note: `For new ${industry.name.toLowerCase()} businesses that need a professional presence fast.`,
      highlight: false,
      items: [
        `Up to ${Math.min(6, industry.pages.length)} pages`,
        "Mobile-first custom design",
        "Enquiry form + WhatsApp & call buttons",
        "Basic on-page SEO & Google Maps",
        featureTitles[0],
      ],
    },
    {
      name: "Growth",
      price: "Best value",
      note: `Our most common choice for established ${industry.name.toLowerCase()} businesses in ${location.name}.`,
      highlight: true,
      items: [
        `All key pages (${industry.pages.slice(0, 4).join(", ")} and more)`,
        ...featureTitles.slice(1, 4),
        "Admin panel to update content",
        "Full on-page SEO + schema markup",
      ],
    },
    {
      name: "Complete",
      price: "All-in-one growth",
      note: "For businesses that want the website plus ongoing marketing.",
      highlight: false,
      items: [
        "Everything in Growth",
        ...featureTitles.slice(4, 7),
        `Integrations: ${industry.integrations.slice(0, 3).join(", ")}`,
        "Google Business Profile optimization",
        "Monthly SEO or ads management (optional)",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-groxBlue/10 via-groxOrange/10 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400">
            <Link href="/" className={cn("rounded transition hover:text-groxBlue", focusRing)}>Home</Link>
            <span aria-hidden>/</span>
            <Link href="/services" className={cn("rounded transition hover:text-groxBlue", focusRing)}>Services</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-gray-600">{page.title}</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div className="min-w-0">
              <SectionBadge>
                {industry.name} Websites · {location.name}
              </SectionBadge>
              <h1 className="mt-5 text-balance break-words text-3xl !font-normal leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-5xl md:leading-[1.15]">
                {page.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4b5563] md:text-lg md:leading-relaxed">
                {page.intro}
              </p>
              <p className="mt-4 flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-groxOrange" aria-hidden />
                Serving {industry.audience} across {location.fullName}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(true)}
                  className={cn(
                    "group inline-flex items-center justify-center gap-2 rounded-full bg-groxBlue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200",
                    "hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-xl",
                    focusRing
                  )}
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </button>
                <a
                  href="tel:+919266806477"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#111827] transition-all duration-200",
                    "hover:border-groxBlue hover:bg-groxBlue/5 hover:text-groxBlue",
                    focusRing
                  )}
                >
                  Call +91 92668 06477
                </a>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
              <Image
                src={`/industries/${page.slug}.webp`}
                alt={`${page.title} — Grox Media ${industry.name.toLowerCase()} website on laptop and mobile`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Trust strip */}
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {trustPoints.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-3 py-3 shadow-sm sm:px-4 sm:py-3.5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-groxOrange/10 text-groxOrange">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-xs font-medium text-[#111827] sm:text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ WHY + AT A GLANCE ═══ */}
      <section className="py-10 md:py-14" aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-12 lg:px-8">
          <div className="min-w-0">
            <SectionHeader badge="Why It Matters" title={industry.whyHeading} id="why-heading" center={false} />
            <div className="mt-6 space-y-5">
              {industry.why.map((para) => (
                <p key={para.slice(0, 40)} className={bodyClass}>{para}</p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-groxBlue/15 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-md md:p-7 lg:sticky lg:top-28">
            <h3 className="text-lg !font-normal text-[#111827]">At a glance</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-groxBlue" aria-hidden />
                <div>
                  <dt className="font-semibold text-[#111827]">Typical timeline</dt>
                  <dd className="text-[#6b7280]">3–5 weeks, depending on pages and features</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-groxBlue" aria-hidden />
                <div>
                  <dt className="font-semibold text-[#111827]">Affordable pricing</dt>
                  <dd className="text-[#6b7280]">Best price for your budget — clear, fixed quote after a free call</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-groxBlue" aria-hidden />
                <div>
                  <dt className="font-semibold text-[#111827]">Service area</dt>
                  <dd className="text-[#6b7280]">{location.fullName} and nearby areas</dd>
                </div>
              </div>
            </dl>
            <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
              {featureTitles.slice(0, 4).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#374151]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-groxOrange" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className={cn(
                "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-groxOrange px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-orange-600",
                focusRing
              )}
            >
              Get My Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </aside>
        </div>
      </section>

      {/* ═══ PAGE-SPECIFIC LOCAL DEPTH ═══ */}
      <section className="bg-gray-50/70 py-10 md:py-14" aria-labelledby="local-depth-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:px-8">
          <div className="min-w-0">
            <SectionHeader badge={`${industry.name} · ${location.name}`} title={depth.heading} id="local-depth-heading" center={false} />
            <div className="mt-6 space-y-5">
              {depth.paragraphs.map((para) => (
                <p key={para.slice(0, 40)} className={bodyClass}>{para}</p>
              ))}
            </div>
          </div>
          <div className="grid content-start gap-4">
            {depth.points.map((pt) => (
              <div key={pt.title} className={cn(cardClass, "flex gap-4")}>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
                  <Target className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base !font-normal text-[#111827]">{pt.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{pt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-10 md:py-14" aria-labelledby="features-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Features" title={`Features We Build Into ${industry.name} Websites`} id="features-heading" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {industry.features.map((f) => (
              <article key={f.title} className={cn(cardClass, "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg")}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-groxOrange/10 text-groxOrange">
                  <Check className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base !font-normal text-[#111827]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMMON MISTAKES ═══ */}
      <section className="bg-gray-50/70 py-10 md:py-14" aria-labelledby="mistakes-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Avoid These"
            title={`Common Mistakes on ${industry.name} Websites — and How We Avoid Them`}
            id="mistakes-heading"
          />
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
            {extras.mistakes.map((m) => (
              <div key={m.title} className={cn(cardClass, "flex gap-4")}>
                <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-500" aria-hidden />
                <div className="min-w-0">
                  <h3 className="text-base !font-normal text-[#111827]">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAGES & INTEGRATIONS ═══ */}
      <section className="py-10 md:py-14" aria-labelledby="pages-heading">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
              <LayoutList className="h-5 w-5" aria-hidden />
            </span>
            <h2 id="pages-heading" className="mt-4 text-2xl !font-normal tracking-tight text-[#111827] sm:text-3xl">
              Typical Pages on a {industry.name} Website
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {industry.pages.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#374151]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-groxOrange" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[#6b7280]">
              Every page list is tailored during scoping — we add or remove pages based on what your business actually needs.
            </p>
          </div>
          <div className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
              <Plug className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-4 text-2xl !font-normal tracking-tight text-[#111827] sm:text-3xl">Integrations</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {industry.integrations.map((it) => (
                <li key={it} className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-700">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ PACKAGES ═══ */}
      <section className="bg-gray-50/70 py-10 md:py-14" aria-labelledby="packages-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Packages"
            title={`Affordable ${industry.name} Website Packages in ${location.name}`}
            id="packages-heading"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#6b7280] md:text-base">
            Get a professional {industry.name.toLowerCase()} website at the best price for your budget. After a free consultation we share a clear, fixed quote — no hidden charges, no surprises.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-white p-6 shadow-sm md:p-7",
                  pkg.highlight ? "border-groxOrange shadow-lg ring-1 ring-groxOrange/30" : "border-gray-100"
                )}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-groxOrange px-3 py-1 text-xs font-semibold text-white">
                    Most chosen
                  </span>
                )}
                <h3 className="text-xl !font-normal text-[#111827]">{pkg.name}</h3>
                <p className="mt-1 text-2xl font-semibold text-groxBlue">{pkg.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">{pkg.note}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-gray-100 pt-5">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[#374151]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-groxOrange" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(true)}
                  className={cn(
                    "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
                    pkg.highlight
                      ? "bg-groxOrange text-white hover:bg-orange-600"
                      : "border-2 border-groxBlue text-groxBlue hover:bg-groxBlue hover:text-white",
                    focusRing
                  )}
                >
                  Get the best price
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCAL AREAS ═══ */}
      <section className="py-10 md:py-14" aria-labelledby="local-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:px-8">
          <div className="min-w-0">
            <SectionHeader badge={location.fullName} title={location.localHeading} id="local-heading" center={false} />
            <div className="mt-6 space-y-5">
              {location.local.map((para) => (
                <p key={para.slice(0, 40)} className={bodyClass}>{para}</p>
              ))}
            </div>
          </div>
          <div className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-7">
            <h3 className="text-lg !font-normal text-[#111827]">
              Areas we serve in and around {location.name}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {location.areas.map((a) => (
                <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-700">
                  <MapPin className="h-3.5 w-3.5 text-groxOrange" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="bg-gray-50/70 py-10 md:py-14" aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title={`How We Build Your ${industry.name} Website`} id="process-heading" />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-5">
            {processSteps.map((step, idx) => (
              <li key={step.title} className={cn(cardClass, "flex flex-col")}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-groxBlue text-sm font-bold text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base !font-normal text-[#111827]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ GROWTH AFTER LAUNCH ═══ */}
      <section className="py-10 md:py-14" aria-labelledby="growth-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="After Launch"
            title={`How to Get More Customers for Your ${industry.name} Business in ${location.name}`}
            id="growth-heading"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#6b7280] md:text-base">
            A website is the foundation. These are the channels that usually bring the most enquiries once it is live — and our team can run them for you.
          </p>
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
            {extras.growth.map((g) => (
              <div key={g.title} className={cardClass}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <TrendingUp className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base !font-normal text-[#111827]">{g.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{g.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm">
            <Link href={industry.relatedService.href} className={cn("rounded font-semibold text-groxBlue hover:underline", focusRing)}>
              Explore our {industry.relatedService.label.toLowerCase()} service →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══ WHY GROX MEDIA ═══ */}
      <section className="bg-gray-50/70 py-10 md:py-14" aria-labelledby="why-us-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Why Grox Media" title={`Why ${location.name} Businesses Work With Grox Media`} id="why-us-heading" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {whyUsPoints.map(({ Icon, title, description }) => (
              <div key={title} className={cn(cardClass, "text-center")}>
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base !font-normal text-[#111827]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ — answers stay in the DOM so they remain crawlable ═══ */}
      <section className="py-10 md:py-14" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="FAQs" title={`${page.title} — FAQs`} id="faq-heading" />
          <div className="mt-8 space-y-3 md:mt-10">
            {page.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.question}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen ? "border-groxBlue/30 shadow-lg" : "border-gray-100 shadow-sm"
                  )}
                >
                  <h3>
                    <button
                      id={`faq-button-${i}`}
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className={cn("flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6", focusRing)}
                    >
                      <span className="text-sm font-normal text-[#111827] sm:text-base">{faq.question}</span>
                      <ChevronDown
                        aria-hidden
                        className={cn("h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300", isOpen && "rotate-180 text-groxBlue")}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-gray-50 px-5 pb-5 pt-4 text-sm leading-relaxed text-gray-500 sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ RELATED — internal links between the industry × location pages ═══ */}
      <section className="bg-gray-50/70 py-10 md:py-14" aria-labelledby="related-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Explore More" title={`More Website Designing Services in ${location.name}`} id="related-heading" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sameLocation.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className={cn(
                    "group flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 text-sm text-[#111827] shadow-sm transition-all hover:border-groxBlue/30 hover:text-groxBlue hover:shadow-md",
                    focusRing
                  )}
                >
                  {p.title}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {otherLocation && (
              <Link href={`/${otherLocation.slug}`} className={cn("rounded font-semibold text-groxBlue hover:underline", focusRing)}>
                {otherLocation.title}
              </Link>
            )}
            <Link href={location.cityPage.href} className={cn("rounded font-semibold text-groxBlue hover:underline", focusRing)}>
              {location.cityPage.label}
            </Link>
            <Link href={industry.relatedService.href} className={cn("rounded font-semibold text-groxBlue hover:underline", focusRing)}>
              {industry.relatedService.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-[#1a1a2e] py-12 md:py-16" aria-labelledby="cta-heading">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="cta-heading" className="text-balance text-2xl !font-normal !text-white sm:text-3xl md:text-4xl">
            Ready to Launch Your {industry.name} Website in {location.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Book a free consultation. We&apos;ll suggest the right pages and features and share a fixed quote with a timeline.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#ea580c] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <GetStartedDialog
        show={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        formName={`industry_${page.slug}_enquiry`}
        serviceName={page.title}
      />
    </main>
  );
}
