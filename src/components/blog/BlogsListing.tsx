"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { BLOG_CATEGORY_OPTIONS, categoryValue, pickHeroPost } from "@/lib/blog-helpers";
import type { BlogPost } from "@/sanity/types";
import { urlFor } from "@/sanity/image";
import BlogCard from "./BlogCard";
import BlogHeroCard from "./BlogHeroCard";
import { cn } from "@/lib/utils";

type BlogsListingProps = {
  posts: BlogPost[];
};

export default function BlogsListing({ posts }: BlogsListingProps) {
  const [active, setActive] = useState("all");

  const heroPost = useMemo(() => pickHeroPost(posts), [posts]);

  const gridPosts = useMemo(() => {
    if (!heroPost) return posts;
    return posts.filter((p) => p._id !== heroPost._id);
  }, [posts, heroPost]);

  const filtered = useMemo(() => {
    if (active === "all") return gridPosts;
    // Sanity might store category as either "web-development" (value) or "Web Development" (label)
    // Normalize it so filtering always works.
    return gridPosts.filter((p) => categoryValue(p.category) === active);
  }, [gridPosts, active]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {heroPost && heroPost.coverImage ? (
        <div className="mx-auto max-w-6xl px-6 py-12">
          <BlogHeroCard
            post={heroPost}
            imageUrl={urlFor(heroPost.coverImage).width(1200).height(800).url()}
          />
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold text-gray-700">Filter by category</p>
        </div>
        <div className="hide-scrollbar flex justify-center gap-3 overflow-x-auto pb-1">
          {BLOG_CATEGORY_OPTIONS.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActive(cat.value)}
              aria-pressed={active === cat.value}
              className={cn(
                "whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                active === cat.value
                  ? "bg-[#1e40af] text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            No posts found in this category.
          </p>
        ) : (
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((post) =>
              post.coverImage ? (
                <motion.div key={post._id} variants={item}>
                  <BlogCard
                    post={post}
                    imageUrl={urlFor(post.coverImage).width(800).height(500).url()}
                  />
                </motion.div>
              ) : null
            )}
          </motion.div>
        )}
      </div>


    </>
  );
}
