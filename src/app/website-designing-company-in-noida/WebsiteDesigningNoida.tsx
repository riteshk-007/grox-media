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
    label: "Premium design for Gurgaon's corporate and startup market",
    href: "/website-designing-company-in-gurgaon",
  },
  {
    city: "Delhi",
    label: "Brand-aligned design for Delhi's diverse business community",
    href: "/website-designing-company-in-delhi",
  },
  {
    city: "Pune",
    label: "UI/UX for Pune's IT companies and D2C brands",
    href: "/website-designing-company-in-pune",
  },
  {
    city: "Mumbai",
    label: "Premium design for Mumbai's finance and media brands",
    href: "/website-designing-company-in-mumbai",
  },
  {
    city: "Noida",
    label: "Local team designing for Noida's IT and tech ecosystem",
    href: "/website-designing-company-in-noida",
  },
];

const services = [
  {
    icon: Layout,
    title: "Custom Website Design",
    description:
      "Tailored to Noida's B2B-heavy market — clean layouts that communicate technical credibility, service clarity, and professional positioning from the first scroll.",
    bg: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Pixel-perfect on every device — from the phones used by Noida's young professional workforce to the large monitors in IT park offices. Tested on real devices, not just responsive toggles.",
    bg: "bg-orange-50",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "User research, information architecture, interaction design, and usability testing. For Noida's SaaS companies and IT firms, UX quality is often the differentiator.",
    bg: "bg-green-50",
  },
  {
    icon: Sparkles,
    title: "Landing Page Design",
    description:
      "High-conversion pages for product launches, service campaigns, and inbound lead generation. Noida's IT market benefits from pages that qualify the right visitors and convert them.",
    bg: "bg-purple-50",
  },
  {
    icon: Monitor,
    title: "Dashboard & Admin Design",
    description:
      "Noida's tech companies often need internal tools designed as carefully as their customer-facing products. We design dashboards that make complex data accessible and actionable.",
    bg: "bg-teal-50",
  },
  {
    icon: Palette,
    title: "Brand Identity & Logo Design",
    description:
      "For Noida's growing businesses establishing their brand presence — logomark, brand colours, typography system, and usage guidelines that scale across digital and print.",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "In-House Design Team",
    title: "Local Team, Direct Communication",
    description:
      "Based in Noida, our design team understands the local market without needing a briefing on it. Client meetings are possible — remote collaboration is even more efficient.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "On-Time Delivery",
    title: "Design on Schedule",
    description:
      "Creative work with reliable timelines — a combination that's rarer than it should be. Our structured process and milestone-based tracking make this consistent.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Advantage",
    title: "Quality Without Premium Pricing",
    description:
      "Noida's market is competitive on price. Our in-house model removes agency overhead and delivers work that competes with larger creative studios at a fraction of the cost.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Support Available",
    title: "Ongoing Creative Support",
    description:
      "Post-delivery updates, new asset requests, and minor design changes are handled as they come up — not as a new project negotiation every time.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "Conversion-Focused",
    title: "Design Tied to Business Outcomes",
    description:
      "Every layout, CTA placement, and visual hierarchy decision is made to guide users toward the action your business needs — not just to look impressive in a screenshot.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Design Projects",
    title: "Pattern Recognition at Scale",
    description:
      "Five thousand design projects means we've seen what works and what doesn't across most industries — and we bring that pattern recognition to every new brief.",
  },
];

