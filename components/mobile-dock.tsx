import { Briefcase, FolderGit2, Home, Layers, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { AudioToggle } from "@/components/audio-toggle";
import { ScrollLink } from "@/components/scroll-link";

const sections = [
  { to: "top", label: "Home", Icon: Home },
  { to: "experience", label: "Experience", Icon: Briefcase },
  { to: "projects", label: "Projects", Icon: FolderGit2 },
  { to: "stack", label: "Stack", Icon: Layers },
];

const itemClass =
  "inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground";

/** Floating bottom navigation for phones (the header nav is hidden there). */
export function MobileDock() {
  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:hidden"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-line bg-surface/90 p-1 shadow-lg shadow-black/10 backdrop-blur-md">
        {sections.map(({ to, label, Icon }) => (
          <ScrollLink key={to} to={to} aria-label={label} title={label} className={itemClass}>
            <Icon className="size-[18px]" />
          </ScrollLink>
        ))}
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          title="Email"
          className={itemClass}
        >
          <Mail className="size-[18px]" />
        </a>
        <span aria-hidden className="mx-0.5 h-5 w-px bg-line" />
        <AudioToggle src={profile.audio.src} title={profile.audio.title} variant="dock" />
      </div>
    </nav>
  );
}
