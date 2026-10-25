import { cn } from "@/lib/utils";

/** The subset of a `simple-icons` entry we need. */
export type BrandIconData = { title: string; hex: string; path: string };

function luminance(hex: string): number {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/**
 * Renders a simple-icons glyph in its brand colour. Very dark brands (Next.js,
 * Vercel, GitHub, Prisma…) use `currentColor` instead so they stay visible on
 * the dark theme.
 */
export function BrandIcon({
  icon,
  className,
}: {
  icon: BrandIconData;
  className?: string;
}) {
  const fill = luminance(icon.hex) < 0.3 ? "currentColor" : `#${icon.hex}`;
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
      className={cn("shrink-0", className)}
      fill={fill}
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Two-letter fallback for skills without a brand icon. */
export function Monogram({ name, className }: { name: string; className?: string }) {
  const letters = name
    .split(/[\s.()-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-[3px] bg-foreground font-mono text-[7px] font-semibold leading-none text-background",
        className
      )}
    >
      {letters}
    </span>
  );
}
