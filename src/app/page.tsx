import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ServicesOverview from "@/components/sections/ServicesOverview";
import VideoShowcase from "@/components/sections/VideoShowcase";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import AboutPreview from "@/components/sections/AboutPreview";
import TechStack from "@/components/sections/TechStack";
import FAQPreview from "@/components/sections/FAQPreview";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title:
    "Grox Media — Web Development, SEO & Digital Marketing Company in India",
  description:
    "Grox Media LLP is a Delhi NCR-based web development, SEO, and digital marketing company. We build custom websites, mobile apps, branding, and performance marketing solutions for businesses across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Grox Media — Web Development, SEO & Digital Marketing Company in India",
    description:
      "Custom website development, mobile apps, SEO, branding, and digital marketing for businesses across India. Based in Delhi NCR, serving Gurgaon, Noida, Mumbai, and Pune.",
    url: "https://groxmedia.in",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grox Media — Web Development & Digital Marketing Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grox Media — Web Development, SEO & Digital Marketing Company in India",
    description:
      "Custom websites, mobile apps, SEO, and digital marketing for Indian businesses. Get a free consultation.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grox Media LLP",
    alternateName: "Grox Media",
    description:
      "Grox Media LLP is a Delhi NCR-based IT services company offering web development, mobile app development, SEO, branding, and digital marketing for businesses across India.",
    url: "https://groxmedia.in",
    logo: "https://groxmedia.in/groX-Logo.png",
    image: "https://groxmedia.in/og-image.jpg",
    telephone: "+919266806477",
    email: "info@groxmedia.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector 90",
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
    sameAs: [
      "https://www.instagram.com/groxmedia1",
      "https://www.linkedin.com/in/manish-kumar-7a757b211/",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Android/iOS App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Influencer Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Editing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation & Performance Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Support" } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grox Media",
    url: "https://groxmedia.in",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "Grox Media LLP",
      url: "https://groxmedia.in",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://groxmedia.in/#localbusiness",
    name: "Grox Media LLP",
    url: "https://groxmedia.in",
    logo: "https://groxmedia.in/groX-Logo.png",
    image: "https://groxmedia.in/og-image.jpg",
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
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <LogoMarquee />
      <ServicesOverview />
      <VideoShowcase />
      <PortfolioPreview />
      <Stats />
      <Testimonials />
      <AboutPreview />
      <TechStack />
      <FAQPreview />
      <Contact />
    </main>
  );
}
