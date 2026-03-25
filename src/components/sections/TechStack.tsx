"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data/technologies";

export default function TechStack() {
  let globalIndex = 0;

  return (
    <section className="w-full max-w-full overflow-x-hidden py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold leading-snug text-[#111827] md:text-4xl md:leading-snug">
          Powered by Modern Technologies
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#6b7280] md:text-lg md:leading-relaxed">
          We use the latest tools and frameworks to build scalable, secure, and
          high-performance solutions.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl border border-gray-100 bg-gray-50/80 p-6 shadow-sm md:p-8 ${category.items.length === 1 ? "md:col-span-2" : ""}`}
            >
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-groxBlue">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.items.map((tech) => {
                  const i = globalIndex++;
                  return (
                    <motion.div
                      key={`${category.title}-${tech.name}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.6) }}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-[#374151] shadow-sm"
                    >
                      <tech.Icon className="h-5 w-5 shrink-0 text-[#111827]" aria-hidden />
                      {tech.name}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
