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
    label: "Premium design for Gurgaon's corporate and startup ecosystem",
    href: "/website-designing-company-in-gurgaon",
  },
  {
    city: "Noida",
    label: "B2B and SaaS UI/UX for Noida's IT companies",
    href: "/website-designing-company-in-noida",
  },
  {
    city: "Delhi",
    label: "Industry-specific design for Delhi's diverse business base",
    href: "/website-designing-company-in-delhi",
  },
  {
    city: "Mumbai",
    label: "Premium brand and D2C design for Mumbai businesses",
    href: "/website-designing-company-in-mumbai",
  },
  {
    city: "Pune",
    label: "Design systems and product UI for Pune's tech market",
    href: "/website-designing-company-in-pune",
  },
];

const services = [
  {
    icon: Layout,
    title: "Custom Website Design",
    description:
      "For Pune's dual market — technically rigorous for IT companies in Hinjewadi, visually compelling for D2C brands building their consumer presence. Design that reads the brief accurately.",
    bg: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Pune's tech-native audience uses every device type — and judges your mobile experience against the apps they use daily. We design mobile-first and verify on real hardware.",
    bg: "bg-orange-50",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "End-to-end UX design — user flows, information architecture, interaction patterns, and usability testing. For Pune's product companies, UX is a competitive differentiator.",
    bg: "bg-green-50",
  },
  {
    icon: Sparkles,
    title: "Landing Page Design",
    description:
      "Conversion-optimised landing pages for Pune's D2C brands, SaaS products, and service businesses running digital campaigns. Designed with clear hypotheses about what will convert.",
    bg: "bg-purple-50",
  },
  {
    icon: Monitor,
    title: "Design System & Component Library",
    description:
      "Structured design systems in Figma — component libraries, token documentation, and pattern guides — that enable Pune's product teams to build consistently at speed.",
    bg: "bg-teal-50",
  },
  {
    icon: Palette,
    title: "Brand Identity & Logo Design",
    description:
      "Visual identity from the ground up for Pune's emerging businesses — logomark, brand color palette, typography selection, and a guidelines document your team can actually use.",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "In-House Design Team",
    title: "Specialists, Not Generalists",
    description:
      "Our design team includes dedicated UX researchers, visual designers, and motion specialists — not one person doing all three. Pune's technical market benefits from that specialisation.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "On-Time Delivery",
    title: "Predictable Creative Timelines",
    description:
      "We structure design projects like product sprints — milestones, reviews, and deliverables mapped upfront. Pune's agile teams appreciate the transparency.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Advantage",
    title: "Value-Driven Pricing",
    description:
      "Pune's market evaluates cost per value, not cost per deliverable. Our pricing reflects what the work delivers — a functional design system that scales, not a pretty screenshot.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Design Support",
    title: "Ongoing Creative Partnership",
    description:
      "Designs evolve as products grow. We stay available for iterations, new feature UI, and design updates after the initial delivery — without re-briefing from scratch.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "UX-First Approach",
    title: "Function Before Form",
    description:
      "Every visual decision is preceded by a functional question. Why is this here? What should the user do next? How does this layout build trust? Form follows that logic.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Design Projects Completed",
    title: "Cross-Industry Pattern Knowledge",
    description:
      "Education, healthcare, SaaS, e-commerce, manufacturing — we've designed across every sector with significant presence in Pune and know what visual language resonates where.",
  },
];

