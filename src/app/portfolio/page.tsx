"use client";

import Portfolio from '@/components/Portfolio';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PortfolioPage = () => {
    return (
        <main className="pt-20">
            {/* Hero Section with Grid Background */}
            <section className="relative overflow-hidden bg-gradient-to-br from-groxBlue via-blue-700 to-groxOrange text-white py-20 md:py-28">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="portfolio-hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path
                                    d="M 50 0 L 0 0 0 50"
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.3)"
                                    strokeWidth="1"
                                />
                            </pattern>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#portfolio-hero-grid)"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                x: [0, 10, 0],
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Our <span className="text-groxOrange">Portfolio</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
                            Discover our latest projects and see how we transform ideas into powerful digital solutions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-groxBlue font-bold hover:bg-gray-100 transition-all shadow-lg"
                        >
                            Start Your Project
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Portfolio />
        </main>
    );
};

export default PortfolioPage;
