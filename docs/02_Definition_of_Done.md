# Definition of Done — Troventis Website

Adopted 2026-07-22. A deliverable that fails any applicable criterion is
not done — "mostly done" does not exist.

## Component DoD

A component is done when it has:

- [ ] All applicable interactive states: rest, hover, focus, active,
      disabled, loading, success, error, empty
- [ ] Light and dark mode, using Signal tokens only (no raw values)
- [ ] Both locales tested — German text (~20% longer) does not break layout
- [ ] Full keyboard operability with visible focus
- [ ] Correct semantics/ARIA (labels, roles, described-by for errors)
- [ ] Touch target ≥ 44×44px for interactive elements
- [ ] Signal Budget and Terminal Language rules respected (Signal §1.3, §6)
- [ ] Motion uses only the Signal vocabulary and respects reduced motion

State criteria apply only where the component has such states: a static
Badge has no loading state, and inventing one to tick a box is a defect
of its own.

## Page DoD

A page is done when it has:

- [ ] All contained components pass the Component DoD
- [ ] Responsive: 360px → 1440px, no horizontal scroll, mobile + desktop
      manually checked
- [ ] Light and dark mode reviewed visually
- [ ] English and German content present and reviewed for quality
- [ ] Keyboard navigation end-to-end, skip link works, logical order
- [ ] Screen reader pass (VoiceOver script executed by reviewer)
- [ ] Zero axe-core violations in both locales
- [ ] Lighthouse ≥ 95 in all four categories, mobile and desktop
- [ ] SEO metadata: title, description, OG tags, hreflang, canonical
- [ ] Design review checklist passed (Signal governance §10)

## Enforcement

- Automated in CI: lint, format, typecheck, build, token contrast
  verification; axe-core + Lighthouse CI added when first full pages ship.
- Manual: PR template checkboxes (.github/PULL_REQUEST_TEMPLATE.md);
  VoiceOver test scripts provided per page.
