"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white/90">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/groX-Logo.png"
                alt="Grox Media Logo"
                width={180}
                height={72}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6b7280]">
              We build modern websites, digital products and marketing that help
              businesses grow.
            </p>
            <p className="mt-3 text-sm text-[#6b7280]">
              Online-first — serving clients remotely
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#111827]">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#6b7280]">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:text-groxBlue"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#111827]">Contact</h4>
            <ul className="mt-4 space-y-4 text-sm text-[#6b7280]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-groxBlue" />
                <a href="tel:+919266806477" className="hover:text-groxBlue">
                  +91 92668 06477
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-groxOrange" />
                <a
                  href="mailto:groxmedia55@gmail.com"
                  className="break-all hover:text-groxOrange"
                >
                  groxmedia55@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/groxmedia55/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white transition hover:opacity-90"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manish-kumar-7a757b211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:opacity-90"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-center text-xs text-[#6b7280] sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Grox Media. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/privacy" className="hover:text-groxBlue">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/terms" className="hover:text-groxBlue">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
