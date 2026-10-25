import { groq } from "next-sanity";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { fallbackProjects, type Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { Section } from "@/components/frame";
import { ProjectCard } from "@/components/project-card";

type SanityProject = {
  _id: string;
  title: string;
  tagline?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  stack?: string[];
  status?: Project["status"];
  featured?: boolean;
};

const query = groq`*[_type == "shreeram"] | order(coalesce(order, 999) asc, _createdAt desc){
  _id,
  title,
  tagline,
  description,
  "imageUrl": image.asset->url,
  githubUrl,
  projectUrl,
  stack,
  status,
  featured
}`;

type ProjectsResult = { projects: Project[]; source: "sanity" | "fallback" };

async function getProjects(): Promise<ProjectsResult> {
  if (!client) return { projects: fallbackProjects, source: "fallback" };
  try {
    const docs = await client.fetch<SanityProject[]>(query);
    if (!docs?.length) return { projects: fallbackProjects, source: "fallback" };
    const projects = docs.map((d) => ({
      id: d._id,
      title: d.title,
      tagline: d.tagline,
      description: d.description ?? "",
      image: d.imageUrl,
      github: d.githubUrl,
      url: d.projectUrl,
      stack: d.stack ?? [],
      status: d.status ?? "live",
      featured: d.featured,
    }));
    return { projects, source: "sanity" };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { projects: fallbackProjects, source: "fallback" };
  }
}

export async function Projects() {
  const { projects, source } = await getProjects();
  const showFallbackNote =
    source === "fallback" && process.env.NODE_ENV === "development";

  return (
    <Section
      id="projects"
      title="Projects"
      action={
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          View all <ArrowUpRight className="size-3.5" />
        </a>
      }
    >
      {showFallbackNote ? (
        <p className="mb-4 rounded-md border border-dashed border-brand/40 bg-brand/5 px-3 py-2 font-mono text-[11px] text-muted-foreground">
          Dev note: Sanity isn&apos;t configured, showing{" "}
          <code>data/projects.ts</code>. Copy <code>.env.example</code> to{" "}
          <code>.env.local</code> and fill in the project id to see Studio content.
        </p>
      ) : null}
      {projects.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No projects yet — add some in <code className="font-mono">/studio</code>.
        </p>
      )}
    </Section>
  );
}
