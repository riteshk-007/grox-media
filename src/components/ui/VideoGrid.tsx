"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Instagram, Youtube, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VideoItem } from "@/data/projects";
import VideoLightbox from "./VideoLightbox";

const platformIcon: Record<string, React.ElementType> = {
  Instagram,
  YouTube: Youtube,
  Facebook,
};

const platformStyle: Record<string, { bg: string; text: string; dot: string }> = {
  Instagram: { bg: "bg-pink-50 border-pink-200", text: "text-pink-600", dot: "bg-pink-500" },
  YouTube:   { bg: "bg-red-50 border-red-200",   text: "text-red-600",  dot: "bg-red-500"  },
  Facebook:  { bg: "bg-blue-50 border-blue-200", text: "text-blue-600", dot: "bg-blue-500" },
};

type Props = { items: VideoItem[] };

export default function VideoGrid({ items }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!items.length) return (
    <p className="py-16 text-center text-sm text-gray-400">No videos found.</p>
  );

  return (
    <>
      {/* 1:1 grid — 2 col mobile, 3 col md, 4 col lg */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => {
          const PlatIcon = platformIcon[item.platform];
          const style    = platformStyle[item.platform];
          return (
            <motion.div
              key={item.videoSrc}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28, delay: i * 0.05 }}
              onClick={() => setLightboxIndex(i)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#0f0f0f] shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ aspectRatio: "1/1" }}
            >
              {/* Video as thumbnail — first frame via preload=metadata */}
              <video
                src={item.videoSrc}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
                preload="metadata"
                muted
                playsInline
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                  <Play className="h-5 w-5 translate-x-0.5 fill-white text-white" />
                </div>
              </div>

              {/* Platform badge */}
              <div className="absolute right-2 top-2">
                <div className={cn(
                  "flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold backdrop-blur-sm",
                  style.bg, style.text
                )}>
                  <PlatIcon className="h-2.5 w-2.5" />
                  {item.platform}
                </div>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5">
                <div className="flex items-center gap-1">
                  <div className={cn("h-1.5 w-1.5 shrink-0 rounded-full", style.dot)} />
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-white/60 truncate">
                    {item.type}
                  </span>
                </div>
                <p className="mt-0.5 text-xs font-bold text-white leading-tight truncate">{item.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <VideoLightbox
            items={items}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
