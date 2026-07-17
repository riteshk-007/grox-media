import type { Metadata } from "next";
import WebsiteDesigningNoida from "./WebsiteDesigningNoida";

export const metadata: Metadata = {
  title: "Website Designing Company in Noida | Grox Media",
  description:
    "Grox Media creates UI/UX-led website designs for Noida's IT companies and startups. Clean, functional, conversion-ready. Sector 62, 63 & Expressway. Call +91 92668 06477.",
  keywords: [
    "website designing company in noida",
    "web design agency noida",
    "ui ux design company sector 62 noida",
    "website designer sector 63 noida",
    "responsive web design noida",
    "brand identity design noida",
    "landing page design noida expressway",
    "professional web design company noida",
  ],
  alternates: {
    canonical: "/website-designing-company-in-noida",
  },
  openGraph: {
    title: "Website Designing Company in Noida | Grox Media",
    description:
      "UI/UX-led web design for Noida's IT companies, startups, and SMEs. Functional, brand-aligned, and mobile-first. Serving Sector 62, 63, and the Expressway belt.",
    url: "https://groxmedia.in/website-designing-company-in-noida",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website designing company in Noida - Grox Media design team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Noida | Grox Media",
    description:
      "UI/UX-first web design for Noida businesses. Local team, brand-aligned designs, mobile-first approach. Get a free design consultation.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDesigningNoidaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website designing company in Noida offering UI/UX design, responsive web design, brand identity, and landing page design for IT companies and businesses in Sector 62, 63, and along the Noida Expressway.",
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
      name: "Website Designing in Noida",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Noida" },
      description:
        "Professional website designing services for Noida's IT companies, startups, and SMEs — UI/UX design, brand identity, responsive layouts, and conversion-focused landing pages.",
      serviceType: "Website Designing",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website design cost in Noida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website design pricing in Noida starts at ₹10,000–₹25,000 for a professional business site. Landing pages and campaign pages start at ₹7,000. Full UI/UX design for web applications or SaaS dashboards is scoped after a requirements call. All pricing is fixed and itemised — no vague 'design package' charges.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between website design and development — do you do both?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Design is the visual and UX layer — layouts, typography, color systems, and user flows. Development is converting those designs into working code. We do both in-house, which means your Figma designs get built exactly as they look — no interpretation errors between teams.",
          },
        },
        {
          "@type": "Question",
          name: "We're an IT company in Sector 62 — do you design for B2B audiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. B2B web design has different priorities than B2C — credibility signals, services clarity, case study presentation, and lead capture flows matter more than flashy animations. We design for how B2B buyers actually evaluate vendors: systematically and with high scrutiny.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign our website without breaking our current Google rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Before the visual redesign starts, we map your current indexed pages, ranking keywords, and internal link structure. The new design preserves these signals — URL structures stay intact, heading hierarchies are improved not disrupted, and page load times typically improve, which benefits rankings.",
          },
        },
        {
          "@type": "Question",
          name: "How many design revisions do we get?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We include two rounds of design revisions for each deliverable — homepage, inner pages, and mobile views. Additional revision rounds are available at a transparent hourly rate. Most Noida clients finalise designs within the included rounds because we validate direction with wireframes before investing in full visual design.",
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
          name: "Website Designing Company in Noida",
          item: "https://groxmedia.in/website-designing-company-in-noida",
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
      <WebsiteDesigningNoida />
    </>
  );
}
