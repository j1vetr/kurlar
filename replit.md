# Kurlar Dalgıç Pompa & Motor — kurlar.com.tr

## Overview
Corporate site + product catalog for Kurlar, a Turkish manufacturer of submersible pumps and motors. The project is undergoing a full technical/product SEO program (project tasks #1–#8, derived from the SEO instruction document in `attached_assets/`).

## Architecture
- **Frontend:** React 19 + Vite 7 + Tailwind 4 + wouter, pages in `client/src/pages/`, static product data in `client/src/lib/data.ts` (no database for the catalog).
- **Backend:** Express (`server/index.ts`), serves the app with full SSR.
- **SSR:** `client/src/entry-server.tsx` renders with `renderToString` after preloading all code-split pages (`client/src/lib/app-pages.ts` + `lazy-preload.tsx`). Head tags (title/meta/canonical/JSON-LD) are collected via `client/src/lib/head.tsx` + `client/src/components/shared/SEO.tsx`. See `.agents/memory/ssr-lazy-pages.md` for invariants — do not switch to streaming render APIs.
- **URL rules:** no trailing slashes (301), true HTTP 404 for unknown routes/products, legacy redirects in `entry-server.tsx#resolveUrl`, host/https 301s only for kurlar.com.tr hosts (`server/ssr.ts`).
- **Categories (TR):** `/urunler/dalgic-pompalar` & `/urunler/dalgic-motorlar` + 7 subcategory pages, all driven by `client/src/lib/categories.ts` (single source of truth: slugs, SEO copy, FAQs, product mappings). Rendered by `client/src/pages/CategoryPage.tsx`; routes registered in `App.tsx` before `/urunler/:id`. `?category=pump|motor` 301s to category pages (unless `?search=` present). Breadcrumbs + BreadcrumbList JSON-LD via `client/src/components/shared/Breadcrumbs.tsx`. Technical claims must match product `specs` tables in `data.ts` (see `.agents/memory/kurlar-data-facts.md`).
- **Build:** `npm run build` (`script/build.ts`) → client to `dist/public`, SSR bundle to `dist/server/entry-server.cjs`, server to `dist/index.cjs`.
- **Deployment:** autoscale, `node dist/index.cjs` (static hosting would bypass SSR). `nginx.conf` exists for self-hosting and proxies page requests to the Node server.

## User Preferences
- Communicate in Turkish, informal tone ("abi"); report progress in Turkish.
- Existing design and URLs must not break; user declined a full-stack/database migration.
- SEO rules from the instruction doc: no fake facts, no keyword stuffing, no blanket homepage redirects; raw HTML (curl) must contain title/meta/canonical/H1/tables/JSON-LD.
