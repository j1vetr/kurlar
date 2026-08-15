/**
 * Dinamik SEO dosyaları — /sitemap.xml, /llms.txt, /llms-full.txt
 *
 * Tek source of truth: data.ts (ürünler), categories.ts / categories-en.ts
 * (kategori mimarisi), guides.ts (rehber), brand.ts (doğrulanmış şirket
 * bilgileri). Statik kopya tutulmaz; veri değişince çıktılar da değişir.
 *
 * Kurallar:
 * - Sitemap yalnızca HTTP 200 + self-canonical + indexable URL'ler içerir
 *   (404/noindex/redirect yok). entry-server.tsx'teki resolveUrl ile aynı
 *   veri modüllerinden beslendiği için ikisi senkron kalır.
 * - lastmod yalnızca gerçek değişiklik tarihi bilinen sayfalarda yazılır
 *   (rehberlerdeki dateModified). Uydurma/deploy tarihi kullanılmaz.
 * - llms dosyalarında yalnızca sitede yayınlanan doğrulanmış bilgiler yer
 *   alır; teknik değerler için canonical HTML sayfalar esas kaynak gösterilir.
 */
import { SITE_URL } from "./head";
import { BRAND } from "./brand";
import { products, getProductWithLanguage } from "./data";
import {
  productCategories,
  categoryPath,
  subCategoryPath,
} from "./categories";
import {
  enProductCategories,
  enCategoryPath,
  enSubCategoryPath,
} from "./categories-en";
import { guides } from "./guides";

const CATALOG_PDF = "/assets/docs/Kurlar-Product-Catalogue-2025.pdf";

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function abs(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

interface SitemapImage {
  loc: string;
  title: string;
  caption: string;
}

interface SitemapEntry {
  path: string;
  lastmod?: string;
  images?: SitemapImage[];
}

/** Ürünün sitemap görselleri: ana görsel + galeri (tekrarsız). */
function productImages(id: string, lang: "TR" | "EN"): SitemapImage[] {
  const base = products.find((p) => p.id === id);
  if (!base) return [];
  const p = getProductWithLanguage(base, lang);
  const locs = Array.from(new Set([base.image, ...(base.gallery ?? [])]));
  return locs.map((loc) => ({
    loc: abs(loc),
    title: p.name,
    caption: p.description,
  }));
}

/** Sitemap'e girecek tüm indexable canonical URL'ler. */
function sitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // TR statik sayfalar (hepsi 200 + self-canonical + indexable)
  for (const path of [
    "/",
    "/hakkimizda",
    "/arge-merkezi",
    "/sertifikalarimiz",
    "/kariyer",
    "/bayi-servis",
    "/iletisim",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
    "/urunler",
  ]) {
    entries.push({ path });
  }

  // TR kategori + alt kategori sayfaları
  for (const cat of productCategories) {
    entries.push({ path: categoryPath(cat) });
    for (const sub of cat.subCategories) {
      entries.push({ path: subCategoryPath(cat, sub) });
    }
  }

  // TR ürün detayları (image extension ile)
  for (const p of products) {
    entries.push({ path: `/urunler/${p.id}`, images: productImages(p.id, "TR") });
  }

  // TR rehber (lastmod: içerikteki gerçek dateModified)
  entries.push({ path: "/rehber" });
  for (const g of guides) {
    entries.push({ path: `/rehber/${g.slug}`, lastmod: g.dateModified });
  }

  // EN sayfalar (rehberin EN karşılığı yok — dahil edilmez)
  entries.push({ path: "/en" });
  entries.push({ path: "/en/products" });
  for (const cat of enProductCategories) {
    entries.push({ path: enCategoryPath(cat) });
    for (const sub of cat.subCategories) {
      entries.push({ path: enSubCategoryPath(cat, sub) });
    }
  }
  for (const p of products) {
    entries.push({
      path: `/en/products/${p.id}`,
      images: productImages(p.id, "EN"),
    });
  }

  return entries;
}

