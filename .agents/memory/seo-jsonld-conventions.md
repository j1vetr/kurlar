---
name: SEO JSON-LD conventions
description: Site-wide JSON-LD @id contracts and product-page SEO patterns for kurlar.com.tr
---

# JSON-LD @id contract
- Product JSON-LD on every product page emits `manufacturer: { "@type": "Organization", "@id": "https://kurlar.com.tr/#organization", name: "Kurlar Dalgıç Pompa & Motor" }`.
- **Why:** The full Organization node (home page task) must use the EXACT same `@id` (`SITE_URL + "/#organization"`) so the graph merges. A bare `@id`-only reference fails schema review when the node doesn't exist yet, so the reference carries `@type` + `name` to stand alone.
- **How to apply:** When adding Organization JSON-LD (home page), use `@id: SITE_URL/#organization`; do not rename or move it. Product schema deliberately has NO offers/price/aggregateRating (B2B, no pricing) — do not add them.

# Product-page SEO patterns (both layouts in ProductDetail)
- SEO strings/JSON-LD/alts derive from URL locale (`getProductWithLanguage(base, en ? 'EN' : 'TR')`), never from UI language state.
- Tab/series content is ALWAYS rendered in the DOM and hidden with the CSS `hidden` class when inactive (crawlers read without clicking). Heavy embeds (PDF iframes) mount only for the active tab; their fallback semantic tables stay in DOM.
- Image dims come from `imageDims()` in `client/src/lib/product-seo.ts` (real measured px of product PNGs). Hero/LCP images are never `loading="lazy"`; thumbnails/marquee/badges are.
