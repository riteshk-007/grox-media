"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const inputClass =
  "rounded-xl border border-gray-200 bg-white p-4 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-groxBlue/40";

type ContactProps = {
  /** When false, hides the large section title (e.g. contact page uses PageHero). */
  showIntro?: boolean;
};

const Contact = ({ showIntro = true }: ContactProps) => {
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
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
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

  const infoCard = (
    icon: React.ReactNode,
    title: string,
    children: React.ReactNode,
    className?: string
  ) => (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        "rounded-xl bg-gray-50 p-6 transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#111827]">{title}</h3>
          <div className="mt-1 text-[#6b7280]">{children}</div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="contact" className="border-t border-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showIntro ? (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#111827] md:text-4xl">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#6b7280]">
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll get back to you shortly.
            </p>
          </div>
        ) : null}

        <div
          className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 ${showIntro ? "mt-12" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {infoCard(
              <Phone className="h-6 w-6 text-groxBlue" />,
              "Phone",
              <a
                href="tel:+919266806477"
                className="text-[#374151] hover:text-groxBlue"
              >
                +91 92668 06477
              </a>
            )}
            {infoCard(
              <Mail className="h-6 w-6 text-groxOrange" />,
              "Email",
              <a
                href="mailto:groxmedia55@gmail.com"
                className="break-all hover:text-groxOrange"
              >
                groxmedia55@gmail.com
              </a>
            )}
            {infoCard(
              <MapPin className="h-6 w-6 text-groxBlue" />,
              "Location",
              <span>New Delhi, India</span>
            )}
            {infoCard(
              <Instagram className="h-6 w-6 text-pink-600" />,
              "Instagram",
              <a
                href="https://www.instagram.com/groxmedia55/"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all hover:text-pink-600"
              >
                @groxmedia55
              </a>
            )}
            {infoCard(
              <Linkedin className="h-6 w-6 text-blue-700" />,
              "LinkedIn",
              <a
                href="https://www.linkedin.com/in/manish-kumar-7a757b211/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                Manish Kumar
              </a>
            )}
            <p className="text-center text-sm text-[#9ca3af] md:text-left">
              Mon-Sat, 10 AM - 7 PM IST · 24-hour email response time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
          >
            <h3 className="text-xl font-bold text-[#111827]">
              Send Us a Message
            </h3>
            <p className="mt-1 text-sm text-[#6b7280]">
              Fill out the form and we&apos;ll get back to you within 24 hours
            </p>
            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Thank you!
                </h4>
                <p className="text-gray-600">We&apos;ve received your message.</p>
                <p className="mt-2 text-sm text-gray-500">
                  Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-[#374151]"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#374151]"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-[#374151]"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[#374151]"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={cn(inputClass, "min-h-[150px] resize-y")}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full rounded-xl bg-blue-700 py-6 text-lg font-semibold text-white hover:bg-blue-800",
                    isSubmitting && "opacity-60"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="-ml-1 mr-2 inline h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
