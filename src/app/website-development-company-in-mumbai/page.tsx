import type { Metadata } from "next";
import WebsiteDevelopmentMumbai from "./WebsiteDevelopmentMumbai";

export const metadata: Metadata = {
  title: "Website Development Company in Mumbai | Grox Media",
  description:
    "Grox Media builds enterprise-grade websites for Mumbai's finance, D2C & media companies. Fast, scalable, built for high competition. Call +91 92668 06477.",
  keywords: [
    "website development company in mumbai",
    "web development agency mumbai",
    "custom website development bandra kurla complex mumbai",
    "website development company lower parel mumbai",
    "web developer andheri mumbai",
    "enterprise web development mumbai",
    "website development services mumbai",
    "next.js react development company mumbai",
  ],
  alternates: {
    canonical: "/website-development-company-in-mumbai",
  },
  openGraph: {
    title: "Website Development Company in Mumbai | Grox Media",
    description:
      "Enterprise web development for Mumbai's finance, D2C, and media companies. High-performance, scalable builds for India's most competitive digital market.",
    url: "https://groxmedia.in/website-development-company-in-mumbai",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website development company in Mumbai - Grox Media enterprise builds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Mumbai | Grox Media",
    description:
      "Enterprise-grade web development for Mumbai businesses. Scalable, fast, SEO-optimised. Get a free quote today.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentMumbaiPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website development company serving Mumbai's finance, media, D2C, and enterprise businesses in Bandra Kurla Complex, Lower Parel, Andheri, and across Greater Mumbai.",
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
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Navi Mumbai" },
        { "@type": "City", name: "Thane" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Pune" },
      ],
      serviceType: [
        "Website Development",
        "Web Application Development",
        "E-commerce Development",
        "Enterprise Web Solutions",
        "CMS Development",
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
      name: "Website Development in Mumbai",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Mumbai" },
      description:
        "Enterprise-grade website development for Mumbai's finance sector, D2C brands, media companies, and startups — scalable, high-performance, SEO-optimised builds.",
      serviceType: "Website Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does enterprise website development cost in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Mumbai businesses, a professional business website starts at ₹20,000–₹40,000. High-traffic e-commerce platforms start from ₹60,000. Enterprise web applications with custom integrations, API layers, and multi-user systems are scoped individually. We quote fixed prices — no time-and-materials billing.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle high-traffic websites for Mumbai's scale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We architect for scale from the start — server-side rendering with Next.js, database query optimisation, load-balanced cloud hosting on AWS, and edge CDN configuration. Mumbai brands often experience significant traffic spikes during campaigns; we build so those spikes don't cause outages.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate our website with our existing CRM or ERP system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We've built API integrations with Salesforce, Zoho, HubSpot, and custom ERP systems. For Mumbai enterprises running complex back-office operations, website integration with internal tools is often the highest-value part of the project.",
          },
        },
        {
          "@type": "Question",
          name: "We're a D2C brand — what makes your e-commerce builds different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We don't just install a Shopify theme. For D2C brands that want control over their stack, we build custom storefronts on Next.js with headless commerce — faster load times, better SEO, and full flexibility to build brand-specific features that off-the-shelf platforms can't accommodate.",
          },
        },
        {
          "@type": "Question",
          name: "We're based in Mumbai — how do you manage projects remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We run structured remote engagements: a dedicated project manager as your single point of contact, bi-weekly video reviews, Notion-based project tracking, and staging environments for every major milestone. Mumbai clients tell us the async-first approach actually speeds up delivery compared to agency relationships that require constant in-person presence.",
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
          name: "Website Development Company in Mumbai",
          item: "https://groxmedia.in/website-development-company-in-mumbai",
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
      <WebsiteDevelopmentMumbai />
    </>
  );
}
