import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title:
    "Our Services — Web Development, App Development, SEO & Digital Marketing",
  description:
    "Explore Grox Media's services: website development, Android/iOS app development, SEO, branding, influencer marketing, social media marketing, video editing, lead generation, and IT support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Our Services — Web Development, App Development, SEO & Digital Marketing",
    description:
      "Nine services under one roof: custom websites, mobile apps, SEO, branding, social media, video editing, performance marketing, and IT support for businesses across India.",
    url: "https://groxmedia.in/services",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grox Media services — web development, SEO, and digital marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Our Services — Web Development, App Development, SEO & Digital Marketing",
    description:
      "Custom websites, mobile apps, SEO, branding, and performance marketing. Get a free consultation.",
    images: ["/og-image.jpg"],
  },
};

const SERVICE_NAMES = [
  "Website Development",
  "Android/iOS App Development",
  "Search Engine Optimization",
  "Branding",
  "Influencer Marketing",
  "Social Media Marketing",
  "Video Editing",
  "Lead Generation & Performance Marketing",
  "IT Support",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grox Media Services",
    url: "https://groxmedia.in/services",
    description:
      "Full catalogue of services offered by Grox Media LLP — website development, app development, SEO, branding, and digital marketing.",
    isPartOf: {
      "@type": "WebSite",
      name: "Grox Media",
      url: "https://groxmedia.in",
    },
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Grox Media Service Catalogue",
      itemListElement: SERVICE_NAMES.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: {
            "@type": "Organization",
            name: "Grox Media LLP",
            url: "https://groxmedia.in",
          },
          areaServed: { "@type": "Country", name: "India" },
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://groxmedia.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://groxmedia.in/services",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
