import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from "@/components/shared/Breadcrumbs";
import { guides } from "@/lib/guides";
import { normalizeCanonical } from "@/lib/head";
import { Link } from "wouter";
import { ArrowRight, BookOpen } from "lucide-react";

/**
 * /rehber — Bilgi Merkezi index sayfası (TR-only).
 * Tüm rehber içerikleri SSR HTML'inde görünür şekilde listelenir.
 */
export default function GuideIndex() {
  const path = "/rehber";
  const crumbs: Crumb[] = [{ name: "Ana Sayfa", href: "/" }, { name: "Rehber" }];

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dalgıç Pompa ve Dalgıç Motor Rehberi",
    description:
      "Dalgıç pompa ve dalgıç motor seçimi, çalışma prensibi ve teknik kavramlar üzerine üretici rehberleri.",
    url: normalizeCanonical(path),
    inLanguage: "tr-TR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: normalizeCanonical(`/rehber/${g.slug}`),
        name: g.h1,
      })),
    },
  };

  return (
    <Layout>
      <SEO
        title="Dalgıç Pompa & Dalgıç Motor Rehberi"
        description="Dalgıç pompa nedir, nasıl seçilir? Dalgıç motor tipleri, NEMA standardı, debi ve basma yüksekliği... Üretici Kurlar'dan teknik rehberler."
        canonical={`https://kurlar.com.tr${path}`}
        jsonLd={[collectionJsonLd, breadcrumbJsonLd(crumbs, path)]}
      />

      {/* Hero */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Breadcrumbs items={crumbs} variant="dark" className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Dalgıç Pompa & Dalgıç Motor Rehberi
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            1975'ten bu yana dalgıç pompa ve dalgıç motor üreten Kurlar'ın teknik ekibinden;
            seçim kriterleri, çalışma prensipleri ve temel kavramlar üzerine rehber içerikler.
          </p>
        </div>
      </div>

      {/* Rehber listesi */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/rehber/${g.slug}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all flex flex-col"
              >
                <BookOpen className="w-6 h-6 text-primary mb-4" />
                <h2 className="font-heading font-bold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2">
                  {g.h1}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{g.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Rehberi Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          {/* Ticari kategorilere doğal geçiş */}
          <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">
              Ürünlerimizi İnceleyin
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              Rehberlerde anlatılan seriler, İzmir Tire'deki tesislerimizde üretilmektedir.
              Uygulamanıza uygun modeli kategori sayfalarından inceleyebilirsiniz.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/urunler/dalgic-pompalar" className="inline-flex items-center gap-2 bg-primary text-white font-medium rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Dalgıç Pompa Modelleri <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/urunler/dalgic-motorlar" className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-medium rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors">
                Dalgıç Motor Modelleri <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
