import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"


const satoshiRegular = localFont({
  src: "./fonts/Satoshi-Regular.otf",
  variable: "--font-satoshi-regular",
  weight: "400",
});

const satoshiMedium = localFont({
  src: "./fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi-medium",
  weight: "500",
});

const satoshiBold = localFont({
  src: "./fonts/Satoshi-Bold.otf",
  variable: "--font-satoshi-bold",
  weight: "700",
});

const satoshiBlack = localFont({
  src: "./fonts/Satoshi-Black.otf",
  variable: "--font-satoshi-black",
  weight: "900",
});

export const metadata: Metadata = {
  title: {
    default: "GroxMedia - Digital Excellence Redefined",
    template: "%s | GroxMedia"
  },
  description: "GroxMedia provides top-quality IT services. Expert web development, graphic designing, digital marketing, and complete IT solutions for businesses.",
  keywords: [
    "IT services",
    "web development",
    "graphic designing",
    "digital marketing",
    "GroxMedia",
    "IT company",
    "SEO services",
    "social media marketing"
  ],
  authors: [{ name: "GroxMedia Team" }],
  creator: "GroxMedia",
  publisher: "GroxMedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://groxmedia.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GroxMedia - Digital Excellence Redefined",
    description: "Expert IT solutions including web development, graphic designing, and digital marketing.",
    url: 'https://groxmedia.in',
    siteName: 'GroxMedia',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GroxMedia - IT Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GroxMedia - Digital Excellence Redefined",
    description: "Expert IT solutions including web development, graphic designing, and digital marketing.",
    creator: '@groxmedia',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body
        className={`${satoshiRegular.variable} ${satoshiMedium.variable} ${satoshiBold.variable} ${satoshiBlack.variable} font-satoshi-regular antialiased`}
      >

        <Navbar />
        {children}
        <FloatingContactButton />
        <Toaster />
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}


