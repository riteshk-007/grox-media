"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  User,
  ArrowRight,
  Loader2,
  Check,
  Palette,
  Layout,
  Smartphone,
  Monitor,
  PenTool,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  IndianRupee,
  Headphones,
  Trophy,
  CheckCircle,
  MapPin,
  Building2,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SectionBadge from "@/components/ui/SectionBadge";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const inputCls =
  "mb-4 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 pl-12 text-[#111827] placeholder:text-gray-400 transition-all duration-200 focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-orange-500/30";

const locations = [
  {
    city: "Gurgaon",
    label: "Corporate and startup design for Gurgaon's competitive market",
    href: "/website-designing-company-in-gurgaon",
  },
  {
    city: "Noida",
    label: "B2B and SaaS-focused UI/UX for Noida's IT sector",
    href: "/website-designing-company-in-noida",
  },
  {
    city: "Delhi",
    label: "Industry-specific design for Delhi's diverse SME market",
    href: "/website-designing-company-in-delhi",
  },
  {
    city: "Pune",
    label: "Design systems and product UI for Pune's tech businesses",
    href: "/website-designing-company-in-pune",
  },
  {
    city: "Mumbai",
    label: "Premium design for Mumbai's finance and D2C brands",
    href: "/website-designing-company-in-mumbai",
  },
];

const services = [
  {
    icon: Layout,
    title: "Custom Website Design",
    description:
      "Premium, bespoke design for Mumbai's most demanding clients — finance companies evaluating their digital credibility, D2C founders building brand equity, and media businesses shaping editorial identity.",
    bg: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Mumbai's commute culture makes mobile the primary screen. We design mobile-first for Andheri's startups and BKC's enterprises alike — lightweight, fast, and brand-consistent at every breakpoint.",
    bg: "bg-orange-50",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Strategic UX design for complex platforms — financial dashboards, multi-step booking systems, content portals, and high-conversion product flows that Mumbai's competitive market demands.",
    bg: "bg-green-50",
  },
  {
    icon: Sparkles,
    title: "Landing Page & Campaign Design",
    description:
      "Mumbai's D2C brands move at campaign speed. We design high-conversion launch pages, limited-time offer pages, and seasonal campaign microsites that are ready to go live in days, not weeks.",
    bg: "bg-purple-50",
  },
  {
    icon: Monitor,
    title: "Brand Identity & Visual Design",
    description:
      "From startup logomarks to full enterprise brand systems — visual identity designed for Mumbai's audience, where brand presence is table stakes in both BKC boardrooms and consumer social feeds.",
    bg: "bg-teal-50",
  },
  {
    icon: Palette,
    title: "Design System & Style Guide",
    description:
      "Enterprise-grade design systems for Mumbai's product-heavy businesses — component libraries, brand tokens, usage documentation, and Figma handoff ready for large development teams.",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "In-House Design Team",
    title: "No Relay, No Dilution",
    description:
      "Mumbai clients don't get briefed by an account manager who then briefs a designer. The people who receive your brief are the people who create your design — accountability flows directly.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "On-Time Delivery",
    title: "Mumbai Pace, Maintained",
    description:
      "We don't slow down because we're remote. Our structured sprint model — brief, wireframe, design, review — keeps projects on schedule even for complex briefs.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Advantage",
    title: "Premium Quality, Not Premium Pricing",
    description:
      "Mumbai's design agency market carries significant overhead. Our in-house model removes that layer — you get senior-level creative work without the senior agency rate card.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Creative Support",
    title: "Available at Mumbai's Pace",
    description:
      "Mumbai businesses don't wait. We stay available for rapid asset requests, urgent campaign pages, and design updates — without a new contract for every change.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "Brand-First Approach",
    title: "Design That Builds Equity",
    description:
      "Every design decision contributes to brand perception. We make choices that build cumulative trust over time — not one-off creative that looks great in isolation but fragments the brand over multiple touchpoints.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Projects Delivered",
    title: "Mumbai-Calibre Experience",
    description:
      "High-traffic D2C launches, complex financial product interfaces, editorial brand identities — 5000+ projects across industries means we've done it before at the scale Mumbai requires.",
  },
];

const processSteps = [
  {
    title: "Brand Immersion",
    description:
      "For Mumbai clients, we go deep before we start — studying your competitors, your audience's visual expectations, and your brand's existing equity. First impressions are built on this foundation.",
  },
  {
    title: "Creative Direction",
    description:
      "Moodboard and visual direction alignment before any design work. Mumbai brands with strong opinions benefit from this structured alignment — fewer expensive revisions downstream.",
  },
  {
    title: "UX Architecture",
    description:
      "User journey mapping and wireframe approval before visual design begins. Structure is decided rationally, visual is applied creatively — in that order.",
  },
  {
    title: "Premium Visual Design",
    description:
      "Full high-fidelity Figma designs with premium typography, curated imagery direction, refined colour system, and micro-interaction specifications.",
  },
  {
    title: "Enterprise Handover",
    description:
      "Figma files, design system documentation, brand guidelines, and developer handoff with annotated specs. Mumbai's larger teams get everything needed for consistent implementation.",
  },
];

