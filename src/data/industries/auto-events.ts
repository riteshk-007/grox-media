import type { IndustryBundle } from "./types";

export const autoEventsBundles: IndustryBundle[] = [
  /* ───────────────────────── CAR DETAILING ───────────────────────── */
  {
    industry: {
      key: "car-detailing",
      name: "Car Detailing",
      audience: "car detailing studios, car wash, and ceramic coating centres",
      whyHeading: "Why Car Detailing Studios Need a Premium Website",
      why: [
        "Car owners spending on ceramic coating, PPF, or detailing want proof of quality. They compare studios on finished work, products used, warranty details, and reviews. A premium website with a strong portfolio helps you justify your value and stand out from cheap washers.",
        "Your website can present every service — exterior and interior detailing, ceramic coating, graphene coating, paint protection film, paint correction, and doorstep car wash — with clear explanations, and let customers book a slot or request a quote for their car model.",
        "We build car detailing websites with bold visuals, before-and-after galleries, booking, and local SEO for \"ceramic coating near me\" and detailing searches.",
      ],
      features: [
        { title: "Service pages", description: "Ceramic coating, PPF, paint correction, interior detailing, and washes." },
        { title: "Before & after gallery", description: "Show real transformations by car model." },
        { title: "Booking by car model", description: "Customers select car type and service for a quote or slot." },
        { title: "Products & warranty", description: "Explain products used and warranty terms." },
        { title: "Doorstep service", description: "Booking for at-home car wash and detailing." },
        { title: "Packages & memberships", description: "Monthly wash plans and maintenance packages." },
        { title: "Video showcase", description: "Detailing process videos and reels." },
        { title: "Local SEO", description: "Optimized for detailing and coating searches in your area." },
      ],
      pages: ["Home", "Ceramic coating", "PPF", "Paint correction", "Interior detailing", "Car wash", "Doorstep service", "Gallery", "Packages", "Book now"],
      integrations: ["Booking form", "WhatsApp", "Instagram feed", "YouTube videos", "Razorpay / UPI", "Google reviews"],
      faqs: [
        { question: "Can customers book by car model?", answer: "Yes. The booking form captures car make, model, and service so you can quote accurately." },
        { question: "Can we show before-and-after results?", answer: "Yes. A gallery organised by service and car model showcases your work." },
        { question: "Can we offer doorstep car wash booking?", answer: "Yes. A doorstep service page with service areas and booking can be added." },
        { question: "Can we explain coating warranties?", answer: "Yes. Warranty and product details can be presented clearly on each service page." },
      ],
      relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
    },
    extras: {
      mistakes: [
        { title: "No real work shown", description: "Detailing is visual; stock images don't convince car owners." },
        { title: "Unclear services", description: "Explain the difference between coating, PPF, and polishing." },
        { title: "Vague warranties", description: "Unclear warranty terms create disputes and distrust." },
        { title: "No booking option", description: "Car owners want to fix a slot quickly." },
      ],
      growth: [
        { title: "Instagram and YouTube reels", description: "Transformation videos attract car enthusiasts." },
        { title: "Car club partnerships", description: "Owners' clubs and dealerships bring referrals." },
        { title: "Google reviews", description: "Reviews with photos build trust locally." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon has one of the highest concentrations of premium and luxury cars in the NCR, and owners here invest in ceramic coating, PPF, and professional detailing. Grox Media builds car detailing websites for Gurgaon studios that match the premium expectations of these customers.",
        faq: { question: "Can we target luxury car owners in Gurgaon?", answer: "Yes. We create premium-focused pages and galleries featuring high-end car work to attract luxury car owners." },
        depth: {
          metaDescription: "Car detailing & ceramic coating website designing company in Gurgaon (Gurugram). Galleries, booking by car model, PPF & coating pages. Free quote: +91 92668 06477.",
          heading: "Car Detailing Websites for Gurgaon",
          paragraphs: [
            "Luxury and premium car owners in Gurgaon expect detailing studios to look as polished as the cars they work on. A premium website with high-quality work samples sets that expectation.",
            "Doorstep car wash subscriptions are popular in Gurgaon's gated societies, offering recurring revenue.",
          ],
          points: [
            { title: "Luxury car showcase", description: "Galleries featuring premium vehicles." },
            { title: "Society subscriptions", description: "Monthly doorstep wash plans." },
            { title: "PPF & coating focus", description: "Detailed high-value service pages." },
            { title: "Dealer tie-ups", description: "Partnership pages for dealerships." },
          ],
          faqs: [
            { question: "Can we sell monthly car wash subscriptions?", answer: "Yes. Subscription plans can be presented with online sign-up and payment." },
          ],
        },
      },
      dwarka: {
        intro: "Car owners across Dwarka look for reliable car wash, detailing, and coating services near home. Grox Media builds car detailing websites for Dwarka that show your work and make booking easy.",
        faq: { question: "Can we offer doorstep car wash in Dwarka sectors?", answer: "Yes. A doorstep service page lists the sectors you cover with booking." },
        depth: {
          metaDescription: "Car detailing & car wash website designing company in Dwarka, New Delhi. Booking, coating pages & before-after galleries. Call +91 92668 06477.",
          heading: "Car Detailing Websites for Dwarka",
          paragraphs: [
            "Dwarka car owners value convenient, trustworthy detailing and washing close to home.",
            "Before-and-after galleries and simple booking help you win their business.",
          ],
          points: [
            { title: "Doorstep wash", description: "Sector-wise doorstep service." },
            { title: "Coating services", description: "Ceramic and graphene coating pages." },
            { title: "Easy booking", description: "Online and WhatsApp booking." },
          ],
          faqs: [
            { question: "Can we show monthly wash plans?", answer: "Yes. Monthly plans can be listed with sign-up options." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── CAR RENTAL ───────────────────────── */
  {
    industry: {
      key: "car-rental",
      name: "Car Rental",
      audience: "car rental, taxi, and self-drive companies",
      whyHeading: "Why Car Rental Companies Need a Booking Website",
      why: [
        "Travellers searching for airport taxis, outstation cabs, or self-drive cars want to see the fleet, understand terms, and book quickly. A car rental website with clear vehicle options and instant booking or enquiry wins these customers from aggregator apps.",
        "Your website can present your fleet with seating and luggage capacity, packages for airport transfers, local hourly rentals, outstation trips, and corporate travel, along with clear policies and documents required.",
        "We build car rental websites with fleet pages, booking forms, WhatsApp enquiries, and SEO for route and airport searches.",
      ],
      features: [
        { title: "Fleet pages", description: "Sedans, SUVs, tempo travellers, and luxury cars with capacity details." },
        { title: "Booking form", description: "Pickup, drop, date, time, and vehicle type." },
        { title: "Airport transfers", description: "Dedicated airport pickup and drop pages." },
        { title: "Outstation trips", description: "Pages for popular routes and tours." },
        { title: "Self-drive rentals", description: "Documents, deposit policy, and booking for self-drive." },
        { title: "Corporate travel", description: "Monthly and corporate transport enquiries." },
        { title: "Policies", description: "Clear cancellation, fuel, and driver policies." },
        { title: "Route SEO", description: "Optimized for airport, route, and area searches." },
      ],
      pages: ["Home", "Our fleet", "Airport transfers", "Local rentals", "Outstation trips", "Self-drive", "Corporate travel", "Tour packages", "Policies", "Book now"],
      integrations: ["Booking form", "WhatsApp", "Click-to-call", "Razorpay / UPI", "Google Maps", "SMS confirmations"],
      faqs: [
        { question: "Can customers book cabs directly on our website?", answer: "Yes. A booking form captures trip details, and confirmations go to you and the customer." },
        { question: "Can we create pages for popular routes?", answer: "Yes. Route pages like \"Delhi to Jaipur taxi\" help you rank for outstation searches." },
        { question: "Can we handle self-drive document uploads?", answer: "Yes. Customers can upload licence and ID documents with their booking." },
        { question: "Can companies request monthly transport?", answer: "Yes. A corporate travel page captures business enquiries." },
      ],
      relatedService: { label: "Lead generation", href: "/services/lead-generation" },
    },
    extras: {
      mistakes: [
        { title: "No fleet photos", description: "Customers want to see the actual vehicles." },
        { title: "Unclear policies", description: "Hidden terms around fuel, tolls, and waiting time cause disputes." },
        { title: "No route pages", description: "Outstation customers search by route." },
        { title: "Slow booking", description: "Travellers book whoever confirms fastest." },
      ],
      growth: [
        { title: "Route and airport SEO", description: "Route pages capture high-intent travel searches." },
        { title: "Corporate contracts", description: "Employee transport contracts bring recurring business." },
        { title: "Google ads", description: "Ads for airport and outstation searches bring quick bookings." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's companies, airport travellers, and weekend trippers create strong demand for cabs, corporate transport, and self-drive cars. Grox Media builds car rental websites for Gurgaon that capture airport, outstation, and corporate bookings directly.",
        faq: { question: "Can we target employee transport contracts in Gurgaon?", answer: "Yes. A corporate transport page targets companies in Cyber City, Udyog Vihar, and Golf Course Road that need employee cabs." },
        depth: {
          metaDescription: "Car rental & taxi website designing company in Gurgaon (Gurugram). Fleet pages, airport transfers, outstation routes & corporate travel. Free quote: +91 92668 06477.",
          heading: "Car Rental Websites for Gurgaon",
          paragraphs: [
            "Corporate employee transport and airport transfers for business travellers are major revenue streams in Gurgaon.",
            "Weekend getaways from Gurgaon to Jaipur, Rishikesh, and the hills drive steady outstation demand.",
          ],
          points: [
            { title: "Employee transport", description: "Corporate cab contracts." },
            { title: "Airport transfers", description: "IGI Airport pickups and drops." },
            { title: "Weekend getaways", description: "Popular outstation routes from Gurgaon." },
            { title: "Luxury cars", description: "Premium cars for events and executives." },
          ],
          faqs: [
            { question: "Can we rent luxury cars for weddings through the website?", answer: "Yes. A wedding and luxury car page with enquiries can be added." },
          ],
        },
      },
      dwarka: {
        intro: "Being next to IGI Airport, Dwarka has constant demand for airport taxis, along with outstation trips and local rentals. Grox Media builds car rental websites for Dwarka that capture airport and travel bookings.",
        faq: { question: "Can we target airport taxi searches from Dwarka?", answer: "Yes. Airport transfer pages target travellers searching for taxis to and from IGI Airport." },
        depth: {
          metaDescription: "Car rental & airport taxi website designing company in Dwarka, New Delhi. Airport transfers, outstation trips & booking forms. Call +91 92668 06477.",
          heading: "Car Rental Websites for Dwarka",
          paragraphs: [
            "Dwarka's location beside IGI Airport makes airport transfers a core service for local cab operators.",
            "Outstation trips and tempo traveller rentals for family trips add further demand.",
          ],
          points: [
            { title: "Airport focus", description: "IGI Airport transfer pages." },
            { title: "Tempo travellers", description: "Group travel vehicles." },
            { title: "Quick booking", description: "Fast booking and WhatsApp confirmation." },
          ],
          faqs: [
            { question: "Can customers book late-night airport pickups?", answer: "Yes. The booking form accepts any time, and you can show 24-hour availability if offered." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── CAR REPAIR ───────────────────────── */
  {
    industry: {
      key: "car-repair",
      name: "Car Repair",
      audience: "car service centres, multi-brand garages, and auto workshops",
      whyHeading: "Why Car Service Centres Need a Website",
      why: [
        "Car owners want a garage they can trust — transparent work, genuine parts, and fair service. When they search \"car service near me\" or \"multi-brand car workshop\", they compare websites and reviews before choosing. A professional website shows your facility, services, and brands serviced.",
        "Your website can take service bookings, explain periodic servicing, denting-painting, AC repair, wheel alignment, and insurance claims, and offer pickup-and-drop to busy customers.",
        "We build car service websites with booking by car model, service pages, and local SEO for the areas you serve.",
      ],
      features: [
        { title: "Service booking", description: "Book by car make, model, and service type." },
        { title: "Service pages", description: "Periodic service, denting & painting, AC, batteries, tyres, and alignment." },
        { title: "Brands serviced", description: "List the car brands your workshop handles." },
        { title: "Pickup & drop", description: "Doorstep pickup booking for busy customers." },
        { title: "Insurance claims", description: "Explain cashless claim assistance if offered." },
        { title: "Workshop gallery", description: "Photos of equipment and facility." },
        { title: "Service updates", description: "WhatsApp updates on service progress." },
        { title: "Local SEO", description: "Optimized for \"car service near me\" and brand searches." },
      ],
      pages: ["Home", "Periodic service", "Denting & painting", "Car AC repair", "Batteries & tyres", "Insurance claims", "Brands we service", "Pickup & drop", "Workshop", "Book service"],
      integrations: ["Booking form", "WhatsApp", "Click-to-call", "Google Maps", "Google reviews", "SMS reminders"],
      faqs: [
        { question: "Can customers book car servicing online?", answer: "Yes. They select car model and service, and your team receives the booking." },
        { question: "Can we offer pickup and drop through the website?", answer: "Yes. A pickup-and-drop option with service areas can be included." },
        { question: "Can we list the car brands we service?", answer: "Yes. A brands section helps you rank for brand-specific searches." },
        { question: "Can we send service reminders?", answer: "We can set up reminder emails or messages depending on your tools." },
      ],
      relatedService: { label: "SEO services", href: "/services/seo" },
    },
    extras: {
      mistakes: [
        { title: "No workshop photos", description: "Customers want to see a clean, equipped facility." },
        { title: "Unclear services", description: "List exactly what each service includes." },
        { title: "Implying authorisation", description: "Don't claim to be brand-authorised unless you are." },
        { title: "No booking option", description: "Busy owners want to book without calling." },
      ],
      growth: [
        { title: "Google reviews", description: "Trust is everything for garages; reviews drive choice." },
        { title: "Service reminders", description: "Reminders bring customers back for periodic servicing." },
        { title: "Corporate fleets", description: "Fleet maintenance contracts bring steady work." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon has a huge number of cars, from daily commuter hatchbacks to luxury SUVs, and owners want trustworthy service without waiting at the workshop. Grox Media builds car service websites for Gurgaon garages that take bookings and offer pickup-and-drop convenience.",
        faq: { question: "Can we target corporate fleet maintenance in Gurgaon?", answer: "Yes. A fleet services page targets companies and cab operators that need regular maintenance." },
        depth: {
          metaDescription: "Car repair & service centre website designing company in Gurgaon (Gurugram). Online booking, pickup & drop, brand pages & local SEO. Free quote: +91 92668 06477.",
          heading: "Car Service Websites for Gurgaon",
          paragraphs: [
            "Busy Gurgaon professionals prefer pickup-and-drop servicing and online booking over visiting workshops during office hours.",
            "Cab operators and corporate fleets in Gurgaon need regular servicing, offering contract opportunities.",
          ],
          points: [
            { title: "Pickup & drop", description: "Convenience for working professionals." },
            { title: "Fleet contracts", description: "Maintenance for cab operators and companies." },
            { title: "Luxury car service", description: "Pages for premium brands." },
            { title: "Insurance claims", description: "Cashless claim assistance." },
          ],
          faqs: [
            { question: "Can we show luxury brand servicing separately?", answer: "Yes. Dedicated pages for premium brands help attract luxury car owners." },
          ],
        },
      },
      dwarka: {
        intro: "Car owners in Dwarka look for a reliable local garage for servicing, repairs, and denting-painting. Grox Media builds car service websites for Dwarka workshops that build trust and make booking easy.",
        faq: { question: "Can customers from nearby sectors book pickup?", answer: "Yes. Pickup service areas can be listed by sector." },
        depth: {
          metaDescription: "Car repair & service centre website designing company in Dwarka, New Delhi. Service booking, denting-painting & pickup pages. Call +91 92668 06477.",
          heading: "Car Service Websites for Dwarka",
          paragraphs: [
            "Dwarka car owners value a nearby, trustworthy workshop with clear services.",
            "A website with booking, photos, and reviews helps you win their loyalty.",
          ],
          points: [
            { title: "Local trust", description: "Workshop photos and reviews." },
            { title: "Denting & painting", description: "Body repair services." },
            { title: "Sector pickup", description: "Pickup across Dwarka sectors." },
          ],
          faqs: [
            { question: "Can we show our workshop location on a map?", answer: "Yes. A Google Map and directions are included." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── PHOTOGRAPHER ───────────────────────── */
  {
    industry: {
      key: "photographer",
      name: "Photographer",
      audience: "photographers, videographers, and photo studios",
      whyHeading: "Why Photographers Need a Portfolio Website",
      why: [
        "Clients hire photographers based on their work. Instagram shows your latest posts, but a portfolio website lets you present your best work by category — weddings, pre-weddings, maternity, product, corporate, and events — in a curated, professional way.",
        "Your website can also explain your packages and process, share client stories, and let couples or brands check availability and enquire for their date.",
        "We build fast, image-first photography websites with beautiful galleries that load quickly on mobile and local SEO for your specialities.",
      ],
      features: [
        { title: "Curated portfolio", description: "Galleries by category: wedding, pre-wedding, product, corporate, events." },
        { title: "Fast image loading", description: "Optimized galleries that stay fast on mobile." },
        { title: "Date availability enquiry", description: "Clients check and request their event date." },
        { title: "Films & videos", description: "Showcase wedding films and brand videos." },
        { title: "Client stories", description: "Featured shoots and testimonials." },
        { title: "Client galleries", description: "Private galleries for clients to view and download photos." },
        { title: "Studio details", description: "Studio space, equipment, and booking for studio shoots." },
        { title: "Local SEO", description: "Optimized for photography specialities in your area." },
      ],
      pages: ["Home", "Portfolio", "Weddings", "Pre-wedding", "Maternity & baby", "Product & commercial", "Corporate & events", "Films", "About", "Check availability"],
      integrations: ["Enquiry forms", "WhatsApp", "Instagram feed", "YouTube / Vimeo", "Client gallery", "Google reviews"],
      faqs: [
        { question: "Will large galleries slow the website down?", answer: "No. We optimize and lazy-load images so galleries stay fast." },
        { question: "Can clients view their photos privately?", answer: "Yes. We can set up private client galleries or integrate a gallery service." },
        { question: "Can couples check our availability?", answer: "Yes. An enquiry form captures their date and event details." },
        { question: "Can we showcase wedding films?", answer: "Yes. Films can be embedded from YouTube or Vimeo." },
      ],
      relatedService: { label: "Video editing", href: "/services/video-editing" },
    },
    extras: {
      mistakes: [
        { title: "Showing everything", description: "Too many average photos dilute your best work. Curate." },
        { title: "Slow galleries", description: "Uncompressed images make portfolios unusable on phones." },
        { title: "No clear specialities", description: "Clients want to see work matching their need." },
        { title: "No enquiry path", description: "Make it easy to ask about a date." },
      ],
      growth: [
        { title: "Instagram and reels", description: "Behind-the-scenes and highlight reels attract clients." },
        { title: "Vendor partnerships", description: "Planners and venues refer photographers with strong portfolios." },
        { title: "Blog features", description: "Featured shoots rank for venue and style searches." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon is a busy market for wedding, corporate, and product photography, with farmhouse weddings, hotel events, office functions, and D2C brands needing product shoots. Grox Media builds portfolio websites for Gurgaon photographers that win bookings across these segments.",
        faq: { question: "Can we target corporate event photography in Gurgaon?", answer: "Yes. A corporate photography page targets companies for events, headshots, and office shoots." },
        depth: {
          metaDescription: "Photographer website designing company in Gurgaon (Gurugram). Portfolio galleries, wedding & product photography pages, date enquiries. Free quote: +91 92668 06477.",
          heading: "Photography Websites for Gurgaon",
          paragraphs: [
            "Gurgaon's farmhouse and hotel weddings create strong demand for wedding photographers and filmmakers with premium portfolios.",
            "D2C brands and corporates in Gurgaon need product, e-commerce, and headshot photography, a steady commercial segment.",
          ],
          points: [
            { title: "Wedding portfolios", description: "Hotel and farmhouse wedding showcases." },
            { title: "Product photography", description: "E-commerce and brand shoots." },
            { title: "Corporate headshots", description: "Office and team photography." },
            { title: "Venue features", description: "Shoots featured by Gurgaon venue." },
          ],
          faqs: [
            { question: "Can we have separate portfolios for weddings and products?", answer: "Yes. Each speciality gets its own gallery and page." },
          ],
        },
      },
      dwarka: {
        intro: "Photographers in Dwarka cover weddings, family functions, maternity and baby shoots, and events across West Delhi. Grox Media builds portfolio websites for Dwarka photographers that showcase your best work and bring in bookings.",
        faq: { question: "Can we highlight maternity and baby shoots?", answer: "Yes. Dedicated galleries and pages for maternity and baby photography can be added." },
        depth: {
          metaDescription: "Photographer website designing company in Dwarka, New Delhi. Wedding, maternity & event portfolios with date enquiries. Call +91 92668 06477.",
          heading: "Photography Websites for Dwarka",
          paragraphs: [
            "Family events, weddings, and baby shoots are major demand areas for Dwarka photographers.",
            "A curated portfolio and easy enquiry help you win local clients.",
          ],
          points: [
            { title: "Family events", description: "Weddings and functions." },
            { title: "Maternity & baby", description: "Dedicated galleries." },
            { title: "Studio shoots", description: "Studio booking pages." },
          ],
          faqs: [
            { question: "Can clients book studio sessions online?", answer: "Yes. A studio booking form can be added." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── WEDDING PLANNER ───────────────────────── */
  {
    industry: {
      key: "wedding-planner",
      name: "Wedding Planner",
      audience: "wedding planners, event managers, and decorators",
      whyHeading: "Why Wedding Planners Need a Stunning Website",
      why: [
        "Couples and families plan weddings months ahead and research planners carefully. They want to see real weddings you've planned, understand your services, and feel confident you can handle every detail. A beautiful website with real wedding stories makes that case far better than a brochure.",
        "Your website can showcase weddings by theme and venue, explain full planning, partial planning, décor, and destination wedding services, and capture detailed enquiries with dates, guest counts, and venues.",
        "We design elegant wedding planner websites with story-led portfolios, enquiry forms, and SEO for wedding planning searches.",
      ],
      features: [
        { title: "Real wedding stories", description: "Featured weddings with photos, themes, and venues." },
        { title: "Service pages", description: "Full planning, décor, destination weddings, and entertainment." },
        { title: "Detailed enquiry form", description: "Dates, guest count, venue, and budget range." },
        { title: "Décor gallery", description: "Themes, mandap designs, and stage décor." },
        { title: "Vendor network", description: "Showcase your trusted vendor partners." },
        { title: "Testimonials", description: "Stories and reviews from couples." },
        { title: "Destination weddings", description: "Pages for popular destinations." },
        { title: "Wedding SEO", description: "Optimized for planner, décor, and venue searches." },
      ],
      pages: ["Home", "Real weddings", "Services", "Décor", "Destination weddings", "Corporate events", "Venues", "Testimonials", "About", "Plan your wedding"],
      integrations: ["Enquiry forms", "WhatsApp", "Instagram feed", "YouTube films", "Google Maps", "Google reviews"],
      faqs: [
        { question: "Can we showcase full wedding stories?", answer: "Yes. Each wedding can have its own story page with photos and details." },
        { question: "Can couples submit detailed enquiries?", answer: "Yes. The form captures date, guest count, venue preferences, and services needed." },
        { question: "Can we promote destination weddings?", answer: "Yes. Destination pages showcase locations and your experience there." },
        { question: "Can we feature our vendor partners?", answer: "Yes. A vendors section can showcase your network." },
      ],
      relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
    },
    extras: {
      mistakes: [
        { title: "Only décor photos", description: "Couples want full stories, not just stage photos." },
        { title: "Short enquiry forms", description: "Missing date and guest details slow down planning conversations." },
        { title: "No clear services", description: "Explain what full and partial planning include." },
        { title: "Slow galleries", description: "Heavy images must be optimized for mobile." },
      ],
      growth: [
        { title: "Instagram reels", description: "Wedding highlight reels attract couples." },
        { title: "Venue partnerships", description: "Venues refer planners they trust." },
        { title: "Wedding blogs", description: "Featured weddings rank for venue and theme searches." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon hosts countless weddings at its luxury hotels and farmhouses, along with corporate events and celebrations. Grox Media builds wedding planner websites for Gurgaon that showcase your real weddings and bring in high-value enquiries.",
        faq: { question: "Can we feature weddings at specific Gurgaon venues?", answer: "Yes. Venue-based wedding stories help you appear when couples research those venues." },
        depth: {
          metaDescription: "Wedding planner website designing company in Gurgaon (Gurugram). Real wedding stories, décor galleries & detailed enquiry forms. Free quote: +91 92668 06477.",
          heading: "Wedding Planner Websites for Gurgaon",
          paragraphs: [
            "Gurgaon's luxury hotels and farmhouses host large, high-budget weddings where couples expect premium planners.",
            "Corporate events, offsites, and launches in Gurgaon offer planners year-round work beyond wedding season.",
          ],
          points: [
            { title: "Venue stories", description: "Weddings at Gurgaon hotels and farmhouses." },
            { title: "Corporate events", description: "Offsites and launch events." },
            { title: "Luxury positioning", description: "Premium design for high-end clients." },
            { title: "Destination weddings", description: "Rajasthan and hill destinations." },
          ],
          faqs: [
            { question: "Can we run a separate corporate events section?", answer: "Yes. Corporate events can have their own pages and portfolio." },
          ],
        },
      },
      dwarka: {
        intro: "Families in Dwarka and West Delhi celebrate weddings, engagements, and functions at banquets and farmhouses nearby. Grox Media builds wedding planner websites for Dwarka that showcase your work and capture enquiries.",
        faq: { question: "Can we showcase banquet décor work?", answer: "Yes. Décor galleries by venue and theme can be added." },
        depth: {
          metaDescription: "Wedding planner & decorator website designing company in Dwarka, New Delhi. Décor galleries, real weddings & enquiry forms. Call +91 92668 06477.",
          heading: "Wedding Planner Websites for Dwarka",
          paragraphs: [
            "Dwarka families often host weddings and functions at nearby banquets and farmhouses along the Dwarka Expressway.",
            "Décor-focused galleries and simple enquiries help planners win these bookings.",
          ],
          points: [
            { title: "Banquet décor", description: "Galleries by theme." },
            { title: "Functions", description: "Engagements, mehendi, and receptions." },
            { title: "Easy enquiry", description: "Date and guest-count forms." },
          ],
          faqs: [
            { question: "Can we list smaller functions like birthdays too?", answer: "Yes. Additional event types can be added as services." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── FLORIST ───────────────────────── */
  {
    industry: {
      key: "florist",
      name: "Florist",
      audience: "florists, flower shops, and flower décor services",
      whyHeading: "Why Florists Need an Online Ordering Website",
      why: [
        "Most flower orders are gifts placed online, often at the last minute — birthdays, anniversaries, and apologies. People search \"flower delivery near me\" or \"same day flowers\" and order from whoever offers a clear catalogue, delivery slots, and easy payment.",
        "Your own website lets you sell bouquets, arrangements, and combos with cakes or chocolates without marketplace commissions, and promote event décor for weddings and corporate functions.",
        "We build florist websites with online ordering, delivery slots, gift messages, and local SEO for flower delivery searches.",
      ],
      features: [
        { title: "Online catalogue", description: "Bouquets, arrangements, and combos by occasion." },
        { title: "Delivery slots", description: "Same-day, midnight, and scheduled delivery options." },
        { title: "Gift messages", description: "Personal notes with every order." },
        { title: "Occasion collections", description: "Birthday, anniversary, sympathy, and festivals." },
        { title: "Event décor", description: "Wedding and corporate flower décor enquiries." },
        { title: "Online payments", description: "UPI, cards, and wallets at checkout." },
        { title: "Corporate orders", description: "Regular office flowers and bulk orders." },
        { title: "Local SEO", description: "Optimized for flower delivery searches in your area." },
      ],
      pages: ["Home", "Shop by occasion", "Bouquets", "Arrangements", "Combos", "Same-day delivery", "Event décor", "Corporate orders", "Delivery areas", "Contact"],
      integrations: ["Online store", "Razorpay / UPI", "Delivery slot picker", "WhatsApp", "Google Maps", "Order notifications"],
      faqs: [
        { question: "Can customers choose delivery time slots?", answer: "Yes. We add same-day, midnight, and scheduled slots based on your capacity." },
        { question: "Can customers add a gift message?", answer: "Yes. Gift messages are captured at checkout." },
        { question: "Can we sell combos with cakes and chocolates?", answer: "Yes. Combos can be listed as products." },
        { question: "Can we take wedding décor enquiries?", answer: "Yes. An event décor page with galleries and an enquiry form can be added." },
      ],
      relatedService: { label: "Website development", href: "/services/website-development" },
    },
    extras: {
      mistakes: [
        { title: "No delivery clarity", description: "Customers need to know if you deliver today to their area." },
        { title: "Poor product photos", description: "Flowers sell on visuals; photos must be fresh and accurate." },
        { title: "No midnight delivery", description: "A popular option for birthdays and anniversaries." },
        { title: "Complicated checkout", description: "Last-minute buyers abandon slow checkouts." },
      ],
      growth: [
        { title: "Occasion campaigns", description: "Valentine's Day and Mother's Day bring huge spikes." },
        { title: "Corporate subscriptions", description: "Weekly office flowers bring recurring orders." },
        { title: "Google Business Profile", description: "Local map results drive delivery orders." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's professionals frequently order flowers online for birthdays, anniversaries, and office celebrations, often with same-day or midnight delivery. Grox Media builds florist websites for Gurgaon that take orders directly and handle delivery slots across the city.",
        faq: { question: "Can we set delivery charges by Gurgaon sector?", answer: "Yes. Delivery zones and charges can be configured by sector or pincode." },
        depth: {
          metaDescription: "Florist & flower delivery website designing company in Gurgaon (Gurugram). Online ordering, delivery slots, corporate flowers & event décor. Free quote: +91 92668 06477.",
          heading: "Florist Websites for Gurgaon",
          paragraphs: [
            "Gurgaon's offices, hotels, and events create steady demand for corporate flower arrangements and event décor alongside personal gifting.",
            "Midnight and same-day deliveries are especially popular among Gurgaon's online shoppers.",
          ],
          points: [
            { title: "Corporate flowers", description: "Weekly office and hotel arrangements." },
            { title: "Midnight delivery", description: "Late-night delivery slots." },
            { title: "Event décor", description: "Weddings and corporate events." },
            { title: "Sector-wise delivery", description: "Delivery zones across Gurgaon." },
          ],
          faqs: [
            { question: "Can companies set up recurring flower orders?", answer: "Yes. A corporate page captures recurring order enquiries." },
          ],
        },
      },
      dwarka: {
        intro: "Florists in Dwarka serve families celebrating birthdays, anniversaries, and festivals, plus weddings and functions. Grox Media builds florist websites for Dwarka that make ordering flowers online quick and easy.",
        faq: { question: "Can we offer delivery across West Delhi?", answer: "Yes. Delivery areas and charges can be set for Dwarka and nearby areas." },
        depth: {
          metaDescription: "Florist & flower delivery website designing company in Dwarka, New Delhi. Online ordering, same-day delivery & décor enquiries. Call +91 92668 06477.",
          heading: "Florist Websites for Dwarka",
          paragraphs: [
            "Dwarka customers often order flowers for family occasions and festivals.",
            "A simple online store with delivery slots helps you capture these orders directly.",
          ],
          points: [
            { title: "Occasion collections", description: "Birthdays and festivals." },
            { title: "Same-day delivery", description: "Delivery slots for last-minute orders." },
            { title: "Wedding flowers", description: "Décor and garland enquiries." },
          ],
          faqs: [
            { question: "Can customers order on WhatsApp?", answer: "Yes. WhatsApp ordering can be added alongside online checkout." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── BAKERY ───────────────────────── */
  {
    industry: {
      key: "bakery",
      name: "Bakery",
      audience: "bakeries, cake shops, and home bakers",
      whyHeading: "Why Bakeries and Cake Shops Need Their Own Website",
      why: [
        "Cake orders are usually planned for a specific date — birthdays, anniversaries, and parties — and customers want to browse designs, choose flavours and sizes, and order ahead. Delivery apps charge commission and don't handle custom cake orders well. Your own website does.",
        "A bakery website can present your cakes by occasion and flavour, take custom cake requests with reference photos, offer eggless options, and schedule delivery or pickup. It also promotes your breads, cookies, and festive hampers.",
        "We build bakery websites with online ordering, custom cake forms, delivery scheduling, and local SEO for cake delivery searches.",
      ],
      features: [
        { title: "Cake catalogue", description: "Cakes by occasion, flavour, size, and eggless options." },
        { title: "Custom cake requests", description: "Upload a reference photo and describe the design." },
        { title: "Delivery scheduling", description: "Choose date, time slot, or pickup." },
        { title: "Message on cake", description: "Capture names and messages at checkout." },
        { title: "Online payments", description: "UPI, cards, and wallets." },
        { title: "Festive hampers", description: "Diwali, Christmas, and corporate gifting." },
        { title: "Bakery menu", description: "Breads, cookies, and snacks." },
        { title: "Local SEO", description: "Optimized for cake delivery searches in your area." },
      ],
      pages: ["Home", "Birthday cakes", "Anniversary cakes", "Custom cakes", "Eggless cakes", "Cupcakes & desserts", "Breads & cookies", "Festive hampers", "Delivery areas", "Order now"],
      integrations: ["Online store", "Razorpay / UPI", "Delivery scheduler", "Photo upload", "WhatsApp", "Order notifications"],
      faqs: [
        { question: "Can customers request custom cake designs?", answer: "Yes. A custom cake form lets them upload reference images and describe the design." },
        { question: "Can we mark eggless options?", answer: "Yes. Eggless and other dietary options can be clearly tagged and filtered." },
        { question: "Can customers schedule delivery for a future date?", answer: "Yes. Delivery date and time slots can be selected at checkout." },
        { question: "Can home bakers get a website too?", answer: "Yes. We build simple ordering websites for home bakers with WhatsApp and online payment." },
      ],
      relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
    },
    extras: {
      mistakes: [
        { title: "No custom cake option", description: "Custom cakes are high-value; make requesting them easy." },
        { title: "Unclear eggless options", description: "Many customers need eggless cakes and filter for them." },
        { title: "Poor photos", description: "Cakes are visual purchases; photos must look delicious." },
        { title: "No delivery scheduling", description: "Orders are for specific dates and times." },
      ],
      growth: [
        { title: "Instagram reels", description: "Cake-making videos attract local followers." },
        { title: "Festive hampers", description: "Corporate and festive gifting brings bulk orders." },
        { title: "Google Business Profile", description: "Local searches for cake shops drive orders." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon customers order cakes for birthdays, office celebrations, and parties, often with midnight delivery or custom designs. Grox Media builds bakery websites for Gurgaon that take direct orders, custom requests, and corporate gifting enquiries.",
        faq: { question: "Can we take office celebration and bulk orders?", answer: "Yes. A corporate orders page captures bulk cake and hamper enquiries from Gurgaon offices." },
        depth: {
          metaDescription: "Bakery & cake shop website designing company in Gurgaon (Gurugram). Online cake ordering, custom cakes, delivery scheduling & corporate hampers. Free quote: +91 92668 06477.",
          heading: "Bakery Websites for Gurgaon",
          paragraphs: [
            "Office birthdays and team celebrations in Gurgaon create steady demand for bulk cakes and desserts.",
            "Premium custom cakes and festive hampers are popular with Gurgaon's customers and corporates.",
          ],
          points: [
            { title: "Office orders", description: "Bulk cakes for team celebrations." },
            { title: "Premium custom cakes", description: "Theme and designer cakes." },
            { title: "Corporate hampers", description: "Diwali and year-end gifting." },
            { title: "Midnight delivery", description: "Late-night delivery slots." },
          ],
          faqs: [
            { question: "Can we sell Diwali hampers to companies?", answer: "Yes. A corporate gifting page with bulk enquiries can be added." },
          ],
        },
      },
      dwarka: {
        intro: "Bakeries and home bakers in Dwarka serve families celebrating birthdays and festivals across the sectors. Grox Media builds bakery websites for Dwarka that make ordering cakes online simple.",
        faq: { question: "Can home bakers in Dwarka take orders online?", answer: "Yes. A simple ordering site with WhatsApp and UPI works well for home bakers." },
        depth: {
          metaDescription: "Bakery & cake shop website designing company in Dwarka, New Delhi. Online cake ordering, eggless options & delivery scheduling. Call +91 92668 06477.",
          heading: "Bakery Websites for Dwarka",
          paragraphs: [
            "Dwarka families regularly order cakes for birthdays and festivals from trusted local bakers.",
            "Clear eggless options and easy scheduling help you win these orders.",
          ],
          points: [
            { title: "Eggless cakes", description: "Clearly tagged options." },
            { title: "Sector delivery", description: "Delivery across Dwarka." },
            { title: "WhatsApp orders", description: "Quick ordering." },
          ],
          faqs: [
            { question: "Can we offer pickup from our shop?", answer: "Yes. Pickup can be offered alongside delivery." },
          ],
        },
      },
    },
  },
];
