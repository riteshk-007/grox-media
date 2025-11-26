"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface GetStartedDialogProps {
    show: boolean;
    onClose: () => void;
}

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const GetStartedDialog: React.FC<GetStartedDialogProps> = ({ show, onClose }) => {
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
                onClose();
            }, 3000);
        } catch (err) {
            console.error(err);
            toast.error("Network error. Please try again later.");
            setIsSubmitting(false);
        }
    };

    if (!show) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-2xl my-8 shadow-2xl border-2 border-gray-200 relative overflow-hidden"
            >
                {/* Animated Grid Background */}
                <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="getstarted-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path
                                    d="M 30 0 L 0 0 0 30"
                                    fill="none"
                                    stroke="rgba(59, 130, 246, 0.2)"
                                    strokeWidth="1"
                                />
                            </pattern>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#getstarted-grid)"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                x: [0, 5, 0],
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </svg>
                </div>

                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition z-[60]"
                    aria-label="Close dialog"
                >
                    <X size={24} />
                </button>

                <div className="p-8 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Get <span className="text-groxBlue">Started</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Tell us about your project and we&apos;ll get back to you within 24 hours.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 mx-auto bg-green-100 flex items-center justify-center mb-4">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Thank you!</h4>
                            <p className="text-gray-600 text-lg">We&apos;ve received your message.</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Our team will contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="gs-name" className="text-sm font-medium text-gray-700">
                                        Name *
                                    </label>
                                    <Input
                                        id="gs-name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        className="bg-gray-50 border-gray-200"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="gs-phone" className="text-sm font-medium text-gray-700">
                                        Phone *
                                    </label>
                                    <Input
                                        id="gs-phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        className="bg-gray-50 border-gray-200"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="gs-email" className="text-sm font-medium text-gray-700">
                                    Email *
                                </label>
                                <Input
                                    id="gs-email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className="bg-gray-50 border-gray-200"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="gs-message" className="text-sm font-medium text-gray-700">
                                    Tell us about your project *
                                </label>
                                <Textarea
                                    id="gs-message"
                                    placeholder="I need help with..."
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    className="bg-gray-50 border-gray-200 min-h-[120px]"
                                />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-groxBlue to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white py-6 text-lg font-semibold shadow-lg ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
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
    );
};

export default GetStartedDialog;
