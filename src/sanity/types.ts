export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: unknown;
  category: string;
  author?: string;
  authorImage?: unknown;
  publishedAt: string;
  readTime?: number;
  body?: unknown[];
  tags?: string[];
  featured?: boolean;
  relatedPosts?: BlogPost[];
}
