import type { Metadata } from "next";
import CustomWebDevelopment from "./CustomWebDevelopment";

export const metadata: Metadata = {
  title: "Custom Web Development Company | Grox Media",
  description:
    "Grox Media builds high-performance custom websites that turn visitors into customers — business websites, eCommerce stores, landing pages, redesigns, and CMS builds. Get a free consultation.",
  keywords: [
    "custom web development",
    "website development company",
    "business website development",
    "ecommerce website development",
    "landing page development",
    "website redesign",
    "cms website development",
    "web development company delhi",
  ],
  alternates: {
    canonical: "/custom-web-development",
  },
  openGraph: {
    title: "Custom Web Development Company | Grox Media",
    description:
      "High-performance custom websites engineered to turn visitors into customers — built by Grox Media's full-stack team.",
    url: "https://groxmedia.in/custom-web-development",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom web development company - Grox Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Company | Grox Media",
    description:
      "High-performance custom websites engineered to turn visitors into customers. Get a free consultation.",
    images: ["/og-image.jpg"],
  },
};

export default function CustomWebDevelopmentPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Custom Web Development",
      provider: {
        "@type": "Organization",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
      },
      areaServed: { "@type": "Country", name: "India" },
      description:
        "Custom website development services — business websites, eCommerce stores, landing pages, website redesigns, and CMS builds engineered to turn visitors into customers.",
      serviceType: "Website Development",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to develop a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on your website type, features, and customization needs. A basic website takes less time, while eCommerce and custom websites may require additional development time.",
          },
        },
        {
          "@type": "Question",
          name: "How much will it cost to develop a website in Delhi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It will depend on your needs in terms of website design, features, and functionality. We will make something that suits your needs.",
          },
        },
        {
          "@type": "Question",
          name: "Why do businesses need to invest in website development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With a professional website, it becomes easier to gain trust, create a good user experience, and attract customers for further business development.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we can redesign old websites and improve them in terms of design, performance, functionality, and user experience.",
          },
        },
        {
          "@type": "Question",
          name: "Can you migrate my website to another platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we help migrate websites while maintaining important data, structure, and functionality. The process depends on your current platform and requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Does website development play an essential role in SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, website development gives a good SEO platform with faster loading, mobile compatibility, cleaner code structure, and good visibility through search engines.",
          },
        },
        {
          "@type": "Question",
          name: "Which is the best website development company in Delhi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grox Media provides customized website development solutions focused on creative design, smooth functionality, and business growth.",
          },
        },
        {
          "@type": "Question",
          name: "Do you develop custom websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we create custom websites with unique features, integrations, and functionalities based on your specific business needs.",
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
          name: "Custom Web Development",
          item: "https://groxmedia.in/custom-web-development",
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
      <CustomWebDevelopment />
    </>
  );
}
