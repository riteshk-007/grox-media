import { localDepth, type LocalDepth } from "./industryLocalDepth";
import { industryExtras, type IndustryExtras } from "./industryExtras";
import { industryBundles } from "./industries";

/**
 * Industry × location landing pages, e.g. /gym-website-design-in-gurgaon.
 * Industry content is shared between locations; every page also gets its own
 * local intro and local FAQ so no two pages are duplicates.
 * No invented stats, client names, or ranking guarantees.
 */

export type IndustryKey =
  | "gym"
  | "dental-clinic"
  | "pet-shop"
  | "import-export"
  | "ecommerce"
  | "lawyer"
  | "education"
  | "coaching-institute"
  | "trading"
  | "b2b"
  | "healthcare"
  | "printing"
  | "perfume"
  | "beauty"
  | "ayurvedic";

export type LocationKey = "gurgaon" | "dwarka";

type Faq = { question: string; answer: string };

export type Industry = {
  key: string;
  /** Used in titles: "Gym Website Design in Gurgaon" */
  name: string;
  /** Plural audience: "gyms and fitness studios" */
  audience: string;
  whyHeading: string;
  why: string[];
  features: { title: string; description: string }[];
  pages: string[];
  integrations: string[];
  faqs: Faq[];
  relatedService: { label: string; href: string };
};

export type Location = {
  key: LocationKey;
  name: string;
  /** Full name used in schema and copy */
  fullName: string;
  region: string;
  areas: string[];
  localHeading: string;
  local: string[];
  /** Related city page already on the site */
  cityPage: { label: string; href: string };
};

export const locations: Record<LocationKey, Location> = {
  gurgaon: {
    key: "gurgaon",
    name: "Gurgaon",
    fullName: "Gurgaon (Gurugram)",
    region: "Haryana",
    areas: [
      "DLF Phase 1–5",
      "Cyber City",
      "Golf Course Road",
      "Golf Course Extension Road",
      "Sohna Road",
      "Sector 14 & 15",
      "Sector 29",
      "Sector 56 & 57",
      "MG Road",
      "South City",
      "Sushant Lok",
      "New Gurgaon (Sector 82–95)",
    ],
    localHeading: "Websites Built for How Gurgaon Searches",
    local: [
      "Gurgaon is one of the most competitive online markets in India. Customers here are used to polished apps and fast websites from the corporates they work for, so they judge local businesses by the same standard. A slow or outdated website loses them in seconds.",
      "Search behaviour in Gurgaon is also highly area-specific. People search for services near their sector or society — \"near Sohna Road\", \"in DLF Phase 4\", \"Golf Course Extension\". We structure your pages, Google Business Profile, and local schema so your business shows up for the areas you actually serve, not just for the city name.",
    ],
    cityPage: { label: "Website development company in Gurgaon", href: "/website-development-company-in-gurgaon" },
  },
  dwarka: {
    key: "dwarka",
    name: "Dwarka",
    fullName: "Dwarka, New Delhi",
    region: "Delhi",
    areas: [
      "Sector 1–5",
      "Sector 6 & 7",
      "Sector 10 & 11",
      "Sector 12 & 13",
      "Sector 19 & 21",
      "Sector 22 & 23",
      "Dwarka Mor",
      "Dwarka Expressway",
      "Palam",
      "Uttam Nagar",
      "Janakpuri",
      "Bijwasan",
    ],
    localHeading: "Websites Built for Dwarka's Local Customers",
    local: [
      "Dwarka is a large residential sub-city where most customers choose businesses within a few kilometres of home. Families search on their phones for the nearest option in their sector, compare two or three websites and Google reviews, and then call or WhatsApp. Your website needs to win that comparison quickly.",
      "We set up your website and Google Business Profile to rank for sector-level searches across Dwarka and nearby areas like Palam, Uttam Nagar, Janakpuri, and the growing Dwarka Expressway belt. Click-to-call, WhatsApp buttons, and Google Maps directions are placed where mobile users expect them.",
    ],
    cityPage: { label: "Website development company in Delhi", href: "/website-development-company-in-delhi" },
  },
};

