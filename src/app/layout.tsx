import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const sharpLight = localFont({
  src: [{ path: "../fonts/SharpGrotesk-Light20.otf", weight: "300", style: "normal" }],
  variable: "--font-jakarta",
  display: "swap",
});

const sharpHeading = localFont({
  src: [{ path: "../fonts/SharpGrotesk-Medium25.otf", weight: "500", style: "normal" }],
  variable: "--font-sharp-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grox Media - Digital Excellence Redefined",
    template: "%s | Grox Media",
  },
  description:
    "Grox Media provides top-quality IT services. Expert web development, graphic designing, digital marketing, and complete IT solutions for businesses.",
  keywords: [
    "IT services",
    "web development",
    "graphic designing",
    "digital marketing",
    "Grox Media",
    "IT company",
    "SEO services",
    "social media marketing",
  ],
  authors: [{ name: "Grox Media Team" }],
  creator: "Grox Media",
  publisher: "Grox Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://groxmedia.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grox Media - Digital Excellence Redefined",
    description:
      "Expert IT solutions including web development, graphic designing, and digital marketing.",
    url: "https://groxmedia.in",
    siteName: "Grox Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grox Media - IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grox Media - Digital Excellence Redefined",
    description:
      "Expert IT solutions including web development, graphic designing, and digital marketing.",
    creator: "@groxmedia",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body
        className={`${sharpLight.variable} ${sharpHeading.variable} font-jakarta antialiased pb-24 md:pb-16`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
