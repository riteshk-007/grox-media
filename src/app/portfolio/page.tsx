import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio — Websites, Graphic Design & Video Editing Work",
  description:
    "See Grox Media's client work: custom websites, Shopify and WooCommerce stores, healthcare and EdTech platforms, plus graphic design and video editing across finance, e-commerce, and B2B.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio — Websites, Graphic Design & Video Editing Work",
    description:
      "Live client projects across finance, e-commerce, healthcare, EdTech, travel, and B2B manufacturing — built by Grox Media.",
    url: "https://groxmedia.in/portfolio",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grox Media portfolio — client websites and design work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Websites, Graphic Design & Video Editing Work",
    description:
      "Live client projects across finance, e-commerce, healthcare, and EdTech. See our work.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grox Media Portfolio",
    url: "https://groxmedia.in/portfolio",
    description:
      "Client projects delivered by Grox Media LLP across web development, e-commerce, graphic design, and video editing.",
    isPartOf: {
      "@type": "WebSite",
      name: "Grox Media",
      url: "https://groxmedia.in",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Client Projects",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
        ...(project.link ? { url: project.link } : {}),
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
        name: "Portfolio",
        item: "https://groxmedia.in/portfolio",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioContent />
    </>
  );
}
