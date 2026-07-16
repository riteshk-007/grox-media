import type { Metadata } from "next";
import WebsiteDevelopmentDelhi from "./WebsiteDevelopmentDelhi";

export const metadata: Metadata = {
  title: "Website Development Company in Delhi | Grox Media",
  description:
    "Grox Media is a trusted website development company in Delhi. We build fast, SEO-ready custom websites for businesses. Call +91 92668 06477.",
  keywords: [
    "website development company in delhi",
    "web development company in delhi",
    "website developer in delhi",
    "custom website development delhi",
    "best website development company in delhi",
    "top web development company delhi",
    "website development services delhi",
  ],
  alternates: { canonical: "/website-development-company-in-delhi" },
  openGraph: {
    title: "Website Development Company in Delhi | Grox Media",
    description: "Trusted website development company in Delhi building fast, SEO-ready custom websites.",
    url: "https://groxmedia.in/website-development-company-in-delhi",
    siteName: "Grox Media", locale: "en_IN", type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Website Development Company in Delhi - Grox Media" }],
  },
  twitter: { card: "summary_large_image", title: "Website Development Company in Delhi | Grox Media", description: "Trusted website development company in Delhi building fast, SEO-ready custom websites.", images: ["/og-image.jpg"] },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Grox Media LLP",
    description: "Leading website development company in Delhi offering custom web development, e-commerce, and enterprise solutions.",
    url: "https://groxmedia.in", telephone: "+919266806477", email: "info@groxmedia.in",
    address: { "@type": "PostalAddress", streetAddress: "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201305", addressCountry: "IN" },
    areaServed: [{ "@type": "City", name: "Delhi" }, { "@type": "City", name: "Gurgaon" }, { "@type": "City", name: "Noida" }, { "@type": "City", name: "Pune" }, { "@type": "City", name: "Mumbai" }],
    serviceType: ["Website Development", "Web Application Development", "E-commerce Development", "CMS Development", "Custom Web Solutions"],
    priceRange: "$$", sameAs: ["https://www.instagram.com/groxmedia1", "https://www.linkedin.com/in/manish-kumar-7a757b211/"],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><WebsiteDevelopmentDelhi /></>);
}
