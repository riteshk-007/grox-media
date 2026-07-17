"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Globe, Code, Paintbrush, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const corePages = [
  { name: "Home", url: "https://groxmedia.in/", path: "/" },
  { name: "About Us", url: "https://groxmedia.in/about", path: "/about" },
  { name: "Services", url: "https://groxmedia.in/services", path: "/services" },
  { name: "Portfolio", url: "https://groxmedia.in/portfolio", path: "/portfolio" },
  { name: "Contact", url: "https://groxmedia.in/contact", path: "/contact" },
  { name: "FAQs", url: "https://groxmedia.in/faqs", path: "/faqs" },
];

const legalPages = [
  { name: "Privacy Policy", url: "https://groxmedia.in/privacy", path: "/privacy" },
  { name: "Terms of Service", url: "https://groxmedia.in/terms", path: "/terms" },
];

const cities = [
  { id: "delhi", name: "Delhi" },
  { id: "gurgaon", name: "Gurgaon" },
  { id: "noida", name: "Noida" },
  { id: "mumbai", name: "Mumbai" },
  { id: "pune", name: "Pune" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100/50 to-orange-100/40 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <SectionBadge>Navigation</SectionBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-4xl font-extrabold text-[#111827] md:text-5xl tracking-tight animate-gradient"
          >
            Website Sitemap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-4 text-base text-gray-500 max-w-md mx-auto"
          >
            Explore all the pages, services, and locations covered on groxmedia.in.
          </motion.p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Core Pages */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-[#111827]">Core Pages</h2>
            </div>
            <ul className="space-y-4">
              {corePages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className="group block p-3 rounded-2xl hover:bg-slate-50 transition duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                        {page.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block font-mono break-all">
                      {page.url}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Web Development Pages */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
                <Code className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-[#111827]">Web Development</h2>
            </div>
            <ul className="space-y-4">
              {cities.map((city) => {
                const path = `/website-development-company-in-${city.id}`;
                const url = `https://groxmedia.in${path}`;
                return (
                  <li key={city.id}>
                    <Link
                      href={path}
                      className="group block p-3 rounded-2xl hover:bg-slate-50 transition duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800 group-hover:text-orange-600 transition">
                          Web Dev in {city.name}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                      </div>
                      <span className="text-xs text-gray-400 mt-1 block font-mono break-all">
                        {url}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Web Designing Pages */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                <Paintbrush className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-[#111827]">Web Designing</h2>
            </div>
            <ul className="space-y-4">
              {cities.map((city) => {
                const path = `/website-designing-company-in-${city.id}`;
                const url = `https://groxmedia.in${path}`;
                return (
                  <li key={city.id}>
                    <Link
                      href={path}
                      className="group block p-3 rounded-2xl hover:bg-slate-50 transition duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800 group-hover:text-purple-600 transition">
                          Web Design in {city.name}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                      </div>
                      <span className="text-xs text-gray-400 mt-1 block font-mono break-all">
                        {url}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Legal / Policy Pages */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-[#111827]">Legal & Policies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalPages.map((page) => (
                <div key={page.path}>
                  <Link
                    href={page.path}
                    className="group block p-3 rounded-2xl hover:bg-slate-50 transition duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 group-hover:text-emerald-600 transition">
                        {page.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block font-mono break-all">
                      {page.url}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
