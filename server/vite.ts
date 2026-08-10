import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { injectTemplate, fallbackStatus, fallbackHead } from "./ssr";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    const pathname = url.split("?")[0];

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      template = await vite.transformIndexHtml(url, template);

      let resolvedStatus = 200;
      try {
        const entry = await vite.ssrLoadModule("/src/entry-server.tsx");

        const resolved = entry.resolveUrl(pathname);
        if (resolved.redirect) {
          return res.redirect(301, resolved.redirect);
        }
        resolvedStatus = resolved.status;

        const { html, head, status } = await entry.render(url);
        const page = injectTemplate(template, head, html);
        return res
          .status(status)
          .set({ "Content-Type": "text/html" })
          .end(page);
      } catch (ssrError) {
        // SSR must never take the site down: fall back to the CSR shell,
        // but keep honest HTTP semantics (404 stays 404, errors are 503).
        vite.ssrFixStacktrace(ssrError as Error);
        console.error("[ssr] render failed, serving CSR shell:", ssrError);
        const page = injectTemplate(template, fallbackHead(resolvedStatus), "");
        return res
          .status(fallbackStatus(resolvedStatus))
          .set({ "Content-Type": "text/html", "Cache-Control": "no-store" })
          .end(page);
      }
    } catch (e) {
      next(e);
    }
  });
}
