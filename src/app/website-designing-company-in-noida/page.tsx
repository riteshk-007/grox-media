import type { Metadata } from "next";
import WebsiteDesigningNoida from "./WebsiteDesigningNoida";

export const metadata: Metadata = {
  title: "Website Designing Company in Noida | Grox Media",
  description:
    "Grox Media is a top website designing company in Noida. We create clean, responsive UI/UX designs that convert. Call +91 92668 06477.",
  keywords: [
    "website designing company in noida",
    "web design company in noida",
    "website designer in noida",
    "ui ux design company noida",
    "best website designing company in noida",
    "responsive web design noida",
    "website design services noida",
  ],
  alternates: { canonical: "/website-designing-company-in-noida" },
  openGraph: {
    title: "Website Designing Company in Noida | Grox Media",
    description: "Top website designing company in Noida creating clean, responsive UI/UX designs.",
    url: "https://groxmedia.in/website-designing-company-in-noida",
    siteName: "Grox Media", locale: "en_IN", type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Website Designing Company in Noida - Grox Media" }],
  },
  twitter: { card: "summary_large_image", title: "Website Designing Company in Noida | Grox Media", description: "Top website designing company in Noida creating clean, responsive UI/UX designs.", images: ["/og-image.jpg"] },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Grox Media LLP",
    description: "Top website designing company in Noida offering UI/UX design, responsive web design, and creative web solutions.",
    url: "https://groxmedia.in", telephone: "+919266806477", email: "info@groxmedia.in",
    address: { "@type": "PostalAddress", streetAddress: "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201305", addressCountry: "IN" },
    areaServed: [{ "@type": "City", name: "Noida" }, { "@type": "City", name: "Gurgaon" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Pune" }, { "@type": "City", name: "Mumbai" }],
    serviceType: ["Website Designing", "UI/UX Design", "Responsive Web Design", "Landing Page Design", "Creative Web Design"],
    priceRange: "$$", sameAs: ["https://www.instagram.com/groxmedia1", "https://www.linkedin.com/in/manish-kumar-7a757b211/"],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><WebsiteDesigningNoida /></>);
}
