import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/|favicon.ico|manifest.json|sw.js|workbox-.*\\.js|icon-.*\\.png|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|map)$).*)",
  ],
};

export function middleware(request: NextRequest) {
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
