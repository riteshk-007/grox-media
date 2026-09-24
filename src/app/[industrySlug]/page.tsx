import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industryPages, getIndustryPage } from "@/data/industryPages";
import IndustryPageContent from "./IndustryPageContent";

// Only the generated industry × location slugs exist; everything else 404s.
export const dynamicParams = false;

type Props = { params: { industrySlug: string } };

export function generateStaticParams() {
  return industryPages.map((p) => ({ industrySlug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getIndustryPage(params.industrySlug);
  if (!page) return { title: "Page Not Found" };

  const path = `/${page.slug}`;
  return {
    // Long titles drop the " | Grox Media" suffix so they are not truncated in results.
    title: page.metaTitle.length > 46 ? { absolute: page.metaTitle } : page.metaTitle,
    description: page.metaDescription,
    keywords: [
      `${page.industry.name.toLowerCase()} website designing company in ${page.location.name.toLowerCase()}`,
      `${page.industry.name.toLowerCase()} website design ${page.location.name.toLowerCase()}`,
      `${page.industry.name.toLowerCase()} website development ${page.location.name.toLowerCase()}`,
      `${page.industry.name.toLowerCase()} website ${page.location.name.toLowerCase()}`,
      `website for ${page.industry.name.toLowerCase()} in ${page.location.name.toLowerCase()}`,
      ...(page.location.key === "gurgaon"
        ? [`${page.industry.name.toLowerCase()} website design gurugram`]
        : [`${page.industry.name.toLowerCase()} website design delhi`]),
    ],
    alternates: { canonical: path },
    openGraph: {
      title: `${page.metaTitle} | Grox Media`,
      description: page.metaDescription,
      url: path,
      siteName: "Grox Media",
      locale: "en_IN",
      type: "website",
      images: [{ url: `/industries/${page.slug}.webp`, width: 1280, height: 800, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | Grox Media`,
      description: page.metaDescription,
      images: [`/industries/${page.slug}.webp`],
    },
  };
}

export default function IndustryPage({ params }: Props) {
  const page = getIndustryPage(params.industrySlug);
  if (!page) notFound();

  const url = `https://groxmedia.in/${page.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      serviceType: `${page.industry.name} Website Design`,
      image: `https://groxmedia.in/industries/${page.slug}.webp`,
      description: page.metaDescription,
      url,
      provider: {
        "@type": "ProfessionalService",
        name: "Grox Media LLP",
        url: "https://groxmedia.in",
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
      },
      areaServed: {
        "@type": "City",
        name: page.location.fullName,
        containedInPlace: { "@type": "State", name: page.location.region },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://groxmedia.in" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://groxmedia.in/services" },
        { "@type": "ListItem", position: 3, name: page.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryPageContent slug={page.slug} />
    </>
  );
}
