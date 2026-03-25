"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import { Palette, Smartphone, Globe, Video } from "lucide-react";
import Image from "next/image";
import { web, digital } from "@/assets";

const largeCards = [
  {
    title: "Web Development",
    description:
      "Custom websites built with Next.js, React, and modern technologies for speed and performance.",
    image: web,
    alt: "Web development",
  },
  {
    title: "Digital Marketing & Design",
    description:
      "Strategic marketing campaigns and intuitive, visually stunning designs that grow your audience and strengthen your brand.",
    image: digital,
    alt: "Digital marketing and design",
  },
];

const smallCards = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description: "Rank higher on search engines and drive organic traffic.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Engaging professional videos, animations, and edits for your business.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Logos, brochures, flyers, and creatives that elevate brand identity.",
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {largeCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold text-[#111827]">{card.title}</h3>
              <p className="mt-2 leading-relaxed text-[#6b7280]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {smallCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-groxBlue/10 p-3 text-groxBlue">
                <card.icon className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-[#111827]">{card.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
