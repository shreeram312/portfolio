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
import { Bot, FileSearch, type LucideIcon } from "lucide-react";
import type { BrandIconData } from "@/components/brand-icon";

export const skillCategories = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "DevOps & Tools",
  "Third-party Integrations",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type Skill = {
  name: string;
  /** Brand icon from `simple-icons`. */
  icon?: BrandIconData;
  /** Raster logo under /public, for brands simple-icons doesn't have. */
  image?: string;
  /** Concept icon from lucide, for skills that aren't a brand (RAG, agents…). */
  lucide?: LucideIcon;
  category: SkillCategory;
};

/**
 * Add a skill by pushing to this list. Icons come from https://simpleicons.org:
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
  { name: "RAG", lucide: FileSearch, category: "AI" },
  { name: "Agentic AI", lucide: Bot, category: "AI" },
  // DevOps & tools
  { name: "Docker", icon: siDocker, category: "DevOps & Tools" },
  { name: "Linux", icon: siLinux, category: "DevOps & Tools" },
  { name: "Git", icon: siGit, category: "DevOps & Tools" },
  { name: "GitHub", icon: siGithub, category: "DevOps & Tools" },
  { name: "Postman", icon: siPostman, category: "DevOps & Tools" },
  { name: "Vercel", icon: siVercel, category: "DevOps & Tools" },
  { name: "Turborepo", icon: siTurborepo, category: "DevOps & Tools" },
  // Third-party integrations
  { name: "Stripe", icon: siStripe, category: "Third-party Integrations" },
  { name: "Porter API", image: "/porter.jpg", category: "Third-party Integrations" },
  { name: "Shadowfax API", image: "/shadowfax.png", category: "Third-party Integrations" },
];
