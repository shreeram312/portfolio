"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/frame";

const theme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#1f1f1f", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const colorScheme = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <Section
      id="activity"
      title="GitHub Activity"
      action={
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          @{profile.handle} <ArrowUpRight className="size-3.5" />
        </a>
      }
    >
      <div className="no-scrollbar flex justify-center overflow-x-auto rounded-xl border border-line bg-surface p-4 text-xs text-muted-foreground">
        <GitHubCalendar
          username={profile.handle}
          colorScheme={colorScheme}
          theme={theme}
          blockSize={12}
          blockMargin={2}
          fontSize={12}
          showWeekdayLabels
        />
      </div>
    </Section>
  );
}
