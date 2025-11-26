"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        icon: Code,
        description: "A full-featured e-commerce solution with secure payment gateway, inventory management, and real-time analytics.",
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
        color: "from-blue-500 to-blue-600"
    },
    {
        title: "Corporate Dashboard",
        category: "UI/UX Design",
        icon: Palette,
        description: "Modern dashboard interface for real-time data visualization, analytics, and business intelligence.",
        technologies: ["React", "D3.js", "Tailwind"],
        color: "from-purple-500 to-purple-600"
    },
    {
        title: "Healthcare App",
        category: "App Development",
        icon: Smartphone,
        description: "Patient management system with appointment scheduling, telemedicine features, and secure messaging.",
        technologies: ["React Native", "Node.js", "MongoDB"],
        color: "from-green-500 to-green-600"
    },
    {
        title: "SaaS Platform",
        category: "Web Development",
        icon: Code,
        description: "Multi-tenant SaaS platform with subscription management, analytics, and API integrations.",
        technologies: ["Next.js", "Prisma", "AWS"],
        color: "from-orange-500 to-orange-600"
    },
    {
        title: "Brand Identity System",
        category: "UI/UX Design",
        icon: Palette,
        description: "Complete brand identity including logo, color system, typography, and design guidelines.",
        technologies: ["Figma", "Illustrator", "Photoshop"],
        color: "from-pink-500 to-pink-600"
    },
    {
        title: "Fitness Tracking App",
        category: "App Development",
        icon: Smartphone,
        description: "Mobile app for fitness tracking, workout plans, nutrition logging, and progress analytics.",
        technologies: ["Flutter", "Firebase", "ML Kit"],
        color: "from-cyan-500 to-cyan-600"
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="portfolio-grid" width="40" height="40" patternUnits="userSpaceOnUse">
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
                        fill="url(#portfolio-grid)"
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Recent <span className="text-groxBlue">Work</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Explore some of our latest projects and see how we help businesses grow with innovative digital solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-groxBlue relative"
                            >
                                {/* Gradient Header */}
                                <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                                    {/* Grid Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-20">
                                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`project-grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <path
                                                        d="M 20 0 L 0 0 0 20"
                                                        fill="none"
                                                        stroke="rgba(255, 255, 255, 0.5)"
                                                        strokeWidth="1"
                                                    />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill={`url(#project-grid-${index})`} />
                                        </svg>
                                    </div>

                                    {/* Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="secondary" size="sm" className="font-semibold">
                                            View Details <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="text-sm font-semibold text-groxOrange mb-2 uppercase tracking-wide">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-groxBlue transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 border border-gray-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
