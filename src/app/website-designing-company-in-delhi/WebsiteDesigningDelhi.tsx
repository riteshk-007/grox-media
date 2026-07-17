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
    label: "Premium UI/UX for Gurgaon's corporate and startup market",
    href: "/website-designing-company-in-gurgaon",
  },
  {
    city: "Noida",
    label: "B2B and SaaS-focused design for Noida's IT ecosystem",
    href: "/website-designing-company-in-noida",
  },
  {
    city: "Pune",
    label: "Clean, purposeful design for Pune's tech-native market",
    href: "/website-designing-company-in-pune",
  },
  {
    city: "Mumbai",
    label: "Premium brand and campaign design for Mumbai brands",
    href: "/website-designing-company-in-mumbai",
  },
  {
    city: "Delhi",
    label: "Visual identity and web design for Delhi's diverse SME base",
    href: "/website-designing-company-in-delhi",
  },
];

const services = [
  {
    icon: Layout,
    title: "Custom Website Design",
    description:
      "Designed from the ground up for Delhi's diverse business landscape — whether you're a South Delhi consultancy, a Nehru Place IT vendor, or a retail brand going digital from Lajpat Nagar.",
    bg: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Delhi's web visitors arrive from every device type. We design for consistency — the same brand impression on a basic Android phone as on a high-resolution desktop monitor.",
    bg: "bg-orange-50",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "User experience design that reduces friction and guides visitors toward conversion. For Delhi's competitive market, clarity and trust signals in the interface matter as much as visual appeal.",
    bg: "bg-green-50",
  },
  {
    icon: Sparkles,
    title: "Landing Page Design",
    description:
      "Conversion-focused single pages for Delhi businesses running campaigns, promotions, or enquiry-generation for specific services. Each element placed with a clear conversion rationale.",
    bg: "bg-purple-50",
  },
  {
    icon: Monitor,
    title: "Dashboard & Admin Design",
    description:
      "Internal tool interfaces designed for the people who actually use them — your Delhi-based operations team. Clean data presentation, logical workflows, zero unnecessary complexity.",
    bg: "bg-teal-50",
  },
  {
    icon: Palette,
    title: "Brand Identity & Logo Design",
    description:
      "For established Delhi businesses that have outgrown their original brand, and for new businesses establishing their visual identity — logos, colour systems, typography, and brand guidelines.",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "In-House Creative Team",
    title: "Designers Who Own the Brief",
    description:
      "The designer who takes your brief is the designer who creates your website — not a junior stand-in working from a senior's notes. Direct ownership produces better work.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "On-Time Completion",
    title: "Schedules That Hold",
    description:
      "Delhi businesses operate on tight calendars. We build design timelines with milestones and dependencies mapped upfront, so delays are rare and flagged early when they occur.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Advantage",
    title: "Fair Pricing, No Ambiguity",
    description:
      "Every quote breaks down what you're paying for — wireframes, visual design, revision rounds, and final delivery. No bundled packages that obscure where the money goes.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Ongoing Availability",
    title: "Support Through the Full Relationship",
    description:
      "After the design is delivered, we remain available for asset requests, updates, and new design work. No need to re-brief a new team every time something changes.",
  },
  {
    icon: TrendingUp,
    stat: "100%",
    label: "Conversion-Oriented",
    title: "Designed to Convert, Not Just Impress",
    description:
      "Visual design decisions are grounded in user behaviour research — where users look, what builds trust, and what reduces hesitation in Delhi's specific buyer demographics.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Projects Across Industries",
    title: "Sector Experience at Depth",
    description:
      "Delhi's business diversity means we've designed for most sectors you'd find in the city — retail, professional services, education, healthcare, government, and more.",
  },
];

