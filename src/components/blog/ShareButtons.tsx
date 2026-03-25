"use client";

import { Link2, Linkedin, MessageCircle } from "lucide-react";
import { useCallback, useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
  layout?: "vertical" | "horizontal";
};

export default function ShareButtons({
  title,
  url,
  layout = "vertical",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [url]);

  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  const twitterHref = `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;
  const waHref = `https://api.whatsapp.com/send?text=${text}%20${encoded}`;

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-400 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#1e40af]";

  const inner = (
    <>
      <button
        type="button"
        onClick={copy}
        className={btn}
        aria-label="Copy link"
        title={copied ? "Copied!" : "Copy link"}
      >
        <Link2 className="h-4 w-4" />
      </button>
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on X"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
      </a>
    </>
  );

  if (layout === "horizontal") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {inner}
        {copied ? (
          <span className="text-xs text-[#1e40af]">Copied!</span>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {inner}
      {copied ? (
        <span className="text-xs text-[#1e40af]">Copied!</span>
      ) : null}
    </div>
  );
}
