export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: string;
  link?: string;
  filter?: string;
};

export type GraphicSubCategory = "Logos" | "Packaging" | "Social Media Graphics" | "3D Work";

export type GraphicItem = {
  title: string;
  image: string;
  subCategory: GraphicSubCategory;
};

export type VideoPlatform = "Instagram" | "YouTube" | "Facebook";

export type VideoItem = {
  title: string;
  thumbnail: string;
  videoSrc: string;
  client: string;
  type: string;
  platform: VideoPlatform;
};

export const projects: Project[] = [
  {
    title: "MBD Copper",
    category: "B2B Manufacturing",
    description:
      "A professional B2B WordPress website for MBD Copper, a leading manufacturer and exporter of high-grade copper products.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/mbdcopper.png",
    tags: ["WordPress", "B2B", "Manufacturing", "PHP"],
    results: "Enhanced digital presence and inquiry management",
    link: "https://mbdcopper.in/",
    filter: "Web Development",
  },
  {
    title: "Rajiv Phylon",
    category: "B2B Manufacturing",
    description:
      "A premium B2B platform for shoe sole manufacturing, built with a Next.js front-end, React.js admin portal, and Node.js backend with PostgreSQL database.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/rajivphylon.png",
    tags: ["Next.js", "React.js", "Node.js", "PostgreSQL", "B2B"],
    results: "Seamless product showcase and inquiry system",
    link: "https://rajivphylon.com/",
    filter: "Web Development",
  },
  {
    title: "Elite Edge Fitness",
    category: "Gym & E-commerce",
    description:
      "A modern fitness website offering memberships and selling PDF courses, designed with Next.js and PostgreSQL database.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/elite-edge.png",
    tags: ["Next.js", "React.js", "Node.js", "PostgreSQL", "E-commerce"],
    results: "Streamlined memberships and digital course delivery",
    link: "https://eliteedgefitness.in/",
    filter: "E-commerce",
  },
  {
    title: "Wool Jute Rug",
    category: "Carpets E-commerce",
    description:
      "An international B2C e-commerce platform for selling carpets, featuring custom checkout with PayPal and Payoneer integration.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/wooljuterug.png",
    tags: ["Next.js", "React.js", "Node.js", "PostgreSQL", "PayPal", "Payoneer"],
    results: "Fully integrated global B2C payment and shopping",
    link: "https://www.wooljuterug.com/",
    filter: "E-commerce",
  },
  {
    title: "Radiant Rays India",
    category: "Medical B2B & B2C",
    description:
      "A robust medical supply website supporting both B2B and B2C channels, integrated with Razorpay payment gateway and Shiprocket shipping services.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/radiantraysindia.png",
    tags: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Razorpay", "Shiprocket"],
    results: "End-to-end payment and logistics integration",
    link: "https://radiantraysindia.com/",
    filter: "Healthcare",
  },
  {
    title: "Aashey",
    category: "Ecommerce (Ghee)",
    description:
      "A premium ecommerce platform for selling high-quality Ghee, built with Next.js, React, and Node.js.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/aashey.jpeg",
    tags: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    results: "High-performance ecommerce store for dairy products",
    link: "https://aashey.com/",
    filter: "E-commerce",
  },
  {
    title: "Nutry Bites",
    category: "Ecommerce (Makhana)",
    description:
      "A specialized ecommerce platform for selling healthy Makhana snacks, developed using Next.js, React, and Node.js.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/nutrybites.jpeg",
    tags: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    results: "Seamless shopping experience for healthy snacks",
    link: "https://nutrybites.co.in/",
    filter: "E-commerce",
  },
  {
    title: "Shree Ganesh Traders",
    category: "B2B Trading Platform",
    description:
      "A static B2B trading website built with Next.js for Shree Ganesh Traders, focusing on inquiry management and product display.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/sreeganeshtraders.jpeg",
    tags: ["Next.js", "React", "Static Site", "B2B"],
    results: "Enhanced online presence and inquiry handling",
    link: "https://sreeganeshtraders.com/",
    filter: "Web Development",
  },
  {
    title: "Folio First Consulting",
    category: "Financial Consulting Platform",
    description:
      "Navigate the bureaucratic maze of IEPF claims and share transmission with India's most trusted experts. Effortless, secure, and fully guided.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/foliofirstconsulting.jpeg",
    tags: ["Next.js", "Financial Claims", "IEPF", "Consulting"],
    results: "Expert financial legacy reclamation and guidance",
    link: "https://foliofirstconsulting.com/",
    filter: "Finance",
  },
  {
    title: "Panacea Medcare",
    category: "Healthcare Website",
    description:
      "A multilingual doctor and healthcare website built with Next.js, supporting English, French, and Arabic for a global audience.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/panacea.jpeg",
    tags: ["Next.js", "Internationalization (i18n)", "Healthcare"],
    results: "Expanded reach with multilingual support",
    link: "https://panaceamedcare.com/",
    filter: "Healthcare",
  },
  {
    title: "SLJ Solutions",
    category: "Interior Design Website",
    description:
      "A modern static interior design website built with Next.js, including an admin panel for content management.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/slj.jpeg",
    tags: ["Next.js", "React", "Admin Panel"],
    results: "Clean UI with easy content updates",
    link: "https://sljsolutions.com/",
    filter: "Web Development",
  },
  {
    title: "Pure Earth Cleanings",
    category: "Cleaning Services",
    description:
      "Professional cleaning services across Australia for over 10 years — home, office, gym, restaurant, and childcare.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/pureearthcleaning.png",
    tags: ["Wordpress", "Elementor Pro", "PHP"],
    results: "Scalable multi-panel e-commerce system",
    link: "https://pureearthcleaning.com.au",
    filter: "Web Development",
  },
  {
    title: "Shrestha Academy",
    category: "EdTech Platform",
    description:
      "A complete MERN stack education platform offering online courses, e-books, progress indicators, and offline classroom management.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/shreeshta.jpeg",
    tags: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "MERN Stack"],
    results: "Centralized learning with online & offline course management",
    link: "https://shresthaacademy.com/",
    filter: "EdTech",
  },
  {
    title: "Desi To Global Travel",
    category: "Travel & Tour Platform",
    description:
      "A full-stack travel and tour booking platform with dynamic packages, inquiries, and admin management.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/global.jpeg",
    tags: ["Next.js", "React", "Node.js", "Full Stack"],
    results: "End-to-end travel booking and management system",
    link: "https://www.desitoglobaltravel.com/",
    filter: "Travel",
  },
  {
    title: "Monark FX",
    category: "Financial Services",
    description:
      "A modern financial services platform with integrated payment systems and live Zoom sessions for trading consultations.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/monark.jpeg",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Razorpay", "Zoom SDK"],
    results: "Streamlined payments and live trading sessions",
    link: "https://monarkfx.com",
    filter: "Finance",
  },
  {
    title: "Eoan",
    category: "Furniture Ecommerce",
    description:
      "A premium furniture ecommerce store built with WordPress, offering a wide range of modern and traditional home decor solutions.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/EOAN.png",
    tags: ["WordPress", "WooCommerce", "Ecommerce", "Furniture"],
    results: "Scalable online furniture retail platform",
    link: "https://eoan.in",
    filter: "E-commerce",
  },
];