const processSteps = [
  {
    title: "Problem Framing",
    description:
      "Design starts with a problem, not a preference. We define what the website needs to solve before deciding what it should look like.",
  },
  {
    title: "User Research",
    description:
      "Understanding your user's mental models, expectations, and decision-making process — particularly relevant for Pune's technically sophisticated B2B buyers.",
  },
  {
    title: "Information Architecture",
    description:
      "Content structure, navigation design, and user flow mapping validated before visual design begins. The right structure makes the visual layer exponentially more effective.",
  },
  {
    title: "Visual Design",
    description:
      "High-fidelity designs in Figma with your brand applied across all components. Desktop and mobile reviewed in parallel — no afterthought responsive adaptation.",
  },
  {
    title: "Handover & Documentation",
    description:
      "Figma files, component documentation, design tokens, and developer annotations. Pune's product teams get a handover package that enables autonomous build.",
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

export default function WebsiteDesigningPune() {
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
                <SectionBadge>Website Designing Company in Pune</SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Website Designing Company in Pune
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Pune&apos;s market spans two very different buyer profiles —
                the technical rigour of IT park companies and the brand
                consciousness of D2C founders. Good website design for Pune
                starts with understanding which you&apos;re talking to, and what
                that audience needs to see before they trust you.
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
                  UX-First Design
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Design Systems Expertise
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  5000+ Projects
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
              Website Designing Services Across India
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
              From design systems to consumer product pages — see our{" "}
              <Link
                href="/services"
                className="text-[#ea580c] hover:underline"
              >
                complete design services
              </Link>
              .
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
              Why Pune Businesses Trust Our Design Team
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
              About Our Website Designing Company in Pune
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pune&apos;s design market has a distinct characteristic that we
                find genuinely interesting: the audience is often better at
                evaluating design quality than the clients who are commissioning
                it. A Hinjewadi IT company&apos;s website is visited by
                developers, product managers, and technical decision-makers who
                use beautifully designed software products every day. They notice
                padding inconsistencies, they notice when the mobile layout
                breaks, and they notice when the visual hierarchy doesn&apos;t
                guide them naturally to the information they&apos;re looking
                for. Designing for Pune means designing for that level of
                scrutiny.
              </p>
              <p>
                For Pune&apos;s D2C brands, the design challenge is different —
                it&apos;s about building enough emotional and visual trust to
                drive an online transaction from a customer who has never met
                you. Colour palette consistency, photography quality, product
                presentation, and checkout UX all contribute to that trust in
                ways that are measurable in conversion rate data. We bring both
                lenses — the technical and the consumer — to every Pune design
                project depending on the audience. See examples of both in our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#ea580c] hover:underline"
                >
                  portfolio
                </Link>
                .
              </p>
              <p>
                If you&apos;re looking for{" "}
                <Link
                  href="/services"
                  className="text-[#ea580c] hover:underline"
                >
                  web design services in Pune
                </Link>{" "}
                that go beyond templates and theme customisation, we&apos;re the
                team that has built design systems for growing product companies
                and consumer brands alike. The starting point is always the same:
                understanding your user before we pick up a design tool.
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
            Design That Holds Up to Pune&apos;s High Standard
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Pune&apos;s users know good design when they see it. We build for
            that knowledge — functional, precise, and purposeful.
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
                q: "How much does website design cost in Pune?",
                a: "Pune's market values quality at a reasonable price point. A professionally designed business website starts at ₹10,000–₹22,000. D2C product site designs with full e-commerce UI start from ₹28,000. Dashboard and web app UI/UX is quoted after scoping. All quotes are fixed and include revision rounds.",
              },
              {
                q: "We're a tech company in Pune — do you understand SaaS product design?",
                a: "Yes. Product design for SaaS and web applications is a distinct discipline — information architecture, user flows, empty states, error handling, and progressive disclosure all matter. We've designed dashboards and admin interfaces that Pune's IT companies have deployed to thousands of end users.",
              },
              {
                q: "Can you create a design system alongside the website design?",
                a: "Yes. For Pune's product companies that will be building on the website design over time, we create a design system in Figma — components, tokens, patterns, and usage documentation. This gives your in-house or extended development team a consistent reference instead of re-designing from scratch for every new feature.",
              },
              {
                q: "My website has high bounce rates — can redesign fix that?",
                a: "Often yes — but we diagnose before we prescribe. High bounce rates can be caused by slow loading, irrelevant traffic, confusing layout, or weak value proposition communication. We review your analytics and current user behaviour before designing the solution, so the redesign targets the actual problem.",
              },
              {
                q: "Do you work with education institutions and colleges in Pune?",
                a: "Yes. Education website design has specific requirements — course catalogue structure, admission workflow, faculty presentation, and accessibility for students with varying tech literacy. We've designed for institutions with student counts ranging from a few hundred to tens of thousands.",
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
