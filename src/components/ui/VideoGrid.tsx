"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/projects";
import VideoLightbox from "./VideoLightbox";

type Props = { items: VideoItem[] };

export default function VideoGrid({ items }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!items.length) return (
    <p className="py-16 text-center text-sm text-gray-400">No videos found.</p>
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.videoSrc}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: i * 0.05 }}
            onClick={() => setLightboxIndex(i)}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#0f0f0f] shadow-md hover:shadow-xl transition-shadow duration-300"
            style={{ aspectRatio: "1/1" }}
          >
            <video
              src={item.videoSrc}
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
              preload="metadata"
              muted
              playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                <Play className="h-5 w-5 translate-x-0.5 fill-white text-white" />
              </div>
            </div>
          </motion.div>
        ))}
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
