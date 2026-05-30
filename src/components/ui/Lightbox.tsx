"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

type LightboxItem = {
  image: string;
  title: string;
  subCategory?: string;
};

type Props = {
  items: LightboxItem[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ items, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [zoomed, setZoomed] = useState(false);
  const [direction, setDirection] = useState(0);

  const prev = useCallback(() => {
    if (zoomed) return;
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length, zoomed]);

  const next = useCallback(() => {
    if (zoomed) return;
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  }, [items.length, zoomed]);

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

  const current = items[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* ── Top bar ── */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur-sm">
        {/* Counter */}
        <span className="text-xs font-semibold text-white/70">
          {index + 1} / {items.length}
        </span>
        {/* Zoom controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomed(false)}
            disabled={!zoomed}
            aria-label="Zoom out"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            onClick={() => setZoomed(true)}
            disabled={zoomed}
            aria-label="Zoom in"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-red-500"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* ── Prev arrow ── */}
      <button
        onClick={prev}
        disabled={zoomed}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition hover:bg-gray-100 disabled:opacity-30 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* ── Next arrow ── */}
      <button
        onClick={next}
        disabled={zoomed}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl transition hover:bg-gray-100 disabled:opacity-30 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* ── Image area ── */}
      <div className="relative flex h-full w-full items-center justify-center px-20 py-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? "55%" : "-55%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit:   (dir: number) => ({ x: dir > 0 ? "-55%" : "55%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="flex items-center justify-center"
            onClick={() => setZoomed((z) => !z)}
          >
            <motion.div
              animate={{ scale: zoomed ? 2 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
              className="overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src={current.image}
                alt={current.title}
                width={1200}
                height={900}
                className="block max-h-[75vh] max-w-[75vw] object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom: title + dots ── */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-black/60 backdrop-blur-sm px-4 py-3 text-center">
        <p className="text-sm font-semibold text-white">{current.title}</p>
        {current.subCategory && (
          <p className="mt-0.5 text-xs text-white/50">{current.subCategory}</p>
        )}
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
