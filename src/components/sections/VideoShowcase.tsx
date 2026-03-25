"use client";

function MarqueeBand() {
  /* Extra spaces around bullets so the ticker does not look cramped */
  const phrase = "Develop it from Best   •   Develop it Once   •   ";
  const repeated = Array(14).fill(phrase).join("");
  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-black/25 py-4 md:py-5">
      <div className="flex w-max items-center animate-marquee-left-slow">
        <span className="inline-block shrink-0 whitespace-nowrap px-8 text-base font-extrabold leading-normal tracking-[0.06em] text-white md:px-12 md:text-lg md:tracking-[0.08em]">
          {repeated}
        </span>
        <span
          className="inline-block shrink-0 whitespace-nowrap px-8 text-base font-extrabold leading-normal tracking-[0.06em] text-white md:px-12 md:text-lg md:tracking-[0.08em]"
          aria-hidden
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="relative min-h-[500px] overflow-x-hidden bg-gradient-to-br from-amber-500 via-groxOrange to-[#1a1a2e] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-lg font-semibold italic leading-relaxed text-white/95 md:text-xl md:leading-relaxed">
          Building Digital Excellence
        </p>
        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md lg:max-w-7xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/40">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/bgvideo.mp4"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="relative z-[1] mt-10 w-full">
        <MarqueeBand />
      </div>
    </section>
  );
}
