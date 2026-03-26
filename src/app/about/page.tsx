"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Target,
  Eye,
  CheckCircle,
  Shield,
  Headphones,
  Lightbulb,
  Award,
  Heart,
  Zap,
  ShieldCheck,
  ScanEye,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import TechStack from "@/components/sections/TechStack";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function CountStat({
  target,
  suffix,
  raw,
  label,
  icon: Icon,
}: {
  target?: number;
  suffix?: string;
  raw?: string;
  label: string;
  icon: typeof Users;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(raw ?? "0");

  useEffect(() => {
    if (raw || target === undefined || !isInView) return;
    const c = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix ?? ""}`),
    });
    return () => c.stop();
  }, [isInView, target, suffix, raw]);

  return (
    <div
      ref={ref}
      className="relative border-r border-gray-200 p-6 text-center last:border-r-0 md:border-r"
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Icon className="h-6 w-6 text-[#1e40af]" />
      </div>
      <div className="text-4xl font-extrabold tabular-nums text-[#111827] md:text-5xl">
        {raw ?? display}
      </div>
      <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
        {label}
      </p>
    </div>
  );
}

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead with cutting-edge technologies and creative solutions.",
    bg: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Every pixel, every line of code meets the highest standards.",
    bg: "bg-orange-50",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We put your goals first.",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Fast-paced delivery without compromising quality.",
    bg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Your data and digital assets are always protected.",
    bg: "bg-blue-50",
  },
  {
    icon: ScanEye,
    title: "Transparency",
    description: "Clear communication and honest pricing at every step.",
    bg: "bg-purple-50",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/25 via-indigo-400/20 to-purple-400/25 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <SectionBadge>About Us</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-6xl"
          >
            We Are Grox Media
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-500 md:text-xl md:leading-relaxed"
          >
            At Grox Media, we believe in the power of digital transformation.
            We are a team of passionate developers, designers, and strategists
            dedicated to helping businesses thrive in the digital age.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <Target className="h-8 w-8 text-[#1e40af]" />
            </div>
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#111827]">
              Our Mission
            </h2>
            <p className="text-base leading-loose text-gray-500 md:text-lg">
              To deliver exceptional digital experiences that drive results.
              From pixel-perfect designs to robust code, we handle every aspect
              of your digital presence with precision and care.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-700" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
              <Eye className="h-8 w-8 text-[#ea580c]" />
            </div>
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#111827]">
              Our Vision
            </h2>
            <p className="text-base leading-loose text-gray-500 md:text-lg">
              To be the partner founders and teams trust to ship usable,
              delightful products that scale — balancing engineering quality
              with time-to-market.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div {...fadeUp} transition={{ duration: 0.55 }}>
            <SectionBadge className="mb-4">Our Story</SectionBadge>
            <h2 className="mb-6 text-2xl sm:text-3xl font-bold leading-snug text-[#111827] md:text-4xl md:leading-snug">
              Crafting Digital Excellence Since Day One
            </h2>
            <p className="mb-6 text-base leading-loose text-gray-500 md:text-lg">
              Grox Media is a small, focused team of designers, developers and
              strategists. We partner with founders and teams to ship usable,
              delightful products — from marketing websites to MVP apps.
            </p>
            <p className="text-base leading-loose text-gray-500 md:text-lg">
              We keep things practical. Rapid research, pragmatic design and
              iterative build cycles ensure you get measurable results quickly.
              We balance engineering quality with time-to-market.
            </p>
          </motion.div>
          <div className="space-y-4">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <CheckCircle className="h-6 w-6 text-[#1e40af]" />
              </div>
              <div>
                <p className="font-bold text-[#111827]">
                  Precision in every pixel and line of code
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Detail-oriented delivery across design and engineering.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="flex gap-4 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <Shield className="h-6 w-6 text-[#ea580c]" />
              </div>
              <div>
                <p className="font-bold text-[#111827]">
                  Protection of your data and digital assets
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Security-minded practices for everything we ship.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.26 }}
              className="flex gap-4 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                <Headphones className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <p className="font-bold text-[#111827]">
                  Professional Support whenever you need it
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Clear communication and dependable follow-through.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 gap-0 md:grid-cols-4"
          >
            <CountStat
              icon={Users}
              target={50}
              suffix="+"
              label="Experts"
            />
            <CountStat
              icon={Briefcase}
              target={5000}
              suffix="+"
              label="Projects Done"
            />
            <CountStat
              icon={TrendingUp}
              target={98}
              suffix="%"
              label="Success Rate"
            />
            <CountStat icon={Clock} raw="24/7" label="Available" />
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <motion.div {...fadeUp} className="text-center">
          <SectionBadge>Our Values</SectionBadge>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
            What Drives Us
          </h2>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div
                className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${v.bg}`}
              >
                <v.icon className="h-7 w-7 text-[#1e40af]" />
              </div>
              <h3 className="mb-3 text-lg sm:text-base font-bold text-[#111827]">
                {v.title}
              </h3>
              <p className="text-sm leading-loose text-gray-500 md:text-base md:leading-loose">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="w-full py-10 md:py-14">
        <motion.div {...fadeUp} className="w-full">
          <TechStack />
        </motion.div>
      </section>

      <motion.section
        {...fadeUp}
        className="bg-gradient-to-r from-[#1e40af] to-[#111827] py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-white md:text-4xl md:leading-snug">
            Let&apos;s Work Together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70 md:text-xl">
            Ready to transform your digital presence?
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#1e40af] transition hover:bg-gray-100"
          >
            Get in Touch →
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
