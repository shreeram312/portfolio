"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  timeZone: string;
  label?: string;
  className?: string;
};

/** Live clock in a fixed time zone. Renders a placeholder until mounted to avoid hydration mismatches. */
export function LocalTime({ timeZone, label, className }: Props) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <time
      suppressHydrationWarning
      className={cn(
        "font-mono text-[11px] uppercase tracking-wider text-muted-foreground tabular-nums",
        className
      )}
    >
      {now ?? "--:--:-- --"}
      {label ? <span className="ml-1.5 text-muted-foreground/70">{label}</span> : null}
    </time>
  );
}
