import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Band, Rule } from "@/components/frame";
import { CopyEmail } from "@/components/copy-email";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon, XIcon } from "@/components/icons";

const links = [
  { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.links.x, label: "X", Icon: XIcon },
  { href: profile.links.leetcode, label: "LeetCode", Icon: LeetCodeIcon },
];

export function Cta() {
  return (
    <section id="contact" className="relative scroll-mt-14">
      <Band />
      <div className="relative px-4 py-10 text-center sm:px-6 sm:py-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Scrolled too far?
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          If you&apos;ve read this far, you might be interested in what I do. I&apos;m open to
          full-time roles and interesting side quests.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get in touch <ArrowRight className="size-4" />
          </a>
          <span className="font-mono text-[11px] uppercase text-muted-foreground">or</span>
          <CopyEmail email={profile.email} />
        </div>

        <ul className="mt-6 flex items-center justify-center gap-1">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50">
          心臓を捧げよ · shinzou wo sasageyo
        </p>
        <Rule className="bottom-0" />
      </div>
    </section>
  );
}
