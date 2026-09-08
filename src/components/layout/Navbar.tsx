"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

const rightLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragControls = useDragControls();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    cn(
      "relative whitespace-nowrap text-sm font-medium transition-colors",
      isActive(href)
        ? "text-groxBlue after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-groxBlue"
        : "text-gray-600 hover:text-groxBlue"
    );

  const mobileLinkClass = (href: string) =>
    cn(
      "block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
      isActive(href)
        ? "bg-groxBlue/10 text-groxBlue"
        : "text-gray-800 active:bg-gray-100 hover:bg-gray-50"
    );

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <header className="sticky top-5 z-50 flex justify-center px-4 pt-4">
        <nav
          className={cn(
            "relative w-full max-w-5xl rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-[#111827] shadow-sm backdrop-blur-md transition-shadow md:px-5 md:py-2.5",
            scrolled && "shadow-lg"
          )}
          aria-label="Main"
        >
          <div className="flex items-center justify-between gap-3 md:hidden">
            <Link href="/" className="shrink-0">
              <Image
                src="/groX-Logo.png"
                alt="Grox Media"
                width={120}
                height={48}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden min-h-[44px] items-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-3 lg:gap-4">
            <div className="flex min-w-0 justify-start">
              <Link href="/" className="shrink-0">
                <Image
                  src="/groX-Logo.png"
                  alt="Grox Media"
                  width={120}
                  height={48}
                  className="h-11 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            <nav
              className="flex shrink-0 items-center justify-center gap-3 lg:gap-5"
              aria-label="Primary"
            >
              <Link href="/" className={linkClass("/")}>
                Home
              </Link>

              {/* Services dropdown */}
              <div
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  className={cn(linkClass("/services"), "flex items-center gap-1")}
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      // `x: "-50%"` must live inside the animation, not as a
                      // `-translate-x-1/2` class: framer-motion writes an inline
                      // `transform` that would otherwise wipe the class out and
                      // push the panel off-centre.
                      initial={{ opacity: 0, y: 8, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: 8, x: "-50%" }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                      style={{ width: "min(40rem, calc(100vw - 2rem))" }}
                      className="absolute left-1/2 top-full z-50 mt-4 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl"
                    >
                      {/* Invisible bridge so the pointer can travel from the
                          button into the panel without the gap closing it. */}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -top-4 h-4"
                      />
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-groxBlue/5"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-groxBlue/10 text-groxBlue transition-colors duration-200 group-hover/item:bg-groxBlue group-hover/item:text-white">
                              <svc.Icon className="h-4 w-4" aria-hidden />
                            </span>
                            <span className="min-w-0 flex-1 truncate whitespace-nowrap text-sm font-semibold text-[#111827] transition-colors duration-200 group-hover/item:text-groxBlue">
                              {svc.navLabel}
                            </span>
                            <ChevronDown
                              aria-hidden
                              className="h-3.5 w-3.5 shrink-0 -rotate-90 text-gray-300 opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-groxBlue group-hover/item:opacity-100"
                            />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 border-t border-gray-100 pt-2">
                        <Link
                          href="/services"
                          className="group/all flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-groxBlue transition-colors duration-200 hover:bg-groxBlue/5"
                        >
                          View All Services
                          <ArrowRight
                            aria-hidden
                            className="h-4 w-4 transition-transform duration-200 group-hover/all:translate-x-1"
                          />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {rightLinks.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                  {l.name}
                </Link>
              ))}
            </nav>
            <div className="flex min-w-0 justify-end">
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center rounded-full bg-groxBlue px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer — draggable right to dismiss */}
            <motion.div
              ref={drawerRef}
              drag="x"
              dragControls={dragControls}
              dragConstraints={{ left: 0, right: 400 }}
              dragElastic={{ left: 0, right: 0.3 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80 || info.velocity.x > 500) {
                  setMobileOpen(false);
                }
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col bg-white shadow-2xl touch-pan-y"
            >
              {/* Drag handle */}
              <div
                className="absolute left-0 top-0 h-full w-6 cursor-grab active:cursor-grabbing"
                onPointerDown={(e) => dragControls.start(e)}
                aria-hidden
              >
                <div className="absolute left-2 top-1/2 h-12 w-1 -translate-y-1/2 rounded-full bg-gray-300" />
              </div>

              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3.5">
                <Link href="/" className="shrink-0" aria-label="Grox Media home">
                  <Image
                    src="/groX-Logo.png"
                    alt="Grox Media"
                    width={120}
                    height={48}
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  className="-mr-1 rounded-full p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.02 }}>
                  <Link href="/" className={mobileLinkClass("/")}>
                    Home
                  </Link>
                </motion.div>

                {/* Services accordion */}
                <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 }}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className={cn(mobileLinkClass("/services"), "flex w-full items-center justify-between")}
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <ChevronDown
                      className={cn("h-5 w-5 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 space-y-0.5 border-l-2 border-gray-100 pl-3">
                          {services.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition-colors active:bg-groxBlue/10 hover:bg-gray-50 hover:text-groxBlue"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-groxBlue/10 text-groxBlue">
                                <svc.Icon className="h-4 w-4" aria-hidden />
                              </span>
                              <span className="min-w-0 flex-1">{svc.navLabel}</span>
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-groxBlue transition-colors active:bg-groxBlue/10 hover:bg-groxBlue/5"
                          >
                            View All Services
                            <ArrowRight className="h-4 w-4" aria-hidden />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {rightLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link href={l.href} className={mobileLinkClass(l.href)}>
                      {l.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    className="block rounded-full bg-groxBlue py-3 text-center font-semibold text-white"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
