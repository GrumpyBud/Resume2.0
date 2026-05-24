# Owen Tharp Resume Site

A resume website for Owen Tharp built with Bun, React Router 7, Vite, React, TypeScript, Tailwind CSS v4, shadcn/ui on Base UI, Convex, Zustand, next-themes, Lucide icons, and Sonner.

## Run

```bash
bun run go
```

The command installs dependencies, starts Convex, seeds the resume profile, and starts Vite.

## Useful Commands

```bash
bun run dev
bun run build
bun run typecheck
bun run lint
bunx convex dev --once --run resume:seed
```

## Data

Convex stores the resume profile. The app keeps a local fallback so the page still renders before Convex finishes loading or when a local deployment has not been configured.

## Theme

The site defaults to `system` theme mode. Reviewers see the page in the light or dark mode they already use, and they can still choose light or dark manually from the header.
