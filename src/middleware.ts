import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/|favicon.ico|icon-.*\\.png|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|map)$).*)",
  ],
};

export function middleware(request: NextRequest) {
  // Canonical host is the bare domain; serving www too splits ranking signals
  // across two duplicate sites.
  const host = request.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  const accept = request.headers.get("accept") || "";
  const wantsMarkdown = accept.includes("text/markdown") && !accept.includes("text/html");

  if (wantsMarkdown) {
    const url = request.nextUrl.clone();
    const originalPath = url.pathname + url.search;
    url.pathname = "/api/markdown";
    url.search = `?path=${encodeURIComponent(originalPath)}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
