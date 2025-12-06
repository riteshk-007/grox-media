"use client";

import React from "react";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import { CheckCircle, Users, Target, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section with Grid Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-groxBlue via-blue-700 to-groxOrange text-white py-20 md:py-32">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="about-hero-grid"
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
              fill="url(#about-hero-grid)"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              About <span className="text-groxOrange">Grox Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We build digital products, websites and marketing that help
              businesses grow. Small team. Big outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-7 h-7 text-groxBlue" />
                Who We Are
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Grox Media is a small, focused team of designers, developers and
                strategists. We partner with founders and teams to ship usable,
                delightful products — from marketing websites to MVP apps.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-groxBlue" />
                Our Approach
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We keep things practical. Rapid research, pragmatic design and
                iterative build cycles ensure you get measurable results
                quickly. We balance engineering quality with time-to-market.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award className="w-7 h-7 text-groxBlue" />
                Our Values
              </h3>
              <ul className="space-y-4">
                {[
                  "Client-first thinking — we prioritise outcomes over features.",
                  "Clarity — clear scopes, timelines and honest estimates.",
                  "Responsibility — we protect your data and deliver reliable software.",
                  "Innovation — we use modern technologies to build future-proof solutions.",
                ].map((value, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-groxOrange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* How We Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Zap className="w-7 h-7 text-groxBlue" />
                How We Work
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Typical engagement starts with a short discovery call. We
                propose a clear scope, then move into design and development
                with regular demos. Most projects run in 2-week sprints so you
                always know what to expect.
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-groxBlue p-6 bg-blue-50"
            >
              <h4 className="font-bold mb-4 text-xl text-gray-900">
                Quick Facts
              </h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-groxOrange"></span>
                  Remote-first
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-groxOrange"></span>
                  10 AM - 7 PM (Mon-Sat)
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-groxOrange"></span>
                  Established: 2020
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-groxOrange"></span>
                  Clients: Startups & SMBs
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-gray-200 p-6 bg-white hover:border-groxBlue transition-colors"
            >
              <h4 className="font-bold mb-3 text-xl text-gray-900">Team</h4>
              <p className="text-gray-700 leading-relaxed">
                Small team of designers and engineers. We scale by contracting
                specialist partners when needed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-gray-200 p-6 bg-gradient-to-br from-groxBlue to-blue-600 text-white"
            >
              <h4 className="font-bold mb-3 text-xl">Why Choose Us?</h4>
              <p className="leading-relaxed">
                We deliver quality work on time, communicate clearly, and focus
                on your business goals.
              </p>
            </motion.div>
          </aside>
        </section>

        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
