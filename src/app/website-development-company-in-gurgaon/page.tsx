import type { Metadata } from "next";
import WebsiteDevelopmentGurgaon from "./WebsiteDevelopmentGurgaon";

export const metadata: Metadata = {
  title: "Website Development Company in Gurgaon | Grox Media",
  description:
    "Grox Media is a trusted website development company in Gurgaon. We build fast, SEO-ready custom websites for businesses in Gurugram, Noida, Delhi, Pune & Mumbai. Call +91 92668 06477.",
  keywords: [
    "website development company in gurgaon",
    "web development company in gurgaon",
    "website developer in gurgaon",
    "custom website development gurgaon",
    "best website development company in gurgaon",
    "top web development company gurgaon",
    "website development services gurgaon",
    "website development company in gurugram",
    "website development company in noida",
    "website development company in delhi",
    "website development company in pune",
    "website development company in mumbai",
  ],
  alternates: {
    canonical: "/website-development-company-in-gurgaon",
  },
  openGraph: {
    title: "Website Development Company in Gurgaon | Grox Media",
    description:
      "Trusted website development company in Gurgaon building fast, SEO-ready custom websites. Serving Gurugram, Noida, Delhi, Pune & Mumbai.",
    url: "https://groxmedia.in/website-development-company-in-gurgaon",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Development Company in Gurgaon - Grox Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Gurgaon | Grox Media",
    description:
      "Trusted website development company in Gurgaon building fast, SEO-ready custom websites.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Grox Media LLP",
    description:
      "Leading website development company in Gurgaon offering custom web development, e-commerce, and enterprise solutions.",
    url: "https://groxmedia.in",
    telephone: "+919266806477",
    email: "info@groxmedia.in",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201305",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Mumbai" },
    ],
    serviceType: [
      "Website Development",
      "Web Application Development",
      "E-commerce Development",
      "CMS Development",
      "Custom Web Solutions",
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/groxmedia1",
      "https://www.linkedin.com/in/manish-kumar-7a757b211/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebsiteDevelopmentGurgaon />
    </>
  );
}
