"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-groxBlue/10 -z-10" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-groxOrange/10 -z-10" />
                            {/* Placeholder for About Image - using a colored div for now if no image */}
                            <div className="bg-gray-100 overflow-hidden h-[400px] w-full relative flex items-center justify-center">
                                <span className="text-gray-400">About Image Placeholder</span>
                                {/* If you have an image, uncomment below */}
                                {/* <Image src="/about-image.jpg" alt="About GroxMedia" fill className="object-cover" /> */}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            We Are <span className="text-groxBlue">GroxMedia</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At GroxMedia, we believe in the power of digital transformation. We are a team of passionate developers, designers, and strategists dedicated to helping businesses thrive in the digital age.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our mission is to deliver exceptional digital experiences that drive results. From pixel-perfect designs to robust code, we handle every aspect of your digital presence with precision and care.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Precision in every pixel and line of code",
                                "Protection of your data and digital assets",
                                "Professional Support whenever you need it",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="h-6 w-6 text-groxOrange mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
