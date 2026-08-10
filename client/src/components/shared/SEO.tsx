import { useContext, useEffect } from "react";
import { useLocation } from "wouter";
import { HeadContext, normalizeCanonical } from "@/lib/head";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  /** e.g. "noindex, nofollow" for 404/error pages */
  robots?: string;
  ogType?: string;
  ogImage?: string;
  /** One or more JSON-LD objects rendered as application/ld+json scripts. */
  jsonLd?: object | object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string | undefined) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (content === undefined) {
    // Only remove tags we manage dynamically (robots); leave the rest alone.
    if (key === "robots" && el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function SEO({ title, description, canonical, robots, ogType, ogImage, jsonLd }: SEOProps) {
  const [location] = useLocation();
  const fullTitle = `${title} | Kurlar`;
  const fullUrl = normalizeCanonical(canonical ?? location);
  const noindex = robots?.includes("noindex") ?? false;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : undefined;

  // During SSR, collect metadata into the head state so the server can
  // serialize it into the raw HTML response.
  const head = useContext(HeadContext);
  if (head) {
    head.state.title = fullTitle;
    head.state.description = description;
    head.state.canonical = fullUrl;
    head.state.robots = robots;
    head.state.ogType = ogType;
    head.state.ogImage = ogImage;
    head.state.jsonLd = jsonLdList;
  }

  // On the client (including SPA navigations), keep the DOM head in sync.
  useEffect(() => {
    document.title = fullTitle;

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("property", "og:type", ogType ?? "website");
    if (ogImage) upsertMeta("property", "og:image", ogImage);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (noindex) {
      linkCanonical?.remove();
      document.querySelector('meta[property="og:url"]')?.remove();
    } else {
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", fullUrl);
      upsertMeta("property", "og:url", fullUrl);
    }

    // JSON-LD scripts managed by this component.
    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((el) => el.remove());
    for (const obj of jsonLdList ?? []) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(obj).replace(/</g, "\\u003c");
      document.head.appendChild(script);
    }
  }, [fullTitle, description, fullUrl, robots, ogType, ogImage, noindex, JSON.stringify(jsonLdList)]);

  return null;
}
