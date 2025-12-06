"use client";

import React from "react";
import HeadText from "./Head-Text";
import { FiMonitor, FiTrendingUp, FiPenTool, FiZap } from "react-icons/fi";
import { IconType } from "react-icons";
import { Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const services: Array<{
  id: string;
  title: string;
  description: string;
  features?: string[];
  Icon?: IconType;
}> = [
  {
    id: "web-designing",
    title: "Web Development",
    description:
      "Modern, high-performance websites built with cutting-edge technologies for maximum impact.",
    features: [
      "Next.js & React",
      "Responsive Design",
      "API Integration",
      "Performance Optimization",
    ],
    Icon: FiMonitor,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns to grow your audience and increase conversions.",
    features: [
      "SEO & Technical SEO",
      "Social Media Marketing",
      "Google & Meta Ads",
      "Content Strategy",
    ],
    Icon: FiTrendingUp,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Intuitive and visually stunning designs that enhance user engagement and brand identity. We create logos, brochures, flyers, and more.",
    features: [
      "Logo & Branding",
      "UI/UX Design",
      "Print & Digital",
      "Brand Guidelines",
    ],
    Icon: FiPenTool,
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    description:
      "Fast-track your product launch with rapid MVP development and validation.",
    features: [
      "Rapid Prototyping",
      "Core Features",
      "User Testing",
      "Agile Development",
    ],
    Icon: FiZap,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="services-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#services-grid)"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <HeadText
          title="Our Services"
          icon={<Lightbulb className="w-4 h-4" />}
          icontitle="WHAT WE DO"
          description={
            "Comprehensive digital solutions designed to elevate your business and drive measurable growth."
          }
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, index) => {
            const Icon = svc.Icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/services#${svc.id}`}
                  className="group block bg-white p-6 border-2 border-gray-200 hover:border-groxBlue transition-all duration-300 h-full relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-groxBlue/5 to-groxOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-groxBlue to-blue-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {Icon ? (
                        <Icon className="w-6 h-6" />
                      ) : (
                        <Lightbulb className="w-6 h-6" />
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-groxBlue transition-colors">
                      {svc.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Features */}
                    {svc.features && (
                      <ul className="space-y-1.5 mb-4">
                        {svc.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-gray-700"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 bg-groxOrange flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Learn more link */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-groxBlue group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
