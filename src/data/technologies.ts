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

export type TechItem = { name: string; Icon: IconType };

/** Grouped for the “Powered by Modern Technologies” section */
export const techCategories: { title: string; items: TechItem[] }[] = [
  {
    title: "Frontend & languages",
    items: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
      { name: "React", Icon: SiReact },
      { name: "Redux Toolkit", Icon: SiRedux },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "jQuery", Icon: SiJquery },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Figma", Icon: SiFigma },
    ],
  },
  {
    title: "Backend & databases",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "Prisma ORM", Icon: SiPrisma },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Redis", Icon: SiRedis },
      { name: "GraphQL", Icon: SiGraphql },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Nginx", Icon: SiNginx },
    ],
  },
  {
    title: "DevOps & version control",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Docker", Icon: SiDocker },
      { name: "GitHub Actions", Icon: SiGithubactions },
    ],
  },
  {
    title: "CMS & cloud",
    items: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "Shopify", Icon: SiShopify },
      { name: "AWS", Icon: SiAmazonwebservices },
    ],
  },
  {
    title: "Operating systems",
    items: [{ name: "Linux (Ubuntu)", Icon: SiUbuntu }],
  },
];

/** Home page logo marquee — three rows, alternating directions */
export const marqueeRow1: TechItem[] = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "React", Icon: SiReact },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "jQuery", Icon: SiJquery },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Figma", Icon: SiFigma },
];

export const marqueeRow2: TechItem[] = [
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "Prisma ORM", Icon: SiPrisma },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Redis", Icon: SiRedis },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Nginx", Icon: SiNginx },
  { name: "AWS", Icon: SiAmazonwebservices },
];

export const marqueeRow3: TechItem[] = [
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", Icon: SiDocker },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Shopify", Icon: SiShopify },
  { name: "Linux (Ubuntu)", Icon: SiUbuntu },
];
