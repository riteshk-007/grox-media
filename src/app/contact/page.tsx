import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Grox Media — Get a Free Quote for Your Project",
  description:
    "Contact Grox Media LLP for web development, app development, SEO, or digital marketing. Call +91 92668 06477, email info@groxmedia.in, or fill out the form for a free consultation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Grox Media — Get a Free Quote for Your Project",
    description:
      "Reach out to Grox Media for a free project consultation. Web development, mobile apps, SEO, and digital marketing for businesses across India.",
    url: "https://groxmedia.in/contact",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Grox Media LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Grox Media — Get a Free Quote for Your Project",
    description:
      "Call +91 92668 06477 or fill out the form. Free project consultations for web development, SEO, and digital marketing.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Grox Media",
    url: "https://groxmedia.in/contact",
    description:
      "Contact Grox Media LLP for website development, mobile apps, SEO, and digital marketing. Based in Noida, serving businesses across India.",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://groxmedia.in/#localbusiness",
    name: "Grox Media LLP",
    url: "https://groxmedia.in",
    logo: "https://groxmedia.in/groX-Logo.png",
    image: "https://groxmedia.in/og-image.jpg",
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
    areaServed: [
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Pune" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919266806477",
        contactType: "sales",
        email: "info@groxmedia.in",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+919354734436",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/groxmedia1",
      "https://www.linkedin.com/in/manish-kumar-7a757b211/",
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
        name: "Contact",
        item: "https://groxmedia.in/contact",
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
