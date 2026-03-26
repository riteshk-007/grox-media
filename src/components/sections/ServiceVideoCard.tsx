"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

type ServiceVideoCardProps = {
  title: string;
  description: string;
  videoSrc: string;
  icon?: LucideIcon;
  delay?: number;
};

export default function ServiceVideoCard({
  title,
  description,
  videoSrc,
  icon: Icon,
  delay = 0,
}: ServiceVideoCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(cardRef, { once: true, margin: "-20% 0px" });

  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setActivated(true);
  }, [inView]);

  useEffect(() => {
    if (!activated) return;
    const v = videoRef.current;
    if (!v) return;
    try {
      v.load();
      const p = v.play();
      if (p && typeof (p as Promise<void>).catch === "function") {
        (p as Promise<void>).catch(() => { });
      }
    } catch {
      // ignore
    }
  }, [activated]);

  return (
    <motion.div
      ref={(el) => {
        cardRef.current = el;
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="min-w-0 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 md:p-5 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-gray-200">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          ref={videoRef}
          src={activated ? videoSrc : undefined}
          muted
          loop
          autoPlay
          playsInline
          preload={activated ? "metadata" : "none"}
        />
      </div>

      <div className="flex-1">
        {Icon ? (
          <div className="md:mb-3 mb-2 inline-flex items-center gap-2 rounded-xl bg-groxBlue/10 px-3 py-2 text-groxBlue">
            <Icon className="md:h-5 md:w-5 h-4 w-4" />
          </div>
        ) : null}
        <h3 className="md:text-lg text-base font-bold text-[#111827]">{title}</h3>
        <p className="mt-2 leading-relaxed text-xs md:text-sm text-[#6b7280]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}