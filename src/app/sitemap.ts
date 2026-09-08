import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://groxmedia.in";

  // Stable content-revision date. Bump this when page content is meaningfully
  // updated — using `new Date()` here would make every URL claim it changed on
  // every build, which devalues the signal for crawlers.
  const lastModified = new Date("2026-09-08");

  // Noida is the registered office, so its city pages carry the strongest
  // local signal; the remaining cities are served from there.
  const cityPriority: Record<string, number> = {
    noida: 0.85,
    delhi: 0.8,
    gurgaon: 0.8,
    mumbai: 0.75,
    pune: 0.75,
  };

  const cities = ["gurgaon", "noida", "delhi", "pune", "mumbai"];

  const developmentPages = cities.map((city) => ({
    url: `${baseUrl}/website-development-company-in-${city}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: cityPriority[city],
  }));

  const designingPages = cities.map((city) => ({
    url: `${baseUrl}/website-designing-company-in-${city}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: cityPriority[city],
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/custom-web-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...developmentPages,
    ...designingPages,
  ];

  return staticPages;
}
