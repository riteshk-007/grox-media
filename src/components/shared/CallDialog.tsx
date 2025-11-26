"use client";

import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdCheck } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

interface CallDialogProps {
    phoneNumber: string;
    show: boolean;
    onClose: () => void;
}

const CallDialog: React.FC<CallDialogProps> = ({ phoneNumber, show, onClose }) => {
    const handleCall = () => {
        // Trigger phone call
        window.location.href = `tel:${phoneNumber}`;
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
                            <pattern id="call-grid" width="30" height="30" patternUnits="userSpaceOnUse">
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
                            fill="url(#call-grid)"
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
                    <div className="w-16 h-16 bg-gradient-to-br from-groxBlue to-blue-600 mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <FiPhone className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Make a Call?</h3>
                    <p className="text-gray-600 mb-2">Do you want to call GroxMedia?</p>

                    {/* Phone number with highlight */}
                    <div className="bg-blue-50 border-l-4 border-groxBlue p-3 my-4">
                        <p className="text-lg font-semibold text-groxBlue">{phoneNumber}</p>
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
                            onClick={handleCall}
                            className="flex-1 py-2.5 bg-gradient-to-r from-groxBlue to-blue-600 text-white hover:from-blue-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 font-medium shadow-lg"
                        >
                            <MdCheck className="w-5 h-5" />
                            Call Now
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CallDialog;
