"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        title: "Monark FX",
        category: "Financial Services",
        description:
            "A modern financial services platform with payment systems & live Zoom sessions.",
        image: "https://g0p7auwucr.ufs.sh/f/ULWZqXBivs80g1M2zj90TDwQ1qFAjO9JoI2uaLHf4ZBU8vPk",
        tags: ["React", "NextJS", "NodeJS", "PostgreSQL", "Razorpay", "Zoom SDK", "CI/CD"],
        results: "Streamlined payments",
        link: "https://monarkfx.com",
    },
    {
        title: "EDAWS",
        category: "NGO Platform",
        description:
            "Donation platform for NGOs with campaign management.",
        image: "https://utfs.io/f/1e42b816-777d-4944-8aa3-dfc8b3c2991a-qmpdsf.jpg",
        tags: ["Next.js", "Tailwind", "Prisma", "Razorpay"],
        results: "Donation growth",
        link: "https://www.edaws.in",
    },
    {
        title: "TRX SOL",
        category: "Stock Market Platform",
        description:
            "A platform to connect traders with strong online/offline tools.",
        image: "https://g0p7auwucr.ufs.sh/f/ULWZqXBivs806BjgsRFSjeMkAxVIgZocBUl7f23DdOuvHqNn",
        tags: ["Next.js", "React", "Brevo", "Nodemailer"],
        results: "Optimized communication",
        link: "https://trxsol.com",
    },
    {
        title: "Equity Tank",
        category: "Stock Market Platform",
        description:
            "User-friendly stock dashboard with animations.",
        image: "https://utfs.io/f/add4e9aa-851e-48f6-bb30-e8c8a0b564cd-iyt33x.jpg",
        tags: ["React", "NextJS", "TailwindCSS", "Framer Motion"],
        results: "Better engagement",
        link: "https://equitytank.com",
    },
    {
        title: "EOAN",
        category: "E-commerce",
        description:
            "Modern online furniture e-commerce store.",
        image: "https://utfs.io/f/0cb7d590-e0d1-4ce8-8807-7db34d50d1be-da5jf4.jpg",
        tags: ["WordPress", "PHP", "WooCommerce"],
        results: "Boosted sales",
        link: "https://eoan.in",
    },
    {
        title: "TRX Academy",
        category: "Stock Market Training",
        description:
            "Live sessions and professional courses.",
        image: "https://g0p7auwucr.ufs.sh/f/ULWZqXBivs80DwIeWWmEwLedJguv0UbtiA6GHWYay4nfP9BK",
        tags: ["React", "NextJS", "PostgreSQL", "Zoom SDK"],
        results: "Better user learning",
    },
    // {
    //     title: "Sharma Fitness",
    //     category: "E-commerce",
    //     description:
    //         "Gym equipment store optimized for conversions.",
    //     image: "https://utfs.io/f/0d43ad81-130f-481f-9567-37e491bff626-hswoyi.jpg",
    //     tags: ["WordPress", "WooCommerce", "Elementor"],
    //     results: "Increased sales",
    // },
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
                            className="group bg-white shadow-md border rounded overflow-hidden hover:shadow-2xl transition-all"
                        >
                            {/* REAL IMAGE (NO COLOR) */}
                            <div className="h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-sm font-semibold text-blue-600 mb-1">
                                    {project.category}
                                </p>

                                <h3 className="text-xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 bg-gray-100 border rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <a href={project.link} target="_blank">
                                        <Button variant="secondary">
                                            Visit <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
