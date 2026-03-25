"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "https://wa.me/919266806477?text=Hi!%20I%27m%20interested%20in%20Grox%20Media%20IT%20services.%20Can%20you%20help%20me%3F";

export default function FloatingButtons() {
  return (
    <>
      <motion.div
        className="fixed bottom-6 left-4 z-50 md:bottom-8 md:left-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="https://www.instagram.com/groxmedia55/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg md:h-14 md:w-14"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="inline-flex"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Instagram className="h-6 w-6 md:h-7 md:w-7" />
          </motion.span>
        </Link>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-4 z-50 md:bottom-8 md:right-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <Link
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:h-14 md:w-14"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="inline-flex"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
          </motion.span>
        </Link>
      </motion.div>
    </>
  );
}
