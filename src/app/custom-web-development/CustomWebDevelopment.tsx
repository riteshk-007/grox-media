"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Briefcase,
  ShoppingCart,
  Sparkles,
  LayoutTemplate,
  RefreshCw,
  Settings2,
  Target,
  Compass,
  Palette,
  Cpu,
  ClipboardCheck,
  Rocket,
  Layers,
  Gauge,
  Smartphone,
  ShieldCheck,
  Search,
  LifeBuoy,
  HeartPulse,
  GraduationCap,
  Building,
  Landmark,
  Factory,
  TrendingUp,
  Lock,
  MessageCircle,
  MapPin as MapPinIcon,
  Share2,
  FileText,
  CreditCard,
  BarChart3,
  ClipboardList,
  Mail,
  Plug,
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import TechStack from "@/components/sections/TechStack";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const trustStats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "40+", label: "Countries Served" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "12+", label: "Years of Experience" },
];

const services = [
  {
    Icon: Briefcase,
    title: "Business Website Development",
    tagline: "Build a website that makes your brand stand out",
    description:
      "We design professional business websites to assist you to market your services, communicate your value proposition, and generate leads from your website visitors.",
  },
  {
    Icon: ShoppingCart,
    title: "eCommerce Website Development",
    tagline: "Turn your products into an online shopping experience",
    description:
      "We build eCommerce websites that make buying simple and selling easier. Each online store is created with a view of improving the customer experience, enhancing conversion rates, and strengthening the market position.",
  },
  {
    Icon: Sparkles,
    title: "Custom Website Development",
    tagline: "Unique ideas need custom solutions",
    description:
      "Ready to build something different? Our services will turn your idea into a customized website based on the requirements of your business. Our solutions are developed taking into consideration the flexibility and functional performance aspects of your business.",
  },
  {
    Icon: LayoutTemplate,
    title: "Landing Page Development",
    tagline: "Focused pages built to drive action",
    description:
      "Every visitor is a potential customer. We develop landing pages using compelling messages, effective layout designs, and actionable calls to action, which enable more conversions into quality leads.",
  },
  {
    Icon: RefreshCw,
    title: "Website Redesign and Development",
    tagline: "Give your outdated website a fresh digital experience",
    description:
      "We redesign websites at Grox Media with modern graphics, added functionality, and enhanced user experience that make a more powerful impression on behalf of your brand.",
  },
  {
    Icon: Settings2,
    title: "CMS Website Development",
    tagline: "Manage your website without technical complexity",
    description:
      "A powerful website starts with easy management. We design intuitive CMS websites that allow content editing to be fast and easy, putting you in charge always.",
  },
];

const whyUs = [
  {
    Icon: Target,
    title: "Custom Websites Built Around Your Requirements",
    description:
      "The website needs to be unique as much as your brand. We will build a customized website specifically for you, which will help promote your company as a whole.",
  },
  {
    Icon: Compass,
    title: "Designs Focused On Better User Experience",
    description:
      "Our team will design user-friendly websites with easy navigation and attractive interfaces that will allow your website visitors to interact with your brand and perform actions.",
  },
  {
    Icon: Gauge,
    title: "Keep Visitors Engaged With Better Performance",
    description:
      "Speed matters when every visitor counts. We build websites that deliver smooth performance, faster loading times, and a reliable experience that keeps your audience engaged.",
  },
  {
    Icon: Smartphone,
    title: "Deliver a Consistent Experience Across All Devices",
    description:
      "Your customers are browsing everywhere. Is your website ready? We ensure your website adapts perfectly across desktops, tablets, and smartphones, creating a consistent experience for every visitor.",
  },
  {
    Icon: Search,
    title: "SEO-Friendly Development Foundation",
    description:
      "Don't let your website become a barrier to your growth. Our website development strategy is geared towards developing high-speed, high-searchable, and scalable sites that meet both your current and future business objectives.",
  },
  {
    Icon: LifeBuoy,
    title: "Support After Your Website Goes Live",
    description:
      "The website building process does not stop at completion; we will help you out by updating, maintaining, and securing your website according to your requirements.",
  },
];

