import type { IndustryBundle } from "./types";

export const homeServiceBundles: IndustryBundle[] = [
  /* ───────────────────────── ELECTRICIAN ───────────────────────── */
  {
    industry: {
      key: "electrician",
      name: "Electrician",
      audience: "electricians, electrical contractors, and home repair services",
      whyHeading: "Why Electricians Need a Website That Gets Calls",
      why: [
        "When the lights go out or a socket sparks, people grab their phones and search \"electrician near me\". They call the first trustworthy option that answers. Electricians with a clear, fast website and a strong Google profile get those calls; those relying on word of mouth miss them.",
        "A good electrician website lists every service — wiring, fan and light installation, MCB and DB work, inverter setup, and fault finding — shows the areas you cover, and makes calling or WhatsApping you a single tap. It also shows you're licensed, reliable, and safety-focused.",
        "We build electrician websites designed for mobile and urgent searches, with click-to-call on every screen and local SEO for the areas you serve.",
      ],
      features: [
        { title: "Click-to-call everywhere", description: "A sticky call button so urgent customers reach you instantly." },
        { title: "Service pages", description: "Wiring, installations, repairs, inverters, and electrical fault finding." },
        { title: "Service areas", description: "Clear list of sectors and neighbourhoods you cover." },
        { title: "Booking form", description: "Customers describe the problem and preferred time." },
        { title: "Emergency service", description: "Highlight after-hours or emergency availability if you offer it." },
        { title: "Licences & safety", description: "Show your electrical licence and safety practices." },
        { title: "Commercial work", description: "Pages for offices, shops, and society maintenance contracts." },
        { title: "Local SEO", description: "Optimized for \"electrician near me\" and area searches." },
      ],
      pages: ["Home", "Services", "Wiring & rewiring", "Installations", "Repairs & fault finding", "Inverter & UPS", "Commercial electrical", "Service areas", "Reviews", "Book / call"],
      integrations: ["Click-to-call", "WhatsApp", "Booking form", "Google Maps", "Google reviews", "SMS / email alerts"],
      faqs: [
        { question: "Will the website help me get more calls?", answer: "A mobile-friendly site with click-to-call, clear services, and local SEO makes it easier for nearby customers to find and call you. Results also depend on your Google profile and reviews." },
        { question: "Can I show which areas I cover?", answer: "Yes. We add service-area pages and lists so customers know you cover their locality." },
        { question: "Can customers book a visit online?", answer: "Yes. A booking form captures the problem, address, and preferred time." },
        { question: "Can I get society maintenance contracts through the website?", answer: "Yes. A commercial and society page with an enquiry form helps you reach RWAs and businesses." },
      ],
      relatedService: { label: "SEO services", href: "/services/seo" },
    },
    extras: {
      mistakes: [
        { title: "Phone number hidden", description: "Urgent customers won't search your page for a number. Make it one tap away." },
        { title: "No service areas", description: "Customers need to know you'll come to their locality." },
        { title: "No trust signals", description: "Licences, reviews, and real photos reassure people letting you into their home." },
        { title: "Slow mobile site", description: "Emergency searches happen on phones; slow sites lose the call." },
      ],
      growth: [
        { title: "Google Business Profile", description: "The biggest source of local calls for electricians." },
        { title: "Reviews after each job", description: "Asking happy customers for reviews builds ranking and trust." },
        { title: "Local Search ads", description: "Google ads for urgent searches in your service area." },
      ],
    },
    local: {
      gurgaon: {
        intro: "From high-rise apartments on Golf Course Extension to builder floors in DLF and offices in Udyog Vihar, Gurgaon needs reliable electricians every day. Grox Media builds electrician websites for Gurgaon that bring in calls from the sectors and societies you serve.",
        faq: { question: "Can I target specific Gurgaon sectors I work in?", answer: "Yes. We create service-area content for the sectors and societies you cover, which helps you appear in those local searches." },
        depth: {
          metaDescription: "Electrician website designing company in Gurgaon (Gurugram). Click-to-call, service pages, area targeting & booking forms for electricians. Free quote: +91 92668 06477.",
          heading: "Electrician Websites for Gurgaon",
          paragraphs: [
            "Gurgaon's mix of new high-rises, older builder floors, and commercial buildings means demand for everything from quick repairs to full rewiring and office electrical maintenance.",
            "Society maintenance contracts and office AMC work are valuable in Gurgaon. A professional website helps you pitch to RWAs and facility managers.",
          ],
          points: [
            { title: "Society targeting", description: "Content for Gurgaon's major societies and sectors." },
            { title: "Office AMC", description: "Pages for annual maintenance contracts." },
            { title: "Smart home setup", description: "Smart switches, EV chargers, and automation services." },
            { title: "Fast mobile site", description: "Built for urgent phone searches." },
          ],
          faqs: [
            { question: "Can I promote EV charger installation?", answer: "Yes. A dedicated EV charger page targets this growing demand in Gurgaon's societies." },
          ],
        },
      },
      dwarka: {
        intro: "Dwarka's society flats and homes need dependable electricians for repairs, wiring, and installations. Grox Media builds electrician websites for Dwarka that make it easy for local residents to find, trust, and call you.",
        faq: { question: "Can residents WhatsApp me photos of the problem?", answer: "Yes. A WhatsApp button lets customers send photos and details directly." },
        depth: {
          metaDescription: "Electrician website designing company in Dwarka, New Delhi. Click-to-call, WhatsApp, service pages & sector-wise local SEO. Call +91 92668 06477.",
          heading: "Electrician Websites for Dwarka",
          paragraphs: [
            "In Dwarka's older society buildings, rewiring and electrical upgrades are common needs alongside everyday repairs.",
            "A simple, fast website with services, areas, and one-tap calling helps you win local jobs.",
          ],
          points: [
            { title: "Rewiring services", description: "Pages for older flat rewiring." },
            { title: "Sector coverage", description: "Clear list of Dwarka sectors served." },
            { title: "WhatsApp contact", description: "Quick photo-based enquiries." },
          ],
          faqs: [
            { question: "Can I list my timings and emergency availability?", answer: "Yes. Timings and emergency availability can be shown clearly." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── PLUMBER ───────────────────────── */
  {
    industry: {
      key: "plumber",
      name: "Plumber",
      audience: "plumbers, plumbing contractors, and bathroom fitting services",
      whyHeading: "Why Plumbers Need a Website Built for Urgent Searches",
      why: [
        "Leaks, blocked drains, and broken taps don't wait. People search \"plumber near me\" and call someone within minutes. A plumbing website that loads fast, shows your services and areas, and puts your number one tap away wins those urgent jobs.",
        "Beyond emergencies, plumbers get valuable work from bathroom fittings, water tank installation, pipeline replacement, water purifier and geyser installation, and society maintenance. A website with a page for each service captures these planned jobs too.",
        "We build plumber websites focused on calls and WhatsApp enquiries, with local SEO for the neighbourhoods you cover.",
      ],
      features: [
        { title: "Sticky call button", description: "One-tap calling on every page." },
        { title: "Service pages", description: "Leak repair, drain cleaning, fittings, pipeline work, tanks, and geysers." },
        { title: "Service areas", description: "Localities and sectors you cover." },
        { title: "Booking form", description: "Problem description, photos, and preferred time." },
        { title: "Emergency service", description: "Highlight urgent or same-day availability if offered." },
        { title: "Bathroom fittings", description: "Showcase fitting and renovation work." },
        { title: "Society contracts", description: "Maintenance contracts for RWAs and buildings." },
        { title: "Local SEO", description: "Optimized for \"plumber near me\" and area searches." },
      ],
      pages: ["Home", "Services", "Leak repair", "Drain & blockage", "Bathroom fittings", "Water tanks & pumps", "Geyser installation", "Service areas", "Reviews", "Call / book"],
      integrations: ["Click-to-call", "WhatsApp", "Photo upload", "Google Maps", "Google reviews", "Booking alerts"],
      faqs: [
        { question: "Can customers send photos of the plumbing problem?", answer: "Yes. The booking form and WhatsApp let customers share photos so you can come prepared." },
        { question: "Can I show the areas I serve?", answer: "Yes. Service-area pages help you appear in searches from those neighbourhoods." },
        { question: "Can I get bathroom renovation work through the site?", answer: "Yes. A bathroom fittings page with photos of past work attracts planned projects." },
        { question: "Will it work well on mobile?", answer: "Yes. Most urgent searches happen on phones, so the site is built mobile-first." },
      ],
      relatedService: { label: "SEO services", href: "/services/seo" },
    },
    extras: {
      mistakes: [
        { title: "No clear call button", description: "Customers with a leak won't scroll to find your number." },
        { title: "Generic service list", description: "Separate service pages help you rank for specific problems." },
        { title: "No reviews shown", description: "Reviews reassure customers inviting you into their home." },
        { title: "Unclear coverage", description: "Customers need to know you serve their area." },
      ],
      growth: [
        { title: "Google Business Profile", description: "Map results drive most urgent plumbing calls." },
        { title: "Society maintenance", description: "RWA contracts bring steady recurring work." },
        { title: "Review requests", description: "Ask satisfied customers for reviews after each job." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's high-rises, builder floors, and offices constantly need plumbing work — from leaking pipes and blocked drains to bathroom fittings, pressure pumps, and water tank installation. Grox Media builds plumber websites for Gurgaon that bring urgent calls and planned jobs from the areas you serve.",
        faq: { question: "Can I target pressure pump and water tank work in Gurgaon?", answer: "Yes. Low water pressure is a common Gurgaon issue, so a dedicated pressure pump and tank page can bring valuable enquiries." },
        depth: {
          metaDescription: "Plumber website designing company in Gurgaon (Gurugram). Click-to-call, service pages, area targeting & bathroom fitting showcases. Free quote: +91 92668 06477.",
          heading: "Plumber Websites for Gurgaon",
          paragraphs: [
            "Water pressure, tank, and pump issues are common in Gurgaon's builder floors and older houses, alongside leaks and drain blockages in high-rises.",
            "Society maintenance and commercial plumbing contracts for offices offer steady work that a professional website helps you win.",
          ],
          points: [
            { title: "Pressure pumps & tanks", description: "Pages for Gurgaon's common water issues." },
            { title: "Builder-floor plumbing", description: "Services for DLF and Sushant Lok homes." },
            { title: "Society contracts", description: "Maintenance for RWAs and buildings." },
            { title: "Bathroom renovation", description: "Fittings and remodelling projects." },
          ],
          faqs: [
            { question: "Can I promote bathroom renovation packages?", answer: "Yes. We can add a bathroom renovation page with photos and an enquiry form." },
          ],
        },
      },
      dwarka: {
        intro: "Dwarka's society flats often need plumbing repairs, pipeline replacements, and bathroom fittings. Grox Media builds plumber websites for Dwarka that help residents find and call you quickly.",
        faq: { question: "Can I show emergency availability for Dwarka customers?", answer: "Yes. Emergency or same-day availability can be highlighted along with your timings." },
        depth: {
          metaDescription: "Plumber website designing company in Dwarka, New Delhi. Click-to-call, WhatsApp, service pages & sector-wise local SEO. Call +91 92668 06477.",
          heading: "Plumber Websites for Dwarka",
          paragraphs: [
            "Older society buildings in Dwarka frequently need concealed pipeline replacement and leak repairs.",
            "A fast website with services and one-tap calling wins local plumbing jobs.",
          ],
          points: [
            { title: "Pipeline replacement", description: "Pages for older building plumbing." },
            { title: "Sector coverage", description: "Dwarka sectors listed clearly." },
            { title: "Photo enquiries", description: "WhatsApp photo sharing." },
          ],
          faqs: [
            { question: "Can societies contact me for maintenance work?", answer: "Yes. A society maintenance section with an enquiry form can be added." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── AC REPAIR ───────────────────────── */
  {
    industry: {
      key: "ac-repair",
      name: "AC Repair",
      audience: "AC repair and service companies and HVAC technicians",
      whyHeading: "Why AC Service Businesses Need a Website",
      why: [
        "AC service demand spikes sharply every summer, and customers search \"AC repair near me\" or \"AC service\" and book whoever responds first. A fast website with clear services, areas, and instant booking helps you capture that seasonal rush.",
        "Your website can cover every service — AC servicing, gas refilling, installation and uninstallation, repairs, and annual maintenance contracts — for split, window, and central AC systems. AMC pages bring recurring revenue from homes and offices.",
        "We build AC service websites with booking forms, click-to-call, AMC enquiries, and local SEO for the areas you serve.",
      ],
      features: [
        { title: "Service booking", description: "Customers choose the service, AC type, and a slot." },
        { title: "Service pages", description: "Servicing, gas refill, installation, repair, and uninstallation." },
        { title: "AMC plans", description: "Annual maintenance contract enquiries for homes and offices." },
        { title: "Brand coverage", description: "List the AC brands you service." },
        { title: "Service areas", description: "Localities and sectors you cover." },
        { title: "Click-to-call & WhatsApp", description: "Instant contact during peak season." },
        { title: "Commercial HVAC", description: "Pages for offices, shops, and ducted systems." },
        { title: "Local SEO", description: "Optimized for \"AC repair near me\" and brand-specific searches." },
      ],
      pages: ["Home", "AC servicing", "Gas refilling", "Installation", "AC repair", "AMC plans", "Commercial HVAC", "Brands we service", "Service areas", "Book service"],
      integrations: ["Booking form", "Click-to-call", "WhatsApp", "Google Maps", "SMS / email alerts", "Google reviews"],
      faqs: [
        { question: "Can customers book AC service online?", answer: "Yes. The booking form captures AC type, problem, address, and preferred slot." },
        { question: "Can we sell annual maintenance contracts through the website?", answer: "Yes. An AMC page explains coverage and captures enquiries from homes and offices." },
        { question: "Can we show which AC brands we service?", answer: "Yes. A brands section helps you appear in brand-specific searches." },
        { question: "Will the website handle summer demand?", answer: "Yes. It is built to be fast and to capture bookings even when your team is busy on calls." },
      ],
      relatedService: { label: "Lead generation", href: "/services/lead-generation" },
    },
    extras: {
      mistakes: [
        { title: "Phone-only bookings", description: "In peak season your phone gets missed. Online booking captures those customers." },
        { title: "No AMC offer", description: "Annual contracts bring recurring income that many services forget to promote." },
        { title: "Unclear AC types", description: "Say whether you service split, window, cassette, and ducted systems." },
        { title: "Implying authorised service", description: "Don't suggest brand authorisation unless you have it." },
      ],
      growth: [
        { title: "Pre-summer campaigns", description: "Service reminders and ads before summer fill your calendar early." },
        { title: "Google Business Profile", description: "Local map results drive most AC repair calls." },
        { title: "AMC renewals", description: "Reminders bring back AMC customers every year." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's long, hot summers mean every home, office, and shop depends on air conditioning. From split ACs in apartments to VRV and ducted systems in offices, demand for servicing and repair is constant. Grox Media builds AC service websites for Gurgaon that capture peak-season bookings and AMC contracts.",
        faq: { question: "Can we target office AMC contracts in Gurgaon?", answer: "Yes. A commercial AMC page aimed at offices in Cyber City, Udyog Vihar, and Golf Course Road can bring recurring business." },
        depth: {
          metaDescription: "AC repair & service website designing company in Gurgaon (Gurugram). Online booking, AMC plans, brand pages & local SEO for AC technicians. Free quote: +91 92668 06477.",
          heading: "AC Service Websites for Gurgaon",
          paragraphs: [
            "Most Gurgaon apartments have multiple ACs, and offices run large VRV or ducted systems. Both create demand for regular servicing and annual contracts, not just summer repairs.",
            "Customers here expect quick online booking. A website that confirms bookings instantly helps you stay ahead of competitors in peak season.",
          ],
          points: [
            { title: "Multi-AC home packages", description: "Service packages for homes with several ACs." },
            { title: "VRV & ducted systems", description: "Commercial HVAC services for offices." },
            { title: "Society tie-ups", description: "Bulk servicing drives in societies." },
            { title: "Instant online booking", description: "Capture bookings during peak season." },
          ],
          faqs: [
            { question: "Can we run society servicing camps through the website?", answer: "Yes. We can add a page for society camps with registration for residents." },
          ],
        },
      },
      dwarka: {
        intro: "Delhi summers keep Dwarka's AC technicians busy with servicing, gas refills, and repairs. Grox Media builds AC service websites for Dwarka that make booking easy and bring in customers from nearby sectors.",
        faq: { question: "Can customers choose a preferred time slot?", answer: "Yes. The booking form lets customers choose a date and time slot." },
        depth: {
          metaDescription: "AC repair & service website designing company in Dwarka, New Delhi. Online booking, gas refill & installation pages, AMC enquiries. Call +91 92668 06477.",
          heading: "AC Service Websites for Dwarka",
          paragraphs: [
            "Dwarka households typically book AC servicing before summer and repairs during heatwaves. A website that makes booking fast helps you capture both.",
            "AMC plans for homes offer repeat business beyond the peak season.",
          ],
          points: [
            { title: "Pre-summer servicing", description: "Early booking campaigns." },
            { title: "Home AMC plans", description: "Annual contracts for families." },
            { title: "Sector coverage", description: "Clear Dwarka service areas." },
          ],
          faqs: [
            { question: "Can we list the brands we service?", answer: "Yes. A brands section can be added to the website." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── CLEANING SERVICES ───────────────────────── */
  {
    industry: {
      key: "cleaning-services",
      name: "Cleaning Services",
      audience: "home cleaning, deep cleaning, and facility cleaning companies",
      whyHeading: "Why Cleaning Companies Need a Professional Website",
      why: [
        "Customers searching for deep cleaning, sofa cleaning, bathroom cleaning, or move-in cleaning want to know exactly what's included, how long it takes, and whether your staff are trained and verified. A professional website answers these questions and builds the trust needed to let a team into their home or office.",
        "Your website can list every service with inclusions, let customers book a slot online, and capture larger enquiries for office housekeeping and facility management contracts.",
        "We build cleaning service websites with clear service pages, booking, and local SEO for the areas you cover.",
      ],
      features: [
        { title: "Service pages", description: "Deep cleaning, kitchen, bathroom, sofa, carpet, and move-in cleaning." },
        { title: "What's included", description: "Clear checklists for each service." },
        { title: "Online booking", description: "Select service, home size, date, and time." },
        { title: "Staff verification", description: "Explain training, verification, and equipment." },
        { title: "Office housekeeping", description: "Contract enquiries for offices and facilities." },
        { title: "Before & after", description: "Photos of real cleaning results." },
        { title: "Service areas", description: "Localities and sectors covered." },
        { title: "Local SEO", description: "Optimized for \"deep cleaning near me\" and service searches." },
      ],
      pages: ["Home", "Home deep cleaning", "Kitchen cleaning", "Bathroom cleaning", "Sofa & carpet", "Move-in / move-out", "Office housekeeping", "Service areas", "Reviews", "Book now"],
      integrations: ["Booking system", "Razorpay / UPI", "WhatsApp", "Google Maps", "Google reviews", "SMS confirmations"],
      faqs: [
        { question: "Can customers book cleaning online?", answer: "Yes. They choose the service, home size, and slot, and your team is notified instantly." },
        { question: "Can we show what's included in each service?", answer: "Yes. Each service page includes a clear checklist of what's covered." },
        { question: "Can we get office housekeeping contracts through the site?", answer: "Yes. A commercial page with an enquiry form targets offices and facilities." },
        { question: "Can customers pay online?", answer: "Yes. We integrate Indian payment gateways for advance or full payment." },
      ],
      relatedService: { label: "Lead generation", href: "/services/lead-generation" },
    },
    extras: {
      mistakes: [
        { title: "Vague inclusions", description: "Customers want a clear checklist. Vague descriptions cause disputes." },
        { title: "No staff information", description: "Trust depends on verified, trained staff." },
        { title: "No real results", description: "Before-and-after photos prove quality better than claims." },
        { title: "Booking by phone only", description: "Online booking captures customers who plan at night." },
      ],
      growth: [
        { title: "Festive season campaigns", description: "Diwali and move-in seasons bring booking spikes." },
        { title: "Google reviews", description: "Reviews are key trust signals for home services." },
        { title: "Office contracts", description: "Recurring commercial contracts stabilise revenue." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Busy Gurgaon households and offices increasingly outsource deep cleaning, move-in cleaning, and housekeeping. With frequent moves in rental apartments and thousands of offices, demand is steady. Grox Media builds cleaning service websites for Gurgaon that bring in home bookings and commercial contracts.",
        faq: { question: "Can we target move-in cleaning for new Gurgaon apartments?", answer: "Yes. A move-in cleaning page targets new-possession societies and tenants moving into Gurgaon apartments." },
        depth: {
          metaDescription: "Cleaning services website designing company in Gurgaon (Gurugram). Deep cleaning booking, office housekeeping & service checklists. Free quote: +91 92668 06477.",
          heading: "Cleaning Service Websites for Gurgaon",
          paragraphs: [
            "Gurgaon's rental market means frequent move-in and move-out cleaning, and new possessions need post-construction cleaning.",
            "Offices, co-working spaces, and retail stores in Gurgaon need regular housekeeping contracts, a valuable recurring segment.",
          ],
          points: [
            { title: "Move-in cleaning", description: "Pages for tenants and new-possession homes." },
            { title: "Post-construction cleaning", description: "Cleaning after interiors and renovation." },
            { title: "Office housekeeping", description: "Contracts for offices and co-working spaces." },
            { title: "Society targeting", description: "Content for major Gurgaon societies." },
          ],
          faqs: [
            { question: "Can we offer post-interior cleaning services?", answer: "Yes. A post-construction cleaning page targets homeowners after interior work." },
          ],
        },
      },
      dwarka: {
        intro: "Families across Dwarka's sectors book deep cleaning before festivals, after renovations, and when moving homes. Grox Media builds cleaning service websites for Dwarka that make booking easy and build trust with clear service details.",
        faq: { question: "Can we promote Diwali deep-cleaning offers?", answer: "Yes. Seasonal offers can be highlighted on the homepage and updated anytime." },
        depth: {
          metaDescription: "Cleaning services website designing company in Dwarka, New Delhi. Home deep cleaning booking, sofa & kitchen cleaning pages. Call +91 92668 06477.",
          heading: "Cleaning Service Websites for Dwarka",
          paragraphs: [
            "Festive deep cleaning and move-in cleaning are major demand periods for Dwarka households.",
            "A clear website with services and online booking helps you capture these customers.",
          ],
          points: [
            { title: "Festive offers", description: "Seasonal deep-cleaning campaigns." },
            { title: "Service checklists", description: "Clear inclusions for trust." },
            { title: "Easy booking", description: "Online and WhatsApp booking." },
          ],
          faqs: [
            { question: "Can customers book through WhatsApp?", answer: "Yes. A WhatsApp button sends booking details to your number." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── PEST CONTROL ───────────────────────── */
  {
    industry: {
      key: "pest-control",
      name: "Pest Control",
      audience: "pest control companies and termite treatment specialists",
      whyHeading: "Why Pest Control Companies Need a Website",
      why: [
        "Cockroaches, termites, bed bugs, and mosquitoes send people searching urgently for \"pest control near me\". They want to know which pests you treat, whether the chemicals are safe for children and pets, and how soon you can come. A clear website answers these questions and wins the booking.",
        "Pest control also has strong recurring potential: annual contracts for homes, and scheduled treatments for restaurants, offices, warehouses, and societies. A website that presents these plans clearly brings long-term clients.",
        "We build pest control websites with service pages for each pest, safety information, booking, and local SEO.",
      ],
      features: [
        { title: "Pest-specific pages", description: "Cockroach, termite, bed bug, mosquito, rodent, and general pest control." },
        { title: "Safety information", description: "Explain safe chemicals and precautions for children and pets." },
        { title: "Online booking", description: "Customers choose the pest, property size, and time." },
        { title: "Annual contracts", description: "AMC plans for homes and businesses." },
        { title: "Commercial pest control", description: "Restaurants, offices, warehouses, and hospitals." },
        { title: "Licences", description: "Display relevant licences and registrations." },
        { title: "Service areas", description: "Localities and sectors covered." },
        { title: "Local SEO", description: "Optimized for pest-specific and area searches." },
      ],
      pages: ["Home", "Cockroach control", "Termite treatment", "Bed bug treatment", "Mosquito control", "Rodent control", "Commercial pest control", "AMC plans", "Safety", "Book service"],
      integrations: ["Booking form", "Click-to-call", "WhatsApp", "Google Maps", "Google reviews", "Service reminders"],
      faqs: [
        { question: "Can we create separate pages for each pest?", answer: "Yes. Separate pages help customers find the right treatment and help you rank for each pest." },
        { question: "Can we explain chemical safety on the website?", answer: "Yes. A safety page explaining products and precautions reassures families with children and pets." },
        { question: "Can businesses request commercial contracts?", answer: "Yes. A commercial page with an enquiry form targets restaurants, offices, and warehouses." },
        { question: "Can customers book online?", answer: "Yes. Booking forms capture pest type, property size, and preferred time." },
      ],
      relatedService: { label: "SEO services", href: "/services/seo" },
    },
    extras: {
      mistakes: [
        { title: "No safety information", description: "Families worry about chemicals. Explaining safety wins bookings." },
        { title: "One generic page", description: "People search for specific pests; separate pages rank better." },
        { title: "Guaranteed elimination claims", description: "Absolute guarantees are misleading; explain treatment and follow-up honestly." },
        { title: "No commercial offer", description: "Business contracts bring steady recurring revenue." },
      ],
      growth: [
        { title: "Seasonal campaigns", description: "Monsoon and summer pest spikes are ideal times for ads." },
        { title: "Restaurant contracts", description: "Food businesses need regular pest control." },
        { title: "Google reviews", description: "Reviews help you win urgent local searches." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon's restaurants, offices, warehouses, and thousands of apartments need regular pest control, with termite and mosquito problems peaking in the monsoon. Grox Media builds pest control websites for Gurgaon that win urgent home bookings and long-term commercial contracts.",
        faq: { question: "Can we target restaurants and cloud kitchens in Gurgaon?", answer: "Yes. A food-business pest control page targets restaurants, cafés, and cloud kitchens that need regular treatments." },
        depth: {
          metaDescription: "Pest control website designing company in Gurgaon (Gurugram). Pest-specific pages, safety info, booking & commercial contract enquiries. Free quote: +91 92668 06477.",
          heading: "Pest Control Websites for Gurgaon",
          paragraphs: [
            "Gurgaon's dense restaurant and cloud kitchen scene, plus warehouses along NH-48, creates steady demand for commercial pest control contracts.",
            "Pre-possession termite treatment for new apartments is another Gurgaon-specific opportunity worth a dedicated page.",
          ],
          points: [
            { title: "Food business contracts", description: "Restaurants, cafés, and cloud kitchens." },
            { title: "Warehouse pest control", description: "Logistics and storage facilities." },
            { title: "Pre-possession termite", description: "Treatment for new apartments." },
            { title: "Society AMCs", description: "Annual contracts for RWAs." },
          ],
          faqs: [
            { question: "Can we promote pre-possession termite treatment?", answer: "Yes. A dedicated page targets owners of newly delivered Gurgaon apartments." },
          ],
        },
      },
      dwarka: {
        intro: "Dwarka households deal with cockroaches, termites, and mosquitoes, especially during the monsoon. Grox Media builds pest control websites for Dwarka that explain treatments and safety clearly and bring in local bookings.",
        faq: { question: "Can we offer home AMC plans in Dwarka?", answer: "Yes. An AMC page explains annual plans and captures enquiries from families." },
        depth: {
          metaDescription: "Pest control website designing company in Dwarka, New Delhi. Cockroach, termite & mosquito treatment pages with booking. Call +91 92668 06477.",
          heading: "Pest Control Websites for Dwarka",
          paragraphs: [
            "Older society buildings in Dwarka often face termite and cockroach issues, making treatment pages and AMC plans valuable.",
            "Clear safety information reassures families with children and elderly members.",
          ],
          points: [
            { title: "Termite treatment", description: "Pages for older buildings." },
            { title: "Family safety", description: "Clear chemical safety information." },
            { title: "Society drives", description: "Treatment camps for societies." },
          ],
          faqs: [
            { question: "Can societies book bulk treatments?", answer: "Yes. A society section with an enquiry form can be added." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── PACKERS & MOVERS ───────────────────────── */
  {
    industry: {
      key: "packers-and-movers",
      name: "Packers and Movers",
      audience: "packers and movers, relocation, and shifting companies",
      whyHeading: "Why Packers and Movers Need a Trustworthy Website",
      why: [
        "Shifting homes is stressful, and customers are wary of movers who damage goods or add hidden charges. They search \"packers and movers near me\" and compare companies carefully. A professional website with clear services, process, insurance information, and genuine reviews helps you stand out as trustworthy.",
        "Your website can capture detailed moving enquiries — origin, destination, home size, and date — so you can quote accurately. Separate pages for local shifting, intercity moves, office relocation, vehicle transport, and storage bring in different types of customers.",
        "We build packers and movers websites with quote forms, trust signals, and SEO for local and intercity moving searches.",
      ],
      features: [
        { title: "Detailed quote form", description: "Origin, destination, home size, items, and moving date." },
        { title: "Service pages", description: "Local shifting, intercity, office relocation, vehicle transport, and storage." },
        { title: "Moving process", description: "Survey, packing, loading, transport, and unpacking explained." },
        { title: "Insurance information", description: "Explain transit insurance options." },
        { title: "Packing materials", description: "Show the quality of materials used." },
        { title: "Reviews", description: "Customer reviews and moving stories." },
        { title: "Route pages", description: "Pages for popular city-to-city moves." },
        { title: "Local SEO", description: "Optimized for local and intercity moving searches." },
      ],
      pages: ["Home", "Home shifting", "Local shifting", "Intercity moving", "Office relocation", "Car & bike transport", "Storage", "Moving process", "Reviews", "Get a quote"],
      integrations: ["Quote forms", "WhatsApp", "Click-to-call", "Google Maps", "Google reviews", "CRM / sheet integration"],
      faqs: [
        { question: "Can customers request a moving quote online?", answer: "Yes. The quote form captures origin, destination, home size, items, and date so you can quote accurately." },
        { question: "Can we create pages for popular routes?", answer: "Yes. Route pages like \"Gurgaon to Bangalore movers\" help you rank for intercity searches." },
        { question: "Can we show our insurance and safety process?", answer: "Yes. Explaining insurance and packing processes builds trust." },
        { question: "Can we take office relocation enquiries?", answer: "Yes. A dedicated office relocation page targets businesses." },
      ],
      relatedService: { label: "Lead generation", href: "/services/lead-generation" },
    },
    extras: {
      mistakes: [
        { title: "Hidden charges", description: "Unclear quotes damage trust. Explain what affects the cost." },
        { title: "Fake reviews", description: "Customers are wary of movers; genuine reviews matter." },
        { title: "No process explained", description: "Explaining packing and handling reduces anxiety." },
        { title: "Short quote forms", description: "Missing details lead to inaccurate quotes and disputes." },
      ],
      growth: [
        { title: "Route-based SEO", description: "City-to-city pages capture intercity movers." },
        { title: "Corporate relocation", description: "Tie-ups with companies bring employee relocation work." },
        { title: "Google reviews", description: "Reviews heavily influence mover choice." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon sees constant movement — professionals relocating for jobs, families upgrading apartments, and companies shifting offices. Grox Media builds packers and movers websites for Gurgaon that capture local, intercity, and corporate relocation enquiries.",
        faq: { question: "Can we target corporate employee relocation in Gurgaon?", answer: "Yes. A corporate relocation page aimed at HR teams can bring in employee transfer moves." },
        depth: {
          metaDescription: "Packers and movers website designing company in Gurgaon (Gurugram). Quote forms, route pages, office relocation & trust-focused design. Free quote: +91 92668 06477.",
          heading: "Packers and Movers Websites for Gurgaon",
          paragraphs: [
            "Many Gurgaon residents are professionals relocating between cities, which makes intercity route pages — Gurgaon to Bangalore, Pune, Mumbai, Hyderabad — especially valuable.",
            "Office relocations are frequent as companies expand or move between Cyber City, Golf Course Road, and Udyog Vihar.",
          ],
          points: [
            { title: "Intercity route pages", description: "Popular Gurgaon routes to major cities." },
            { title: "Office relocation", description: "Corporate moves across Gurgaon." },
            { title: "Employee relocation", description: "Tie-ups with company HR teams." },
            { title: "Vehicle transport", description: "Car and bike shifting." },
          ],
          faqs: [
            { question: "Can we add pages for moves from Gurgaon to other cities?", answer: "Yes. Route pages can be created for your most common destinations." },
          ],
        },
      },
      dwarka: {
        intro: "Families in Dwarka regularly shift within Delhi NCR and to other cities, and the area's proximity to the airport and highways suits movers. Grox Media builds packers and movers websites for Dwarka that bring in trustworthy, detailed moving enquiries.",
        faq: { question: "Can we target local shifting within Delhi NCR?", answer: "Yes. Local shifting pages target moves within Dwarka, Delhi, Gurgaon, and Noida." },
        depth: {
          metaDescription: "Packers and movers website designing company in Dwarka, New Delhi. Home shifting quotes, intercity routes & vehicle transport pages. Call +91 92668 06477.",
          heading: "Packers and Movers Websites for Dwarka",
          paragraphs: [
            "Dwarka families often move within NCR or relocate for work, making both local and intercity pages useful.",
            "Clear quotes and genuine reviews help you win trust with local customers.",
          ],
          points: [
            { title: "NCR local shifting", description: "Moves across Delhi NCR." },
            { title: "Intercity moves", description: "Popular routes from Delhi." },
            { title: "Detailed quotes", description: "Forms for accurate estimates." },
          ],
          faqs: [
            { question: "Can customers share a list of items with the quote request?", answer: "Yes. The form can include an item list or photo uploads." },
          ],
        },
      },
    },
  },
];
