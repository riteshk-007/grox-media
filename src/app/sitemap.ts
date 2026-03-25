import type { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { isSanityConfigured } from "@/sanity/config";
import { sanityClient } from "@/sanity/client";

const blogSlugsForSitemap = groq`*[_type == "blog" && defined(slug.current)]{ "slug": slug.current, publishedAt }`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://groxmedia.in";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  let blogUrls: MetadataRoute.Sitemap = [];
  if (isSanityConfigured()) {
    try {
      const blogs = await sanityClient.fetch<
        { slug: string; publishedAt: string }[]
      >(blogSlugsForSitemap);
      blogUrls = (blogs ?? []).map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: post.publishedAt
          ? new Date(post.publishedAt)
          : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    } catch (e) {
      console.error("Sitemap blog fetch error:", e);
    }
  }

  return [...staticPages, ...blogUrls];
}
