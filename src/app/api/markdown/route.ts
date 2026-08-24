import { NextRequest, NextResponse } from "next/server";
import { NodeHtmlMarkdown } from "node-html-markdown";

export const dynamic = "force-dynamic";

const nhm = new NodeHtmlMarkdown({}, undefined, undefined);

function extractMain(html: string): string | null {
  const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return match ? match[1] : null;
}

function extractTitle(html: string): string {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s*\|\s*Grox Media\s*$/i, "").trim() : "Grox Media";
}

function extractDescription(html: string): string {
  const match = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?>/i);
  return match ? match[1].trim() : "";
}

export async function GET(request: NextRequest) {
  const targetPath = request.nextUrl.searchParams.get("path") || "/";
  const host = request.headers.get("host") || request.nextUrl.host;
  const protocol = request.headers.get("x-forwarded-proto") || request.nextUrl.protocol.replace(":", "");
  const origin = `${protocol}://${host}`;

  let upstream: Response;
  try {
    upstream = await fetch(`${origin}${targetPath}`, {
      headers: { Accept: "text/html" },
      cache: "no-store",
    });
  } catch {
    return new NextResponse("# Error\n\nUnable to fetch page content.", {
      status: 502,
      headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept, Accept-Encoding" },
    });
  }

  if (upstream.status === 404) {
    const body = [
      "# 404 Not Found",
      "",
      `The path \`${targetPath}\` does not exist on Grox Media.`,
      "",
      "## Where to look next",
      "",
      "- [Sitemap](https://groxmedia.in/sitemap.xml)",
      "- [Agent instructions (llms.txt)](https://groxmedia.in/llms.txt)",
      "- [Homepage](https://groxmedia.in/)",
      "- [Services](https://groxmedia.in/services)",
      "- [Portfolio](https://groxmedia.in/portfolio)",
      "- [Contact](https://groxmedia.in/contact)",
      "",
    ].join("\n");

    return new NextResponse(body, {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept, Accept-Encoding" },
    });
  }

  const html = await upstream.text();
  const title = extractTitle(html);
  const description = extractDescription(html);
  const mainHtml = extractMain(html);

  const bodyMarkdown = mainHtml
    ? nhm.translate(mainHtml)
    : "Content unavailable in markdown form for this page.";

  const parts = [`# ${title}`];
  if (description) parts.push("", description);
  parts.push("", bodyMarkdown.trim(), "");

  return new NextResponse(parts.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
    },
  });
}
