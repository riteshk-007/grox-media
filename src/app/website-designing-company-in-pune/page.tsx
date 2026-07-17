import type { Metadata } from "next";
import WebsiteDesigningPune from "./WebsiteDesigningPune";

export const metadata: Metadata = {
  title: "Website Designing Company in Pune | Grox Media",
  description:
    "Grox Media designs clean, purposeful websites for Pune's IT companies, D2C brands & education sector. Hinjewadi to Kharadi. UI/UX-first approach. Call +91 92668 06477.",
  keywords: [
    "website designing company in pune",
    "web design agency pune",
    "ui ux design company hinjewadi pune",
    "website designer kharadi pune",
    "responsive web design magarpatta pune",
    "brand identity design pune",
    "landing page design pune",
    "d2c website design company pune",
  ],
  alternates: {
    canonical: "/website-designing-company-in-pune",
  },
  openGraph: {
    title: "Website Designing Company in Pune | Grox Media",
    description:
      "UI/UX-first web design for Pune's IT companies, D2C brands, and education businesses. Clean, purposeful, and built for Pune's tech-native audience.",
    url: "https://groxmedia.in/website-designing-company-in-pune",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website designing company in Pune - Grox Media UI/UX design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Pune | Grox Media",
    description:
      "Web design for Pune's IT companies and D2C brands. UI/UX-led, conversion-focused, Figma-delivered. Get a free design consultation.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDesigningPunePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website designing company serving Pune's IT businesses, D2C brands, education institutions, and startups in Hinjewadi, Kharadi, Magarpatta, and across Pune district — UI/UX design, brand identity, and responsive web design.",
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
        "Website Designing",
        "UI/UX Design",
        "Responsive Web Design",
        "Brand Identity Design",
        "Landing Page Design",
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
      name: "Website Designing in Pune",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Pune" },
      description:
        "Professional website designing services for Pune's IT companies, D2C brands, and education institutions — UI/UX design, brand identity, responsive layouts, and conversion-focused interfaces.",
      serviceType: "Website Designing",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website design cost in Pune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pune's market values quality at a reasonable price point. A professionally designed business website starts at ₹10,000–₹22,000. D2C product site designs with full e-commerce UI start from ₹28,000. Dashboard and web app UI/UX is quoted after scoping. All quotes are fixed and include revision rounds.",
          },
        },
        {
          "@type": "Question",
          name: "We're a tech company in Pune — do you understand SaaS product design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Product design for SaaS and web applications is a distinct discipline — information architecture, user flows, empty states, error handling, and progressive disclosure all matter. We've designed dashboards and admin interfaces that Pune's IT companies have deployed to thousands of end users.",
          },
        },
        {
          "@type": "Question",
          name: "Can you create a design system alongside the website design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For Pune's product companies that will be building on the website design over time, we create a design system in Figma — components, tokens, patterns, and usage documentation. This gives your in-house or extended development team a consistent reference instead of re-designing from scratch for every new feature.",
          },
        },
        {
          "@type": "Question",
          name: "My website has high bounce rates — can redesign fix that?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often yes — but we diagnose before we prescribe. High bounce rates can be caused by slow loading, irrelevant traffic, confusing layout, or weak value proposition communication. We review your analytics and current user behaviour before designing the solution, so the redesign targets the actual problem.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with education institutions and colleges in Pune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Education website design has specific requirements — course catalogue structure, admission workflow, faculty presentation, and accessibility for students with varying tech literacy. We've designed for institutions with student counts ranging from a few hundred to tens of thousands.",
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
          name: "Website Designing Company in Pune",
          item: "https://groxmedia.in/website-designing-company-in-pune",
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
      <WebsiteDesigningPune />
    </>
  );
}
