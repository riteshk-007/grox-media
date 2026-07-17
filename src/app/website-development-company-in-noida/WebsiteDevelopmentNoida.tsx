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
  Code,
  Smartphone,
  ShoppingCart,
  Globe,
  Shield,
  Zap,
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
  "mb-4 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 pl-12 text-[#111827] placeholder:text-gray-400 transition-all duration-200 focus:border-[#1e40af] focus:outline-none focus:ring-2 focus:ring-blue-500/30";

const locations = [
  {
    city: "Gurgaon",
    label: "Web development for Cyber City & Golf Course Road businesses",
    href: "/website-development-company-in-gurgaon",
  },
  {
    city: "Delhi",
    label: "Websites for Delhi's trading, retail & services sectors",
    href: "/website-development-company-in-delhi",
  },
  {
    city: "Pune",
    label: "Scalable builds for Pune's IT parks & D2C brands",
    href: "/website-development-company-in-pune",
  },
  {
    city: "Mumbai",
    label: "Enterprise web for Mumbai's finance & media companies",
    href: "/website-development-company-in-mumbai",
  },
  {
    city: "Noida",
    label: "Headquartered in Noida — Sector 62, 63, Expressway belt",
    href: "/website-development-company-in-noida",
  },
];

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Architectured from scratch to suit your business model — whether you're an IT services firm in Sector 62 or a manufacturing company near Noida Phase 2. Clean code, zero bloat.",
    bg: "bg-blue-50",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "Feature-complete online stores: multi-vendor support, COD + digital payment options, GST invoicing, and catalogue management built for Noida's growing D2C and B2B sellers.",
    bg: "bg-orange-50",
  },
  {
    icon: Code,
    title: "Web Application Development",
    description:
      "SaaS platforms, ERP dashboards, employee portals, and client management tools built with modern frameworks. We work across the full stack — front to back.",
    bg: "bg-green-50",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First Development",
    description:
      "Mobile traffic from Noida accounts for the majority of most site visits. We build for that reality — thumb-friendly navigation, fast load on 4G, optimised images for every screen.",
    bg: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "CMS & Content Management",
    description:
      "Headless CMS setups, WordPress development, and custom content dashboards — giving your internal team the ability to publish and update without waiting on a developer queue.",
    bg: "bg-teal-50",
  },
  {
    icon: Zap,
    title: "Website Speed & Performance",
    description:
      "Lazy loading, code splitting, CDN setup, and database query optimisation — we treat performance as a feature, not a checkbox item at the end of the project.",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "Full-Time Team",
    title: "No Outsourcing, Ever",
    description:
      "Our developers, designers, and QA engineers all work under one roof in Noida. You deal with one team from kickoff to launch — no handoff gaps.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "On-Time Rate",
    title: "Schedules That Hold",
    description:
      "We build realistic timelines by scoping thoroughly before we start. When scope changes, we communicate immediately — not when the deadline arrives.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Advantage",
    title: "Honest, Itemised Quotes",
    description:
      "No bundled packages that hide what you're paying for. Every line in the quote corresponds to actual work — you approve the scope, we build it.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Support Available",
    title: "Always Reachable",
    description:
      "Post-launch issues don't follow business hours. Our support team handles urgent fixes around the clock so your site doesn't stay broken over a weekend.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "SEO-Ready Output",
    title: "Rank-Ready from Day One",
    description:
      "Schema markup, canonical tags, sitemap generation, meta structure — every project ships with the SEO foundations in place before the first Google crawl.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Projects Shipped",
    title: "Broad Industry Experience",
    description:
      "From healthcare portals to e-commerce catalogues to SaaS tools — we've seen most build challenges before. Experience means fewer surprises for you.",
  },
];

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We start by understanding your business, your users, and what success means for this project — not just what pages you want built.",
  },
  {
    title: "Scope & Planning",
    description:
      "Sitemap, tech stack selection, timeline, and cost breakdown — all confirmed in writing before development begins. No scope creep surprises.",
  },
  {
    title: "Design & Prototype",
    description:
      "Figma wireframes and high-fidelity mockups for your review. You see and approve the visual design before a single line of code is written.",
  },
  {
    title: "Development & QA",
    description:
      "Structured development with QA running in parallel. Every feature is tested for functionality, accessibility, and cross-browser compatibility as it's built.",
  },
  {
    title: "Launch & Sustain",
    description:
      "We manage deployment, configure hosting, connect analytics, and hand over with documentation. Post-launch support begins from day one.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Vercel",
  "Figma",
];

