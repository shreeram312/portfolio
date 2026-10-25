import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { experience, type Experience as ExperienceEntry } from "@/data/experience";
import { profile } from "@/data/profile";
import { Section } from "@/components/frame";
import { Chip } from "@/components/ui/chip";
import {
  formatDuration,
  formatMonth,
  formatRange,
  monthsBetween,
  parseMonth,
  type MonthOrPresent,
} from "@/lib/dates";

function companySpan(entry: ExperienceEntry): {
  range: string;
  duration: string;
  current: boolean;
} {
  const starts = entry.roles.map((r) => parseMonth(r.start).getTime());
  const start = entry.roles[starts.indexOf(Math.min(...starts))].start;
  const current = entry.roles.some((r) => r.end === "present");
  const end: MonthOrPresent = current
    ? "present"
    : entry.roles
        .map((r) => r.end)
        .filter((e): e is Exclude<MonthOrPresent, "present"> => e !== "present")
        .sort((a, b) => parseMonth(b).getTime() - parseMonth(a).getTime())[0];
  return {
    range: `${formatMonth(start)} — ${formatMonth(end)}`,
    duration: formatDuration(monthsBetween(start, end)),
    current,
  };
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      action={
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          Resume <ArrowUpRight className="size-3.5" />
        </a>
      }
    >
      <div className="space-y-4">
        {experience.map((entry) => {
          const span = companySpan(entry);
          return (
            <article
              key={entry.company}
              className="rounded-xl border border-line bg-surface p-4 sm:p-5"
            >
              {/* Company header */}
              <header className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 min-w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-white px-1.5">
                    {entry.logo ? (
                      <Image
                        src={entry.logo}
                        alt=""
                        width={128}
                        height={50}
                        className="h-7 w-auto max-w-24 object-contain"
                      />
                    ) : (
                      <span className="font-serif text-lg text-black">
                        {entry.company.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium leading-tight">
                      {entry.url ? (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 transition-colors hover:text-brand"
                        >
                          {entry.company}
                          <ArrowUpRight className="size-3.5 text-muted-foreground" />
                        </a>
                      ) : (
                        entry.company
                      )}
                    </h3>
                    {entry.tagline ? (
                      <p className="mt-0.5 text-xs text-muted-foreground">{entry.tagline}</p>
                    ) : null}
                    {entry.location ? (
                      <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="size-3" />
                        {entry.location}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="shrink-0 text-right font-mono text-[11px] text-muted-foreground">
                  <p>{span.range}</p>
                  <p className="mt-0.5">
                    <span
                      className={
                        span.current
                          ? "rounded border border-success/30 bg-success/10 px-1.5 py-0.5 text-success"
                          : "rounded border border-line bg-surface-2 px-1.5 py-0.5"
                      }
                    >
                      {span.duration}
                    </span>
                  </p>
                </div>
              </header>

              {/* Roles thread */}
              <ol className="relative mt-5 space-y-6 border-l border-dashed border-line pl-5 sm:ml-5 sm:pl-6">
                {entry.roles.map((role) => {
                  const current = role.end === "present";
                  return (
                    <li key={`${entry.company}-${role.title}`} className="relative">
                      <span
                        aria-hidden
                        className={`absolute -left-[25px] top-1.5 size-2.5 rounded-full border-2 border-surface sm:-left-[29px] ${
                          current ? "bg-success" : "bg-line-strong"
                        }`}
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="font-medium leading-tight">{role.title}</h4>
                        <p className="font-mono text-[11px] text-muted-foreground">
                          {formatRange(role.start, role.end)} ·{" "}
                          {formatDuration(monthsBetween(role.start, role.end))}
                        </p>
                      </div>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {role.type}
                      </p>

                      {role.summary ? (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {role.summary}
                        </p>
                      ) : null}

                      {role.bullets.length ? (
                      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                        {role.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <span
                              aria-hidden
                              className="mt-[0.65em] size-1 shrink-0 rounded-full bg-line-strong"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      ) : null}

                      {role.stack.length ? (
                        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
                          {role.stack.map((s) => (
                            <li key={s}>
                              <Chip>{s}</Chip>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
