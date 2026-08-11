---
name: EN locale architecture (/en)
description: Durable decisions for the English SEO layer — URL scheme, hreflang policy, and language-state rules.
---

# EN locale architecture

## Decisions (fixed)
- EN pages live under `/en` and mirror only product-related TR pages. Corporate pages (hakkımızda, iletişim, …) intentionally have **no** EN URL and **no** hreflang.
  **Why:** export/B2B intent is product-driven; thin duplicate corporate pages would dilute the EN cluster.
- Hreflang trio: `tr-TR` → TR URL, `en` → EN URL, `x-default` → **EN** URL.
  **Why:** global B2B export intent — anyone outside Turkey should land on English.
- Hreflang is emitted only when a real counterpart exists, never on noindex pages, and must be reciprocal in raw SSR HTML.
- Legacy `/products/:id` 301s to the EN product page (not the TR one) now that real EN pages exist.

## Language-state rule (sticky-EN)
- The URL forces English under `/en` (including SSR). Visiting `/en` makes the chosen language sticky-EN so TR-only pages stay English after navigation. AR/ES/PT remain state-only (no URLs).
- The language picker navigates between TR↔EN counterpart URLs when one exists; otherwise it only flips state.
- Hard-coded layout labels without AR/ES/PT translations: show English for every non-TR language.

## Pitfalls
- Special per-product layouts can hide hard-coded Turkish strings that translation-key audits miss. Many Turkish words are pure ASCII, so grepping for diacritics is insufficient — scan the rendered text of each EN URL.
- The 404 page must be locale-aware too, or `/en/*` 404s ship `lang="en"` with Turkish content.
