"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { OVERRIDE_KEY } from "@/components/theme-boot-script";

const DURATION_MS = 450;

/** Remember a manual toggle so it beats the time-based default for a while. */
function rememberOverride(theme: "light" | "dark") {
  try {
    localStorage.setItem(OVERRIDE_KEY, JSON.stringify({ theme, at: Date.now() }));
  } catch {
    /* storage unavailable */
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  // Before mount we don't know the theme; render the dark-mode icon (site default)
  // so server and client markup match.
  const isDark = mounted ? resolvedTheme === "dark" : true;

  /**
   * Switch theme with a circular reveal that grows from the button, using the
   * View Transitions API. Falls back to an instant switch when the API is
   * missing or the user prefers reduced motion.
   */
  const toggle = useCallback(() => {
    const next = isDark ? "light" : "dark";
    rememberOverride(next);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof document.startViewTransition !== "function" || reduced) {
      setTheme(next);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      // next-themes applies the class in an effect; flushSync makes that happen
      // synchronously so the "new" snapshot already has the new theme.
      flushSync(() => setTheme(next));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: DURATION_MS,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [isDark, setTheme]);

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={toggle}
      className={cn(
        "group inline-flex size-8 items-center justify-center rounded-md border border-line text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground",
        className
      )}
    >
      {isDark ? (
        <Sun className="size-4 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
