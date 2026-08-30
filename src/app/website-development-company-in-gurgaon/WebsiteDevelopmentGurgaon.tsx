"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  User,
  ArrowRight,
  Loader2,
  Check,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Building2,
  Layers,
  Cpu,
  Sparkles,
  MessagesSquare,
  TrendingUp,
  Award,
  Boxes,
  Building,
  UserCog,
  Plug,
  Gauge,
  ShieldCheck,
  LayoutTemplate,
  Search,
  Compass,
  Palette,
  ClipboardCheck,
  Rocket,
  HeartPulse,
  GraduationCap,
  Landmark,
  Scale,
  Hotel,
  HardHat,
  Store,
  Car,
  Briefcase,
  MessageCircle,
  MapPin,
  BarChart3,
  Mailbox,
  Calendar,
  CreditCard,
  ClipboardList,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SectionBadge from "@/components/ui/SectionBadge";
import TechStack from "@/components/sections/TechStack";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const inputCls =
  "mb-4 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-5 py-4 pl-12 text-[#111827] placeholder:text-gray-400 transition-all duration-200 focus:border-[#1e40af] focus:outline-none focus:ring-2 focus:ring-blue-500/30";

const trustStats = [
  { value: "500+", label: "Websites Delivered" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "50+", label: "In-House Team" },
  { value: "12+", label: "Years of Experience" },
];

const whyUs = [
  {
    Icon: Users,
    title: "Experienced Web Development Team",
    description:
      "Our skilled team of developers, designers, and strategists collaborates on creating visually appealing and business-oriented websites.",
  },
  {
    Icon: Cpu,
    title: "Expertise in Modern Technologies",
    description:
      "We develop a robust and future-proofed web page using technology stacks such as React, Next.js, Node.js, WordPress, Shopify, AWS, and MongoDB.",
  },
  {
    Icon: Sparkles,
    title: "Custom-Built Solutions",
    description:
      "Every website we develop has its unique design, architecture, and development, depending on the brand identity and business goals of our clients.",
  },
  {
    Icon: Layers,
    title: "Complete Development Under One Roof",
    description:
      "We offer you end-to-end service for your project from its discovery and UI/UX design to its development and deployment.",
  },
  {
    Icon: Gauge,
    title: "Performance-Focused Development",
    description:
      "Our websites feature high performance in terms of clean coding, responsiveness, loading speed, and SEO optimization in order to ensure the best possible user experience.",
  },
  {
    Icon: MessagesSquare,
    title: "Transparent Project Communication",
    description:
      "Updates on the entire process will be provided throughout the project period. Direct communication with our development team will be part of your responsibilities too.",
  },
  {
    Icon: TrendingUp,
    title: "Scalable Digital Solutions",
    description:
      "With the growth of your business comes the growth of your website. We have the ability to make systems that scale well, which means they can accommodate everything else you need.",
  },
  {
    Icon: Award,
    title: "Trusted by Businesses Across Industries",
    description:
      "With an experienced web development team and expertise in modern technologies, we create custom-built and scalable digital solutions for startups, enterprises, e-commerce brands, healthcare providers, manufacturers, and service businesses.",
  },
];

const customSolutions = [
  {
    Icon: Boxes,
    title: "Custom Web Application Development",
    description:
      "Looking beyond just a website? Let us create custom web applications for you, which will help automate business processes and streamline operations.",
  },
  {
    Icon: Building,
    title: "Enterprise Website Development",
    description:
      "Specialized service designed for enterprises that need high-end secure, scalable, and powerful websites with a lot of functionality.",
  },
  {
    Icon: UserCog,
    title: "Customer Portal Development",
    description:
      "Make things easier for your clients with secure customer portals for managing accounts, exchanging documents, support inquiries, and communication.",
  },
  {
    Icon: Plug,
    title: "API & Third-Party Integration",
    description:
      "Integrations of other business application types such as CRM, Payment Gateway, ERP Software, Marketing Software, and many more.",
  },
  {
    Icon: Smartphone,
    title: "Progressive Web App (PWA) Development",
    description:
      "Make your users experience an app-like responsiveness right through your site using their computers by offering them speed, access, and availability on all devices.",
  },
  {
    Icon: Zap,
    title: "Website Performance Optimization",
    description:
      "Boost your website's performance by increasing its speed and improving responsiveness in order to give your visitors a better experience on your site.",
  },
  {
    Icon: ShieldCheck,
    title: "Website Security & Maintenance",
    description:
      "Protect your website from attacks through updating your website, conducting security tests, making back-ups, debugging your website, and offering technical support.",
  },
  {
    Icon: LayoutTemplate,
    title: "Headless CMS Development",
    description:
      "Build flexible, future-ready digital experiences using modern headless CMS solutions that simplify content management across multiple platforms.",
  },
];

