import Image from "next/image";
import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { openSource } from "@/data/open-source";
import { Section } from "@/components/frame";
import { GitHubIcon } from "@/components/icons";

export function OpenSource() {
  return (
    <Section id="open-source" title="Open Source" action={<span>contributions</span>}>
      <div className="space-y-4">
        {openSource.map((entry) => (
          <article
            key={entry.repo}
            className="grid overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-[220px_1fr]"
          >
            {entry.image ? (
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/9] overflow-hidden border-b border-line bg-surface-2 sm:aspect-auto sm:border-b-0 sm:border-r"
              >
                <Image
                  src={entry.image}
                  alt={entry.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
            ) : null}

            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium leading-tight">
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-brand"
                    >
                      {entry.name}
                      <ArrowUpRight className="size-3.5 text-muted-foreground" />
                    </a>
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{entry.repo}</p>
                </div>
                <a
                  href={entry.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${entry.name} on GitHub`}
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <GitHubIcon className="size-4" />
                </a>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>

              <ul className="mt-4 space-y-2">
                {entry.contributions.map((c) => (
                  <li key={c.title} className="flex items-start gap-2.5 text-sm">
                    <GitPullRequest className="mt-[3px] size-3.5 shrink-0 text-success" />
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-brand"
                      >
                        {c.title}
                      </a>
                    ) : (
                      <span>{c.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
