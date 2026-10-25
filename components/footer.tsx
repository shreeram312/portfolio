import { profile } from "@/data/profile";
import { quotes } from "@/data/quotes";
import { Rule } from "@/components/frame";
import { RandomQuote } from "@/components/random-quote";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="relative px-4 py-8 sm:px-6">
        <RandomQuote quotes={quotes} />
        <Rule className="bottom-0" />
      </div>
      <div className="flex flex-col items-center justify-between gap-2 px-4 py-4 font-mono text-[11px] text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {year} {profile.name}. That&apos;s all, folks.
        </p>
        <p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            @{profile.handle}
          </a>
          <span className="mx-2 text-line-strong">·</span>
          Next.js · Tailwind · pnpm
        </p>
      </div>
      {/* Breathing room for the mobile dock */}
      <div className="h-16 sm:hidden" />
    </footer>
  );
}
