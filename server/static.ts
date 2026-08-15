import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createRequire } from "module";
import {
  injectTemplate,
  fallbackStatus,
  fallbackHead,
  pageLang,
  sendSeoFile,
  SEO_FILE_PATHS,
} from "./ssr";

export async function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Do NOT serve index.html for "/" automatically; SSR handles pages.
  app.use(express.static(distPath, { index: false }));

  let template = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  // Render'ı engelleyen CSS isteğini ortadan kaldır: build CSS'i HTML'e inline et.
  // (Mobil Lighthouse: 27 KiB stylesheet ~400 ms render blokluyordu.)
  template = template.replace(
    /<link[^>]+rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/,
    (match, href) => {
      try {
        const css = fs.readFileSync(path.join(distPath, href), "utf-8");
        return `<style>${css}</style>`;
      } catch {
        return match;
      }
    },
  );

  const nodeRequire = createRequire(__filename);
  const entry = nodeRequire(path.resolve(__dirname, "server", "entry-server.cjs"));

  // Route bazlı modulepreload: Vite manifest'inden sayfa chunk'ı + tüm statik
  // import'ları toplanır; SSR HTML'ine eklenir (kritik istek zinciri kısalır).
  let manifest: Record<string, { file: string; imports?: string[] }> = {};
  try {
    manifest = JSON.parse(
      fs.readFileSync(path.resolve(distPath, ".vite", "manifest.json"), "utf-8"),
    );
  } catch {
    console.warn("[ssr] vite manifest bulunamadı; modulepreload devre dışı");
  }
  // Entry'nin chunk'ları HTML'de zaten script/modulepreload olarak var — tekrarı önle.
  const entryFiles = new Set<string>();
  const collect = (key: string, out: Set<string>, seen = new Set<string>()) => {
    if (seen.has(key)) return;
    seen.add(key);
    const item = manifest[key];
    if (!item) return;
    out.add(item.file);
    for (const imp of item.imports ?? []) collect(imp, out, seen);
  };
  collect("index.html", entryFiles);
  const preloadCache = new Map<string, string>();
  const preloadLinksFor = (pathname: string): string => {
    const key = entry.pageModuleFor?.(pathname);
    if (!key || !manifest[key]) return "";
    const cached = preloadCache.get(key);
    if (cached !== undefined) return cached;
    const files = new Set<string>();
    collect(key, files);
    const links = Array.from(files)
      .filter((f) => !entryFiles.has(f) && f.endsWith(".js"))
      .map((f) => `<link rel="modulepreload" crossorigin href="/${f}">`)
      .join("\n    ");
    preloadCache.set(key, links);
    return links;
  };

  // Dinamik SEO dosyaları — veri modelleriyle senkron üretim.
  app.get(SEO_FILE_PATHS, (req, res, next) => {
    if (!sendSeoFile(req.path, entry, res)) next();
  });

  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    const pathname = url.split("?")[0];

    let resolvedStatus = 200;
    try {
      const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
      const resolved = entry.resolveUrl(pathname, search);
      if (resolved.redirect) {
        return res.redirect(301, resolved.redirect);
      }
      resolvedStatus = resolved.status;

      const { html, head, status, lang } = await entry.render(url);
      const preloads = preloadLinksFor(pathname);
      const fullHead = preloads ? `${head}\n    ${preloads}` : head;
      res
        .status(status)
        .set({ "Content-Type": "text/html" })
        .end(injectTemplate(template, fullHead, html, lang));
    } catch (err) {
      // SSR must never take the site down: fall back to the CSR shell,
      // but keep honest HTTP semantics (404 stays 404, errors are 503).
      console.error("[ssr] render failed, serving CSR shell:", err);
      res
        .status(fallbackStatus(resolvedStatus))
        .set({ "Content-Type": "text/html", "Cache-Control": "no-store" })
        .end(injectTemplate(template, fallbackHead(resolvedStatus), "", pageLang(pathname)));
    }
  });
}
