import type { IconType } from "react-icons";

import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiWordpress,
} from "react-icons/si";

export type TechItem = { name: string; Icon: IconType; color: string };

/** Grouped for the “Powered by Modern Technologies” section */
export const techCategories: { title: string; items: TechItem[] }[] = [
  {
    title: "Frontend & languages",
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss3, color: "#1572B6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Backend & databases",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#000000" },
      { name: "Prisma ORM", Icon: SiPrisma, color: "#2D3748" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Nginx", Icon: SiNginx, color: "#009639" },
    ],
  },
  {
    title: "DevOps & version control",
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
    ],
  },
  {
    title: "CMS & cloud",
    items: [
      { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
      { name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
      { name: "AWS", Icon: SiAmazonwebservices, color: "#232F3E" },
    ],
  },
  {
    title: "Operating systems",
    items: [{ name: "Linux (Ubuntu)", Icon: SiUbuntu, color: "#E95420" }],
  },
];

/** Home page logo marquee — three rows, alternating directions */
export const marqueeRow1: TechItem[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

export const marqueeRow2: TechItem[] = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#000000" },
  { name: "Prisma ORM", Icon: SiPrisma, color: "#2D3748" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
  { name: "AWS", Icon: SiAmazonwebservices, color: "#232F3E" },
];

export const marqueeRow3: TechItem[] = [
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
  { name: "Linux (Ubuntu)", Icon: SiUbuntu, color: "#E95420" },
];
