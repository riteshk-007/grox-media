import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryLabel, formatBlogDate } from "@/lib/blog-helpers";
import type { BlogPost } from "@/sanity/types";

type HeroPost = Pick<
  BlogPost,
  "title" | "slug" | "excerpt" | "category" | "author" | "publishedAt" | "readTime"
> & { coverImage?: unknown };

type BlogHeroCardProps = {
  post: HeroPost;
  imageUrl: string;
};

export default function BlogHeroCard({ post, imageUrl }: BlogHeroCardProps) {
  const author = post.author ?? "Grox Media Team";
  const readTime = post.readTime ?? 5;

  return (
    <Link
      href={`/blogs/${post.slug.current}`}
      className="group grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md lg:grid-cols-2"
    >
      <div className="relative min-h-[220px] lg:min-h-0">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:rounded-l-3xl"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-10">
        <span className="mb-4 inline-flex w-fit rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1e40af]">
          {categoryLabel(post.category)}
        </span>
        <h2 className="mb-4 text-2xl font-bold leading-tight text-[#111827] transition-colors group-hover:text-[#1e40af] md:text-3xl">
          {post.title}
        </h2>
        {post.excerpt ? (
          <p className="mb-6 line-clamp-3 leading-relaxed text-gray-500">
            {post.excerpt}
          </p>
        ) : null}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <span className="font-medium text-gray-600">{author}</span>
          <span>·</span>
          <span>{formatBlogDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>
        <span className="inline-flex items-center gap-2 font-semibold text-[#1e40af] transition-all group-hover:gap-3">
          Read more
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
