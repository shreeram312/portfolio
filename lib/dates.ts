/** "YYYY-MM" month strings, or "present" for ongoing roles. */
export type MonthString = `${number}-${number}`;
export type MonthOrPresent = MonthString | "present";

export function parseMonth(value: MonthString): Date {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "2024-12" -> "Dec 2024"; "present" -> "Present". */
export function formatMonth(value: MonthOrPresent): string {
  if (value === "present") return "Present";
  const d = parseMonth(value);
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Inclusive number of months between two month strings (Dec 2024 → May 2025 = 6). */
export function monthsBetween(start: MonthString, end: MonthOrPresent): number {
  const a = parseMonth(start);
  const b = end === "present" ? new Date() : parseMonth(end);
  const diff = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
  return Math.max(1, diff);
}

/** 17 -> "1 yr 5 mos", 6 -> "6 mos", 1 -> "1 mo". */
export function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rem) parts.push(`${rem} mo${rem > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

export function formatRange(start: MonthString, end: MonthOrPresent): string {
  return `${formatMonth(start)} — ${formatMonth(end)}`;
}
