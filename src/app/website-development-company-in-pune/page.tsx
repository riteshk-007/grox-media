import type { Metadata } from "next";
import WebsiteDevelopmentPune from "./WebsiteDevelopmentPune";

export const metadata: Metadata = {
  title: "Website Development Company in Pune | Grox Media",
  description:
    "Grox Media builds websites for Pune's IT parks, D2C brands & manufacturing businesses. Tech-savvy market needs tech-first builds. Call +91 92668 06477.",
  keywords: [
    "website development company in pune",
    "web development agency pune",
    "custom website development hinjewadi pune",
    "website development company kharadi pune",
    "web developer magarpatta pune",
    "affordable website development pune",
    "web development services pune",
    "react next.js development company pune",
  ],
  alternates: {
    canonical: "/website-development-company-in-pune",
  },
  openGraph: {
    title: "Website Development Company in Pune | Grox Media",
    description:
      "Custom web development for Pune's IT parks, D2C brands, and manufacturing companies. Performance-first builds for a tech-savvy market. Get a free quote.",
    url: "https://groxmedia.in/website-development-company-in-pune",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website development company in Pune - Grox Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Pune | Grox Media",
    description:
      "Web development for Pune businesses — performance-optimised, SEO-ready, built in-house. No templates, no outsourcing.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentPunePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website development company serving Pune's IT companies, startups, D2C brands, and manufacturing businesses in Hinjewadi, Kharadi, Magarpatta, and across Pune district.",
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
        { "@type": "City", name: "Pune" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Delhi" },
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
      name: "Website Development in Pune",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Pune" },
      description:
        "Custom website development for Pune's IT companies, D2C startups, education institutions, and manufacturing businesses — including e-commerce, web apps, and performance-optimised sites.",
      serviceType: "Website Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website development cost in Pune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pune's market is competitive and price-conscious, so we offer clear tiered pricing. A business website starts at ₹12,000–₹25,000. E-commerce platforms start from ₹40,000. Web applications and SaaS products are priced based on scope after a discovery call. Every quote is fixed — no billing-by-the-hour surprises.",
          },
        },
        {
          "@type": "Question",
          name: "How long does web development take for a Pune business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A straightforward business website ships in 7–12 working days. E-commerce with product feeds and payment integration takes 3–4 weeks. For Pune's IT and SaaS businesses needing custom platforms, we scope timelines project by project — typically 4–10 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build websites that work well on slow internet connections?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Performance optimisation is standard in every build — image compression, lazy loading, server-side rendering for critical pages, and CDN setup. The goal is a site that feels fast even on a 3G connection, which matters for reaching customers outside Pune's core IT belt.",
          },
        },
        {
          "@type": "Question",
          name: "We're a D2C brand in Pune — what e-commerce platform do you recommend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your product range, order volume, and growth plans. We build on Shopify, WooCommerce, and custom Next.js storefronts — and we'll recommend the right option after understanding your business, not default to one platform for everyone. Many Pune D2C brands benefit from custom builds that control their full tech stack.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support clients who are located outside Noida, like in Pune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely — most of our client base is outside Noida. We run all projects remotely using structured communication: a dedicated project manager, weekly progress calls, staging links for review, and full documentation at handover. Distance has never caused a project to underperform.",
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
          name: "Website Development Company in Pune",
          item: "https://groxmedia.in/website-development-company-in-pune",
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
      <WebsiteDevelopmentPune />
    </>
  );
}
