"use client";

import Contact from '@/components/Contact';
import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <main className="pt-20">
            {/* Hero Section with Grid Background */}
            <section className="relative overflow-hidden bg-gradient-to-br from-groxBlue via-blue-700 to-groxOrange text-white py-20 md:py-28">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="contact-hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
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
                            fill="url(#contact-hero-grid)"
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
                            Get In <span className="text-groxOrange">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default ContactPage;
