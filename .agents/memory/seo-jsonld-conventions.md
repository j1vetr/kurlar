---
name: SEO JSON-LD conventions
description: Site-wide JSON-LD @id contracts and product-page SEO patterns for kurlar.com.tr
---

# JSON-LD @id contract
- The Organization graph node lives on the home page with `@id` exactly `SITE_URL + "/#organization"` (builders in the brand source-of-truth module). All other pages (product `manufacturer`, AboutPage `about`, WebSite `publisher`) reference that same `@id` — never rename, move, or duplicate the full node.
- **Why:** schema graph merging depends on exact `@id` equality; drift silently splits the entity.
- **How to apply:** Product schema deliberately has NO offers/price/aggregateRating (B2B, no pricing) — do not add them. Structured data may only contain site-verified facts (no ratings, awards, unverified social handles — e.g. no Twitter/X handle exists).

# Product-page SEO patterns (both layouts in ProductDetail)
- SEO strings/JSON-LD/alts derive from URL locale (`getProductWithLanguage(base, en ? 'EN' : 'TR')`), never from UI language state.
- Tab/series content is ALWAYS rendered in the DOM and hidden with the CSS `hidden` class when inactive (crawlers read without clicking). Heavy embeds (PDF iframes) mount only for the active tab; their fallback semantic tables stay in DOM.
- Image dims come from `imageDims()` in `client/src/lib/product-seo.ts` (real measured px of product PNGs). Hero/LCP images are never `loading="lazy"`; thumbnails/marquee/badges are.
