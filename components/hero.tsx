import Image from "next/image";
import { FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { Rule } from "@/components/frame";
import { Typewriter } from "@/components/typewriter";
import { ScrambleText } from "@/components/scramble-text";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.links.x, label: "X (Twitter)", Icon: XIcon },
];

export function Hero() {
  return (
    <section id="top" className="relative">
      {/* Cover */}
      <div className="px-4 pt-4 sm:px-6">
        <div className="relative h-40 overflow-hidden rounded-xl border border-line bg-surface-2 sm:h-56">
          <Image
            src={profile.cover}
            alt=""
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
          <p className="absolute bottom-3 left-4 font-serif text-lg italic text-white/90 drop-shadow sm:text-xl">
            <ScrambleText lines={profile.mantras} />
          </p>
        </div>
      </div>

      {/* Identity row */}
      <div className="relative mt-4">
        <Rule className="top-0" />
        <div className="flex flex-col gap-5 px-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="flex items-start gap-4">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border border-line bg-surface-2 sm:size-24">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h1 className="font-serif text-[2rem] leading-none tracking-tight sm:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-base text-muted-foreground sm:text-lg">
                <Typewriter words={profile.roles} />
              </p>
              <p className="mt-1.5 font-mono text-xs text-muted-foreground">
                {profile.age} · {profile.location.short}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            {profile.availability.available ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-success">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-success" />
                </span>
                {profile.availability.label}
              </span>
            ) : null}

            <div className="flex items-center gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex h-8 items-center gap-1.5 rounded-md border border-line px-2.5 text-xs text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <FileText className="size-3.5" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
