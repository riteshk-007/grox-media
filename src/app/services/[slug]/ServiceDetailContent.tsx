"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Check,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import GetStartedDialog from "@/components/shared/GetStartedDialog";
import { services, getServiceBySlug } from "@/data/services";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

/** Shared focus ring so every interactive element has a visible keyboard state. */
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-groxBlue focus-visible:ring-offset-2";

/** Verifiable facts about how Grox Media works — no invented claims. */
const whyUsPoints = [
  {
    Icon: MapPin,
    title: "Noida-based team",
    description:
      "Registered office in Sector 90, Noida, serving clients across Delhi NCR, Mumbai, and Pune.",
  },
  {
    Icon: MessageSquare,
    title: "Clear scoping first",
    description:
      "A free discovery call, then a written proposal with scope, timeline, and pricing before work starts.",
  },
  {
    Icon: Clock,
    title: "24-hour email response",
    description:
      "Reachable Monday to Saturday, 10 AM – 7 PM IST, with a 24-hour response time on email.",
  },
  {
    Icon: ShieldCheck,
    title: "NDA on request",
    description:
      "We sign NDAs before any project discussion, and all deliverables belong to you on final payment.",
  },
];

export default function ServiceDetailContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) return null;

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const HeroIcon = service.Icon;

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-groxBlue/10 via-groxOrange/10 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb — real links, descriptive anchor text */}
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400"
          >
            <Link href="/" className={cn("rounded transition hover:text-groxBlue", focusRing)}>
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/services" className={cn("rounded transition hover:text-groxBlue", focusRing)}>
              Services
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-gray-600">{service.title}</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
                  <HeroIcon className="h-5 w-5" aria-hidden />
                </span>
                <SectionBadge>{service.navLabel}</SectionBadge>
              </div>

              {/* Single H1 on the page */}
              <h1 className="mt-5 text-balance text-3xl leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-5xl md:leading-[1.15]">
                {service.title}
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#6b7280] md:text-lg md:leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(true)}
                  className={cn(
                    "group inline-flex items-center justify-center gap-2 rounded-full bg-groxBlue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200",
                    "hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-xl active:translate-y-0 active:scale-[0.98]",
                    focusRing
                  )}
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </button>
                <Link
                  href="/portfolio"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#111827] transition-all duration-200",
                    "hover:border-groxBlue hover:bg-groxBlue/5 hover:text-groxBlue",
                    focusRing
                  )}
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            {/* Hero image — priority + reserved aspect ratio to avoid layout shift */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-xl">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-5 -right-3 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-lg sm:block">
                <p className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
                  <Sparkles className="h-3.5 w-3.5 text-groxOrange" aria-hidden />
                  Grox Media LLP
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 md:p-8"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-groxOrange to-groxBlue"
            />
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-7">
              <div className="shrink-0">
                <SectionBadge>Overview</SectionBadge>
              </div>
              <div className="min-w-0 flex-1">
                <h2 id="overview-heading" className="sr-only">
                  About our {service.title} service
                </h2>
                <p className="text-base leading-relaxed text-[#374151] md:text-lg md:leading-[1.85]">
                  {service.intro}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.keywords.slice(0, 4).map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium capitalize text-gray-600"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="bg-gray-50/60 py-8 md:py-12" aria-labelledby="what-we-do-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <SectionBadge>What&apos;s Included</SectionBadge>
            <h2
              id="what-we-do-heading"
              className="mt-4 text-2xl tracking-tight text-[#111827] sm:text-3xl md:text-4xl"
            >
              What We Do
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 md:gap-6">
            {service.whatWeDo.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-groxBlue/20 hover:shadow-xl md:p-7"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-groxOrange/10 text-groxOrange transition-colors duration-300 group-hover:bg-groxOrange group-hover:text-white">
                  <Check className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base text-[#111827] sm:text-lg">{item.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#6b7280]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VIDEO ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="video-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="video-heading" className="sr-only">
            {service.title} in action
          </h2>
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-2 shadow-xl sm:p-3"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={service.videoSrc}
                poster={service.heroImage}
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                aria-label={`${service.title} showcase video`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="bg-gray-50/60 py-8 md:py-12" aria-labelledby="process-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <SectionBadge>Our Process</SectionBadge>
            <h2
              id="process-heading"
              className="mt-4 text-2xl tracking-tight text-[#111827] sm:text-3xl md:text-4xl"
            >
              How It Works
            </h2>
          </motion.div>

          <ol className="mx-auto mt-12 grid max-w-4xl gap-4 md:mt-16 md:gap-5">
            {service.process.map((step, idx) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-groxBlue/30 hover:shadow-xl sm:p-6"
              >
                {/* Left accent bar that fills in on hover */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 bg-groxBlue/20 transition-colors duration-300 group-hover:bg-groxOrange"
                />

                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-groxBlue text-base font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-base text-[#111827] sm:text-lg">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        Step {idx + 1} of {service.process.length}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ WHY GROX MEDIA ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="why-us-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <SectionBadge>Why Grox Media</SectionBadge>
            <h2
              id="why-us-heading"
              className="mt-4 text-2xl tracking-tight text-[#111827] sm:text-3xl md:text-4xl"
            >
              Working With Us
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {whyUsPoints.map((point, i) => {
              const PointIcon = point.Icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue">
                    <PointIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-sm text-[#111827] sm:text-base">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FAQ — answers always in the DOM so they stay crawlable ═══ */}
      <section className="py-8 md:py-12" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>FAQs</SectionBadge>
            <h2
              id="faq-heading"
              className="mt-4 text-2xl tracking-tight text-[#111827] sm:text-3xl md:text-4xl"
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mt-8 space-y-3 md:mt-10">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-groxBlue/30 shadow-lg"
                      : "border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md"
                  )}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6",
                        focusRing
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          aria-hidden
                          className={cn(
                            "w-1 shrink-0 rounded-full transition-all duration-300",
                            isOpen ? "h-8 bg-groxOrange" : "h-5 bg-groxBlue"
                          )}
                        />
                        <span className="text-sm font-semibold text-[#111827] sm:text-base">
                          {faq.question}
                        </span>
                      </span>
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300",
                          isOpen && "rotate-180 text-groxBlue"
                        )}
                      />
                    </button>
                  </h3>

                  {/* Grid-rows trick: content stays rendered (crawlable) while collapsing smoothly */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-50 px-5 pb-5 pt-4 sm:px-6">
                        <p className="border-l-2 border-groxOrange/40 pl-4 text-sm leading-relaxed text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ OTHER SERVICES ═══ */}
      <section className="bg-gray-50/60 py-8 md:py-12" aria-labelledby="other-services-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <SectionBadge>Explore More</SectionBadge>
            <h2
              id="other-services-heading"
              className="mt-4 text-2xl tracking-tight text-[#111827] sm:text-3xl md:text-4xl"
            >
              Other Services
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
            {otherServices.map((other, i) => {
              const OtherIcon = other.Icon;
              return (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                  className="last:sm:col-span-2 last:lg:col-span-1"
                >
                  <Link
                    href={`/services/${other.slug}`}
                    className={cn(
                      "group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300",
                      "hover:-translate-y-1 hover:border-groxBlue/20 hover:shadow-xl",
                      focusRing
                    )}
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-groxBlue/10 text-groxBlue transition-colors duration-300 group-hover:bg-groxBlue group-hover:text-white">
                      <OtherIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-base text-[#111827] transition-colors group-hover:text-groxBlue sm:text-lg">
                      {other.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-[#6b7280]">
                      {other.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-groxBlue">
                      Learn more
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp} className="mt-10 text-center">
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border-2 border-groxBlue px-7 py-3 text-sm font-semibold text-groxBlue transition-all duration-200",
                "hover:bg-groxBlue hover:text-white",
                focusRing
              )}
            >
              View all Grox Media services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-[#1a1a2e] py-8 md:py-12"
        aria-labelledby="cta-heading"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.16),transparent_55%)]"
        />
        <motion.div {...fadeUp} className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2
            id="cta-heading"
            className="text-balance text-2xl !text-white sm:text-3xl md:text-4xl md:leading-tight"
          >
            Ready to get started with {service.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Get a free consultation — we&apos;ll scope your project and share a
            detailed proposal with timeline and pricing.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className={cn(
                "group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#ea580c] shadow-lg transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
              )}
            >
              Enquire Now
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </button>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-4 text-sm font-semibold text-white transition-all duration-200",
                "hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
              )}
            >
              Contact us
            </Link>
          </div>
        </motion.div>
      </section>

      <GetStartedDialog
        show={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        formName={`service_${service.slug}_enquiry`}
        serviceName={service.title}
      />
    </main>
  );
}
