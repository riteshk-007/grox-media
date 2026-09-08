import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Grox Media LLP website, including acceptance of terms, use of content, and limitation of liability.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Grox Media",
    description:
      "The terms that govern your use of the Grox Media LLP website.",
    url: "https://groxmedia.in/terms",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
