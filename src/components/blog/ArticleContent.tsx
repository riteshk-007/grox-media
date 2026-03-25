import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(1200).url();
      return (
        <figure className="my-8">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={value.alt ?? ""}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
            />
          </div>
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    codeBlock: ({ value }) => (
      <div className="my-8 overflow-hidden rounded-xl bg-gray-900 text-gray-100">
        <div className="flex justify-end border-b border-gray-700 px-4 py-2 text-xs uppercase text-gray-400">
          {value?.language ?? "code"}
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
          <code>{value?.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 text-2xl font-bold text-[#111827] md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-10 text-xl font-bold text-[#111827] md:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-8 text-lg font-bold text-[#111827]">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-base leading-relaxed text-gray-600 md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-[#1e40af] bg-blue-50/50 py-4 pl-6 pr-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-600">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-600">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const blank = value?.blank !== false;
      return (
        <a
          href={href}
          className="text-[#1e40af] underline decoration-blue-200 underline-offset-2 hover:no-underline"
          target={blank ? "_blank" : undefined}
          rel={blank ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-[#111827]">
        {children}
      </code>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-[#111827]">{children}</strong>
    ),
  },
};

type ArticleContentProps = {
  value: unknown;
};

export default function ArticleContent({ value }: ArticleContentProps) {
  if (!value || !Array.isArray(value)) return null;
  return (
    <div className="prose-blog max-w-none">
      <PortableText value={value as never} components={components} />
    </div>
  );
}
