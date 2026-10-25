import { profile } from "@/data/profile";
import { Section } from "@/components/frame";

export function About() {
  const { now, previously } = profile;
  return (
    <Section id="about" title="About">
      <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:gap-12">
        <div>
        <ul className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-line-strong" />
            <p>
              I&apos;m {profile.firstName}, a{" "}
              <span className="prose-link">Software Engineer</span> at{" "}
              <a href={now.url} target="_blank" rel="noopener noreferrer" className="prose-link">
                {now.company}
              </a>
              , a product startup building for veterinary clinics, hospitals and pet parents across India. I love
              debugging and figuring things out quickly.
            </p>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-line-strong" />
            <p>
              Before that I built <span className="prose-link">LLM, RAG and agent apps</span> at
              Axentia — Transcript Genie, Clauseborne and more — end to end, from vector
              indexes and job queues to billing. The satisfying part is watching the whole
              thing come together.
            </p>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-line-strong" />
            <p>
              I still code with my bare hands in the vibe-code era. AI handles the repetitive
              stuff; someone has to keep it from taking my job.
            </p>
          </li>
        </ul>
        <p className="mt-5 font-mono text-[11px] text-muted-foreground/70">
          off the keyboard: {profile.interests.join(" · ")}
        </p>
        </div>

        <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-4 sm:block sm:space-y-5 sm:border-l sm:border-dashed sm:border-line sm:pl-6">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Now
            </dt>
            <dd className="mt-1 text-sm">
              <span className="font-medium">{now.role}</span>{" "}
              <span className="text-muted-foreground">at</span>{" "}
              <a href={now.url} target="_blank" rel="noopener noreferrer" className="prose-link">
                {now.company}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Previously
            </dt>
            <dd className="mt-1 text-sm">
              <span className="font-medium">{previously.role}</span>{" "}
              <span className="text-muted-foreground">at</span>{" "}
              <a
                href={previously.url}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                {previously.company}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
