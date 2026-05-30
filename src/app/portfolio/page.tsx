"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Lightbox from "@/components/ui/Lightbox";
import {
  projects,
  graphicItems,
  videoItems,
  type GraphicSubCategory,
  type VideoPlatform,
} from "@/data/projects";
import VideoGrid from "@/components/ui/VideoGrid";
import { Globe, Palette, Video, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "websites" | "graphic" | "video";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "websites", label: "Website", icon: Globe },
  { id: "graphic", label: "Graphic Design", icon: Palette },
  { id: "video", label: "Video Editing", icon: Video },
];

type WebFilter = "All" | "E-commerce" | "Web Development" | "Healthcare" | "EdTech" | "Travel" | "Finance";
const webFilters: WebFilter[] = ["All", "E-commerce", "Web Development", "Healthcare", "EdTech", "Travel", "Finance"];
const graphicSubs: (GraphicSubCategory | "All")[] = ["All", "Social Media Graphics", "3D Work"];
const videoFilters: ("All" | VideoPlatform)[] = ["All", "Instagram", "YouTube", "Facebook"];


const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
  exit:  { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1 },
  exit:   { opacity: 0, y: -12, scale: 0.97 },
};

const graphicCardVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 16 },
  show:   { opacity: 1, scale: 1,    y: 0 },
  exit:   { opacity: 0, scale: 0.92, y: -8 },
};

function FilterChips<T extends string>({ options, active, onChange }: { options: T[]; active: T; onChange: (v: T) => void }) {
  return (
    <div className="mb-7 flex flex-wrap justify-center gap-2">
      {options.map((opt) => (
        <button key={opt} type="button" onClick={() => onChange(opt)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150",
            active === opt
              ? "border-groxOrange bg-groxOrange text-white shadow-sm"
              : "border-gray-200 bg-white text-gray-500 hover:border-groxOrange hover:text-groxOrange"
          )}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab]         = useState<Tab>("websites");
  const [webFilter, setWebFilter]         = useState<WebFilter>("All");
  const [graphicFilter, setGraphicFilter] = useState<GraphicSubCategory | "All">("All");
  const [videoFilter, setVideoFilter]     = useState<"All" | VideoPlatform>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects = webFilter === "All" ? projects : projects.filter((p) => p.filter === webFilter);
  const filteredGraphic  = graphicFilter === "All" ? graphicItems : graphicItems.filter((g) => g.subCategory === graphicFilter);
  const filteredVideo    = videoFilter === "All" ? videoItems : videoItems.filter((v) => v.platform === videoFilter);

  return (
    <main className="min-h-screen pt-6">
      <PageHero
        badge="Our Work"
        title="Turning Visions Into Digital Reality"
        subtitle="Explore our latest client projects and see how we deliver results."
        variant="portfolio"
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        {/* Main tab bar */}
        <div className="flex justify-center py-10">
          <div className="inline-flex gap-1 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" onClick={() => setActiveTab(id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                  activeTab === id ? "bg-groxBlue text-white shadow-md" : "text-gray-500 hover:text-groxBlue"
                )}>
                <Icon className="h-4 w-4" />{label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* ══════════ WEBSITES ══════════ */}
          {activeTab === "websites" && (
            <motion.div key="websites" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <FilterChips options={webFilters} active={webFilter} onChange={setWebFilter} />
              <AnimatePresence mode="wait">
                <motion.div key={webFilter} variants={gridVariants} initial="hidden" animate="show" exit="exit"
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project) => (
                    <motion.article key={project.title} variants={cardVariants}
                      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                      <Link href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="relative aspect-video overflow-hidden">
                          <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute right-3 top-3 h-8 w-8 flex items-center justify-center rounded-full bg-white/90 shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="h-3.5 w-3.5 text-groxBlue" />
                          </div>
                        </div>
                        <div className="p-5">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-groxBlue">{project.category}</span>
                          <h3 className="mt-1 text-base font-semibold text-[#111827]">{project.title}</h3>
                          <p className="mt-1.5 line-clamp-2 text-sm text-[#6b7280]">{project.description}</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* ══════════ GRAPHIC DESIGN ══════════ */}
          {activeTab === "graphic" && (
            <motion.div key="graphic" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <FilterChips options={graphicSubs} active={graphicFilter} onChange={setGraphicFilter} />
              <AnimatePresence mode="wait">
                <motion.div key={graphicFilter} variants={gridVariants} initial="hidden" animate="show" exit="exit"
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {filteredGraphic.map((item) => (
                    <motion.div key={item.title} variants={graphicCardVariants}
                      onClick={() => setLightboxIndex(graphicItems.indexOf(item))}
                      className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-zoom-in">
                      <div className="relative aspect-square overflow-hidden rounded-xl">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="20vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute left-2 top-2">
                          <span className="rounded-full bg-groxBlue/90 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                            {item.subCategory}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2.5">
                          <p className="text-xs font-semibold text-white leading-tight drop-shadow">{item.title}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* ══════════ VIDEO EDITING ══════════ */}
          {activeTab === "video" && (
            <motion.div key="video" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <FilterChips options={videoFilters} active={videoFilter} onChange={setVideoFilter} />
              <AnimatePresence mode="wait">
                <motion.div key={videoFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                  <VideoGrid items={filteredVideo} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

        </AnimatePresence>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-amber-500/90 to-groxOrange p-10 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">Have a Project in Mind?</h2>
          <p className="mt-2 text-white/80">Let&apos;s build something great together.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-groxOrange transition hover:bg-gray-100">
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={graphicItems.map((g) => ({ image: g.image, title: g.title, subCategory: g.subCategory }))}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
