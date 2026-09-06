import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import Script from "next/script";
import PwaRegister from "@/components/PwaRegister";

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
  verification: {
    google: "kl3KrAuftEaXlH475jPnakvVDqu5tiZwG7tK7X98eqw",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
};

export const viewport = {
  themeColor: "#f97316",
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

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Grox Media" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18372249208"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18372249208');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWN39MTJ');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${sharpLight.variable} ${sharpHeading.variable} font-jakarta antialiased pb-24 md:pb-16 overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWN39MTJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <PwaRegister />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
