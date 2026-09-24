import type { IndustryBundle } from "./types";

export const hospitalityPropertyBundles: IndustryBundle[] = [
  /* ───────────────────────── RESTAURANT ───────────────────────── */
  {
    industry: {
      key: "restaurant",
      name: "Restaurant",
      audience: "restaurants, cafés, cloud kitchens, and bars",
      whyHeading: "Why Restaurants and Cafés Need Their Own Website",
      why: [
        "Delivery apps bring orders, but they also take a large commission on every one, and they don't help people who want to book a table, plan a party, or learn what makes your place special. Your own website fills that gap: menu, ambience, location, reservations, and direct orders without commission.",
        "When someone searches \"best café near me\" or \"rooftop restaurant\", Google shows restaurants with good websites, photos, and reviews. A fast, mobile-friendly site with your menu, timings, and a table-booking option turns those searches into visits.",
        "We design restaurant websites that make people hungry — great food photography, easy-to-read menus, reservation and direct ordering, and pages for private dining and events.",
      ],
      features: [
        { title: "Digital menu", description: "An easy-to-update menu with categories, photos, and dietary tags." },
        { title: "Table reservations", description: "Guests book a table for a date, time, and party size." },
        { title: "Direct online ordering", description: "Commission-free ordering for delivery or takeaway." },
        { title: "Private dining & events", description: "Enquiry pages for birthdays, parties, and corporate events." },
        { title: "Ambience gallery", description: "Photos and videos of your space, dishes, and events." },
        { title: "QR menu", description: "A mobile menu guests can scan at the table." },
        { title: "Offers & events", description: "Promote live music nights, happy hours, and festive menus." },
        { title: "Local SEO", description: "Optimized for \"restaurant near me\", cuisine, and area searches." },
      ],
      pages: ["Home", "Menu", "Reservations", "Order online", "About / our story", "Private dining & events", "Gallery", "Offers", "Reviews", "Contact & location"],
      integrations: ["Table booking", "Online ordering", "Razorpay / UPI", "WhatsApp", "Google Maps", "Zomato / Swiggy links"],
      faqs: [
        { question: "Can customers order directly from our website without commission?", answer: "Yes. We can set up direct ordering with online payment so you keep the full order value, alongside your delivery app listings." },
        { question: "Can guests book tables online?", answer: "Yes. We add a reservation form or booking system with date, time, and party size." },
        { question: "Can I update the menu myself?", answer: "Yes. Dishes, prices, and photos can be updated anytime from the admin panel." },
        { question: "Can we take bookings for parties and events?", answer: "Yes. We create a private dining and events page with an enquiry form." },
      ],
      relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
    },
    extras: {
      mistakes: [
        { title: "Menu as a PDF", description: "PDF menus are hard to read on phones and invisible to search engines. Use a web menu." },
        { title: "No reservation option", description: "Guests who can't book easily go to a restaurant that lets them." },
        { title: "Outdated timings", description: "Wrong opening hours lead to disappointed guests and bad reviews." },
        { title: "Poor food photos", description: "Dark or blurry photos make even great food look unappetising." },
      ],
      growth: [
        { title: "Google Business Profile", description: "Photos, menus, and reviews drive \"near me\" discovery." },
        { title: "Food reels and influencers", description: "Short videos and local food creators bring new guests." },
        { title: "Direct-order loyalty", description: "Offers for ordering directly reduce dependence on aggregators." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's dining scene is one of the busiest in the country, from CyberHub and Sector 29 to Golf Course Road, Galleria Market, and new food streets in New Gurgaon. Diners here compare menus, ambience, and reviews before choosing. Grox Media builds restaurant websites for Gurgaon that stand out and bring in reservations and direct orders.",
        faq: { question: "Can we target corporate lunch and party bookings in Gurgaon?", answer: "Yes. We add corporate dining and event pages aimed at offices in Cyber City, Udyog Vihar, and Golf Course Road." },
        depth: {
          metaDescription: "Restaurant & café website designing company in Gurgaon (Gurugram). Digital menus, table booking, direct online ordering & event pages. Free quote: +91 92668 06477.",
          heading: "Restaurant Websites for Gurgaon",
          paragraphs: [
            "Gurgaon has a huge after-work and weekend dining crowd, plus steady demand for team lunches, office parties, and corporate events. A website that handles reservations and event enquiries captures this high-value business.",
            "With intense competition in hubs like CyberHub and Sector 29, a restaurant's website and Google profile often decide where a group ends up. Great photos, a clear menu, and one-tap booking make the difference.",
          ],
          points: [
            { title: "Corporate events", description: "Enquiry forms for team lunches and office parties." },
            { title: "Hub-level SEO", description: "Targeting searches around CyberHub, Sector 29, and Golf Course Road." },
            { title: "Direct ordering", description: "Commission-free delivery orders for nearby societies." },
            { title: "Events calendar", description: "Live music, DJ nights, and special menus promoted." },
          ],
          faqs: [
            { question: "Can we promote weekly events like live music?", answer: "Yes. An events section lets you publish upcoming events and take reservations for them." },
            { question: "Can we have separate pages for multiple outlets?", answer: "Yes. Each outlet can have its own menu, timings, and location page." },
          ],
        },
      },
      dwarka: {
        intro: "Dwarka's restaurants and cafés serve families, students, and professionals across its sectors, with busy markets near Dwarka Mor, Sector 12, and the Vegas Mall area. Grox Media builds restaurant websites for Dwarka that show your menu, take reservations, and bring in direct orders.",
        faq: { question: "Can we take family party bookings through the website?", answer: "Yes. We add a party booking page for birthdays, kitty parties, and family functions." },
        depth: {
          metaDescription: "Restaurant & café website designing company in Dwarka, New Delhi. Online menus, table booking, direct ordering & party enquiries. Call +91 92668 06477.",
          heading: "Restaurant Websites for Dwarka",
          paragraphs: [
            "In Dwarka, families and groups often plan meals, birthdays, and get-togethers at restaurants close to home. A clear menu and easy booking help you win those plans.",
            "Direct ordering from your website lets regular local customers order without paying aggregator mark-ups.",
          ],
          points: [
            { title: "Family & party bookings", description: "Easy enquiries for group events." },
            { title: "Local delivery", description: "Direct ordering for nearby sectors." },
            { title: "Menu & offers", description: "Updated menu and weekly offers." },
          ],
          faqs: [
            { question: "Can customers order on WhatsApp from the menu?", answer: "Yes. We can add WhatsApp ordering that sends the selected dishes to your number." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── HOTEL ───────────────────────── */
  {
    industry: {
      key: "hotel",
      name: "Hotel",
      audience: "hotels, guest houses, homestays, and serviced apartments",
      whyHeading: "Why Hotels and Guest Houses Need a Direct-Booking Website",
      why: [
        "Online travel agencies bring bookings but charge commission on every stay. A hotel website with direct booking lets guests book with you directly, helping you keep more of each booking and build a relationship with repeat guests.",
        "Guests compare hotels carefully: room photos, amenities, location, reviews, policies, and price. A clear, fast website that shows all of this — and lets guests book or enquire in a few taps — builds confidence and increases direct bookings.",
        "We design hotel and guest house websites with room pages, booking engines or enquiry forms, location information, and SEO for the searches travellers make, like \"hotel near airport\" or \"guest house in [area]\".",
      ],
      features: [
        { title: "Room pages", description: "Each room type with photos, amenities, occupancy, and policies." },
        { title: "Direct booking", description: "Booking engine or availability enquiry for direct reservations." },
        { title: "Location & directions", description: "Nearby landmarks, transport, and distance from the airport." },
        { title: "Amenities", description: "Wi-Fi, breakfast, parking, restaurant, and more." },
        { title: "Corporate stays", description: "Pages and enquiries for business travellers and long stays." },
        { title: "Events & banquets", description: "Banquet halls and event spaces with enquiry forms." },
        { title: "Guest reviews", description: "Reviews from Google and travel sites displayed on the website." },
        { title: "Hotel SEO", description: "Optimized for area, landmark, and airport-related searches." },
      ],
      pages: ["Home", "Rooms", "Individual room pages", "Book now", "Amenities", "Location", "Corporate stays", "Banquets & events", "Gallery", "Contact"],
      integrations: ["Booking engine / channel manager", "Razorpay / UPI", "WhatsApp", "Google Maps", "Google Hotel Ads", "Reviews"],
      faqs: [
        { question: "Can guests book rooms directly on our website?", answer: "Yes. We integrate a booking engine or an availability enquiry form, depending on your setup." },
        { question: "Can the website connect to our channel manager?", answer: "In many cases, yes. We work with common booking engines and channel managers so availability stays in sync." },
        { question: "Can we promote corporate and long-stay rates?", answer: "Yes. We add corporate stay pages with an enquiry form for companies." },
        { question: "Can we show our banquet hall?", answer: "Yes. Banquet and event pages include capacity, photos, and an enquiry form." },
      ],
      relatedService: { label: "Lead generation", href: "/services/lead-generation" },
    },
    extras: {
      mistakes: [
        { title: "Only OTA listings", description: "Relying fully on travel agencies means paying commission on every booking." },
        { title: "Few room photos", description: "Guests want to see every room type clearly before booking." },
        { title: "Unclear location", description: "Missing distances to airport, metro, and landmarks cost bookings." },
        { title: "Hidden policies", description: "Unclear check-in, cancellation, and ID policies cause disputes." },
      ],
      growth: [
        { title: "Google Hotel listing", description: "Linking your website to Google's hotel results brings direct bookings." },
        { title: "Corporate tie-ups", description: "Company stay agreements bring predictable occupancy." },
        { title: "Guest reviews", description: "Encouraging reviews improves ranking and conversion." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's hotels and serviced apartments host business travellers visiting Cyber City and Udyog Vihar, guests attending weddings and events, and travellers using IGI Airport. Grox Media builds hotel websites for Gurgaon that increase direct bookings and win corporate stays.",
        faq: { question: "Can we target business travellers visiting Gurgaon offices?", answer: "Yes. We create corporate stay pages highlighting proximity to Cyber City, Udyog Vihar, and Golf Course Road, with enquiry forms for companies." },
        depth: {
          metaDescription: "Hotel & guest house website designing company in Gurgaon (Gurugram). Direct booking, room pages, corporate stays & banquet enquiries. Free quote: +91 92668 06477.",
          heading: "Hotel Websites for Gurgaon",
          paragraphs: [
            "A large share of Gurgaon's hotel guests are business travellers and companies booking stays for employees and visiting clients. Corporate rates, invoices, and proximity to offices matter to them.",
            "Gurgaon is also a major wedding and event destination. Hotels with banquet halls benefit from dedicated event pages that capture high-value enquiries.",
          ],
          points: [
            { title: "Corporate stay pages", description: "Business amenities and company enquiry forms." },
            { title: "Office proximity", description: "Distances to Cyber City, Udyog Vihar, and major offices." },
            { title: "Banquets & weddings", description: "Event spaces with capacity and enquiries." },
            { title: "Airport convenience", description: "Airport transfer information for travellers." },
          ],
          faqs: [
            { question: "Can we offer long-stay serviced apartment rates?", answer: "Yes. We add long-stay pages with enquiry forms for monthly stays." },
            { question: "Can we list multiple properties in Gurgaon?", answer: "Yes. Each property can have its own rooms, amenities, and location page." },
          ],
        },
      },
      dwarka: {
        intro: "With IGI Airport, Yashobhoomi (India International Convention Centre), and the Dwarka Expressway nearby, Dwarka's hotels and guest houses serve airport travellers, convention visitors, and family guests. Grox Media builds hotel websites for Dwarka that highlight your location advantages and bring direct bookings.",
        faq: { question: "Can we highlight our distance from the airport and Yashobhoomi?", answer: "Yes. We add clear location information with distances to IGI Airport, Yashobhoomi, and metro stations." },
        depth: {
          metaDescription: "Hotel & guest house website designing company in Dwarka, New Delhi near IGI Airport. Direct booking, room pages & location-focused SEO. Call +91 92668 06477.",
          heading: "Hotel Websites for Dwarka",
          paragraphs: [
            "Many guests search specifically for stays near the airport or convention centre, often at short notice. A fast website with clear location details and direct booking wins these searches.",
            "Transit travellers value airport pickups, early check-in, and 24-hour reception — all worth highlighting.",
          ],
          points: [
            { title: "Airport-focused SEO", description: "Targeting \"hotel near Delhi airport\" searches." },
            { title: "Convention visitors", description: "Content for Yashobhoomi event attendees." },
            { title: "Transit amenities", description: "Pickups, early check-in, and 24-hour desk." },
          ],
          faqs: [
            { question: "Can guests request airport pickup when booking?", answer: "Yes. The booking or enquiry form can include airport pickup requests." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── REAL ESTATE ───────────────────────── */
  {
    industry: {
      key: "real-estate",
      name: "Real Estate",
      audience: "real estate agents, property dealers, and builders",
      whyHeading: "Why Real Estate Businesses Need a Strong Website",
      why: [
        "Property buyers and tenants research heavily online before contacting a dealer. They compare listings, locations, prices, amenities, and the credibility of the agent. A professional real estate website with well-organised listings positions you as a serious, trustworthy advisor rather than just another phone number.",
        "Your website can capture leads around the clock: property search by location, type, and budget; detailed listing pages with photos, floor plans, and maps; and enquiry forms or WhatsApp buttons on every listing. It also helps you rank for locality-specific searches that portals compete for.",
        "We build real estate websites with property management built in, RERA details displayed where required, and SEO targeting sector- and project-level searches.",
      ],
      features: [
        { title: "Property listings", description: "Search and filter by location, type, budget, and bedrooms." },
        { title: "Listing pages", description: "Photos, floor plans, amenities, maps, and video tours." },
        { title: "Lead capture", description: "Enquiry forms and WhatsApp on every listing." },
        { title: "Project pages", description: "Dedicated pages for new launches with brochures." },
        { title: "RERA information", description: "RERA registration numbers displayed where required." },
        { title: "Admin panel", description: "Add, edit, and mark properties sold or rented yourself." },
        { title: "Locality guides", description: "Area pages covering connectivity, schools, and amenities." },
        { title: "Real estate SEO", description: "Optimized for sector, society, and project searches." },
      ],
      pages: ["Home", "Buy", "Rent", "Commercial", "New projects", "Individual listings", "Locality guides", "About the agent", "Home loan / EMI calculator", "Contact"],
      integrations: ["Property CRM", "WhatsApp", "Google Maps", "EMI calculator", "Brochure downloads", "Meta lead ads"],
      faqs: [
        { question: "Can we add and manage property listings ourselves?", answer: "Yes. You get an admin panel to add listings, upload photos, and mark properties as sold or rented." },
        { question: "Do we need to show RERA numbers?", answer: "Under RERA rules, registered projects and agents generally need to display their registration details in advertisements. We add fields for these on relevant pages; please confirm your obligations with your RERA authority." },
        { question: "Can leads go directly to our CRM or WhatsApp?", answer: "Yes. Enquiries can be sent to WhatsApp, email, or your property CRM." },
        { question: "Can you create pages for specific projects?", answer: "Yes. Project pages with brochures, floor plans, and enquiry forms are ideal for new launches." },
      ],
      relatedService: { label: "Lead generation", href: "/services/lead-generation" },
    },
    extras: {
      mistakes: [
        { title: "Outdated listings", description: "Showing sold or rented properties frustrates buyers and wastes your time." },
        { title: "No filters", description: "Buyers leave when they can't narrow down by location and budget." },
        { title: "Missing RERA details", description: "Omitting required registration details can create compliance issues." },
        { title: "Poor photos", description: "Dark, low-quality photos reduce enquiries for good properties." },
      ],
      growth: [
        { title: "Locality SEO", description: "Area and society guides attract buyers researching neighbourhoods." },
        { title: "Meta and Google lead ads", description: "Targeted campaigns for project launches generate buyer leads." },
        { title: "Video tours", description: "Walkthrough videos on the website and YouTube build interest." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon is one of India's most active property markets, from luxury launches on Golf Course Road and Golf Course Extension to fast-growing New Gurgaon, Dwarka Expressway projects, and commercial space in Cyber City. Grox Media builds real estate websites for Gurgaon agents, dealers, and builders that showcase listings professionally and capture serious buyer leads.",
        faq: { question: "Can we create pages for specific Gurgaon societies and sectors?", answer: "Yes. Society and sector guides help you rank for searches like \"flats in Sector 65\" or \"property on Golf Course Extension Road\"." },
        depth: {
          metaDescription: "Real estate website designing company in Gurgaon (Gurugram) for property dealers & builders. Listings, project pages, RERA details & lead capture. Free quote: +91 92668 06477.",
          heading: "Real Estate Websites for Gurgaon",
          paragraphs: [
            "Gurgaon buyers research at the level of sectors, societies, and specific projects. A website with detailed society and project pages, plus honest locality information, helps you rank for these searches and positions you as a local expert.",
            "HRERA (Haryana RERA) registration details should be shown where required for projects and agents. We include these clearly, which also builds trust with buyers.",
            "Commercial real estate — offices in Cyber City and Golf Course Road, retail on Sohna Road — is another large segment that benefits from separate commercial listing pages.",
          ],
          points: [
            { title: "Society & project pages", description: "Detailed pages for Gurgaon's major societies and projects." },
            { title: "HRERA details", description: "Registration numbers displayed where required." },
            { title: "Commercial listings", description: "Office and retail space pages for businesses." },
            { title: "NRI buyers", description: "Content and enquiry forms for NRI investors." },
          ],
          faqs: [
            { question: "Can NRI buyers enquire through the website?", answer: "Yes. We add NRI-focused content and international-friendly enquiry forms with WhatsApp." },
            { question: "Can we list both residential and commercial properties?", answer: "Yes. Listings can be categorised by residential, commercial, buy, and rent." },
          ],
        },
      },
      dwarka: {
        intro: "Dwarka's DDA flats, cooperative group housing societies, and the fast-growing Dwarka Expressway corridor make it a busy market for resale, rentals, and new projects. Grox Media builds real estate websites for Dwarka property dealers that present listings clearly and bring in buyer and tenant enquiries.",
        faq: { question: "Can we list properties by Dwarka sector and society?", answer: "Yes. Listings and filters can be organised by sector and society so buyers find exactly what they want." },
        depth: {
          metaDescription: "Real estate website designing company in Dwarka, New Delhi for property dealers. Sector-wise listings, rentals, resale & Dwarka Expressway projects. Call +91 92668 06477.",
          heading: "Property Dealer Websites for Dwarka",
          paragraphs: [
            "Most property searches in Dwarka are sector- and society-specific, especially for resale flats and rentals in cooperative societies. A website organised this way helps buyers and tenants find you.",
            "The Dwarka Expressway has added new projects that buyers are actively researching, which dealers can cover with dedicated project pages.",
          ],
          points: [
            { title: "Sector-wise listings", description: "Filters for Dwarka sectors and societies." },
            { title: "Rentals section", description: "Separate rental listings for tenants." },
            { title: "Expressway projects", description: "Pages for new Dwarka Expressway launches." },
          ],
          faqs: [
            { question: "Can tenants filter rental properties separately?", answer: "Yes. Rentals have their own section and filters." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── INTERIOR DESIGNER ───────────────────────── */
  {
    industry: {
      key: "interior-designer",
      name: "Interior Designer",
      audience: "interior designers, design studios, and modular kitchen companies",
      whyHeading: "Why Interior Designers Need a Portfolio-Led Website",
      why: [
        "Interior design is a visual, high-trust purchase. Homeowners and businesses want to see your completed projects, understand your style and process, and feel confident you'll deliver on time before they invite you for a site visit. Instagram helps, but a portfolio website presents your work in an organised, professional way.",
        "A strong interior design website shows projects by type — living rooms, kitchens, bedrooms, offices, and full-home interiors — with before-and-after photos, explains your process from consultation to handover, and captures consultation requests.",
        "We design elegant, image-first websites for interior designers with fast-loading galleries, clear service pages, and local SEO for \"interior designer near me\" and room-specific searches.",
      ],
      features: [
        { title: "Project portfolio", description: "Completed projects with photos, filtered by room or project type." },
        { title: "Before & after", description: "Transformation galleries that show your impact." },
        { title: "Service pages", description: "Full-home, modular kitchen, wardrobe, office, and turnkey interiors." },
        { title: "Design process", description: "Step-by-step explanation from consultation to handover." },
        { title: "Consultation booking", description: "Forms to request a site visit or design consultation." },
        { title: "3D renders", description: "Showcase concept renders alongside completed work." },
        { title: "Client testimonials", description: "Reviews and stories from homeowners." },
        { title: "Local SEO", description: "Optimized for \"interior designer near me\" and room-specific searches." },
      ],
      pages: ["Home", "Portfolio", "Individual project pages", "Services", "Modular kitchens", "Wardrobes", "Office interiors", "Process", "Testimonials", "Book consultation"],
      integrations: ["Consultation forms", "WhatsApp", "Instagram feed", "Google Maps", "Brochure downloads", "Google reviews"],
      faqs: [
        { question: "Can we organise our portfolio by room type?", answer: "Yes. Projects can be filtered by kitchen, bedroom, living room, office, and more." },
        { question: "Will large photo galleries slow down the website?", answer: "No. We optimize images and use modern formats so galleries load fast on mobile." },
        { question: "Can clients book a site visit online?", answer: "Yes. We add a consultation form capturing property type, location, and requirements." },
        { question: "Can we show 3D renders as well as real photos?", answer: "Yes, clearly labelled so clients know which are concepts and which are completed work." },
      ],
      relatedService: { label: "Branding & design", href: "/services/branding" },
    },
    extras: {
      mistakes: [
        { title: "Unorganised portfolio", description: "Dozens of random photos overwhelm visitors. Group work by project and room." },
        { title: "Renders passed off as real work", description: "Label 3D renders clearly to maintain trust." },
        { title: "No process explained", description: "Clients worry about delays and budgets. Explain timelines and stages." },
        { title: "Slow image loading", description: "Unoptimized photos make portfolios frustrating on mobile." },
      ],
      growth: [
        { title: "Pinterest and Instagram", description: "Visual platforms bring inspiration-seekers to your portfolio." },
        { title: "Project case studies", description: "Detailed write-ups rank for room- and style-specific searches." },
        { title: "Builder partnerships", description: "A professional site helps you partner with builders on new possessions." },
      ],
    },
    local: {
      gurgaon: {
        intro: "With thousands of new apartments handed over every year across Golf Course Extension, New Gurgaon, Dwarka Expressway, and Sohna Road, Gurgaon has constant demand for interior designers and modular kitchen companies. Grox Media builds portfolio-led websites for Gurgaon interior designers that turn possession-season searches into consultations.",
        faq: { question: "Can we target new-possession societies in Gurgaon?", answer: "Yes. We create pages targeting societies and sectors receiving possession, so homeowners searching for interiors in those projects find you." },
        depth: {
          metaDescription: "Interior designer website designing company in Gurgaon (Gurugram). Portfolio galleries, modular kitchen pages & consultation booking for design studios. Free quote: +91 92668 06477.",
          heading: "Interior Design Websites for Gurgaon",
          paragraphs: [
            "Gurgaon homeowners taking possession of new apartments often search for complete home interiors, modular kitchens, and wardrobes within specific societies. Showing projects completed in similar societies builds strong confidence.",
            "Gurgaon's offices, co-working spaces, restaurants, and retail stores also create demand for commercial interiors, best presented on dedicated pages with their own case studies.",
          ],
          points: [
            { title: "Society project showcases", description: "Projects grouped by Gurgaon society and apartment size." },
            { title: "Turnkey interiors", description: "Full-home packages explained clearly." },
            { title: "Commercial interiors", description: "Office, café, and retail case studies." },
            { title: "Possession-season SEO", description: "Content for newly delivered projects." },
          ],
          faqs: [
            { question: "Can we show projects by apartment size, like 3BHK interiors?", answer: "Yes. Filters and pages by apartment size help homeowners find relevant examples." },
            { question: "Can we have separate pages for residential and commercial work?", answer: "Yes. Each has its own portfolio and service pages." },
          ],
        },
      },
      dwarka: {
        intro: "Many Dwarka homeowners are renovating older society flats or furnishing new homes along the Dwarka Expressway. Grox Media builds interior designer websites for Dwarka that showcase your work, explain your process, and bring in consultation requests from nearby sectors.",
        faq: { question: "Can we highlight renovation work for older Dwarka flats?", answer: "Yes. A renovation section with before-and-after projects is ideal for Dwarka's society flats." },
        depth: {
          metaDescription: "Interior designer website designing company in Dwarka, New Delhi. Portfolio, renovation galleries, modular kitchens & consultation booking. Call +91 92668 06477.",
          heading: "Interior Design Websites for Dwarka",
          paragraphs: [
            "Dwarka's older cooperative society flats are frequently renovated, making before-and-after work especially persuasive for local homeowners.",
            "New homes along the Dwarka Expressway add demand for full interiors and modular kitchens.",
          ],
          points: [
            { title: "Renovation showcases", description: "Before-and-after projects for society flats." },
            { title: "Modular kitchens", description: "Dedicated kitchen and wardrobe pages." },
            { title: "Local consultations", description: "Easy site-visit booking across Dwarka." },
          ],
          faqs: [
            { question: "Can clients send photos of their space with the enquiry?", answer: "Yes. The consultation form can accept photo uploads." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── CONTRACTOR ───────────────────────── */
  {
    industry: {
      key: "contractor",
      name: "Contractor",
      audience: "building contractors, renovation companies, and civil contractors",
      whyHeading: "Why Contractors and Renovation Companies Need a Website",
      why: [
        "Construction and renovation are big decisions, and clients are wary of contractors who disappear midway or go over budget. A professional website with completed projects, clear services, and a transparent process shows you're established and dependable.",
        "Homeowners search for \"home renovation contractor\", \"house construction\", or \"waterproofing contractor\" and compare the companies they find. A website with project galleries, service pages, and an easy quote request captures these high-value enquiries.",
        "We build contractor websites that showcase your work, explain your process and materials, and capture qualified leads from homeowners, builders, and businesses.",
      ],
      features: [
        { title: "Project gallery", description: "Completed construction and renovation projects with photos." },
        { title: "Service pages", description: "Construction, renovation, waterproofing, flooring, painting, and more." },
        { title: "Quote request", description: "Forms capturing project type, size, location, and timeline." },
        { title: "Process & materials", description: "Explain stages, quality checks, and materials used." },
        { title: "Before & after", description: "Transformation photos for renovation projects." },
        { title: "Commercial work", description: "Pages for office, retail, and industrial projects." },
        { title: "Testimonials", description: "Client reviews and project stories." },
        { title: "Local SEO", description: "Optimized for renovation and construction searches in your area." },
      ],
      pages: ["Home", "About", "Services", "Home construction", "Renovation", "Waterproofing", "Commercial projects", "Projects gallery", "Process", "Get a quote"],
      integrations: ["Quote forms", "WhatsApp", "Photo uploads", "Google Maps", "CRM / sheet integration", "Google reviews"],
      faqs: [
        { question: "Can clients upload photos of their site with a quote request?", answer: "Yes. The quote form can accept photos, making it easier for you to estimate." },
        { question: "Can we show ongoing and completed projects?", answer: "Yes. Projects can be categorised as ongoing or completed with photo updates." },
        { question: "Can we have separate pages for each service?", answer: "Yes. Separate pages help clients find the right service and help you rank for each one." },
        { question: "Do you build websites for commercial contractors too?", answer: "Yes. Commercial contractor sites focus on capabilities, past projects, and tender or RFQ enquiries." },
      ],
      relatedService: { label: "Lead generation", href: "/services/lead-generation" },
    },
    extras: {
      mistakes: [
        { title: "No real project photos", description: "Stock photos make clients doubt your experience." },
        { title: "Vague services", description: "\"All civil work\" doesn't tell clients what you actually specialise in." },
        { title: "No process explained", description: "Clients fear delays. Explaining stages and timelines builds confidence." },
        { title: "Hard-to-find contact", description: "Homeowners want to call quickly. Click-to-call must be obvious." },
      ],
      growth: [
        { title: "Google Business Profile", description: "Photos and reviews help you appear for local renovation searches." },
        { title: "Before-after reels", description: "Transformation videos perform well on Instagram and YouTube." },
        { title: "Architect partnerships", description: "A professional site helps you win referrals from architects and designers." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's builder floors, independent houses in DLF and Sushant Lok, and thousands of apartments create steady demand for construction, renovation, and repair work, alongside commercial fit-outs for offices and shops. Grox Media builds contractor websites for Gurgaon that showcase your projects and bring in serious enquiries.",
        faq: { question: "Can we target builder-floor construction in Gurgaon?", answer: "Yes. We can create pages focused on builder-floor and independent house construction in areas like DLF, Sushant Lok, and South City." },
        depth: {
          metaDescription: "Contractor & renovation website designing company in Gurgaon (Gurugram). Project galleries, service pages & quote requests for builders and renovation firms. Free quote: +91 92668 06477.",
          heading: "Contractor Websites for Gurgaon",
          paragraphs: [
            "Many Gurgaon plot owners in DLF phases, Sushant Lok, and South City rebuild old houses as builder floors, which creates demand for construction contractors with proven track records.",
            "Office and retail fit-outs are another large segment in Gurgaon, where companies want contractors who can deliver on tight timelines.",
          ],
          points: [
            { title: "Builder-floor construction", description: "Pages for rebuilding and new construction." },
            { title: "Commercial fit-outs", description: "Office and retail projects showcased." },
            { title: "Waterproofing & repairs", description: "Monsoon-related repair services." },
            { title: "Area targeting", description: "Content for DLF, Sushant Lok, and South City." },
          ],
          faqs: [
            { question: "Can we show construction stages with photos?", answer: "Yes. Project pages can include stage-by-stage photos from foundation to finishing." },
            { question: "Can companies request fit-out quotes?", answer: "Yes. A commercial quote form captures area, location, and timeline." },
          ],
        },
      },
      dwarka: {
        intro: "Dwarka's society flats and independent homes in nearby areas regularly need renovation, waterproofing, and repairs. Grox Media builds contractor websites for Dwarka that show your completed work and make it easy for homeowners and societies to request a quote.",
        faq: { question: "Can housing societies request quotes for common-area work?", answer: "Yes. We can add a section for society and RWA projects with a dedicated enquiry form." },
        depth: {
          metaDescription: "Contractor & renovation website designing company in Dwarka, New Delhi. Project galleries, waterproofing & renovation pages with quote forms. Call +91 92668 06477.",
          heading: "Contractor Websites for Dwarka",
          paragraphs: [
            "Many Dwarka buildings are two to three decades old, so renovation, waterproofing, and structural repair are common needs for both individual owners and societies.",
            "A website with before-and-after projects and a simple quote form helps you win these jobs.",
          ],
          points: [
            { title: "Society projects", description: "Work for RWAs and housing societies." },
            { title: "Waterproofing", description: "Monsoon waterproofing services highlighted." },
            { title: "Flat renovation", description: "Before-and-after renovation galleries." },
          ],
          faqs: [
            { question: "Can we list waterproofing as a separate service?", answer: "Yes. A dedicated waterproofing page helps you rank for these searches." },
          ],
        },
      },
    },
  },
];
