import { SITE_URL } from "./head";
import {
  productCategories,
  categoryPath,
  subCategoryPath,
  type CategoryDef,
  type SubCategoryDef,
} from "./categories";
import {
  enProductCategories,
  enCategoryPath,
  enSubCategoryPath,
} from "./categories-en";
import { products } from "./data";

/**
 * URL-based locale helpers for the /en English architecture.
 *
 * TR pages live at unprefixed URLs (/, /urunler, ...); EN counterparts live
 * under /en (/en, /en/products, ...). Only pages that truly exist in both
 * languages form a hreflang pair — pages without a counterpart get none.
 */

export function isEnPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

/** Locale-aware home path. */
export function homePath(en: boolean): string {
  return en ? "/en" : "/";
}

/** Locale-aware products listing path. */
export function productsPath(en: boolean): string {
  return en ? "/en/products" : "/urunler";
}

/** Locale-aware product detail path. */
export function productPath(id: string, en: boolean): string {
  return en ? `/en/products/${id}` : `/urunler/${id}`;
}

/** Locale-aware category defs (same shape, different language/slugs). */
export function localeCategories(en: boolean): CategoryDef[] {
  return en ? enProductCategories : productCategories;
}

export function localeCategoryPath(cat: CategoryDef, en: boolean): string {
  return en ? enCategoryPath(cat) : categoryPath(cat);
}

export function localeSubCategoryPath(
  cat: CategoryDef,
  sub: SubCategoryDef,
  en: boolean,
): string {
  return en ? enSubCategoryPath(cat, sub) : subCategoryPath(cat, sub);
}

/**
 * TR path <-> EN path mapping for all pages that exist in both languages.
 * Categories are aligned by categoryKey, subcategories by productId.
 */
function buildPairs(): Array<[string, string]> {
  const pairs: Array<[string, string]> = [
    ["/", "/en"],
    ["/urunler", "/en/products"],
  ];
  for (const trCat of productCategories) {
    const enCat = enProductCategories.find((c) => c.categoryKey === trCat.categoryKey);
    if (!enCat) continue;
    pairs.push([categoryPath(trCat), enCategoryPath(enCat)]);
    for (const trSub of trCat.subCategories) {
      const enSub = enCat.subCategories.find((s) => s.productId === trSub.productId);
      if (enSub) {
        pairs.push([subCategoryPath(trCat, trSub), enSubCategoryPath(enCat, enSub)]);
      }
    }
  }
  for (const p of products) {
    pairs.push([`/urunler/${p.id}`, `/en/products/${p.id}`]);
  }
  return pairs;
}

const PAIRS = buildPairs();
const TR_TO_EN = new Map(PAIRS);
const EN_TO_TR = new Map(PAIRS.map(([tr, en]) => [en, tr] as [string, string]));

/** EN counterpart of a TR path, if one exists. */
export function trToEnPath(pathname: string): string | undefined {
  return TR_TO_EN.get(pathname);
}

/** TR counterpart of an EN path, if one exists. */
export function enToTrPath(pathname: string): string | undefined {
  return EN_TO_TR.get(pathname);
}

export interface HreflangPair {
  /** Absolute TR URL (hreflang tr-TR) */
  tr: string;
  /** Absolute EN URL (hreflang en + x-default) */
  en: string;
}

/**
 * Reciprocal hreflang pair for the current path (TR or EN form).
 * Returns undefined when the page has no counterpart — in that case NO
 * hreflang must be emitted at all.
 */
export function hreflangFor(pathname: string): HreflangPair | undefined {
  const clean = pathname.split("?")[0];
  let tr: string | undefined;
  let en: string | undefined;
  if (isEnPath(clean)) {
    tr = enToTrPath(clean);
    en = tr !== undefined ? clean : undefined;
  } else {
    en = trToEnPath(clean);
    tr = en !== undefined ? clean : undefined;
  }
  if (tr === undefined || en === undefined) return undefined;
  return { tr: `${SITE_URL}${tr === "/" ? "/" : tr}`, en: `${SITE_URL}${en}` };
}
