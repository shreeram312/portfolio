export type ProjectStatus = "live" | "building" | "archived";

export type Project = {
  id: string;
  title: string;
  /** One-liner under the title. */
  tagline?: string;
  description: string;
  image?: string;
  url?: string;
  github?: string;
  stack: string[];
  status?: ProjectStatus;
  featured?: boolean;
};

/**
 * Used when Sanity isn't configured (no NEXT_PUBLIC_SANITY_* env vars) or returns nothing.
 * In production projects come from Sanity Studio at /studio.
 */
export const fallbackProjects: Project[] = [
  {
    id: "riskassist",
    title: "RiskAssist",
    tagline: "AI compliance copilot for InfoSec teams.",
    description:
      "An AI-powered compliance SaaS for CISOs and InfoSec teams: RAG over NIST, ISO, HIPAA and SOC frameworks, AI-assisted policy drafting with versioning and exports, and credit-based billing.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Stripe", "LangChain"],
    status: "live",
    featured: true,
  },
  {
    id: "greg",
    title: "G.R.E.G",
    tagline: "AI workspace for immigration law firms.",
    description:
      "Client dashboards, RAG-powered case summarisation, visa comparisons, AI-assisted drafting and contextual chat, built end to end with Supabase, Prisma and Stripe subscriptions.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Prisma", "LangChain", "Stripe"],
    status: "live",
    featured: true,
  },
];
