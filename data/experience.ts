import type { MonthOrPresent, MonthString } from "@/lib/dates";

export type RoleType = "Full-time" | "Internship" | "Contract" | "Freelance";

export type Role = {
  title: string;
  type: RoleType;
  start: MonthString;
  end: MonthOrPresent;
  /** One-line summary shown above the bullets (or instead of them). */
  summary?: string;
  bullets: string[];
  /** Tech used in this role — rendered as chips. */
  stack: string[];
};

export type Experience = {
  company: string;
  url?: string;
  /** Path under /public. Wide wordmarks and square marks both work. */
  logo?: string;
  /** Short line under the company name. */
  tagline?: string;
  location?: string;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "Koko",
    url: "https://koko.vet",
    logo: "/koko.png",
    tagline: "Vet practice platform for clinics & hospitals, plus a pet-parent mobile app",
    roles: [
      {
        // TODO(shreeram): confirm the exact title (SDE-1 / SDE-2 / Software Engineer).
        title: "Software Engineer",
        type: "Full-time",
        start: "2026-02",
        end: "present",
        bullets: [
          "Added multi-branch support — migrated Koko from single-clinic to multi-branch without disruption.",
          "Integrated Porter and Shadowfax so clinics can deliver medicines and products to pet parents' doorsteps.",
          "Built the koko.vet booking widget — an agentic flow that books appointments and confirms via push and WhatsApp.",
          "Built most of the admin web app (demo.koko.vet) and Pet Parent mobile app screens, shipping features across the backend services.",
        ],
        stack: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "React Native",
          "Node.js",
          "WhatsApp API",
          "Porter",
          "Shadowfax",
        ],
      },
    ],
  },
  {
    company: "Axentia",
    url: "https://axentia.in",
    logo: "/axentia.png",
    tagline: "AI product studio — LLM, RAG and agent apps for B2B and education",
    location: "Pune, India",
    roles: [
      {
        title: "Full Stack AI Engineer",
        type: "Full-time",
        start: "2025-06",
        end: "2026-02",
        bullets: [
          "Transcript Genie (transcriptgenie.com) — AI GPA-conversion platform for university admissions: bulk, queue-based transcript processing with a custom Azure document-extraction model.",
          "Clauseborne — legal-tech workflows for debt and consumer-law issues, from drafting responses to debt-collection lawsuits to flagging FDCPA/FCRA violations.",
          // TODO(shreeram): add a line on what you built here.
          "We’re Not Really Strangers — app version of the conversation card game.",
          "Shipped RAG, AI-agent and streaming-chat features, plus Stripe credit-based pricing, across the products.",
        ],
        stack: [
          "Next.js",
          "TypeScript",
          "tRPC",
          "PostgreSQL",
          "Drizzle",
          "Azure AI",
          "LangChain",
          "Stripe",
        ],
      },
      {
        title: "Full Stack Developer (AI) Intern",
        type: "Internship",
        start: "2024-12",
        end: "2025-05",
        bullets: [
          "Built G.R.E.G end-to-end — an AI SaaS platform for immigration law firms with client dashboards.",
          "Delivered RAG-powered case summarisation, visa comparisons, AI-assisted drafting and contextual chat.",
          "Integrated Supabase (auth + storage), PostgreSQL via Prisma, LangChain pipelines and Stripe subscriptions.",
        ],
        stack: ["Next.js", "Supabase", "PostgreSQL", "Prisma", "LangChain", "Stripe"],
      },
    ],
  },
  {
    company: "DigiMedia Solutions",
    location: "Remote",
    roles: [
      {
        title: "Frontend Developer Intern",
        type: "Internship",
        // TODO(shreeram): confirm the exact months — the old site only said "4 months".
        start: "2024-07",
        end: "2024-10",
        bullets: [
          "Built a car-rental service frontend in React with a responsive, modern UI.",
          "Developed reusable components for booking flows, listings and filters.",
          "Managed global and local state for seamless navigation and user interactions.",
        ],
        stack: ["React", "JavaScript", "Tailwind CSS"],
      },
    ],
  },
];