export const industries: Record<IndustryKey, Industry> = {
  gym: {
    key: "gym",
    name: "Gym",
    audience: "gyms, fitness studios, and personal trainers",
    whyHeading: "Why Your Gym Needs a Proper Website",
    why: [
      "Before someone walks into a gym, they check it online. They want to see the equipment, the trainers, the timings, the membership plans, and what other members say. If your only online presence is an Instagram page, you lose everyone who searches on Google for \"gym near me\" and finds your competitor's website instead.",
      "A gym website works as your 24/7 front desk. It answers the common questions, shows your space through photos and videos, collects trial-session bookings, and sends every enquiry straight to your WhatsApp. For gyms that run classes — Zumba, CrossFit, yoga, functional training — a class schedule and online booking save your staff hours every week.",
      "We design gym websites with a bold, energetic look that matches your brand, and build them to load fast on mobile, because that's where almost every fitness search happens.",
    ],
    features: [
      { title: "Membership plans & pricing", description: "Clear plan cards for monthly, quarterly, and annual memberships with an enquiry button on each." },
      { title: "Free trial booking", description: "A simple form that books a trial session and notifies your team instantly on WhatsApp or email." },
      { title: "Class schedule", description: "A weekly timetable for group classes that your staff can update from an admin panel." },
      { title: "Trainer profiles", description: "Photos, certifications, and specialisations of your trainers to build trust." },
      { title: "Transformation gallery", description: "Before-and-after stories and member testimonials (with permission) as social proof." },
      { title: "Online payments", description: "Optional UPI and card payments for memberships, personal training, and supplements." },
      { title: "Facility tour", description: "Photo galleries and video walkthroughs of your equipment, changing rooms, and amenities." },
      { title: "Local SEO setup", description: "Pages and schema optimized for \"gym near me\" and area-specific fitness searches." },
    ],
    pages: ["Home", "About the gym", "Membership plans", "Classes & schedule", "Personal training", "Trainers", "Gallery", "Transformations", "Blog / fitness tips", "Contact & location"],
    integrations: ["WhatsApp", "Razorpay / UPI", "Google Maps", "Instagram feed", "Google Analytics", "Gym management software"],
    faqs: [
      { question: "Can members book trial sessions or classes online?", answer: "Yes. We add booking forms for trials and classes, and can connect them to your WhatsApp, email, or gym management software." },
      { question: "Can I accept membership payments on the website?", answer: "Yes. We integrate Razorpay, PhonePe, or other Indian payment gateways so members can pay by UPI, card, or net banking." },
      { question: "Will I be able to update prices and class timings myself?", answer: "Yes. You get an easy admin panel to change plans, prices, schedules, trainer details, and photos without a developer." },
      { question: "Do you also run Instagram and Meta ads for gyms?", answer: "Yes. Our social media marketing and lead generation teams run local ad campaigns to fill trial sessions and new memberships." },
    ],
    relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
  },

  "dental-clinic": {
    key: "dental-clinic",
    name: "Dental Clinic",
    audience: "dentists, dental clinics, and orthodontists",
    whyHeading: "Why Dental Clinics Need a Professional Website",
    why: [
      "Patients choosing a dentist are careful. They search \"dentist near me\" or \"root canal treatment\" on Google, then compare clinics based on the doctor's qualifications, treatments offered, clinic photos, reviews, and how easy it is to book. A professional website answers all of these questions and makes your clinic the obvious choice.",
      "A dental website also reduces calls to your front desk. Treatment pages explain procedures like implants, braces, aligners, whitening, and root canals in simple language, while an appointment form lets patients request a slot any time of day — even when the clinic is closed.",
      "We design dental clinic websites that feel clean, calm, and trustworthy, with clear doctor profiles and treatment information written to help patients understand their options. Everything is built mobile-first and optimized for local search.",
    ],
    features: [
      { title: "Online appointment booking", description: "Patients request a preferred date and time; your staff receives it instantly." },
      { title: "Treatment pages", description: "Individual pages for implants, braces, aligners, RCT, whitening, and more — each optimized for search." },
      { title: "Doctor profiles", description: "Qualifications, experience, and memberships presented clearly to build patient confidence." },
      { title: "Clinic gallery", description: "Photos of your clinic, equipment, and sterilisation setup to reassure patients." },
      { title: "Patient reviews", description: "Google reviews and testimonials displayed on the website." },
      { title: "WhatsApp & call buttons", description: "One-tap contact from any page for patients on mobile." },
      { title: "Smile gallery", description: "Before-and-after cases (with patient consent) that show your work." },
      { title: "Local SEO & Maps", description: "Medical schema, Google Business Profile, and map directions for local ranking." },
    ],
    pages: ["Home", "About the clinic", "Our doctors", "Treatments (individual pages)", "Smile gallery", "Patient reviews", "Clinic tour", "Blog / dental care tips", "FAQs", "Book appointment & contact"],
    integrations: ["Appointment forms", "WhatsApp", "Google Maps", "Google reviews", "Practo profile link", "Google Analytics"],
    faqs: [
      { question: "Can patients book appointments through the website?", answer: "Yes. We add an appointment request form, and can connect it to WhatsApp, email, or clinic management software." },
      { question: "Do you create separate pages for each treatment?", answer: "Yes. Separate treatment pages help patients find specific information and help your clinic rank for searches like \"dental implants\" or \"braces\" in your area." },
      { question: "Can you show our Google reviews on the website?", answer: "Yes. We can display your Google reviews and patient testimonials to build trust with new patients." },
      { question: "Is the website content medically accurate?", answer: "We write patient-friendly treatment content and share it with your doctors for review and approval before publishing." },
    ],
    relatedService: { label: "SEO services", href: "/services/seo" },
  },

  "pet-shop": {
    key: "pet-shop",
    name: "Pet Shop",
    audience: "pet shops, pet stores, groomers, and pet clinics",
    whyHeading: "Why Your Pet Shop Needs a Website",
    why: [
      "Pet parents shop online more than ever — for food, treats, toys, accessories, and grooming appointments. When they search \"pet shop near me\" or \"dog food delivery\", the stores with a proper website and online ordering get the orders. Stores relying only on walk-ins miss a growing share of customers.",
      "A pet shop website can do a lot of work for you: show your product range, take orders for home delivery, book grooming slots, and share pet-care advice that brings people back. For stores that also offer grooming, boarding, or vet services, each service gets its own page with pricing and booking.",
      "We design pet shop websites that are warm, friendly, and easy to shop, with product catalogues that your staff can update and delivery options that suit your area.",
    ],
    features: [
      { title: "Online store", description: "Product catalogue with categories for dogs, cats, birds, fish, and more, plus cart and checkout." },
      { title: "Grooming & service booking", description: "Book grooming, bathing, boarding, or vet visits in a few taps." },
      { title: "Local delivery options", description: "Delivery zones, pincode checks, and delivery charges configured for your area." },
      { title: "Brand filters", description: "Shop by brand, pet type, life stage, and price." },
      { title: "WhatsApp ordering", description: "Customers can place or confirm orders directly on WhatsApp." },
      { title: "Repeat orders", description: "Easy reordering for pet food and supplies customers buy every month." },
      { title: "Pet care blog", description: "Helpful articles that attract search traffic and build trust." },
      { title: "Local SEO", description: "Optimized for \"pet shop near me\" and pet-service searches in your area." },
    ],
    pages: ["Home", "Shop (by pet & category)", "Grooming services", "Boarding / vet services", "Brands", "Offers", "About us", "Pet care blog", "Delivery information", "Contact & location"],
    integrations: ["Razorpay / UPI", "WhatsApp", "Shiprocket / local delivery", "Google Maps", "Inventory sync", "Google Analytics"],
    faqs: [
      { question: "Can I sell pet products online with home delivery?", answer: "Yes. We build a full online store with cart, checkout, payment gateway, and delivery zones configured for your area." },
      { question: "Can customers book grooming appointments online?", answer: "Yes. We add a booking system for grooming, boarding, and other services, with notifications sent to your team." },
      { question: "Can I manage products and stock myself?", answer: "Yes. The admin panel lets you add products, change prices, run offers, and manage stock." },
      { question: "Can you connect the website to WhatsApp?", answer: "Yes. Orders and enquiries can be sent to your WhatsApp, and customers can chat with you from any page." },
    ],
    relatedService: { label: "Website development", href: "/services/website-development" },
  },

  "import-export": {
    key: "import-export",
    name: "Import Export",
    audience: "importers, exporters, and trading companies",
    whyHeading: "Why Import Export Businesses Need a Strong Website",
    why: [
      "For an import export company, the website is often the first thing an overseas buyer sees. Buyers searching for suppliers on Google, or checking you after finding you on a B2B portal, judge your credibility within seconds. A professional website with a clear product catalogue, certifications, and company details makes you look like a reliable trading partner.",
      "Unlike a retail website, an export website is built to generate enquiries and RFQs, not direct sales. Product pages list specifications, MOQ, packaging, and HS codes; enquiry forms capture the details you need to quote; and multi-currency or multi-language support helps buyers from different regions.",
      "We design import export websites with a corporate, trustworthy look and SEO targeted at the product and country searches international buyers actually use.",
    ],
    features: [
      { title: "Product catalogue", description: "Detailed product pages with specifications, MOQ, packaging, and downloadable PDFs." },
      { title: "RFQ / enquiry forms", description: "Structured forms capturing quantity, destination port, and requirements." },
      { title: "Certifications & compliance", description: "Display IEC, APEDA, FSSAI, ISO, and other certifications to build trust." },
      { title: "Multi-language option", description: "Optional translations for key buyer markets." },
      { title: "Company profile download", description: "Downloadable brochure and company profile for buyers." },
      { title: "Infrastructure showcase", description: "Warehouse, factory, and quality-control photos and videos." },
      { title: "WhatsApp Business", description: "International buyers can reach you instantly on WhatsApp." },
      { title: "International SEO", description: "Optimized for product-plus-supplier searches from global buyers." },
    ],
    pages: ["Home", "About the company", "Products (by category)", "Individual product pages", "Certifications", "Infrastructure", "Export markets", "Quality process", "Request a quote", "Contact"],
    integrations: ["RFQ forms", "WhatsApp Business", "Google Translate / multi-language", "Brochure downloads", "CRM integration", "Google Analytics"],
    faqs: [
      { question: "Will the website help me get international buyers?", answer: "A professional website builds credibility and, with SEO targeted at product and supplier searches, can bring direct enquiries from buyers. It also supports your B2B portal and trade fair leads." },
      { question: "Can the website be in multiple languages?", answer: "Yes. We can add multi-language support for your key export markets." },
      { question: "Can I add a large product catalogue?", answer: "Yes. The catalogue supports categories, filters, specifications, and PDF downloads, and you can add products from the admin panel." },
      { question: "Do you show prices on an export website?", answer: "Usually not. Most export websites use an RFQ form instead, since pricing depends on quantity, destination, and terms. We set it up however suits your business." },
    ],
    relatedService: { label: "SEO services", href: "/services/seo" },
  },

  ecommerce: {
    key: "ecommerce",
    name: "Ecommerce",
    audience: "online stores, D2C brands, and retailers",
    whyHeading: "Why Your Own Ecommerce Website Matters",
    why: [
      "Marketplaces like Amazon and Flipkart bring traffic, but they also take commissions, control your customer data, and let competitors advertise on your product pages. Your own ecommerce website gives you full control over pricing, branding, and customer relationships — and better margins on every order.",
      "A successful ecommerce website is more than a product list. It needs fast-loading product pages, a smooth checkout with UPI and COD, reliable shipping integration, GST invoicing, and an admin panel that makes order management easy. It also needs to be built with SEO so products appear in Google search and Google Shopping.",
      "We build ecommerce websites on Shopify, WooCommerce, or a custom Next.js stack depending on your catalogue size, budget, and growth plans, and explain the trade-offs clearly before we start.",
    ],
    features: [
      { title: "Fast product pages", description: "Optimized images, variants, size charts, and reviews on quick-loading pages." },
      { title: "Smooth checkout", description: "UPI, cards, net banking, wallets, and Cash on Delivery with minimal steps." },
      { title: "Shipping integration", description: "Shiprocket, Delhivery, or other courier integration with tracking." },
      { title: "GST invoicing", description: "Automatic GST-compliant invoices for every order." },
      { title: "Coupons & offers", description: "Discount codes, bundle offers, and festive sale campaigns." },
      { title: "Abandoned cart recovery", description: "Reminders via email or WhatsApp to recover lost sales." },
      { title: "Order management", description: "An admin panel for orders, returns, stock, and customers." },
      { title: "Ecommerce SEO", description: "Product schema, category pages, and Google Merchant Center setup." },
    ],
    pages: ["Home", "Category pages", "Product pages", "Cart & checkout", "Customer account", "Order tracking", "About the brand", "Blog", "Shipping & return policy", "Contact"],
    integrations: ["Razorpay / Cashfree / PhonePe", "Shiprocket / Delhivery", "WhatsApp notifications", "Google Merchant Center", "Meta Pixel", "Google Analytics 4"],
    faqs: [
      { question: "Should I use Shopify, WooCommerce, or a custom website?", answer: "It depends on your catalogue size, budget, and plans. Shopify is quick to launch, WooCommerce is flexible and affordable, and custom builds suit brands with specific needs. We recommend one after understanding your business." },
      { question: "Can you integrate Cash on Delivery and courier tracking?", answer: "Yes. We set up COD, prepaid payments, and courier integration with automatic tracking updates." },
      { question: "Can I manage orders and stock myself?", answer: "Yes. The admin panel lets you manage products, orders, returns, stock, and discounts." },
      { question: "Do you help with marketing after launch?", answer: "Yes. We offer SEO, Meta and Google ads, and social media marketing to drive sales to your store." },
    ],
    relatedService: { label: "Lead generation & performance marketing", href: "/services/lead-generation" },
  },

  lawyer: {
    key: "lawyer",
    name: "Lawyer",
    audience: "lawyers, advocates, and law firms",
    whyHeading: "Why Lawyers and Law Firms Need a Professional Website",
    why: [
      "People looking for legal help are often stressed and want someone they can trust. They search for a \"divorce lawyer near me\" or \"property lawyer\" and read carefully before calling. A professional website that explains your practice areas, experience, and approach helps them choose you with confidence.",
      "A law firm website must also respect professional rules. The Bar Council of India restricts solicitation and advertising by advocates, so the website should be informative rather than promotional — sharing factual information about your practice, qualifications, and areas of law, with a clear disclaimer. We design within these guidelines.",
      "We build clean, professional websites for advocates and law firms, with practice-area pages, lawyer profiles, and legal articles that help people understand their issues and find you through search.",
    ],
    features: [
      { title: "Practice area pages", description: "Separate informative pages for family, criminal, property, corporate, and other areas of law." },
      { title: "Advocate profiles", description: "Qualifications, enrolment, courts of practice, and experience presented factually." },
      { title: "Consultation request form", description: "A confidential form for people to request a consultation." },
      { title: "Bar Council disclaimer", description: "An entry disclaimer and informative tone in line with professional guidelines." },
      { title: "Legal articles", description: "Articles explaining common legal questions, which also help with search visibility." },
      { title: "Office & court details", description: "Office address, map, timings, and courts where you practise." },
      { title: "Secure & private", description: "SSL security and careful handling of enquiry information." },
      { title: "Local SEO", description: "Optimized for practice-area and location searches." },
    ],
    pages: ["Home (with disclaimer)", "About the firm", "Advocate profiles", "Practice areas", "Individual practice area pages", "Legal articles", "FAQs", "Consultation request", "Office location", "Contact"],
    integrations: ["Confidential enquiry forms", "Google Maps", "WhatsApp", "Appointment calendar", "SSL security", "Google Analytics"],
    faqs: [
      { question: "Are lawyers allowed to have websites in India?", answer: "Yes. Advocates can have websites that share factual information such as name, contact details, enrolment, qualifications, and areas of practice. We keep the content informative and add a disclaimer in line with Bar Council guidelines." },
      { question: "Can you create separate pages for each practice area?", answer: "Yes. Separate pages for areas like family, criminal, property, and corporate law help people find the right information and improve search visibility." },
      { question: "Can clients book consultations online?", answer: "Yes. We add a consultation request form and optional appointment calendar." },
      { question: "Do you write legal content for the website?", answer: "We can draft informative content based on your inputs, and all legal content is reviewed and approved by you before publishing." },
    ],
    relatedService: { label: "SEO services", href: "/services/seo" },
  },

  education: {
    key: "education",
    name: "Education",
    audience: "schools, colleges, and educational institutions",
    whyHeading: "Why Schools and Educational Institutions Need a Modern Website",
    why: [
      "Parents and students research thoroughly before choosing a school or college. They check the website for curriculum, faculty, facilities, fee structure, results, admissions process, and photos of campus life. An outdated or confusing website can cost you admissions, even if your institution is excellent.",
      "A modern education website also serves your existing community. Notices, circulars, event updates, academic calendars, and results can all be published online, reducing phone calls and paper notices. Online admission enquiry and application forms simplify the admissions process for parents and staff alike.",
      "We build school and college websites that are informative, easy to navigate, and simple for your staff to update, with admission-focused pages optimized for local search during peak admission season.",
    ],
    features: [
      { title: "Admission enquiry & forms", description: "Online enquiry and application forms that reach your admissions team instantly." },
      { title: "Notice board & circulars", description: "Publish notices, circulars, and announcements from the admin panel." },
      { title: "Academic information", description: "Curriculum, classes, subjects, and academic calendar in one place." },
      { title: "Faculty profiles", description: "Introduce your teachers and leadership to parents." },
      { title: "Campus gallery", description: "Photos and videos of facilities, events, sports, and activities." },
      { title: "Fee payment", description: "Optional online fee payment through Indian payment gateways." },
      { title: "Mandatory disclosures", description: "Pages for affiliation and mandatory public disclosures where required." },
      { title: "Admission-season SEO", description: "Optimized for school and admission searches in your area." },
    ],
    pages: ["Home", "About & principal's message", "Academics", "Admissions", "Faculty", "Facilities", "Gallery & events", "Notices & circulars", "Mandatory disclosure", "Contact"],
    integrations: ["Admission forms", "Online fee payment", "School ERP link", "WhatsApp", "YouTube videos", "Google Maps"],
    faqs: [
      { question: "Can parents apply for admission online?", answer: "Yes. We add online admission enquiry and application forms, with optional document uploads and fee payment." },
      { question: "Can our staff update notices and events?", answer: "Yes. Staff can publish notices, circulars, events, and gallery photos from a simple admin panel." },
      { question: "Can you add a mandatory disclosure page?", answer: "Yes. We create mandatory public disclosure pages in the format required by your board or affiliation." },
      { question: "Can the website link to our school ERP or app?", answer: "Yes. We can add links or integrations with your existing ERP, parent app, or learning platform." },
    ],
    relatedService: { label: "Website development", href: "/services/website-development" },
  },

  "coaching-institute": {
    key: "coaching-institute",
    name: "Coaching Institute",
    audience: "coaching institutes, tuition centres, and training academies",
    whyHeading: "Why Coaching Institutes Need a Lead-Generating Website",
    why: [
      "Students and parents compare coaching institutes online before visiting. They look at courses, batch timings, faculty, fees, results, and reviews. Institutes with a clear, professional website — and a quick way to book a demo class — get more walk-ins and admissions.",
      "Your website should work as an admissions machine. Course pages target searches like \"NEET coaching\", \"IELTS classes\", or \"class 10 tuition\" in your area; demo-class forms capture leads; and WhatsApp integration lets your counsellors follow up immediately. Adding results and student testimonials builds the trust parents need before paying fees.",
      "We build coaching institute websites focused on lead generation, with course pages, batch schedules, and optional online payments and study-material access for enrolled students.",
    ],
    features: [
      { title: "Course pages", description: "Individual pages for each course or exam with syllabus, duration, and fees." },
      { title: "Demo class booking", description: "A quick form to book a free demo class, sent to your counsellors instantly." },
      { title: "Batch schedules", description: "Upcoming batches and timings that your staff can update." },
      { title: "Results & testimonials", description: "Student results and reviews (with consent) to build trust." },
      { title: "Faculty profiles", description: "Show your teachers' qualifications and experience." },
      { title: "Online fee payment", description: "Collect fees and registration payments by UPI or card." },
      { title: "Student area", description: "Optional login for notes, tests, and recorded lectures." },
      { title: "Lead-focused SEO", description: "Optimized for course-plus-location searches in your area." },
    ],
    pages: ["Home", "About the institute", "Courses", "Individual course pages", "Batches & timings", "Faculty", "Results", "Testimonials", "Blog / exam updates", "Contact & demo booking"],
    integrations: ["Demo booking forms", "WhatsApp", "Razorpay / UPI", "LMS / student portal", "YouTube lectures", "Google Analytics"],
    faqs: [
      { question: "Can students book a demo class online?", answer: "Yes. We add a demo booking form, and leads are sent instantly to your counsellors via WhatsApp or email." },
      { question: "Can we collect fees online?", answer: "Yes. We integrate Indian payment gateways for registration and course fees." },
      { question: "Can we provide study material or recorded lectures to students?", answer: "Yes. We can build a student login area or integrate a learning management system for notes, tests, and videos." },
      { question: "Do you run ads to get admissions?", answer: "Yes. Our lead generation team runs Google and Meta campaigns targeted at students and parents in your area." },
    ],
    relatedService: { label: "Lead generation", href: "/services/lead-generation" },
  },

  trading: {
    key: "trading",
    name: "Trading",
    audience: "trading companies, wholesalers, and distributors",
    whyHeading: "Why Trading Companies Need a Professional Website",
    why: [
      "Wholesalers, distributors, and trading companies usually grow through relationships and referrals. But before a new retailer, dealer, or institutional buyer places a first order, they check you out online. A professional website with your product range, brands you deal in, and company details tells them you are an established, reliable supplier.",
      "A trading website also saves your sales team time. Instead of sending price lists and catalogues on WhatsApp again and again, you can share one link with your full range, categories, brand pages, and a dealer enquiry form. Registered dealers can even get a login to view trade prices or place repeat orders.",
      "We build trading company websites with a clean, business-like design, fast product catalogues that your staff can update, and SEO aimed at the product and brand searches your buyers make.",
    ],
    features: [
      { title: "Product & brand catalogue", description: "Categories, brands, and product pages with specifications and pack sizes." },
      { title: "Dealer / distributor enquiry", description: "Forms for retailers and dealers who want to buy from you or join your network." },
      { title: "Bulk quote requests", description: "Buyers can request quotes for bulk quantities directly from product pages." },
      { title: "Dealer login (optional)", description: "Registered dealers can see trade prices and place repeat orders." },
      { title: "Downloadable price lists", description: "PDF catalogues and price lists your team can update from the admin panel." },
      { title: "Authorised brand pages", description: "Pages for the brands you distribute, with authorisation details where applicable." },
      { title: "WhatsApp ordering", description: "Buyers can send product lists and orders straight to your sales team." },
      { title: "Product SEO", description: "Optimized for searches like \"[product] wholesaler\" and \"[brand] distributor\" in your area." },
    ],
    pages: ["Home", "About the company", "Product categories", "Product pages", "Brands we deal in", "Become a dealer", "Bulk enquiry / RFQ", "Downloads & price lists", "Blog / product updates", "Contact & warehouse location"],
    integrations: ["Enquiry & RFQ forms", "WhatsApp Business", "Dealer login", "PDF catalogues", "Tally / inventory export", "Google Analytics"],
    faqs: [
      { question: "Can we hide prices from the public and show them only to dealers?", answer: "Yes. Public visitors can see products and send enquiries, while registered dealers log in to view trade prices and place orders." },
      { question: "Can we upload a large product list at once?", answer: "Yes. Products can be imported in bulk from Excel or CSV, and updated later from the admin panel." },
      { question: "Is a trading website different from an import export website?", answer: "Yes. A trading website usually focuses on domestic dealers, retailers, and institutional buyers, with brand pages, dealer enquiries, and bulk orders. An export website is built for overseas buyers." },
      { question: "Can the website connect with Tally or our billing software?", answer: "Depending on your setup, we can export orders or sync product data with your billing or inventory software." },
    ],
    relatedService: { label: "Website development", href: "/services/website-development" },
  },

  b2b: {
    key: "b2b",
    name: "B2B",
    audience: "manufacturers, industrial suppliers, and B2B service companies",
    whyHeading: "Why B2B Companies Need a Website That Generates Leads",
    why: [
      "B2B buying has changed. Procurement teams, engineers, and business owners research suppliers online long before they speak to a salesperson. If your website doesn't clearly explain what you make or do, who you work with, and why you are credible, you are often left off the shortlist without ever knowing it.",
      "A strong B2B website works like a senior salesperson: it explains your capabilities, shows your infrastructure and certifications, answers technical questions, and captures qualified enquiries with the details your team needs to quote. Case studies and industry pages show buyers that you understand their specific requirements.",
      "We design B2B websites for manufacturers, industrial suppliers, and business service companies, with a professional look, detailed capability pages, and SEO targeted at the specific product and service searches procurement teams make.",
    ],
    features: [
      { title: "Capability pages", description: "Detailed pages on products, services, processes, and technical capabilities." },
      { title: "Industries served", description: "Separate pages for each industry you supply, speaking to their specific needs." },
      { title: "Qualified RFQ forms", description: "Forms capturing specifications, quantities, and timelines so your team can quote quickly." },
      { title: "Case studies", description: "Project and application examples that show real experience (shared with client permission)." },
      { title: "Certifications & quality", description: "ISO, quality processes, testing facilities, and compliance clearly presented." },
      { title: "Technical downloads", description: "Datasheets, brochures, and catalogues available for download." },
      { title: "CRM integration", description: "Enquiries sent straight to your CRM or sales inbox." },
      { title: "B2B SEO", description: "Content targeting specific product, service, and industry searches." },
    ],
    pages: ["Home", "About & infrastructure", "Products / services", "Individual capability pages", "Industries served", "Case studies", "Quality & certifications", "Downloads", "Request a quote", "Contact"],
    integrations: ["RFQ forms", "CRM (Zoho, HubSpot, Salesforce)", "LinkedIn Insight Tag", "Datasheet downloads", "WhatsApp Business", "Google Analytics 4"],
    faqs: [
      { question: "How is a B2B website different from a normal business website?", answer: "A B2B website focuses on detailed capabilities, technical information, credibility, and qualified lead capture, because buyers research carefully and involve several decision-makers." },
      { question: "Can we gate brochures and datasheets behind a form?", answer: "Yes. Downloads can be open or require a short form, which helps you capture leads from serious buyers." },
      { question: "Can you connect the website to our CRM?", answer: "Yes. We integrate forms with Zoho CRM, HubSpot, Salesforce, or other CRMs that support integrations." },
      { question: "Do you run LinkedIn and Google ads for B2B lead generation?", answer: "Yes. Our lead generation team runs Google Search and LinkedIn campaigns aimed at business buyers." },
    ],
    relatedService: { label: "Lead generation", href: "/services/lead-generation" },
  },

  healthcare: {
    key: "healthcare",
    name: "Healthcare",
    audience: "hospitals, multi-speciality clinics, diagnostic labs, and physiotherapy centres",
    whyHeading: "Why Healthcare Providers Need a Trustworthy Website",
    why: [
      "When people need medical care, they look for information and reassurance. They search for a specialist, a diagnostic test, or a nearby clinic, then check the doctors' qualifications, available services, timings, and reviews. A clear, professional website helps patients make that decision with confidence.",
      "Healthcare websites also reduce pressure on your front desk. Appointment requests, test bookings, report downloads, doctor schedules, and directions can all be handled online, so staff can focus on patients in the building.",
      "Healthcare content must be accurate and responsible. We write patient-friendly information that your doctors review before publishing, avoid exaggerated claims or guaranteed outcomes, and structure the site in line with medical advertising norms in India.",
    ],
    features: [
      { title: "Doctor directory", description: "Profiles with qualifications, specialities, and OPD timings, filterable by department." },
      { title: "Appointment booking", description: "Book by doctor, department, or date, with notifications to your team." },
      { title: "Departments & services", description: "Separate pages for each speciality, test, or service you offer." },
      { title: "Lab test booking", description: "Test and package booking with home sample collection options." },
      { title: "Report downloads", description: "Secure access for patients to download test reports." },
      { title: "Emergency information", description: "Emergency contact, ambulance number, and directions prominently displayed." },
      { title: "Health information articles", description: "Accurate, doctor-reviewed articles that answer common patient questions." },
      { title: "Medical schema & local SEO", description: "Structured data for medical organisations, doctors, and locations." },
    ],
    pages: ["Home", "About the hospital / clinic", "Departments", "Doctors", "Services & tests", "Health packages", "Book appointment", "Patient information", "Health articles", "Contact & emergency"],
    integrations: ["Appointment system", "Hospital / lab software (HIS/LIS)", "Report download portal", "Payment gateway", "WhatsApp", "Google Maps"],
    faqs: [
      { question: "Can patients download lab reports from the website?", answer: "Yes. We can build a secure report portal or connect to your existing lab information system." },
      { question: "Can the website integrate with our hospital management software?", answer: "In many cases, yes. We review your software's integration options and connect appointments or reports where possible." },
      { question: "Who writes the medical content?", answer: "We draft clear, patient-friendly content based on your inputs, and your doctors review and approve it before publishing." },
      { question: "Do you follow rules for medical advertising?", answer: "We avoid exaggerated claims, guaranteed outcomes, and misleading testimonials, and keep content informative. Final medical content is always approved by your team." },
    ],
    relatedService: { label: "SEO services", href: "/services/seo" },
  },

  printing: {
    key: "printing",
    name: "Printing",
    audience: "printing presses, print shops, and packaging printers",
    whyHeading: "Why Printing Businesses Need a Website",
    why: [
      "Businesses searching for visiting cards, brochures, flex banners, packaging, labels, or corporate printing usually start on Google. They want to see what you print, the paper and finish options, rough pricing or minimum quantities, turnaround time, and whether they can upload their design online. Print shops without a website miss these orders.",
      "A printing website can take orders and quote requests around the clock. Customers can choose a product, select size, paper, quantity, and finish, upload their artwork, and pay online or request a quote. For custom jobs like packaging and large-format printing, a detailed quote form collects everything you need.",
      "We build printing websites with product pages for every print category, file upload, and price calculators where your pricing allows, along with SEO for the print services people search for locally.",
    ],
    features: [
      { title: "Print product pages", description: "Visiting cards, brochures, flyers, banners, stickers, packaging, and more — each with its own page." },
      { title: "Artwork upload", description: "Customers upload print-ready files (PDF, AI, CDR, PSD) with their order." },
      { title: "Price calculator", description: "Price by size, paper, quantity, and finish for standard products." },
      { title: "Custom quote form", description: "Detailed requests for packaging, large-format, and bulk jobs." },
      { title: "Online payments", description: "UPI and card payments for standard print orders." },
      { title: "Design service add-on", description: "Option for customers who need you to design their artwork." },
      { title: "Portfolio gallery", description: "Photos of finished print work to show quality and finishes." },
      { title: "Local print SEO", description: "Optimized for searches like \"visiting card printing near me\" and \"flex printing\"." },
    ],
    pages: ["Home", "Print products", "Individual product pages", "Packaging printing", "Large-format / flex", "Corporate printing", "Upload artwork / order", "Get a quote", "Portfolio", "Contact & shop location"],
    integrations: ["File upload", "Price calculator", "Razorpay / UPI", "WhatsApp", "Order tracking", "Google Maps"],
    faqs: [
      { question: "Can customers upload their design files on the website?", answer: "Yes. We add secure file uploads for PDF, AI, CDR, PSD, and image files, attached to the order or quote request." },
      { question: "Can the website calculate prices automatically?", answer: "Yes, for standard products. We build a calculator based on your pricing for size, paper, quantity, and finish. Custom jobs use a quote form." },
      { question: "Can we accept payments online for print orders?", answer: "Yes. We integrate Indian payment gateways for UPI, card, and net banking payments." },
      { question: "Can we show samples of our print quality?", answer: "Yes. A portfolio gallery with photos of finished products helps customers judge quality and finishes." },
    ],
    relatedService: { label: "Branding & design", href: "/services/branding" },
  },

  perfume: {
    key: "perfume",
    name: "Perfume",
    audience: "perfume brands, attar makers, and fragrance stores",
    whyHeading: "Why Perfume Brands Need Their Own Website",
    why: [
      "Fragrance is hard to sell online because customers can't smell it. The brands that succeed use their website to describe each scent in a way people can imagine — top, heart, and base notes, mood, occasion, longevity — and back it with great photography, reviews, and discovery sets or testers.",
      "Your own website also lets you build a brand, not just list products. Marketplaces reduce perfume to a price comparison. On your website, you control the story, the packaging presentation, the gifting experience, and the relationship with repeat customers.",
      "We design perfume and attar websites with a premium look, detailed fragrance pages, filters by scent family and occasion, and a smooth checkout — along with product SEO for fragrance searches.",
    ],
    features: [
      { title: "Fragrance notes display", description: "Top, heart, and base notes presented clearly on every product page." },
      { title: "Scent family filters", description: "Shop by woody, floral, oud, fresh, citrus, musky, and more." },
      { title: "Occasion & mood", description: "Filters and collections for daily wear, office, evening, and gifting." },
      { title: "Discovery sets & testers", description: "Sample kits that help customers try before buying full bottles." },
      { title: "Gift options", description: "Gift wrapping, messages, and gift sets for festivals and occasions." },
      { title: "Reviews", description: "Customer reviews on longevity, projection, and scent experience." },
      { title: "Premium product photography layout", description: "Large, elegant visuals that reflect your brand's positioning." },
      { title: "Fragrance SEO", description: "Optimized for searches like \"long-lasting perfume for men\" and \"oud attar\"." },
    ],
    pages: ["Home", "Shop all", "Men / women / unisex", "Attars & ittars", "Scent families", "Discovery sets", "Gift sets", "Our story", "Fragrance guide / blog", "Contact"],
    integrations: ["Shopify / WooCommerce", "Razorpay / UPI / COD", "Shiprocket", "Reviews app", "WhatsApp", "Meta Pixel"],
    faqs: [
      { question: "How do you sell fragrances online when customers can't smell them?", answer: "We present detailed notes, scent descriptions, occasions, and reviews, and recommend discovery sets or testers so customers can try before buying full bottles." },
      { question: "Can we sell attars and ittars alongside perfumes?", answer: "Yes. We can create separate collections for attars, ittars, perfumes, and body mists with their own filters." },
      { question: "Can perfumes be shipped by courier?", answer: "Perfumes are often classed as restricted goods by couriers. We integrate shipping partners that handle fragrances, and you should confirm the specific rules with your courier." },
      { question: "Can you help with product photography and packaging design?", answer: "Our branding team can design packaging and guide product photography to match your brand." },
    ],
    relatedService: { label: "Branding & packaging design", href: "/services/branding" },
  },

  beauty: {
    key: "beauty",
    name: "Beauty",
    audience: "beauty salons, spas, makeup artists, and beauty brands",
    whyHeading: "Why Beauty Businesses Need a Website, Not Just Instagram",
    why: [
      "Instagram is great for showing your work, but it isn't built for bookings, service menus, or Google search. When someone searches for a \"bridal makeup artist\", \"hair spa near me\", or \"best salon\", Google shows businesses with websites and strong local profiles. A website turns that search traffic into appointments.",
      "A beauty website brings together everything clients want to know: your service menu with prices, stylists and artists, before-and-after work, packages and memberships, reviews, and an easy way to book. For bridal and event makeup, a detailed portfolio and enquiry form help you win high-value bookings.",
      "We design beauty websites that look as polished as your work, with online booking, service menus your staff can update, and local SEO for the services people search for. For beauty product brands, we build online stores with ingredient details and routine guides.",
    ],
    features: [
      { title: "Service menu & prices", description: "Hair, skin, nails, makeup, and spa services with prices and duration." },
      { title: "Online appointment booking", description: "Clients choose a service, stylist, date, and time slot." },
      { title: "Bridal & event makeup", description: "Dedicated portfolio and enquiry pages for bridal, engagement, and party makeup." },
      { title: "Before & after gallery", description: "Showcase your work with client permission." },
      { title: "Stylist profiles", description: "Introduce your team and their specialisations." },
      { title: "Packages & memberships", description: "Present packages, memberships, and gift vouchers." },
      { title: "Beauty product store", description: "Optional online shop for your own products or retail brands." },
      { title: "Local beauty SEO", description: "Optimized for \"salon near me\", \"bridal makeup\", and service-specific searches." },
    ],
    pages: ["Home", "Services & prices", "Hair", "Skin & facials", "Makeup & bridal", "Nails & spa", "Gallery", "Our team", "Book an appointment", "Contact & location"],
    integrations: ["Booking system", "Razorpay / UPI", "Instagram feed", "WhatsApp", "Google reviews", "Salon software link"],
    faqs: [
      { question: "Can clients book salon appointments online?", answer: "Yes. We add booking by service, stylist, and time slot, or connect your existing salon software." },
      { question: "Can we show our Instagram work on the website?", answer: "Yes. We can embed your Instagram feed and also build a curated gallery for your best work." },
      { question: "Do you build websites for makeup artists?", answer: "Yes. Makeup artist websites focus on portfolio, bridal packages, and enquiry forms for event dates." },
      { question: "Can we sell beauty products online as well?", answer: "Yes. We can add an online store for skincare, haircare, or cosmetics alongside your services." },
    ],
    relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
  },

  ayurvedic: {
    key: "ayurvedic",
    name: "Ayurvedic",
    audience: "Ayurvedic clinics, Panchakarma centres, vaidyas, and Ayurvedic product brands",
    whyHeading: "Why Ayurvedic Clinics and Brands Need a Professional Website",
    why: [
      "Interest in Ayurveda, Panchakarma, and natural wellness continues to grow, and people research carefully before choosing a vaidya, a therapy centre, or an Ayurvedic product. They look for the practitioner's qualifications, the therapies offered, the approach, and a clean, trustworthy centre. A professional website presents all of this with the credibility Ayurveda deserves.",
      "For Ayurvedic clinics, a website explains consultations and therapies like Panchakarma, Abhyanga, and Shirodhara in simple language, shows your centre, and makes booking a consultation easy. For Ayurvedic product brands, an online store with ingredient information, usage instructions, and licence details builds buyer confidence.",
      "Ayurvedic content must be responsible. Indian law, including the Drugs and Magic Remedies Act and AYUSH advertising guidelines, restricts claims about curing diseases. We write informative content that describes therapies and products accurately without promising cures, and your practitioners approve everything before publishing.",
    ],
    features: [
      { title: "Therapy pages", description: "Informative pages for Panchakarma, Abhyanga, Shirodhara, Nasya, and other therapies." },
      { title: "Consultation booking", description: "Online booking for in-person or video consultations with your vaidya." },
      { title: "Practitioner profiles", description: "BAMS/MD qualifications, registration, and experience presented clearly." },
      { title: "Wellness packages", description: "Present detox, rejuvenation, and residential packages with inclusions." },
      { title: "Ayurvedic product store", description: "Products with ingredients, usage, licence details, and safe-use information." },
      { title: "Compliance-conscious content", description: "Informative descriptions without disease-cure claims, in line with AYUSH norms." },
      { title: "Centre gallery", description: "Photos of therapy rooms, herbs, and your centre's environment." },
      { title: "Wellness SEO", description: "Optimized for searches like \"Panchakarma centre\" and \"Ayurvedic doctor near me\"." },
    ],
    pages: ["Home", "About & philosophy", "Our vaidyas", "Therapies", "Panchakarma", "Wellness packages", "Products / shop", "Book consultation", "Ayurveda articles", "Contact & location"],
    integrations: ["Consultation booking", "Video consultation link", "Razorpay / UPI", "WhatsApp", "Shiprocket", "Google Maps"],
    faqs: [
      { question: "Can we sell Ayurvedic medicines and products online?", answer: "Yes. We build an online store with ingredient, usage, and licence details. You should ensure products and claims comply with AYUSH regulations, and we keep product copy informative." },
      { question: "Can patients book online video consultations?", answer: "Yes. We add booking with video consultation links and optional advance payment." },
      { question: "Can you write content about diseases Ayurveda helps with?", answer: "We write informative content about therapies and Ayurvedic principles, but avoid claims that a product or therapy cures specific diseases, since Indian law restricts such claims." },
      { question: "Can we show our Panchakarma packages and prices?", answer: "Yes. We present packages with duration, inclusions, and pricing, along with a booking or enquiry form." },
    ],
    relatedService: { label: "SEO services", href: "/services/seo" },
  },
};

