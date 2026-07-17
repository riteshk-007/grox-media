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
    label: "Corporate & MNC web development for Cyber City",
    href: "/website-development-company-in-gurgaon",
  },
  {
    city: "Noida",
    label: "IT company & startup builds from our Noida HQ",
    href: "/website-development-company-in-noida",
  },
  {
    city: "Delhi",
    label: "SME, retail & professional services across NCR",
    href: "/website-development-company-in-delhi",
  },
  {
    city: "Pune",
    label: "IT parks, D2C brands & manufacturing in Pune",
    href: "/website-development-company-in-pune",
  },
  {
    city: "Mumbai",
    label: "Enterprise-grade builds for Mumbai's fast-paced market",
    href: "/website-development-company-in-mumbai",
  },
];

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Enterprise-quality custom builds for Mumbai's demanding market. Finance companies, media brands, and high-growth startups all require websites that hold up under scrutiny — and traffic.",
    bg: "bg-blue-50",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "High-conversion D2C storefronts and B2B ordering platforms. Built for Mumbai's pace — fast checkout, multi-payment support, real-time inventory, and campaign-ready architecture.",
    bg: "bg-orange-50",
  },
  {
    icon: Code,
    title: "Web Application Development",
    description:
      "Complex, scalable web applications for Mumbai's finance and tech sectors — trading platforms, client portals, internal tools, and multi-tenant SaaS products built on modern frameworks.",
    bg: "bg-green-50",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First Development",
    description:
      "Mumbai's commute culture means your customers are often browsing on a local train. We build for that reality — lightweight, fast, and consistent across every device and connection speed.",
    bg: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "CMS & Content Management",
    description:
      "Editorial-grade CMS setups for media, content, and marketing-heavy businesses. Your team publishes at the speed Mumbai demands — without waiting on a development ticket.",
    bg: "bg-teal-50",
  },
  {
    icon: Zap,
    title: "Website Speed & Performance",
    description:
      "Mumbai's market punishes slow sites immediately. We engineer for performance at every layer — CDN configuration, database indexing, code splitting, and sub-1.5-second target load times.",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "Dedicated In-House Team",
    title: "No Relay Chains",
    description:
      "Mumbai enterprises sometimes work with agencies that outsource to NCR developers who sub-contract further. We cut that chain entirely — direct access to the people building your product.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "On-Time Delivery",
    title: "Mumbai Speed, Without Shortcuts",
    description:
      "We match Mumbai's urgency through proper upfront planning — not by cutting corners. 98% on-time delivery means you can plan your launch campaign with confidence.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Saving vs Agency Rate",
    title: "Value Without the Premium Label",
    description:
      "Mumbai's agency market carries significant overhead costs. Our in-house NCR model delivers the same quality at substantially lower rates — with better accountability.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Support Coverage",
    title: "Support That Matches Your Hours",
    description:
      "Mumbai doesn't run on a 9-to-5 schedule. Neither does our support team. Technical issues get addressed around the clock — without putting you on hold for a Mumbai timezone response.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "SEO-Ready Delivery",
    title: "Built to Rank in a Competitive Market",
    description:
      "Mumbai's search results are heavily contested. Every site we ship has structured data, Core Web Vitals optimisation, and proper technical SEO foundations — not as extras, as standards.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Projects Shipped",
    title: "Scale-Ready Experience",
    description:
      "High-traffic launches, CRM integrations, multi-currency e-commerce — we've built at Mumbai's scale before. Experience means you're not paying for us to learn on your project.",
  },
];

