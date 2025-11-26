"use client";

import { motion } from "framer-motion";
import { Code, Palette, Megaphone, Smartphone, Globe, BarChart } from "lucide-react";

const services = [
    {
        icon: <Code className="h-8 w-8 text-groxBlue" />,
        title: "Web Development",
        description: "Custom websites built with Next.js, React, and modern technologies for speed and performance.",
    },
    {
        icon: <Palette className="h-8 w-8 text-groxOrange" />,
        title: "UI/UX Design",
        description: "Intuitive and visually stunning designs that enhance user engagement and brand identity.",
    },
    {
        icon: <Megaphone className="h-8 w-8 text-groxBlue" />,
        title: "Digital Marketing",
        description: "Strategic marketing campaigns to grow your audience and increase conversions.",
    },
    {
        icon: <Smartphone className="h-8 w-8 text-groxOrange" />,
        title: "App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
        icon: <Globe className="h-8 w-8 text-groxBlue" />,
        title: "SEO Optimization",
        description: "Rank higher on search engines and drive organic traffic to your website.",
    },
    {
        icon: <BarChart className="h-8 w-8 text-groxOrange" />,
        title: "Analytics & Growth",
        description: "Data-driven insights to optimize performance and scale your business.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-groxBlue">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