/** Unique intro + local FAQ for every industry × location page. */
const localCopy: Record<`${IndustryKey}-${LocationKey}`, { intro: string; faq: Faq }> = {
  "gym-gurgaon": {
    intro: "Gurgaon has a crowded fitness market, from premium gyms on Golf Course Road to neighbourhood fitness centres in Sector 56, South City, and New Gurgaon. Working professionals here compare gyms online during their commute and book trials at night. Grox Media builds gym websites that make your gym the one they choose — fast, visual, and built to turn searches into trial bookings.",
    faq: { question: "Can my gym rank for area searches like \"gym near Sohna Road\"?", answer: "We build area-focused content, schema, and a Google Business Profile setup that target the Gurgaon sectors you serve. Rankings take time and depend on competition, reviews, and ongoing SEO, but a well-structured website is the foundation." },
  },
  "gym-dwarka": {
    intro: "Dwarka's residential sectors are full of families and young professionals who want a gym close to home. When someone in Sector 10 or Sector 12 searches for a gym, they pick from the few that look professional online. Grox Media designs gym websites for Dwarka that show your facility, trainers, and plans clearly and turn local searches into trial sessions.",
    faq: { question: "Can my gym show up for searches from nearby sectors in Dwarka?", answer: "Yes, we structure your website and Google Business Profile around the sectors and nearby areas you serve, like Palam and Uttam Nagar. Ranking also depends on reviews and ongoing SEO, which we can help with." },
  },
  "dental-clinic-gurgaon": {
    intro: "Patients in Gurgaon expect healthcare providers to be as professional online as they are in the clinic. Whether your practice is in DLF Phase 1, Sushant Lok, or Sector 82, people compare dentists on Google before booking. Grox Media builds dental clinic websites for Gurgaon that present your doctors, treatments, and clinic clearly and make booking an appointment effortless.",
    faq: { question: "Can you help my dental clinic appear in Google Maps results in Gurgaon?", answer: "Yes. We optimize your Google Business Profile, add medical and local schema to your website, and create treatment pages that target searches in your part of Gurgaon." },
  },
  "dental-clinic-dwarka": {
    intro: "In Dwarka, families usually choose a dentist within their own sector or the next one over. They look for a clinic with good reviews, clear treatment information, and easy appointments. Grox Media designs dental clinic websites for Dwarka that build that trust, rank for local dental searches, and let patients book a visit in a few taps.",
    faq: { question: "Can patients from nearby sectors find my clinic online?", answer: "Yes. We target the Dwarka sectors and nearby areas you serve through your website content, schema, and Google Business Profile, so patients searching for dentists nearby can find you." },
  },
  "pet-shop-gurgaon": {
    intro: "Gurgaon has a large and growing community of pet parents, particularly in the high-rise societies along Golf Course Road, Sohna Road, and New Gurgaon. They prefer ordering pet food and supplies online and booking grooming at convenient times. Grox Media builds pet shop websites for Gurgaon with online ordering, local delivery, and grooming bookings.",
    faq: { question: "Can I set delivery zones for specific Gurgaon sectors?", answer: "Yes. We configure delivery by pincode or sector, with different delivery charges or minimum order values for each zone." },
  },
  "pet-shop-dwarka": {
    intro: "Pet owners across Dwarka's sectors want a reliable local store for food, accessories, and grooming, with quick home delivery. Grox Media builds pet shop websites for Dwarka that let customers browse your range, order online or on WhatsApp, and book grooming — helping your store compete with big online platforms.",
    faq: { question: "Can customers in Dwarka order on WhatsApp instead of checking out online?", answer: "Yes. We can offer both options: a full online checkout and a WhatsApp ordering button that sends the cart details straight to your number." },
  },
  "import-export-gurgaon": {
    intro: "Gurgaon is home to many trading companies and export houses, with close access to IGI Airport, ICD Tughlakabad, and the Delhi–Mumbai industrial corridor. International buyers expect a supplier's website to look as professional as any corporate office in Cyber City. Grox Media builds import export websites for Gurgaon businesses that present your products and credentials to global buyers.",
    faq: { question: "Do you work with export houses in Gurgaon's industrial areas?", answer: "Yes. We work with trading companies and manufacturers across Gurgaon, including Udyog Vihar, IMT Manesar, and the Sector 37 industrial area." },
  },
  "import-export-dwarka": {
    intro: "Dwarka's location next to IGI Airport and the Dwarka Expressway makes it a practical base for importers, exporters, and air-cargo-focused traders. Grox Media builds import export websites for Dwarka-based businesses with detailed product catalogues, certifications, and RFQ forms designed to win the trust of overseas buyers.",
    faq: { question: "Can the website highlight air cargo or quick shipping from IGI Airport?", answer: "Yes. We can include your logistics capabilities, shipping options, and delivery timelines as part of your company profile and product pages." },
  },
  "ecommerce-gurgaon": {
    intro: "Gurgaon is one of India's busiest startup and D2C hubs, and online shoppers here are used to fast, polished shopping experiences. Grox Media builds ecommerce websites for Gurgaon brands that match that standard — quick product pages, smooth UPI checkout, reliable shipping, and SEO that helps you sell beyond marketplaces.",
    faq: { question: "Do you work with D2C startups in Gurgaon?", answer: "Yes. We work with early-stage and growing D2C brands, from launching a first store to rebuilding an existing one for speed and conversions." },
  },
  "ecommerce-dwarka": {
    intro: "Many Dwarka retailers and home-based brands are moving online to reach customers beyond their neighbourhood. Grox Media builds ecommerce websites for Dwarka businesses with product catalogues, UPI and COD checkout, courier integration, and simple order management — so you can sell across Delhi NCR and the rest of India.",
    faq: { question: "Can a local Dwarka store also sell across India online?", answer: "Yes. With courier integration, you can offer local delivery around Dwarka and ship to customers anywhere in India from the same website." },
  },
  "lawyer-gurgaon": {
    intro: "Gurgaon's corporate, real-estate, and family law needs keep advocates and law firms busy, and clients research online before choosing counsel. Whether you practise at the Gurugram district courts or advise companies in Cyber City, Grox Media builds professional, Bar Council-conscious websites that present your practice areas and experience clearly.",
    faq: { question: "Can my website mention the courts where I practise in Gurgaon?", answer: "Yes. Factual information such as the courts and tribunals where you practise, like the Gurugram district courts or Punjab & Haryana High Court, can be included in an informative way." },
  },
  "lawyer-dwarka": {
    intro: "With the Dwarka Court complex in Sector 10, Dwarka has a large community of advocates serving clients across South-West Delhi. People searching for legal help here want clear, factual information about a lawyer's practice. Grox Media builds informative, professional websites for Dwarka advocates and law firms, designed within Bar Council guidelines.",
    faq: { question: "Can my website mention that I practise at Dwarka Courts?", answer: "Yes. Factual details such as the courts where you practise, your enrolment, and your areas of law can be shared in an informative way with an appropriate disclaimer." },
  },
  "education-gurgaon": {
    intro: "Gurgaon has a wide range of schools, from international and CBSE schools on Golf Course Road to growing institutions in New Gurgaon's sectors. Parents here compare schools online in detail before visiting. Grox Media builds education websites for Gurgaon institutions that present academics, facilities, and admissions clearly and make enquiries simple.",
    faq: { question: "Can you optimize our school website for admission-season searches in Gurgaon?", answer: "Yes. We create admission pages and local SEO targeting searches like \"CBSE school in Sector 57\" or \"best school near Sohna Road\" ahead of admission season." },
  },
  "education-dwarka": {
    intro: "Dwarka is known for its many schools spread across its sectors, and parents here often compare several options before admission season. Grox Media builds education websites for Dwarka schools and colleges that clearly present academics, facilities, and admissions, and make it easy for parents to enquire and apply online.",
    faq: { question: "Can our school rank for searches like \"school in Dwarka Sector 12\"?", answer: "We build sector-focused admission content, schema, and Google Business Profile optimization to target these searches. Results also depend on reviews and ongoing SEO." },
  },
  "coaching-institute-gurgaon": {
    intro: "Gurgaon's coaching institutes serve students preparing for JEE, NEET, CAT, IELTS, and school exams, as well as working professionals upskilling after office hours. Grox Media builds coaching institute websites for Gurgaon that showcase your courses and results and turn every visitor into a demo-class booking.",
    faq: { question: "Can we target both students and working professionals in Gurgaon?", answer: "Yes. We create separate course pages and messaging for school students, competitive exam aspirants, and professionals, each optimized for the right searches." },
  },
  "coaching-institute-dwarka": {
    intro: "Dwarka has a large student population, and families prefer coaching centres close to home in sectors like 6, 7, 10, and 12. When parents search for tuition or exam coaching nearby, a professional website with results and easy demo booking makes the difference. Grox Media builds coaching institute websites for Dwarka that fill your batches.",
    faq: { question: "Can parents from nearby areas like Uttam Nagar and Palam find us?", answer: "Yes. We target the sectors and neighbouring areas you draw students from through your website content and Google Business Profile." },
  },
  "trading-gurgaon": {
    intro: "Gurgaon's trading and distribution businesses supply everything from FMCG, electrical goods, and building materials to IT hardware and industrial consumables, serving retailers, contractors, and corporate buyers across the NCR. Grox Media builds trading company websites for Gurgaon businesses that present your brands and product range professionally and turn online searches into dealer and bulk enquiries.",
    faq: { question: "Can our website target buyers across Gurgaon and the wider NCR?", answer: "Yes. We structure product and brand pages around Gurgaon and NCR searches, and can add service-area information for the regions you supply." },
  },
  "trading-dwarka": {
    intro: "Dwarka and its surrounding areas — Palam, Bijwasan, Uttam Nagar, and the Dwarka Expressway belt — have many wholesalers and distributors supplying retailers across West and South-West Delhi. Grox Media builds trading websites for Dwarka businesses that show your product range clearly and make it easy for retailers to enquire and reorder.",
    faq: { question: "Can retailers in West Delhi find our wholesale business online?", answer: "Yes. We optimize your product, brand, and location pages for wholesale searches in Dwarka and nearby areas of West and South-West Delhi." },
  },
  "b2b-gurgaon": {
    intro: "Gurgaon and Manesar form one of India's largest industrial and corporate clusters, with auto component makers, engineering firms, electronics manufacturers, and B2B service companies supplying businesses across India and abroad. Grox Media builds B2B websites for Gurgaon companies that explain your capabilities clearly and bring in qualified enquiries from procurement teams.",
    faq: { question: "Do you work with manufacturers in IMT Manesar and Udyog Vihar?", answer: "Yes. We build websites for manufacturers and industrial suppliers across Gurgaon's industrial areas, including IMT Manesar, Udyog Vihar, and Sector 37." },
  },
  "b2b-dwarka": {
    intro: "Dwarka's proximity to IGI Airport, the Dwarka Expressway, and industrial areas in West Delhi and Gurgaon makes it a practical base for B2B suppliers, logistics-linked businesses, and service companies. Grox Media builds B2B websites for Dwarka businesses that present your capabilities professionally and capture qualified business enquiries.",
    faq: { question: "Can a smaller B2B supplier compete online with larger companies?", answer: "Yes. A focused website with clear capability pages, certifications, and specific product content can rank for niche searches that larger companies often ignore." },
  },
  "healthcare-gurgaon": {
    intro: "Gurgaon is one of India's leading healthcare destinations, with large multi-speciality hospitals alongside a growing network of clinics, diagnostic centres, physiotherapy centres, and specialist practices across the city. In a market this competitive, patients compare providers online. Grox Media builds healthcare websites for Gurgaon providers that are clear, trustworthy, and easy to book.",
    faq: { question: "Can a clinic compete online with large hospitals in Gurgaon?", answer: "Yes. Specialist clinics and diagnostic centres can rank well for specific services and local searches by having detailed service pages, doctor profiles, and a strong Google Business Profile." },
  },
  "healthcare-dwarka": {
    intro: "Dwarka is served by several hospitals along with many clinics, nursing homes, diagnostic labs, and physiotherapy centres across its sectors. Families usually choose providers close to home, and they check doctors, services, and timings online first. Grox Media builds healthcare websites for Dwarka that help patients find and book you easily.",
    faq: { question: "Can patients in Dwarka book home sample collection online?", answer: "Yes. For diagnostic labs we add test booking with home sample collection, covering the sectors and areas you serve." },
  },
  "printing-gurgaon": {
    intro: "Gurgaon's thousands of offices, startups, events, and retail brands create steady demand for corporate stationery, marketing collateral, event branding, signage, and packaging. Businesses here expect to order quickly and online. Grox Media builds printing websites for Gurgaon print shops and presses with product pages, artwork upload, and quick quotes.",
    faq: { question: "Can we target corporate clients in Gurgaon for bulk printing?", answer: "Yes. We create dedicated corporate printing pages for stationery, event branding, and bulk orders, aimed at offices and HR and admin teams." },
  },
  "printing-dwarka": {
    intro: "Printing businesses in Dwarka serve schools, coaching centres, local shops, events, and weddings across the sectors, along with offices in nearby areas. Grox Media builds printing websites for Dwarka print shops that show your services, take artwork uploads and quote requests, and bring in local orders from Google.",
    faq: { question: "Can customers order wedding cards and invitations online?", answer: "Yes. We can add a wedding and event invitations section with designs, customisation options, and an enquiry or order form." },
  },
  "perfume-gurgaon": {
    intro: "Gurgaon is home to many premium lifestyle and D2C brands, and its shoppers are used to high-end retail in malls like Ambience and DLF CyberHub. Perfume and attar brands selling here need a website that feels just as premium. Grox Media builds perfume websites for Gurgaon brands with elegant design, detailed fragrance pages, and a smooth checkout.",
    faq: { question: "Can we launch a premium perfume brand online from Gurgaon?", answer: "Yes. We build the brand website, online store, and product pages, and our branding and marketing teams can support packaging, launch content, and ads." },
  },
  "perfume-dwarka": {
    intro: "Perfume stores and attar makers in Dwarka serve a loyal local customer base, and many now want to reach buyers across Delhi and India. Grox Media builds perfume and attar websites for Dwarka businesses with scent descriptions, gift sets, and online ordering that brings your fragrances to a wider audience.",
    faq: { question: "Can a local perfume shop sell attars online across India?", answer: "Yes. We build an online store with courier integration so you can ship across India, subject to your courier's rules for fragrance products." },
  },
  "beauty-gurgaon": {
    intro: "Gurgaon has a busy beauty and grooming market, from premium salons on Golf Course Road and in DLF's malls to neighbourhood salons, spas, and in-demand bridal makeup artists. Clients here compare services, prices, and portfolios online before booking. Grox Media builds beauty websites for Gurgaon that look polished and make booking effortless.",
    faq: { question: "Can we offer at-home beauty services through the website?", answer: "Yes. We can add home-service booking with service areas, time slots, and address details for clients across Gurgaon." },
  },
  "beauty-dwarka": {
    intro: "Salons, beauty parlours, and makeup artists in Dwarka serve a large local clientele, with high demand for bridal, party, and festive services. Grox Media builds beauty websites for Dwarka businesses with service menus, galleries, and online booking that turn local searches into appointments.",
    faq: { question: "Can we highlight bridal makeup packages for Dwarka clients?", answer: "Yes. We create a dedicated bridal section with packages, portfolio, and an enquiry form for event dates." },
  },
  "ayurvedic-gurgaon": {
    intro: "Health-conscious professionals and families in Gurgaon are increasingly turning to Ayurveda for wellness, stress management, and Panchakarma. They research practitioners and centres carefully before booking. Grox Media builds Ayurvedic websites for Gurgaon clinics, wellness centres, and product brands that present your expertise with credibility and responsible content.",
    faq: { question: "Can we offer corporate wellness programmes through the website?", answer: "Yes. We can add a corporate wellness page presenting programmes for Gurgaon companies, with an enquiry form for HR teams." },
  },
  "ayurvedic-dwarka": {
    intro: "Ayurvedic clinics, vaidyas, and Panchakarma centres in Dwarka serve families who value traditional wellness close to home. Grox Media builds Ayurvedic websites for Dwarka practices that explain your therapies clearly, present your practitioners' qualifications, and make it easy to book a consultation.",
    faq: { question: "Can we list both clinic consultations and home therapy services?", answer: "Yes. We can present in-clinic consultations, therapies, and any home services separately, each with booking or enquiry options." },
  },
};

