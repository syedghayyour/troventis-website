# Architecture Decisions Log – Troventis Website

Source of truth for technical decisions. Newest addenda at the bottom.
Product-level decisions (scope, languages, analytics, etc.) are recorded
in the project's `Architecture Decisions` document dated 2026-07-22.

---

## ADR-001: Static export (`output: "export"`)

**Status:** Accepted · 2026-07-22

The site is fully pre-rendered at build time and served as static assets
from Cloudflare Pages. The only server-side code is Cloudflare Pages
Functions in `/functions` (contact form, Phase 6), which live outside
the Next.js build.

**Consequences:** no SSR/ISR/middleware/`next/image` runtime optimization.
Images are pre-optimized at build time. If a future feature requires SSR,
migrate the deploy adapter (`@opennextjs/cloudflare`); route and component
code remain unchanged.

## ADR-002: Route-based i18n (`/de/`, `/en/`)

**Status:** Accepted · 2026-07-22

Next.js built-in i18n routing is incompatible with static export. All
pages live under `app/[locale]/`, statically generated per locale via
`generateStaticParams` with `dynamicParams = false`. Typed JSON
dictionaries in `content/locales/` (German is the shape source of truth;
TypeScript enforces parity). Root path redirects to `/de/` via
`public/_redirects` (302 until launch, then 301). `hreflang` alternates
are emitted in metadata.

Because all routes live inside `[locale]`, `app/[locale]/layout.tsx`
serves as the root layout (renders `<html>`/`<body>` with the correct
`lang`). No routes may be created outside `app/[locale]/`.

## ADR-003: Class-based dark mode with inline bootstrap

**Status:** Accepted · 2026-07-22

Theme is resolved client-side (no server exists): a tiny inline script
in `<head>` reads `localStorage`/`prefers-color-scheme` and sets `.dark`
on `<html>` before first paint, preventing theme flash. This is the one
intentionally render-blocking inline script in the project; it must stay
dependency-free and under ~300 bytes. Tailwind v4 `@custom-variant dark`
consumes the class.

## ADR-004: Turnstile loaded lazily on the contact page only

**Status:** Accepted · 2026-07-22 · Implemented in Phase 6

The contact page is the only page allowed to load a third-party script.
Turnstile is injected on first form interaction to protect Core Web
Vitals on that page.

## Open items

- Custom 404 page (MVP scope): implemented in Phase 6 as `app/[locale]/`
  content plus an exported `404.html`; also decide copy per locale.
- Language switcher must preserve the current path across locales
  (Phase 2, Navbar).
- Pre-optimization tooling for images (sharp, build step): Phase 5 when
  real assets exist.
