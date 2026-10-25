import { profile } from "@/data/profile";
import { COLUMN, Cross } from "@/components/frame";
import { LocalTime } from "@/components/local-time";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollLink } from "@/components/scroll-link";
import { AudioToggle } from "@/components/audio-toggle";
import { cn } from "@/lib/utils";

export const navItems = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "stack", label: "Stack" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dashed border-line bg-background/85 backdrop-blur-md">
      <div
        className={cn(
          "relative mx-auto flex h-14 w-full items-center justify-between border-x border-dashed border-line px-4 sm:px-6",
          COLUMN
        )}
      >
        <Cross corner="bl" />
        <Cross corner="br" />

        <ScrollLink
          to="top"
          className="font-serif text-2xl leading-none tracking-tight"
          aria-label="Back to top"
        >
          {profile.firstName}
          <span className="text-brand">.</span>
        </ScrollLink>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex"
        >
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="mr-1 hidden items-center gap-2 md:flex">
            <LocalTime
              timeZone={profile.location.timeZone}
              label={profile.location.tzLabel}
            />
            <span aria-hidden className="text-line-strong">
              ·
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {profile.location.short}
            </span>
          </div>
          <AudioToggle
            src={profile.audio.src}
            title={profile.audio.title}
            className="hidden sm:inline-flex"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
