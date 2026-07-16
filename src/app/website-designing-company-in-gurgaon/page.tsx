import type { Metadata } from "next";
import WebsiteDesigningGurgaon from "./WebsiteDesigningGurgaon";

export const metadata: Metadata = {
  title: "Website Designing Company in Gurgaon | Grox Media",
  description:
    "Grox Media is a top website designing company in Gurgaon. We create clean, responsive UI/UX designs that convert. Serving Gurugram, Noida, Delhi, Pune & Mumbai. Call +91 92668 06477.",
  keywords: [
    "website designing company in gurgaon",
    "web design company in gurgaon",
    "website designer in gurgaon",
    "ui ux design company gurgaon",
    "best website designing company in gurgaon",
    "top web design agency gurgaon",
    "responsive web design gurgaon",
    "website design services gurgaon",
    "website designing company in gurugram",
    "website designing company in noida",
    "website designing company in delhi",
    "website designing company in pune",
    "website designing company in mumbai",
  ],
  alternates: {
    canonical: "/website-designing-company-in-gurgaon",
  },
  openGraph: {
    title: "Website Designing Company in Gurgaon | Grox Media",
    description:
      "Top website designing company in Gurgaon creating clean, responsive UI/UX designs. Serving Gurugram, Noida, Delhi, Pune & Mumbai.",
    url: "https://groxmedia.in/website-designing-company-in-gurgaon",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Designing Company in Gurgaon - Grox Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Gurgaon | Grox Media",
    description:
      "Top website designing company in Gurgaon creating clean, responsive UI/UX designs.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDesigningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Grox Media LLP",
    description:
      "Top website designing company in Gurgaon offering UI/UX design, responsive web design, and creative web solutions.",
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
      "Website Designing",
      "UI/UX Design",
      "Responsive Web Design",
      "Landing Page Design",
      "Creative Web Design",
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
      <WebsiteDesigningGurgaon />
    </>
  );
}
