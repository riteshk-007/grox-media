import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/blog/ArticleContent";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ShareButtons from "@/components/blog/ShareButtons";
import { categoryLabel, formatBlogDate } from "@/lib/blog-helpers";
import { isSanityConfigured } from "@/sanity/config";
import { sanityClient } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import {
  blogBySlugQuery,
  blogSlugsQuery,
  latestPostsExcludingQuery,
} from "@/sanity/queries";
import type { BlogPost } from "@/sanity/types";

export const revalidate = 60;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://groxmedia.in";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];
  try {
    const rows = await sanityClient.fetch<{ slug: string }[]>(blogSlugsQuery);
    return (rows ?? []).map((r) => ({ slug: r.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isSanityConfigured()) {
    return { title: "Blog | Grox Media" };
  }
  try {
    const post = await sanityClient.fetch<BlogPost | null>(blogBySlugQuery, {
      slug: params.slug,
    });
    if (!post) return { title: "Post | Grox Media Blog" };
    const ogUrl = post.coverImage
      ? String(urlFor(post.coverImage).width(1200).height(630).url())
      : "";
    return {
      title: `${post.title} | Grox Media Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt ?? undefined,
        images: ogUrl
          ? [{ url: ogUrl, width: 1200, height: 630 }]
          : [],
      },
    };
  } catch {
    return { title: "Blog | Grox Media" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  if (!isSanityConfigured()) notFound();

  const post = await sanityClient.fetch<BlogPost | null>(blogBySlugQuery, {
    slug: params.slug,
  });

  if (!post || !post.coverImage) notFound();

  let related = post.relatedPosts ?? [];
  if (related.length < 3) {
    try {
      const fallback = await sanityClient.fetch<BlogPost[]>(
        latestPostsExcludingQuery,
        { slug: params.slug }
      );
      const ids = new Set(related.map((p) => p._id));
      for (const p of fallback ?? []) {
        if (related.length >= 3) break;
        if (!ids.has(p._id)) {
          related.push(p);
          ids.add(p._id);
        }
      }
    } catch {
      /* keep related as-is */
    }
  }
  related = related.slice(0, 3);

  const pageUrl = `${siteUrl}/blogs/${params.slug}`;
  const coverUrl = urlFor(post.coverImage).width(1400).height(600).url();
  const author = post.author ?? "Grox Media Team";
  const readTime = post.readTime ?? 5;

  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-4">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#1e40af]"
        >
          ← Back to Blog
        </Link>
        <p className="mt-3 text-xs text-gray-400">
          Blog · {categoryLabel(post.category)}
        </p>
      </div>

      <header className="mx-auto max-w-4xl px-6 py-8 text-center">
        <span className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1e40af]">
          {categoryLabel(post.category)}
        </span>
        <h1 className="text-3xl font-extrabold leading-tight text-[#111827] md:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
          <span className="flex items-center gap-2 font-medium text-gray-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-[#1e40af]">
              {author.charAt(0)}
            </span>
            {author}
          </span>
          <span>·</span>
          <time dateTime={post.publishedAt}>
            {formatBlogDate(post.publishedAt, true)}
          </time>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="overflow-hidden rounded-3xl shadow-sm">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src={coverUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
        <div className="mt-6 lg:hidden">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Share
          </p>
          <ShareButtons title={post.title} url={pageUrl} layout="horizontal" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="hidden lg:col-span-2 lg:block">
            <div className="sticky top-32 self-start">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Share
              </p>
              <ShareButtons title={post.title} url={pageUrl} layout="vertical" />
            </div>
          </aside>
          <div className="lg:col-span-10">
            <ArticleContent value={post.body} />
            {post.tags?.length ? (
              <div className="mt-8 flex flex-wrap gap-2 border-t border-gray-100 pt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs text-gray-600 transition-colors hover:bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            <AuthorBio
              author={post.author}
              authorImage={post.authorImage}
            />
            <RelatedPosts posts={related} />
          </div>
        </div>
      </div>
    </main>
  );
}
