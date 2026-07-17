import type { Metadata } from "next";
import WebsiteDesigningMumbai from "./WebsiteDesigningMumbai";

export const metadata: Metadata = {
  title: "Website Designing Company in Mumbai | Grox Media",
  description:
    "Grox Media creates premium website designs for Mumbai's finance, D2C & media brands. Brand-defining UI/UX for India's most competitive market. Call +91 92668 06477.",
  keywords: [
    "website designing company in mumbai",
    "web design agency mumbai",
    "ui ux design company bandra kurla complex mumbai",
    "website designer lower parel mumbai",
    "premium web design andheri mumbai",
    "brand identity design mumbai",
    "d2c website design mumbai",
    "enterprise web design company mumbai",
  ],
  alternates: {
    canonical: "/website-designing-company-in-mumbai",
  },
  openGraph: {
    title: "Website Designing Company in Mumbai | Grox Media",
    description:
      "Premium web design and UI/UX for Mumbai's finance companies, D2C brands, and media businesses. Brand-defining design for India's most competitive market.",
    url: "https://groxmedia.in/website-designing-company-in-mumbai",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website designing company in Mumbai - Grox Media premium UI/UX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Mumbai | Grox Media",
    description:
      "Premium web design for Mumbai's fast-moving business market. Brand-defining UI/UX and conversion-led layouts. Get a free design quote today.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDesigningMumbaiPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website designing company serving Mumbai's finance, D2C, media, and entertainment businesses in Bandra Kurla Complex, Lower Parel, Andheri, and Greater Mumbai — premium UI/UX design, brand identity, and conversion-focused web design.",
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
        "Website Designing",
        "UI/UX Design",
        "Brand Identity Design",
        "Responsive Web Design",
        "Landing Page Design",
        "Dashboard Design",
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
      name: "Website Designing in Mumbai",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Mumbai" },
      description:
        "Premium website designing services for Mumbai's finance companies, D2C brands, and media businesses — brand identity, UI/UX design, conversion-focused landing pages, and dashboard interfaces.",
      serviceType: "Website Designing",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does premium website design cost in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Mumbai businesses, a professionally designed website starts at ₹18,000–₹40,000. Premium brand-aligned websites for finance and enterprise clients start from ₹50,000. D2C product design with full e-commerce UI is scoped individually. Every engagement starts with a clear brief and fixed pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Our brand needs to feel premium — how do you achieve that in web design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Premium in design is about restraint, consistency, and intentionality — not just expensive-looking typography. We achieve it through a tight color palette, generous whitespace, consistent component language, and micro-interactions that feel considered rather than decorative. Mumbai's premium market can tell the difference, and so can we.",
          },
        },
        {
          "@type": "Question",
          name: "We're a D2C brand — can you design for product launches and campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Campaign landing pages, product launch microsites, and seasonal sale pages are a regular part of our work for D2C brands. We design them for speed — fast to build, fast to load, and fast to convert — so you can move at the pace Mumbai's consumer market demands.",
          },
        },
        {
          "@type": "Question",
          name: "What design tools and formats do you work in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All our design work is done in Figma. You receive the original project file, exportable assets in standard web formats (SVG, WebP, PNG), and a basic component library. If you work with a development team that uses a different handoff format, we can accommodate that during delivery.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle design projects for Mumbai clients remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We run design projects through structured async communication — a brief document, mood board alignment call, wireframe review, and then full design review. For Mumbai clients who prefer synchronous check-ins, we schedule them around your team's availability. Feedback is tracked in Figma comments, not scattered across email threads.",
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
          name: "Website Designing Company in Mumbai",
          item: "https://groxmedia.in/website-designing-company-in-mumbai",
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
      <WebsiteDesigningMumbai />
    </>
  );
}
