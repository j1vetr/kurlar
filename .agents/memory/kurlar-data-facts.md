---
name: Kurlar ürün verisi çelişkileri ve içerik kuralları
description: SEO içeriği yazarken data.ts'teki hangi alanların otoriter kabul edileceği; TR kategori mimarisi kararları
---

## Rule
When writing SEO/marketing copy (category pages, EN pages, guides), treat the **user-visible spec tables** (`specs` objects in `client/src/lib/data.ts`) as authoritative — NOT the numeric `maxFlow`/`maxHead` fields.

**Why:** The numeric fields contradict the published spec tables for some products (e.g. one pump family's fields say 350 m³/h / 650 m while its own spec table says 290 m³/saat / 700 m). Category copy must never contradict what the product page itself displays; an architect review flagged this as a factual-accuracy failure. Pump families KP/KPD/KSX all publish 290 m³/saat & 700 m; KPN publishes 24 m³/saat & 200 m.

**How to apply:** Before making any technical claim, grep the product's `specs` block. If fields and spec table disagree, use the spec table (or drop the claim). Also note: the S-Type (kms) product `description` in data.ts wrongly duplicates the HI-TEMP text — don't copy it as an S-Type fact; use its `features`/`specs` instead.

## TR category architecture decisions (Task #2)
- Single source of truth: `client/src/lib/categories.ts` (slugs, titles, intros, sections, FAQs, product mappings). New locales/pages should extend it, not fork it.
- URL scheme: `/urunler/dalgic-pompalar[/sub]`, `/urunler/dalgic-motorlar[/sub]`; routes registered in App.tsx BEFORE `/urunler/:id` (wouter order).
- `?category=pump|motor` on `/urunler` 301s to category pages **only when no `search` param** — otherwise 200 with canonical `/urunler` (query-stripping canonical prevents duplicates).
- Breadcrumbs: `client/src/components/shared/Breadcrumbs.tsx` (visible nav + `breadcrumbJsonLd`); product pages include parent category in the chain.
