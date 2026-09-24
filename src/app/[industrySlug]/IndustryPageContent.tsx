"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, MapPin, Plug, LayoutList, Target } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import GetStartedDialog from "@/components/shared/GetStartedDialog";
import { industryPages, getIndustryPage, industrySlug } from "@/data/industryPages";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-groxBlue focus-visible:ring-offset-2";

const h2Class = "mt-4 text-balance text-2xl !font-normal tracking-tight text-[#111827] sm:text-3xl md:text-4xl";

const processSteps = [
  { title: "Free consultation", description: "We understand your business, customers, and what the website must achieve — bookings, calls, orders, or enquiries." },
  { title: "Proposal & sitemap", description: "You receive a page list, feature list, timeline, and fixed quote before any work begins." },
  { title: "Design", description: "Custom homepage and inner-page designs in your brand style, revised until you approve." },
  { title: "Development & content", description: "Mobile-first build with SEO setup, forms, WhatsApp, and integrations, plus content placement." },
  { title: "Launch & training", description: "Testing on real devices, launch, Google Search Console setup, and admin-panel training for your team." },
];

export default function IndustryPageContent({ slug }: { slug: string }) {
  const page = getIndustryPage(slug);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!page) return null;
  const { industry, location } = page;

  const otherLocation = industryPages.find(
    (p) => p.industry.key === industry.key && p.location.key !== location.key
  );
  const sameLocation = industryPages.filter(
    (p) => p.location.key === location.key && p.industry.key !== industry.key
  );

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ═══ HERO — rendered without entrance animation so the H1 paints immediately ═══ */}
      <section className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-14">
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
          <div>
          <SectionBadge>
            {industry.name} Websites · {location.name}
          </SectionBadge>
          <h1 className="mt-5 text-balance text-3xl !font-normal leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-5xl md:leading-[1.15]">
            {industry.name} Website Design Company in {location.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4b5563] md:text-lg md:leading-relaxed">
            {page.intro}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4 shrink-0 text-groxOrange" aria-hidden />
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

          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
            <Image
              src={`/industries/${page.slug}.webp`}
              alt={`${page.title} by Grox Media — ${industry.name.toLowerCase()} website on laptop and mobile`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="why-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionBadge>Why It Matters</SectionBadge>
            <h2 id="why-heading" className={h2Class}>{industry.whyHeading}</h2>
            <div className="mt-6 space-y-5">
              {industry.why.map((para) => (
                <p key={para.slice(0, 40)} className="text-base leading-relaxed text-[#4b5563] md:text-[17px] md:leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAGE-SPECIFIC LOCAL DEPTH ═══ */}
      <section className="bg-gray-50/60 py-8 md:py-12" aria-labelledby="local-depth-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-4xl">
            <SectionBadge>{industry.name} · {location.name}</SectionBadge>
            <h2 id="local-depth-heading" className={h2Class}>{page.depth.heading}</h2>
            <div className="mt-6 space-y-5">
              {page.depth.paragraphs.map((para) => (
                <p key={para.slice(0, 40)} className="text-base leading-relaxed text-[#4b5563] md:text-[17px] md:leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {page.depth.points.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
                  <Target className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base !font-normal text-[#111827]">{pt.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{pt.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="features-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <SectionBadge>Features</SectionBadge>
            <h2 id="features-heading" className={h2Class}>
              Features We Build Into {industry.name} Websites
            </h2>
          </motion.div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {industry.features.map((f, i) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: "easeOut" }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-groxOrange/10 text-groxOrange">
                  <Check className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base !font-normal text-[#111827]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">{f.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAGES & INTEGRATIONS ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="pages-heading">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <motion.div {...fadeUp} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
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
          </motion.div>
          <motion.div {...fadeUp} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
              <Plug className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-4 text-2xl !font-normal tracking-tight text-[#111827] sm:text-3xl">
              Integrations
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {industry.integrations.map((it) => (
                <li key={it} className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-700">
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══ LOCAL ═══ */}
      <section className="bg-gray-50/60 py-8 md:py-12" aria-labelledby="local-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <SectionBadge>{location.fullName}</SectionBadge>
            <h2 id="local-heading" className={h2Class}>{location.localHeading}</h2>
            <div className="mt-6 space-y-5">
              {location.local.map((para) => (
                <p key={para.slice(0, 40)} className="text-base leading-relaxed text-[#4b5563] md:text-[17px] md:leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
            <h3 className="mt-8 text-lg !font-normal text-[#111827]">
              Areas we serve in and around {location.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {location.areas.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-sm text-gray-700"
                >
                  <MapPin className="h-3.5 w-3.5 text-groxOrange" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="process-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Our Process</SectionBadge>
            <h2 id="process-heading" className={h2Class}>
              How We Build Your {industry.name} Website
            </h2>
          </motion.div>
          <ol className="mt-10 grid gap-4">
            {processSteps.map((step, idx) => (
              <motion.li
                key={step.title}
                {...fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-groxBlue text-sm font-bold text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base !font-normal text-[#111827] sm:text-lg">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ FAQ — answers stay in the DOM so they remain crawlable ═══ */}
      <section className="bg-gray-50/60 py-8 md:py-12" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>FAQs</SectionBadge>
            <h2 id="faq-heading" className={h2Class}>
              {industry.name} Website Design in {location.name} — FAQs
            </h2>
          </motion.div>
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
      <section className="py-8 md:py-12" aria-labelledby="related-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <SectionBadge>Explore More</SectionBadge>
            <h2 id="related-heading" className={h2Class}>
              More Website Design Services in {location.name}
            </h2>
          </motion.div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sameLocation.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${industrySlug(p.industry.key, p.location.key)}`}
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
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-[#1a1a2e] py-10 md:py-14" aria-labelledby="cta-heading">
        <motion.div {...fadeUp} className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
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
        </motion.div>
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
