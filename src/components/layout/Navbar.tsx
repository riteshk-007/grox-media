"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const leftLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

const rightLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const navLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
      "block rounded-xl px-4 py-3 text-lg font-medium",
      isActive(href)
        ? "bg-groxBlue/10 text-groxBlue"
        : "text-gray-800 hover:bg-gray-50"
    );

  return (
    <>
      <header className="sticky top-5 z-50 flex justify-center px-4 pt-4">
        <nav
          className={cn(
            "w-full max-w-5xl rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-[#111827] shadow-sm backdrop-blur-md transition-shadow md:px-5 md:py-2.5",
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
              {navLinks.map((l) => (
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
            <button
              type="button"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
                <span className="text-sm font-semibold text-gray-900">Menu</span>
                <button
                  type="button"
                  className="rounded-full p-2 hover:bg-gray-100"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
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
