"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Clock,
  User,
  ArrowRight,
  Loader2,
  Check,
  ExternalLink,
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
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const inputCls =
  "mb-4 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 pl-12 text-[#111827] placeholder:text-gray-400 transition-all duration-200 focus:border-[#1e40af] focus:outline-none focus:ring-2 focus:ring-blue-500/30";

export default function ContactPage() {
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

  const infoCards = [
    {
      icon: Phone,
      circle: "bg-blue-50 text-[#1e40af]",
      label: "Phone",
      value: (
        <a href="tel:+919266806477" className="font-semibold text-[#111827]">
          +91 92668 06477
        </a>
      ),
    },
    {
      icon: Mail,
      circle: "bg-orange-50 text-[#ea580c]",
      label: "Email",
      value: (
        <a
          href="mailto:groxmedia55@gmail.com"
          className="font-semibold text-[#111827]"
        >
          groxmedia55@gmail.com
        </a>
      ),
    },
    {
      icon: MapPin,
      circle: "bg-green-50 text-green-600",
      label: "Location",
      value: (
        <span className="font-semibold text-[#111827]">New Delhi, India</span>
      ),
    },
    {
      icon: Share2,
      circle: "bg-purple-50 text-purple-600",
      label: "Follow Us",
      value: (
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="https://www.instagram.com/groxmedia1?igsh=MW5wYTA4aTQ2aWt6bw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#1e40af] hover:underline"
          >
            Instagram @groxmedia1
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/manish-kumar-7a757b211/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#1e40af] hover:underline"
          >
            LinkedIn — Manish Kumar
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      ),
    },
    {
      icon: Clock,
      circle: "bg-amber-50 text-amber-700",
      label: "Working Hours",
      value: (
        <div>
          <p className="font-semibold text-[#111827]">
            Mon-Sat, 10 AM - 7 PM IST
          </p>
          <p className="mt-1 text-sm text-gray-500">
            24-hour email response time
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/20 to-orange-400/20 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <SectionBadge>Get in Touch</SectionBadge>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-6 text-2xl sm:text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl lg:text-6xl"
          >
            Let&apos;s Build Something Amazing Together
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-500"
          >
            Have a project in mind? We&apos;d love to hear from you. Send us a
            message and we&apos;ll get back to you shortly.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    card.circle
                  )}
                >
                  <card.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    {card.label}
                  </p>
                  <div className="mt-1 text-base">{card.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-10 lg:col-span-3"
          >
            <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-[#111827]">
              Send Us a Message
            </h2>
            <p className="mb-8 text-sm text-gray-400">
              Fill out the form and we&apos;ll get back to you within 24 hours
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
                  We&apos;ve received your message.
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
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={inputCls}
                    aria-label="Your name"
                  />
                  {errors.name && (
                    <p className="-mt-2 mb-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={inputCls}
                    aria-label="Your email"
                  />
                  {errors.email && (
                    <p className="-mt-2 mb-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={inputCls}
                    aria-label="Your phone"
                  />
                  {errors.phone && (
                    <p className="-mt-2 mb-2 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    handleInputChange("message", e.target.value)
                  }
                  className={cn(
                    inputCls,
                    "min-h-[140px] resize-none pl-5 pt-4",
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
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e40af] py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#1e3a8a] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
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

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-500 via-orange-500 to-[#1a1a2e] py-16"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-3 text-lg text-white/80">
            We respond within 24 hours
          </p>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          <iframe
            title="Map of New Delhi"
            className="h-64 w-full grayscale-[20%] md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=New%20Delhi%20India&output=embed"
          />
        </div>
      </div>
    </main>
  );
}