const processSteps = [
  {
    Icon: Search,
    title: "Researching Your Business",
    description:
      "We start off by knowing everything about your business, your industry, your competitors, and your target audience to set a great foundation for your website.",
  },
  {
    Icon: Compass,
    title: "Planning a Winning Strategy",
    description:
      "Our specialists strive hard to create an ideal map for your site as well as plan the structure and elements.",
  },
  {
    Icon: Palette,
    title: "Crafting a Memorable User Experience",
    description:
      "We design an interface that will perfectly fit into the overall picture of your brand and will provide convenient navigation of the website.",
  },
  {
    Icon: Code,
    title: "Bringing Your Vision to Life",
    description:
      "We apply modern technologies and approaches in order to create a website that will be quick and secure for you.",
  },
  {
    Icon: ClipboardCheck,
    title: "Testing Every Detail",
    description:
      "Before launching your website, we test all of its features and check whether it works well on various platforms and devices.",
  },
  {
    Icon: Rocket,
    title: "Launching With Confidence",
    description:
      "When the website is approved from your side, we will launch it and continue to provide maintenance for it in the future.",
  },
];

const industries = [
  { Icon: HeartPulse, title: "Healthcare" },
  { Icon: Building2, title: "Real Estate" },
  { Icon: HardHat, title: "Manufacturing" },
  { Icon: GraduationCap, title: "Education" },
  { Icon: Landmark, title: "Finance" },
  { Icon: Scale, title: "Legal" },
  { Icon: Hotel, title: "Hospitality" },
  { Icon: HardHat, title: "Construction" },
  { Icon: Store, title: "Retail" },
  { Icon: Car, title: "Automotive" },
  { Icon: TrendingUp, title: "Startups" },
  { Icon: Cpu, title: "SaaS" },
  { Icon: Briefcase, title: "Professional Services" },
];

const features = [
  {
    Icon: FileText,
    title: "Interactive Contact Forms",
    description:
      "We will assist you in designing forms of inquiry that will facilitate your clients contacting your firm easily. From requests for quotes and consultations to inquiries and leads, we will tailor the form as per your needs.",
  },
  {
    Icon: ArrowRight,
    title: "Custom Call-to-Action Sections",
    description:
      "We provide well-structured areas for call to action, which will direct your visitors on what is next to do, whether requesting a quote, booking an appointment, or simply contacting you.",
  },
  {
    Icon: LayoutTemplate,
    title: "Easy Content Management",
    description:
      "Working collectively, we design user-friendly CMS that enable you to make changes to your website's copy, images, blogs, products, and other content without having to understand anything technical.",
  },
  {
    Icon: Search,
    title: "Advanced Search Functionality",
    description:
      "We can provide you with advanced search capabilities that will allow your visitors to easily search for the content that they need within your website.",
  },
  {
    Icon: FileText,
    title: "Blog & Resource Center",
    description:
      "We help you build special sections on your blog and resources to publish industry updates, company news, how-to guides, etc. in order to promote your SEO efforts.",
  },
  {
    Icon: Calendar,
    title: "Appointment & Booking Integration",
    description:
      "Our service ensures easy-to-use scheduling and booking features that enable clients to book an appointment, demo, consultation, or other services right from your website.",
  },
  {
    Icon: CreditCard,
    title: "Secure Payment Gateway Integration",
    description:
      "We help integrate secure payment gateways so your customers can conveniently make service payments, recurring payments, or eCommerce purchases directly through your website.",
  },
  {
    Icon: ClipboardList,
    title: "Customer Inquiry Management",
    description:
      "We provide booking tools that allow the client to easily schedule a meeting, demonstration, consultation, or any other services directly from your site.",
  },
  {
    Icon: Mailbox,
    title: "Email Subscription Forms",
    description:
      "We provide assistance with integrating newsletter subscription forms so that users can easily subscribe to newsletters, updates, products, and more through easy-to-use forms.",
  },
  {
    Icon: MessageCircle,
    title: "Live Chat & WhatsApp Integration",
    description:
      "We provide live chat and WhatsApp integration features to enable your visitors to reach out to your staff and get their queries resolved right from your site.",
  },
  {
    Icon: MapPin,
    title: "Google Maps Integration",
    description:
      "We can integrate Google Maps into your website to help customers easily find your office, showroom, or business location while making important location information more accessible.",
  },
  {
    Icon: BarChart3,
    title: "Analytics & Performance Tracking",
    description:
      "We assist in integrating analytical and performance measurement tools to track website traffic, user behavior, lead generation sources, and conversion, providing you with valuable information for assessing and enhancing your website performance.",
  },
];

