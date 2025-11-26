"use client";

import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdCheck } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

interface WhatsAppDialogProps {
    show: boolean;
    onClose: () => void;
    phoneNumber: string;
    whatsappMessage: string;
}

const WhatsAppDialog: React.FC<WhatsAppDialogProps> = ({
    show,
    onClose,
    phoneNumber,
    whatsappMessage,
}) => {
    const handleWhatsApp = () => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappLink = `https://wa.me/${phoneNumber.replace(
            /[^0-9]/g,
            ""
        )}?text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");
        onClose();
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-6 max-w-sm w-full mx-auto shadow-2xl border border-gray-200 relative overflow-hidden"
            >
                {/* Animated Grid Background */}
                <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-30">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="whatsapp-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path
                                    d="M 30 0 L 0 0 0 30"
                                    fill="none"
                                    stroke="rgba(34, 197, 94, 0.2)"
                                    strokeWidth="1"
                                />
                            </pattern>
                        </defs>
                        <motion.rect
                            width="100%"
                            height="100%"
                            fill="url(#whatsapp-grid)"
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
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 transition z-10"
                >
                    <IoMdClose size={24} />
                </button>

                <div className="text-center relative z-10">
                    {/* Icon with gradient */}
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <IoLogoWhatsapp className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Open WhatsApp?</h3>
                    <p className="text-gray-600 mb-2">Chat with GroxMedia on WhatsApp</p>

                    {/* Phone number with highlight */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 my-4">
                        <p className="text-lg font-semibold text-green-600">{phoneNumber}</p>
                    </div>

                    {/* Message Preview */}
                    <div className="text-sm text-gray-600 my-4 p-3 bg-gray-50 border-l-4 border-groxOrange">
                        <strong className="text-gray-900">Message:</strong> &quot;{whatsappMessage}&quot;
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={onClose}
                            className="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleWhatsApp}
                            className="flex-1 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 font-medium shadow-lg"
                        >
                            <MdCheck className="w-5 h-5" />
                            Open WhatsApp
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WhatsAppDialog;
