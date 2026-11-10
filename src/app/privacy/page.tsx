import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Grox Media LLP collects, uses and protects your personal data under India's DPDP Act, who we share it with, how long we keep it, and how to use your rights, withdraw consent or make a complaint.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Grox Media",
    description:
      "How Grox Media LLP collects, uses, and protects the information you share through this website.",
    url: "https://groxmedia.in/privacy",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
