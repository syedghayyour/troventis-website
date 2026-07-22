import type { NextConfig } from "next";

/**
 * Static export configuration (ADR-001).
 * The entire site is pre-rendered at build time and served as static
 * assets from Cloudflare Pages. The only dynamic code lives in
 * /functions (Cloudflare Pages Functions), outside the Next.js build.
 */
const nextConfig: NextConfig = {
  output: "export",
  // next/image optimization requires a server; images are pre-optimized
  // at build time instead (tooling added in Phase 5 with real assets).
  images: { unoptimized: true },
  // Emit /de/index.html etc. so Cloudflare serves clean URLs without
  // needing redirect rules per page.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
