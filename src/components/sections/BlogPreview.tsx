import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import BlogCard from "@/components/blog/BlogCard";
import { isSanityConfigured } from "@/sanity/config";
import { sanityClient } from "@/sanity/client";
import { featuredBlogsQuery, latestBlogsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import type { BlogPost } from "@/sanity/types";

async function fetchPreviewPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured()) return [];
  try {
    const featured = await sanityClient.fetch<BlogPost[]>(featuredBlogsQuery);
    if (featured?.length) return featured.slice(0, 3);
    const latest = await sanityClient.fetch<BlogPost[]>(latestBlogsQuery);
    return (latest ?? []).slice(0, 3);
  } catch {
    return [];
  }
}

function BlogEmptyState() {
  return (
    <section className="py-10 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionBadge>From Our Blog</SectionBadge>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[#111827] md:text-4xl">
            Latest Insights &amp; Articles
          </h2>
          <p className="mt-3 text-[#6b7280]">
            Industry insights and digital strategy tips — coming soon.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50">
            <BookOpen className="h-8 w-8 text-gray-300" />
          </div>
          <p className="text-sm text-[#6b7280]">No posts published yet.</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#002D91] px-8 py-3.5 font-semibold text-[#002D91] transition-all hover:bg-[#002D91] hover:text-white"
          >
            Visit Blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function BlogPreview() {
  const posts = await fetchPreviewPosts();
  const withImages = posts.filter(
    (p): p is BlogPost & { coverImage: NonNullable<BlogPost["coverImage"]> } =>
      Boolean(p.coverImage)
  );

  if (!withImages.length) return <BlogEmptyState />;

  return (
    <section className="py-10 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionBadge>From Our Blog</SectionBadge>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[#111827] md:text-4xl">
            Latest Insights &amp; Articles
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {withImages.map((post, i) => (
            <div key={post._id}>
              <BlogCard
                post={post}
                imageUrl={urlFor(post.coverImage).width(800).height(500).url()}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#002D91] px-8 py-3.5 font-semibold text-[#002D91] transition-all hover:bg-[#002D91] hover:text-white"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
