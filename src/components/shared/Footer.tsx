'use client'

import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                    {/* Company Info Section */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="inline-block mb-4"

                        >
                            <Image src={"/groX-Logo.png"} alt="GroxMedia Logo" width={200} height={100} className="h-16 w-auto object-cover" />
                        </Link>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed max-w-md">
                            We build modern websites, digital products and marketing that help businesses grow.
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>Online-first — serving clients remotely</span>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <h4 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">Quick links</h4>
                        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-gray-900 hover:underline transition-colors duration-200"

                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-gray-900 hover:underline transition-colors duration-200"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="hover:text-gray-900 hover:underline transition-colors duration-200"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-gray-900 hover:underline transition-colors duration-200"

                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <h4 className="text-gray-900 font-bold mb-4 text-base">Get In Touch</h4>

                        {/* Phone Contact */}
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-groxBlue to-blue-600 text-white flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <a
                                    href="tel:+919266806477"
                                    className="text-gray-700 font-semibold text-sm sm:text-base hover:text-groxBlue transition-colors duration-200 block"

                                >
                                    +91 92668 06477
                                </a>
                                <div className="text-gray-500 text-xs sm:text-sm mt-0.5">
                                    Mon-Sat, 10 AM - 7 PM
                                </div>
                            </div>
                        </div>

                        {/* Email Contact */}
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-groxOrange to-orange-600 text-white flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <a
                                    href="mailto:hello@groxmedia.in"
                                    className="text-gray-700 font-semibold text-sm sm:text-base hover:text-groxOrange transition-colors duration-200 block break-all"

                                >
                                    hello@groxmedia.in
                                </a>
                                <div className="text-gray-500 text-xs sm:text-sm mt-0.5">
                                    24-hour response time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 lg:mt-10 border-t-2 border-gray-200 pt-6 lg:pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-xs sm:text-sm">
                        {/* Copyright */}
                        <div className="text-center sm:text-left">
                            © {new Date().getFullYear()} <span className="font-semibold text-groxBlue">GroxMedia</span>. All rights reserved.
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3 text-center">
                            <Link
                                href="/privacy"
                                className="hover:text-groxBlue font-medium transition-colors duration-200"

                            >
                                Privacy Policy
                            </Link>
                            <span className="text-gray-400">•</span>
                            <Link
                                href="/terms"
                                className="hover:text-groxBlue font-medium transition-colors duration-200"

                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer