export type Contribution = {
  title: string;
  /** Link to the PR / commit, if any. */
  url?: string;
};

export type OpenSourceEntry = {
  name: string;
  repo: string;
  url: string;
  github: string;
  description: string;
  /** Path under /public. */
  image?: string;
  contributions: Contribution[];
};

export const openSource: OpenSourceEntry[] = [
  {
    name: "Contentport",
    repo: "joschan21/contentport",
    url: "https://contentport.io",
    github: "https://github.com/joschan21/contentport",
    description:
      "A content engine for growing on Twitter — create, schedule and manage content at scale.",
    image: "/image.png",
    contributions: [
      {
        title: "Added server-component functionality and fixed authentication redirects",
      },
      {
        title: "Hardened tweet posting with edge-case handling and error validation",
      },
      { title: "UI/UX improvements for interface consistency" },
    ],
  },
];
