"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiAmazonwebservices, SiFigma } from "react-icons/si";

const technologies = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Figma", icon: SiFigma },
];

const Technologies = () => {
    return (
        <section className="py-20 bg-groxBlue text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Modern Technologies</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        We use the latest tools and frameworks to build scalable, secure, and high-performance solutions.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 backdrop-blur-sm px-8 py-4 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                        >
                            <tech.icon className="w-6 h-6 text-groxOrange group-hover:text-white transition-colors" />
                            <span className="text-lg font-medium">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
