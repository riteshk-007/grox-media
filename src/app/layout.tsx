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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://groxmedia.in";

export const metadata: Metadata = {
  title: {
    default: "Grox Media - Digital Excellence Redefined",
    template: "%s | Grox Media",
  },
  description:
    "Grox Media LLP is a full-service IT company based in Delhi NCR, India. We deliver custom web development, mobile apps, SEO, branding, and digital marketing for businesses across India.",
  authors: [{ name: "Grox Media Team" }],
  creator: "Grox Media",
  publisher: "Grox Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grox Media - Digital Excellence Redefined",
    description:
      "Expert IT solutions including web development, graphic designing, and digital marketing.",
    url: siteUrl,
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
  verification: {
    google: "kl3KrAuftEaXlH475jPnakvVDqu5tiZwG7tK7X98eqw",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
};

export const viewport = {
  themeColor: "#FE6A00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${sharpLight.variable} ${sharpHeading.variable} font-jakarta antialiased pb-24 md:pb-16 overflow-x-hidden`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
