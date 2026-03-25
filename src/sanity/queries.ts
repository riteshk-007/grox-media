import { groq } from "next-sanity";

export const allBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    category,
    author,
    authorImage,
    publishedAt,
    readTime,
    tags,
    featured
  }
`;

export const latestBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    category,
    author,
    publishedAt,
    readTime
  }
`;

export const featuredBlogsQuery = groq`
  *[_type == "blog" && featured == true] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    category,
    author,
    publishedAt,
    readTime
  }
`;

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    category,
    author,
    authorImage,
    publishedAt,
    readTime,
    body,
    tags,
    "relatedPosts": *[_type == "blog" && slug.current != $slug && category == ^.category] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      publishedAt,
      readTime,
      author
    }
  }
`;

export const blogSlugsQuery = groq`*[_type == "blog" && defined(slug.current)]{ "slug": slug.current }`;

export const latestPostsExcludingQuery = groq`
  *[_type == "blog" && slug.current != $slug] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    category,
    publishedAt,
    readTime,
    author
  }
`;
