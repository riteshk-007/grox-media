"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">
          Our Recent <span className="text-blue-600">Work</span>
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          Explore our latest client projects.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all hover:shadow-2xl"
            >
              <Link
                href={project.link || "#"}
                target="_blank"
                className="flex h-full flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-2 flex justify-between items-start">
                    <div>
                      <p className="mb-1 text-sm font-semibold text-blue-600">
                        {project.category}
                      </p>
                      <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-blue-600">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-4 flex-grow text-sm text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border bg-gray-100 px-2 py-1 text-xs text-gray-600"
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
      </div>
    </section>
  );
};

export default Portfolio;
