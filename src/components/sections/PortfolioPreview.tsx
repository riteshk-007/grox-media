"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import { projects } from "@/data/projects";

export default function PortfolioPreview() {
  const top = projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-16 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge>Our Work</SectionBadge>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl lg:text-5xl">
            Turning Visions Into Digital Reality
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#6b7280]">
            Explore our latest client projects and see how we deliver results.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {top.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <Link
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-groxBlue">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg  font-semibold text-[#111827]">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm sm:text-base text-[#6b7280]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs sm:text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="rounded-full border-2 border-gray-300 px-8 py-3 text-sm sm:text-base font-semibold text-[#111827] transition hover:border-groxBlue hover:text-groxBlue"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
