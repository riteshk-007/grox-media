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
    <section id="about" className="py-16 md:py-24">
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
                alt="About Grox Media"
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
            <h2 className="text-3xl font-extrabold text-[#111827] md:text-4xl">
              We Are Grox Media
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6b7280]">
              At Grox Media, we believe in the power of digital transformation.
              We are a team of passionate developers, designers, and strategists
              dedicated to helping businesses thrive in the digital age.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#6b7280]">
              Our mission is to deliver exceptional digital experiences that
              drive results. From pixel-perfect designs to robust code, we
              handle every aspect of your digital presence with precision and
              care.
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
