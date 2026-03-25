import Image from "next/image";
import { urlFor } from "@/sanity/image";

type AuthorBioProps = {
  author?: string;
  authorImage?: unknown;
};

export default function AuthorBio({ author, authorImage }: AuthorBioProps) {
  const name = author ?? "Grox Media Team";
  const hasImage = Boolean(authorImage);

  return (
    <div className="mt-12 flex flex-col items-start gap-6 rounded-2xl border border-gray-100 bg-gray-50 p-8 sm:flex-row sm:items-center">
      {hasImage ? (
        <Image
          src={urlFor(authorImage!).width(128).height(128).url()}
          alt={name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-[#1e40af]">
          {name.charAt(0)}
        </div>
      )}
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-400">
          Written by
        </p>
        <p className="text-lg font-bold text-[#111827]">{name}</p>
        <p className="mt-1 text-sm text-gray-500">
          The Grox Media team shares insights on web development, digital
          marketing, and technology.
        </p>
      </div>
    </div>
  );
}