const processSteps = [
  {
    Icon: Compass,
    title: "Understanding Your Goals",
    description:
      "A good website always begins with an idea. We understand what makes you unique, what your customers expect from you, and what your website must accomplish.",
  },
  {
    Icon: Target,
    title: "Creating the Right Strategy",
    description:
      "A successful website requires proper foundations. We create the strategic structure for your website to guide users seamlessly through and help them find the required information.",
  },
  {
    Icon: Palette,
    title: "Bringing Your Brand to Life",
    description:
      "Design is where your ideas come to life. We design attractive interfaces that show who you are while providing an experience your visitors will love.",
  },
  {
    Icon: Cpu,
    title: "Building With Smart Technology",
    description:
      "We develop our designs into fully working websites using the correct technologies that will ensure efficient operation.",
  },
  {
    Icon: ClipboardCheck,
    title: "Refining Every Detail",
    description:
      "Before your website is seen by your target market, we make sure that each and every component of your site is tested for perfect performance.",
  },
  {
    Icon: Rocket,
    title: "Launching Your Digital Experience",
    description:
      "Once everything is ready, we bring your website live with confidence and continue supporting you with updates and improvements whenever needed.",
  },
];

const customReasons = [
  {
    Icon: Target,
    title: "Designed Around Your Requirements",
    description:
      "We create websites that match your specific goals, workflows, and customer expectations, giving your brand a digital experience that feels truly personalized.",
  },
  {
    Icon: Layers,
    title: "Built for Future Expansion",
    description:
      "Our custom solutions are developed with scalability in mind, allowing you to add new features, improve functionality, and adapt as your business grows.",
  },
  {
    Icon: Compass,
    title: "Focused on Better Customer Experiences",
    description:
      "We build intuitive websites with smooth navigation and engaging interfaces that help visitors connect with your brand and take meaningful actions.",
  },
  {
    Icon: Gauge,
    title: "Optimized for Speed and Performance",
    description:
      "Every website is developed with performance in mind to deliver faster loading, smooth functionality, and a reliable experience across devices.",
  },
  {
    Icon: ShieldCheck,
    title: "Developed With Strong Security Practices",
    description:
      "We follow reliable development practices to create secure websites that help protect your data and maintain customer trust.",
  },
  {
    Icon: Search,
    title: "Created With SEO-Friendly Structure",
    description:
      "We construct websites that feature clean architecture, responsive design, and search-friendly components to ensure online visibility in the future.",
  },
];

const industries = [
  { Icon: HeartPulse, title: "Healthcare", description: "Create digital experiences that help patients find information easily and connect with your services confidently." },
  { Icon: ShoppingCart, title: "eCommerce and Retail", description: "Create online stores that make shopping simple, engaging, and convenient." },
  { Icon: GraduationCap, title: "Education", description: "Create engaging educational platforms that help institutions showcase programs, connect with students, and improve digital experiences." },
  { Icon: Building, title: "Real Estate", description: "Showcase properties with engaging websites designed to attract serious buyers." },
  { Icon: Landmark, title: "Finance and Professional Services", description: "Build secure websites that communicate trust and expertise." },
  { Icon: Factory, title: "Manufacturing and B2B", description: "Design professional websites that will demonstrate products, services, and skills." },
  { Icon: TrendingUp, title: "Startups and Growing Brands", description: "Launch scalable websites that help new brands establish their online presence." },
];

