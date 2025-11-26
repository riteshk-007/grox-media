"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const Hero = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const router = useRouter();

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: typeof errors = {};

        // Validation
        if (!formData.name.trim()) newErrors.name = "Name is required";
        const emailRe = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRe.test(formData.email)) newErrors.email = "Enter a valid email";
        const phoneRe = /^[0-9]{7,15}$/;
        const cleaned = formData.phone.replace(/[^0-9]/g, "");
        if (!phoneRe.test(cleaned)) newErrors.phone = "Enter a valid phone number";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    mobileNumber: formData.phone,
                    message: formData.message,
                }),
            });

            const json = await res.json();

            if (!res.ok) {
                toast.error(json?.error || "Failed to send message");
                setIsSubmitting(false);
                return;
            }

            toast.success(json?.message || "Message sent successfully!");



            setIsSubmitted(true);
            setIsSubmitting(false);

            setTimeout(() => {
                setFormData({ name: "", email: "", phone: "", message: "" });
                setIsSubmitted(false);
            }, 3000);
        } catch (err) {
            console.error(err);
            toast.error("Network error. Please try again later.");
            setIsSubmitting(false);
        }
    };

    const scrollToForm = () => {
        const formSection = document.querySelector('form[id="contact-form"]');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // If form not found, scroll to the form in hero section
            const heroForm = document.querySelector('.relative.bg-white.p-8');
            if (heroForm) {
                heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="rgba(59, 130, 246, 0.15)"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <motion.rect
                        width="100%"
                        height="100%"
                        fill="url(#grid)"
                        animate={{
                            opacity: [0.4, 0.8, 0.4],
                            x: [0, 10, 0],
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block py-1 px-3 bg-blue-50 text-groxBlue text-sm font-semibold mb-6 border border-blue-100">
                            Digital Excellence Redefined
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                            We Build <span className="text-groxBlue">Digital</span> <br />
                            <span className="text-groxOrange">Experiences</span> That Matter
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            GroxMedia transforms your vision into powerful digital solutions.
                            We specialize in cutting-edge web development, stunning design, and
                            strategic growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button
                                size="lg"
                                onClick={scrollToForm}
                                className="bg-groxBlue hover:bg-blue-800 text-white text-lg px-8 py-6 h-auto"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => router.push('/portfolio')}
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6 h-auto"
                            >
                                View Our Work
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-groxOrange" />
                                <span>Verified Agency</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-groxOrange" />
                                <span>Top Rated</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-groxBlue to-groxOrange opacity-20 blur-lg"></div>
                        <div className="relative bg-white p-8 border border-gray-100 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Consultation</h3>
                            <p className="text-gray-500 mb-6">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h4>
                                    <p className="text-gray-600">We&apos;ve received your message.</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Our team will contact you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="hero-name" className="text-sm font-medium text-gray-700">Name</label>
                                            <Input
                                                id="hero-name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                className="bg-gray-50 border-gray-200 focus:ring-groxBlue"
                                            />
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="hero-phone" className="text-sm font-medium text-gray-700">Phone</label>
                                            <Input
                                                id="hero-phone"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                className="bg-gray-50 border-gray-200 focus:ring-groxBlue"
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="hero-email" className="text-sm font-medium text-gray-700">Email</label>
                                        <Input
                                            id="hero-email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            className="bg-gray-50 border-gray-200 focus:ring-groxBlue"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="hero-message" className="text-sm font-medium text-gray-700">Message</label>
                                        <Textarea
                                            id="hero-message"
                                            placeholder="Tell us about your project..."
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            className="bg-gray-50 border-gray-200 min-h-[100px] focus:ring-groxBlue"
                                        />
                                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-groxOrange hover:bg-orange-600 text-white py-6 text-lg font-semibold ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-50/40 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-orange-50/40 blur-3xl"
                />
            </div>
        </section>
    );
};

export default Hero;