const processSteps = [
  {
    title: "Strategic Brief",
    description:
      "For Mumbai businesses, the brief goes beyond 'what pages do you want' — we discuss business model, growth targets, technical integrations, and competitive context.",
  },
  {
    title: "Architecture Planning",
    description:
      "Stack selection, database design, third-party API mapping, and scalability planning. For enterprises, this phase prevents expensive rebuilds later.",
  },
  {
    title: "Design & Prototype",
    description:
      "High-fidelity prototypes reviewed and approved before any code is committed. Mumbai clients typically have strong brand standards — we respect and build from them.",
  },
  {
    title: "Build, Test, Iterate",
    description:
      "Development with parallel QA. Load testing for high-traffic scenarios, security scanning, and cross-device verification before any staging handover.",
  },
  {
    title: "Controlled Launch",
    description:
      "Phased deployment, monitoring setup, runbook documentation, and team training. For high-traffic Mumbai launches, we stay on call through the first 48 hours.",
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

export default function WebsiteDevelopmentMumbai() {
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
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex justify-center lg:justify-start"
              >
                <SectionBadge>
                  Website Development Company in Mumbai
                </SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Website Development Company in Mumbai
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Mumbai&apos;s market moves fast and tolerates mediocrity even
                less. We build enterprise-grade websites for finance companies,
                D2C brands, and media businesses that need to compete at a
                national level — technically sound, optimised for search, and
                built to handle real traffic.
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
                  Enterprise-Grade Builds
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

      {/* Locations */}
      <section className="py-16 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Our Presence</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Web Development Across India&apos;s Major Cities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              One team, consistent quality, from Mumbai to Gurgaon — no local
              office markup, no communication gaps between teams.
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
              From high-traffic portals to headless D2C stores — see our{" "}
              <Link
                href="/services"
                className="text-[#1e40af] hover:underline"
              >
                full service offering
              </Link>{" "}
              for the complete picture.
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
              Why Mumbai Enterprises Choose Grox Media
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
              About Our Website Development Company in Mumbai
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mumbai runs at a pace that leaves little room for a poorly
                performing website. In Bandra Kurla Complex, financial services
                firms are competing against international players with
                significant digital budgets. In Lower Parel and Andheri, D2C
                brands are fighting for the same search keywords and the same
                consumer attention. What separates those that win online from
                those that don&apos;t is rarely content — it&apos;s technical
                execution. Site speed, mobile experience, structured data, and
                Core Web Vitals scores directly affect where you appear in
                search results and how many visitors convert to customers.
              </p>
              <p>
                Grox Media approaches Mumbai projects with that reality in mind.
                We don&apos;t build websites and measure success at handover. We
                measure it in load time benchmarks, organic ranking trajectories,
                and conversion data. Every Mumbai project goes through a
                performance audit before deployment — not as an optional add-on,
                but as a standard step. Our builds regularly hit Lighthouse
                scores above 90 across performance, accessibility, and SEO.
                You can verify this against our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#1e40af] hover:underline"
                >
                  portfolio
                </Link>{" "}
                before you decide.
              </p>
              <p>
                Mumbai clients often come to us after experiences with large
                agencies where their project was a small account managed by a
                junior team, or with cheap vendors who delivered a WordPress
                theme and called it a custom website. We sit between those
                extremes — a team large enough to handle complexity, small
                enough that your project isn&apos;t lost in a pipeline of 200
                active accounts. If you&apos;re evaluating{" "}
                <Link
                  href="/services"
                  className="text-[#1e40af] hover:underline"
                >
                  web development services in Mumbai
                </Link>
                , ask each vendor for their Lighthouse scores on recently
                launched sites. The answer will tell you a lot about how they
                actually build.
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
            Mumbai Moves Fast — Your Website Should Too
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Share your requirements and we&apos;ll deliver a detailed scope and
            quote that matches the pace and precision Mumbai expects.
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
                q: "How much does enterprise website development cost in Mumbai?",
                a: "For Mumbai businesses, a professional business website starts at ₹20,000–₹40,000. High-traffic e-commerce platforms start from ₹60,000. Enterprise web applications with custom integrations, API layers, and multi-user systems are scoped individually. We quote fixed prices — no time-and-materials billing.",
              },
              {
                q: "How do you handle high-traffic websites for Mumbai's scale?",
                a: "We architect for scale from the start — server-side rendering with Next.js, database query optimisation, load-balanced cloud hosting on AWS, and edge CDN configuration. Mumbai brands often experience significant traffic spikes during campaigns; we build so those spikes don't cause outages.",
              },
              {
                q: "Can you integrate our website with our existing CRM or ERP system?",
                a: "Yes. We've built API integrations with Salesforce, Zoho, HubSpot, and custom ERP systems. For Mumbai enterprises running complex back-office operations, website integration with internal tools is often the highest-value part of the project.",
              },
              {
                q: "We're a D2C brand — what makes your e-commerce builds different?",
                a: "We don't just install a Shopify theme. For D2C brands that want control over their stack, we build custom storefronts on Next.js with headless commerce — faster load times, better SEO, and full flexibility to build brand-specific features that off-the-shelf platforms can't accommodate.",
              },
              {
                q: "We're based in Mumbai — how do you manage projects remotely?",
                a: "We run structured remote engagements: a dedicated project manager as your single point of contact, bi-weekly video reviews, Notion-based project tracking, and staging environments for every major milestone. Mumbai clients tell us the async-first approach actually speeds up delivery compared to agency relationships that require constant in-person presence.",
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