const features = [
  { Icon: Smartphone, label: "Mobile Responsive Design" },
  { Icon: Gauge, label: "Fast Loading Performance" },
  { Icon: Search, label: "SEO-Friendly Structure" },
  { Icon: Lock, label: "Secure SSL Certificate" },
  { Icon: FileText, label: "Contact & Lead Generation Forms" },
  { Icon: MessageCircle, label: "WhatsApp Integration" },
  { Icon: MapPinIcon, label: "Google Maps Integration" },
  { Icon: Share2, label: "Social Media Integration" },
  { Icon: Settings2, label: "Content Management System (CMS)" },
  { Icon: FileText, label: "Blog Functionality" },
  { Icon: CreditCard, label: "Payment Gateway Integration" },
  { Icon: BarChart3, label: "Analytics Integration" },
  { Icon: ClipboardList, label: "Custom Forms" },
  { Icon: Mail, label: "Email Integration" },
  { Icon: Plug, label: "Third-Party API Integration" },
  { Icon: ShieldCheck, label: "Advanced Website Security" },
];

const faqs = [
  {
    q: "How long does it take to develop a website?",
    a: "The timeline depends on your website type, features, and customization needs. A basic website takes less time, while eCommerce and custom websites may require additional development time.",
  },
  {
    q: "How much will it cost to develop a website in Delhi?",
    a: "It will depend on your needs in terms of website design, features, and functionality. We will make something that suits your needs.",
  },
  {
    q: "Why do businesses need to invest in website development?",
    a: "With a professional website, it becomes easier to gain trust, create a good user experience, and attract customers for further business development.",
  },
  {
    q: "Can you redesign my website?",
    a: "Yes, we can redesign old websites and improve them in terms of design, performance, functionality, and user experience.",
  },
  {
    q: "Can you migrate my website to another platform?",
    a: "Yes, we help migrate websites while maintaining important data, structure, and functionality. The process depends on your current platform and requirements.",
  },
  {
    q: "Does website development play an essential role in SEO?",
    a: "Yes, website development gives a good SEO platform with faster loading, mobile compatibility, cleaner code structure, and good visibility through search engines.",
  },
  {
    q: "Which is the best website development company in Delhi?",
    a: "Grox Media provides customized website development solutions focused on creative design, smooth functionality, and business growth.",
  },
  {
    q: "Do you develop custom websites?",
    a: "Yes, we create custom websites with unique features, integrations, and functionalities based on your specific business needs.",
  },
];

