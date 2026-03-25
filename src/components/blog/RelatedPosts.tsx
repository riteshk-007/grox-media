import { urlFor } from "@/sanity/image";
import type { BlogPost } from "@/sanity/types";
import BlogCard from "./BlogCard";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-2xl font-bold text-[#111827]">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) =>
          post.coverImage ? (
            <BlogCard
              key={post._id}
              post={post}
              imageUrl={urlFor(post.coverImage).width(640).height(400).url()}
            />
          ) : null
        )}
      </div>
    </section>
  );
}
