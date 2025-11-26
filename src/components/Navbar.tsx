"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetStartedDialog from "@/components/shared/GetStartedDialog";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGetStarted, setShowGetStarted] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <>
            <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <Image src="/groX-Logo.png" alt="GroxMedia" width={100} height={100} />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive(link.href)
                                        ? "text-groxOrange"
                                        : "text-gray-700 hover:text-groxBlue"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                onClick={() => setShowGetStarted(true)}
                                className="bg-groxBlue hover:bg-blue-800 text-white"
                            >
                                Get Started
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-groxBlue focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-3 py-2 text-base font-medium ${isActive(link.href)
                                        ? "text-groxOrange bg-gray-50"
                                        : "text-gray-700 hover:text-groxBlue hover:bg-gray-50"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button
                                    onClick={() => {
                                        setShowGetStarted(true);
                                        setIsOpen(false);
                                    }}
                                    className="w-full bg-groxBlue hover:bg-blue-800 text-white"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Get Started Dialog */}
            <GetStartedDialog
                show={showGetStarted}
                onClose={() => setShowGetStarted(false)}
            />
        </>
    );
};

export default Navbar;
