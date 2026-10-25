import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Chip } from "@/components/ui/chip";
import { GitHubIcon } from "@/components/icons";

const statusLabel: Record<NonNullable<Project["status"]>, { label: string; dot: string }> = {
  live: { label: "Live", dot: "bg-success" },
  building: { label: "Building", dot: "bg-brand" },
  archived: { label: "Archived", dot: "bg-line-strong" },
};

export function ProjectCard({ project }: { project: Project }) {
  const href = project.url ?? project.github;
  const status = project.status ? statusLabel[project.status] : null;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong">
      {/* Media */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        className="relative block aspect-[16/9] overflow-hidden bg-surface-2"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="stripes flex h-full w-full items-center justify-center">
            <span className="font-serif text-6xl text-line-strong">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

      </a>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-medium leading-tight">
              <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                {project.title}
              </a>
            </h3>
            {project.tagline ? (
              <p className="mt-0.5 text-sm text-muted-foreground">{project.tagline}</p>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
            {status ? (
              <span className="mr-1 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className={`size-1.5 rounded-full ${status.dot}`} />
                {status.label}
              </span>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <GitHubIcon className="size-4" />
              </a>
            ) : null}
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.stack.length ? (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-1" aria-label="Tech stack">
            {project.stack.map((s) => (
              <li key={s}>
                <Chip>{s}</Chip>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
