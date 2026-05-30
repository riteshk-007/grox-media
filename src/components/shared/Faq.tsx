"use client";

import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import AccordionItem from "@/components/ui/AccordionItem";

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

type FaqProps = {
  limit?: number;
};

export const FAQ_ITEMS: FaqItem[] = [
  // ── Website Development ──
  {
    category: "Website Development",
    question: "What technologies do you use to build websites?",
    answer:
      "We build with Next.js, React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB. For simpler projects we also do WordPress with Elementor Pro. Every stack choice is driven by what fits your project — not what's trending.",
  },
  {
    category: "Website Development",
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes 3–4 weeks. An ecommerce store or platform with admin panel takes 5–8 weeks. We share a detailed timeline during the scoping call before any work begins.",
  },
  {
    category: "Website Development",
    question: "Will my website work well on mobile?",
    answer:
      "Yes — every site we build is mobile-first. We test across iOS, Android, and multiple screen sizes before delivery. Core Web Vitals and Lighthouse scores are part of our handoff checklist.",
  },
  {
    category: "Website Development",
    question: "Can you redesign my existing website without losing SEO rankings?",
    answer:
      "Yes. We audit your current URLs, redirects, and metadata before redesigning. All existing rankings are preserved through a proper 301 redirect map and on-page SEO migration.",
  },
  {
    category: "Website Development",
    question: "Do you build ecommerce stores?",
    answer:
      "Yes — we've built ecommerce stores on Next.js with custom backends and on WooCommerce for WordPress. We handle product pages, cart, checkout, payment gateways (Razorpay, Stripe), and order management.",
  },
  {
    category: "Website Development",
    question: "What happens after the website goes live?",
    answer:
      "We provide a 30-day post-launch support window for bug fixes. After that, we offer monthly maintenance packages covering updates, backups, uptime monitoring, and security patches.",
  },

  // ── SEO ──
  {
    category: "SEO",
    question: "What does your SEO service include?",
    answer:
      "Technical SEO audit, on-page optimization (titles, meta, headings, schema markup), content strategy, internal linking, backlink analysis, and monthly ranking reports. We cover everything from crawlability to Core Web Vitals.",
  },
  {
    category: "SEO",
    question: "How long before I see results from SEO?",
    answer:
      "Typically 3–6 months for noticeable ranking improvements, depending on your niche competitiveness and domain age. We set realistic expectations upfront — SEO is a compounding investment, not a quick fix.",
  },
  {
    category: "SEO",
    question: "Do you do local SEO for Indian businesses?",
    answer:
      "Yes. Google Business Profile optimization, local citations, city-specific landing pages, and NAP consistency across directories. We've helped Indian businesses rank in map packs and local search results.",
  },
  {
    category: "SEO",
    question: "Will you help with content writing for SEO?",
    answer:
      "Yes. Our team writes keyword-researched blog posts, service pages, and landing pages built around search intent. We use tools like Ahrefs and SEMrush to identify the right topics and track performance.",
  },
  {
    category: "SEO",
    question: "Do you manage Google Ads and Meta Ads too?",
    answer:
      "Yes. We run performance marketing campaigns on Google Search, Google Display, Instagram, and Facebook. Campaign structure, creatives, A/B testing, and weekly reporting are all included.",
  },

  // ── Graphic Design ──
  {
    category: "Graphic Design",
    question: "What graphic design services do you offer?",
    answer:
      "Logo design, brand identity kits, packaging design (boxes, labels, jars), print design (brochures, flyers, business cards, pitch decks), and social media creatives (posts, stories, reels covers, ad banners).",
  },
  {
    category: "Graphic Design",
    question: "How does the logo design process work?",
    answer:
      "We start with a brand discovery questionnaire, then deliver 3 initial logo concepts. After your feedback, we refine the chosen direction through 2 revision rounds. Final delivery includes SVG, PNG, PDF in all colour variants (colour, black, white).",
  },
  {
    category: "Graphic Design",
    question: "What file formats do I get for my logo and brand assets?",
    answer:
      "All vector source files (AI, EPS, SVG) plus export-ready PNG/PDF versions. For packaging, we also provide print-ready CMYK files with bleed and crop marks.",
  },
  {
    category: "Graphic Design",
    question: "Can you design product packaging for my food/FMCG brand?",
    answer:
      "Yes — we've designed packaging for ghee, makhana snacks, and other FMCG products. We handle dieline setup, label artwork, regulatory text placement, and print-ready file preparation.",
  },
  {
    category: "Graphic Design",
    question: "Do you create social media creatives on a monthly retainer?",
    answer:
      "Yes. We offer monthly social media creative packages — static posts, carousel designs, story templates, and reel cover art — sized and formatted for Instagram, Facebook, and LinkedIn.",
  },
  {
    category: "Graphic Design",
    question: "How many revisions are included in design projects?",
    answer:
      "2 rounds of revisions are included in all design packages. Additional revision rounds can be added. We encourage detailed briefs upfront so revisions stay focused.",
  },

  // ── Video Editing ──
  {
    category: "Video Editing",
    question: "What types of videos do you edit?",
    answer:
      "Brand films, product reels, explainer videos, YouTube long-form content, Instagram Reels, Facebook Ads, travel videos, and promotional promos. We handle footage from any camera or phone.",
  },
  {
    category: "Video Editing",
    question: "What aspect ratios and formats do you deliver?",
    answer:
      "We deliver in the correct format per platform: 9:16 for Instagram Reels and Stories, 16:9 for YouTube, 1:1 for Facebook feed posts. All exports are high resolution — typically 1080p or 4K as required.",
  },
  {
    category: "Video Editing",
    question: "Do you add subtitles, captions, and motion graphics?",
    answer:
      "Yes. Subtitles, animated captions, lower thirds, logo animations, transitions, and basic motion graphics are all part of our editing service. We can also add background music with licensed tracks.",
  },
  {
    category: "Video Editing",
    question: "How do I share raw footage with you?",
    answer:
      "Via Google Drive, WeTransfer, or any cloud link. We work with MP4, MOV, and most raw formats. Once footage is received, we share a first cut within the agreed timeline.",
  },
  {
    category: "Video Editing",
    question: "How many revision rounds are included for video edits?",
    answer:
      "2 revision rounds are included per video. Each revision covers timing, music changes, cut adjustments, and text corrections. Major reshoots or completely new direction requests are quoted separately.",
  },

  // ── General / Process ──
  {
    category: "General",
    question: "How do I start a project with Grox Media?",
    answer:
      "Fill out the contact form or call us directly. We schedule a free discovery call to understand your requirements, then share a proposal with scope, timeline, and pricing within 48 hours.",
  },
  {
    category: "General",
    question: "What industries do you work with?",
    answer:
      "Ecommerce, EdTech, healthcare, finance, travel, interior design, food and FMCG, real estate, and professional services. We've worked with Indian, Australian, and international clients.",
  },
  {
    category: "General",
    question: "How much does a project cost?",
    answer:
      "Pricing depends on scope and complexity. A basic business website starts around ₹25,000. An ecommerce platform or SaaS product starts higher. We always share a detailed quote before any work begins — no surprises.",
  },
  {
    category: "General",
    question: "Do you sign an NDA?",
    answer:
      "Yes. We sign NDAs on request before any project discussion. Client confidentiality and IP ownership is taken seriously — all deliverables belong to you upon final payment.",
  },
];

const CATEGORIES = ["All", "Website Development", "SEO", "Graphic Design", "Video Editing", "General"] as const;

const Faq: React.FC<FaqProps> = ({ limit }) => {
  const [showAll] = useState(false);
  const router = useRouter();

  const faqs = useMemo(() => FAQ_ITEMS, []);

  const hasLimit = typeof limit === "number" && limit > 0;
  const initialCount = hasLimit ? Math.min(limit!, faqs.length) : faqs.length;

  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialCount);

  const shouldShowButton = hasLimit && limit! < faqs.length && !showAll;

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12">
      <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-[#111827]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-0">
        {visibleFaqs.map((f, idx) => (
          <AccordionItem
            key={f.question}
            question={f.question}
            answer={f.answer}
            accent={idx % 2 === 0 ? "blue" : "orange"}
          />
        ))}
      </div>

      {shouldShowButton ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => router.push("/faqs")}
            className="inline-block rounded-full bg-groxBlue px-8 py-4 text-lg sm:text-base font-medium text-white transition hover:bg-blue-800"
            aria-label="View all FAQs"
          >
            View all FAQs
          </button>
        </div>
      ) : null}
    </section>
  );
};

export { CATEGORIES };
export default Faq;
