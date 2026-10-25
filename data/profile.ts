/**
 * Everything personal lives here. Update this file and the site updates.
 */
export const profile = {
  name: "Shreeram Mutukundu",
  firstName: "Shreeram",
  handle: "shreeram312",
  age: 22,
  location: {
    city: "Pune",
    country: "India",
    short: "Pune, IND",
    timeZone: "Asia/Kolkata",
    tzLabel: "IST",
  },
  /** Cycled by the typewriter under the name. First entry is also used for SEO. */
  roles: ["Full Stack AI Engineer", "Software Engineer", "AI Engineer"] as const,
  /** Cycled on the cover image with a text-scramble effect. First one is the default. */
  mantras: [
    "One commit at a time.",
    "Build like it matters.",
    "Ship it. Then make it beautiful.",
    "Obsessed with the craft.",
    "Still shipping while the world sleeps.",
    "Taste, obsession, and a terminal.",
  ] as const,
  email: "shreerammutukundu.2003@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/126177107?v=4",
  cover: "https://wallpapershome.com/images/pages/pic_h/8164.jpg",
  resume:
    "https://drive.google.com/file/d/1LC59qeT7ymWzy_zZXiIIeDW9c0Abi9oC/view?usp=sharing",
  siteUrl: "https://shreerammutukundu.in",
  availability: {
    available: true,
    label: "Available for new opportunities",
  },
  /** Off-topic interests, shown as a small muted line under the bio. */
  interests: ["touching grass", "cricket", "movies", "anime"],
  /**
   * Background track for the header/dock audio toggle. Drop a file you have the
   * rights to at public/audio/theme.mp3 (e.g. a licensed AoT-inspired piece).
   */
  audio: { src: "/audio/theme.mp3", title: "Theme" },
  /**
   * Default theme follows the clock in this time zone: dark from darkFromHour
   * until darkUntilHour (18 → 6 = evening and night), light otherwise.
   * A visitor's manual toggle overrides it.
   */
  themeSchedule: {
    timeZone: "Asia/Kolkata",
    darkFromHour: 18,
    darkUntilHour: 6,
    /** A manual toggle is remembered this long, then the clock takes over again. */
    overrideHours: 12,
  },
  /** Shown as NOW / PREVIOUSLY next to the bio. */
  now: { role: "Software Engineer", company: "Koko", url: "https://koko.vet" },
  previously: { role: "Full Stack AI Engineer", company: "Axentia", url: "https://axentia.in" },
  links: {
    github: "https://github.com/shreeram312",
    x: "https://x.com/realshreeram312",
    linkedin: "https://www.linkedin.com/in/shreeram-mutukundu-30094028a/",
    leetcode: "https://leetcode.com/shreeram312",
    // cal: "https://cal.com/shreeram-mutukundu-se178d",
  },
} as const;

export type Profile = typeof profile;
