import type { ServiceFaq } from "./services";

/**
 * Long-form content for each service detail page. Kept separate from
 * services.ts so the core service list stays scannable. No invented stats,
 * client names, or guarantees — only how the work is actually done.
 */
export type ServiceExtras = {
  overviewHeading: string;
  overview: string[];
  benefits: { title: string; description: string }[];
  deliverables: string[];
  industries: string[];
  extraFaqs: ServiceFaq[];
};

export const serviceExtras: Record<string, ServiceExtras> = {
  "website-development": {
    overviewHeading: "Websites Built to Load Fast, Rank Well, and Convert Visitors",
    overview: [
      "Your website is usually the first place a customer checks before calling you. If it loads slowly, looks broken on a phone, or doesn't explain what you do in the first few seconds, that visitor goes back to Google and clicks your competitor. We build websites that avoid all three problems — fast on mobile networks, clear in their messaging, and structured so search engines understand every page.",
      "Every project starts with understanding what the website needs to achieve: phone calls, WhatsApp enquiries, form submissions, online orders, or bookings. The page structure, copy placement, and calls-to-action are planned around that goal before a single design is made. That is the difference between a website that looks good and one that actually brings in business.",
      "On the technical side, we write clean semantic HTML, set up proper heading hierarchy, meta tags, canonical URLs, XML sitemaps, schema markup, and image optimization as standard — not as a paid add-on. Sites are tested on real Android and iOS devices and checked against Google's Core Web Vitals before launch.",
      "After launch you get full ownership: source code, hosting access, domain control, and admin logins. We document how to update content yourself, and we remain available for changes, new features, or ongoing maintenance whenever you need them.",
    ],
    benefits: [
      { title: "Mobile-first design", description: "Most Indian users browse on phones, so layouts are designed for small screens first and scaled up for desktop." },
      { title: "SEO-ready structure", description: "Clean URLs, heading hierarchy, meta tags, schema, and sitemaps are built in from the first line of code." },
      { title: "Fast loading", description: "Optimized images, modern frameworks, and lean code keep pages quick even on slower 4G connections." },
      { title: "Easy content updates", description: "An admin panel or CMS lets your team edit text, images, products, and blog posts without a developer." },
      { title: "Lead capture built in", description: "Enquiry forms, WhatsApp and call buttons, and email notifications so no enquiry is missed." },
      { title: "Full ownership", description: "You own the code, domain, and hosting accounts — no lock-in to our agency." },
    ],
    deliverables: [
      "Custom UI design for every key page",
      "Responsive build for mobile, tablet, and desktop",
      "On-page SEO setup: titles, descriptions, headings, schema",
      "Contact forms with email notifications",
      "WhatsApp and click-to-call integration",
      "Google Analytics and Search Console setup",
      "SSL, hosting, and domain configuration",
      "Admin panel or CMS training for your team",
    ],
    industries: ["Real estate", "Healthcare & clinics", "Education & coaching", "Manufacturing & B2B", "Restaurants & hospitality", "Startups & SaaS"],
    extraFaqs: [
      { question: "Do you provide hosting and domain for the website?", answer: "We can register the domain and set up hosting in your name, or work with hosting you already have. Either way, all accounts stay under your ownership." },
      { question: "Will I be able to update the website myself?", answer: "Yes. We set up an admin panel or CMS and walk your team through updating text, images, blog posts, and products. You won't need a developer for routine changes." },
      { question: "Do you build ecommerce websites with payment gateways?", answer: "Yes. We integrate Indian payment gateways like Razorpay, PhonePe, Cashfree, and Paytm, along with shipping, GST invoicing, and order management as required." },
    ],
  },

  "app-development": {
    overviewHeading: "Mobile Apps Your Customers Will Actually Keep Using",
    overview: [
      "A mobile app only pays off if people keep it on their phone. That means it has to load quickly, be easy to navigate on the first try, and solve a real problem better than your website does. We design and build Android and iOS apps with that standard in mind — from booking and delivery apps to internal tools for field teams.",
      "We mainly build cross-platform apps with React Native and Flutter, which lets one codebase run on both Android and iOS. This keeps development cost and timelines lower without sacrificing the native feel. When a project needs deep device features or maximum performance, we discuss native development openly during scoping.",
      "Apps rarely work alone. Most need a backend for user accounts, data, payments, and notifications, plus an admin panel for your team. We build the full stack — APIs, databases, admin dashboards, push notifications, and payment integration — so everything works together from day one.",
      "Launching is handled end-to-end: store listings, screenshots, privacy policy requirements, and submission to Google Play and the Apple App Store. After release we support bug fixes, OS updates, and new feature rollouts.",
    ],
    benefits: [
      { title: "One codebase, two platforms", description: "Cross-platform development reaches Android and iOS users without doubling the budget." },
      { title: "Clean, simple UX", description: "Screens are prototyped and tested before development so users understand the app instantly." },
      { title: "Complete backend", description: "APIs, databases, authentication, and admin panels built alongside the app." },
      { title: "Push notifications", description: "Bring users back with order updates, reminders, and offers delivered straight to their phone." },
      { title: "Secure payments", description: "UPI, cards, and wallets integrated through trusted Indian payment gateways." },
      { title: "Store launch handled", description: "We prepare listings and manage submission and review on both app stores." },
    ],
    deliverables: [
      "Clickable prototype and UI design",
      "Android app (Google Play)",
      "iOS app (Apple App Store)",
      "Backend API and database",
      "Admin dashboard for your team",
      "Push notification setup",
      "Payment gateway integration",
      "App store listing and submission",
    ],
    industries: ["Ecommerce & retail", "Food delivery", "Healthcare & fitness", "Education & ed-tech", "Logistics & field service", "Service booking"],
    extraFaqs: [
      { question: "Do you use React Native or Flutter?", answer: "Both. We recommend one based on your features, existing tech, and long-term plans, and explain the reasoning during the scoping call." },
      { question: "Can you build an admin panel to manage the app?", answer: "Yes. Most apps we build come with a web-based admin panel for managing users, orders, content, and reports." },
      { question: "Who owns the app source code?", answer: "You do. On final payment, the full source code, store accounts, and backend access are handed over to you." },
    ],
  },

  seo: {
    overviewHeading: "SEO That Brings Customers, Not Just Traffic",
    overview: [
      "Ranking on Google is not about one trick. It depends on three things working together: a technically healthy website, content that answers what people are actually searching for, and trust signals like reviews, local citations, and links from other websites. Our SEO service covers all three, with the work prioritized by what will move your rankings fastest.",
      "We begin with a full audit — crawl errors, indexing issues, page speed, duplicate content, broken links, mobile usability, and how your site compares to the competitors already ranking for your target keywords. From that, you get a clear action plan instead of a generic checklist.",
      "For local businesses, Google Business Profile optimization is often the biggest lever. We optimize your profile, build consistent listings across Indian directories, and set up city and service pages so you appear in the map pack for searches like \"website designer near me\" or \"dentist in Noida\".",
      "Every month you receive a plain-language report covering keyword positions, organic traffic, leads from search, and the work completed. SEO takes time — typically three to six months for noticeable movement — and we are upfront about that from the start. We never promise a guaranteed number-one ranking, because nobody honestly can.",
    ],
    benefits: [
      { title: "Technical fixes first", description: "Indexing, speed, crawl errors, and mobile issues are resolved so Google can read your site properly." },
      { title: "Keyword research", description: "We target searches your buyers actually make, including Hindi-English and city-specific terms." },
      { title: "Local SEO", description: "Google Business Profile, map rankings, and local directory citations for area-based businesses." },
      { title: "Content that ranks", description: "Service pages and blog articles written around search intent, not stuffed with keywords." },
      { title: "Quality backlinks", description: "Relevant links and mentions from real Indian business sites — no spam link packages." },
      { title: "Transparent reporting", description: "Monthly reports showing rankings, traffic, leads, and exactly what was done." },
    ],
    deliverables: [
      "Complete technical SEO audit",
      "Keyword research and mapping",
      "On-page optimization of titles, headings, and content",
      "Google Business Profile optimization",
      "Local citations and directory listings",
      "Schema markup implementation",
      "Monthly content and link building",
      "Monthly ranking and traffic report",
    ],
    industries: ["Local service businesses", "Clinics & hospitals", "Real estate", "Ecommerce stores", "Coaching institutes", "B2B manufacturers"],
    extraFaqs: [
      { question: "Can you guarantee a first-page ranking on Google?", answer: "No honest agency can guarantee rankings, because Google controls the algorithm. What we guarantee is the work: a clear plan, consistent execution, and transparent monthly reporting." },
      { question: "Why is my website not showing on Google?", answer: "Common reasons are indexing problems, very thin content, a new domain with no backlinks, or strong competition. Our audit identifies exactly which of these is holding your site back." },
      { question: "Do you do SEO for websites built on WordPress or Shopify?", answer: "Yes. We work on WordPress, Shopify, Wix, Next.js, and custom-built sites." },
    ],
  },

  branding: {
    overviewHeading: "A Brand Identity People Recognize and Trust",
    overview: [
      "Customers decide whether a business looks trustworthy within seconds — often from the logo, colours, and quality of its visuals alone. A consistent, professional brand identity makes a small business look established and helps a growing one stand out in a crowded market.",
      "Our branding process starts with understanding your business, audience, and competitors. We then develop logo concepts, a colour palette, typography, and visual style that reflect your positioning — whether that is premium, friendly, traditional, or modern.",
      "Beyond the logo, we design the everyday assets your business uses: business cards, letterheads, brochures, social media templates, packaging, signage, and presentation decks. All of it follows the same brand guidelines so every touchpoint feels connected.",
      "You receive every file in print-ready and digital formats, along with a brand guideline document that explains how to use your logo, colours, and fonts correctly — so printers, designers, and your own team can stay consistent.",
    ],
    benefits: [
      { title: "Research-led design", description: "Concepts are based on your audience and competitors, not personal taste alone." },
      { title: "Consistent identity", description: "Logo, colours, and fonts that work together across print, web, and social media." },
      { title: "Print-ready files", description: "AI, EPS, PDF, SVG, and PNG files prepared for every printer and platform." },
      { title: "Brand guidelines", description: "A clear rulebook so anyone designing for you keeps the brand consistent." },
      { title: "Packaging expertise", description: "Product labels and packaging designed for shelf impact and printing requirements." },
      { title: "Full ownership", description: "All final designs and source files belong to you." },
    ],
    deliverables: [
      "Logo design with multiple concepts",
      "Colour palette and typography system",
      "Brand guideline document",
      "Business cards and letterhead",
      "Brochures and flyers",
      "Social media templates",
      "Packaging and label design",
      "Source files in all formats",
    ],
    industries: ["Food & FMCG", "Startups", "Restaurants & cafés", "Fashion & lifestyle", "Healthcare", "Professional services"],
    extraFaqs: [
      { question: "Can you refresh my existing logo instead of creating a new one?", answer: "Yes. A logo refresh keeps the recognition you've built while modernizing the design for today's screens and print." },
      { question: "Do you design social media post templates?", answer: "Yes. We create editable templates in Canva or Figma so your team can produce on-brand posts quickly." },
      { question: "Will I own the copyright to my logo?", answer: "Yes. On final payment, full rights to the logo and all brand assets are transferred to you." },
    ],
  },

  "influencer-marketing": {
    overviewHeading: "Influencer Campaigns That Reach the Right Audience",
    overview: [
      "People trust recommendations from creators they follow far more than they trust ads. Influencer marketing puts your product in front of an audience that already listens — but only if the creators are chosen carefully and the campaign is measured properly.",
      "We look beyond follower counts. Before shortlisting any creator we check audience location, engagement quality, content style, and past brand collaborations to make sure their followers match your customers. For most Indian brands, a group of micro and mid-tier creators delivers better value than a single celebrity post.",
      "We handle the full campaign: creator outreach, negotiation, briefs, content approvals, posting schedules, and payments. You approve the shortlist and the content before anything goes live, so your brand message stays in your control.",
      "After the campaign, you get a report with reach, engagement, clicks, promo code usage, and cost per result — so you know exactly what the campaign delivered and what to improve next time.",
    ],
    benefits: [
      { title: "Audience-matched creators", description: "Creators chosen for audience fit and engagement quality, not just follower numbers." },
      { title: "End-to-end management", description: "Outreach, negotiation, contracts, briefs, and payments handled by our team." },
      { title: "Content approval", description: "You review every piece of content before it is published." },
      { title: "Micro-influencer focus", description: "Smaller creators with loyal audiences often deliver stronger results per rupee." },
      { title: "Trackable results", description: "Unique links and promo codes connect campaign activity to real sales." },
      { title: "Reusable content", description: "Creator content can be repurposed for your ads and social media with permission." },
    ],
    deliverables: [
      "Campaign strategy and goals",
      "Creator research and shortlist",
      "Outreach and rate negotiation",
      "Creative briefs for each creator",
      "Content review and approval",
      "Posting schedule coordination",
      "Tracking links and promo codes",
      "Final performance report",
    ],
    industries: ["Beauty & skincare", "Fashion", "Food & beverages", "Consumer tech", "Fitness & wellness", "D2C brands"],
    extraFaqs: [
      { question: "What budget do I need for an influencer campaign?", answer: "It depends on the number and size of creators. Micro-influencer campaigns can start with a modest budget, and we recommend a plan after understanding your goals." },
      { question: "Do you work with regional-language creators?", answer: "Yes. Regional creators often have highly engaged audiences, and we include them when they fit your target market." },
      { question: "Can we reuse influencer content in our ads?", answer: "Yes, if usage rights are agreed with the creator. We include this in negotiations when you need it." },
    ],
  },

  "social-media-marketing": {
    overviewHeading: "Social Media Management That Builds Your Brand and Brings Enquiries",
    overview: [
      "Posting randomly on Instagram or Facebook rarely grows a business. What works is a consistent plan: content your audience finds useful or entertaining, posted regularly, backed by paid campaigns that put your best content in front of the right people.",
      "We start by understanding your audience and competitors, then create a monthly content calendar covering posts, reels, and stories. Our in-house designers and video editors produce the content, and you approve it before it goes live.",
      "Organic posting builds trust, but paid ads drive faster growth. We run Meta ad campaigns targeted by location, interests, and behaviour — for awareness, website traffic, WhatsApp enquiries, or lead forms — and optimize them based on real results.",
      "Each month you get a report covering follower growth, reach, engagement, top-performing content, and ad results, along with recommendations for the next month.",
    ],
    benefits: [
      { title: "Monthly content calendar", description: "A planned mix of posts, reels, and stories aligned with your business goals." },
      { title: "In-house creative team", description: "Graphics and reels designed and edited by our own designers and editors." },
      { title: "Paid campaigns", description: "Targeted Meta ads for reach, engagement, traffic, and leads." },
      { title: "Community management", description: "Timely responses to comments and messages keep your audience engaged." },
      { title: "Brand consistency", description: "Every post follows your brand colours, fonts, and tone of voice." },
      { title: "Clear reporting", description: "Monthly insights on what worked and what to do next." },
    ],
    deliverables: [
      "Social media strategy",
      "Monthly content calendar",
      "Post and carousel designs",
      "Reels and short video editing",
      "Captions and hashtag research",
      "Scheduling and publishing",
      "Meta ads management",
      "Monthly performance report",
    ],
    industries: ["Restaurants & cafés", "Real estate", "Salons & wellness", "Education", "Retail & ecommerce", "Local businesses"],
    extraFaqs: [
      { question: "Do you manage LinkedIn for B2B companies?", answer: "Yes. For B2B businesses we manage LinkedIn company pages with industry-focused content and thought leadership posts." },
      { question: "Is the ad budget included in your fee?", answer: "No. Ad spend is paid directly to Meta or Google from your account, separate from our management fee, so you always see exactly where the money goes." },
      { question: "Can you grow followers quickly?", answer: "We focus on genuine followers who may become customers. We never buy followers or use fake engagement, as it harms your account's reach." },
    ],
  },

  "video-editing": {
    overviewHeading: "Video Editing That Stops the Scroll",
    overview: [
      "Video is the most-watched content on every major platform, but viewers decide whether to keep watching within the first two to three seconds. Good editing — a strong hook, tight pacing, clear captions, and clean audio — is what keeps them watching until your message lands.",
      "We edit short-form reels and Shorts, YouTube videos, product demos, corporate films, testimonials, event highlights, and ad creatives. Each edit is tailored to the platform it is meant for, from vertical 9:16 reels to widescreen 16:9 YouTube content.",
      "Beyond cutting footage, we handle colour correction, sound cleanup, background music, captions and subtitles, motion graphics, text animations, and branded intros and outros so every video looks professional and on-brand.",
      "You share raw footage through Google Drive or WeTransfer, and we deliver a first draft for review. Feedback is incorporated through revision rounds until the video is ready to publish.",
    ],
    benefits: [
      { title: "Platform-ready formats", description: "Edits optimized for Instagram, YouTube, LinkedIn, and ads in the right aspect ratios." },
      { title: "Strong hooks", description: "Openings designed to grab attention in the first few seconds." },
      { title: "Captions and subtitles", description: "Most people watch on mute — on-screen captions keep them engaged." },
      { title: "Motion graphics", description: "Animated text, logos, and graphics that make videos look polished." },
      { title: "Colour and sound", description: "Colour grading and audio cleanup for a professional finish." },
      { title: "Quick turnaround", description: "Clear timelines for reels, long videos, and bulk monthly editing packages." },
    ],
    deliverables: [
      "Reels and YouTube Shorts",
      "Long-form YouTube videos",
      "Corporate and brand films",
      "Product demo and explainer videos",
      "Ad creatives for Meta and YouTube",
      "Captions and subtitles",
      "Motion graphics and text animation",
      "Thumbnail design",
    ],
    industries: ["Content creators", "Coaches & educators", "Real estate", "Ecommerce brands", "Corporate teams", "Events & weddings"],
    extraFaqs: [
      { question: "Do you offer monthly video editing packages?", answer: "Yes. For creators and brands that post regularly, we offer monthly packages with a fixed number of reels or long videos." },
      { question: "Can you edit videos shot on a mobile phone?", answer: "Yes. Most reels today are shot on phones, and good editing, colour correction, and captions make them look professional." },
      { question: "Do you provide stock footage and music?", answer: "We use licensed or royalty-free music and stock footage where needed so your videos are safe to publish." },
    ],
  },

  "lead-generation": {
    overviewHeading: "Performance Marketing Focused on Qualified Leads",
    overview: [
      "Clicks and impressions don't pay the bills — enquiries from real buyers do. Our lead generation service is built around one metric: the cost of getting a qualified lead that your sales team can actually convert.",
      "We run campaigns on Google Search, Google Display, YouTube, and Meta (Facebook and Instagram), choosing platforms based on where your buyers are and how they search. Search ads capture people actively looking for your service, while Meta ads build demand through precise targeting.",
      "A campaign is only as good as the page it sends people to. We create or optimize landing pages with clear offers, trust signals, and short forms, and set up conversion tracking so every call, form, and WhatsApp enquiry is measured.",
      "Campaigns are reviewed and optimized continuously — pausing weak keywords and ads, testing new creatives, and shifting budget toward what produces leads. You get regular reports showing spend, leads, and cost per lead.",
    ],
    benefits: [
      { title: "Google and Meta ads", description: "Campaigns on the platforms where your customers search and scroll." },
      { title: "Conversion tracking", description: "Calls, forms, and WhatsApp enquiries tracked accurately to measure real results." },
      { title: "Landing page optimization", description: "Focused pages designed to turn clicks into enquiries." },
      { title: "Lead quality filters", description: "Targeting and form design that reduce junk leads." },
      { title: "Ongoing optimization", description: "Weekly adjustments to bids, keywords, audiences, and creatives." },
      { title: "Transparent spend", description: "Ad spend is paid from your own account so you see every rupee." },
    ],
    deliverables: [
      "Campaign strategy and budget plan",
      "Keyword and audience research",
      "Ad copy and creative design",
      "Landing page design or optimization",
      "Conversion tracking setup",
      "CRM or sheet lead integration",
      "A/B testing of ads",
      "Regular performance reports",
    ],
    industries: ["Real estate", "Education & admissions", "Healthcare", "Home services", "B2B services", "Financial services"],
    extraFaqs: [
      { question: "How soon will I start getting leads?", answer: "Paid campaigns can start generating enquiries within days of launch. The first few weeks are used to learn and optimize, after which cost per lead usually becomes more stable." },
      { question: "Can leads be sent directly to my CRM or WhatsApp?", answer: "Yes. We can connect lead forms to your CRM, Google Sheets, email, or WhatsApp notifications." },
      { question: "Do you work on a fixed monthly fee?", answer: "Yes, our management fee is fixed and agreed upfront. Ad spend is separate and paid directly to the ad platforms." },
    ],
  },

  "it-support": {
    overviewHeading: "IT Support and Website Maintenance You Can Rely On",
    overview: [
      "A website that goes down, gets hacked, or slows to a crawl costs you enquiries every hour it stays broken. Our IT support service keeps your website and digital systems running smoothly so you can focus on your business.",
      "We handle regular updates for WordPress core, themes, and plugins, security monitoring, malware cleanup, backups, uptime checks, SSL renewals, and performance tuning. When something breaks, you contact us and we fix it.",
      "We also support the wider setup most businesses depend on: business email configuration, domain and DNS management, hosting migrations, Google Workspace setup, and troubleshooting for forms, payment gateways, and third-party integrations.",
      "Support is available as a monthly retainer for ongoing peace of mind, or as one-off jobs for specific fixes. We also support websites we didn't build, after a quick initial review.",
    ],
    benefits: [
      { title: "Regular updates", description: "Core, theme, and plugin updates applied safely with backups first." },
      { title: "Security monitoring", description: "Protection against malware, spam, and unauthorized access." },
      { title: "Daily backups", description: "Your data can be restored quickly if anything goes wrong." },
      { title: "Uptime monitoring", description: "We are alerted when your site goes down so it can be fixed fast." },
      { title: "Speed optimization", description: "Caching, image compression, and cleanup to keep pages fast." },
      { title: "One point of contact", description: "Hosting, domain, email, and website issues handled by one team." },
    ],
    deliverables: [
      "Website updates and maintenance",
      "Security scans and malware removal",
      "Automated backups",
      "Uptime monitoring",
      "SSL and domain renewals",
      "Hosting setup and migration",
      "Business email configuration",
      "Bug fixes and small content changes",
    ],
    industries: ["Small businesses", "Ecommerce stores", "Schools & institutes", "Clinics", "Agencies", "Corporate offices"],
    extraFaqs: [
      { question: "My website was hacked. Can you fix it?", answer: "Yes. We clean malware, close the security gaps that allowed the attack, restore from backups where possible, and help remove Google security warnings." },
      { question: "Can you move my website to a faster hosting provider?", answer: "Yes. We handle full hosting migrations including files, databases, email, and DNS with minimal downtime." },
      { question: "Do you set up business email on my domain?", answer: "Yes. We configure Google Workspace, Zoho Mail, or hosting-based email so you can use addresses like name@yourbusiness.com." },
    ],
  },

  "amazon-listing": {
    overviewHeading: "Amazon Listings Optimized to Get Found and Sell",
    overview: [
      "On Amazon, a great product with a weak listing simply doesn't sell. Buyers search, scan titles and images in seconds, and pick what looks most relevant and trustworthy. Your listing needs to rank for the right keywords and convince shoppers once they click.",
      "We research the keywords buyers actually use on Amazon India and Amazon USA, then write titles, bullet points, descriptions, and backend search terms that follow Amazon's guidelines while targeting those searches naturally.",
      "Images and A+ Content often decide the sale. We plan image sequences — main image, lifestyle shots, infographics, size charts — and design A+ Content that explains your product's benefits visually.",
      "We also handle category mapping, variations, flat-file bulk uploads, and fixes for suppressed or underperforming listings, keeping everything compliant with Amazon's marketplace policies.",
    ],
    benefits: [
      { title: "Keyword research", description: "Listings target the search terms real Amazon shoppers use." },
      { title: "Conversion-focused copy", description: "Titles and bullet points written to answer buyer questions quickly." },
      { title: "A+ Content design", description: "Visual brand content that improves product understanding and trust." },
      { title: "India and USA marketplaces", description: "Listings adapted for each marketplace's buyers and rules." },
      { title: "Bulk catalog uploads", description: "Flat-file uploads for large catalogs with variations." },
      { title: "Policy compliance", description: "Listings follow Amazon guidelines to avoid suppression." },
    ],
    deliverables: [
      "Amazon keyword research",
      "Optimized product titles",
      "Bullet points and descriptions",
      "Backend search terms",
      "Image and infographic planning",
      "A+ Content design",
      "Variation and category setup",
      "Suppressed listing fixes",
    ],
    industries: ["Home & kitchen", "Fashion & apparel", "Beauty & personal care", "Electronics accessories", "Handicrafts", "Health & supplements"],
    extraFaqs: [
      { question: "What is A+ Content and do I need it?", answer: "A+ Content adds images, comparison charts, and brand story sections to your product page. It's available to Brand Registry sellers and usually improves how well shoppers understand your product." },
      { question: "Can you help with Amazon Brand Registry?", answer: "We can guide you through the Brand Registry process once your trademark application is filed." },
      { question: "Do you upload listings in bulk?", answer: "Yes. For larger catalogs we use Amazon flat files to upload products and variations in bulk." },
    ],
  },

  "ebay-listing": {
    overviewHeading: "eBay Listings That Stand Out in Search",
    overview: [
      "eBay's search engine, Cassini, rewards listings that are complete, accurate, and relevant. Missing item specifics, weak titles, or unclear photos push your products down the results — even when your price is competitive.",
      "We create and optimize eBay listings with keyword-rich 80-character titles, complete item specifics, correct category selection, clear descriptions, and well-structured images that help buyers make a decision.",
      "For sellers with large catalogs, we handle bulk uploads, variation listings, and template-based descriptions so your store looks consistent and professional across every product.",
      "We also review your existing listings to find what is holding them back — from missing specifics to poor titles — and fix them to improve visibility and conversions.",
    ],
    benefits: [
      { title: "Search-optimized titles", description: "Full use of eBay's title length with the keywords buyers search." },
      { title: "Complete item specifics", description: "Filled-in specifics help listings appear in filtered searches." },
      { title: "Correct categories", description: "Products placed where buyers expect to find them." },
      { title: "Bulk catalog setup", description: "Large inventories uploaded efficiently with variations." },
      { title: "Professional templates", description: "Consistent, mobile-friendly descriptions across your store." },
      { title: "Cross-border ready", description: "Listings prepared for international buyers and shipping." },
    ],
    deliverables: [
      "Keyword research for eBay",
      "Optimized listing titles",
      "Item specifics completion",
      "Category mapping",
      "Product descriptions",
      "Variation listings",
      "Bulk uploads",
      "Existing listing audit and fixes",
    ],
    industries: ["Collectibles", "Auto parts", "Electronics", "Fashion", "Home décor", "Handicraft exporters"],
    extraFaqs: [
      { question: "Why are item specifics important on eBay?", answer: "Buyers use filters like brand, size, and colour. Listings without complete item specifics don't appear in those filtered results, which reduces visibility." },
      { question: "Can you help Indian sellers list on eBay for international buyers?", answer: "Yes. We prepare listings suited to international marketplaces and buyers." },
      { question: "Do you design eBay store templates?", answer: "Yes. We create clean, mobile-friendly description templates that stay within eBay's content policies." },
    ],
  },

  "etsy-listing": {
    overviewHeading: "Etsy Listings That Help Handmade Products Get Discovered",
    overview: [
      "Etsy buyers search for specific, often unique items — a personalised gift, a handmade candle, a vintage print. To be found, your listing needs to match those searches through well-written titles, all 13 tags, accurate attributes, and the right categories.",
      "We research the phrases buyers use on Etsy, then write titles, tags, and descriptions that are both search-friendly and true to your products. Descriptions tell the story behind your work, which matters to Etsy's audience.",
      "For new sellers, we set up the full shop: shop name guidance, banner and branding, about section, shop policies, shipping profiles, and first product listings. For existing shops, we audit and improve listings that aren't getting views or sales.",
      "We also advise on photography, pricing structure, and variations so every listing looks complete and professional.",
    ],
    benefits: [
      { title: "All 13 tags used", description: "Every tag slot filled with relevant long-tail search phrases." },
      { title: "Buyer-focused titles", description: "Titles that match how shoppers search while reading naturally." },
      { title: "Story-driven descriptions", description: "Descriptions that explain materials, process, and what makes your product special." },
      { title: "Complete shop setup", description: "Branding, policies, and shipping profiles for a trustworthy shop." },
      { title: "Accurate attributes", description: "Attributes help listings appear in Etsy's filtered searches." },
      { title: "Listing audits", description: "Existing listings reviewed and improved for more views." },
    ],
    deliverables: [
      "Etsy keyword research",
      "Optimized titles and 13 tags",
      "Product descriptions",
      "Attributes and category setup",
      "Shop banner and branding",
      "Shop policies and about section",
      "Shipping profile setup",
      "Listing audit and improvements",
    ],
    industries: ["Handmade jewellery", "Home décor", "Art & prints", "Personalised gifts", "Vintage items", "Craft supplies"],
    extraFaqs: [
      { question: "How many listings should a new Etsy shop start with?", answer: "More listings give buyers and Etsy's search more chances to find you. We generally recommend starting with a solid set of complete, well-photographed listings rather than a handful." },
      { question: "Can Indian sellers sell on Etsy?", answer: "Yes. Etsy supports sellers from India, and we help set up the shop, shipping profiles, and listings for international buyers." },
      { question: "Do you write listing descriptions in my brand voice?", answer: "Yes. We learn about your products and style first so descriptions sound like you, not a template." },
    ],
  },
};
