"use client";

import Faq from '@/components/shared/Faq'
import React from 'react'
import { motion } from 'framer-motion'

const Faqs = () => {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-groxBlue via-blue-700 to-groxOrange text-white py-16 md:py-20">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="faq-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#faq-grid)"
                            animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 10, 0], y: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                    >
                        Frequently Asked <span className="text-groxOrange">Questions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-100"
                    >
                        Find answers to common questions about our services
                    </motion.p>
                </div>
            </section>

            {/* FAQ Component */}
            <Faq />
        </main>
    )
}

export default Faqs
