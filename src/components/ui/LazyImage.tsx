"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  aspectClass?: string;
};

const _loaded = new Set<string>();

export default function LazyImage({ src, alt, className = "", sizes = "20vw", aspectClass = "aspect-square" }: Props) {
  const alreadyLoaded = _loaded.has(src);
  const [inView, setInView] = useState(alreadyLoaded);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alreadyLoaded) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [alreadyLoaded]);

  return (
    <div ref={ref} className={`overflow-hidden ${aspectClass}`}>
      {inView && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={90}
          className={`object-cover ${className}`}
          onLoad={() => _loaded.add(src)}
          loading="lazy"
        />
      )}
    </div>
  );
}
