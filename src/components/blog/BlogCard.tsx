import Image from "next/image";
import Link from "next/link";
import { categoryLabel, formatBlogDate } from "@/lib/blog-helpers";
import type { BlogPost } from "@/sanity/types";

type BlogCardPost = Pick<
  BlogPost,
  "title" | "slug" | "excerpt" | "category" | "author" | "publishedAt" | "readTime"
> & { coverImage?: unknown };

type BlogCardProps = {
  post: BlogCardPost;
  imageUrl: string;
  priority?: boolean;
};

export default function BlogCard({ post, imageUrl, priority }: BlogCardProps) {
  const author = post.author ?? "Grox Media Team";
  const readTime = post.readTime ?? 5;

  return (
    <Link
      href={`/blogs/${post.slug.current}`}
      className="group block rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={post.title}
          width={640}
          height={400}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#111827] backdrop-blur-sm">
          {categoryLabel(post.category)}
        </span>
      </div>
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-[#111827] transition-colors group-hover:text-[#1e40af]">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
            {post.excerpt}
          </p>
        ) : null}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-[#1e40af]">
                {author.charAt(0)}
              </span>
              {author}
            </span>
            <span>
              {formatBlogDate(post.publishedAt)} · {readTime} min read
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
