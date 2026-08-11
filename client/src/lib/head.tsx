import { createContext } from "react";

/**
 * SSR-compatible head metadata system.
 *
 * During server-side rendering, the SEO component writes page metadata into
 * a HeadState object provided via HeadContext. The server then serializes it
 * into the raw HTML <head> with renderHead(). On the client, the SEO
 * component keeps updating the DOM directly (see SEO.tsx).
 */

export const SITE_URL = "https://kurlar.com.tr";

export const DEFAULT_TITLE = "Kurlar | Dalgıç Pompa ve Motor Sistemleri";
export const DEFAULT_DESCRIPTION =
  "Yüksek verimlilik, uzun ömür ve güvenilir performans için tasarlanmış profesyonel dalgıç pompa ve dalgıç motor çözümleri.";

export interface HeadState {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  /** Extra raw tags (e.g. hreflang links) rendered verbatim server-side. */
  links?: { rel: string; href: string; hreflang?: string }[];
  /** og:locale (tr_TR on TR pages, en_US on /en pages). */
  ogLocale?: string;
  jsonLd?: object[];
}

export const HeadContext = createContext<{ state: HeadState } | null>(null);

/**
 * Normalizes a canonical URL:
 * - resolves paths against the canonical host
 * - strips query strings (filter/utm variations must not create duplicates)
 * - strips trailing slashes (site-wide URL format is no-trailing-slash)
 */
export function normalizeCanonical(urlOrPath: string): string {
  let url = urlOrPath.startsWith("http")
    ? urlOrPath
    : `${SITE_URL}${urlOrPath.startsWith("/") ? "" : "/"}${urlOrPath}`;
  const q = url.indexOf("?");
  if (q !== -1) url = url.slice(0, q);
  const h = url.indexOf("#");
  if (h !== -1) url = url.slice(0, h);
  while (url.length > SITE_URL.length + 1 && url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  return url;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absoluteUrl(urlOrPath: string): string {
  return urlOrPath.startsWith("http") ? urlOrPath : `${SITE_URL}${urlOrPath}`;
}

/** Serializes collected head state to HTML for injection into the SSR template. */
export function renderHead(state: HeadState, pathname: string): string {
  const title = state.title ?? DEFAULT_TITLE;
  const description = state.description ?? DEFAULT_DESCRIPTION;
  const canonical = state.canonical ?? normalizeCanonical(pathname);
  const noindex = state.robots?.includes("noindex") ?? false;

  const tags: string[] = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  ];
  if (state.robots) {
    tags.push(`<meta name="robots" content="${escapeHtml(state.robots)}" />`);
  }
  if (!noindex) {
    tags.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  }
  for (const link of state.links ?? []) {
    const hreflang = link.hreflang ? ` hreflang="${escapeHtml(link.hreflang)}"` : "";
    tags.push(`<link rel="${escapeHtml(link.rel)}" href="${escapeHtml(link.href)}"${hreflang} />`);
  }
  tags.push(`<meta property="og:title" content="${escapeHtml(title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(description)}" />`);
  if (!noindex) {
    tags.push(`<meta property="og:url" content="${escapeHtml(canonical)}" />`);
  }
  tags.push(`<meta property="og:type" content="${escapeHtml(state.ogType ?? "website")}" />`);
  tags.push(`<meta property="og:locale" content="${escapeHtml(state.ogLocale ?? "tr_TR")}" />`);
  if (state.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(absoluteUrl(state.ogImage))}" />`);
  }
  tags.push(`<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  for (const obj of state.jsonLd ?? []) {
    // JSON-LD must escape "<" to prevent </script> injection.
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`,
    );
  }
  return tags.join("\n    ");
}
