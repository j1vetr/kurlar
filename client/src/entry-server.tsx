import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { preloadAllPages } from "./lib/app-pages";
import { HeadContext, renderHead, type HeadState } from "./lib/head";
import { products } from "./lib/data";

/**
 * Server-side rendering entry point.
 * - render(url): returns fully rendered HTML + serialized <head> + HTTP status
 * - resolveUrl(pathname): route resolution for status codes and legacy redirects
 */

const STATIC_PATHS = new Set([
  "/",
  "/hakkimizda",
  "/arge-merkezi",
  "/sertifikalarimiz",
  "/kariyer",
  "/urunler",
  "/bayi-servis",
  "/iletisim",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
]);

/**
 * Legacy URLs that were indexed in the past and still map to a current page
 * get a 301. Old URLs that map to nothing return 404 (never a blanket
 * redirect to the homepage).
 */
const LEGACY_REDIRECTS: Record<string, string> = {
  // Historic Noryl listing URL -> current Noryl series product page
  "/urunler/noryl-dalgic-pompalar": "/urunler/kpn",
};

export interface ResolvedUrl {
  status: number;
  redirect?: string;
}

export function resolveUrl(pathname: string): ResolvedUrl {
  if (LEGACY_REDIRECTS[pathname]) {
    return { status: 301, redirect: LEGACY_REDIRECTS[pathname] };
  }

  // Duplicate-content guard: English-style product path -> canonical TR path.
  const legacyProduct = pathname.match(/^\/products\/([^/]+)$/);
  if (legacyProduct && products.some((p) => p.id === legacyProduct[1])) {
    return { status: 301, redirect: `/urunler/${legacyProduct[1]}` };
  }

  if (STATIC_PATHS.has(pathname)) return { status: 200 };

  const productMatch = pathname.match(/^\/urunler\/([^/]+)$/);
  if (productMatch) {
    return { status: products.some((p) => p.id === productMatch[1]) ? 200 : 404 };
  }

  return { status: 404 };
}

export interface RenderResult {
  html: string;
  head: string;
  status: number;
}

export async function render(url: string): Promise<RenderResult> {
  const qIndex = url.indexOf("?");
  const pathname = qIndex === -1 ? url : url.slice(0, qIndex);
  const search = qIndex === -1 ? "" : url.slice(qIndex + 1);

  // Load every page module up-front so nothing suspends during the render:
  // pages then render synchronously and the HTML is fully inline.
  await preloadAllPages();

  const headState: HeadState = {};
  const html = renderToString(
    <HeadContext.Provider value={{ state: headState }}>
      <Router ssrPath={pathname} ssrSearch={search}>
        <App />
      </Router>
    </HeadContext.Provider>,
  );

  const { status } = resolveUrl(pathname);

  return { html, head: renderHead(headState, pathname), status };
}
