<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Single-page personal portfolio: Next.js 16 (App Router) + React 19 + Tailwind v4 + TypeScript. No monorepo, no tests, no CI, no formatter.

- Entry: `src/app/page.tsx` composes section components from `src/components/` (Hero, About, Experience, Skills, Projects, Contact, Navbar, Footer). Sections are hash anchors: `#home`, `#about`, `#experience`, `#skills`, `#projects`, `#contact`.
- shadcn/ui components are vendored in `src/components/ui/` (style `base-nova`, see `components.json`). Add/regenerate via the `shadcn` CLI rather than hand-writing.
- Path alias: `@/*` → `src/*`.

## Commands

- `npm run dev` — Turbopack dev server. Also (re)writes the `nextjs-agent-rules` block above.
- `npx tsc --noEmit` — typecheck (no npm script exists for it).
- `npm run lint` — flat config in `eslint.config.mjs`. **Baseline currently fails with 2 pre-existing `react-hooks/set-state-in-effect` errors** in `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts`. Don't attribute them to your change; don't fix them in drive-by edits unless asked.
- `npm run build` — production build.
- There is no test runner. Verification = lint + typecheck + build, in that order.

## Quirks

- `next.config.ts`: React Compiler is on (`reactCompiler: true`); Tailwind v4 loads via the `@tailwindcss/turbopack` loader rule on `*.css`. There is **no** `tailwind.config.*` — theme tokens live in `src/app/globals.css` (`@theme inline` + CSS variables).
- Two public asset directories: `public/assets/` and the misspelled `public/assect/` (holds the resume PDF `Samiul_Hasan_Sojib_Resume_v2.pdf` and some images). Both are referenced by URL in `Navbar.tsx` / `Hero.tsx` / `Projects.tsx`. Never "fix" the typo without updating every reference.
- Dark mode: initial theme is applied by an inline script in `src/app/layout.tsx` (reads `localStorage.theme`, toggles `dark` on `<html>`); toggled in `Navbar.tsx` the same way. Keep the two in sync if you touch theme logic.
- `tsconfig.tsbuildinfo`, `next-env.d.ts`, `.next/` are gitignored build artifacts — don't commit or "clean up" them.
- `README.md` is stale (describes only the navbar); trust the code above.