const processSteps = [
  {
    title: "Discovery Session",
    description:
      "We understand your business category, your customers' expectations, and the visual language your sector responds to — before deciding on any design direction.",
  },
  {
    title: "Direction Alignment",
    description:
      "A curated moodboard and visual direction brief approved before any Figma work begins. Avoids expensive creative rework from misaligned early assumptions.",
  },
  {
    title: "Wireframing",
    description:
      "Structural layout and content hierarchy mapped as low-fidelity wireframes. You approve the flow and structure before colour and typography are layered on.",
  },
  {
    title: "Full Design Build",
    description:
      "High-fidelity mockups with all design components — hero sections, typography, iconography, CTAs, mobile views. Reviewed in Figma before any development involvement.",
  },
  {
    title: "Asset Delivery",
    description:
      "Complete Figma project files, brand style guide, and exported assets. Delivered with developer specs if our team is building, or ready for your own developers.",
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

export default function WebsiteDesigningDelhi() {
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
                <SectionBadge>Website Designing Company in Delhi</SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Website Designing Company in Delhi
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Delhi&apos;s business community ranges from legacy trading
                houses to first-generation digital brands. Good website design
                reads that context — it doesn&apos;t apply the same visual
                language to a Karol Bagh retail business and a Connaught Place
                financial consultancy. We design for the specific audience and
                sector, not for a generic brief.
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
                  5000+ Designs Delivered
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Industry-Specific Design
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
              Website Designing Across India
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Rooted in the NCR, designing for clients in Delhi, Gurgaon, Noida,
              Pune, and Mumbai — with the same rigour across every city.
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>What We Design</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Website Designing Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              From logos to full UX systems — see our{" "}
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
              Why Delhi Businesses Choose Our Design Team
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
              About Our Website Designing Company in Delhi
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Delhi&apos;s business diversity is its defining characteristic
                — and it&apos;s what makes generic web design particularly
                ineffective here. A visual language that works for a South Delhi
                law firm looks wrong for a Chandni Chowk wholesale business, and
                vice versa. The audiences have different aesthetic expectations,
                different trust signals, and different conversion triggers. We
                approach every Delhi project by studying the specific audience
                first — not by applying a design style we&apos;re comfortable
                with and hoping it fits.
              </p>
              <p>
                What we&apos;ve found consistently across Delhi&apos;s business
                landscape is that established businesses tend to undervalue
                design investment relative to the trust it generates. A firm
                that has been operating for 15 years and has strong offline
                relationships often has a website that doesn&apos;t reflect that
                track record at all — dated visuals, no clear service hierarchy,
                and a contact page that asks for effort before delivering any
                value. We redesign with a specific objective: make the website
                as credible and easy to engage with as your best in-person sales
                conversation. See examples in our{" "}
                <Link
                  href="/portfolio"
                  className="text-[#ea580c] hover:underline"
                >
                  portfolio
                </Link>
                .
              </p>
              <p>
                For newer Delhi businesses building their digital presence from
                scratch, the challenge is different: establishing credibility
                without years of history to point to. This is where design
                carries significant weight — the right visual identity, a
                well-structured website, and clear UX can close the credibility
                gap faster than almost anything else. If you&apos;re looking for{" "}
                <Link
                  href="/services"
                  className="text-[#ea580c] hover:underline"
                >
                  web design services in Delhi
                </Link>{" "}
                that understand both of these contexts, we&apos;re ready to
                start with a conversation about your specific situation.
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
            Delhi&apos;s Diverse Market Deserves Design That Understands It
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Generic design fails in Delhi&apos;s competitive market. We design
            for your specific audience, sector, and business goals.
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
                q: "How much does professional website design cost in Delhi?",
                a: "For Delhi businesses, a professionally designed website starts at ₹14,000–₹30,000 depending on page count and complexity. E-commerce design with product page templates starts from ₹30,000. We give an exact quote after understanding your brand, audience, and business goals — no approximations upfront.",
              },
              {
                q: "How long does the full website design process take?",
                a: "Initial wireframes are delivered within 3–4 days of project kickoff. Full high-fidelity design across all pages takes 10–18 working days depending on scope. We share progress at every milestone — you're reviewing real work, not waiting for a final reveal.",
              },
              {
                q: "Our Delhi business has a strong offline reputation — can you translate that into a website design?",
                a: "That's one of the most common briefs we work with for established Delhi businesses. We start with a brand discovery session — understanding your history, values, target customers, and competitive positioning. The design reflects your reputation visually: trustworthy, professional, and specific to your sector.",
              },
              {
                q: "Do you provide the design files after the project?",
                a: "Yes. Every client receives their complete Figma project files, exported assets, and a basic style guide documenting colors, typography, and component usage. These are yours to use independently — whether for printing, presentations, or future design work.",
              },
              {
                q: "We serve customers across India from our Delhi base — will the design work for all regions?",
                a: "Yes. We design for national reach from the start — no regional visual clichés that only resonate locally, fast load times that work across India's varied internet infrastructure, and accessibility considerations for users on older devices. Your Delhi base shouldn't limit your website's national appeal.",
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
