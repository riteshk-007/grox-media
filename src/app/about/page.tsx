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

export default function AboutPage() {
  return <AboutContent />;
}
