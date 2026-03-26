"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Megaphone,
  Smartphone,
  Search,
  Users,
  Clock,
  IndianRupee,
  Headphones,
  Zap,
  Trophy,
  CheckCircle,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import TechStack from "@/components/sections/TechStack";
import { web, digital, mvp, graphic, about } from "@/assets";
import ServiceVideoCard from "@/components/sections/ServiceVideoCard";


const services = [
  {
    title: "Website Development",
    description:
      "Custom websites built with modern technologies for speed, performance, and SEO-ready structure.",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/website.mp4",
    posterSrc: web,
    Icon: Code,
  },
  {
    title: "Lead Generation & Performance Marketing",
    description:
      "Performance-focused marketing campaigns that generate qualified leads and improve conversions.",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/digital%20marketing.mp4",
    posterSrc: digital,
    Icon: Megaphone,
  },
  {
    title: "Android/iOS App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with smooth user experiences.",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/mobile%20app.mp4",
    posterSrc: mvp,
    Icon: Smartphone,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Technical SEO, content optimization, and performance improvements to help you rank higher and grow organically.",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/SEO.mp4",
    posterSrc: web,
    Icon: Search,
  },
  {
    title: "Branding",
    description:
      "Logos, brand identity, and creative assets that make your business recognizable and trustworthy.",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/branding.mp4",
    posterSrc: graphic,
    Icon: Palette,
  },
  {
    title: "IT Support",
    description:
      "Reliable IT support and maintenance to keep your systems fast, secure, and always available.",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/IT%20Support.mov",
    posterSrc: about,
    Icon: Headphones,
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We understand your business goals, target audience, and project requirements.",
  },
  {
    title: "Design",
    description:
      "Create wireframes and visual designs that align with your brand identity.",
  },
  {
    title: "Development",
    description:
      "Build your solution using modern tech stack with clean, scalable code.",
  },
  {
    title: "Testing",
    description:
      "Rigorous QA testing across devices and browsers for a flawless launch.",
  },
  {
    title: "Launch & Support",
    description:
      "Deploy your project and provide ongoing maintenance and support.",
  },
];

const whyUs = [
  {
    icon: Users,
    stat: "50+",
    label: "Experts",
    title: "Expert Team",
    description:
      "Skilled developers with 5+ years experience delivering world-class solutions for your business growth.",
  },
  {
    icon: Clock,
    stat: "98%",
    label: "Success Rate",
    title: "On-Time Delivery",
    description:
      "98% projects delivered on time. Your deadlines are our priority with guaranteed project completion.",
  },
  {
    icon: IndianRupee,
    stat: "40%",
    label: "Cost Saving",
    title: "Best Pricing",
    description:
      "Premium quality at competitive rates. Get 40% more value compared to other agencies in market.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Available",
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance. We&apos;re always available when you need us.",
  },
  {
    icon: Zap,
    stat: "100%",
    label: "Modern Stack",
    title: "Latest Tech",
    description:
      "Cutting-edge technology stack and modern frameworks to build future-ready scalable solutions.",
  },
  {
    icon: Trophy,
    stat: "5000+",
    label: "Projects Done",
    title: "Proven Results",
    description:
      "5000+ successful projects with 99% client satisfaction rate and industry-leading performance.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/20 to-orange-400/20 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <SectionBadge>Our Services</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-2xl sm:text-4xl font-extrabold text-[#111827] md:text-5xl lg:text-6xl"
          >
            Comprehensive Digital Solutions Tailored to Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-500"
          >
            Websites that convert, marketing that scales, design that
            communicates, and MVPs that ship fast.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid w-full min-w-0  gap-2 md:gap-6  lg:grid-cols-3">
          {services.map((svc) => (
            <ServiceVideoCard
              key={svc.title}
              title={svc.title}
              description={svc.description}
              videoSrc={svc.videoSrc}
              icon={svc.Icon}

            />
          ))}
        </div>
      </div>

      <section className="bg-gray-50/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Our Process</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              How We Bring Your Ideas to Life
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
                  <p className="mt-2 text-sm text-gray-500">{step.description}</p>
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
                  <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div {...fadeUp} className="text-center">
          <SectionBadge>Why Us</SectionBadge>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
            We Don&apos;t Just Code, We Create Success
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
              <p className="text-3xl font-extrabold text-[#1e40af]">{w.stat}</p>
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

      <div className="mx-auto max-w-4xl px-6 py-16">
        <motion.div {...fadeUp}>
          <TechStack />
        </motion.div>
      </div>

      <motion.section
        {...fadeUp}
        className="bg-gradient-to-r from-orange-500 via-orange-600 to-[#1a1a2e] py-20"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-white/70">
            Get a free consultation and let&apos;s discuss your ideas
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#ea580c] transition hover:bg-gray-100"
          >
            Get Free Consultation →
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
