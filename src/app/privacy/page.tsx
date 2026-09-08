import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Grox Media LLP collects, uses, and protects the information you share through this website, and how to request removal of your data.",
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
