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
      res
        .status(status)
        .set({ "Content-Type": "text/html" })
        .end(injectTemplate(template, head, html, lang));
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
