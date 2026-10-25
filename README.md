# shreeram.dev — portfolio

Personal portfolio built with Next.js 15, React 19, Tailwind CSS v4 and Sanity.

## Getting started

This project uses [pnpm](https://pnpm.io). Install it once with `corepack enable` (or `npm i -g pnpm`), then:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | What it does                     |
| ------------- | -------------------------------- |
| `pnpm dev`    | Start the dev server             |
| `pnpm build`  | Production build                 |
| `pnpm start`  | Serve the production build       |
| `pnpm lint`   | Run ESLint                       |

## Content

- Profile, experience, skills and open-source entries live in `data/*.ts`. Edit those files to update the site.
- Projects are fetched from Sanity (`/studio`). When Sanity isn't configured (no env vars), the site falls back to `data/projects.ts`.

### Audio

The header/dock music button loops `public/audio/theme.mp3`. The file isn't in the repo — add a track you have the rights to (anime OSTs are copyrighted; use a licensed or royalty-free piece). Until the file exists the button shows as disabled. Title and path live in `data/profile.ts` under `audio`.

### Environment

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-23
```

## Deploy

Deployed on [Vercel](https://vercel.com). Vercel detects `pnpm-lock.yaml` and uses pnpm automatically.
