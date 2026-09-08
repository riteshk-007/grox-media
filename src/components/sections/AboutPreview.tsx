"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { about } from "@/assets";

const points = [
  "Precision in every pixel and line of code",
  "Protection of your data and digital assets",
  "Professional Support whenever you need it",
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-10 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <Image
                src={about}
                alt="The Grox Media team at work in the Noida office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-4xl">
              We Are Grox Media LLP
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6b7280]">
              We are a Noida-headquartered team of developers, designers, and
              digital strategists working with businesses across Delhi NCR,
              Mumbai, and Pune — from first-time founders to established brands.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#6b7280]">
              Websites, mobile apps, SEO, branding, and performance marketing
              all sit under one roof, so your digital presence is built by one
              team that understands the whole picture.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-groxOrange" />
                  <span className="font-medium text-[#374151]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full border-2 border-groxBlue px-6 py-3 text-sm font-semibold text-groxBlue transition hover:bg-groxBlue hover:text-white"
            >
              Learn more about us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
