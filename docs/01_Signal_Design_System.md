# Signal — The Troventis Design System

**Version 1.0 · Status: For review · 2026-07-22**

Signal is the design system of Troventis. It encodes one idea: engineering
quality made visible. Blue is structure — the blueprint. Green is the signal —
verification. Everything else is restraint.

Guiding principle: **confidence without arrogance.** If an element does not
carry meaning, it does not exist. Decoration is a bug.

---

## 1. Design Tokens

Tokens are the single source of truth, defined once in CSS custom properties
and consumed by Tailwind. No component may use a raw hex value.

### 1.1 Color — Light mode (default)

| Token                    | Value     | Contrast          | Role                                                    |
| ------------------------ | --------- | ----------------- | ------------------------------------------------------- |
| `--color-surface`        | `#FFFFFF` | —                 | Page background                                         |
| `--color-surface-raised` | `#F6F8FA` | —                 | Cards, alternating sections                             |
| `--color-surface-sunken` | `#EDF1F5` | —                 | Inset areas, code blocks                                |
| `--color-ink`            | `#111A2B` | 16.9:1 on surface | Headlines, primary text                                 |
| `--color-ink-muted`      | `#4A5568` | 7.0:1             | Secondary text                                          |
| `--color-ink-faint`      | `#8A94A6` | 3.4:1             | Disabled, decorative only — never for information       |
| `--color-navy`           | `#12263F` | 14.3:1            | Structural blue: primary buttons, footer, dark sections |
| `--color-navy-hover`     | `#1B3557` | —                 | Navy interactive hover                                  |
| `--color-signal`         | `#047B57` | 4.9:1             | The verification accent. AA for normal text             |
| `--color-signal-hover`   | `#03664A` | 6.1:1             | Signal interactive hover                                |
| `--color-signal-tint`    | `#E8F5F0` | —                 | Signal background wash (badges, highlights)             |
| `--color-line`           | `#E2E8F0` | —                 | Borders, dividers                                       |
| `--color-line-strong`    | `#CBD5E1` | —                 | Emphasized borders, focus adjacents                     |
| `--color-danger`         | `#B42318` | 6.3:1             | Form errors only                                        |
| `--color-warning`        | `#B54708` | 5.0:1             | Warnings only                                           |

### 1.2 Color — Dark mode

Dark mode is the navy world itself — the inside of the blueprint. Not
inverted-black, and never pure white text (harsh halation on dark).

| Token                    | Value     | Contrast | Role                                     |
| ------------------------ | --------- | -------- | ---------------------------------------- |
| `--color-surface`        | `#0B1420` | —        | Page background                          |
| `--color-surface-raised` | `#111E30` | —        | Cards                                    |
| `--color-surface-sunken` | `#081019` | —        | Inset areas                              |
| `--color-ink`            | `#E6EBF2` | 15.2:1   | Primary text                             |
| `--color-ink-muted`      | `#94A3B8` | 7.1:1    | Secondary text                           |
| `--color-ink-faint`      | `#5B6B80` | 3.2:1    | Decorative only                          |
| `--color-navy`           | `#1B3557` | —        | Structural fills (buttons on dark)       |
| `--color-navy-hover`     | `#24466F` | —        | Hover                                    |
| `--color-signal`         | `#2DD48F` | 9.4:1    | Verification accent, brightened for dark |
| `--color-signal-hover`   | `#4AE0A3` | —        | Hover                                    |
| `--color-signal-tint`    | `#0E2A22` | —        | Signal wash on dark                      |
| `--color-line`           | `#223349` | —        | Borders                                  |
| `--color-line-strong`    | `#314764` | —        | Emphasized borders                       |
| `--color-danger`         | `#F97066` | 6.8:1    | Errors                                   |
| `--color-warning`        | `#FDB022` | 10.1:1   | Warnings                                 |

### 1.3 The Signal Budget

Green is rationed. Per viewport (one screen height), signal color may appear
in **at most three places**. Legitimate uses: active navigation state, one
verified indicator or metric, CTA hover state, checkmarks in lists, completed
timeline steps, form success feedback. Never: backgrounds of whole sections,
body text, decorative shapes, more than one filled-green button per page.
If a screen feels like it needs more green, the content is wrong, not the
budget.

---

## 2. Typography

### 2.1 Families

| Token         | Family        | Usage                       |
| ------------- | ------------- | --------------------------- |
| `--font-sans` | IBM Plex Sans | Everything by default       |
| `--font-mono` | IBM Plex Mono | Terminal language only (§6) |

