"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dinesh Verma",
    company: "MonarkFX",
    role: "Founder & CEO",
    quote:
      "Professional and timely delivery. The website exceeded our expectations.",
  },
  {
    name: "Sanjeev Kumar",
    company: "EDAWS",
    role: "Founder",
    quote: "Reliable partner. Smooth process and quality work guaranteed.",
  },
  {
    name: "Nitesh",
    company: "Nifty Nitesh",
    role: "Founder",
    quote: "Solid development and excellent support. Highly recommended.",
  },
  {
    name: "Rahul Sharma",
    company: "TechFlow",
    role: "CTO",
    quote:
      "GroxMedia transformed our digital presence. The team is incredibly talented.",
  },
  {
    name: "Priya Patel",
    company: "DesignStudio",
    role: "Creative Director",
    quote:
      "A perfect blend of creativity and technical expertise. Loved working with them.",
  },
];

const Testimonials = () => {
  return (
    <section className="md:py-16 py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Trusted by <span className="text-groxBlue">Industry Leaders</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our clients
          have to say about their experience with{" "}
          <span className="text-groxBlue">GroxMedia</span>.
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex overflow-hidden max-w-7xl mx-auto">
          <motion.div
            className="flex gap-8 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[350px] md:w-[450px] bg-gray-50 p-8 border border-gray-100 hover:border-groxOrange transition-colors duration-300 group relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200 group-hover:text-groxOrange/20 transition-colors" />
                <div className="flex gap-1 text-groxOrange mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed font-medium">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-groxBlue text-white flex items-center justify-center font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
