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

export const projects: Project[] = [
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
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/panacea.jpeg",
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
      "At Pure Earth Cleanings, we’ve been delivering professional cleaning services across Australia for over 10 years. Whether it’s your home, office, gym, restaurant, or childcare center — we’re committed to providing spotless results every time.",
    image: "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/pureearthcleaning.png",
    tags: [
      "Wordpress",
      "Elementor Pro",
      "PHP",

    ],
    results: "Scalable multi-panel e-commerce system",
    link: "https://pureearthcleaning.com.au",
    filter: "Web Development",
  },
  {
    title: "Shrestha Academy",
    category: "EdTech Platform",
    description:
      "A complete MERN stack education platform offering online courses, e-books, progress indicators, and offline classroom management.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/shreeshta.jpeg",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MERN Stack",
    ],
    results: "Centralized learning with online & offline course management",
    link: "https://shresthaacademy.com/",
    filter: "EdTech",
  },
  {
    title: "Desi To Global Travel",
    category: "Travel & Tour Platform",
    description:
      "A full-stack travel and tour booking platform with dynamic packages, inquiries, and admin management.",
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/global.jpeg",
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
    image:
      "https://pub-a3d2b35862c1483894ffbee942bb995e.r2.dev/monark.jpeg",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Razorpay",
      "Zoom SDK",
    ],
    results: "Streamlined payments and live trading sessions",
    link: "https://monarkfx.com",
    filter: "Finance",
  },
];
