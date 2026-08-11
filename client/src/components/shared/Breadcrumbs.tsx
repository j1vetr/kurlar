import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { normalizeCanonical } from "@/lib/head";

export interface Crumb {
  name: string;
  /** Verilmezse aktif (son) sayfa olarak işaretlenir. */
  href?: string;
}

/**
 * Görünür breadcrumb navigasyonu. JSON-LD karşılığı için breadcrumbJsonLd
 * helper'ı ile birlikte kullanılır (SEO bileşenine jsonLd olarak verilir).
 */
export function Breadcrumbs({
  items,
  variant = "dark",
  className,
}: {
  items: Crumb[];
  /** dark: koyu zemin üzerinde açık metin; light: açık zemin üzerinde koyu metin */
  variant?: "dark" | "light";
  className?: string;
}) {
  const base =
    variant === "dark"
      ? { text: "text-slate-400", link: "hover:text-white", current: "text-white", sep: "text-slate-600" }
      : { text: "text-slate-500", link: "hover:text-primary", current: "text-slate-900 font-bold", sep: "text-slate-300" };

  return (
    <nav aria-label="breadcrumb" className={cn("flex justify-center", className)}>
      <ol className={cn("flex flex-wrap items-center justify-center gap-2 text-sm font-medium", base.text)}>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className={cn("w-4 h-4", base.sep)} />}
            {item.href ? (
              <Link href={item.href} className={cn("transition-colors flex items-center gap-1", base.link)}>
                {i === 0 && <Home className="w-3.5 h-3.5" />}
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className={base.current}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Görünür breadcrumb ile birebir aynı zinciri BreadcrumbList JSON-LD'ye çevirir. */
export function breadcrumbJsonLd(items: Crumb[], currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: normalizeCanonical(item.href ?? currentPath),
    })),
  };
}