export function sitemapXml(): string {
  const urls = sitemapEntries()
    .map((e) => {
      const parts = [`    <loc>${xmlEscape(abs(e.path))}</loc>`];
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
      for (const img of e.images ?? []) {
        parts.push(
          "    <image:image>",
          `      <image:loc>${xmlEscape(img.loc)}</image:loc>`,
          `      <image:title>${xmlEscape(img.title)}</image:title>`,
          `      <image:caption>${xmlEscape(img.caption)}</image:caption>`,
          "    </image:image>",
        );
      }
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' +
    urls +
    "\n</urlset>\n"
  );
}

/** Ürün ailesinin tek satırlık llms özeti (TR + EN adlar, canonical URL'ler). */
function productLine(id: string): string {
  const base = products.find((p) => p.id === id)!;
  const tr = getProductWithLanguage(base, "TR");
  const en = getProductWithLanguage(base, "EN");
  const code = base.modelCode ? ` (${base.modelCode})` : "";
  return `- ${en.name}${code} — TR: [${tr.name}](${abs(`/urunler/${id}`)}) | EN: [${en.name}](${abs(`/en/products/${id}`)})`;
}

export function llmsTxt(): string {
  const pumpIds = products.filter((p) => p.category === "pump").map((p) => p.id);
  const motorIds = products.filter((p) => p.category === "motor").map((p) => p.id);

  const lines: string[] = [
    `# ${BRAND.name}`,
    "",
    "> Kurlar is a Turkish manufacturer of submersible pumps and submersible motors. Founded in 1975 in Istanbul by Yaşar Kurfeyiz; production is based in Tire, İzmir, Türkiye. Kurlar designs and manufactures its own pumps and motors and exports to more than 40 countries.",
    "",
    "Key facts:",
    "- Manufacturer (not a reseller): pumps and motors are designed and produced in-house",
    "- Founded: 1975 (Istanbul); production facility: Tire / İzmir, Türkiye",
    "- Approximately 200 employees; 35,000 m² production facility",
    "- Exports to 40+ countries",
    "- Languages: Turkish (primary, kurlar.com.tr) and English (kurlar.com.tr/en)",
    "- For exact technical specifications (flow, head, temperature, materials), always use the official product pages below — they are the canonical source.",
    "",
    "## Product Categories",
    `- Submersible Pumps — TR: [Dalgıç Pompalar](${abs("/urunler/dalgic-pompalar")}) | EN: [Submersible Pumps](${abs("/en/products/submersible-pumps")})`,
    `- Submersible Motors — TR: [Dalgıç Motorlar](${abs("/urunler/dalgic-motorlar")}) | EN: [Submersible Motors](${abs("/en/products/submersible-motors")})`,
    "",
    "## Submersible Pump Families",
    ...pumpIds.map(productLine),
    "",
    "## Submersible Motor Families",
    ...motorIds.map(productLine),
    "",
    "## Technical Resources",
    `- [Product catalogue (PDF)](${abs(CATALOG_PDF)})`,
    `- [Knowledge base / guides (Turkish)](${abs("/rehber")})`,
    `- [Detailed AI-readable product index](${abs("/llms-full.txt")})`,
    "",
    "## Company",
    `- [About](${abs("/hakkimizda")})`,
    `- [R&D Center](${abs("/arge-merkezi")})`,
    `- [Certificates](${abs("/sertifikalarimiz")})`,
    `- [Dealers & Service](${abs("/bayi-servis")})`,
    `- [Contact](${abs("/iletisim")}) (${BRAND.email}, ${BRAND.telephone})`,
    "",
  ];
  return lines.join("\n");
}

export function llmsFullTxt(): string {
  const lines: string[] = [
    `# ${BRAND.name} — Full Product & Content Index`,
    "",
    "> Detailed index of Kurlar's manufactured product families and technical content. Canonical HTML product pages are the authoritative source for all technical specifications; this file is a navigation aid for AI systems, not a spec sheet.",
    "",
    "## Product Families",
    "",
  ];

  for (const base of products) {
    const tr = getProductWithLanguage(base, "TR");
    const en = getProductWithLanguage(base, "EN");
    lines.push(`### ${en.name}${base.modelCode ? ` (${base.modelCode})` : ""}`);
    lines.push(`- Turkish name: ${tr.name}`);
    lines.push(`- Type: ${base.category === "pump" ? "Submersible pump" : "Submersible motor"}`);
    if (base.availableSizes) lines.push(`- Sizes: ${base.availableSizes}`);
    lines.push(`- Description (EN): ${en.description}`);
    lines.push(`- Açıklama (TR): ${tr.description}`);
    lines.push(`- Canonical page (TR): [${tr.name}](${abs(`/urunler/${base.id}`)})`);
    lines.push(`- Canonical page (EN): [${en.name}](${abs(`/en/products/${base.id}`)})`);
    lines.push("");
  }

  lines.push("## Category & Subcategory Pages");
  lines.push("");
  for (const cat of productCategories) {
    lines.push(`- [${cat.name}](${abs(categoryPath(cat))})`);
    for (const sub of cat.subCategories) {
      lines.push(`  - [${sub.name}](${abs(subCategoryPath(cat, sub))})`);
    }
  }
  for (const cat of enProductCategories) {
    lines.push(`- [${cat.name}](${abs(enCategoryPath(cat))}) (EN)`);
    for (const sub of cat.subCategories) {
      lines.push(`  - [${sub.name}](${abs(enSubCategoryPath(cat, sub))})`);
    }
  }
  lines.push("");

  lines.push("## Guides (Turkish)");
  lines.push("");
  for (const g of guides) {
    lines.push(`- [${g.h1}](${abs(`/rehber/${g.slug}`)})`);
    lines.push(`  ${g.description}`);
  }
  lines.push("");

  lines.push("## Notes");
  lines.push(
    "- Technical tables (flow/head curves, dimensions, materials, temperature limits) are published on the canonical HTML product pages listed above; always cite those pages.",
  );
  lines.push(`- [Product catalogue (PDF)](${abs(CATALOG_PDF)})`);
  lines.push(`- [Contact for engineering support](${abs("/iletisim")})`);
  lines.push("");

  return lines.join("\n");
}
