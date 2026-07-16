import type { Metadata } from "next";
import WebsiteDesigningMumbai from "./WebsiteDesigningMumbai";

export const metadata: Metadata = {
  title: "Website Designing Company in Mumbai | Grox Media",
  description:
    "Grox Media is a top website designing company in Mumbai. We create clean, responsive UI/UX designs that convert. Call +91 92668 06477.",
  keywords: [
    "website designing company in mumbai",
    "web design company in mumbai",
    "website designer in mumbai",
    "ui ux design company mumbai",
    "best website designing company in mumbai",
    "responsive web design mumbai",
    "website design services mumbai",
  ],
  alternates: { canonical: "/website-designing-company-in-mumbai" },
  openGraph: {
    title: "Website Designing Company in Mumbai | Grox Media",
    description: "Top website designing company in Mumbai creating clean, responsive UI/UX designs.",
    url: "https://groxmedia.in/website-designing-company-in-mumbai",
    siteName: "Grox Media", locale: "en_IN", type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Website Designing Company in Mumbai - Grox Media" }],
  },
  twitter: { card: "summary_large_image", title: "Website Designing Company in Mumbai | Grox Media", description: "Top website designing company in Mumbai creating clean, responsive UI/UX designs.", images: ["/og-image.jpg"] },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Grox Media LLP",
    description: "Top website designing company in Mumbai offering UI/UX design, responsive web design, and creative web solutions.",
    url: "https://groxmedia.in", telephone: "+919266806477", email: "info@groxmedia.in",
    address: { "@type": "PostalAddress", streetAddress: "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201305", addressCountry: "IN" },
    areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Gurgaon" }, { "@type": "City", name: "Noida" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Pune" }],
    serviceType: ["Website Designing", "UI/UX Design", "Responsive Web Design", "Landing Page Design", "Creative Web Design"],
    priceRange: "$$", sameAs: ["https://www.instagram.com/groxmedia1", "https://www.linkedin.com/in/manish-kumar-7a757b211/"],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><WebsiteDesigningMumbai /></>);
}