export default function CustomWebDevelopment() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div {...fadeUp} className="flex justify-center">
            <SectionBadge>Custom Web Development</SectionBadge>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 text-balance text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#111827] md:text-6xl"
          >
            Build a High-Performance Website That{" "}
            <span className="text-groxOrange">Turns Visitors Into Customers</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b7280]"
          >
            Is your current website helping your business grow or holding it back? An
            amazing website can take you a long way. We design high-performing websites
            at Grox Media that will help promote your brand, reach out to your targeted
            customers, and even increase sales for you.
          </motion.p>

          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Trusted by Companies Around the World
            </p>
            <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-groxBlue md:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-groxBlue px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-blue-900"
            >
              Get a Free Web Development Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-[#111827] transition hover:border-groxBlue hover:text-groxBlue"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Growth-focused */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-4xl">
              Turn Your Website Into a Growth-Focused Digital Platform
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
              <p>
                Grox Media is the best custom web development company with the finest
                team of full-stack developers ready to bring magical web experiences
                that keep every user stunned. We at Grox Media are specialists in
                creating websites that enable companies to leave a lasting impression
                and take advantage of each visit. Our main goal is to create unique
                digital products that will be a reflection of your brand, interesting
                to your visitors, and motivating them to perform specific actions.
              </p>
              <p>
                Whether you are looking to build a stage where to win customers,
                showcase offerings or build the foundation of organic growth, our web
                development service never disappoints. So no more waiting, just
                getting a consultation by web development experts at Grox Media is
                just a click away.
              </p>
              <p>Reach out to us today and our developer will turn every visit into a customer.</p>
              <p>
                If you want to get more leads, sell more, or create your credibility,
                then our professionals are ready to create an effective website for
                you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>What We Build</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
              Explore Our Website Development Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Our team at Grox Media creates website solutions for you that match your
              brand, customers, and goals. From lead generation and online selling to
              operational streamlining, we design and develop websites for you that
              make a difference.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <svc.Icon className="h-7 w-7 text-groxBlue" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-[#111827]">
                  {i + 1}. {svc.title}
                </h3>
                <p className="mb-3 text-sm font-semibold text-groxOrange">{svc.tagline}</p>
                <p className="text-sm leading-relaxed text-gray-500">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Grox Media */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Why Grox Media</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
              Why Choose Grox Media for Website Development
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              The right website begins with a team that understands your goals and
              audience. Established in Delhi, Grox Media is committed to providing
              you with functional and visually attractive websites. Right from our
              first discussion to the actual launching of the site, we collaborate
              with you to ensure that the sites reflect your brand, solve your
              problems, and become the basis for your growth online.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                  <w.Icon className="h-6 w-6 text-groxOrange" />
                </div>
                <h3 className="text-lg font-bold text-[#111827]">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{w.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>How We Work</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
              A Clear Process Behind Every Website We Create
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Every great website starts with a thoughtful process. Here&apos;s how we
              bring your vision to life. At Grox Media, we go beyond development by
              understanding your goals, planning every detail, and creating a website
              experience that connects with your audience and helps your business
              grow.
            </p>
          </motion.div>
          <div className="relative mt-16 hidden md:block">
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-gray-200" />
            <div className="relative z-10 grid grid-cols-6 gap-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-groxBlue text-white shadow-md">
                    <step.Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-4 text-sm font-bold text-[#111827]">
                    {idx + 1}. {step.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative mt-10 space-y-8 md:hidden">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex gap-6 pl-4"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-groxBlue text-white">
                  <step.Icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-bold text-[#111827]">
                    {idx + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom development reasons */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Custom Development</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
              Why Choose Custom Web Development for Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Our team of web developers specializes in creating customized web
              solutions that are not only template-based. We design websites that
              provide users with improved usability through various features as well
              as ensure that your business can flourish online.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {customReasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <r.Icon className="h-6 w-6 text-groxBlue" />
                </div>
                <h3 className="text-lg font-bold text-[#111827]">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Industries</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
              Website Development Solutions Across Multiple Industries
            </h2>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                  <ind.Icon className="h-6 w-6 text-groxOrange" />
                </div>
                <h3 className="text-base font-bold text-[#111827]">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{ind.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Features</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
              Everything Your Website Needs to Perform at Its Best
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              We include all the necessary features that will make your website an
              easy-to-use platform for you to achieve your goals and build value
              right from the beginning. Good feature sections enable users to know
              the value of what a business is providing at first glance.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
                  <f.Icon className="h-5 w-5 text-groxBlue" />
                </div>
                <p className="text-xs font-semibold leading-snug text-[#111827]">{f.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack — shared component (as shown in your reference image) */}
      <TechStack />

      {/* CTA */}
      <motion.section {...fadeUp} className="bg-gradient-to-r from-groxBlue to-[#111827] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white md:text-4xl">
            Ready to Transform Your Online Presence With Grox Media?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Don&apos;t let your website miss out on valuable business opportunities.
            Team up with Grox Media for website development that will be an accurate
            representation of your business and will help you realize your objectives
            digitally.
          </p>
          <p className="mt-2 text-white/70">
            Begin the journey of your website and get closer to digital success.
            Reach out to us now to talk about your requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-groxBlue transition hover:bg-gray-100"
            >
              Get a Free Web Development Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
            >
              View Our Portfolio
            </Link>
            <a
              href="tel:+919266806477"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="flex items-start gap-2 text-lg font-bold text-[#111827]">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-groxOrange" />
                  {faq.q}
                </h3>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-gray-500">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