const designTools = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Framer",
  "Webflow",
  "After Effects",
  "Principle",
  "Zeplin",
  "InVision",
  "Lottie",
];

export default function WebsiteDesigningMumbai() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const emailRe = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRe.test(formData.email)) newErrors.email = "Enter a valid email";
    const phoneRe = /^[0-9]{7,15}$/;
    const cleaned = formData.phone.replace(/[^0-9]/g, "");
    if (!phoneRe.test(cleaned)) newErrors.phone = "Enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.phone,
          message: formData.message,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        toast.error(json?.error || "Failed to send message");
        setIsSubmitting(false);
        return;
      }
      toast.success(json?.message || "Message sent successfully!");
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-400/20 via-pink-400/15 to-purple-400/20 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex justify-center lg:justify-start"
              >
                <SectionBadge>
                  Website Designing Company in Mumbai
                </SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Website Designing Company in Mumbai
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Mumbai&apos;s market doesn&apos;t forgive weak design.
                Finance companies are judged by their digital presence before a
                meeting is booked. D2C brands live or die by conversion rates
                tied directly to design quality. We build for that standard —
                premium, purposeful, and brand-defining.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ea580c] px-8 py-4 font-semibold text-white transition hover:bg-[#c2410c]"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919266806477"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold text-[#111827] transition hover:bg-gray-50"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Premium Quality Design
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Brand-Building Focus
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  24/7 Support
                </span>
              </motion.div>
            </div>

            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-2 text-2xl font-bold text-[#111827]">
                Get a Free Quote
              </h2>
              <p className="mb-6 text-sm text-gray-400">
                Tell us about your design project and we&apos;ll get back to you
                within 24 hours
              </p>
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-[#111827]">
                    Thank you!
                  </p>
                  <p className="mt-2 text-[#6b7280]">
                    We&apos;ve received your message. Our team will contact you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={inputCls}
                      aria-label="Your name"
                    />
                    {errors.name && (
                      <p className="-mt-2 mb-2 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={inputCls}
                      aria-label="Your email"
                    />
                    {errors.email && (
                      <p className="-mt-2 mb-2 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={inputCls}
                      aria-label="Your phone"
                    />
                    {errors.phone && (
                      <p className="-mt-2 mb-2 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <textarea
                    placeholder="Tell us about your design needs..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={cn(
                      inputCls,
                      "min-h-[120px] resize-none pl-5 pt-4",
                      "focus:pl-5"
                    )}
                    aria-label="Message"
                  />
                  {errors.message && (
                    <p className="-mt-2 mb-2 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ea580c] py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#c2410c] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Our Presence</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Website Designing Across India&apos;s Business Cities
            </h2>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                  <MapPin className="h-6 w-6 text-[#ea580c]" />
                </div>
                <p className="font-bold text-[#111827]">{loc.city}</p>
                <p className="text-xs text-gray-400 leading-snug">
                  {loc.label}
                </p>
                <Link
                  href={loc.href}
                  className="mt-1 text-xs font-medium text-[#ea580c] hover:underline"
                >
                  View →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>What We Design</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Website Designing Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              From brand systems to campaign pages — explore our{" "}
              <Link
                href="/services"
                className="text-[#ea580c] hover:underline"
              >
                complete design services
              </Link>{" "}
              for the full picture.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                <div
                  className={cn(
                    "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl",
                    svc.bg
                  )}
                >
                  <svc.icon className="h-7 w-7 text-[#ea580c]" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#111827]">
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {svc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>How We Design</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Our Website Design Process
            </h2>
          </motion.div>
          <div className="relative mt-16 hidden md:block">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-gray-200" />
            <div className="relative z-10 flex justify-between">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex max-w-[160px] flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ea580c] text-lg font-bold text-white shadow-md">
                    {idx + 1}
                  </div>
                  <p className="mt-4 text-base font-bold text-[#111827]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative mt-10 space-y-8 md:hidden">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex gap-6 pl-4"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-lg font-bold text-white">
                  {idx + 1}
                </div>
                <div>
                  <p className="font-bold text-[#111827]">{step.title}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Why Grox Media</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Why Mumbai Businesses Choose Our Design Team
            </h2>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <p className="text-3xl font-extrabold text-[#ea580c]">
                  {w.stat}
                </p>
                <p className="text-sm text-gray-500">{w.label}</p>
                <h3 className="mt-2 text-lg font-bold text-[#111827]">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{w.description}</p>
                <span className="mt-4 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  <CheckCircle className="mr-1 inline h-3 w-3" />
                  Guaranteed
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50/50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeUp}>
            <SectionBadge>Design Tools</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Tools We Design With
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {designTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-[#111827] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-6">
              About Our Website Designing Company in Mumbai
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mumbai is India&apos;s benchmark city for brand quality — in
                advertising, in media, in finance, and increasingly in digital.
                Businesses operating here compete against companies that have
                invested significantly in their digital brand presence, and the
                visual standard that Mumbai&apos;s audiences apply reflects
                that. A website that would perform adequately in a smaller
                market can look genuinely underdeveloped against Mumbai&apos;s
                benchmark. We design with that calibration in mind.
              </p>
              <p>
                For Mumbai&apos;s D2C brands, design is directly monetised —
                every layout decision is measurable in conversion rate data.
                The distance between the hero image and the CTA button, the copy
                on the primary button, the trust signals placed above the fold,
                the number of form fields at checkout — these are design
                decisions with quantifiable commercial impact. We approach D2C
                design with that discipline: every visual element is placed with
                a hypothesis about how it affects user behaviour, and we use
                analytics data where available to validate those hypotheses. See
                examples in our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#ea580c] hover:underline"
                >
                  portfolio
                </Link>
                .
              </p>
              <p>
                For Mumbai&apos;s finance and enterprise sector, website design
                serves a different purpose — it&apos;s a credibility signal
                evaluated before any commercial conversation begins. A financial
                services company with a dated or inconsistent website is starting
                that conversation at a disadvantage. We&apos;ve designed for
                this context specifically, understanding the visual language that
                builds institutional trust without sacrificing clarity. If
                you&apos;re evaluating{" "}
                <Link
                  href="/services"
                  className="text-[#ea580c] hover:underline"
                >
                  web design services in Mumbai
                </Link>
                , we&apos;re happy to share relevant work before you brief us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <SectionBadge>Contact Us</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Get in Touch
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <Phone className="h-6 w-6 text-[#ea580c]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Call Us
                </p>
                <a
                  href="tel:+919266806477"
                  className="mt-1 block font-semibold text-[#111827] hover:text-[#ea580c]"
                >
                  +91 92668 06477
                </a>
                <a
                  href="tel:+919354734436"
                  className="mt-1 block font-semibold text-[#111827] hover:text-[#ea580c]"
                >
                  +91 935 473 4436
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <Mail className="h-6 w-6 text-[#ea580c]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Email Us
                </p>
                <a
                  href="mailto:info@groxmedia.in"
                  className="mt-1 block font-semibold text-[#111827] hover:text-[#ea580c]"
                >
                  info@groxmedia.in
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Office
                </p>
                <p className="mt-1 font-semibold text-[#111827]">
                  Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector
                  90, Noida, UP 201305
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        {...fadeUp}
        className="bg-gradient-to-r from-[#ea580c] to-[#111827] py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Mumbai&apos;s Market Sets a High Bar. We Design to Clear It.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Premium design, precise UX, and brand-building focus — for a market
            where your visual presence is a commercial asset, not just a
            formality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact-form"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#ea580c] transition hover:bg-gray-100"
            >
              Get Free Consultation →
            </Link>
            <a
              href="tel:+919266806477"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              +91 92668 06477
            </a>
          </div>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Common Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                q: "How much does premium website design cost in Mumbai?",
                a: "For Mumbai businesses, a professionally designed website starts at ₹18,000–₹40,000. Premium brand-aligned websites for finance and enterprise clients start from ₹50,000. D2C product design with full e-commerce UI is scoped individually. Every engagement starts with a clear brief and fixed pricing.",
              },
              {
                q: "Our brand needs to feel premium — how do you achieve that in web design?",
                a: "Premium in design is about restraint, consistency, and intentionality — not just expensive-looking typography. We achieve it through a tight color palette, generous whitespace, consistent component language, and micro-interactions that feel considered rather than decorative. Mumbai's premium market can tell the difference, and so can we.",
              },
              {
                q: "We're a D2C brand — can you design for product launches and campaigns?",
                a: "Yes. Campaign landing pages, product launch microsites, and seasonal sale pages are a regular part of our work for D2C brands. We design them for speed — fast to build, fast to load, and fast to convert — so you can move at the pace Mumbai's consumer market demands.",
              },
              {
                q: "What design tools and formats do you work in?",
                a: "All our design work is done in Figma. You receive the original project file, exportable assets in standard web formats (SVG, WebP, PNG), and a basic component library. If you work with a development team that uses a different handoff format, we can accommodate that during delivery.",
              },
              {
                q: "How do you handle design projects for Mumbai clients remotely?",
                a: "We run design projects through structured async communication — a brief document, mood board alignment call, wireframe review, and then full design review. For Mumbai clients who prefer synchronous check-ins, we schedule them around your team's availability. Feedback is tracked in Figma comments, not scattered across email threads.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#111827]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
