"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

type ServiceVideoCardProps = {
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: StaticImageData;
  icon?: LucideIcon;
  delay?: number;
};

const VIDEO_CACHE_NAME = "grox-video-cache-v1";
const VIDEO_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export default function ServiceVideoCard({
  title,
  description,
  videoSrc,
  posterSrc,
  icon: Icon,
  delay = 0,
}: ServiceVideoCardProps) {
  const [ready, setReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoObjectUrl, setVideoObjectUrl] = useState<string | null>(null);
  const didResolveRef = useRef(false);

  const cacheKey = useMemo(
    () => `groxVideoFetchedAt:${videoSrc}`,
    [videoSrc]
  );


  useEffect(() => {
    let isMounted = true;
    let objectUrlToRevoke: string | null = null;
    didResolveRef.current = false;

    // If for any reason the first frame doesn't arrive (very slow network),
    // still drop the poster after a short time to avoid "stuck poster".
    const fallbackTimer = window.setTimeout(() => {
      if (!isMounted) return;
      didResolveRef.current = true;
      setVideoFailed(false);
      setReady(true);
    }, 8000);

    async function loadWithCache() {
      setReady(false);
      setVideoFailed(false);

      try {
        // If Cache API is not available, just use direct src.
        if (typeof window === "undefined" || !("caches" in window)) {
          return;
        }

        const now = Date.now();
        const cachedAtStr = window.localStorage.getItem(cacheKey);
        const cachedAt = cachedAtStr ? Number(cachedAtStr) : 0;
        const isFresh =
          cachedAt > 0 && now - cachedAt < VIDEO_CACHE_TTL_MS;

        const cache = await caches.open(VIDEO_CACHE_NAME);

        // 1) Try cache (fresh)
        if (isFresh) {
          const cachedResponse = await cache.match(videoSrc);
          if (cachedResponse) {
            const blob = await cachedResponse.blob();
            if (!isMounted) return;
            objectUrlToRevoke = URL.createObjectURL(blob);
            setVideoObjectUrl(objectUrlToRevoke);
            return;
          }
        }

        // 2) Fetch and cache
        const res = await fetch(videoSrc, { mode: "cors" });
        if (!res.ok) throw new Error(`Failed to fetch video: ${res.status}`);

        // Store in Cache Storage for faster next visits.
        const resClone = res.clone();
        await cache.put(videoSrc, resClone);

        window.localStorage.setItem(cacheKey, String(now));

        const blob = await res.blob();
        if (!isMounted) return;
        objectUrlToRevoke = URL.createObjectURL(blob);
        setVideoObjectUrl(objectUrlToRevoke);
      } catch {
        // Fallback: use the direct `videoSrc` (no caching).
        if (!isMounted) return;
        setVideoObjectUrl(null);
      }
    }

    loadWithCache();

    return () => {
      isMounted = false;
      window.clearTimeout(fallbackTimer);
      if (objectUrlToRevoke) URL.revokeObjectURL(objectUrlToRevoke);
    };
  }, [videoSrc, cacheKey]);

  const showPoster = !ready || videoFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 md:p-5 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
        {/* Video poster stays until video is ready; no separate skeleton */}
        <Image
          src={posterSrc}
          alt={title}
          fill
          priority={delay === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-300 ${showPoster ? "opacity-100" : "opacity-0"
            }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent opacity-50" />

        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${ready && !videoFailed ? "opacity-100" : "opacity-0"
            }`}
          src={videoObjectUrl ?? videoSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          onLoadedData={() => {
            if (didResolveRef.current) return;
            didResolveRef.current = true;
            setVideoFailed(false);
            setReady(true);
          }}
          onError={() => {
            setVideoFailed(true);
            setReady(true);
          }}
        />
      </div>

      <div className="flex-1">
        {Icon ? (
          <div className="md:mb-3 mb-2 inline-flex items-center gap-2 rounded-xl bg-groxBlue/10 px-3 py-2 text-groxBlue">
            <Icon className="md:h-5 md:w-5 h-4 w-4" />
          </div>
        ) : null}
        <h3 className="md:text-xl text-base font-bold text-[#111827]">{title}</h3>
        <p className="mt-2 leading-relaxed text-xs md:text-sm text-[#6b7280]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

