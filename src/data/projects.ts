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
