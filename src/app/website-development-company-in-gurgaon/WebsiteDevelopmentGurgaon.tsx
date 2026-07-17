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
    city: "Noida",
    label: "Custom web development for Noida's IT corridors",
    href: "/website-development-company-in-noida",
  },
  {
    city: "Delhi",
    label: "Web solutions for Delhi's diverse SME ecosystem",
    href: "/website-development-company-in-delhi",
  },
  {
    city: "Pune",
    label: "Performance-first development for Pune's tech sector",
    href: "/website-development-company-in-pune",
  },
  {
    city: "Mumbai",
    label: "Enterprise web builds for Mumbai's fast-paced market",
    href: "/website-development-company-in-mumbai",
  },
  {
    city: "Gurugram",
    label: "Serving Cyber City, Sector 44, Golf Course Road & beyond",
    href: "/website-development-company-in-gurgaon",
  },
];

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Purpose-built websites with clean, scalable architecture. No page-builder shortcuts — every component is engineered to perform under real traffic and adapt as your business scales.",
    bg: "bg-blue-50",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "Online stores built for Gurgaon's competitive retail landscape — secure payment gateways (Razorpay, PayU), GST-compliant invoicing, inventory management, and checkout flows that reduce drop-off.",
    bg: "bg-orange-50",
  },
  {
    icon: Code,
    title: "Web Application Development",
    description:
      "Complex platforms built with React, Next.js, and Node.js. SaaS dashboards, CRM portals, booking engines, and multi-tenant apps — we handle the architecture, not just the frontend.",
    bg: "bg-green-50",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First Development",
    description:
      "With most Gurgaon users browsing on smartphones, a mobile-first build isn't optional. We design and code for small screens first, then scale up — not the other way around.",
    bg: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "CMS & Content Management",
    description:
      "WordPress multisite setups, Headless CMS integrations (Sanity, Contentful), and custom admin panels — giving your marketing team full editorial control without developer dependency.",
    bg: "bg-teal-50",
  },
  {
    icon: Zap,
    title: "Website Speed & Performance",
    description:
      "Core Web Vitals optimisation, image compression pipelines, CDN configuration, and server-side rendering — we've taken websites from 4-second load times to sub-1.5 seconds.",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "Team Members",
    title: "In-House Development Team",
    description:
      "Every developer, designer, and QA engineer is on our payroll. No subcontracting to remote freelancers — your project has dedicated people with direct accountability.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "On-Time Delivery",
    title: "Timelines We Actually Keep",
    description:
      "We scope projects carefully before committing to a deadline. If something changes mid-build, you hear about it from us — not when the due date passes.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Savings vs. Agency Markup",
    title: "No Middleman Pricing",
    description:
      "Because we build everything in-house, you pay for actual development time — not for a sales layer that marks up freelancer quotes by 40%.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Post-Launch Support",
    title: "We Stay After Launch",
    description:
      "Most agencies hand over credentials and go silent. We monitor uptime, push security patches, and handle update requests on an ongoing basis.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "SEO-Ready Code",
    title: "Built to Rank from Day One",
    description:
      "Structured data, semantic HTML, canonical tags, Core Web Vitals — SEO isn't an add-on we apply at the end; it's baked into the development process.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Projects Delivered",
    title: "Proven Across Industries",
    description:
      "Healthcare, e-commerce, real estate, finance, education — we've built for them all. The breadth of experience means we anticipate edge cases before they become your problems.",
  },
];

