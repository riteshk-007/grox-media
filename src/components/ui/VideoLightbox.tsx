"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { VideoItem } from "@/data/projects";

type Props = {
  items: VideoItem[];
  startIndex: number;
  onClose: () => void;
};

export default function VideoLightbox({ items, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  // Auto-play on index change
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [index]);

  const current = items[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-500"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Counter */}
      <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
        {index + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition hover:bg-gray-100 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition hover:bg-gray-100 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Video */}
      <div className="relative flex h-full w-full items-center justify-center px-20 py-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? "40%" : "-40%", opacity: 0, scale: 0.94 }),
              center: { x: 0, opacity: 1, scale: 1 },
              exit:   (dir: number) => ({ x: dir > 0 ? "-40%" : "40%", opacity: 0, scale: 0.94 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="flex max-h-[80vh] w-full max-w-md items-center justify-center"
          >
            {/* 1:1 container */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "1/1" }}>
              <video
                ref={videoRef}
                src={current.videoSrc}
                className="h-full w-full object-cover"
                controls
                autoPlay
                loop
                playsInline
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom title + dots */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-black/60 px-4 py-3 text-center backdrop-blur-sm">
        <p className="text-sm font-semibold text-white">{current.title}</p>
        <p className="mt-0.5 text-xs text-white/50">{current.type} · {current.platform}</p>
        <div className="mt-2 flex justify-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
