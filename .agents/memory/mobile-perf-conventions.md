---
name: Mobile performance conventions
description: PageSpeed rules for hero video, images, and inlined CSS on kurlar site
---

- **YouTube hero video is click-to-play only.** Never auto-load the iframe (even deferred/idle) — ~900 KiB third-party JS/CSS destroys mobile Lighthouse. **Why:** deferred auto-load at 2 s kept mobile perf at 63; click-only was required.
- **Production CSS is inlined at server startup** (`serveStatic` regex-replaces the built `/assets/*.css` stylesheet link with `<style>`). If a Vite output format change breaks the regex it silently falls back to the link — check for one `<style>` and no CSS link in prod HTML when touching the build.
- **Product images are tall + object-contain:** accurate `sizes` must be computed from aspect ratio (helpers in product-seo.ts), otherwise mobile downloads the full variant instead of `-card.webp`.
- Image asset convention: products = `.webp` + `-card.webp` (h620); gallery heroes have `-sm.webp` mobile variants; logo has `logo-nav-sm.webp` 1x. `logo.png` kept only for favicon/OG.
