"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-groxBlue via-blue-700 to-groxOrange text-white py-16 md:py-20">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="privacy-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#privacy-grid)"
                            animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 10, 0], y: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Privacy <span className="text-groxOrange">Policy</span>
                    </h1>
                    <p className="text-xl text-gray-100">Your privacy matters to us</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Information we collect</h3>
                    <p className="text-gray-700 mb-6">We collect only the data you give us directly — for example, contact info you submit through forms (name, email, phone, message). We don&apos;t collect payment information on this site.</p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How we use your data</h3>
                    <p className="text-gray-700 mb-6">We use contact information to reply to your questions, provide estimates, and communicate about projects. We may save anonymous analytics to understand site usage and improve the product.</p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Third-party services</h3>
                    <p className="text-gray-700 mb-6">We may use third-party services (analytics, hosting, chat) that may collect limited technical data. We choose trusted providers and don&apos;t share personal data except to deliver services you request.</p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Your choices</h3>
                    <p className="text-gray-700 mb-6">You can ask us to remove your data by contacting groxmedia55@gmail.com. We&apos;ll respond quickly and delete your personal information where required.</p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
                    <p className="text-gray-700">If you have questions about privacy, email us at <a href="mailto:groxmedia55@gmail.com" className="text-groxBlue font-semibold hover:underline">groxmedia55@gmail.com</a>.</p>
                </div>
            </div>
        </main>
    )
}
