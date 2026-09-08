import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Grox Media LLP — Our Story, Mission & Values",
  description:
    "Learn about Grox Media LLP — a Delhi NCR-based team of developers, designers, and digital strategists building websites, apps, and marketing solutions for businesses across India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Grox Media LLP — Our Story, Mission & Values",
    description:
      "Meet the team behind Grox Media. We are developers, designers, and strategists helping Indian businesses grow their digital presence.",
    url: "https://groxmedia.in/about",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Grox Media LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Grox Media LLP — Our Story, Mission & Values",
    description:
      "Developers, designers, and strategists building digital solutions for businesses across India.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Grox Media LLP",
    url: "https://groxmedia.in/about",
    description:
      "Grox Media LLP is a Noida-headquartered digital agency delivering website development, mobile apps, SEO, branding, and performance marketing for businesses across India.",
    mainEntity: {
      "@type": "Organization",
      name: "Grox Media LLP",
      url: "https://groxmedia.in",
      logo: "https://groxmedia.in/groX-Logo.png",
      email: "info@groxmedia.in",
      telephone: "+919266806477",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201305",
        addressCountry: "IN",
      },
    },
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
        name: "About",
        item: "https://groxmedia.in/about",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
