"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPWAButton() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("pwa-install-dismissed") === "1") {
      setDismissed(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setInstallEvent(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!installEvent || dismissed) return null;

  const handleInstall = async () => {
    await installEvent.prompt();
    const { outcome } = await installEvent.userChoice;
    if (outcome === "accepted" || outcome === "dismissed") {
      setInstallEvent(null);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem("pwa-install-dismissed", "1");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-24 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 md:bottom-8 md:left-8 md:right-auto md:w-auto md:translate-x-0"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3 rounded-2xl border border-orange-200 bg-white px-4 py-3 shadow-xl">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Download className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-neutral-900">Install Grox Media App</p>
            <p className="text-xs text-neutral-500">Quick access from your home screen</p>
          </div>
          <button
            onClick={handleInstall}
            className="flex-shrink-0 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-600"
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="flex-shrink-0 text-neutral-400 hover:text-neutral-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
