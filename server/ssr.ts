import type { Express, Request } from "express";
import path from "path";

/**
 * Site-wide URL normalization (SEO):
 * - production only: www -> non-www and http -> https (301)
 * - collapses duplicate slashes (301)
 * - strips trailing slashes; the canonical format is no-trailing-slash (301)
 * Query strings are preserved on redirect.
 */
const CANONICAL_HOST = "kurlar.com.tr";

export function setupUrlNormalization(app: Express) {
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();

    const query = req.originalUrl.includes("?")
      ? req.originalUrl.slice(req.originalUrl.indexOf("?"))
      : "";

    if (process.env.NODE_ENV === "production") {
      // Only redirect for our own domain (never reflect an arbitrary Host
      // header — that would be an open redirect). Other hosts (e.g. the
      // *.replit.app preview domain) are served as-is.
      const host = (req.headers.host ?? "").toLowerCase().split(":")[0];
      const proto = (req.headers["x-forwarded-proto"] as string | undefined) ?? "https";
      const isCanonicalDomain =
        host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;
      if (isCanonicalDomain && (host !== CANONICAL_HOST || proto === "http")) {
        return res.redirect(301, `https://${CANONICAL_HOST}${req.path}${query}`);
      }
    }

    let normalized = req.path.replace(/\/{2,}/g, "/");
    if (normalized.length > 1) {
      normalized = normalized.replace(/\/+$/, "") || "/";
    }
    if (normalized !== req.path) {
      return res.redirect(301, normalized + query);
    }

    next();
  });
}

/** True for HTML page requests (skips API routes and asset-like paths). */
export function isPageRequest(req: Request): boolean {
  if (req.method !== "GET" && req.method !== "HEAD") return false;
  if (req.path.startsWith("/api")) return false;
  if (path.extname(req.path)) return false;
  return true;
}

/** Injects rendered head and body HTML into the index.html template. */
export function injectTemplate(template: string, head: string, appHtml: string): string {
  return template.replace("<!--app-head-->", head).replace("<!--app-html-->", appHtml);
}

/**
 * When SSR fails we serve the CSR shell, but the HTTP semantics must survive:
 * - resolved 404s stay 404 and are marked noindex (never a soft-404)
 * - resolved 200s become 503 (transient error; crawlers retry, nothing gets
 *   indexed as an empty page)
 */
export function fallbackStatus(resolvedStatus: number): number {
  return resolvedStatus === 404 ? 404 : 503;
}

export function fallbackHead(resolvedStatus: number): string {
  return resolvedStatus === 404
    ? '<meta name="robots" content="noindex, nofollow" />'
    : "";
}
