import type { LucideIcon } from "lucide-react";
import {
  Code,
  Smartphone,
  Search,
  Palette,
  Users,
  Share2,
  Video,
  Megaphone,
  Headphones,
  ShoppingCart,
  Store,
  Gem,
} from "lucide-react";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  navLabel: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  videoSrc: string;
  Icon: LucideIcon;
  intro: string;
  whatWeDo: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: ServiceFaq[];
};

export const services: ServiceDetail[] = [
  {
    slug: "website-development",
    navLabel: "Website Development",
    title: "Website Development",
    shortDescription:
      "Custom websites built with modern technologies for speed, performance, and SEO-ready structure.",
    metaDescription:
      "Custom website development by Grox Media — built with Next.js, React, and WordPress. Business sites, ecommerce stores, and web platforms with admin panels. Get a free quote.",
    keywords: [
      "website development company",
      "custom website development",
      "business website development India",
      "ecommerce website development",
    ],
    heroImage: "/services/website-development.webp",
    heroImageAlt: "Developer working on website code on a computer screen",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/website.mp4",
    Icon: Code,
    intro:
      "We build websites with Next.js, React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB. For simpler projects we also build on WordPress with Elementor Pro — the stack is chosen to fit your project, not to follow a trend. A standard business website takes 3–4 weeks; an ecommerce store or a platform with an admin panel takes 5–8 weeks, with a detailed timeline shared before any work begins.",
    whatWeDo: [
      {
        title: "Business & marketing websites",
        description:
          "Fast, mobile-first websites that represent your brand clearly and are structured for search from day one.",
      },
      {
        title: "Ecommerce stores",
        description:
          "Product catalogues, cart, checkout, and payment integration built to handle real order volume.",
      },
      {
        title: "Web platforms with admin panels",
        description:
          "Custom dashboards for managing content, bookings, users, or orders — built around how your team actually works.",
      },
      {
        title: "Website redesigns",
        description:
          "Rebuilding an existing site without losing the SEO rankings and traffic it has already earned.",
      },
    ],
    process: [
      { title: "Discovery call", description: "We understand your goals, audience, and must-have features." },
      { title: "Scope & timeline", description: "A detailed proposal with pages, features, and delivery dates." },
      { title: "Design & build", description: "Wireframes, visual design, then development in staged milestones." },
      { title: "Testing", description: "Cross-device and cross-browser QA, plus Core Web Vitals checks." },
      { title: "Launch & handover", description: "Deployment, walkthrough, and documentation for your team." },
    ],
    faqs: [
      {
        question: "What technologies do you use to build websites?",
        answer:
          "We build with Next.js, React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB. For simpler projects we also do WordPress with Elementor Pro. Every stack choice is driven by what fits your project — not what's trending.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard business website takes 3–4 weeks. An ecommerce store or platform with admin panel takes 5–8 weeks. We share a detailed timeline during the scoping call before any work begins.",
      },
      {
        question: "Will my website work well on mobile?",
        answer:
          "Yes — every site we build is mobile-first. We test across iOS, Android, and multiple screen sizes before delivery. Core Web Vitals and Lighthouse scores are part of our handoff checklist.",
      },
      {
        question: "Can you redesign my existing website without losing SEO rankings?",
        answer:
          "Yes. We map your existing URLs, redirects, and ranking pages before touching anything, then carry that structure into the new build so rankings and traffic are preserved.",
      },
      {
        question: "How much does a website cost?",
        answer:
          "Pricing depends on scope and complexity. A basic business website starts around ₹25,000. An ecommerce platform starts higher. We always share a detailed quote before any work begins — no surprises.",
      },
    ],
  },
  {
    slug: "app-development",
    navLabel: "App Development",
    title: "Android/iOS App Development",
    shortDescription:
      "Native and cross-platform mobile applications for iOS and Android with smooth user experiences.",
    metaDescription:
      "Android and iOS app development by Grox Media — native and cross-platform mobile apps built for smooth performance and real business use cases. Get a free quote.",
    keywords: [
      "app development company",
      "android app development",
      "ios app development",
      "mobile app development India",
    ],
    heroImage: "/services/app-development.webp",
    heroImageAlt: "Developer designing a mobile application on a tablet",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/mobile%20app.mp4",
    Icon: Smartphone,
    intro:
      "We build native and cross-platform mobile applications for iOS and Android, connected to the same backend as your website where relevant. From an MVP that needs to ship fast to a full-featured app tied to bookings, payments, or content, the build is scoped around what your users actually need to do on day one.",
    whatWeDo: [
      { title: "Cross-platform apps", description: "One codebase serving both iOS and Android, reducing cost and maintenance." },
      { title: "Native performance work", description: "Platform-specific builds where performance or device access demands it." },
      { title: "Backend & API integration", description: "Apps wired to your existing systems, payment gateways, and admin tools." },
      { title: "App store submission", description: "Handling the Play Store and App Store submission and review process." },
    ],
    process: [
      { title: "Requirement mapping", description: "Core user flows and must-have features scoped before design starts." },
      { title: "UI/UX design", description: "Screen-by-screen design reviewed with you before development begins." },
      { title: "Development", description: "Staged builds with regular check-ins, not a single reveal at the end." },
      { title: "QA on real devices", description: "Testing across device sizes and OS versions, not just simulators." },
      { title: "Launch & support", description: "Store submission plus post-launch monitoring and updates." },
    ],
    faqs: [
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes. Most projects use a cross-platform approach so one codebase serves both platforms, which keeps cost and long-term maintenance lower. Where performance needs demand it, we build natively.",
      },
      {
        question: "Can my app connect to my existing website or backend?",
        answer:
          "Yes. If your website already has a backend, we build the app against the same APIs so your data — products, bookings, users — stays in one place.",
      },
      {
        question: "Will you handle app store submission?",
        answer:
          "Yes, we manage the full submission and review process for both the Google Play Store and Apple App Store, including responding to review feedback.",
      },
      {
        question: "How long does app development take?",
        answer:
          "A focused MVP with core features typically takes 6–10 weeks. Scope, integrations, and design complexity are the biggest factors, and we confirm a timeline after the discovery call.",
      },
      {
        question: "Do you provide support after the app is live?",
        answer:
          "Yes, through our IT Support service — bug fixes, OS-update compatibility, and feature updates after launch.",
      },
    ],
  },
  {
    slug: "seo",
    navLabel: "SEO",
    title: "Search Engine Optimization",
    shortDescription:
      "Technical SEO, content optimization, and performance improvements to help you rank higher and grow organically.",
    metaDescription:
      "SEO services by Grox Media — technical SEO, on-page optimization, and local SEO for Indian businesses. Improve your organic search rankings. Get a free consultation.",
    keywords: [
      "SEO company",
      "SEO services India",
      "local SEO",
      "technical SEO agency",
    ],
    heroImage: "/services/seo.webp",
    heroImageAlt: "SEO analytics dashboard displayed on a laptop screen",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/SEO.mp4",
    Icon: Search,
    intro:
      "SEO work starts with a technical audit — page speed, indexability, structured data, and mobile usability — before any content or link work happens. From there we handle on-page optimization, local SEO for Indian businesses, and ongoing content support, with reporting that shows what actually moved and why.",
    whatWeDo: [
      { title: "Technical SEO audits", description: "Site speed, crawlability, structured data, and indexing issues fixed at the source." },
      { title: "On-page optimization", description: "Titles, meta descriptions, headings, and internal linking aligned to search intent." },
      { title: "Local SEO", description: "Google Business Profile, local citations, and location-specific pages for Indian markets." },
      { title: "Content support", description: "SEO-aligned content writing and optimization for existing pages." },
    ],
    process: [
      { title: "Technical audit", description: "A full crawl to find what's blocking rankings before anything else starts." },
      { title: "Keyword & intent mapping", description: "Matching your pages to what your customers are actually searching for." },
      { title: "On-page implementation", description: "Fixing metadata, structure, and internal links page by page." },
      { title: "Content & authority work", description: "Ongoing content optimization and link-building where relevant." },
      { title: "Monthly reporting", description: "Rankings, traffic, and what changed — in plain language, not just charts." },
    ],
    faqs: [
      {
        question: "What does your SEO service include?",
        answer:
          "A technical audit, on-page optimization, local SEO setup, and ongoing content recommendations. We start with what's broken — page speed, indexing, structure — before touching keywords or content.",
      },
      {
        question: "How long before I see results from SEO?",
        answer:
          "Technical fixes can show impact within weeks. Meaningful ranking movement for competitive keywords typically takes 3–6 months of consistent work — anyone promising overnight results isn't doing real SEO.",
      },
      {
        question: "Do you do local SEO for Indian businesses?",
        answer:
          "Yes — Google Business Profile optimization, local citations, and city-specific landing pages are part of our local SEO work for businesses targeting specific Indian markets.",
      },
      {
        question: "Will you help with content writing for SEO?",
        answer:
          "Yes, we write and optimize content aligned to search intent, or optimize your existing content if you already have writers in place.",
      },
      {
        question: "Do you manage Google Ads and Meta Ads too?",
        answer:
          "Yes, alongside SEO we run performance marketing campaigns through our Lead Generation & Performance Marketing service — the two often work better together than in isolation.",
      },
    ],
  },
  {
    slug: "branding",
    navLabel: "Branding",
    title: "Branding",
    shortDescription:
      "Logos, brand identity, and creative assets that make your business recognizable and trustworthy.",
    metaDescription:
      "Branding and logo design services by Grox Media — brand identity, colour systems, and creative assets that make your business look trustworthy and consistent.",
    keywords: [
      "branding agency",
      "logo design company",
      "brand identity design",
      "brand design India",
    ],
    heroImage: "/services/branding.webp",
    heroImageAlt: "Designer working on a brand logo on a graphics tablet",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/branding.mp4",
    Icon: Palette,
    intro:
      "Brand identity work covers logo design, colour systems, typography, and brand guidelines — the visual language that makes a business recognizable across a website, packaging, and social media. We work from a discovery brief so the identity reflects the actual business, not a generic template.",
    whatWeDo: [
      { title: "Logo design", description: "Primary logo, variations, and a usable file set for every application." },
      { title: "Brand identity systems", description: "Colour palette, typography, and visual rules that stay consistent everywhere." },
      { title: "Brand guidelines", description: "A reference document so your team and future vendors use the brand correctly." },
      { title: "Packaging & collateral design", description: "Business cards, packaging, and print collateral aligned to the identity." },
    ],
    process: [
      { title: "Discovery brief", description: "Understanding the business, audience, and competitors before any design work." },
      { title: "Concept exploration", description: "Initial logo directions presented for feedback before refinement." },
      { title: "Refinement", description: "Revisions on the chosen direction based on your feedback." },
      { title: "Final delivery", description: "All logo formats, colour codes, and a brand guideline document." },
    ],
    faqs: [
      {
        question: "What graphic design services do you offer?",
        answer:
          "Logo design, brand identity systems, packaging design, and social media creatives are our core graphic design services, alongside print collateral like business cards.",
      },
      {
        question: "How does the logo design process work?",
        answer:
          "We start with a discovery brief, present initial concepts based on that brief, then refine the direction you choose through revision rounds until it's ready to deliver.",
      },
      {
        question: "What file formats do I get for my logo and brand assets?",
        answer:
          "You receive vector formats (AI, EPS, SVG) plus PNG and JPG exports in multiple sizes, along with a brand guideline document covering colours, typography, and usage rules.",
      },
      {
        question: "Can you design product packaging for my food/FMCG brand?",
        answer:
          "Yes, packaging design for food, FMCG, and consumer product brands is part of our graphic design work, from concept through print-ready files.",
      },
      {
        question: "How many revisions are included in design projects?",
        answer:
          "Revision rounds are scoped upfront based on the project. We share the exact number in the proposal so there's no ambiguity before work begins.",
      },
    ],
  },
  {
    slug: "influencer-marketing",
    navLabel: "Influencer Marketing",
    title: "Influencer Marketing",
    shortDescription:
      "Connect your brand with top influencers and content creators to amplify reach, build trust, and drive engagement.",
    metaDescription:
      "Influencer marketing services by Grox Media — connect your brand with the right content creators to build trust and drive engagement across Instagram and YouTube.",
    keywords: [
      "influencer marketing agency",
      "influencer marketing India",
      "content creator partnerships",
    ],
    heroImage: "/services/influencer-marketing.webp",
    heroImageAlt: "Social media influencer presenting a product on camera",
    videoSrc:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/influencer-marketing.mp4",
    Icon: Users,
    intro:
      "Influencer marketing works when the creator's audience actually matches your customer — not just when the follower count is high. We identify relevant creators, manage outreach and briefs, and coordinate the campaign so the content stays authentic while still hitting your marketing goals.",
    whatWeDo: [
      { title: "Creator identification", description: "Finding influencers whose audience genuinely matches your target customer." },
      { title: "Outreach & negotiation", description: "Managing creator conversations, deliverables, and pricing on your behalf." },
      { title: "Campaign briefing", description: "Clear briefs that keep content authentic while hitting your key messages." },
      { title: "Performance tracking", description: "Reach, engagement, and conversion tracking tied back to campaign goals." },
    ],
    process: [
      { title: "Goal & audience definition", description: "Clarifying what the campaign needs to achieve and for whom." },
      { title: "Creator shortlisting", description: "A curated list of relevant creators for your review and approval." },
      { title: "Outreach & briefing", description: "Managing agreements and creative briefs with selected creators." },
      { title: "Content review", description: "Checking content against the brief before it goes live." },
      { title: "Reporting", description: "Reach, engagement, and results shared after the campaign runs." },
    ],
    faqs: [
      {
        question: "How do you choose which influencers to work with?",
        answer:
          "We match creators to your target audience and product category first — follower count is a secondary filter. Engagement quality and audience relevance matter more than raw reach.",
      },
      {
        question: "Which platforms do you run influencer campaigns on?",
        answer:
          "Primarily Instagram and YouTube, since that's where most of our clients' target audiences are active in India, though we scope other platforms if your audience is elsewhere.",
      },
      {
        question: "Do you handle the negotiation and contracts with creators?",
        answer:
          "Yes, we manage outreach, pricing negotiation, and deliverable agreements with creators, so you're dealing with one point of contact instead of several.",
      },
      {
        question: "How do you measure the success of a campaign?",
        answer:
          "Reach, engagement rate, and any trackable conversions (link clicks, promo code usage) tied to the campaign's original goals — reported after the campaign completes.",
      },
      {
        question: "Do you sign an NDA for campaign details?",
        answer:
          "Yes, we sign NDAs on request before any project discussion, and all creative and campaign details remain confidential.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    navLabel: "Social Media Marketing",
    title: "Social Media Marketing",
    shortDescription:
      "Strategic social media management and targeted campaigns to scale your brand presence across platforms.",
    metaDescription:
      "Social media marketing services by Grox Media — content strategy, posting, and targeted campaigns across Instagram, Facebook, and LinkedIn to grow your brand presence.",
    keywords: [
      "social media marketing agency",
      "social media management India",
      "Instagram marketing company",
    ],
    heroImage: "/services/social-media-marketing.webp",
    heroImageAlt: "Social media marketing concept with phone and applications",
    videoSrc:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/social-media-marketing.mp4",
    Icon: Share2,
    intro:
      "Social media management covers content planning, posting, and community engagement, paired with targeted paid campaigns where the goal is reach or conversions rather than just presence. Strategy is built around what your specific audience responds to, not a generic content calendar.",
    whatWeDo: [
      { title: "Content strategy & calendars", description: "A posting plan built around your brand voice and audience behaviour." },
      { title: "Content creation & posting", description: "Graphics, captions, and scheduled posting across your active platforms." },
      { title: "Paid social campaigns", description: "Targeted ad campaigns on Meta and LinkedIn tied to specific goals." },
      { title: "Community management", description: "Responding to comments and messages to keep engagement active." },
    ],
    process: [
      { title: "Audit & strategy", description: "Reviewing your current presence and setting a content direction." },
      { title: "Content calendar", description: "A monthly plan shared for approval before posting begins." },
      { title: "Content production", description: "Design and copywriting for each scheduled post." },
      { title: "Posting & engagement", description: "Consistent posting plus responding to audience interaction." },
      { title: "Monthly review", description: "Performance data reviewed and the strategy adjusted accordingly." },
    ],
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer:
          "Primarily Instagram, Facebook, and LinkedIn — we scope the platform mix based on where your specific audience is actually active.",
      },
      {
        question: "Do you create the content or do I need to provide it?",
        answer:
          "We handle content creation — graphics, captions, and scheduling. If you have brand assets or product photography already, we work with those; otherwise we source or create what's needed.",
      },
      {
        question: "Can you run paid ad campaigns, not just organic posting?",
        answer:
          "Yes, paid campaigns on Meta and LinkedIn are part of this service, scoped separately from organic content based on your budget and goals.",
      },
      {
        question: "How often will you post on our accounts?",
        answer:
          "Posting frequency is set in the content calendar based on your plan and platform — this is agreed upfront so there's a clear, consistent cadence.",
      },
      {
        question: "How do I see results from social media marketing?",
        answer:
          "Monthly reports cover reach, engagement, follower growth, and campaign performance where paid ads are running, explained in plain terms alongside the raw numbers.",
      },
    ],
  },
  {
    slug: "video-editing",
    navLabel: "Video Editing",
    title: "Video Editing",
    shortDescription:
      "Professional video editing, motion graphics, and reel creation designed to capture attention and tell your story.",
    metaDescription:
      "Video editing services by Grox Media — professional editing, motion graphics, and reel creation for Instagram, YouTube, and brand videos. Get a free quote.",
    keywords: [
      "video editing company",
      "reel editing services",
      "video production India",
    ],
    heroImage: "/services/video-editing.webp",
    heroImageAlt: "Video editor working on footage across dual monitors",
    videoSrc:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/video-editing.mp4",
    Icon: Video,
    intro:
      "Video editing covers everything from short-form reels to longer brand films — cutting, colour grading, motion graphics, subtitles, and sound design. We work from your raw footage, so the edit reflects your actual shoot rather than a generic template.",
    whatWeDo: [
      { title: "Reel & short-form editing", description: "Fast-paced edits built for Instagram, YouTube Shorts, and similar formats." },
      { title: "Brand film editing", description: "Longer-form storytelling edits for websites, ads, and presentations." },
      { title: "Motion graphics", description: "Titles, lower-thirds, and animated elements layered into the edit." },
      { title: "Subtitles & captions", description: "Accurate, styled captions for accessibility and silent viewing." },
    ],
    process: [
      { title: "Footage review", description: "Reviewing raw footage and understanding the story you want told." },
      { title: "Rough cut", description: "An initial edit shared for direction feedback before refinement." },
      { title: "Refinement", description: "Colour grading, motion graphics, and sound design applied." },
      { title: "Final delivery", description: "Export in the aspect ratios and formats each platform needs." },
    ],
    faqs: [
      {
        question: "What types of videos do you edit?",
        answer:
          "Short-form reels, YouTube videos, brand films, and product videos are our core work — from raw footage to a finished, platform-ready edit.",
      },
      {
        question: "What aspect ratios and formats do you deliver?",
        answer:
          "We deliver in whatever aspect ratios your platforms need — vertical 9:16 for reels, 16:9 for YouTube and websites — as MP4 in the resolution you require.",
      },
      {
        question: "Do you add subtitles, captions, and motion graphics?",
        answer:
          "Yes, styled subtitles, captions, and motion graphics like titles and lower-thirds are part of the edit when your project calls for them.",
      },
      {
        question: "How do I share raw footage with you?",
        answer:
          "Cloud storage links (Google Drive, Dropbox, or similar) work best for raw footage — we'll share upload instructions once the project is scoped.",
      },
      {
        question: "How many revision rounds are included for video edits?",
        answer:
          "Revision rounds are scoped per project and confirmed in the proposal, so the number is clear before editing begins.",
      },
    ],
  },
  {
    slug: "lead-generation",
    navLabel: "Lead Generation",
    title: "Lead Generation & Performance Marketing",
    shortDescription:
      "Performance-focused marketing campaigns that generate qualified leads and improve conversions.",
    metaDescription:
      "Lead generation and performance marketing by Grox Media — Google Ads and Meta Ads campaigns focused on qualified leads and conversions, not just clicks.",
    keywords: [
      "lead generation agency",
      "performance marketing company",
      "Google Ads management India",
      "Meta Ads agency",
    ],
    heroImage: "/services/lead-generation.webp",
    heroImageAlt: "Growth chart representing performance marketing results",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/digital%20marketing.mp4",
    Icon: Megaphone,
    intro:
      "Performance marketing is measured by qualified leads and conversions, not impressions. We run Google Ads and Meta Ads campaigns with conversion tracking set up from day one, so budget moves toward what's actually working rather than what looks good on a vanity metric.",
    whatWeDo: [
      { title: "Google Ads management", description: "Search and display campaigns built around commercial-intent keywords." },
      { title: "Meta Ads management", description: "Facebook and Instagram campaigns targeted to your ideal customer profile." },
      { title: "Conversion tracking setup", description: "Proper tracking so you know which campaigns actually drive results." },
      { title: "Landing page optimization", description: "Aligning landing pages to ad intent to improve conversion rate." },
    ],
    process: [
      { title: "Goal & budget setup", description: "Defining what a qualified lead looks like and setting campaign budgets." },
      { title: "Campaign build", description: "Ad creative, targeting, and tracking set up before launch." },
      { title: "Launch & monitor", description: "Close monitoring in the first weeks to catch issues early." },
      { title: "Optimize", description: "Reallocating budget toward what's converting, cutting what isn't." },
      { title: "Monthly reporting", description: "Cost-per-lead, conversions, and ROI reviewed together each month." },
    ],
    faqs: [
      {
        question: "Do you manage Google Ads and Meta Ads?",
        answer:
          "Yes, both platforms are part of this service — campaign setup, targeting, creative, and ongoing optimization based on performance.",
      },
      {
        question: "How do you make sure I get qualified leads, not just clicks?",
        answer:
          "Conversion tracking is set up before a campaign launches, so we can see which clicks actually turn into leads or sales — and shift budget toward what's converting.",
      },
      {
        question: "What's the minimum ad budget you recommend?",
        answer:
          "It depends on your industry and competition — we assess this during the discovery call and recommend a realistic starting budget rather than a one-size-fits-all number.",
      },
      {
        question: "Will you also optimize my landing pages?",
        answer:
          "Yes, landing page alignment with ad intent is part of performance marketing — a mismatched landing page undermines even a well-targeted campaign.",
      },
      {
        question: "How is performance reported?",
        answer:
          "Monthly reports cover cost-per-lead, conversion numbers, and overall ROI, explained clearly alongside the raw data.",
      },
    ],
  },
  {
    slug: "it-support",
    navLabel: "IT Support",
    title: "IT Support",
    shortDescription:
      "Reliable IT support and maintenance to keep your systems fast, secure, and always available.",
    metaDescription:
      "IT support and maintenance services by Grox Media — website and system maintenance, security updates, and technical support to keep your systems running reliably.",
    keywords: [
      "IT support company",
      "website maintenance services",
      "technical support agency India",
    ],
    heroImage: "/services/it-support.webp",
    heroImageAlt: "IT technician maintaining server infrastructure",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/IT%20Support.mov",
    Icon: Headphones,
    intro:
      "Ongoing IT support covers website and application maintenance, security updates, uptime monitoring, and technical troubleshooting after a project goes live — so systems we've built (or systems you already have) keep running without you needing an in-house technical team.",
    whatWeDo: [
      { title: "Website & app maintenance", description: "Regular updates, backups, and monitoring to keep systems running smoothly." },
      { title: "Security updates", description: "Patching vulnerabilities and keeping software dependencies current." },
      { title: "Uptime monitoring", description: "Alerts and quick response when something goes down." },
      { title: "Technical troubleshooting", description: "Diagnosing and fixing issues as they come up, not just on a schedule." },
    ],
    process: [
      { title: "System assessment", description: "Understanding what you're running and where the risks are." },
      { title: "Maintenance plan", description: "A support scope agreed upfront — what's covered and response times." },
      { title: "Ongoing monitoring", description: "Regular checks and updates to prevent issues before they happen." },
      { title: "Rapid response", description: "Fast troubleshooting when something breaks or needs attention." },
    ],
    faqs: [
      {
        question: "Do you support websites you didn't originally build?",
        answer:
          "Yes, we take on maintenance for existing websites and systems after an initial technical assessment to understand what we're working with.",
      },
      {
        question: "What's included in ongoing IT support?",
        answer:
          "Updates, backups, security patching, uptime monitoring, and troubleshooting — the exact scope and response times are agreed in a maintenance plan upfront.",
      },
      {
        question: "How quickly do you respond to issues?",
        answer:
          "Response times are defined in your support plan based on severity — critical issues (site down) get priority response over minor requests.",
      },
      {
        question: "Is IT support a monthly retainer or one-off?",
        answer:
          "Typically a monthly retainer for ongoing coverage, though we also handle one-off fixes and audits if that's what you need.",
      },
      {
        question: "Do you handle hosting and domain management too?",
        answer:
          "Yes, we can manage hosting, domains, and DNS as part of an IT support plan, or work alongside your existing hosting provider.",
      },
    ],
  },
  {
    slug: "amazon-listing",
    navLabel: "Amazon Listing (India & USA)",
    title: "Amazon Listing (India & USA)",
    shortDescription:
      "Product listing creation and optimization for Amazon India and Amazon USA — titles, images, keywords, and category mapping done right.",
    metaDescription:
      "Amazon listing services for India and USA by Grox Media — product listing creation, title and keyword optimization, and category mapping to help your products get found.",
    keywords: [
      "Amazon listing services",
      "Amazon listing optimization India",
      "Amazon USA listing agency",
    ],
    heroImage: "/services/amazon-listing.webp",
    heroImageAlt: "Warehouse storage shelves filled with packaged products",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/amazon-listing.mp4",
    Icon: ShoppingCart,
    intro:
      "Getting a product found on Amazon starts with the listing itself — the right category, a title built around how customers actually search, clear product images, and backend keywords that don't conflict with Amazon's policies. We handle listing creation and optimization for sellers on both Amazon India and Amazon USA.",
    whatWeDo: [
      { title: "New listing creation", description: "Setting up product listings correctly from category selection through to publishing." },
      { title: "Title & bullet optimization", description: "Titles and bullet points written around real customer search behaviour." },
      { title: "Backend keyword research", description: "Search-term fields optimized within Amazon's character and policy limits." },
      { title: "Category & attribute mapping", description: "Correct category and attribute selection so your product is discoverable." },
    ],
    process: [
      { title: "Product & market review", description: "Understanding your product and how competitors are positioned." },
      { title: "Keyword research", description: "Identifying the terms customers actually search for on Amazon." },
      { title: "Listing build", description: "Title, bullets, description, and backend keywords written and structured." },
      { title: "Image & content review", description: "Ensuring images and content meet Amazon's requirements." },
      { title: "Publish & monitor", description: "Listing goes live, with an initial check-in on visibility." },
    ],
    faqs: [
      {
        question: "Do you handle listings for both Amazon India and Amazon USA?",
        answer:
          "Yes — we set up and optimize listings for both marketplaces, accounting for the different category structures and customer search behaviour in each.",
      },
      {
        question: "Do you also manage my Amazon seller account?",
        answer:
          "This service focuses on listing creation and optimization. If you need full account management, let us know during the discovery call and we'll scope that separately.",
      },
      {
        question: "Can you fix an existing listing that isn't performing?",
        answer:
          "Yes, we audit existing listings for title, keyword, and category issues, then rework them based on what's actually holding back visibility.",
      },
      {
        question: "Do you provide the product photography too?",
        answer:
          "Photography can be arranged through our Branding/design team if needed — this listing service covers the text, structure, and keyword side of the listing.",
      },
      {
        question: "How long does it take to set up a listing?",
        answer:
          "A single well-researched listing typically takes about a week from keyword research to publish; multi-product catalogues take longer and are scoped individually.",
      },
    ],
  },
  {
    slug: "ebay-listing",
    navLabel: "eBay Listing",
    title: "eBay Listing",
    shortDescription:
      "End-to-end eBay product listing management, from catalog setup to optimized titles and descriptions that improve visibility.",
    metaDescription:
      "eBay listing services by Grox Media — product catalog setup, title and description optimization, and listing management to improve visibility on eBay.",
    keywords: [
      "eBay listing services",
      "eBay listing optimization",
      "eBay seller support agency",
    ],
    heroImage: "/services/ebay-listing.webp",
    heroImageAlt: "Online store employee managing product listings on a laptop",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/ebay-listing.mp4",
    Icon: Store,
    intro:
      "eBay's search (Cassini) rewards listings with accurate item specifics, clear titles, and complete category data. We handle catalog setup and listing optimization so products are structured the way eBay's search actually favours, rather than left as a generic template.",
    whatWeDo: [
      { title: "Catalog setup", description: "Structuring your product catalog correctly across eBay's category system." },
      { title: "Title & description optimization", description: "Titles and descriptions written to match how eBay buyers search." },
      { title: "Item specifics & category mapping", description: "Completing the attribute data eBay's search algorithm relies on." },
      { title: "Listing management", description: "Ongoing updates as inventory, pricing, or product details change." },
    ],
    process: [
      { title: "Catalog review", description: "Understanding your current product range and existing listings, if any." },
      { title: "Category & keyword mapping", description: "Matching products to the right eBay categories and search terms." },
      { title: "Listing build", description: "Titles, descriptions, and item specifics completed for each product." },
      { title: "Publish & review", description: "Listings go live with an initial check on visibility and formatting." },
    ],
    faqs: [
      {
        question: "Do you set up listings for a full product catalog?",
        answer:
          "Yes, from a handful of products to a full catalog — we scope the timeline based on how many listings need to be created or optimized.",
      },
      {
        question: "How is eBay listing optimization different from Amazon?",
        answer:
          "eBay's search algorithm weighs item specifics and category accuracy heavily, alongside title relevance — the optimization approach is tailored to how eBay's search actually works, not copied from Amazon.",
      },
      {
        question: "Can you optimize listings I already have on eBay?",
        answer:
          "Yes, we audit existing listings for missing item specifics, weak titles, or category mismatches, then rework them accordingly.",
      },
      {
        question: "Do you manage pricing and inventory too?",
        answer:
          "This service covers listing content and structure. Pricing and inventory management can be scoped separately if you need ongoing account management.",
      },
      {
        question: "What information do you need from me to start?",
        answer:
          "Product details, images, and any existing listings or catalog data — we'll share a simple checklist once the project is scoped during the discovery call.",
      },
    ],
  },
  {
    slug: "etsy-listing",
    navLabel: "Etsy Listing",
    title: "Etsy Listing",
    shortDescription:
      "Etsy shop and product listing setup tailored for handmade, vintage, and craft sellers looking to reach the right buyers.",
    metaDescription:
      "Etsy shop and listing setup by Grox Media — tailored for handmade, vintage, and craft sellers. Product listing optimization to help the right buyers find your shop.",
    keywords: [
      "Etsy listing services",
      "Etsy shop setup",
      "Etsy SEO optimization",
    ],
    heroImage: "/services/etsy-listing.webp",
    heroImageAlt: "Craft maker working at a handmade goods shop",
    videoSrc:
      "https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/belvo/etsy-listing.mp4",
    Icon: Gem,
    intro:
      "Etsy's buyers search differently than Amazon or eBay shoppers — tags, materials, and the story behind a handmade or vintage product all factor into discovery. We set up shops and listings for craft and handmade sellers with that search behaviour in mind, from tags and titles to shop policies.",
    whatWeDo: [
      { title: "Shop setup", description: "Etsy shop configuration, policies, and branding set up correctly from the start." },
      { title: "Listing creation", description: "Titles, tags, and descriptions built around how Etsy buyers actually search." },
      { title: "Tag & attribute optimization", description: "Using Etsy's full tag allowance and attributes to maximise discoverability." },
      { title: "Shop policy & branding", description: "Shop banner, About section, and policies aligned to your brand." },
    ],
    process: [
      { title: "Shop & product review", description: "Understanding your products and any existing Etsy presence." },
      { title: "Keyword & tag research", description: "Finding the terms and tags Etsy buyers use for products like yours." },
      { title: "Listing build", description: "Titles, tags, descriptions, and pricing structure set up per listing." },
      { title: "Shop setup & branding", description: "Banner, About section, and policies completed for a cohesive shop." },
      { title: "Publish & review", description: "Listings go live with an initial check on visibility and formatting." },
    ],
    faqs: [
      {
        question: "Do you work with handmade and vintage sellers specifically?",
        answer:
          "Yes, this service is built around Etsy's specific buyer behaviour — handmade, vintage, and craft categories search and rank differently than general marketplaces.",
      },
      {
        question: "Can you set up a brand new Etsy shop for me?",
        answer:
          "Yes, from shop creation and branding through to your first set of optimized listings — the full setup for sellers starting fresh on Etsy.",
      },
      {
        question: "How important are tags on Etsy compared to titles?",
        answer:
          "Both matter — Etsy allows up to 13 tags per listing and we use that full allowance strategically, alongside a title structured for how buyers search.",
      },
      {
        question: "Can you optimize listings I already have on Etsy?",
        answer:
          "Yes, we audit existing listings for weak titles, unused tags, or missing attributes, then rework them based on what's actually limiting visibility.",
      },
      {
        question: "Do you help with product photography for Etsy?",
        answer:
          "Photography guidance can be arranged through our Branding/design team if needed — this service focuses on the listing text, tags, and shop structure.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
