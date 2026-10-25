import { profile } from "@/data/profile";

export type ThemeName = "light" | "dark";

/** Hour of day (0–23) in the configured time zone. */
export function hourIn(timeZone: string, date = new Date()): number {
  const text = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: false,
    timeZone,
  }).format(date);
  return Number(text) % 24;
}

/**
 * Theme the site should default to right now: dark in the evening/night
 * window from profile.themeSchedule, light during the day. A visitor's manual
 * toggle (stored by next-themes) always wins over this.
 */
export function scheduledTheme(date = new Date()): ThemeName {
  const { timeZone, darkFromHour, darkUntilHour } = profile.themeSchedule;
  const hour = hourIn(timeZone, date);
  const isNight =
    darkFromHour > darkUntilHour
      ? hour >= darkFromHour || hour < darkUntilHour // e.g. 18 → 6 wraps midnight
      : hour >= darkFromHour && hour < darkUntilHour;
  return isNight ? "dark" : "light";
}