Self-hosted variable woff2, subset to Latin + Latin Extended (German
umlauts, ß). Loaded with `font-display: swap`, preloaded in `<head>`.
No external font CDN — GDPR requirement.

Weights: Sans 400 (body), 500 (UI labels, buttons), 600 (headings).
Mono 400 only. Nothing heavier than 600 anywhere — heavy weights shout,
and we don't shout.

### 2.2 Scale

Fluid scale via `clamp()`; rem-based; 1.25 ratio at desktop.

| Token               | Size (mobile → desktop) | Line height | Tracking | Use                        |
| ------------------- | ----------------------- | ----------- | -------- | -------------------------- |
| `--text-display`    | 40px → 64px             | 1.1         | −0.03em  | Homepage hero only         |
| `--text-h1`         | 32px → 48px             | 1.15        | −0.02em  | Page titles                |
| `--text-h2`         | 26px → 34px             | 1.2         | −0.02em  | Section headings           |
| `--text-h3`         | 20px → 24px             | 1.3         | −0.01em  | Card titles, subsections   |
| `--text-body-lg`    | 18px → 20px             | 1.6         | 0        | Lead paragraphs            |
| `--text-body`       | 16px                    | 1.65        | 0        | Default body               |
| `--text-small`      | 14px                    | 1.5         | 0        | Meta, captions             |
| `--text-mono-label` | 12px → 13px             | 1.4         | +0.08em  | Terminal labels, uppercase |

Body text measure: 60–72 characters (`max-width: 68ch`). Headings never
exceed 20 words. Sentence case everywhere including navigation — Title Case
Is Marketing, sentence case is engineering. (German capitalization rules
naturally override for German nouns.)

---

## 3. Spacing, Layout, Radii

### 3.1 Spacing

8px base grid (per original docs — retained). Scale: 4, 8, 12, 16, 24, 32,
48, 64, 96, 128, 160. Rules: components use 4–32; section padding uses
64–160 (fluid: 64px mobile → 128px desktop); vertical rhythm between
heading and its content: 16–24; between unrelated blocks: minimum 48.
Whitespace is the primary luxury signal — when in doubt, add space, not
elements.

### 3.2 Layout

Container: `max-width: 1200px`, gutter 24px mobile / 32px desktop.
Grid: 12 columns desktop, 4 columns mobile. Content column for prose:
`max-width: 68ch`. Breakpoints (Tailwind defaults, mobile-first):
640 / 768 / 1024 / 1280.

### 3.3 Radii & Elevation

| Token         | Value | Use                         |
| ------------- | ----- | --------------------------- |
| `--radius-sm` | 6px   | Badges, inputs, mono labels |
| `--radius-md` | 10px  | Buttons, cards              |
| `--radius-lg` | 16px  | Large feature cards, images |

Shadows are near-absent — flat surfaces with hairline borders are the
premium register. Exactly two elevations exist:
`--shadow-raise: 0 1px 2px rgb(17 26 43 / 0.06)` (resting cards) and
`--shadow-lift: 0 8px 24px rgb(17 26 43 / 0.10)` (hover lift, modals).
No glows, no colored shadows, no glassmorphism.

---

## 4. Iconography

Lucide (per stack decision), configured globally: `stroke-width: 1.75`,
sizes 16 / 20 / 24 only. Icons are functional, never decorative — an icon
appears only when it aids scanning (nav items, list markers, contact
details). Icon color follows text color; signal-colored icons count
against the Signal Budget. No icon may appear without an accessible label
(visible text or `aria-label`). No emoji anywhere in the product.

---

## 5. Motion

Motion communicates state; it never performs.

| Token             | Value                      | Use                             |
| ----------------- | -------------------------- | ------------------------------- |
| `--motion-fast`   | 150ms                      | Hovers, color/opacity changes   |
| `--motion-base`   | 220ms                      | Lifts, reveals, accordions      |
| `--motion-slow`   | 320ms                      | Page transitions, hero entrance |
| `--ease-standard` | cubic-bezier(0.2, 0, 0, 1) | Everything by default           |
| `--ease-exit`     | cubic-bezier(0.4, 0, 1, 1) | Elements leaving                |

Vocabulary (the complete list — nothing else exists):

1. **Fade-rise**: opacity 0→1 + translateY 12px→0. Section/card entrances,
   staggered 60ms for groups, triggered once at 20% viewport visibility.
