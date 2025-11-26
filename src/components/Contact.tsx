"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
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

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Let&apos;s Build Something <span className="text-groxBlue">Amazing</span> Together
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you shortly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-blue-50 p-3 mr-4">
                                    <Phone className="h-6 w-6 text-groxBlue" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+91 92668 06477</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-orange-50 p-3 mr-4">
                                    <Mail className="h-6 w-6 text-groxOrange" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">groxmedia55@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-50 p-3 mr-4">
                                    <MapPin className="h-6 w-6 text-groxBlue" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                                    <p className="text-gray-600">New Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 border border-gray-100"
                    >
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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            className="bg-white"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            className="bg-white"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                                    <Input
                                        id="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        className="bg-white"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={(e) => handleInputChange("message", e.target.value)}
                                        className="bg-white min-h-[150px]"
                                    />
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-groxBlue hover:bg-blue-800 text-white py-6 text-lg ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
