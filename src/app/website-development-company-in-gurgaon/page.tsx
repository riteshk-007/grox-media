import type { Metadata } from "next";
import WebsiteDevelopmentGurgaon from "./WebsiteDevelopmentGurgaon";

export const metadata: Metadata = {
  title: "Website Development Company in Gurgaon | Grox Media",
  description:
    "Grox Media builds high-performance websites for Gurgaon businesses — from Cyber City startups to Golf Course Road enterprises. Fast, SEO-ready, built in-house. Call +91 92668 06477.",
  keywords: [
    "website development company in gurgaon",
    "web development agency gurgaon",
    "custom website development cyber city",
    "website development company sector 44 gurgaon",
    "affordable web development gurgaon",
    "website developer gurgaon",
    "next.js development company gurgaon",
  ],
  alternates: {
    canonical: "/website-development-company-in-gurgaon",
  },
  openGraph: {
    title: "Website Development Company in Gurgaon | Grox Media",
    description:
      "High-performance websites for Gurgaon businesses. In-house team, 98% on-time delivery, SEO-ready builds. Serving Cyber City, Sector 44, Golf Course Road & beyond.",
    url: "https://groxmedia.in/website-development-company-in-gurgaon",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website development company in Gurgaon - Grox Media team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Gurgaon | Grox Media",
    description:
      "In-house web development for Gurgaon businesses. Fast delivery, clean code, SEO-ready. Get a free quote today.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentGurgaonPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website development company in Gurgaon offering custom web development, e-commerce, and enterprise web applications for businesses in Cyber City, Sector 44, Golf Course Road, and across the city.",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Website Development in Gurgaon",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description:
        "Custom website development services for Gurgaon businesses including e-commerce, web apps, CMS solutions, and performance optimization.",
      serviceType: "Website Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website development cost in Gurgaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Gurgaon businesses, a professional 5-page business website starts at ₹15,000–₹30,000. E-commerce stores with payment gateway integration start from ₹50,000. Corporate portals or web applications are quoted individually after scoping. Every quote is itemised — no vague packages.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard business website takes 7–15 working days. E-commerce builds run 3–5 weeks depending on catalogue size and custom features. We share a project timeline on day one and flag delays proactively — not after the deadline passes.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign our existing website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We audit your current site first — loading speed, mobile usability, SEO structure, and conversion flow — then redesign with those gaps fixed. Many Gurgaon clients come to us specifically to modernise legacy sites that were built 4–5 years ago and are now losing search rankings.",
          },
        },
        {
          "@type": "Question",
          name: "Will my website work properly on mobile phones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every website we build is mobile-first. We test on actual devices across Android and iOS — not just browser emulators — before handover. Gurgaon has one of the highest smartphone penetration rates among Indian metros, so a broken mobile experience directly costs you leads.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with Gurgaon clients remotely or do you need to meet in person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work fully remotely with most clients across India. Project kickoffs, design reviews, and progress updates happen over Google Meet or Zoom. For Gurgaon clients who prefer in-person meetings, we can schedule visits — but most projects move faster when handled over structured calls.",
          },
        },
      ],
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Website Development Company in Gurgaon",
          item: "https://groxmedia.in/website-development-company-in-gurgaon",
        },
      ],
    },
  ];

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
