import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Grox Media",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-groxOrange">404</p>
      <h1 className="mt-4 text-3xl font-extrabold text-[#111827] md:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-[#6b7280]">
        The page you requested doesn&apos;t exist on Grox Media. Here&apos;s where to look
        next:
      </p>
      <ul className="mt-8 space-y-2 text-left text-[#111827]">
        <li>
          <Link href="/" className="text-groxBlue underline hover:no-underline">
            Homepage
          </Link>
        </li>
        <li>
          <Link href="/sitemap" className="text-groxBlue underline hover:no-underline">
            Sitemap
          </Link>{" "}
          (
          <a href="/sitemap.xml" className="text-groxBlue underline hover:no-underline">
            sitemap.xml
          </a>
          )
        </li>
        <li>
          <a href="/llms.txt" className="text-groxBlue underline hover:no-underline">
            llms.txt
          </a>{" "}
          &mdash; agent instructions and site index
        </li>
        <li>
          <Link href="/services" className="text-groxBlue underline hover:no-underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-groxBlue underline hover:no-underline">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-groxBlue underline hover:no-underline">
            Contact
          </Link>
        </li>
      </ul>
    </main>
  );
}
