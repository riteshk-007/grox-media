import type { Metadata } from "next";
import WebsiteDevelopmentGurgaon from "./WebsiteDevelopmentGurgaon";

export const metadata: Metadata = {
  title: "Professional Website Development in Gurgaon | Grox Media",
  description:
    "Grox Media is a renowned website development company in Gurgaon building future-ready websites for ambitious brands — custom web apps, enterprise sites, and scalable digital solutions. Call +91 92668 06477.",
  keywords: [
    "website development company in gurgaon",
    "web development agency gurgaon",
    "custom website development cyber city",
    "website development company sector 44 gurgaon",
    "affordable web development gurgaon",
    "website developer gurgaon",
    "next.js development company gurgaon",
  ],
  alternates: {
    canonical: "/website-development-company-in-gurgaon",
  },
  openGraph: {
    title: "Professional Website Development in Gurgaon | Grox Media",
    description:
      "Building future-ready websites for ambitious brands in Gurgaon. Custom-built, scalable, SEO-optimized digital solutions across every industry.",
    url: "https://groxmedia.in/website-development-company-in-gurgaon",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website development company in Gurgaon - Grox Media team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Website Development in Gurgaon | Grox Media",
    description:
      "Future-ready, scalable website development for Gurgaon businesses ready to scale. Get a free consultation today.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentGurgaonPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Grox Media LLP",
      description:
        "Website development company in Gurgaon offering custom web development, e-commerce, and enterprise web applications for businesses in Cyber City, Sector 44, Golf Course Road, and across the city.",
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
      name: "Website Development in Gurgaon",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "City", name: "Gurgaon" },
      description:
        "Custom website development services for Gurgaon businesses including e-commerce, web apps, CMS solutions, and performance optimization.",
      serviceType: "Website Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why should I choose Grox Media for website development in Gurgaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At Grox Media, we design and develop custom websites that are scalable and SEO optimized. The websites are developed through technology-based solutions and industry best practices.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to develop websites in Gurgaon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the requirement of the website that you wish to get developed. After we have understood your requirements, we will provide you with a quotation with no hidden costs involved.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The time taken to complete a project depends upon the project requirements. A basic business website requires only a few weeks; however, web application development may require more time. We provide a complete project timeline for your review before starting development work.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build custom websites or use templates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We generally develop customized websites based on your brand, business goals, and user experience needs. On some occasions, customization of a CMS-based solution is also possible.",
          },
        },
        {
          "@type": "Question",
          name: "Would my website be mobile-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all our websites are 100 percent responsive and work on both the desktops as well as on the smartphones.",
          },
        },
        {
          "@type": "Question",
          name: "Do you make SEO-friendly websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we make SEO-friendly websites that have all the characteristics, like optimized code, loading speed, mobile compatibility, etc.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign my existing website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our service includes redesigning an existing website through better design and performance without affecting your brand image.",
          },
        },
        {
          "@type": "Question",
          name: "Do you maintain my website after the launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide a variety of services that include website maintenance after its launch.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate third-party tools and business systems into my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Of course, we can integrate third-party tools and business applications like CRM systems, payment gateway services, ERP solutions, marketing tools, analytics platforms, and other applications depending upon your website's needs.",
          },
        },
        {
          "@type": "Question",
          name: "How do I begin working with Grox Media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All you have to do is contact us to book a free consultation where we will understand your needs and provide you with a solution tailored for your project.",
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
          name: "Website Development Company in Gurgaon",
          item: "https://groxmedia.in/website-development-company-in-gurgaon",
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
      <WebsiteDevelopmentGurgaon />
    </>
  );
}
