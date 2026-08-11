import { lazyWithPreload } from "@/lib/lazy-preload";

/**
 * Central page registry. Pages are code-split on the client (React.lazy
 * under the hood) and preloaded on the server so SSR renders synchronously.
 */
export const pages = {
  Home: lazyWithPreload(() => import("@/pages/Home")),
  Products: lazyWithPreload(() => import("@/pages/Products")),
  CategoryPage: lazyWithPreload(() => import("@/pages/CategoryPage")),
  ProductDetail: lazyWithPreload(() => import("@/pages/ProductDetail")),
  Dealers: lazyWithPreload(() => import("@/pages/Dealers")),
  Contact: lazyWithPreload(() => import("@/pages/Contact")),
  About: lazyWithPreload(() => import("@/pages/About")),
  RAndD: lazyWithPreload(() => import("@/pages/RAndD")),
  Certificates: lazyWithPreload(() => import("@/pages/Certificates")),
  Careers: lazyWithPreload(() => import("@/pages/Careers")),
  GuideIndex: lazyWithPreload(() => import("@/pages/GuideIndex")),
  GuideDetail: lazyWithPreload(() => import("@/pages/GuideDetail")),
  PrivacyPolicy: lazyWithPreload(() => import("@/pages/PrivacyPolicy")),
  CookiePolicy: lazyWithPreload(() => import("@/pages/CookiePolicy")),
  NotFound: lazyWithPreload(() => import("@/pages/not-found")),
};

/** Preloads every page module so SSR renders without suspending. */
export async function preloadAllPages(): Promise<void> {
  await Promise.all(Object.values(pages).map((page) => page.preload()));
}
