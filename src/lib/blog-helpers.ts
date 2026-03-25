import type { BlogPost } from "@/sanity/types";

export const BLOG_CATEGORY_OPTIONS: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web-development" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "Design", value: "design" },
  { label: "SEO", value: "seo" },
  { label: "Technology", value: "technology" },
  { label: "Business", value: "business" },
  { label: "App Development", value: "app-development" },
];

const categoryLabelMap: Record<string, string> = Object.fromEntries(
  BLOG_CATEGORY_OPTIONS.filter((c) => c.value !== "all").map((c) => [c.value, c.label])
);

const categoryValueMap: Record<string, string> = Object.fromEntries(
  BLOG_CATEGORY_OPTIONS.filter((c) => c.value !== "all").map((c) => [c.label, c.value])
);

function normalizeCategoryKey(input: string): string {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/[_]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

export function categoryLabel(value: string): string {
  // Accept both stored slug values (web-development) and label values (Web Development)
  if (categoryLabelMap[value]) return categoryLabelMap[value];
  if (categoryValueMap[value]) return value;

  return value;
}

export function categoryValue(input: string): string {
  if (!input) return "all";
  if (input === "all") return "all";

  // direct match (slug or label)
  if (categoryLabelMap[input]) return input;
  if (categoryValueMap[input]) return categoryValueMap[input];

  // normalized match
  const normalized = normalizeCategoryKey(input);
  for (const { value, label } of BLOG_CATEGORY_OPTIONS) {
    if (value === "all") continue;
    if (normalizeCategoryKey(value) === normalized) return value;
    if (normalizeCategoryKey(label) === normalized) return value;
  }

  return normalized;
}

export function formatBlogDate(iso: string, long = false): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return long
    ? d.toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : d.toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

export function pickHeroPost(posts: BlogPost[]): BlogPost | null {
  if (!posts.length) return null;
  const featured = posts
    .filter((p) => p.featured)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  return featured[0] ?? posts[0];
}