const _BASE = "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev";
const _SM = `${_BASE}/graphic/social-media-graphics`;

const _socialMediaGraphics: GraphicItem[] = Array.from({ length: 53 }, (_, i) => ({
  title: `Social Media Graphic ${i + 1}`,
  image: `${_SM}/social-media-graphics%20(${i + 1}).jpeg`,
  subCategory: "Social Media Graphics" as GraphicSubCategory,
}));

const _packaging: GraphicItem[] = [];

const _3D_BASE = `${_BASE}/graphic/3d-work`;
const _3dWork: GraphicItem[] = [
  { title: "3D Work 1 (JPEG)", image: `${_3D_BASE}/3d-work%20(1).jpeg`, subCategory: "3D Work" },
  { title: "3D Work 1 (JPG)", image: `${_3D_BASE}/3d-work%20(1).jpg`, subCategory: "3D Work" },
  { title: "3D Work 1 (PNG)", image: `${_3D_BASE}/3d-work%20(1).png`, subCategory: "3D Work" },
  { title: "3D Work 2 (JPEG)", image: `${_3D_BASE}/3d-work%20(2).jpeg`, subCategory: "3D Work" },
  { title: "3D Work 2 (JPG)", image: `${_3D_BASE}/3d-work%20(2).jpg`, subCategory: "3D Work" },
  { title: "3D Work 3", image: `${_3D_BASE}/3d-work%20(3).jpg`, subCategory: "3D Work" },
  { title: "3D Work 4", image: `${_3D_BASE}/3d-work%20(4).jpg`, subCategory: "3D Work" },
  { title: "3D Work 5", image: `${_3D_BASE}/3d-work%20(5).jpg`, subCategory: "3D Work" },
  { title: "3D Work 6", image: `${_3D_BASE}/3d-work%20(6).jpg`, subCategory: "3D Work" },
  { title: "3D Work 7", image: `${_3D_BASE}/3d-work%20(7).jpg`, subCategory: "3D Work" },
  { title: "3D Work 8", image: `${_3D_BASE}/3d-work%20(8).jpg`, subCategory: "3D Work" },
];

const _LOGO_BASE = `${_BASE}/logos`;
const _logos: GraphicItem[] = Array.from({ length: 96 }, (_, i) => ({
  title: `Logo ${i + 1}`,
  image: `${_LOGO_BASE}/logo%20(${i + 1}).jpg`,
  subCategory: "Logos" as GraphicSubCategory,
}));

export const graphicItems: GraphicItem[] = [
  ..._logos,
  ..._packaging,
  ..._socialMediaGraphics,
  ..._3dWork,
];

const _VID_BASE = "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/video-editing";

const _platforms: VideoPlatform[] = ["Instagram", "Instagram", "Instagram", "Instagram", "Instagram", "Instagram", "Instagram", "Instagram", "Instagram"];
const _types = ["Brand Film", "Brand Film", "Brand Film", "Brand Film", "Brand Film", "Brand Film", "Brand Film", "Brand Film", "Brand Film"];

export const videoItems: VideoItem[] = Array.from({ length: 9 }, (_, i) => ({
  title: `Video Edit ${i + 1}`,
  videoSrc: `${_VID_BASE}/video-editing%20(${i + 1}).mp4`,
  thumbnail: `${_VID_BASE}/video-editing%20(${i + 1}).mp4`,
  client: "Grox Media",
  type: _types[i],
  platform: _platforms[i],
}));
