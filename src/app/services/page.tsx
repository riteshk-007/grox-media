"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import ServicesSection, { services } from "@/components/shared/ServicesSection";
import { digital, graphic, mvp, web } from "@/assets";
import Breadcrumbs2 from "@/components/Breadcrumbs2";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import CallDialog from "@/components/shared/CallDialog";
import WhatsAppDialog from "@/components/shared/WhatsAppDialog";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ServicesPage() {
  const [showCallDialog, setShowCallDialog] = useState(false);
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

  const serviceImages: Record<string, StaticImageData> = {
    "web-designing": web,
    "digital-marketing": digital,
    "graphic-design": graphic,
    "mvp-development": mvp,
  };

  const faqs = [
    {
      q: "Do you provide SEO with development?",
      a: "Yes. We implement on-page and technical SEO best practices during build, and offer ongoing SEO plans.",
    },
    {
      q: "Can you manage Google Ads and Meta Ads?",
      a: "Absolutely. We set up conversion tracking, write high-quality ad copy, and optimize campaigns weekly.",
    },
    {
      q: "How do you price projects?",
      a: "Fixed-price for well-scoped projects, and monthly retainers for ongoing work (SEO/Ads/design updates).",
    },
    {
      q: "What technologies do you use?",
      a: "We use modern tech stack including Next.js, React, Node.js, and cloud platforms for scalable solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-white pb-16 pt-20">
      {/* Hero Section with Grid Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-groxBlue via-blue-700 to-groxOrange text-white">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-services-grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <motion.rect
              width="100%"
              height="100%"
              fill="url(#hero-services-grid)"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                x: [0, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <Breadcrumbs2
            items={[{ name: "Home", href: "/" }, { name: "Services" }]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Full‑Stack IT Services
              <span className="block text-groxOrange mt-2">
                That Drive Growth
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-gray-100 text-lg md:text-xl leading-relaxed">
              Websites that convert, marketing that scales, design that
              communicates, and MVPs that ship fast.
            </p>

            {/* Contact Buttons - Test CallDialog */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setShowCallDialog(true)}
                className="px-6 py-3 bg-groxOrange text-white font-semibold hover:bg-orange-600 transition-all shadow-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
              <button
                onClick={() => setShowWhatsAppDialog(true)}
                className="px-6 py-3 bg-green-500 text-white font-semibold hover:bg-green-600 transition-all shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Services Overview */}
        <ServicesSection />

        {/* Detailed Service Sections */}
        <div className="mt-20 space-y-20">
          {services.map((s, idx) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`order-2 ${
                  idx % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-700 leading-7 text-lg mb-6">
                  {s.description}
                </p>
                {s.features && (
                  <ul className="grid sm:grid-cols-2 gap-3 text-gray-800 mb-8">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 bg-groxOrange flex-shrink-0" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-groxBlue text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-all shadow-md"
                  >
                    Talk to us about {s.title}
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-block border-2 border-gray-300 px-6 py-3 font-semibold hover:border-groxBlue hover:text-groxBlue transition-all"
                  >
                    See our work
                  </Link>
                </div>
              </div>
              <div
                className={`order-1 ${
                  idx % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-gray-200 shadow-lg bg-white">
                  <Image
                    src={serviceImages[s.id] || web}
                    alt={`${s.title} illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Process Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Discovery",
                d: "We scope goals, audience, and success metrics to ensure alignment.",
              },
              {
                t: "Design & Build",
                d: "Ship in short sprints with clear demos and continuous feedback.",
              },
              {
                t: "Launch & Grow",
                d: "Track conversions and keep improving performance post-launch.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-gray-200 p-6 bg-white hover:border-groxBlue transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-groxBlue to-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-groxBlue transition-colors">
                  {step.t}
                </h3>
                <p className="text-gray-700">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-16 bg-blue-50 border-l-4 border-groxBlue p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How We Price
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Fixed-price for clear scope. Monthly retainers for ongoing
            SEO/Ads/updates. Every project starts with discovery to reduce
            surprise and risk.
          </p>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="divide-y-2 divide-gray-200 border-2 border-gray-200 bg-white">
            {faqs.map((f, i) => (
              <details key={i} className="p-6 group open:bg-gray-50">
                <summary className="cursor-pointer font-semibold text-lg text-gray-900 list-none flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="text-groxBlue text-2xl transition group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <Contact />
      </div>

      {/* Dialogs */}
      <CallDialog
        phoneNumber="+91 92668 06477"
        show={showCallDialog}
        onClose={() => setShowCallDialog(false)}
      />
      <WhatsAppDialog
        show={showWhatsAppDialog}
        onClose={() => setShowWhatsAppDialog(false)}
        phoneNumber="+91 92668 06477"
        whatsappMessage="Hi! I'm interested in your services. Can we discuss my project?"
      />
    </main>
  );
}