const processSteps = [
  {
    title: "Understand Your Business",
    description:
      "Before any code is written, we spend time understanding your revenue model, target customers, and what competitors in Gurgaon's market are already doing online.",
  },
  {
    title: "Architecture & Design",
    description:
      "Technical stack selection, database design, wireframes, and visual mockups — you review and approve everything before we build a single component.",
  },
  {
    title: "Agile Development",
    description:
      "We build in two-week sprints with regular demos. You're not waiting 6 weeks to see progress — you see working software every fortnight.",
  },
  {
    title: "QA & Performance Testing",
    description:
      "Cross-browser compatibility, load testing, security scanning, mobile device testing — we run a structured QA checklist before anything goes live.",
  },
  {
    title: "Launch & Handover",
    description:
      "Deployment, DNS configuration, Google Search Console setup, analytics installation — we handle the full go-live process and walk your team through the admin.",
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

export default function WebsiteDevelopmentGurgaon() {
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
                  Website Development Company in Gurgaon
                </SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Website Development Company in Gurgaon
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Gurgaon&apos;s corporate ecosystem runs on performance. We build
                websites that load fast, convert visitors, and hold up under
                real traffic — for businesses from Cyber City to Sector 44.
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
                  5000+ Websites Delivered
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  98% On-Time Delivery
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
              Website Development Across India
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Headquartered in Noida with active client projects across
              Gurgaon, Delhi, Pune, and Mumbai — same team, same standards,
              every city.
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
              From lean startup MVPs to enterprise-grade web platforms — our{" "}
              <Link
                href="/services"
                className="text-[#1e40af] hover:underline"
              >
                full service catalogue
              </Link>{" "}
              covers every stage of your digital build.
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
              Why Gurgaon Businesses Choose Us
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
              About Our Website Development Company in Gurgaon
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Gurgaon has a different kind of market pressure. When your
                competition includes MNC portals maintained by full internal dev
                teams, a templated website from a local freelancer doesn&apos;t
                cut it. Businesses operating in Cyber City, DLF Cyber Hub, and
                Sector 44 need web infrastructure that reflects the seriousness
                of their work — technically sound, fast to load, and built with
                SEO baked in from line one. That&apos;s the work we do at Grox
                Media.
              </p>
              <p>
                Our team has worked across the range of Gurgaon&apos;s business
                landscape — from early-stage startups raising pre-seed rounds to
                established businesses in real estate, finance, and professional
                services that needed to modernise outdated web presences. The
                common thread across all of them: they needed a development
                partner who understood both the technical requirements and the
                business context. We scope every project against what your
                customers actually need to see before they decide to contact
                you — and we build toward that goal, not just toward the
                delivery date. Explore our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#1e40af] hover:underline"
                >
                  portfolio
                </Link>{" "}
                to see the kind of work we&apos;ve shipped.
              </p>
              <p>
                One of the clearest patterns we&apos;ve seen with Gurgaon
                clients is the gap between website age and business ambition.
                A company with sharp leadership and a strong offline reputation
                loses credibility the moment a prospect Googles them and lands
                on a 2019-era site with broken mobile layout and a 6-second load
                time. We fix that gap — and we do it with code that actually
                runs, not page-builder exports that collapse under traffic. If
                you&apos;re evaluating{" "}
                <Link
                  href="/services"
                  className="text-[#1e40af] hover:underline"
                >
                  web development services
                </Link>
                , start with a conversation about what your current site is
                costing you.
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
            Ready to Build Something Gurgaon Will Notice?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Get a free project assessment — we&apos;ll tell you exactly what
            your site needs and what it&apos;ll take to build it right.
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
                q: "How much does website development cost in Gurgaon?",
                a: "For Gurgaon businesses, a professional 5-page business website starts at ₹15,000–₹30,000. E-commerce stores with payment gateway integration start from ₹50,000. Corporate portals or web applications are quoted individually after scoping. Every quote is itemised — no vague packages.",
              },
              {
                q: "How long does it take to build a website?",
                a: "A standard business website takes 7–15 working days. E-commerce builds run 3–5 weeks depending on catalogue size and custom features. We share a project timeline on day one and flag delays proactively — not after the deadline passes.",
              },
              {
                q: "Can you redesign our existing website?",
                a: "Yes. We audit your current site first — loading speed, mobile usability, SEO structure, and conversion flow — then redesign with those gaps fixed. Many Gurgaon clients come to us specifically to modernise legacy sites that were built 4–5 years ago and are now losing search rankings.",
              },
              {
                q: "Will my website work properly on mobile phones?",
                a: "Every website we build is mobile-first. We test on actual devices across Android and iOS — not just browser emulators — before handover. Gurgaon has one of the highest smartphone penetration rates among Indian metros, so a broken mobile experience directly costs you leads.",
              },
              {
                q: "Do you work with Gurgaon clients remotely or do you need to meet in person?",
                a: "We work fully remotely with most clients across India. Project kickoffs, design reviews, and progress updates happen over Google Meet or Zoom. For Gurgaon clients who prefer in-person meetings, we can schedule visits — but most projects move faster when handled over structured calls.",
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
