"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Panacea Medcare",
    category: "Healthcare Website",
    description:
      "A multilingual doctor and healthcare website built with Next.js, supporting English, French, and Arabic for a global audience.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/panacea.jpeg",
    tags: ["Next.js", "Internationalization (i18n)", "Healthcare"],
    results: "Expanded reach with multilingual support",
    link: "https://panaceamedcare.com/",
  },
  {
    title: "SLJ Solutions",
    category: "Interior Design Website",
    description:
      "A modern static interior design website built with Next.js, including an admin panel for content management.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/slj.jpeg",
    tags: ["Next.js", "React", "Admin Panel"],
    results: "Clean UI with easy content updates",
    link: "https://sljsolutions.com/",
  },
  {
    title: "DFIX Kart",
    category: "E-commerce Platform",
    description:
      "A full-scale tape-selling e-commerce platform with a Next.js client, React (Vite) admin panel, and Node.js backend using PostgreSQL.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/difx.jpeg",
    tags: [
      "Next.js 14",
      "React (Vite)",
      "Node.js",
      "PostgreSQL",
      "E-commerce",
    ],
    results: "Scalable multi-panel e-commerce system",
    link: "https://dfixkart.com/",
  },
  {
    title: "Shrestha Academy",
    category: "EdTech Platform",
    description:
      "A complete MERN stack education platform offering online courses, e-books, progress indicators, and offline classroom management.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/shreeshta.jpeg",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MERN Stack",
    ],
    results: "Centralized learning with online & offline course management",
    link: "https://shresthaacademy.com/",
  },
  {
    title: "Desi To Global Travel",
    category: "Travel & Tour Platform",
    description:
      "A full-stack travel and tour booking platform with dynamic packages, inquiries, and admin management.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/global.jpeg",
    tags: ["Next.js", "React", "Node.js", "Full Stack"],
    results: "End-to-end travel booking and management system",
    link: "https://www.desitoglobaltravel.com/",
  },
  {
    title: "Monark FX",
    category: "Financial Services",
    description:
      "A modern financial services platform with integrated payment systems and live Zoom sessions for trading consultations.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/monark.jpeg",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Razorpay",
      "Zoom SDK",
    ],
    results: "Streamlined payments and live trading sessions",
    link: "https://monarkfx.com",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Our Recent <span className="text-blue-600">Work</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our latest client projects.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white shadow-md border overflow-hidden hover:shadow-2xl transition-all h-full"
            >
              <Link href={project.link || "#"} target="_blank" className="flex flex-col h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 border rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
