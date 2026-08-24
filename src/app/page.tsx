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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grox Media LLP",
    alternateName: "Grox Media",
    description:
      "Grox Media provides top-quality IT services: web development, mobile app development, graphic designing, SEO, and digital marketing for businesses across India.",
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
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Grox Media",
    url: "https://groxmedia.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://groxmedia.in/portfolio?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
