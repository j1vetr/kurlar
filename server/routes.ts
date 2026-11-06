import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { CATALOG } from "../shared/catalog";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/assets/docs/Kurlar-Product-Catalogue-2025.pdf", (_req, res) => {
    res.redirect(301, CATALOG.pagePath);
  });

  app.get(CATALOG.downloadPath, (_req, res, next) => {
    const publicRoot = process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(process.cwd(), "client/public");
    res.setHeader("Cache-Control", "no-cache");
    res.download(path.join(publicRoot, CATALOG.pdfPath), CATALOG.downloadName, (err) => {
      if (err) next(err);
    });
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
