"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import { services } from "@/data/services";
import ServiceVideoCard from "./ServiceVideoCard";

export default function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge>Our Services</SectionBadge>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl lg:text-5xl">
            Comprehensive Digital Solutions for Your Business
          </h2>
        </div>

        <motion.div
          className="mt-6 md:mt-12 grid w-full min-w-0  gap-2  md:gap-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {services.map((svc) => (
            <ServiceVideoCard
              key={svc.slug}
              title={svc.title}
              description={svc.shortDescription}
              videoSrc={svc.videoSrc}
              icon={svc.Icon}
              href={`/services/${svc.slug}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
