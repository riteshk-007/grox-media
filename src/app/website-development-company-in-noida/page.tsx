import type { Metadata } from "next";
import WebsiteDevelopmentNoida from "./WebsiteDevelopmentNoida";

export const metadata: Metadata = {
  title: "Website Development Company in Noida | Grox Media",
  description:
    "Grox Media delivers custom websites for Noida's IT companies, startups & SMEs. Sector 62/63 to Expressway — fast, scalable builds. Call +91 92668 06477.",
  keywords: [
    "website development company in noida",
    "web development agency noida",
    "custom website development sector 62 noida",
    "website development company sector 63 noida",
    "web development services noida expressway",
    "web developer noida",
    "affordable website development noida",
    "next.js development noida",
  ],
  alternates: {
    canonical: "/website-development-company-in-noida",
  },
  openGraph: {
    title: "Website Development Company in Noida | Grox Media",
    description:
      "Custom web development for Noida's IT parks and growing startup scene. In-house team, clean code, SEO-ready. Serving Sector 62, 63, and the Expressway belt.",
    url: "https://groxmedia.in/website-development-company-in-noida",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website development company in Noida - Grox Media team at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Noida | Grox Media",
    description:
      "Web development for Noida businesses — no outsourcing, no templates, real results. Get a free project quote.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentNoidaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website development company in Noida delivering custom web solutions for IT companies, startups, and manufacturing businesses in Sector 62, Sector 63, and along the Noida Expressway.",
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
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Gurgaon" },
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
      name: "Website Development in Noida",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Noida" },
      description:
        "Custom website development services for Noida-based IT companies, startups, and SMEs including e-commerce builds, web apps, and CMS integrations.",
      serviceType: "Website Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website development cost in Noida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A basic business website for Noida companies starts at ₹12,000–₹28,000. E-commerce platforms with Razorpay or PayU integration start from ₹45,000. Web applications and SaaS tools are scoped individually. We provide a fixed-price quote after understanding your requirements — no variable billing surprises.",
          },
        },
        {
          "@type": "Question",
          name: "How long does website development take for a Noida business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simple business websites take 5–12 working days. E-commerce stores typically need 3–4 weeks. Complex platforms with custom integrations run 6–10 weeks. We've delivered rush projects for Noida clients in under a week when needed — at no compromise on code quality.",
          },
        },
        {
          "@type": "Question",
          name: "My current website looks outdated. Can you redesign it without losing my SEO rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We carry out an SEO audit of your existing site before touching anything — mapping every indexed URL, current rankings, and backlink profile. The redesign preserves your URL structure and all technical SEO signals while modernising the design and improving Core Web Vitals.",
          },
        },
        {
          "@type": "Question",
          name: "Will the website load properly on all devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every build we deliver is tested across phones, tablets, and desktops before launch. We code mobile-first — smallest screen first, scaling up — so the experience on a ₹12,000 Android phone is as solid as on a MacBook. No afterthought responsiveness.",
          },
        },
        {
          "@type": "Question",
          name: "We're in Noida — do you need to visit us to start the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, we're based in Noida and happy to meet local clients when helpful. Most projects run efficiently over structured calls and shared documents — we use Notion for project tracking and Google Meet for reviews. If an in-person workshop helps at kickoff, we can arrange that.",
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
          name: "Website Development Company in Noida",
          item: "https://groxmedia.in/website-development-company-in-noida",
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
      <WebsiteDevelopmentNoida />
    </>
  );
}
