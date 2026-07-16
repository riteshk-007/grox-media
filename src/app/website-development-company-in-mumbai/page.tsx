import type { Metadata } from "next";
import WebsiteDevelopmentMumbai from "./WebsiteDevelopmentMumbai";

export const metadata: Metadata = {
  title: "Website Development Company in Mumbai | Grox Media",
  description:
    "Grox Media is a trusted website development company in Mumbai. We build fast, SEO-ready custom websites for businesses. Call +91 92668 06477.",
  keywords: [
    "website development company in mumbai",
    "web development company in mumbai",
    "website developer in mumbai",
    "custom website development mumbai",
    "best website development company in mumbai",
    "top web development company mumbai",
    "website development services mumbai",
  ],
  alternates: { canonical: "/website-development-company-in-mumbai" },
  openGraph: {
    title: "Website Development Company in Mumbai | Grox Media",
    description: "Trusted website development company in Mumbai building fast, SEO-ready custom websites.",
    url: "https://groxmedia.in/website-development-company-in-mumbai",
    siteName: "Grox Media", locale: "en_IN", type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Website Development Company in Mumbai - Grox Media" }],
  },
  twitter: { card: "summary_large_image", title: "Website Development Company in Mumbai | Grox Media", description: "Trusted website development company in Mumbai building fast, SEO-ready custom websites.", images: ["/og-image.jpg"] },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Grox Media LLP",
    description: "Leading website development company in Mumbai offering custom web development, e-commerce, and enterprise solutions.",
    url: "https://groxmedia.in", telephone: "+919266806477", email: "info@groxmedia.in",
    address: { "@type": "PostalAddress", streetAddress: "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201305", addressCountry: "IN" },
    areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Gurgaon" }, { "@type": "City", name: "Noida" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Pune" }],
    serviceType: ["Website Development", "Web Application Development", "E-commerce Development", "CMS Development", "Custom Web Solutions"],
    priceRange: "$$", sameAs: ["https://www.instagram.com/groxmedia1", "https://www.linkedin.com/in/manish-kumar-7a757b211/"],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><WebsiteDevelopmentMumbai /></>);
}