const faqs = [
  {
    q: "Why should I choose Grox Media for website development in Gurgaon?",
    a: "At Grox Media, we design and develop custom websites that are scalable and SEO optimized. The websites are developed through technology-based solutions and industry best practices.",
  },
  {
    q: "How much does it cost to develop websites in Gurgaon?",
    a: "The cost depends on the requirement of the website that you wish to get developed. After we have understood your requirements, we will provide you with a quotation with no hidden costs involved.",
  },
  {
    q: "How long does it take to develop a website?",
    a: "The time taken to complete a project depends upon the project requirements. A basic business website requires only a few weeks; however, web application development may require more time. We provide a complete project timeline for your review before starting development work.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "We generally develop customized websites based on your brand, business goals, and user experience needs. On some occasions, customization of a CMS-based solution is also possible.",
  },
  {
    q: "Would my website be mobile-friendly?",
    a: "Yes, all our websites are 100 percent responsive and work on both the desktops as well as on the smartphones.",
  },
  {
    q: "Do you make SEO-friendly websites?",
    a: "Yes, we make SEO-friendly websites that have all the characteristics, like optimized code, loading speed, mobile compatibility, etc.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes, our service includes redesigning an existing website through better design and performance without affecting your brand image.",
  },
  {
    q: "Do you maintain my website after the launch?",
    a: "Yes, we provide a variety of services that include website maintenance after its launch.",
  },
  {
    q: "Can you integrate third-party tools and business systems into my website?",
    a: "Of course, we can integrate third-party tools and business applications like CRM systems, payment gateway services, ERP solutions, marketing tools, analytics platforms, and other applications depending upon your website's needs. This is to link up your website with the existing systems of your business.",
  },
  {
    q: "How do I begin working with Grox Media?",
    a: "All you have to do is contact us to book a free consultation where we will understand your needs and provide you with a solution tailored for your project.",
  },
];