2. **Lift**: translateY −2px + shadow-raise→lift. Card/button hover.
3. **Page fade**: 200ms crossfade between routes.
4. **Count-up**: statistics animate once when visible, 800ms, ease-out.
5. **Cursor blink**: the wordmark's cursor block may blink (1.1s steps)
   — only in the hero, only once per visit, max 3 blinks, then solid.

Hard rules: nothing animates on scroll continuously (no parallax);
nothing loops (except the bounded cursor blink); nothing moves more than
16px; `prefers-reduced-motion` collapses everything to opacity-only or
none (already enforced globally in CSS). Framer Motion loaded via
`LazyMotion` with `domAnimation` only.

---

## 6. Terminal Language (the signature)

Where mono appears — exhaustively:

1. **Section identifiers**: `[ 01 · SERVICES ]` — mono-label size, tracked,
   ink-muted with the brackets in signal. One per section, above the h2.
2. **Micro-metadata**: card tags, timeline dates, project stack labels.
3. **Metric assertions**: statistics may render as verified statements,
   e.g. `defect escape rate < 0.1% ✓` — the ✓ in signal.
4. **Footer meta**: copyright line, build/version marker.

Where mono never appears: headings, body copy, buttons, navigation,
forms. Forbidden entirely: fake terminal windows, typing animations,
matrix/rain effects, syntax-highlighted decorative code, scanlines, any
cybersecurity aesthetic. The signature whispers. If a reviewer notices
the motif before the content, we've overdone it.

---

## 7. Component Principles

Component classes (Phase 2 build order):

1. **Primitives**: Button (primary=navy fill / secondary=outline / ghost;
   signal appears only on hover underline or focus, never as fill),
   Container, Section, Badge, MonoLabel.
2. **Structure**: Navbar (glass-free: solid surface with hairline border on
   scroll), Footer, LanguageSwitcher, ThemeToggle.
3. **Content**: Hero, ServiceCard, ProjectCard, StatBlock (count-up),
   Timeline, CTABanner.
4. **Forms**: Input, Textarea, Select, ContactForm (validation, loading,
   success, error states — all four designed, none improvised).

Every component ships with: all interactive states (rest, hover, focus,
active, disabled), both themes, both locales tested (German runs ~20%
longer — layouts must tolerate it), and keyboard operability. A component
missing any of these is unfinished, not "MVP".

---

## 8. Accessibility Rules (WCAG 2.2 AA, non-negotiable)

1. Text contrast ≥ 4.5:1, large text ≥ 3:1 — already encoded in tokens;
   `ink-faint` is banned for informational content.
2. Focus visible always: 2px signal outline, 2px offset, on every
   interactive element. Focus is a legitimate, budget-exempt use of signal.
3. Full keyboard operability; logical tab order; skip-to-content link.
4. Color never sole information carrier (✓ marks pair with text).
5. Touch targets ≥ 44×44px.
6. Semantic HTML first: one h1 per page, landmarks (header/nav/main/footer),
   headings never skip levels.
7. `lang` correct per locale (done in Phase 1); language switcher announces
   target language in its own tongue ("Deutsch", "English").
8. Motion respects `prefers-reduced-motion` (enforced in CSS layer).
9. Forms: visible labels (no placeholder-as-label), errors linked via
   `aria-describedby`, error text + icon, never color alone.
10. Images: meaningful alt text or empty alt for decorative.

---

## 9. Wordmark & Brand Assets

The wordmark: `troventis` in Plex Sans SemiBold, tracking −0.03em, followed
by the cursor block (width 0.42em, height 0.72em, baseline-aligned, gap
0.18em). Ink on light, `#E6EBF2` on dark; cursor always signal. Clear
space: cursor-width on all sides. Minimum size: 96px wide (web), below
that use the block-only icon. The block alone on navy = favicon / avatar.

Implementation: `components/brand/Wordmark.tsx` and `Mark.tsx` render
inline SVG from a single source file `components/brand/logo.svg`. All
layouts reference the components, never the asset — a future professional
logo is a one-file swap. Deliverables generated at build time: favicon
set, OG image template, Apple touch icon.

---

## 10. Governance

- Tokens live in `styles/globals.css` under `@theme`; Tailwind consumes
  them; no component uses raw values. A lint rule (Phase 2) flags hex
  literals outside the token file.
- Changes to Signal require an entry in `docs/00_Decisions_Log.md`.
- The Signal Budget (§1.3) and Terminal Language limits (§6) are review
  criteria for every future page, including post-MVP features.
