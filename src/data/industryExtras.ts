import type { IndustryKey } from "./industryPages";

/**
 * Industry-specific depth for the industry × location pages: the mistakes
 * that make websites in that industry underperform, and how to bring in
 * customers after launch. No invented stats or guarantees.
 */
type Item = { title: string; description: string };

export type IndustryExtras = {
  mistakes: Item[];
  growth: Item[];
};

export const industryExtras: Record<IndustryKey, IndustryExtras> = {
  gym: {
    mistakes: [
      { title: "Unclear membership options", description: "Visitors who can't tell which plans you offer and what each includes often leave. Show plans and benefits clearly, with a quick enquiry button for the best offer." },
      { title: "No trial or visit option", description: "Asking people to call for everything loses the ones who browse late at night. A free-trial form captures them." },
      { title: "Stock photos of models", description: "Members want to see your actual equipment, space, and trainers. Real photos build more trust than generic images." },
      { title: "Outdated timings and offers", description: "Old class schedules and expired offers make a gym look inactive. An easy admin panel keeps them current." },
    ],
    growth: [
      { title: "Google Business Profile", description: "Photos, reviews, and accurate timings help you appear in the map results for \"gym near me\"." },
      { title: "Instagram reels + Meta ads", description: "Short workout and transformation reels, boosted to people within a few kilometres, drive trial bookings." },
      { title: "Referral offers", description: "A referral page that rewards members for bringing friends turns your existing members into marketers." },
    ],
  },
  "dental-clinic": {
    mistakes: [
      { title: "One page for all treatments", description: "Listing every treatment on one page makes it hard to rank for \"dental implants\" or \"braces\". Each treatment deserves its own page." },
      { title: "No doctor information", description: "Patients choose a dentist, not just a clinic. Missing qualifications and photos reduce trust." },
      { title: "Phone number hard to find", description: "Patients in pain want to call immediately. Click-to-call must be visible on every screen." },
      { title: "Before-after images without consent", description: "Always use case photos with written patient consent, and present them responsibly." },
    ],
    growth: [
      { title: "Google reviews", description: "Asking satisfied patients for reviews is one of the strongest local ranking and trust signals." },
      { title: "Treatment-focused SEO", description: "Detailed pages and articles on implants, aligners, and root canals attract patients researching those treatments." },
      { title: "Google Search ads", description: "Ads for high-value treatments bring patients who are actively searching right now." },
    ],
  },
  "pet-shop": {
    mistakes: [
      { title: "No delivery information", description: "Pet parents want to know if you deliver to their area and how fast. Unclear delivery loses the order." },
      { title: "Products without details", description: "Missing pack size, life stage, or breed suitability forces customers to call or go elsewhere." },
      { title: "Checkout that needs an account", description: "Forcing sign-up before a first order causes drop-offs. Allow guest checkout or WhatsApp orders." },
      { title: "Grooming only by phone", description: "Online grooming slots fill faster than phone-only bookings, especially for working pet parents." },
    ],
    growth: [
      { title: "Repeat-order reminders", description: "Pet food is bought every month. WhatsApp or email reminders bring customers back." },
      { title: "Pet-care content", description: "Articles on puppy diets, grooming, and seasonal care attract search traffic from pet parents." },
      { title: "Local Instagram community", description: "Featuring customers' pets builds a loyal local following." },
    ],
  },
  "import-export": {
    mistakes: [
      { title: "No product specifications", description: "Buyers need specs, packaging, and MOQ to judge fit. Without them, they move to the next supplier." },
      { title: "Unverifiable company details", description: "Missing IEC, certifications, or address raises red flags for overseas buyers." },
      { title: "Generic contact forms", description: "A plain form produces vague enquiries. RFQ fields for quantity, port, and terms produce quotable leads." },
      { title: "Slow site for global visitors", description: "Heavy pages load slowly abroad. Optimized images and hosting keep the site fast for international buyers." },
    ],
    growth: [
      { title: "Product + country SEO", description: "Pages targeting \"[product] exporter from India\" reach buyers searching for suppliers." },
      { title: "B2B portal consistency", description: "Linking your IndiaMART, TradeIndia, or Alibaba profiles to your website strengthens credibility." },
      { title: "LinkedIn outreach", description: "Sharing your website and catalogue with importers on LinkedIn supports direct buyer conversations." },
    ],
  },
  ecommerce: {
    mistakes: [
      { title: "Slow product pages", description: "Heavy images and too many apps slow pages down and increase abandoned visits." },
      { title: "Long checkout", description: "Every extra step loses buyers. UPI, COD, and saved addresses keep checkout short." },
      { title: "Unclear return policy", description: "Shoppers hesitate when returns and refunds aren't explained clearly on product pages." },
      { title: "No tracking set up", description: "Without Meta Pixel and GA4, you can't tell which ads or channels actually produce sales." },
    ],
    growth: [
      { title: "Meta and Google Shopping ads", description: "Product catalogue ads show the right products to the right shoppers." },
      { title: "WhatsApp and email flows", description: "Abandoned-cart and post-purchase messages recover sales and encourage repeat orders." },
      { title: "Influencer seeding", description: "Sending products to relevant creators builds awareness and reusable content." },
    ],
  },
  lawyer: {
    mistakes: [
      { title: "Promotional language", description: "Phrases like \"best lawyer\" or guaranteed outcomes conflict with Bar Council rules. Keep content factual." },
      { title: "No practice-area detail", description: "A single list of practice areas gives visitors and search engines too little to go on." },
      { title: "Missing disclaimer", description: "An entry disclaimer clarifying the site is informational is expected for advocate websites in India." },
      { title: "Insecure enquiry forms", description: "Legal enquiries are sensitive. Forms must be on HTTPS and handled carefully." },
    ],
    growth: [
      { title: "Informative legal articles", description: "Plain-language articles on common legal questions help people find your website through search." },
      { title: "Google Business Profile", description: "An accurate listing with office address and timings helps people locate your chamber." },
      { title: "LinkedIn presence", description: "Sharing articles on LinkedIn builds professional visibility, especially for corporate practice." },
    ],
  },
  education: {
    mistakes: [
      { title: "Outdated notices", description: "Old circulars on the homepage make a school look inactive. Staff should be able to update them easily." },
      { title: "Admission information buried", description: "Parents look for admission dates, eligibility, and fees first. Make them easy to find." },
      { title: "No mandatory disclosure", description: "Affiliated schools may be required to publish disclosures. Missing pages can cause compliance issues." },
      { title: "Poor mobile experience", description: "Most parents browse on phones. PDFs and tiny text frustrate them." },
    ],
    growth: [
      { title: "Admission-season campaigns", description: "Google and Meta ads before admissions open bring enquiries from parents in your area." },
      { title: "Event and achievement updates", description: "Regular news and galleries show an active school and improve search visibility." },
      { title: "Google reviews from parents", description: "Reviews help parents compare schools and improve local ranking." },
    ],
  },
  "coaching-institute": {
    mistakes: [
      { title: "No demo-class option", description: "Students want to try before paying. A demo booking form converts far more visitors than \"call us\"." },
      { title: "Vague course details", description: "Missing syllabus, duration, batch size, and fees leads parents to compare elsewhere." },
      { title: "Slow lead follow-up", description: "Enquiries that wait hours for a call go cold. Instant WhatsApp alerts help counsellors respond fast." },
      { title: "Results without consent or proof", description: "Publish results and testimonials with consent and accurate details to maintain trust." },
    ],
    growth: [
      { title: "Course + location SEO", description: "Pages targeting \"[exam] coaching in [area]\" reach students searching nearby." },
      { title: "YouTube and reels", description: "Short teaching clips show your faculty's style and attract students." },
      { title: "Lead-generation ads", description: "Meta and Google campaigns before each batch starts fill seats faster." },
    ],
  },
  trading: {
    mistakes: [
      { title: "Sending catalogues only on WhatsApp", description: "Scattered PDFs get outdated. A single website catalogue keeps everyone on the latest range." },
      { title: "No brand or authorisation info", description: "Buyers want to know which brands you genuinely distribute." },
      { title: "One enquiry form for everyone", description: "Retailers, contractors, and corporates need different information. Separate paths get better leads." },
      { title: "Missing company verification details", description: "GST, address, and company details help corporate buyers onboard you as a vendor." },
    ],
    growth: [
      { title: "Brand + product SEO", description: "Pages for \"[brand] distributor\" and \"[product] wholesaler\" capture active buyers." },
      { title: "Dealer network page", description: "A \"become a dealer\" page helps expand your retail network." },
      { title: "IndiaMART integration", description: "Your website adds credibility to leads that come through B2B portals." },
    ],
  },
  b2b: {
    mistakes: [
      { title: "Talking only about the company", description: "Buyers care about their problem. Lead with capabilities and applications, not company history." },
      { title: "No technical detail", description: "Engineers and procurement teams need specs, tolerances, and certifications to shortlist you." },
      { title: "Hidden certifications", description: "ISO, IATF, and other certifications should be easy to find and verify." },
      { title: "Leads going to a generic inbox", description: "Enquiries that aren't routed to the right person get delayed. CRM integration fixes this." },
    ],
    growth: [
      { title: "Capability and industry SEO", description: "Pages for specific processes and industries attract niche, high-intent searches." },
      { title: "LinkedIn campaigns", description: "LinkedIn lets you reach decision-makers by industry, role, and company size." },
      { title: "Case studies", description: "Real project examples (anonymised if needed) shorten the evaluation process." },
    ],
  },
  healthcare: {
    mistakes: [
      { title: "Exaggerated claims", description: "Promising outcomes or using misleading testimonials breaks medical advertising norms. Keep content accurate." },
      { title: "Doctor timings out of date", description: "Wrong OPD timings frustrate patients. Staff need an easy way to update them." },
      { title: "Emergency number hard to find", description: "Emergency and ambulance contacts must be visible on every page." },
      { title: "No department pages", description: "A single services list can't rank for specific specialities or tests." },
    ],
    growth: [
      { title: "Doctor and speciality SEO", description: "Individual doctor and department pages attract patients searching for specific care." },
      { title: "Google Business Profile", description: "Accurate listings with photos and reviews help patients find you nearby." },
      { title: "Health package promotions", description: "Seasonal and corporate health packages promoted online bring predictable bookings." },
    ],
  },
  printing: {
    mistakes: [
      { title: "Unclear products and quantities", description: "Customers leave when they can't see what you print, paper options, or minimum quantities. A quick quote form makes it easy to ask for the best price." },
      { title: "No way to upload artwork", description: "Asking customers to email files adds friction. Upload on the order page is simpler." },
      { title: "No samples of finished work", description: "Photos of real print jobs show paper quality and finishes better than descriptions." },
      { title: "Unclear turnaround times", description: "Businesses often need printing urgently. State delivery or pickup timelines clearly." },
    ],
    growth: [
      { title: "Product-specific SEO", description: "Pages for visiting cards, flex, packaging, and stickers each capture their own searches." },
      { title: "Corporate outreach", description: "A corporate printing page supports outreach to offices and HR teams." },
      { title: "Google Business Profile", description: "Many print searches are local — \"printing shop near me\" — so your map listing matters." },
    ],
  },
  perfume: {
    mistakes: [
      { title: "No scent description", description: "Just a name and price tells shoppers nothing. Notes, mood, and longevity help them choose." },
      { title: "No way to sample", description: "Without discovery sets or testers, many first-time buyers won't risk a full bottle." },
      { title: "Weak product photography", description: "Fragrance is sold on emotion. Premium visuals matter more than in most categories." },
      { title: "Shipping rules ignored", description: "Perfumes may be restricted by some couriers. Choose partners that handle fragrances." },
    ],
    growth: [
      { title: "Influencer reviews", description: "Creators describing scents on video help overcome the \"can't smell it\" problem." },
      { title: "Gifting campaigns", description: "Festive and corporate gifting campaigns drive seasonal spikes in orders." },
      { title: "Fragrance guides", description: "Articles like \"best perfumes for summer\" attract search traffic from buyers." },
    ],
  },
  beauty: {
    mistakes: [
      { title: "No price list", description: "Clients want to know costs before booking. A clear service menu builds trust." },
      { title: "Relying only on Instagram", description: "Instagram doesn't rank on Google for \"salon near me\". A website does." },
      { title: "Booking only by phone", description: "Clients often book outside working hours. Online slots capture those bookings." },
      { title: "Unrealistic edited photos", description: "Heavily filtered images can disappoint clients. Show genuine work." },
    ],
    growth: [
      { title: "Google reviews and photos", description: "Reviews and fresh photos on your Google profile drive local bookings." },
      { title: "Bridal season marketing", description: "Campaigns ahead of wedding season fill high-value bridal slots." },
      { title: "Memberships and vouchers", description: "Prepaid packages and gift vouchers bring repeat visits and new clients." },
    ],
  },
  ayurvedic: {
    mistakes: [
      { title: "Disease-cure claims", description: "Claims that a product or therapy cures a disease are restricted by Indian law. Keep content informative." },
      { title: "No practitioner credentials", description: "Qualifications and registration details are key to trust in Ayurveda." },
      { title: "Unclear therapy information", description: "People unfamiliar with Panchakarma need simple explanations of what happens and how long it takes." },
      { title: "Products without licence details", description: "Ayurvedic products should show ingredients, usage, and licence information." },
    ],
    growth: [
      { title: "Educational content", description: "Articles on Ayurvedic principles, seasonal routines, and therapies attract interested readers." },
      { title: "Online consultations", description: "Video consultations extend your reach beyond your local area." },
      { title: "Wellness packages", description: "Promoting detox and rejuvenation packages brings predictable bookings." },
    ],
  },
};