const processSteps = [
  {
    title: "Brief & Context",
    description:
      "A structured brief call covering your brand, audience, competitors, and what success looks like — so every design decision has context behind it.",
  },
  {
    title: "Research & Moodboard",
    description:
      "Visual direction aligned through reference curation and a style brief. We get creative alignment before opening Figma — saving revision cycles later.",
  },
  {
    title: "Wireframes",
    description:
      "Structural layout planning reviewed and approved before visual design begins. Content hierarchy, navigation flow, and CTA placement are locked at this stage.",
  },
  {
    title: "Visual Design",
    description:
      "Full high-fidelity mockups with your brand applied — typography, colour, iconography, imagery. Reviewed on both desktop and mobile before finalisation.",
  },
  {
    title: "Delivery & Handoff",
    description:
      "Figma project files, exported assets, style guide, and developer-ready specs. Ready for direct use or for our own development team to build from.",
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

export default function WebsiteDesigningNoida() {
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
                <SectionBadge>Website Designing Company in Noida</SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Website Designing Company in Noida
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Noida&apos;s IT sector evaluates websites with an engineer&apos;s
                eye for detail. Our design team — based right here in Noida —
                creates interfaces that communicate technical credibility while
                remaining visually sharp and conversion-focused.
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
                  Local Noida Team
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  5000+ Designs Delivered
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Figma-First Process
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

      {/* Locations */}
      <section className="py-16 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Our Presence</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Website Designing Services Across India
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              One design team, consistent creative standards — serving Noida,
              Gurgaon, Delhi, Pune, and Mumbai from our NCR base.
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

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>What We Design</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Website Designing Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              From brand identity systems to complex SaaS UI — see our{" "}
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

      {/* Process */}
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Why Grox Media</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Why Noida Businesses Choose Our Design Team
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

      {/* Design Tools */}
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

      {/* SEO Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-6">
              About Our Website Designing Company in Noida
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Noida&apos;s IT and technology sector has an interesting design
                problem: businesses in this market are often technically
                sophisticated but visually underserved. The engineering quality
                of their products and services is high, but the website design
                lags behind — generic templates, outdated layouts, and unclear
                visual hierarchies that don&apos;t communicate the company&apos;s
                actual capabilities. This is the gap we fill. Our design team
                works specifically on making the visual presentation match the
                technical quality of what Noida&apos;s best companies actually
                deliver.
              </p>
              <p>
                For Noida&apos;s startups and product companies, website design
                is often the first real test of how a brand presents itself to
                investors and enterprise buyers. The stakes are high, and the
                margin for visual error is low — a potential investor who
                clicks your website link forms an opinion faster than your
                elevator pitch. We approach these projects with that pressure in
                mind: rigorous briefing, structured wireframing, and visual
                design that earns attention before any copy is read. Our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#ea580c] hover:underline"
                >
                  portfolio
                </Link>{" "}
                includes examples from companies at exactly this stage.
              </p>
              <p>
                Being based in Noida makes collaboration straightforward for
                local clients. Most of our work happens over structured async
                communication — Figma comments, video review calls, and shared
                project documentation — but in-person sessions at kickoff or key
                milestones are available. If you&apos;re evaluating{" "}
                <Link
                  href="/services"
                  className="text-[#ea580c] hover:underline"
                >
                  web design services in Noida
                </Link>
                , we&apos;re happy to share work samples relevant to your
                specific sector before you commit to anything.
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

      {/* CTA */}
      <motion.section
        {...fadeUp}
        className="bg-gradient-to-r from-[#ea580c] to-[#111827] py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Design That Reflects the Quality of Your Noida Business
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Your technical excellence deserves a visual presentation that matches
            it. Let&apos;s design that together.
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
                q: "How much does website design cost in Noida?",
                a: "Website design pricing in Noida starts at ₹10,000–₹25,000 for a professional business site. Landing pages and campaign pages start at ₹7,000. Full UI/UX design for web applications or SaaS dashboards is scoped after a requirements call. All pricing is fixed and itemised — no vague 'design package' charges.",
              },
              {
                q: "What's the difference between website design and development — do you do both?",
                a: "Design is the visual and UX layer — layouts, typography, color systems, and user flows. Development is converting those designs into working code. We do both in-house, which means your Figma designs get built exactly as they look — no interpretation errors between teams.",
              },
              {
                q: "We're an IT company in Sector 62 — do you design for B2B audiences?",
                a: "Yes. B2B web design has different priorities than B2C — credibility signals, services clarity, case study presentation, and lead capture flows matter more than flashy animations. We design for how B2B buyers actually evaluate vendors: systematically and with high scrutiny.",
              },
              {
                q: "Can you redesign our website without breaking our current Google rankings?",
                a: "Yes. Before the visual redesign starts, we map your current indexed pages, ranking keywords, and internal link structure. The new design preserves these signals — URL structures stay intact, heading hierarchies are improved not disrupted, and page load times typically improve, which benefits rankings.",
              },
              {
                q: "How many design revisions do we get?",
                a: "We include two rounds of design revisions for each deliverable — homepage, inner pages, and mobile views. Additional revision rounds are available at a transparent hourly rate. Most Noida clients finalise designs within the included rounds because we validate direction with wireframes before investing in full visual design.",
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