export default function WebsiteDevelopmentNoida() {
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
      {/* Hero + Contact Form */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/25 via-indigo-400/20 to-purple-400/25 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex justify-center lg:justify-start"
              >
                <SectionBadge>
                  Website Development Company in Noida
                </SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Website Development Company in Noida
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Grox Media is headquartered in Noida — which means when we say
                we understand the local market, we&apos;re not speaking in
                generalities. We build for IT companies in Sector 62, startups
                on the Expressway, and businesses across the NCR.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1e40af] px-8 py-4 font-semibold text-white transition hover:bg-[#1e3a8a]"
                >
                  Get Free Quote
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
                  Local Noida Team
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  5000+ Projects Delivered
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  24/7 Support
                </span>
              </motion.div>
            </div>

            {/* Right Contact Form */}
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
                Tell us about your project and we&apos;ll get back to you
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
                    placeholder="Tell us about your project..."
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
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e40af] py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#1e3a8a] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
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

      {/* Prime Locations */}
      <section className="py-16 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Our Presence</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Web Development Services Across Major Indian Cities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Rooted in Noida, we serve clients across India&apos;s top
              business cities — with the same dedicated team handling every
              project regardless of location.
            </p>
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <MapPin className="h-6 w-6 text-[#1e40af]" />
                </div>
                <p className="font-bold text-[#111827]">{loc.city}</p>
                <p className="text-xs text-gray-400 leading-snug">
                  {loc.label}
                </p>
                <Link
                  href={loc.href}
                  className="mt-1 text-xs font-medium text-[#1e40af] hover:underline"
                >
                  View →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>What We Build</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Website Development Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Tailored web solutions for every stage of your business — from
              your first website to a full-scale platform. See our{" "}
              <Link
                href="/services"
                className="text-[#1e40af] hover:underline"
              >
                complete services list
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
                  <svc.icon className="h-7 w-7 text-[#1e40af]" />
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

      {/* Process */}
      <section className="bg-gray-50/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>How We Work</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Our Website Development Process
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e40af] text-lg font-bold text-white shadow-md">
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
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1e40af] text-lg font-bold text-white">
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Why Grox Media</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Why Noida Businesses Work With Us
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
                <p className="text-3xl font-extrabold text-[#1e40af]">
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

      {/* Tech Stack */}
      <section className="bg-gray-50/50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeUp}>
            <SectionBadge>Tech Stack</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Technologies We Work With
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-[#111827] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-6">
              About Our Website Development Company in Noida
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Noida&apos;s business profile is genuinely varied — IT services
                companies with international clients in Sector 62 and 63,
                manufacturing operations in Phase II, startups along the
                Expressway, and a growing number of D2C brands that were born
                digital. Each of these businesses has a different web
                requirement, and the ones that treat their website as strategic
                infrastructure rather than a one-time expense tend to outgrow
                their competitors online. Grox Media builds for that
                ambition — not just the current state of your business.
              </p>
              <p>
                Being headquartered in Noida gives us a particular advantage
                when working with local clients: we understand the competitive
                landscape. Noida&apos;s IT sector is dense, and ranking for
                service keywords in a market this crowded requires more than a
                good-looking page — it requires technical SEO precision, fast
                Core Web Vitals, and content depth. Every website we deliver is
                built with those requirements addressed from the ground up, not
                patched in afterwards. If you want to see examples of the work,
                our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#1e40af] hover:underline"
                >
                  portfolio section
                </Link>{" "}
                is a good place to start.
              </p>
              <p>
                What differentiates us from the many development vendors
                operating in the NCR market is accountability. We don&apos;t
                sub-contract projects to junior developers or offshore teams.
                When you brief us, the people in the room are the people
                building your product. This matters when timelines are tight,
                when requirements shift mid-project, or when something needs
                fixing quickly after launch. If you&apos;re comparing{" "}
                <Link
                  href="/services"
                  className="text-[#1e40af] hover:underline"
                >
                  web development services
                </Link>
                , we encourage you to ask any vendor that question directly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Phone className="h-6 w-6 text-[#1e40af]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Call Us
                </p>
                <a
                  href="tel:+919266806477"
                  className="mt-1 block font-semibold text-[#111827] hover:text-[#1e40af]"
                >
                  +91 92668 06477
                </a>
                <a
                  href="tel:+919354734436"
                  className="mt-1 block font-semibold text-[#111827] hover:text-[#1e40af]"
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

      {/* CTA */}
      <motion.section
        {...fadeUp}
        className="bg-gradient-to-r from-[#1e40af] to-[#111827] py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Ship Something Your Noida Competitors Will Envy
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Share your project requirements and we&apos;ll send a detailed scope
            and quote within one business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact-form"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#1e40af] transition hover:bg-gray-100"
            >
              Get Free Quote →
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

      {/* FAQs */}
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
                q: "How much does website development cost in Noida?",
                a: "A basic business website for Noida companies starts at ₹12,000–₹28,000. E-commerce platforms with Razorpay or PayU integration start from ₹45,000. Web applications and SaaS tools are scoped individually. We provide a fixed-price quote after understanding your requirements — no variable billing surprises.",
              },
              {
                q: "How long does website development take for a Noida business?",
                a: "Simple business websites take 5–12 working days. E-commerce stores typically need 3–4 weeks. Complex platforms with custom integrations run 6–10 weeks. We've delivered rush projects for Noida clients in under a week when needed — at no compromise on code quality.",
              },
              {
                q: "My current website looks outdated. Can you redesign it without losing my SEO rankings?",
                a: "Yes. We carry out an SEO audit of your existing site before touching anything — mapping every indexed URL, current rankings, and backlink profile. The redesign preserves your URL structure and all technical SEO signals while modernising the design and improving Core Web Vitals.",
              },
              {
                q: "Will the website load properly on all devices?",
                a: "Every build we deliver is tested across phones, tablets, and desktops before launch. We code mobile-first — smallest screen first, scaling up — so the experience on a ₹12,000 Android phone is as solid as on a MacBook. No afterthought responsiveness.",
              },
              {
                q: "We're in Noida — do you need to visit us to start the project?",
                a: "No, we're based in Noida and happy to meet local clients when helpful. Most projects run efficiently over structured calls and shared documents — we use Notion for project tracking and Google Meet for reviews. If an in-person workshop helps at kickoff, we can arrange that.",
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
