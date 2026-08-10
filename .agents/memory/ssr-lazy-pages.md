---
name: SSR with code-split pages
description: How this repo renders React.lazy pages server-side without deferred Suspense segments; pitfalls to avoid when touching SSR.
---

# SSR + React.lazy in this repo

Rule: server rendering uses `renderToString` after `preloadAllPages()` (see the page registry in `client/src/lib/app-pages.ts` + `client/src/lib/lazy-preload.tsx`). Do not switch to `prerenderToNodeStream`/streaming APIs.

**Why:** React's prerender/stream APIs emit any boundary that completes asynchronously as out-of-line segments (`<template id="B:0">` + `<div hidden id="S:0">` + `$RC` script) — the raw HTML then hides page content from curl/crawler checks. Preloading the lazy page modules makes the tree fully synchronous, so `renderToString` yields clean inline HTML and hydration still works with client-side code splitting intact.

**How to apply:**
- New pages must be registered in the `app-pages.ts` registry (not `lazy()` directly in App.tsx) or SSR will suspend again.
- Keep `preloadAllPages()` awaited in `client/src/entry-server.tsx` before rendering.
- Quick regression check: `curl -s localhost:5000/ | grep -c '<template id='` must be 0 on every route.

# Related SEO invariants (accepted plan, tasks #1–#8)

- Wouter matches `/urunler/:id` before the catch-all, so unknown product ids must render the NotFound page from inside ProductDetail (true 404: server status comes from `resolveUrl` in entry-server; keep both in sync with product data).
- SSR failure fallback must keep honest HTTP semantics: resolved 404 stays 404 + noindex, resolved 200 becomes 503 — never a soft-404/empty 200 (`fallbackStatus`/`fallbackHead` in `server/ssr.ts`).
- Host/https 301s only fire for kurlar.com.tr hosts (open-redirect hardening); *.replit.app is served as-is. www/https redirects are unverifiable in dev — verify after publish (task #8).
- Deployment must be autoscale running `node dist/index.cjs` (static deployment would bypass SSR entirely). `nginx.conf` (for self-hosting) proxies page requests to the Node server; assets from disk.
