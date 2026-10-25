import {
  siDocker,
  siDrizzle,
  siExpo,
  siExpress,
  siGit,
  siGithub,
  siGo,
  siJavascript,
  siLinux,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siRabbitmq,
  siReact,
  siRedis,
  siStripe,
  siTailwindcss,
  siTrpc,
  siTurborepo,
  siTypescript,
  siVercel,
} from "simple-icons";
import type { BrandIconData } from "@/components/brand-icon";

export const skillCategories = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "DevOps & Tools",
  "Payments",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type Skill = {
  name: string;
  /** Brand icon from `simple-icons`. Omit to show a two-letter monogram instead. */
  icon?: BrandIconData;
  category: SkillCategory;
};

/**
 * Add a skill by pushing to this list. Icons come from https://simpleicons.org —
 * import `si<Name>` from "simple-icons" (e.g. siGo, siRabbitmq).
 */
export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", icon: siTypescript, category: "Languages" },
  { name: "JavaScript", icon: siJavascript, category: "Languages" },
  { name: "Go", icon: siGo, category: "Languages" },
  // Frontend
  { name: "React", icon: siReact, category: "Frontend" },
  { name: "Next.js", icon: siNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: siTailwindcss, category: "Frontend" },
  { name: "Expo (React Native)", icon: siExpo, category: "Frontend" },
  // Backend
  { name: "Node.js", icon: siNodedotjs, category: "Backend" },
  { name: "Express.js", icon: siExpress, category: "Backend" },
  { name: "tRPC", icon: siTrpc, category: "Backend" },
  { name: "RabbitMQ", icon: siRabbitmq, category: "Backend" },
  // Database
  { name: "PostgreSQL", icon: siPostgresql, category: "Database" },
  { name: "MongoDB", icon: siMongodb, category: "Database" },
  { name: "Prisma", icon: siPrisma, category: "Database" },
  { name: "Drizzle", icon: siDrizzle, category: "Database" },
  { name: "Redis", icon: siRedis, category: "Database" },
  // AI
  { name: "Vercel AI SDK", category: "AI" },
  // DevOps & tools
  { name: "Docker", icon: siDocker, category: "DevOps & Tools" },
  { name: "Linux", icon: siLinux, category: "DevOps & Tools" },
  { name: "Git", icon: siGit, category: "DevOps & Tools" },
  { name: "GitHub", icon: siGithub, category: "DevOps & Tools" },
  { name: "Postman", icon: siPostman, category: "DevOps & Tools" },
  { name: "Vercel", icon: siVercel, category: "DevOps & Tools" },
  { name: "Turborepo", icon: siTurborepo, category: "DevOps & Tools" },
  // Payments
  { name: "Stripe", icon: siStripe, category: "Payments" },
];
