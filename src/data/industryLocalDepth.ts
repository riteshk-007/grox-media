/**
 * Page-specific local content for each industry × location page. This is
 * what makes every page unique beyond the shared industry copy. Gurgaon is
 * the priority market, so its pages carry deeper coverage than Dwarka's.
 * Grox Media's office is in Noida — copy says "serving", never "based in".
 */

type Faq = { question: string; answer: string };

export type LocalDepth = {
  metaDescription: string;
  heading: string;
  paragraphs: string[];
  points: { title: string; description: string }[];
  faqs: Faq[];
};

export const localDepth: Record<string, LocalDepth> = {
  /* ───────────────────────── GYM ───────────────────────── */
  "gym-gurgaon": {
    metaDescription:
      "Gym website designing company in Gurgaon (Gurugram) for gyms, CrossFit boxes & fitness studios. Trial booking, membership plans, class schedules & local SEO. Free quote: +91 92668 06477.",
    heading: "Gym Websites for Gurgaon's Fitness Market",
    paragraphs: [
      "Gurgaon's fitness scene ranges from premium clubs inside DLF and Golf Course Road societies to neighbourhood gyms in Sector 14, Palam Vihar, and New Gurgaon, plus a growing number of CrossFit boxes, yoga studios, and functional-training spaces. With so many options within a few kilometres, members choose based on what they see online first.",
      "Most Gurgaon members are working professionals with fixed windows — early morning before office in Cyber City, or late evening after the commute. Your website should make timings, peak-hour crowd information, parking, and class slots obvious, because those are the questions that decide whether someone signs up.",
      "Corporate tie-ups are another opportunity specific to Gurgaon. Many gyms near Cyber City, Udyog Vihar, and Golf Course Road offer corporate memberships to nearby offices. We can add a dedicated corporate-membership page with an enquiry form aimed at HR and admin teams.",
    ],
    points: [
      { title: "Society & sector targeting", description: "Content aimed at the societies and sectors near your gym, like \"gym near DLF Phase 3\" or \"gym in Sector 57\"." },
      { title: "Corporate membership page", description: "A dedicated page and form for offices in Cyber City, Udyog Vihar, and Golf Course Road." },
      { title: "Timing-first layout", description: "Opening hours, peak times, and class slots placed where busy professionals look first." },
      { title: "Multi-branch support", description: "Separate location pages if you run branches across different parts of Gurgaon." },
    ],
    faqs: [
      { question: "We have gym branches in different parts of Gurgaon. Can each branch have its own page?", answer: "Yes. We create a separate page for each branch with its own address, timings, facilities, trainers, and map, which also helps each branch rank for searches in its own area." },
      { question: "Can we offer corporate memberships through the website?", answer: "Yes. We add a corporate membership page with plan details and an enquiry form aimed at HR and admin teams of nearby offices." },
      { question: "How long does a gym website take to build?", answer: "A typical gym website takes about 3–4 weeks. Adding online payments, multiple branches, or class booking can extend that, and we share an exact timeline before starting." },
    ],
  },
  "gym-dwarka": {
    metaDescription:
      "Gym website designing company in Dwarka, New Delhi for gyms & fitness centres. Trial booking, membership plans, WhatsApp enquiries & sector-level local SEO. Call +91 92668 06477.",
    heading: "Gym Websites for Dwarka's Sectors",
    paragraphs: [
      "In Dwarka, most people join a gym within walking or short driving distance of home. That means your real competition is the two or three gyms in your own and neighbouring sectors, and the one with the clearer website and better Google presence usually wins the enquiry.",
      "Families are a big part of Dwarka's fitness market, so separate timings or batches for women, seniors, and teenagers, along with information on personal training, are worth highlighting clearly on your website.",
    ],
    points: [
      { title: "Sector-level targeting", description: "Pages and profile optimized for the sectors your members come from." },
      { title: "Family & ladies batches", description: "Clear information on separate batches and timings." },
      { title: "WhatsApp-first enquiries", description: "One-tap WhatsApp for quick questions about fees and timings." },
    ],
    faqs: [
      { question: "Can we highlight separate ladies' batches on the website?", answer: "Yes. We can add dedicated sections or pages for ladies' batches, senior fitness, and personal training with their own timings and fees." },
      { question: "Is a website useful if most of our members come from walk-ins?", answer: "Yes. Even walk-in members usually check you online first. A website with photos, plans, and reviews converts more of those local searches into visits." },
    ],
  },

  /* ───────────────────────── DENTAL ───────────────────────── */
  "dental-clinic-gurgaon": {
    metaDescription:
      "Dental clinic website designing company in Gurgaon (Gurugram). Treatment pages, online appointments, doctor profiles & local SEO for dentists and orthodontists. Free quote: +91 92668 06477.",
    heading: "Dental Clinic Websites for Gurgaon Patients",
    paragraphs: [
      "Gurgaon patients tend to research treatments in detail before choosing a dentist, especially for higher-value procedures like implants, clear aligners, veneers, and full-mouth rehabilitation. Clinics that explain these treatments clearly online — process, duration, recovery, and what to expect — earn more trust and more consultations.",
      "Gurgaon also has a significant expatriate and corporate population, along with medical-tourism visitors to the city's large hospitals. A dental website that presents qualifications, sterilisation protocols, and clinic standards professionally, in clear English, helps you reach these patients too.",
      "Many Gurgaon patients also hold corporate health insurance or dental benefits. If your clinic accepts insurance, cashless options, or corporate tie-ups, making that visible on the website can be a deciding factor.",
    ],
    points: [
      { title: "Detailed treatment pages", description: "In-depth pages for implants, aligners, veneers, and smile makeovers that answer patient questions." },
      { title: "Insurance & corporate info", description: "Clear information on insurance, cashless options, and corporate tie-ups." },
      { title: "Hygiene & standards", description: "Sterilisation and clinic standards presented to reassure patients." },
      { title: "Area-level local SEO", description: "Optimized for \"dentist near me\" searches in the sectors around your clinic." },
    ],
    faqs: [
      { question: "Can we create pages for high-value treatments like implants and aligners?", answer: "Yes. We create detailed treatment pages covering the procedure, duration, benefits, and aftercare, reviewed by your doctors before publishing." },
      { question: "Can the website show that we accept dental insurance?", answer: "Yes. We add a section or page listing the insurance providers, cashless options, and corporate tie-ups your clinic supports." },
      { question: "Can we list multiple doctors and consultants?", answer: "Yes. Each doctor or visiting consultant can have a profile with qualifications, specialisations, and available days." },
    ],
  },
  "dental-clinic-dwarka": {
    metaDescription:
      "Dental clinic website designing company in Dwarka, New Delhi. Online appointments, treatment pages, doctor profiles & Google Maps SEO for family dentists. Call +91 92668 06477.",
    heading: "Dental Clinic Websites for Dwarka Families",
    paragraphs: [
      "Most dental patients in Dwarka are families looking for a trusted clinic close to home for regular check-ups, children's dentistry, fillings, and root canals. Reviews and word of mouth matter a lot, and your website should support that trust with clear doctor information and genuine patient feedback.",
      "Clear treatment information, visible consultation timings, and easy appointment booking help families choose you quickly, especially when they are dealing with a sudden toothache.",
    ],
    points: [
      { title: "Family & kids dentistry", description: "Dedicated sections for children's dental care and family check-ups." },
      { title: "Emergency contact", description: "Prominent call and WhatsApp buttons for urgent dental pain." },
      { title: "Reviews front and centre", description: "Google reviews displayed to support word-of-mouth trust." },
    ],
    faqs: [
      { question: "Can we show emergency or Sunday timings on the website?", answer: "Yes. We display regular, Sunday, and emergency timings clearly, with a one-tap call button for urgent cases." },
      { question: "Can patients book appointments on WhatsApp?", answer: "Yes. Appointment requests can be sent directly to your clinic's WhatsApp number." },
    ],
  },

  /* ───────────────────────── PET SHOP ───────────────────────── */
  "pet-shop-gurgaon": {
    metaDescription:
      "Pet shop website designing company in Gurgaon (Gurugram). Online store, pet food delivery, grooming booking & WhatsApp ordering for pet stores and groomers. Free quote: +91 92668 06477.",
    heading: "Pet Shop Websites for Gurgaon's Pet Parents",
    paragraphs: [
      "Gurgaon's high-rise societies — along Golf Course Road, Golf Course Extension, Sohna Road, and New Gurgaon's sectors — are home to a large community of pet parents who are used to ordering online. They expect to browse products, check prices, and get delivery at their doorstep or society gate.",
      "Premium and imported pet food, grain-free diets, and specialised accessories are in steady demand in Gurgaon. A pet shop website that stocks and clearly presents these brands, with filters by pet, breed size, and diet, can compete with large online platforms by offering faster local delivery and personal service.",
      "Grooming and pet services are another strong opportunity. Home grooming, pickup-and-drop grooming, boarding during holidays, and pet-sitting are all popular with busy Gurgaon households, and each works better with online slot booking.",
    ],
    points: [
      { title: "Society delivery", description: "Delivery zones mapped to Gurgaon sectors and societies, with delivery charges per zone." },
      { title: "Premium brand catalogue", description: "Filters by brand, pet type, breed size, and special diets." },
      { title: "Home grooming booking", description: "Online booking for in-store, home, or pickup-and-drop grooming." },
      { title: "Subscription reorders", description: "Easy monthly reorders for pet food and essentials." },
    ],
    faqs: [
      { question: "Can we offer same-day delivery in selected Gurgaon sectors?", answer: "Yes. We can set up delivery zones with different timelines, such as same-day delivery for nearby sectors and next-day delivery for others." },
      { question: "Can customers book home grooming online?", answer: "Yes. We add booking for in-store and home grooming, with time slots, pet details, and address captured in the form." },
      { question: "Can we sell imported and premium pet food brands online?", answer: "Yes. The catalogue supports any brands you stock, with filters and detailed product information." },
    ],
  },
  "pet-shop-dwarka": {
    metaDescription:
      "Pet shop website designing company in Dwarka, New Delhi. Online pet store, local delivery, grooming appointments & WhatsApp orders for pet shops. Call +91 92668 06477.",
    heading: "Pet Shop Websites for Dwarka",
    paragraphs: [
      "Dwarka's residential sectors and housing societies have many pet-owning families who prefer a reliable neighbourhood store for pet food and supplies. A website lets them check availability and order from home, while keeping the personal relationship they value with a local shop.",
      "WhatsApp ordering works especially well here. Many customers prefer to send a quick message with their regular order, and your website can make that as easy as possible.",
    ],
    points: [
      { title: "Sector-wise delivery", description: "Delivery zones set up across Dwarka sectors and nearby areas." },
      { title: "WhatsApp ordering", description: "Cart details sent straight to your WhatsApp for quick confirmation." },
      { title: "Grooming slots", description: "Simple grooming appointment booking for local customers." },
    ],
    faqs: [
      { question: "Can customers check whether a product is in stock before ordering?", answer: "Yes. Stock levels are managed in the admin panel, and out-of-stock items are clearly marked on the website." },
      { question: "Can we offer cash on delivery in Dwarka?", answer: "Yes. We can enable Cash on Delivery alongside UPI and card payments." },
    ],
  },

  /* ───────────────────────── IMPORT EXPORT ───────────────────────── */
  "import-export-gurgaon": {
    metaDescription:
      "Import export website designing company in Gurgaon (Gurugram) for exporters, importers & trading companies. Product catalogues, RFQ forms, certifications & international SEO. Free quote: +91 92668 06477.",
    heading: "Import Export Websites for Gurgaon Businesses",
    paragraphs: [
      "Gurgaon and its surrounding industrial belts — Udyog Vihar, IMT Manesar, Sector 37, and the areas along NH-48 — host a large number of manufacturers, export houses, and trading companies, particularly in garments, auto components, engineering goods, handicrafts, and processed foods.",
      "For these businesses, the website is a sales tool for international buyers. Buyers visiting from Europe, the US, the Middle East, or Africa check your capacity, certifications, quality processes, and product range before they ever request a sample. A website that answers all of this clearly shortens the sales cycle.",
      "Gurgaon's proximity to IGI Airport and ICD connections is a real logistical advantage. We help you communicate your shipping capabilities, lead times, and export experience in a way that reassures overseas buyers.",
    ],
    points: [
      { title: "Industry-specific catalogues", description: "Catalogues for garments, auto parts, engineering goods, handicrafts, or food products." },
      { title: "Factory & capacity pages", description: "Infrastructure, production capacity, and quality-control processes shown clearly." },
      { title: "Certification showcase", description: "IEC, ISO, APEDA, FSSAI, and buyer-specific compliance displayed prominently." },
      { title: "Country-focused SEO", description: "Content targeting product-plus-supplier searches from your main export markets." },
    ],
    faqs: [
      { question: "Can the website target buyers from specific countries?", answer: "Yes. We create content and landing pages aimed at your main export markets, and can add language versions where useful." },
      { question: "Can we show our factory and production capacity?", answer: "Yes. We add infrastructure pages with photos, videos, machinery details, and capacity information." },
      { question: "Can the website work alongside our IndiaMART or Alibaba profile?", answer: "Yes. Your website adds credibility to your B2B portal profiles, and buyers who find you there can verify your company on your own site." },
    ],
  },
  "import-export-dwarka": {
    metaDescription:
      "Import export website designing company in Dwarka, New Delhi for traders & exporters near IGI Airport. Product catalogues, RFQ forms & credibility-focused design. Call +91 92668 06477.",
    heading: "Import Export Websites for Dwarka Traders",
    paragraphs: [
      "Dwarka's location beside IGI Airport, along with easy access to the Dwarka Expressway and cargo facilities, makes it a practical base for importers, exporters, freight-linked traders, and small export houses.",
      "Many of these businesses run lean teams, so a website that answers buyer questions and captures structured RFQs saves time on every enquiry.",
    ],
    points: [
      { title: "Structured RFQ forms", description: "Capture product, quantity, destination, and terms in one enquiry." },
      { title: "Company profile download", description: "A downloadable PDF profile for buyers and agents." },
      { title: "Air-cargo messaging", description: "Clear communication of fast shipping and logistics capabilities." },
    ],
    faqs: [
      { question: "We are a small trading company. Do we need a large website?", answer: "No. A focused website with your company profile, product range, certifications, and an RFQ form is often enough to build credibility with buyers." },
      { question: "Can buyers download our catalogue?", answer: "Yes. We add downloadable PDF catalogues and company profiles." },
    ],
  },

  /* ───────────────────────── ECOMMERCE ───────────────────────── */
  "ecommerce-gurgaon": {
    metaDescription:
      "Ecommerce website designing company in Gurgaon (Gurugram) for D2C brands & retailers. Shopify, WooCommerce & custom stores with UPI, COD, shipping & SEO. Free quote: +91 92668 06477.",
    heading: "Ecommerce Websites for Gurgaon Brands",
    paragraphs: [
      "Gurgaon is one of India's major hubs for D2C brands and ecommerce startups across fashion, beauty, wellness, food, and home products. Many of these brands start on marketplaces and then build their own website to protect margins, own customer data, and build a stronger brand.",
      "Gurgaon shoppers are used to fast apps and smooth checkouts, and they abandon slow or confusing stores quickly. Page speed, a short checkout with UPI, clear return policies, and trust signals matter more here than elaborate design.",
      "Growth-stage Gurgaon brands also need their stores to work with the rest of their marketing — Meta and Google ads, influencer campaigns, email and WhatsApp marketing, and analytics. We build stores with the tracking and integrations needed to measure and scale.",
    ],
    points: [
      { title: "Marketplace to own-store", description: "Move from Amazon or Flipkart dependence to your own brand store." },
      { title: "Conversion-focused checkout", description: "Short checkout with UPI, cards, wallets, and COD." },
      { title: "Ad & analytics tracking", description: "Meta Pixel, GA4, and conversion tracking set up for paid campaigns." },
      { title: "Scalable platform", description: "Shopify, WooCommerce, or custom builds chosen for your growth stage." },
    ],
    faqs: [
      { question: "Can you migrate our store from another platform?", answer: "Yes. We migrate products, customers, and orders where the platform allows, and set up redirects to protect existing search rankings." },
      { question: "Can the store connect with our marketplace inventory?", answer: "Yes. Depending on your setup, we can integrate inventory tools that sync stock between your website and marketplaces." },
      { question: "Do you set up tracking for Meta and Google ads?", answer: "Yes. We set up Meta Pixel, Conversions API where needed, Google Analytics 4, and Google Ads conversion tracking." },
    ],
  },
  "ecommerce-dwarka": {
    metaDescription:
      "Ecommerce website designing company in Dwarka, New Delhi for local retailers & home-based brands. Online stores with UPI, COD, courier integration & easy admin. Call +91 92668 06477.",
    heading: "Ecommerce Websites for Dwarka Retailers",
    paragraphs: [
      "Many Dwarka businesses — from clothing and saree stores to home bakers, handicraft makers, and small brands — want to sell online without the complexity of large platforms. A simple, well-built online store lets them reach customers across Delhi NCR and India.",
      "We keep these stores easy to manage, with a straightforward admin panel for adding products, processing orders, and printing shipping labels.",
    ],
    points: [
      { title: "Easy-to-manage store", description: "Simple admin for products, orders, and shipping." },
      { title: "Local + national delivery", description: "Local delivery around Dwarka and courier shipping across India." },
      { title: "Affordable start", description: "A lean first version that can grow with your business." },
    ],
    faqs: [
      { question: "Can we start with a small catalogue and add products later?", answer: "Yes. You can launch with a few products and keep adding more from the admin panel at any time." },
      { question: "Can you help us with product photos?", answer: "We can guide you on product photography and arrange design support for banners and product images." },
    ],
  },

  /* ───────────────────────── LAWYER ───────────────────────── */
  "lawyer-gurgaon": {
    metaDescription:
      "Lawyer & law firm website designing company in Gurgaon (Gurugram). Practice area pages, advocate profiles & consultation forms, built within Bar Council guidelines. Free quote: +91 92668 06477.",
    heading: "Law Firm Websites for Gurgaon Advocates",
    paragraphs: [
      "Legal work in Gurgaon covers a wide range, from corporate, commercial, and employment matters for the city's many companies to real-estate and RERA disputes, matrimonial cases, and property matters for residents. People looking for legal help often start by researching specific issues online.",
      "An informative website with separate practice-area pages — for example corporate law, property and RERA matters, matrimonial law, or criminal law — helps people understand whether your practice covers their issue, and helps search engines match your pages to relevant searches.",
      "For firms advising companies in Cyber City and Golf Course Road, a professional, understated website with clear information on the team and areas of practice supports credibility in corporate relationships. All content remains factual and informative in line with Bar Council of India rules.",
    ],
    points: [
      { title: "Practice-area structure", description: "Separate pages for corporate, property/RERA, matrimonial, criminal, and other areas you practise." },
      { title: "Team profiles", description: "Factual profiles for partners and associates with enrolment and experience." },
      { title: "Informative legal articles", description: "Articles explaining common legal issues, written factually." },
      { title: "Compliance-conscious design", description: "Entry disclaimer and informative, non-promotional tone." },
    ],
    faqs: [
      { question: "Can a law firm website include articles on legal topics?", answer: "Yes. Informative articles explaining legal concepts and processes are appropriate and help people find your website. We keep them factual and avoid promotional language." },
      { question: "Can we have separate profiles for each advocate in our firm?", answer: "Yes. Each advocate can have a factual profile with qualifications, enrolment details, and areas of practice." },
      { question: "Will the website follow Bar Council of India rules?", answer: "We design with the Bar Council guidelines in mind, keeping content informative and adding an appropriate disclaimer. We recommend you review the final content for professional compliance." },
    ],
  },
  "lawyer-dwarka": {
    metaDescription:
      "Lawyer & advocate website designing company in Dwarka, New Delhi. Informative practice area pages, profiles & consultation forms, designed within Bar Council guidelines. Call +91 92668 06477.",
    heading: "Advocate Websites for Dwarka",
    paragraphs: [
      "With the Dwarka Court complex serving South-West Delhi, many advocates in and around Dwarka handle family, property, civil, criminal, and cheque-bounce matters for local residents. People searching for legal help here want clear, factual information about your experience and areas of practice.",
      "A simple, professional website with practice-area information and a consultation request form helps people understand how you can help.",
    ],
    points: [
      { title: "Local practice areas", description: "Pages for family, property, civil, criminal, and other matters you handle." },
      { title: "Chamber & contact details", description: "Chamber address, timings, and directions clearly listed." },
      { title: "Confidential enquiries", description: "Secure consultation request form." },
    ],
    faqs: [
      { question: "Can the website list my chamber address at Dwarka Courts?", answer: "Yes. Your chamber or office address, timings, and directions can be listed as factual contact information." },
      { question: "Do individual advocates need a website, or only law firms?", answer: "Individual advocates benefit too. A simple informative website helps people verify your details and understand your areas of practice." },
    ],
  },

  /* ───────────────────────── EDUCATION ───────────────────────── */
  "education-gurgaon": {
    metaDescription:
      "School & education website designing company in Gurgaon (Gurugram). Admission forms, notice boards, fee payment & mandatory disclosure for CBSE, ICSE & IB schools. Free quote: +91 92668 06477.",
    heading: "School & Education Websites for Gurgaon",
    paragraphs: [
      "Gurgaon has one of the most competitive school markets in the NCR, with CBSE, ICSE, IB, and Cambridge schools across Golf Course Road, Sohna Road, DLF, and New Gurgaon. Parents here compare schools carefully — curriculum, teaching approach, facilities, transport routes, and fee structure — before shortlisting.",
      "Your website is often the first detailed look parents get at your school. A well-organised site with clear academic information, a virtual campus tour, transport and safety details, and a smooth admission enquiry process can significantly improve how many families visit and apply.",
      "Gurgaon also has many preschools, play schools, and higher-education institutions, each with different needs. We design the structure around your institution type rather than using a single school template.",
    ],
    points: [
      { title: "Curriculum clarity", description: "Clear pages for CBSE, ICSE, IB, or Cambridge programmes and teaching approach." },
      { title: "Transport & safety", description: "Bus routes, safety measures, and CCTV and security information for parents." },
      { title: "Virtual campus tour", description: "Photos and videos of classrooms, labs, sports, and activities." },
      { title: "Admission funnel", description: "Enquiry, application, and campus-visit booking forms." },
    ],
    faqs: [
      { question: "Can we show school bus routes on the website?", answer: "Yes. We can add transport pages listing routes and covered sectors, so parents can check coverage before enquiring." },
      { question: "Do you build websites for preschools and play schools too?", answer: "Yes. Preschool websites have a different structure focused on safety, daily routine, and teachers, and we design them accordingly." },
      { question: "Can parents book a campus visit online?", answer: "Yes. We add a campus-visit booking form so the admissions team can schedule visits efficiently." },
    ],
  },
  "education-dwarka": {
    metaDescription:
      "School & education website designing company in Dwarka, New Delhi. Admission enquiry forms, notices, events, fee payment & mandatory disclosure pages. Call +91 92668 06477.",
    heading: "School Websites for Dwarka",
    paragraphs: [
      "Dwarka has a large number of schools across its sectors, and many parents consider several nearby options during admission season, including nursery admissions. A clear, informative website helps your school stand out in that comparison.",
      "Regular updates — notices, events, results, and activities — also keep current parents informed and show prospective families an active school community.",
    ],
    points: [
      { title: "Nursery admission section", description: "Dedicated information for nursery and entry-level admissions." },
      { title: "Notices & events", description: "Easy publishing of notices, circulars, and event galleries." },
      { title: "Mandatory disclosure", description: "Required disclosure pages kept up to date." },
    ],
    faqs: [
      { question: "Can we publish nursery admission notices and lists on the website?", answer: "Yes. Staff can publish admission notices, schedules, and lists from the admin panel whenever needed." },
      { question: "Can we update the website ourselves after launch?", answer: "Yes. Your staff will be trained to update notices, events, galleries, and other content." },
    ],
  },

  /* ───────────────────────── COACHING ───────────────────────── */
  "coaching-institute-gurgaon": {
    metaDescription:
      "Coaching institute website designing company in Gurgaon (Gurugram) for JEE, NEET, CAT, IELTS & tuition centres. Demo class booking, course pages, fee payment & lead-focused SEO. Free quote: +91 92668 06477.",
    heading: "Coaching Institute Websites for Gurgaon",
    paragraphs: [
      "Gurgaon's coaching market includes school tuition centres, JEE and NEET coaching, CAT and GMAT preparation, IELTS and study-abroad coaching, and professional upskilling courses in coding, data science, and digital marketing. Each audience searches differently and needs different information.",
      "Working professionals in Gurgaon often look for weekend and evening batches, online or hybrid formats, and certification details. Students and parents look for results, faculty, and batch sizes. A good coaching website speaks clearly to each group with separate course pages.",
      "Because admissions are competitive, lead handling matters. We connect your demo-class and enquiry forms to WhatsApp and your CRM or sheet, so counsellors can respond within minutes rather than hours.",
    ],
    points: [
      { title: "Audience-specific course pages", description: "Separate pages for school students, exam aspirants, and working professionals." },
      { title: "Weekend & online batches", description: "Batch formats and timings highlighted for professionals." },
      { title: "Instant lead routing", description: "Enquiries sent to counsellors via WhatsApp and CRM immediately." },
      { title: "Results & reviews", description: "Student results and testimonials to build trust." },
    ],
    faqs: [
      { question: "Can we offer both classroom and online courses on the website?", answer: "Yes. We can present classroom, online, and hybrid options separately, with online enrolment and payment where needed." },
      { question: "Can leads go directly to our counsellors?", answer: "Yes. Enquiries can be sent to your counsellors on WhatsApp and recorded in your CRM or Google Sheet." },
      { question: "Can we run a scholarship test registration through the website?", answer: "Yes. We can add registration forms and payment for scholarship or admission tests." },
    ],
  },
  "coaching-institute-dwarka": {
    metaDescription:
      "Coaching institute & tuition centre website designing company in Dwarka, New Delhi. Demo class booking, course pages, batch timings & results showcase. Call +91 92668 06477.",
    heading: "Coaching Institute Websites for Dwarka",
    paragraphs: [
      "Dwarka has a large school-going population, and many families look for tuition and coaching centres close to home for school subjects, board exam preparation, and competitive exams. Parents compare centres on results, teachers, batch sizes, and distance.",
      "A clear website with course details, batch timings, and a simple demo-class booking helps your centre get more enquiries from nearby sectors.",
    ],
    points: [
      { title: "Class-wise courses", description: "Course pages organised by class, board, and subject." },
      { title: "Demo class booking", description: "Quick demo-class requests sent to your team." },
      { title: "Batch timings", description: "Up-to-date timings that staff can edit easily." },
    ],
    faqs: [
      { question: "Can we list courses by class and board?", answer: "Yes. Courses can be organised by class, board, and subject so parents find the right option quickly." },
      { question: "Can we show toppers and results on the website?", answer: "Yes. We add a results section where you can publish student achievements with consent." },
    ],
  },

  /* ───────────────────────── TRADING ───────────────────────── */
  "trading-gurgaon": {
    metaDescription:
      "Trading company website designing company in Gurgaon (Gurugram) for wholesalers & distributors. Product catalogues, dealer enquiries, bulk quotes & dealer login. Free quote: +91 92668 06477.",
    heading: "Trading Websites for Gurgaon Wholesalers and Distributors",
    paragraphs: [
      "Gurgaon's trading businesses serve a demanding mix of buyers: retailers across the city's markets, contractors working on its many construction projects, and corporate procurement teams in Cyber City and Udyog Vihar. Each group wants something different from your website — retailers want range and margins, contractors want availability and delivery, corporates want credibility and GST-compliant billing.",
      "A well-structured trading website speaks to each of these buyers. Brand pages show which companies you are authorised to distribute; category pages make your range easy to browse; and separate enquiry paths for dealers, contractors, and corporate buyers help your team respond with the right information.",
      "Corporate and institutional buyers in Gurgaon often need to verify a supplier before onboarding. Clear company details, GST information, warehouse location, and the brands you represent make that verification quick and help you get onto approved-vendor lists.",
    ],
    points: [
      { title: "Buyer-specific enquiry paths", description: "Separate forms for retailers, contractors, and corporate procurement." },
      { title: "Authorised brand pages", description: "Showcase the brands you distribute with authorisation details." },
      { title: "Vendor-onboarding ready", description: "GST, company details, and warehouse information for corporate verification." },
      { title: "NCR delivery coverage", description: "Clear information on the areas and timelines you deliver to." },
    ],
    faqs: [
      { question: "Can we show that we are authorised distributors of certain brands?", answer: "Yes. We create brand pages with logos and authorisation details, which you can confirm with each brand's guidelines." },
      { question: "Can corporate buyers download our company profile and GST details?", answer: "Yes. We add a downloadable company profile with registration and GST details for vendor onboarding." },
      { question: "How long does a trading website take to build?", answer: "A typical trading website with a catalogue takes about 3–5 weeks, depending on the number of products and whether a dealer login is needed." },
    ],
  },
  "trading-dwarka": {
    metaDescription:
      "Trading & wholesale website designing company in Dwarka, New Delhi. Product catalogues, dealer enquiries, WhatsApp orders & price lists for distributors. Call +91 92668 06477.",
    heading: "Trading Websites for Dwarka Wholesalers",
    paragraphs: [
      "Wholesalers and distributors around Dwarka supply retailers across West and South-West Delhi, often through long-standing relationships. A website helps you reach new retailers, show your full range, and handle repeat orders more efficiently.",
      "Many retailers prefer ordering on WhatsApp, so we make it easy for them to share product lists and orders directly with your sales team from the website.",
    ],
    points: [
      { title: "Retailer-friendly catalogue", description: "Easy browsing by category and brand." },
      { title: "WhatsApp orders", description: "Product lists sent directly to your sales team." },
      { title: "Price list downloads", description: "Updated PDF price lists shared from one link." },
    ],
    faqs: [
      { question: "Can we share one link instead of sending catalogues on WhatsApp every time?", answer: "Yes. Your website becomes the single link for your full catalogue, brands, and latest price lists." },
      { question: "Can we update products and prices ourselves?", answer: "Yes. The admin panel lets your team add products, update prices, and upload new price lists." },
    ],
  },

  /* ───────────────────────── B2B ───────────────────────── */
  "b2b-gurgaon": {
    metaDescription:
      "B2B website designing company in Gurgaon (Gurugram) for manufacturers & industrial suppliers. Capability pages, RFQ forms, case studies, CRM integration & B2B SEO. Free quote: +91 92668 06477.",
    heading: "B2B Websites for Gurgaon and Manesar Industry",
    paragraphs: [
      "The Gurgaon–Manesar–Bawal belt is a major hub for automotive components, engineering, electronics, and precision manufacturing, supplying OEMs and global customers. Buyers from these industries evaluate suppliers on capability, quality systems, capacity, and experience — and they increasingly start that evaluation online.",
      "Gurgaon is also home to many B2B service companies: IT services, facility management, logistics, HR and staffing, consulting, and SaaS businesses. For these, the website must explain services clearly, show relevant industry experience, and make it easy for decision-makers to request a proposal.",
      "Because B2B deals involve multiple stakeholders, we structure your website so each person finds what they need: engineers find technical details and datasheets, procurement finds certifications and company information, and leadership finds case studies and a clear value proposition.",
    ],
    points: [
      { title: "OEM-ready credibility", description: "Quality systems, certifications, and capacity presented for OEM supplier evaluation." },
      { title: "Stakeholder-focused structure", description: "Content organised for engineers, procurement, and leadership." },
      { title: "Industry landing pages", description: "Pages for automotive, electronics, pharma, or whichever industries you serve." },
      { title: "LinkedIn & Google lead generation", description: "Website ready for B2B ad campaigns with conversion tracking." },
    ],
    faqs: [
      { question: "Can the website support our IATF or ISO certification credibility?", answer: "Yes. We present your certifications, quality processes, and testing facilities clearly, with downloadable certificates where appropriate." },
      { question: "Do you build websites for B2B service companies, not just manufacturers?", answer: "Yes. We build websites for IT services, logistics, staffing, consulting, and SaaS companies with service pages, case studies, and proposal request forms." },
      { question: "Can we publish case studies without naming clients?", answer: "Yes. Case studies can describe the industry, challenge, and solution without naming the client if confidentiality is required." },
    ],
  },
  "b2b-dwarka": {
    metaDescription:
      "B2B website designing company in Dwarka, New Delhi for suppliers, service companies & manufacturers. Capability pages, RFQ forms, downloads & lead-focused SEO. Call +91 92668 06477.",
    heading: "B2B Websites for Dwarka Businesses",
    paragraphs: [
      "B2B businesses in and around Dwarka — including suppliers, logistics-linked companies, and business service providers — benefit from the area's connectivity to the airport, Gurgaon, and West Delhi's industrial areas.",
      "A focused B2B website with clear capabilities, credentials, and an RFQ form helps these businesses compete for enquiries with larger firms.",
    ],
    points: [
      { title: "Clear capability pages", description: "What you supply or do, explained for business buyers." },
      { title: "Structured RFQs", description: "Forms that capture the details needed to quote." },
      { title: "Credibility signals", description: "Certifications, experience, and company details." },
    ],
    faqs: [
      { question: "Can we start with a small B2B website and expand later?", answer: "Yes. We can launch with core pages and add industry pages, case studies, and downloads over time." },
      { question: "Can enquiries be sent to multiple team members?", answer: "Yes. Enquiries can be routed to different people based on product or service type." },
    ],
  },

  /* ───────────────────────── HEALTHCARE ───────────────────────── */
  "healthcare-gurgaon": {
    metaDescription:
      "Healthcare website designing company in Gurgaon (Gurugram) for hospitals, clinics, diagnostic labs & physiotherapy centres. Doctor profiles, appointments & report downloads. Free quote: +91 92668 06477.",
    heading: "Healthcare Websites for Gurgaon Providers",
    paragraphs: [
      "Gurgaon's healthcare market includes large multi-speciality hospitals, specialist clinics, diagnostic chains, IVF and fertility centres, physiotherapy and rehabilitation centres, and home-healthcare providers. With so many options, patients compare doctors, services, and convenience online before choosing.",
      "Gurgaon also attracts patients from other cities and from abroad for specialised treatment. Healthcare providers serving these patients need clear information on specialities, doctors' credentials, international patient assistance, and how to plan a visit.",
      "Corporate health check-ups are a major opportunity in Gurgaon. Diagnostic centres and clinics can use dedicated corporate pages to present health packages for companies and handle enquiries from HR teams.",
    ],
    points: [
      { title: "Speciality-level pages", description: "Separate pages for each department, test, or treatment you offer." },
      { title: "International patient information", description: "Guidance for patients travelling to Gurgaon for treatment." },
      { title: "Corporate health packages", description: "Pages and enquiry forms for company health check-ups." },
      { title: "Home healthcare services", description: "Booking for home sample collection, nursing, or physiotherapy visits." },
    ],
    faqs: [
      { question: "Can we add pages for international patients?", answer: "Yes. We can create international patient pages covering specialities, travel guidance, and an enquiry form, in line with your hospital's policies." },
      { question: "Can diagnostic labs sell health packages online?", answer: "Yes. We add health package pages with inclusions and pricing, online booking, and optional online payment." },
      { question: "Can we add a separate page for each doctor?", answer: "Yes. Individual doctor pages with qualifications and OPD timings help patients choose and can rank for doctor-name searches." },
    ],
  },
  "healthcare-dwarka": {
    metaDescription:
      "Healthcare website designing company in Dwarka, New Delhi for clinics, nursing homes, diagnostic labs & physiotherapy centres. Appointments, test booking & local SEO. Call +91 92668 06477.",
    heading: "Healthcare Websites for Dwarka",
    paragraphs: [
      "Families in Dwarka rely on nearby clinics, nursing homes, diagnostic labs, and physiotherapy centres for everyday healthcare. They want quick answers: which doctor is available, what services you offer, your timings, and how to reach you.",
      "A clear healthcare website with appointment booking, test booking, and emergency contact information helps local patients choose you with confidence.",
    ],
    points: [
      { title: "OPD timings", description: "Doctor schedules clearly shown and easy to update." },
      { title: "Test & package booking", description: "Book lab tests with home sample collection." },
      { title: "Emergency contact", description: "One-tap call for urgent needs." },
    ],
    faqs: [
      { question: "Can we update doctor timings ourselves?", answer: "Yes. Staff can update OPD timings, doctor availability, and notices from the admin panel." },
      { question: "Can patients get reports on WhatsApp through the website?", answer: "Depending on your lab software, we can set up report downloads or notifications. We review your system first." },
    ],
  },

  /* ───────────────────────── PRINTING ───────────────────────── */
  "printing-gurgaon": {
    metaDescription:
      "Printing website designing company in Gurgaon (Gurugram) for print shops, presses & packaging printers. Artwork upload, price calculators, quotes & online payments. Free quote: +91 92668 06477.",
    heading: "Printing Websites for Gurgaon's Business Market",
    paragraphs: [
      "Gurgaon's corporate offices, startups, co-working spaces, and event companies order printing constantly — business cards for new joiners, brochures, standees, event backdrops, office signage, and branded merchandise. These buyers want fast turnaround and the convenience of ordering online.",
      "D2C brands and manufacturers in and around Gurgaon also need packaging printing: boxes, labels, pouches, and inserts. These are higher-value, repeat orders, and a website that explains your packaging capabilities, materials, and minimum quantities can attract them.",
      "We build printing websites that serve both sides: quick online ordering for standard products like cards and flyers, and detailed quote forms for corporate, event, and packaging jobs.",
    ],
    points: [
      { title: "Corporate printing page", description: "Stationery, joining kits, event material, and signage for offices." },
      { title: "Packaging capabilities", description: "Boxes, labels, and pouches with materials and minimum quantities." },
      { title: "Express turnaround", description: "Highlight same-day or next-day printing where you offer it." },
      { title: "Merchandise printing", description: "T-shirts, mugs, diaries, and branded gifts for corporate orders." },
    ],
    faqs: [
      { question: "Can corporate clients reorder the same print job easily?", answer: "Yes. With customer accounts, clients can view past orders and reorder with the same specifications." },
      { question: "Can we show packaging printing separately from general printing?", answer: "Yes. We create a dedicated packaging section with product types, materials, finishes, and a detailed quote form." },
      { question: "Can we offer delivery across Gurgaon?", answer: "Yes. We can set up delivery options and charges by area, and pickup from your shop." },
    ],
  },
  "printing-dwarka": {
    metaDescription:
      "Printing shop website designing company in Dwarka, New Delhi. Online orders, artwork upload, wedding cards, flex & visiting cards with quotes and payments. Call +91 92668 06477.",
    heading: "Printing Websites for Dwarka Print Shops",
    paragraphs: [
      "Print shops in Dwarka handle a wide variety of work: visiting cards, flex banners, school and coaching material, wedding cards, and printing for local shops and events.",
      "A website lets customers see your range, upload designs, and request quotes without visiting the shop first, which helps you win more local orders.",
    ],
    points: [
      { title: "Wedding & event printing", description: "Invitations and event material with design options." },
      { title: "School & coaching printing", description: "Books, notes, and stationery printing for institutions." },
      { title: "Upload & quote", description: "Customers upload files and get a quote quickly." },
    ],
    faqs: [
      { question: "Can we show our wedding card designs online?", answer: "Yes. We can build a design gallery with categories, customisation options, and an enquiry form." },
      { question: "Can customers pick up orders from our shop?", answer: "Yes. We can offer shop pickup along with delivery options." },
    ],
  },

  /* ───────────────────────── PERFUME ───────────────────────── */
  "perfume-gurgaon": {
    metaDescription:
      "Perfume & attar website designing company in Gurgaon (Gurugram) for fragrance brands. Premium online stores with scent notes, discovery sets, gifting & checkout. Free quote: +91 92668 06477.",
    heading: "Perfume Websites for Gurgaon Brands",
    paragraphs: [
      "Gurgaon is a strong base for premium and D2C fragrance brands. Shoppers here are familiar with international luxury brands, so a homegrown perfume brand needs a website that feels equally refined — thoughtful typography, rich visuals, and detailed product storytelling.",
      "Gifting drives a large share of fragrance sales in Gurgaon, both personal gifting and corporate gifting during Diwali and year-end. Gift sets, personalised messages, premium packaging, and a dedicated corporate gifting page can bring in significant bulk orders.",
      "Because fragrance is hard to judge online, discovery sets and testers are especially important for new brands. We design product pages and bundles that encourage first-time customers to try your range and come back for full bottles.",
    ],
    points: [
      { title: "Luxury-grade design", description: "Refined layouts and typography that match premium positioning." },
      { title: "Corporate gifting page", description: "Bulk gifting enquiries for Diwali and year-end corporate orders." },
      { title: "Discovery set funnel", description: "Try-before-you-buy kits that convert into full-bottle sales." },
      { title: "Personalised gifting", description: "Engraving, gift notes, and premium wrapping options." },
    ],
    faqs: [
      { question: "Can we take corporate gifting orders through the website?", answer: "Yes. We add a corporate gifting page with bulk pricing options and an enquiry form for companies." },
      { question: "Can customers personalise bottles or add gift messages?", answer: "Yes. We can add personalisation fields, gift messages, and wrapping options at checkout." },
      { question: "Which platform is best for a perfume brand?", answer: "Shopify is often a good fit for fragrance brands because of its themes and apps, but we recommend a platform after understanding your catalogue and plans." },
    ],
  },
  "perfume-dwarka": {
    metaDescription:
      "Perfume & attar shop website designing company in Dwarka, New Delhi. Online store with scent descriptions, attars, gift sets, UPI & COD checkout. Call +91 92668 06477.",
    heading: "Perfume Websites for Dwarka Stores",
    paragraphs: [
      "Perfume and attar stores in Dwarka have loyal customers who know and trust their fragrances. A website helps those customers reorder easily and introduces your collection to new buyers across Delhi and India.",
      "Festive and wedding seasons are peak times for fragrance gifting, and ready-made gift sets presented online can capture that demand.",
    ],
    points: [
      { title: "Attar collection pages", description: "Traditional attars presented with notes and sizes." },
      { title: "Festive gift sets", description: "Gift boxes for Eid, Diwali, weddings, and occasions." },
      { title: "Easy reorders", description: "Regular customers reorder favourites quickly." },
    ],
    faqs: [
      { question: "Can we sell attars in different bottle sizes?", answer: "Yes. Each attar can have size variants with separate prices and stock." },
      { question: "Can we offer Cash on Delivery?", answer: "Yes. We can enable COD along with UPI and card payments." },
    ],
  },

  /* ───────────────────────── BEAUTY ───────────────────────── */
  "beauty-gurgaon": {
    metaDescription:
      "Beauty salon & spa website designing company in Gurgaon (Gurugram). Service menus, online booking, bridal makeup portfolios & beauty product stores. Free quote: +91 92668 06477.",
    heading: "Beauty Websites for Gurgaon Salons, Spas & Artists",
    paragraphs: [
      "Gurgaon's beauty clients range from working professionals booking quick grooming appointments after office to brides planning makeup months in advance. Premium salons, unisex salons, nail studios, spas, skin clinics, and freelance makeup artists all compete for the same searches.",
      "Convenience is a big deciding factor here. Online booking with real time slots, at-home services for busy households in high-rise societies, and clear pricing make it easy for clients to choose you over a competitor who only has an Instagram page.",
      "Bridal and event makeup is a high-value segment in Gurgaon, with many destination and hotel weddings. Makeup artists and bridal studios benefit from a portfolio-led website with packages, trial booking, and date-availability enquiries.",
    ],
    points: [
      { title: "Real-time booking", description: "Clients pick a service, stylist, and available slot online." },
      { title: "At-home services", description: "Booking for home beauty services with area coverage." },
      { title: "Bridal portfolio", description: "Wedding and event makeup work presented with packages." },
      { title: "Memberships & vouchers", description: "Sell memberships, packages, and gift vouchers online." },
    ],
    faqs: [
      { question: "Can we sell gift vouchers online?", answer: "Yes. Clients can buy digital gift vouchers that can be redeemed at your salon or spa." },
      { question: "Can makeup artists take advance booking payments?", answer: "Yes. We can add advance payments to confirm bridal or event bookings." },
      { question: "Do you build websites for skin clinics too?", answer: "Yes. For skin and aesthetic clinics, we also include doctor profiles and treatment information, written responsibly and approved by your team." },
    ],
  },
  "beauty-dwarka": {
    metaDescription:
      "Beauty parlour & salon website designing company in Dwarka, New Delhi. Service price lists, online booking, bridal makeup galleries & WhatsApp enquiries. Call +91 92668 06477.",
    heading: "Beauty Websites for Dwarka Salons",
    paragraphs: [
      "Beauty parlours and salons in Dwarka serve regular clients from nearby sectors, and demand peaks during festivals and wedding season. A clear price list and easy booking help clients choose you quickly.",
      "Showing real work through a gallery, along with reviews, builds the trust needed for bridal and party bookings.",
    ],
    points: [
      { title: "Clear price list", description: "Services and prices clients can check any time." },
      { title: "Festive & bridal offers", description: "Seasonal packages highlighted on the homepage." },
      { title: "WhatsApp booking", description: "Quick booking through WhatsApp." },
    ],
    faqs: [
      { question: "Can we update festive offers ourselves?", answer: "Yes. Offers, packages, and prices can be updated from the admin panel." },
      { question: "Can clients book through WhatsApp from the website?", answer: "Yes. A WhatsApp button sends a pre-filled booking message to your number." },
    ],
  },

  /* ───────────────────────── AYURVEDIC ───────────────────────── */
  "ayurvedic-gurgaon": {
    metaDescription:
      "Ayurvedic website designing company in Gurgaon (Gurugram) for Ayurveda clinics, Panchakarma centres & Ayurvedic product brands. Consultations, therapies & compliant content. Free quote: +91 92668 06477.",
    heading: "Ayurvedic Websites for Gurgaon's Wellness Seekers",
    paragraphs: [
      "Many Gurgaon professionals deal with long working hours, commuting, and stress, and a growing number turn to Ayurveda for lifestyle balance, detox, and rejuvenation. They look for qualified practitioners, clean and calm centres, and clear information about therapies and packages.",
      "Gurgaon is also a growing market for Ayurvedic and herbal product brands — skincare, haircare, wellness supplements, and teas — sold through D2C websites. These brands need online stores with ingredient transparency, licence details, and responsible product descriptions.",
      "Corporate wellness is another opportunity. Ayurvedic centres can offer stress-management, yoga, and wellness programmes to Gurgaon companies, presented on a dedicated page for HR teams.",
    ],
    points: [
      { title: "Therapy & package clarity", description: "Panchakarma and rejuvenation packages with duration and inclusions." },
      { title: "Online consultations", description: "Video consultations for busy professionals." },
      { title: "Ayurvedic D2C store", description: "Products with ingredients, licence details, and usage information." },
      { title: "Corporate wellness", description: "Programmes presented for Gurgaon companies." },
    ],
    faqs: [
      { question: "Can we run an Ayurvedic product brand and clinic on one website?", answer: "Yes. We can combine clinic pages, consultation booking, and an online store in one website with clear navigation." },
      { question: "Can we display our AYUSH licence and practitioner registration?", answer: "Yes. Displaying licence and registration details builds trust, and we present them clearly on the relevant pages." },
      { question: "Can patients book multi-day Panchakarma programmes online?", answer: "Yes. We add package booking with dates, duration, and advance payment options." },
    ],
  },
  "ayurvedic-dwarka": {
    metaDescription:
      "Ayurvedic clinic & Panchakarma centre website designing company in Dwarka, New Delhi. Consultation booking, therapy pages & practitioner profiles with responsible content. Call +91 92668 06477.",
    heading: "Ayurvedic Websites for Dwarka",
    paragraphs: [
      "Families in Dwarka often prefer trusted local Ayurvedic practitioners for consultations and traditional therapies. A clear website that explains your approach and therapies, and presents your qualifications, helps new patients choose you.",
      "Simple consultation booking and clear timings make it easy for patients from nearby sectors to visit.",
    ],
    points: [
      { title: "Therapy information", description: "Clear, informative descriptions of the therapies you offer." },
      { title: "Practitioner credentials", description: "Qualifications and registration displayed for trust." },
      { title: "Easy booking", description: "Consultation booking by phone, form, or WhatsApp." },
    ],
    faqs: [
      { question: "Can we sell our own Ayurvedic products on the website?", answer: "Yes. We can add a product store, keeping descriptions informative and in line with AYUSH regulations." },
      { question: "Will the content follow advertising rules for Ayurveda?", answer: "We write informative content and avoid disease-cure claims restricted under Indian law. Your practitioners approve all content before publishing." },
    ],
  },
};
