# Troventis Website

Enterprise technology consulting website – Next.js static export on Cloudflare Pages.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000/de/
```

## Quality gates

```bash
pnpm lint && pnpm typecheck && pnpm build
```

## Deployment

Pushes to `main` deploy via Cloudflare Pages git integration.

- Build command: `pnpm build`
- Output directory: `out`

See `docs/00_Decisions_Log.md` for architecture decisions.
