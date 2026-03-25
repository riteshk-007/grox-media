"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

const fade = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          {...fade}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400"
        >
          DIGITAL EXCELLENCE REDEFINED
        </motion.p>
        <motion.h1
          {...fade}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 text-balance text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#111827] md:text-7xl"
        >
          We Build{" "}
          <span className="text-groxOrange">Digital</span>{" "}
          <br className="hidden sm:block" />
          <span className="text-groxOrange">Experiences</span> That Matter
        </motion.h1>
        <motion.p
          {...fade}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]"
        >
          Grox Media transforms your vision into powerful digital solutions. We
          specialize in cutting-edge web development, stunning design, and
          strategic growth.
        </motion.p>
        <motion.div
          {...fade}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-groxBlue px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-blue-900"
          >
            View Our Work
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-[#111827] transition hover:border-groxBlue hover:text-groxBlue"
          >
            Contact Us
          </Link>
        </motion.div>
        <motion.div
          {...fade}
          transition={{ duration: 0.55, delay: 0.48 }}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <div className="flex -space-x-3">
            {["/user1.jpg", "/user2.jpg", "/user3.jpg"].map(
              (img, i) => (
                <div key={i}>
                  <Image src={img} alt="Client" className="object-cover rounded-full h-12 w-12" width={48} height={48} />
                </div>
              )
            )}
          </div>
          <p className="text-sm font-semibold text-[#374151]">
            Trusted by 5000+ Clients
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#6b7280]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-groxOrange" />
              Verified Agency ✓
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-groxOrange" />
              Top Rated ✓
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