export default function WebsiteDevelopmentGurgaon() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const emailRe = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRe.test(formData.email)) newErrors.email = "Enter a valid email";
    const phoneRe = /^[0-9]{7,15}$/;
    const cleaned = formData.phone.replace(/[^0-9]/g, "");
    if (!phoneRe.test(cleaned)) newErrors.phone = "Enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.phone,
          message: formData.message,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        toast.error(json?.error || "Failed to send message");
        setIsSubmitting(false);
        return;
      }
      toast.success(json?.message || "Message sent successfully!");
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero + Contact Form */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/25 via-indigo-400/20 to-purple-400/25 blur-3xl -z-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex justify-center lg:justify-start"
              >
                <SectionBadge>
                  Building Future-Ready Websites for Ambitious Brands in Gurgaon
                </SectionBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#111827] md:text-5xl lg:text-5xl"
              >
                Professional Website Development in Gurgaon for Businesses
                Ready to Scale
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-6 max-w-xl text-lg text-gray-500 lg:mx-0"
              >
                Grox Media is a renowned website development company in
                Gurgaon that helps many companies create and develop their
                websites that are not only attractive but also functional. If
                you have a new venture to launch or if you want to revamp an
                old website of yours, our professionals will help you create
                a website that sets your brand in Gurgaon and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-6 lg:mx-0 sm:grid-cols-4 sm:max-w-none"
              >
                {trustStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-extrabold text-[#1e40af] md:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1e40af] px-8 py-4 font-semibold text-white transition hover:bg-[#1e3a8a]"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold text-[#111827] transition hover:bg-gray-50"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>

            {/* Right Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-2 text-2xl font-bold text-[#111827]">
                Get a Free Quote
              </h2>
              <p className="mb-6 text-sm text-gray-400">
                Tell us about your project and we&apos;ll get back to you
                within 24 hours
              </p>
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-[#111827]">
                    Thank you!
                  </p>
                  <p className="mt-2 text-[#6b7280]">
                    We&apos;ve received your message. Our team will contact you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={inputCls}
                      aria-label="Your name"
                    />
                    {errors.name && (
                      <p className="-mt-2 mb-2 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={inputCls}
                      aria-label="Your email"
                    />
                    {errors.email && (
                      <p className="-mt-2 mb-2 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={inputCls}
                      aria-label="Your phone"
                    />
                    {errors.phone && (
                      <p className="-mt-2 mb-2 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={cn(
                      inputCls,
                      "min-h-[120px] resize-none pl-5 pt-4",
                      "focus:pl-5"
                    )}
                    aria-label="Message"
                  />
                  {errors.message && (
                    <p className="-mt-2 mb-2 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e40af] py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#1e3a8a] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Why Grox Media</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Why Businesses in Gurgaon Choose Grox Media
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              At Grox Media, our aim is to integrate creativity with
              technology in order to develop websites for your business to
              thrive. We aim to provide you with top-class digital solutions
              that are tailored according to your needs and future
              aspirations.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <w.Icon className="h-6 w-6 text-[#1e40af]" />
                </div>
                <h3 className="text-base font-bold text-[#111827]">
                  {i + 1}. {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {w.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Web Development Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Custom Solutions</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Build Smarter With Our Custom Web Development Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Make your concepts into successful digital solutions. We offer
              custom web solutions that are made in order to engage your
              customers, improve your operation, and ensure that your
              business experiences growth.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {customSolutions.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                  <c.Icon className="h-6 w-6 text-groxOrange" />
                </div>
                <h3 className="text-base font-bold text-[#111827]">
                  {i + 1}. {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {c.description}
                </p>
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
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Our Proven Website Development Process for Businesses in
              Gurgaon
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              The development process at Grox Media includes a structured
              approach that places your goals and objectives front and
              center for the creation of websites that work for you.
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e40af] text-white shadow-md">
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
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1e40af] text-white">
                  <step.Icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-bold text-[#111827]">
                    {idx + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Industries</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Which Industries Do We Build Websites For?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              We know that each and every industry has its own set of
              objectives, user journey, and web design requirements. This is
              why our team in Gurgaon creates customized websites according
              to your industry requirements.
            </p>
          </motion.div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-[#111827] shadow-sm"
              >
                <ind.Icon className="h-4 w-4 text-[#1e40af]" />
                {ind.title}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <SectionBadge>Features</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
              Website Features Designed to Help Gurgaon Businesses Grow
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              All the websites that we design are built with functionality,
              performance, and business growth in mind. As a startup,
              enterprise, or any growing business in Gurgaon, your website
              will have features that provide you with value in the long
              run.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <f.Icon className="h-5 w-5 text-[#1e40af]" />
                </div>
                <h3 className="text-sm font-bold text-[#111827]">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack — shared component */}
      <TechStack />

      {/* CTA */}
      <motion.section
        {...fadeUp}
        className="bg-gradient-to-r from-[#1e40af] to-[#111827] py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Take Your Gurgaon Business Online With Grox Media
          </h2>
          <p className="mt-4 text-lg text-white/70">
            We are ready to build impressive digital solutions that match
            your brand and increase your customers&apos; trust and help your
            company thrive, whether you require a brand-new site or a
            full-fledged digital overhaul.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact-form"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#1e40af] transition hover:bg-gray-100"
            >
              Get Your Free Website Strategy Session →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111827] md:text-4xl">
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
                <h3 className="text-lg font-bold text-[#111827]">
                  {i + 1}. {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-50/50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Phone className="h-6 w-6 text-[#1e40af]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Call Us
                </p>
                <a
                  href="tel:+919266806477"
                  className="mt-1 block font-semibold text-[#111827] hover:text-[#1e40af]"
                >
                  +91 92668 06477
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <Mail className="h-6 w-6 text-[#ea580c]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Email Us
                </p>
                <a
                  href="mailto:info@groxmedia.in"
                  className="mt-1 block font-semibold text-[#111827] hover:text-[#ea580c]"
                >
                  info@groxmedia.in
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Office
                </p>
                <p className="mt-1 font-semibold text-[#111827]">
                  Unit No. 604, 6th Floor, Tower B, Bhutani Alphathum, Sector
                  90, Noida, UP 201305
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