export type IndustryPage = {
  slug: string;
  industry: Industry;
  location: Location;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  depth: LocalDepth;
  extras: IndustryExtras;
  faqs: Faq[];
};

export const industrySlug = (i: string, l: LocationKey) =>
  `${i}-website-designing-company-in-${l}`;

function buildPage(
  industry: Industry,
  location: Location,
  copy: { intro: string; faq: Faq },
  depth: LocalDepth,
  extras: IndustryExtras
): IndustryPage {
  const title = `${industry.name} Website Designing Company in ${location.name}`;
  return {
    slug: industrySlug(industry.key, location.key),
    industry,
    location,
    title,
    metaTitle: title,
    metaDescription: depth.metaDescription,
    intro: copy.intro,
    depth,
    extras,
    faqs: [copy.faq, ...depth.faqs, ...industry.faqs],
  };
}

const locationKeys = Object.keys(locations) as LocationKey[];

export const industryPages: IndustryPage[] = [
  ...(Object.keys(industries) as IndustryKey[]).flatMap((ik) =>
    locationKeys.map((lk) =>
      buildPage(industries[ik], locations[lk], localCopy[`${ik}-${lk}`], localDepth[`${ik}-${lk}`], industryExtras[ik])
    )
  ),
  ...industryBundles.flatMap((b) =>
    locationKeys.map((lk) =>
      buildPage(b.industry, locations[lk], b.local[lk], b.local[lk].depth, b.extras)
    )
  ),
];

export const getIndustryPage = (slug: string) =>
  industryPages.find((p) => p.slug === slug);
