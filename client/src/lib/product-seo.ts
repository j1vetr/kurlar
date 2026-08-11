import { SITE_URL, normalizeCanonical } from "./head";
import { type Product } from "./data";
import { productPath } from "./locale";

/**
 * Ürün detay SEO yardımcıları.
 *
 * Tüm değerler yalnızca data.ts'deki GERÇEK ürün verisinden türetilir —
 * teknik değer uydurmak / tahmin etmek kesinlikle yasaktır.
 */

/**
 * Ürün görsellerinin gerçek piksel boyutları (dosyalardan okunmuştur).
 * width/height attribute'ları CLS'i önler; CSS görsel boyutu yönetmeye devam eder.
 */
export const PRODUCT_IMAGE_DIMS: Record<string, { width: number; height: number }> = {
  "/assets/products/km1.png": { width: 200, height: 1233 },
  "/assets/products/km2.png": { width: 230, height: 1274 },
  "/assets/products/km3.png": { width: 200, height: 1234 },
  "/assets/products/km41.png": { width: 330, height: 1264 },
  "/assets/products/kms11.png": { width: 211, height: 1200 },
  "/assets/products/kp1.png": { width: 700, height: 1050 },
  "/assets/products/kp2.png": { width: 400, height: 1340 },
  "/assets/products/kp3.png": { width: 400, height: 1176 },
  "/assets/products/kpd1.png": { width: 700, height: 1050 },
  "/assets/products/kpd2.png": { width: 270, height: 1236 },
  "/assets/products/kpd3.png": { width: 240, height: 1243 },
  "/assets/products/kpn41.png": { width: 500, height: 1319 },
  "/assets/products/kpn42.png": { width: 230, height: 1259 },
  "/assets/products/kpn43.png": { width: 200, height: 1238 },
  "/assets/products/ksx1.png": { width: 220, height: 1258 },
  "/assets/products/ksx2.png": { width: 250, height: 1231 },
};

/** Bilinen bir ürün görseli için width/height attribute'ları (bilinmiyorsa boş). */
export function imageDims(src: string): { width: number; height: number } | undefined {
  return PRODUCT_IMAGE_DIMS[src];
}

/** '4” | 6” | 8” | 10”' -> '4"-6"-8"-10"' (curly tırnaklar normalize edilir). */
export function compactSizes(sizes?: string): string | undefined {
  if (!sizes) return undefined;
  const parts = sizes
    .replace(/[”″]/g, '"')
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length ? parts.join("-") : undefined;
}

/**
 * Unique ürün title'ı (SEO bileşeni "| Kurlar" ekini kendisi ekler).
 * TR sayfada İngilizce para kelimesi (Submersible Pump/Motor) çap bilgisiyle
 * birlikte kullanılır; EN sayfada model + çap serisi vurgulanır.
 * Örn. TR: "HI-TEMP Dalgıç Motorlar | 6"-7"-8"-10" Submersible Motor"
 */
export function productSeoTitle(p: Product, en: boolean): string {
  const sizes = compactSizes(p.availableSizes);
  const typeEn = p.category === "pump" ? "Submersible Pump" : "Submersible Motor";
  if (en) {
    const tail = [p.modelCode, sizes, "Series"].filter(Boolean).join(" ");
    return tail ? `${p.name} | ${tail}` : p.name;
  }
  const tail = [sizes, typeEn].filter(Boolean).join(" ");
  return tail ? `${p.name} | ${tail}` : p.name;
}

/** Unique meta description: gerçek ürün açıklaması + gerçek model/çap bilgisi. */
export function productSeoDescription(p: Product, en: boolean): string {
  const base = (p.description ?? "").trim();
  const sizes = compactSizes(p.availableSizes);
  if (!p.modelCode || !sizes) return base;
  return en
    ? `${base} The ${p.modelCode} series is available in ${sizes} diameter options.`
    : `${base} ${p.modelCode} serisi ${sizes} çap seçenekleriyle sunulur.`;
}

/**
 * Product JSON-LD — yalnızca gerçek veriler. Offer/price/AggregateRating/Review
 * KESİNLİKLE eklenmez. manufacturer, Organization JSON-LD'sine (@id) referans verir.
 */
export function productJsonLd(p: Product, en: boolean): object {
  const url = normalizeCanonical(productPath(p.id, en));
  const sizes = compactSizes(p.availableSizes);
  const additionalProperty = [
    ...(sizes
      ? [{ "@type": "PropertyValue", name: en ? "Diameter" : "Çap", value: sizes }]
      : []),
    ...Object.entries(p.specs ?? {}).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value: String(value),
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: p.name,
    url,
    image: `${SITE_URL}${p.image}`,
    description: p.description,
    ...(p.modelCode ? { sku: p.modelCode, model: p.modelCode } : {}),
    brand: { "@type": "Brand", name: "Kurlar" },
    manufacturer: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Kurlar Dalgıç Pompa & Motor",
    },
    category:
      p.category === "pump"
        ? en
          ? "Submersible Pumps"
          : "Dalgıç Pompalar"
        : en
          ? "Submersible Motors"
          : "Dalgıç Motorlar",
    ...(additionalProperty.length ? { additionalProperty } : {}),
  };
}

/** Descriptive alt metni — gerçek marka/ad/model/çap bilgisinden. */
export function productImageAlt(p: Product, en: boolean): string {
  const sizes = compactSizes(p.availableSizes);
  return [
    `Kurlar ${p.name}`,
    p.modelCode ? `${p.modelCode} ${en ? "series" : "serisi"}` : undefined,
    sizes,
  ]
    .filter(Boolean)
    .join(" – ");
}
