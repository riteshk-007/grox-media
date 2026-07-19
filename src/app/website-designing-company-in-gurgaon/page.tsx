import type { Metadata } from "next";
import WebsiteDesigningGurgaon from "./WebsiteDesigningGurgaon";

export const metadata: Metadata = {
  title: "Website Designing Company in Gurgaon | Grox Media",
  description:
    "Grox Media designs websites that convert for Gurgaon businesses. Premium UI/UX, brand-aligned visuals, and mobile-first layouts. Cyber City to Sector 44. Call +91 92668 06477.",
  keywords: [
    "website designing company in gurgaon",
    "web design agency gurgaon",
    "ui ux design company cyber city gurgaon",
    "website designer sector 44 gurgaon",
    "responsive web design gurgaon",
    "brand identity design gurgaon",
    "landing page design gurgaon",
    "premium web design company gurgaon",
  ],
  alternates: {
    canonical: "/website-designing-company-in-gurgaon",
  },
  openGraph: {
    title: "Website Designing Company in Gurgaon | Grox Media",
    description:
      "Premium UI/UX and web design for Gurgaon businesses. Brand-aligned, conversion-focused, mobile-first. Serving Cyber City, Sector 44, and Golf Course Road.",
    url: "https://groxmedia.in/website-designing-company-in-gurgaon",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website designing company in Gurgaon - Grox Media UI/UX team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Designing Company in Gurgaon | Grox Media",
    description:
      "Premium web design for Gurgaon's corporate and startup market. UI/UX, branding, and conversion-focused layouts. Get a free design consultation.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDesigningGurgaonPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website designing company in Gurgaon offering UI/UX design, brand identity, responsive web design, and landing page design for businesses in Cyber City, Sector 44, Golf Course Road, and across the city.",
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
      name: "Website Designing in Gurgaon",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description:
        "Professional website designing services for Gurgaon businesses — UI/UX design, responsive layouts, brand identity, landing pages, and dashboard interfaces.",
      serviceType: "Website Designing",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does website design cost for a Gurgaon business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Gurgaon businesses, a professionally designed business website starts at ₹12,000–₹28,000. Landing pages and campaign microsites start at ₹8,000. Full brand identity packages with website design start from ₹35,000. Every quote is scoped and fixed — no open-ended pricing.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the website design process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A complete website design — wireframes, mockups, revisions, and final assets — typically takes 7–14 working days. Rush timelines for campaign pages are available. We share work-in-progress at every stage so you're not waiting for a single big reveal.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign an existing website while keeping the same domain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design the new version on a staging environment and migrate live when approved — no downtime, same domain. For Gurgaon businesses with existing SEO rankings, we preserve URL structures and redirect paths to protect search visibility during the transition.",
          },
        },
        {
          "@type": "Question",
          name: "Will my redesigned website work on mobile phones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mobile-first design is our default, not an option. We design for small screens first, then scale up — not the other way around. The result is a layout that works naturally on phones rather than a desktop design squeezed into a mobile viewport.",
          },
        },
        {
          "@type": "Question",
          name: "Do you also handle the development after designing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our design and development teams work under the same roof. If you need just the design files, we deliver Figma exports and a style guide. If you want us to build from those designs, our development team picks up from handover. Many Gurgaon clients prefer the integrated approach for consistency.",
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
          name: "Website Designing Company in Gurgaon",
          item: "https://groxmedia.in/website-designing-company-in-gurgaon",
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
      <WebsiteDesigningGurgaon />
    </>
  );
}
