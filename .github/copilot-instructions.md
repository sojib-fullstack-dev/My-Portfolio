# Repository instructions

## Next.js version

This repository uses Next.js 16.4.3, React 19.3, and the App Router. It is not safe to rely on older Next.js assumptions. Before changing framework APIs, routing behavior, layouts, fonts, images, or server/client boundaries, read the matching guide under `node_modules/next/dist/docs/`. The repository's `AGENTS.md` carries the same generated warning.

## Setup and commands

Use npm and the committed `package-lock.json`:

```powershell
npm install
npm run dev
```

- Development server: `npm run dev` (http://localhost:3000)
- Production build: `npm run build`
- Production server after a build: `npm start`
- Full lint: `npm run lint`
- Lint one file: `npx eslint src/app/page.tsx`
- TypeScript check: `npx tsc --noEmit`

There is currently no test script or test framework configured. Add a test runner and script before attempting to run a repository test suite; no separate single-test command exists yet.

## Architecture

- This is a Next.js App Router application rooted at `src/app/`.
- `src/app/layout.tsx` is the required root layout. It loads the Geist sans/mono fonts with `next/font/google`, imports global styles, exports metadata, and renders route content in `<main>`.
- `src/app/page.tsx` is the `/` route. It is currently a minimal scaffold, so verify whether placeholder content should be preserved before adding portfolio sections.
- Reusable application components belong under `src/components/`; the large `src/components/ui/` tree contains generated UI primitives.
- `src/hooks/` contains shared React hooks and `src/lib/` contains shared utilities, including the Shiki-based syntax highlighter.
- Static files served directly by Next are under `public/`. Portfolio source assets also exist under `src/assect/` (the directory spelling is `assect`, not `assets`).

## UI and styling conventions

- Use the `@/*` TypeScript alias for files under `src/` (for example `@/components/ui/button` and `@/hooks/use-mobile`).
- Components in `src/components/ui/` are shadcn-style primitives built on `@base-ui/react`. Preserve `data-slot` attributes and existing variant/size APIs when extending them.
- Use `class-variance-authority` for component variants and merge classes with `cn`. Existing generated components import `cn` from the `cn` package; `src/lib/utils.ts` also re-exports `cn` for alias-based imports.
- Global styling is in `src/app/globals.css`. It uses Tailwind CSS v4 (`@import "tailwindcss"`), `tw-animate-css`, shadcn Tailwind styles, CSS custom properties, and light/dark theme variables. Keep theme colors in the existing CSS variable system rather than hard-coding palette values in components.
- React Compiler is enabled in `next.config.ts`; do not assume manual memoization is necessary.
- App Router components are Server Components by default. Add `"use client"` only when a component uses state, browser APIs, lifecycle hooks, or event handlers; keep client boundaries close to the interactive part rather than marking whole route trees unless required.

## Dependency and component conventions

- Manage npm dependencies through `package.json` and `package-lock.json`.
- `components.json` is the shadcn configuration. Its aliases map `@/components`, `@/ui`, `@/lib`, and `@/hooks`, with `src/app/globals.css` as the Tailwind stylesheet.
- Lucide React provides icons; Base UI supplies low-level primitives; Tailwind utility classes provide component styling.
- `src/lib/highlighter.tsx` lazily loads a restricted set of Shiki languages and dark/light themes. Extend that language map or theme setup there rather than adding another syntax-highlighting implementation.
