import type { Metadata } from "next";
import Link from "next/link";
import SectionBadge from "@/components/ui/SectionBadge";
import BlogsListing from "@/components/blog/BlogsListing";
import { isSanityConfigured } from "@/sanity/config";
import { sanityClient } from "@/sanity/client";
import { allBlogsQuery } from "@/sanity/queries";
import type { BlogPost } from "@/sanity/types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Grox Media - Insights, Tips & Digital Trends",
  description:
    "Stay updated with the latest insights on web development, digital marketing, design, and technology from Grox Media.",
};

export default async function BlogsPage() {
  let posts: BlogPost[] = [];
  if (isSanityConfigured()) {
    try {
      posts = await sanityClient.fetch<BlogPost[]>(allBlogsQuery);
    } catch {
      posts = [];
    }
  }

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/25 via-indigo-400/20 to-purple-400/25 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center">
            <SectionBadge>Our Blog</SectionBadge>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-[#111827] md:text-5xl lg:text-6xl">
            Insights, Tips &amp; Digital Trends
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Stay updated with the latest in web development, digital marketing,
            design, and technology.
          </p>
        </div>
      </section>

      {!isSanityConfigured() ? (
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <p className="text-gray-600">
            Blog is almost ready. Add{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">
              NEXT_PUBLIC_SANITY_PROJECT_ID
            </code>{" "}
            and related keys to{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">
              .env.local
            </code>{" "}
            to load posts from Sanity.
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <p className="text-gray-600">
            No posts yet. Create your first article in{" "}
            <Link href="/studio" className="font-semibold text-[#1e40af] hover:underline">
              Sanity Studio
            </Link>
            .
          </p>
        </div>
      ) : (
        <BlogsListing posts={posts} />
      )}
    </main>
  );
}
