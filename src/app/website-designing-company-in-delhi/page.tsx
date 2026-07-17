import type { Metadata } from "next";
import WebsiteDesigningDelhi from "./WebsiteDesigningDelhi";

export const metadata: Metadata = {
  title: "Website Designing Company in Delhi | Grox Media",
  description:
    "Grox Media designs visually sharp, user-friendly websites for Delhi's SMEs, retail brands, and professional services firms. Nehru Place to South Delhi. Call +91 92668 06477.",
  keywords: [
    "website designing company in delhi",
    "web design agency delhi",
    "ui ux design company connaught place delhi",
    "website designer nehru place delhi",
    "responsive web design south delhi",
    "brand identity design delhi",
    "affordable web design company delhi ncr",
    "professional website design delhi",
  ],
  alternates: {
    canonical: "/website-designing-company-in-delhi",
  },
  openGraph: {
    title: "Website Designing Company in Delhi | Grox Media",
    description:
      "Visually sharp, conversion-focused web design for Delhi's businesses. From Nehru Place IT to South Delhi professional services — design that works for your audience.",
    url: "https://groxmedia.in/website-designing-company-in-delhi",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website designing company in Delhi - Grox Media design services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Delhi | Grox Media",
    description:
      "Conversion-focused web design for Delhi's diverse business community. UI/UX, branding, and responsive design done right. Get a free quote.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDesigningDelhiPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website designing company serving Delhi businesses — UI/UX design, brand identity, responsive web design, and landing page design for SMEs, retail brands, and professional services across Connaught Place, Nehru Place, South Delhi, and NCR.",
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
      name: "Website Designing in Delhi",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Delhi" },
      description:
        "Professional website designing services for Delhi's SMEs, retail businesses, and professional services firms — UI/UX design, brand identity, and conversion-focused layouts.",
      serviceType: "Website Designing",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does professional website design cost in Delhi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Delhi businesses, a professionally designed website starts at ₹14,000–₹30,000 depending on page count and complexity. E-commerce design with product page templates starts from ₹30,000. We give an exact quote after understanding your brand, audience, and business goals — no approximations upfront.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the full website design process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Initial wireframes are delivered within 3–4 days of project kickoff. Full high-fidelity design across all pages takes 10–18 working days depending on scope. We share progress at every milestone — you're reviewing real work, not waiting for a final reveal.",
          },
        },
        {
          "@type": "Question",
          name: "Our Delhi business has a strong offline reputation — can you translate that into a website design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That's one of the most common briefs we work with for established Delhi businesses. We start with a brand discovery session — understanding your history, values, target customers, and competitive positioning. The design reflects your reputation visually: trustworthy, professional, and specific to your sector.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide the design files after the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every client receives their complete Figma project files, exported assets, and a basic style guide documenting colors, typography, and component usage. These are yours to use independently — whether for printing, presentations, or future design work.",
          },
        },
        {
          "@type": "Question",
          name: "We serve customers across India from our Delhi base — will the design work for all regions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design for national reach from the start — no regional visual clichés that only resonate locally, fast load times that work across India's varied internet infrastructure, and accessibility considerations for users on older devices. Your Delhi base shouldn't limit your website's national appeal.",
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
          name: "Website Designing Company in Delhi",
          item: "https://groxmedia.in/website-designing-company-in-delhi",
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
      <WebsiteDesigningDelhi />
    </>
  );
}
