"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-groxBlue via-blue-700 to-groxOrange text-white py-16 md:py-20">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="terms-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#terms-grid)"
                            animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 10, 0], y: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Terms & <span className="text-groxOrange">Conditions</span>
                    </h1>
                    <p className="text-xl text-gray-100">Last updated: {new Date().getFullYear()}</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of terms</h3>
                    <p className="text-gray-700 mb-6">By using the site you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.</p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Use of content</h3>
                    <p className="text-gray-700 mb-6">All content on this site is provided for informational purposes. You may not redistribute or republish without permission.</p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitation of liability</h3>
                    <p className="text-gray-700 mb-6">We do our best to provide accurate information, but we aren&apos;t liable for indirect damages. For custom work, see our agreement terms.</p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
                    <p className="text-gray-700">Questions about these terms? Email <a href="mailto:groxmedia55@gmail.com" className="text-groxBlue font-semibold hover:underline">groxmedia55@gmail.com</a>.</p>
                </div>
            </div>
        </main>
    )
}
