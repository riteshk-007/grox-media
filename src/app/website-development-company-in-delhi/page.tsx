import type { Metadata } from "next";
import WebsiteDevelopmentDelhi from "./WebsiteDevelopmentDelhi";

export const metadata: Metadata = {
  title: "Website Development Company in Delhi | Grox Media",
  description:
    "Grox Media builds websites for Delhi businesses — trading, retail, professional services & more. Clean code, fast delivery, SEO-ready. Call +91 92668 06477.",
  keywords: [
    "website development company in delhi",
    "web development agency delhi",
    "custom website development connaught place delhi",
    "website development company nehru place delhi",
    "web developer south delhi",
    "affordable website development delhi ncr",
    "website development services delhi",
    "professional web development company delhi",
  ],
  alternates: {
    canonical: "/website-development-company-in-delhi",
  },
  openGraph: {
    title: "Website Development Company in Delhi | Grox Media",
    description:
      "Custom web development for Delhi's diverse business landscape — from Nehru Place IT shops to Connaught Place professionals. Fast, SEO-optimised, built in-house.",
    url: "https://groxmedia.in/website-development-company-in-delhi",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website development company in Delhi - Grox Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Delhi | Grox Media",
    description:
      "Web development for Delhi businesses. In-house team, no outsourcing, SEO-ready from day one. Get a free quote.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentDelhiPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website development company serving Delhi businesses across Connaught Place, Nehru Place, South Delhi, and the wider NCR — custom builds, e-commerce, and web applications.",
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
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "New Delhi" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Noida" },
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
      name: "Website Development in Delhi",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Delhi" },
      description:
        "Custom website development for Delhi's SME, retail, trading, and professional services businesses — including e-commerce stores, corporate sites, and web applications.",
      serviceType: "Website Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a website cost for a Delhi business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on the scope. A professional business website for a Delhi SME starts at ₹15,000–₹35,000. E-commerce stores for Delhi's retail and trading businesses start from ₹50,000. We give you a detailed, itemised quote after a brief discovery call — no ambiguous packages.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you build a website for my Delhi business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard business websites are delivered in 8–14 working days. E-commerce builds with product catalogues and payment integrations take 3–5 weeks. We set the timeline at the start and stick to it — if anything changes, you hear from us immediately.",
          },
        },
        {
          "@type": "Question",
          name: "Our business has been around for years but our website is old — can you modernise it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and this is common with established Delhi businesses. We start with a technical audit — load speed, mobile experience, SEO health, and conversion flow — and then redesign from there. The goal is a site that reflects the quality of your business, not just a visual refresh.",
          },
        },
        {
          "@type": "Question",
          name: "Will my website rank on Google for Delhi-area searches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build every website with local SEO structure baked in — city-specific schema, proper heading hierarchy, canonical URLs, and fast loading speeds. Ranking in Delhi's competitive market takes ongoing effort beyond the build, which is why we also offer dedicated SEO services.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle hosting and domain setup too?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We help with domain registration advice, hosting setup (we work with AWS, Vercel, and managed WordPress hosts), SSL certificate installation, and DNS configuration. You get a complete handover package — no loose ends.",
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
          name: "Website Development Company in Delhi",
          item: "https://groxmedia.in/website-development-company-in-delhi",
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
      <WebsiteDevelopmentDelhi />
    </>
  );
}
