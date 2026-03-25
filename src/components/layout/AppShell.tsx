"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const inStudio = pathname?.startsWith("/studio");

  return (
    <>
      {!inStudio ? <Navbar /> : null}
      {children}
      {!inStudio ? <FloatingButtons /> : null}
      {!inStudio ? <Toaster /> : null}
      {!inStudio ? <Footer /> : null}
      <Analytics />
    </>
  );
}

