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

export default function ContactPage() {
  return <ContactContent />;
}
