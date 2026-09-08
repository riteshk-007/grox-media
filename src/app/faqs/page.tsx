import type { Metadata } from "next";
import FaqsContent from "./FaqsContent";
import { FAQ_ITEMS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Website, SEO, Design & Video Editing Questions Answered",
  description:
    "Answers to common questions about Grox Media's website development, SEO, graphic design, and video editing services — timelines, technologies, revisions, pricing, and how projects start.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "FAQs — Website, SEO, Design & Video Editing Questions Answered",
    description:
      "Timelines, technologies, revisions, and process — straight answers about working with Grox Media.",
    url: "https://groxmedia.in/faqs",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grox Media frequently asked questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs — Website, SEO, Design & Video Editing Questions Answered",
    description:
      "Timelines, technologies, revisions, and process — straight answers about working with Grox Media.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        name: "FAQs",
        item: "https://groxmedia.in/faqs",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqsContent />
    </>
  );
}
