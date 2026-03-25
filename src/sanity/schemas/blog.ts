import { defineField, defineType } from "sanity";

const categoryList = [
  { title: "Web Development", value: "web-development" },
  { title: "Digital Marketing", value: "digital-marketing" },
  { title: "Design", value: "design" },
  { title: "SEO", value: "seo" },
  { title: "Technology", value: "technology" },
  { title: "Business", value: "business" },
  { title: "App Development", value: "app-development" },
] as const;

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short description for blog cards (max 160 chars)",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: [...categoryList] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      initialValue: "Grox Media Team",
    }),
    defineField({
      name: "authorImage",
      title: "Author Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      initialValue: 5,
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  {
                    name: "blank",
                    title: "Open in new tab",
                    type: "boolean",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
        {
          type: "object",
          name: "codeBlock",
          title: "Code Block",
          fields: [
            {
              name: "language",
              type: "string",
              title: "Language",
              initialValue: "javascript",
              options: {
                list: [
                  { title: "JavaScript", value: "javascript" },
                  { title: "TypeScript", value: "typescript" },
                  { title: "HTML", value: "html" },
                  { title: "CSS", value: "css" },
                  { title: "Python", value: "python" },
                  { title: "Bash", value: "bash" },
                ],
              },
            },
            { name: "code", type: "text", title: "Code" },
          ],
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
      description: "Show this post prominently on the home page",
    }),
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "coverImage", date: "publishedAt" },
    prepare({ title, media, date }) {
      return {
        title: title ?? "Untitled",
        media,
        subtitle: date ? new Date(date).toLocaleDateString() : "No date",
      };
    },
  },
});
