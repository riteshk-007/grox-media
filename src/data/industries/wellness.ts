import type { IndustryBundle } from "./types";

/** Health & wellness industries. Informative copy only — no outcome or cure claims. */
export const wellnessBundles: IndustryBundle[] = [
  /* ───────────────────────── PHYSIOTHERAPY ───────────────────────── */
  {
    industry: {
      key: "physiotherapy",
      name: "Physiotherapy",
      audience: "physiotherapy clinics, rehab centres, and sports physios",
      whyHeading: "Why Physiotherapy Clinics Need a Professional Website",
      why: [
        "People looking for a physiotherapist are usually in pain or recovering from an injury or surgery. They search for \"physiotherapist near me\", \"back pain physiotherapy\", or \"knee replacement rehab\", and they want to quickly understand whether you treat their problem, how sessions work, and how soon they can get an appointment.",
        "A physiotherapy website answers those questions before the first call. Condition pages explain how you approach back pain, neck pain, sports injuries, post-surgery rehab, and neurological rehab. Therapist profiles show qualifications. Home-visit information and online booking make it easy for patients who can't travel.",
        "We design physiotherapy websites that feel calm and professional, written in simple language and reviewed by your physiotherapists, with local SEO focused on the conditions and areas you serve.",
      ],
      features: [
        { title: "Condition pages", description: "Separate pages for back pain, neck pain, sports injuries, post-surgery rehab, and more." },
        { title: "Online appointment booking", description: "Patients choose clinic or home-visit sessions and a preferred time." },
        { title: "Home physiotherapy", description: "Service-area information and booking for home visits." },
        { title: "Therapist profiles", description: "BPT/MPT qualifications, specialisations, and experience." },
        { title: "Treatment approach", description: "Explain assessment, exercise therapy, manual therapy, and equipment you use." },
        { title: "Exercise resources", description: "Helpful articles and videos patients can follow at home." },
        { title: "WhatsApp & call buttons", description: "One-tap contact for patients who want quick answers." },
        { title: "Local SEO", description: "Optimized for \"physiotherapist near me\" and condition-plus-area searches." },
      ],
      pages: ["Home", "About the clinic", "Our physiotherapists", "Conditions we treat", "Individual condition pages", "Home physiotherapy", "Sports rehab", "Patient resources", "Book appointment", "Contact & location"],
      integrations: ["Appointment booking", "WhatsApp", "Google Maps", "Payment gateway", "YouTube exercise videos", "Google reviews"],
      faqs: [
        { question: "Can patients book home physiotherapy through the website?", answer: "Yes. We add a home-visit booking form with service areas, preferred time, and condition details." },
        { question: "Do you create separate pages for each condition?", answer: "Yes. Individual pages for back pain, knee pain, sports injuries, and post-surgery rehab help patients find relevant information and help your clinic appear in those searches." },
        { question: "Who writes the treatment content?", answer: "We draft patient-friendly content from your inputs, and your physiotherapists review it before publishing. We avoid promising specific outcomes." },
        { question: "Can we share exercise videos with patients?", answer: "Yes. We can add a resources section with exercise videos and articles." },
      ],
      relatedService: { label: "SEO services", href: "/services/seo" },
    },
    extras: {
      mistakes: [
        { title: "Promising a cure", description: "Claims like \"permanent relief guaranteed\" are misleading. Explain your approach honestly instead." },
        { title: "No home-visit information", description: "Many patients can't travel after surgery. Hiding home services loses them." },
        { title: "Generic service list", description: "A single list of treatments can't rank for specific conditions patients search for." },
        { title: "No therapist details", description: "Patients want to know who will treat them and their qualifications." },
      ],
      growth: [
        { title: "Doctor referrals", description: "A professional website makes orthopaedic surgeons more comfortable referring patients to you." },
        { title: "Condition-focused content", description: "Articles on common pains and recovery attract patients searching for help." },
        { title: "Google reviews", description: "Reviews from recovered patients build trust and improve local ranking." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Long desk hours in Gurgaon's offices, weekend sports, and a growing number of joint replacement surgeries mean steady demand for physiotherapy across the city. Patients search for clinics near their sector or for home physiotherapy in their society. Grox Media builds physiotherapy websites for Gurgaon clinics that explain your treatments clearly and make booking easy.",
        faq: { question: "Can we target office workers with back and neck pain in Gurgaon?", answer: "Yes. We create pages on posture-related back and neck pain and ergonomic advice, targeting searches from professionals across Gurgaon's corporate areas." },
        depth: {
          metaDescription: "Physiotherapy website designing company in Gurgaon (Gurugram). Condition pages, home-visit booking, therapist profiles & local SEO for physio clinics. Free quote: +91 92668 06477.",
          heading: "Physiotherapy Websites for Gurgaon Clinics",
          paragraphs: [
            "Gurgaon's physiotherapy patients fall into a few clear groups: working professionals with desk-related back and neck pain, runners and gym-goers with sports injuries, and older patients recovering from knee or hip replacement at the city's large hospitals. Each group searches differently and needs different information.",
            "Home physiotherapy is especially popular in Gurgaon's high-rise societies, where post-surgery patients and seniors prefer treatment at home. A website with clear service areas, session details, and booking helps you capture these patients.",
            "Corporate wellness is another opportunity. Physiotherapy clinics can offer ergonomic assessments and workplace sessions to Gurgaon companies through a dedicated page for HR teams.",
          ],
          points: [
            { title: "Desk-job pain pages", description: "Content on posture, back, and neck pain for Gurgaon's professionals." },
            { title: "Post-surgery rehab", description: "Pages for knee and hip replacement rehab patients from nearby hospitals." },
            { title: "Society home visits", description: "Home physiotherapy booking across Gurgaon sectors and societies." },
            { title: "Corporate ergonomics", description: "Workplace assessment programmes for Gurgaon companies." },
          ],
          faqs: [
            { question: "Can hospitals and surgeons refer patients through the website?", answer: "Yes. We can add a referral form for doctors, and a professional site makes referrals easier." },
            { question: "Can we list multiple clinic branches in Gurgaon?", answer: "Yes. Each branch can have its own page with address, timings, and map." },
          ],
        },
      },
      dwarka: {
        intro: "Families across Dwarka's sectors look for trusted physiotherapy close to home — for elderly parents, post-surgery recovery, and everyday aches. Grox Media builds physiotherapy websites for Dwarka clinics that explain your treatments simply, show your therapists, and make clinic and home-visit booking easy.",
        faq: { question: "Can patients from nearby areas like Palam and Uttam Nagar find our clinic?", answer: "Yes. We target the sectors and neighbouring areas you serve through your website content and Google Business Profile." },
        depth: {
          metaDescription: "Physiotherapy website designing company in Dwarka, New Delhi. Clinic & home-visit booking, condition pages & therapist profiles for physio clinics. Call +91 92668 06477.",
          heading: "Physiotherapy Websites for Dwarka",
          paragraphs: [
            "Many physiotherapy patients in Dwarka are seniors and post-surgery patients whose families search on their behalf. They look for a nearby clinic with qualified therapists and the option of home visits.",
            "A clear website with condition pages, home-visit booking, and easy contact helps families make that decision quickly.",
          ],
          points: [
            { title: "Senior-friendly design", description: "Large text and simple navigation for older patients and their families." },
            { title: "Home visits by sector", description: "Clear coverage across Dwarka sectors." },
            { title: "Easy booking", description: "Booking by form, call, or WhatsApp." },
          ],
          faqs: [
            { question: "Can we show which Dwarka sectors we cover for home visits?", answer: "Yes. We list your home-visit coverage areas clearly on the website." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── YOGA CENTRE ───────────────────────── */
  {
    industry: {
      key: "yoga-centre",
      name: "Yoga Centre",
      audience: "yoga studios, yoga teachers, and meditation centres",
      whyHeading: "Why Yoga Centres Need a Website",
      why: [
        "People looking for yoga classes want to know the style you teach, batch timings, the teacher's background, and whether classes suit beginners. If this information is scattered across Instagram posts and WhatsApp forwards, many potential students give up and choose a studio that makes it easy.",
        "A yoga website brings everything together: class schedules, styles like Hatha, Vinyasa, Ashtanga, and prenatal yoga, teacher profiles, online and offline batches, workshops, and teacher training programmes. Students can book a trial class or register for a batch in a few taps.",
        "We design yoga websites with a calm, clean feel that reflects your practice, with schedules that are easy to update and local SEO for \"yoga classes near me\" searches.",
      ],
      features: [
        { title: "Class schedule", description: "Weekly timetable for batches, styles, and levels, easy to update." },
        { title: "Trial class booking", description: "A simple form for first-time students to book a trial." },
        { title: "Online classes", description: "Registration and links for live online batches." },
        { title: "Teacher profiles", description: "Certifications, training, and teaching style." },
        { title: "Workshops & retreats", description: "Pages and registration for special events." },
        { title: "Membership plans", description: "Monthly and quarterly plans with online payment." },
        { title: "Corporate yoga", description: "Programmes for offices and companies." },
        { title: "Local SEO", description: "Optimized for \"yoga classes near me\" and style-specific searches." },
      ],
      pages: ["Home", "About & philosophy", "Yoga styles", "Class schedule", "Online classes", "Teachers", "Workshops & retreats", "Corporate yoga", "Blog", "Contact & location"],
      integrations: ["Class booking", "Zoom / Google Meet links", "Razorpay / UPI", "WhatsApp", "Google Maps", "Instagram feed"],
      faqs: [
        { question: "Can students book and pay for classes online?", answer: "Yes. We add class booking and online payment for memberships, workshops, and drop-in classes." },
        { question: "Can we run online yoga classes through the website?", answer: "Yes. Students can register and receive Zoom or Google Meet links automatically." },
        { question: "Can we promote teacher training courses?", answer: "Yes. We create dedicated pages for teacher training with syllabus, dates, and registration." },
        { question: "Can I update the class schedule myself?", answer: "Yes. The schedule is managed from a simple admin panel." },
      ],
      relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
    },
    extras: {
      mistakes: [
        { title: "Schedule only on Instagram", description: "Students can't find current timings in old posts. Keep an up-to-date schedule on the website." },
        { title: "No beginner guidance", description: "New students worry they won't keep up. Explain levels and what to expect." },
        { title: "Health claims", description: "Promising yoga will cure conditions is misleading. Describe benefits responsibly." },
        { title: "No trial option", description: "A free or paid trial class removes hesitation for first-timers." },
      ],
      growth: [
        { title: "Instagram reels", description: "Short practice clips and tips attract local followers." },
        { title: "Corporate programmes", description: "Office yoga sessions bring steady group bookings." },
        { title: "Workshops and challenges", description: "Themed workshops and 21-day challenges bring in new students." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Stress from long work hours has made yoga and meditation increasingly popular among Gurgaon professionals, from early-morning batches in DLF societies to evening classes near Golf Course Road and online sessions after work. Grox Media builds yoga centre websites for Gurgaon studios that present your classes and teachers beautifully and make booking easy.",
        faq: { question: "Can we offer corporate yoga to Gurgaon companies through the website?", answer: "Yes. We add a corporate yoga page with programme details and an enquiry form aimed at HR teams in Gurgaon's offices." },
        depth: {
          metaDescription: "Yoga centre website designing company in Gurgaon (Gurugram). Class schedules, trial booking, online classes, workshops & corporate yoga pages. Free quote: +91 92668 06477.",
          heading: "Yoga Websites for Gurgaon Studios",
          paragraphs: [
            "Gurgaon's yoga students are often busy professionals who need flexibility: early-morning and late-evening batches, weekend sessions, and online classes when they're travelling. Your website should make these options obvious.",
            "Many yoga teachers in Gurgaon also teach inside residential societies and offices. A website with clear information on society batches, private sessions, and corporate programmes helps you grow beyond one studio.",
          ],
          points: [
            { title: "Flexible batch display", description: "Morning, evening, weekend, and online batches clearly shown." },
            { title: "Society & private classes", description: "Pages for society batches and one-on-one sessions." },
            { title: "Corporate wellness", description: "Programmes for Gurgaon companies with enquiry forms." },
            { title: "Hybrid memberships", description: "Plans combining studio and online classes." },
          ],
          faqs: [
            { question: "Can we offer private yoga sessions at clients' homes?", answer: "Yes. We add a private session page with booking and service-area details." },
            { question: "Can we sell retreat packages?", answer: "Yes. Retreat pages can include itinerary, inclusions, and registration with online payment." },
          ],
        },
      },
      dwarka: {
        intro: "Dwarka's parks and residential sectors have a strong yoga culture, with families and seniors joining morning batches close to home. Grox Media builds yoga centre websites for Dwarka that share your schedule, teachers, and batches clearly and help new students join easily.",
        faq: { question: "Can we show batches held in different Dwarka sectors?", answer: "Yes. We can list each batch location with timings and a map." },
        depth: {
          metaDescription: "Yoga centre website designing company in Dwarka, New Delhi. Batch schedules, trial class booking & online yoga classes for local studios. Call +91 92668 06477.",
          heading: "Yoga Websites for Dwarka",
          paragraphs: [
            "In Dwarka, yoga students often prefer batches in their own or nearby sectors, including family, ladies-only, and senior batches.",
            "A simple website listing batches, locations, and timings, with easy registration, helps you fill classes from the neighbourhood.",
          ],
          points: [
            { title: "Sector-wise batches", description: "Batch locations and timings by sector." },
            { title: "Family & senior batches", description: "Dedicated information for different age groups." },
            { title: "WhatsApp registration", description: "Quick registration through WhatsApp." },
          ],
          faqs: [
            { question: "Can we run ladies-only batches and show them separately?", answer: "Yes. Each batch type can be listed separately with its own timings." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── PSYCHOLOGIST ───────────────────────── */
  {
    industry: {
      key: "psychologist",
      name: "Psychologist",
      audience: "psychologists, counsellors, and therapy practices",
      whyHeading: "Why Psychologists and Counsellors Need a Thoughtful Website",
      why: [
        "Reaching out for therapy is a big step, and most people research quietly before contacting anyone. They want to understand the therapist's qualifications, approach, the concerns they work with, session formats, and whether the space feels safe. A thoughtful website makes that first step easier.",
        "A counselling website should feel warm and private. It explains areas like anxiety, stress, relationships, and parenting in gentle, non-clinical language, introduces the therapist, clarifies online and in-person options, and offers a discreet way to book or enquire.",
        "We design therapy websites with privacy in mind, avoid sensational or guaranteed-outcome language, and include clear crisis information directing people to emergency helplines when needed.",
      ],
      features: [
        { title: "Areas of support", description: "Gentle, informative pages on anxiety, stress, relationships, and more." },
        { title: "Therapist profile", description: "Qualifications, RCI registration where applicable, and therapeutic approach." },
        { title: "Confidential booking", description: "Private enquiry and appointment forms on a secure site." },
        { title: "Online sessions", description: "Booking for video or phone sessions." },
        { title: "What to expect", description: "Explains the first session, confidentiality, and session length." },
        { title: "Crisis information", description: "Clear helpline information for urgent situations." },
        { title: "Articles", description: "Supportive, informative mental wellness content." },
        { title: "Local & online SEO", description: "Optimized for \"counsellor near me\" and online therapy searches." },
      ],
      pages: ["Home", "About the therapist", "Approach", "Areas of support", "Individual therapy", "Couples / family therapy", "Online sessions", "What to expect", "Articles", "Book a session"],
      integrations: ["Secure booking", "Video session links", "Payment gateway", "Calendar sync", "Email confirmations", "SSL security"],
      faqs: [
        { question: "How do you keep enquiries confidential?", answer: "The website runs on HTTPS, forms collect only necessary details, and enquiries go directly to you. We avoid third-party tools that aren't needed." },
        { question: "Can clients book online therapy sessions?", answer: "Yes. We add booking for online sessions with automatic video links." },
        { question: "Do you write mental health content?", answer: "We draft supportive, informative content with your inputs, and you review it before publishing. We avoid diagnostic claims or promised outcomes." },
        { question: "Can the website include crisis helpline information?", answer: "Yes. We recommend a clear note directing people in crisis to emergency services and national helplines." },
      ],
      relatedService: { label: "SEO services", href: "/services/seo" },
    },
    extras: {
      mistakes: [
        { title: "Clinical, cold language", description: "Heavy jargon can feel intimidating. Warm, simple language makes reaching out easier." },
        { title: "No photo or introduction", description: "Clients want to feel a connection before booking. A warm introduction matters." },
        { title: "Promising results", description: "Guaranteeing outcomes is misleading and unethical in therapy." },
        { title: "Insecure forms", description: "Sensitive enquiries must be handled on a secure site." },
      ],
      growth: [
        { title: "Supportive articles", description: "Content on stress, sleep, and relationships helps people find you." },
        { title: "Online sessions", description: "Offering online therapy extends your reach beyond your city." },
        { title: "Professional referrals", description: "Psychiatrists, doctors, and schools refer more easily to a professional practice." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Work pressure, long commutes, and fast-paced lives have made counselling increasingly accepted among Gurgaon professionals, couples, and families. Many prefer discreet online sessions or practices close to work. Grox Media builds warm, private websites for Gurgaon psychologists and counsellors that help people take the first step.",
        faq: { question: "Can we offer employee wellbeing sessions to Gurgaon companies?", answer: "Yes. We can add a workplace wellbeing page for companies, with an enquiry form for HR teams." },
        depth: {
          metaDescription: "Psychologist & counsellor website designing company in Gurgaon (Gurugram). Confidential booking, online sessions & warm, informative content. Free quote: +91 92668 06477.",
          heading: "Therapy Websites for Gurgaon Practices",
          paragraphs: [
            "Gurgaon's therapy clients often search late at night or during a break at work, frequently on their phones. A calm, mobile-friendly site that explains your approach and offers private online booking meets them where they are.",
            "Many Gurgaon companies now invest in employee wellbeing. Counsellors can offer workshops, EAP-style sessions, and manager training through a dedicated workplace page.",
          ],
          points: [
            { title: "After-hours booking", description: "Private online booking available any time." },
            { title: "Online-first sessions", description: "Video sessions for busy professionals." },
            { title: "Workplace wellbeing", description: "Programmes for Gurgaon companies." },
            { title: "Couples & family", description: "Separate pages for relationship and family counselling." },
          ],
          faqs: [
            { question: "Can we show weekend or evening session availability?", answer: "Yes. Your availability can be shown clearly, and booking can be restricted to open slots." },
            { question: "Can multiple counsellors in our practice have profiles?", answer: "Yes. Each counsellor can have a profile with their approach and areas of support." },
          ],
        },
      },
      dwarka: {
        intro: "Families, students, and working adults in Dwarka are increasingly open to counselling for stress, exams, relationships, and parenting. Grox Media builds warm, private websites for Dwarka psychologists and counsellors that explain your approach and make booking a session simple and discreet.",
        faq: { question: "Can we offer student and exam-stress counselling?", answer: "Yes. We can create a dedicated page for students and parents with session details and booking." },
        depth: {
          metaDescription: "Psychologist & counsellor website designing company in Dwarka, New Delhi. Private booking, online sessions & student and family counselling pages. Call +91 92668 06477.",
          heading: "Counselling Websites for Dwarka",
          paragraphs: [
            "With its large student and family population, Dwarka has demand for counselling around exams, parenting, and relationships. Parents often research on behalf of their children.",
            "A gentle, clear website helps both parents and adults understand how you work and book with confidence.",
          ],
          points: [
            { title: "Student support", description: "Pages for exam stress and career confusion." },
            { title: "Parenting guidance", description: "Information for parents seeking support." },
            { title: "Discreet contact", description: "Private enquiry forms and WhatsApp." },
          ],
          faqs: [
            { question: "Can parents book sessions for their teenagers?", answer: "Yes. The booking form can capture parent and student details, and your consent process can be explained on the site." },
          ],
        },
      },
    },
  },

  /* ───────────────────────── SPA ───────────────────────── */
  {
    industry: {
      key: "spa",
      name: "Spa",
      audience: "spas, massage centres, and wellness retreats",
      whyHeading: "Why Spas Need a Premium, Trustworthy Website",
      why: [
        "Choosing a spa is about trust and ambience. Clients want to see the rooms, understand the therapies, know the hygiene standards, and check that the spa is professional and family-friendly before booking. A polished website communicates all of this far better than a listing.",
        "A spa website presents your therapy menu — Swedish, deep tissue, Balinese, Ayurvedic massages, body scrubs, and facials — with duration and benefits, shows your space through photos, and lets clients book a slot, buy gift vouchers, or choose couple packages online.",
        "We design spa websites with a calm, premium aesthetic, clear policies that reinforce professionalism, and local SEO for \"spa near me\" and therapy-specific searches.",
      ],
      features: [
        { title: "Therapy menu", description: "Massages, scrubs, and facials with duration and descriptions." },
        { title: "Online booking", description: "Clients pick a therapy, date, and time slot." },
        { title: "Gift vouchers", description: "Sell digital gift vouchers for birthdays and anniversaries." },
        { title: "Couple & group packages", description: "Present packages for couples and small groups." },
        { title: "Ambience gallery", description: "Photos of rooms, amenities, and your space." },
        { title: "Hygiene & policies", description: "Clear professional policies and hygiene standards." },
        { title: "Memberships", description: "Prepaid packages and memberships for regular clients." },
        { title: "Local SEO", description: "Optimized for \"spa near me\" and therapy-specific searches." },
      ],
      pages: ["Home", "About the spa", "Therapy menu", "Massages", "Body treatments", "Facials", "Packages", "Gift vouchers", "Gallery", "Book & contact"],
      integrations: ["Booking system", "Razorpay / UPI", "Gift voucher sales", "WhatsApp", "Google Maps", "Google reviews"],
      faqs: [
        { question: "Can clients book spa appointments online?", answer: "Yes. Clients can choose a therapy and time slot, and your team receives the booking instantly." },
        { question: "Can we sell gift vouchers on the website?", answer: "Yes. Digital gift vouchers can be purchased online and redeemed at your spa." },
        { question: "How do you present the spa professionally?", answer: "We focus on ambience, therapy details, hygiene standards, and clear policies, which help establish a trustworthy, professional image." },
        { question: "Can hotel spas get a website too?", answer: "Yes. We can build a standalone spa site or a spa section within a hotel website." },
      ],
      relatedService: { label: "Social media marketing", href: "/services/social-media-marketing" },
    },
    extras: {
      mistakes: [
        { title: "Unclear therapy details", description: "Names alone don't explain what a therapy involves. Add duration and descriptions." },
        { title: "Poor-quality photos", description: "A spa sells ambience. Dark or blurry photos lose bookings." },
        { title: "No clear policies", description: "Professional policies build trust and set the right expectations." },
        { title: "Booking only by phone", description: "Many clients plan spa visits at night. Online booking captures them." },
      ],
      growth: [
        { title: "Gift voucher campaigns", description: "Festive and occasion vouchers bring new clients through gifting." },
        { title: "Google reviews", description: "Reviews about hygiene and service quality drive local bookings." },
        { title: "Corporate wellness", description: "Packages for companies bring group bookings." },
      ],
    },
    local: {
      gurgaon: {
        intro: "Gurgaon has a thriving spa and wellness scene, from luxury hotel spas and premium day spas on Golf Course Road to neighbourhood wellness centres serving busy professionals. Clients compare spas online for ambience, therapies, and professionalism. Grox Media builds premium spa websites for Gurgaon that turn those comparisons into bookings.",
        faq: { question: "Can we target corporate clients in Gurgaon with wellness packages?", answer: "Yes. We create a corporate wellness page for Gurgaon companies with group packages and an enquiry form." },
        depth: {
          metaDescription: "Spa website designing company in Gurgaon (Gurugram). Therapy menus, online booking, gift vouchers & premium design for day spas and wellness centres. Free quote: +91 92668 06477.",
          heading: "Spa Websites for Gurgaon",
          paragraphs: [
            "Gurgaon's spa clients expect a premium experience from the first click. Elegant design, detailed therapy descriptions, and easy booking set the right expectation for the visit.",
            "Gift vouchers are a big opportunity in Gurgaon, both for personal occasions and corporate gifting. Selling them online brings in revenue and new clients year-round.",
          ],
          points: [
            { title: "Premium design", description: "Visuals and layout that match a high-end spa experience." },
            { title: "Couple packages", description: "Anniversary and couple packages highlighted." },
            { title: "Corporate gifting", description: "Bulk gift vouchers for companies." },
            { title: "Hotel spa integration", description: "Spa pages for hotels and serviced apartments." },
          ],
          faqs: [
            { question: "Can we sell bulk gift vouchers to companies?", answer: "Yes. We add a corporate gifting page with an enquiry form for bulk vouchers." },
            { question: "Can guests book in-room or at-home spa services?", answer: "Yes, if you offer them. We add a separate booking option with service areas." },
          ],
        },
      },
      dwarka: {
        intro: "Spas and wellness centres in Dwarka serve local residents looking for relaxation close to home, including couples, families, and professionals. Grox Media builds spa websites for Dwarka that present your therapies professionally and make booking easy.",
        faq: { question: "Can we highlight weekend and festive offers?", answer: "Yes. Offers and packages can be updated from the admin panel and highlighted on the homepage." },
        depth: {
          metaDescription: "Spa & massage centre website designing company in Dwarka, New Delhi. Therapy menus, online booking, packages & gift vouchers. Call +91 92668 06477.",
          heading: "Spa Websites for Dwarka",
          paragraphs: [
            "Dwarka's spa clients value a clean, professional, and relaxing environment close to home. A website that shows your space and therapies clearly builds that trust before the first visit.",
            "Easy booking and clear packages help turn local searches into appointments.",
          ],
          points: [
            { title: "Professional presentation", description: "Clear therapy menu and policies." },
            { title: "Packages & memberships", description: "Value packages for regular clients." },
            { title: "Quick booking", description: "Online and WhatsApp booking." },
          ],
          faqs: [
            { question: "Can clients book through WhatsApp from the website?", answer: "Yes. A WhatsApp button sends a pre-filled booking message to your number." },
          ],
        },
      },
    },
  },
];
