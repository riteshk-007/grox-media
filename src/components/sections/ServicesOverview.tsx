"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  Code,
  Megaphone,
  Smartphone,
  Search,
  Palette,
  Headphones,
} from "lucide-react";
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

export default function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge>Our Services</SectionBadge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl lg:text-5xl">
            Comprehensive Digital Solutions for Your Business
          </h2>
        </div>

        <motion.div
          className="mt-6 md:mt-12 grid w-full min-w-0  gap-2  md:gap-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {services.map((svc, i) => (
            <ServiceVideoCard
              key={svc.title}
              title={svc.title}
              description={svc.description}
              videoSrc={svc.videoSrc}
              posterSrc={svc.posterSrc}
              icon={svc.Icon}
              delay={i * 0.06}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
