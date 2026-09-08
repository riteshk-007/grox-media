import type { Metadata } from "next";
import SitemapContent from "./SitemapContent";

export const metadata: Metadata = {
  title: "Website Sitemap",
  description:
    "Browse every page on groxmedia.in — services, portfolio, custom web development, city-specific web design and development pages, and company information.",
  alternates: {
    canonical: "/sitemap",
  },
  openGraph: {
    title: "Website Sitemap | Grox Media",
    description:
      "Browse every page on groxmedia.in — services, portfolio, and city-specific web design and development pages.",
    url: "https://groxmedia.in/sitemap",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapPage() {
  return <SitemapContent />;
}
