"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { projects, type Project } from "@/data/projects";

const filters = [
  "All",
  "Web Development",
  "E-commerce",
  "EdTech",
  "Healthcare",
  "Travel",
  "Finance",
] as const;

function matchesFilter(project: Project, f: (typeof filters)[number]) {
  if (f === "All") return true;
  return project.filter === f;
}

export default function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, active)),
    [active]
  );

  return (
    <main className="min-h-screen pt-6">
      <PageHero
        badge="Our Work"
        title="Turning Visions Into Digital Reality"
        subtitle="Explore our latest client projects and see how we deliver results."
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 py-8">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === f
                ? "bg-groxBlue text-white shadow-sm"
                : "border border-gray-200 bg-white text-[#6b7280] hover:border-gray-300"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
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
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-groxBlue">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[#111827]">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-[#6b7280]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-amber-500/90 to-groxOrange p-10 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">
            Have a Project in Mind?
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-groxOrange transition hover:bg-gray-100"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </main>
  );
}
