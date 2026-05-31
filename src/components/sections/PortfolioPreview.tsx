"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import Lightbox from "@/components/ui/Lightbox";
import {
  projects,
  graphicItems,
  videoItems,
  type GraphicSubCategory,
  type VideoPlatform,
} from "@/data/projects";
import VideoGrid from "@/components/ui/VideoGrid";
import LazyImage from "@/components/ui/LazyImage";
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

// Stagger container — cards enter one by one
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
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150",
            active === opt
              ? "border-groxOrange bg-groxOrange text-white shadow-sm"
              : "border-gray-200 bg-white text-gray-500 hover:border-groxOrange hover:text-groxOrange"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function PortfolioPreview() {
  const [activeTab, setActiveTab] = useState<Tab>("websites");
  const [webFilter, setWebFilter]         = useState<WebFilter>("All");
  const [graphicFilter, setGraphicFilter] = useState<GraphicSubCategory | "All">("All");
  const [videoFilter, setVideoFilter]     = useState<"All" | VideoPlatform>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const websiteItems = (webFilter === "All" ? projects : projects.filter((p) => p.filter === webFilter)).slice(0, 6);
  const filteredGraphic = (graphicFilter === "All" ? graphicItems : graphicItems.filter((g) => g.subCategory === graphicFilter)).slice(0, 15);
  const filteredVideo = (videoFilter === "All" ? videoItems : videoItems.filter((v) => v.platform === videoFilter)).slice(0, 8);

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

        {/* Main tabs */}
        <div className="pt-8 pb-2 px-4">
          <div className="grid grid-cols-3 gap-1 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" onClick={() => setActiveTab(id)}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-full py-2 px-2 sm:px-5 text-[11px] sm:text-sm font-semibold transition-all duration-200",
                  activeTab === id ? "bg-groxBlue text-white shadow-md" : "text-gray-500 hover:text-groxBlue"
                )}>
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* ══ WEBSITES ══ */}
          {activeTab === "websites" && (
            <motion.div key="websites" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
              <div className="py-6">
                <FilterChips options={webFilters} active={webFilter} onChange={setWebFilter} />
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={webFilter} variants={gridVariants} initial="hidden" animate="show" exit="exit"
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {websiteItems.map((project) => (
                    <motion.div key={project.title} variants={cardVariants}
                      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                      <Link href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="relative aspect-video overflow-hidden">
                          <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute right-3 top-3 h-8 w-8 flex items-center justify-center rounded-full bg-white/90 shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="h-3.5 w-3.5 text-groxBlue" />
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-groxBlue">{project.category}</span>
                          <h3 className="mt-1 text-sm font-semibold text-[#111827]">{project.title}</h3>
                          <p className="mt-1 line-clamp-2 text-xs text-[#6b7280]">{project.description}</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] text-gray-600">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* ══ GRAPHIC DESIGN ══ */}
          {activeTab === "graphic" && (
            <motion.div key="graphic" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
              <div className="py-6">
                <FilterChips options={graphicSubs} active={graphicFilter} onChange={setGraphicFilter} />
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={graphicFilter} variants={gridVariants} initial="hidden" animate="show" exit="exit"
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {filteredGraphic.map((item) => (
                    <motion.div key={item.title} variants={graphicCardVariants}
                      onClick={() => setLightboxIndex(graphicItems.indexOf(item))}
                      className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-zoom-in">
                      <div className="relative aspect-square overflow-hidden rounded-xl">
                        <LazyImage src={item.image} alt={item.title} sizes="20vw" className="transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
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

          {/* ══ VIDEO EDITING ══ */}
          {activeTab === "video" && (
            <motion.div key="video" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
              <div className="py-6">
                <FilterChips options={videoFilters} active={videoFilter} onChange={setVideoFilter} />
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={videoFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                  <VideoGrid items={filteredVideo} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

        </AnimatePresence>

        <div className="mt-12 flex justify-center">
          <Link href="/portfolio" className="rounded-full border-2 border-gray-300 px-8 py-3 text-sm font-semibold text-[#111827] transition hover:border-groxBlue hover:text-groxBlue">
            View All Work
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
    </section>
  );
}
