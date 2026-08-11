import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/shared/ProductCard";
import { SEO } from "@/components/shared/SEO";
import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from "@/components/shared/Breadcrumbs";
import NotFound from "@/pages/not-found";
import { products } from "@/lib/data";
import { normalizeCanonical } from "@/lib/head";
import {
  getCategoryBySlug,
  getSubCategory,
  type CategoryDef,
  type SubCategoryDef,
} from "@/lib/categories";
import { getEnCategoryBySlug, getEnSubCategory } from "@/lib/categories-en";
import {
  isEnPath,
  homePath,
  productsPath,
  productPath,
  localeCategories,
  localeCategoryPath,
  localeSubCategoryPath,
  hreflangFor,
} from "@/lib/locale";
import { Link, useLocation } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * TR ticari kategori ve alt kategori sayfaları.
 * /urunler/dalgic-pompalar, /urunler/dalgic-motorlar ve alt kategorileri.
 * İçerik tamamen SSR HTML'inde görünür (kategoriler client/src/lib/categories.ts).
 */
export default function CategoryPage() {
  const [location] = useLocation();
  const clean = location.split("?")[0];
  const en = isEnPath(clean);
  const segments = clean.split("/").filter(Boolean);
  // TR: /urunler/<catSlug>[/<subSlug>] — EN: /en/products/<catSlug>[/<subSlug>]
  const catSlug = en ? segments[2] : segments[1];
  const subSlug = en ? segments[3] : segments[2];

  if (subSlug) {
    const match = en ? getEnSubCategory(catSlug, subSlug) : getSubCategory(catSlug, subSlug);
    if (!match) return <NotFound />;
    return <SubCategoryView category={match.category} sub={match.sub} en={en} />;
  }

  const category = en ? getEnCategoryBySlug(catSlug) : getCategoryBySlug(catSlug);
  if (!category) return <NotFound />;
  return <CategoryView category={category} en={en} />;
}

/** Sayfa içi arayüz metinleri (içerik değil) — TR/EN. */
function uiLabels(en: boolean) {
  return en
    ? {
        home: "Home",
        products: "Products",
        faqTitle: "Frequently Asked Questions",
        seriesSuffix: "Series",
        otherSeriesPrefix: "Other",
        techTitle: "Technical Features",
        productDetailBtn: "Product Details & Technical Tables",
        allPrefix: "All",
        ctaTitle: "Let's choose the right product for your project",
        ctaDesc:
          "Send us your well diameter, flow rate and head requirements; our engineering team will recommend the right model for your application.",
        ctaBtn: "Quote & Technical Support",
        catalogueBtn: "2025 Product Catalogue (PDF)",
      }
    : {
        home: "Ana Sayfa",
        products: "Ürünler",
        faqTitle: "Sık Sorulan Sorular",
        seriesSuffix: "Serileri",
        otherSeriesPrefix: "Diğer",
        techTitle: "Teknik Özellikler",
        productDetailBtn: "Ürün Detayı ve Teknik Tablolar",
        allPrefix: "Tüm",
        ctaTitle: "Projeniz için doğru ürünü birlikte seçelim",
        ctaDesc:
          "Kuyu çapı, debi ve basma yüksekliği bilgilerinizi iletin; teknik ekibimiz uygulamanıza uygun modeli önersin.",
        ctaBtn: "Teklif ve Teknik Destek",
        catalogueBtn: "2025 Ürün Kataloğu (PDF)",
      };
}

function collectionJsonLd(
  name: string,
  description: string,
  path: string,
  productIds: string[],
  en: boolean,
) {
  const url = normalizeCanonical(path);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: productIds.map((id, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: normalizeCanonical(productPath(id, en)),
      })),
    },
  };
}

function ContactCta({ otherCategory, en }: { otherCategory?: CategoryDef; en: boolean }) {
  const L = uiLabels(en);
  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              {L.ctaTitle}
            </h2>
            <p className="text-slate-400 max-w-xl">
              {L.ctaDesc}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/iletisim">
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2 px-6 py-6 text-base">
                <Phone className="w-4 h-4" /> {L.ctaBtn}
              </Button>
            </Link>
            <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-white hover:text-slate-900 gap-2 px-6 py-6 text-base">
                <FileText className="w-4 h-4" /> {L.catalogueBtn}
              </Button>
            </a>
            {otherCategory && (
              <Link href={localeCategoryPath(otherCategory, en)}>
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 gap-2 px-6 py-6 text-base">
                  {otherCategory.name} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ faqs, en }: { faqs: { question: string; answer: string }[]; en: boolean }) {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-10 text-center">
          {uiLabels(en).faqTitle}
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryView({ category, en }: { category: CategoryDef; en: boolean }) {
  const L = uiLabels(en);
  const path = localeCategoryPath(category, en);
  const otherCategory = localeCategories(en).find((c) => c.slug !== category.slug);
  const categoryProducts = products.filter((p) => p.category === category.categoryKey);

  const crumbs: Crumb[] = [
    { name: L.home, href: homePath(en) },
    { name: L.products, href: productsPath(en) },
    { name: category.name },
  ];

  return (
    <Layout>
      <SEO
        title={category.title}
        description={category.description}
        canonical={`https://kurlar.com.tr${path}`}
        alternates={hreflangFor(path)}
        ogLocale={en ? "en_US" : "tr_TR"}
        jsonLd={[
          collectionJsonLd(
            category.name,
            category.description,
            path,
            categoryProducts.map((p) => p.id),
            en,
          ),
          breadcrumbJsonLd(crumbs, path),
        ]}
      />

      {/* Hero */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Breadcrumbs items={crumbs} variant="dark" className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {category.name}
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            {category.intro}
          </p>
        </div>
      </div>

      {/* Ürün kartları (üstte) */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Alt kategoriler */}
          <div className="mt-20">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
              {category.name} {L.seriesSuffix}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.subCategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={localeSubCategoryPath(category, sub, en)}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{sub.highlights[0]} · {sub.highlights[1]}</p>
                  </div>
                  <div className="w-9 h-9 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teknik içerik */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {category.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-slate-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={category.faqs} en={en} />
      <ContactCta otherCategory={otherCategory} en={en} />
    </Layout>
  );
}

function SubCategoryView({
  category,
  sub,
  en,
}: {
  category: CategoryDef;
  sub: SubCategoryDef;
  en: boolean;
}) {
  const L = uiLabels(en);
  const path = localeSubCategoryPath(category, sub, en);
  const subProducts = products.filter((p) => p.id === sub.productId);
  const siblings = category.subCategories.filter((s) => s.slug !== sub.slug);

  const crumbs: Crumb[] = [
    { name: L.home, href: homePath(en) },
    { name: L.products, href: productsPath(en) },
    { name: category.name, href: localeCategoryPath(category, en) },
    { name: sub.name },
  ];

  return (
    <Layout>
      <SEO
        title={sub.title}
        description={sub.description}
        canonical={`https://kurlar.com.tr${path}`}
        alternates={hreflangFor(path)}
        ogLocale={en ? "en_US" : "tr_TR"}
        jsonLd={[
          collectionJsonLd(sub.name, sub.description, path, subProducts.map((p) => p.id), en),
          breadcrumbJsonLd(crumbs, path),
        ]}
      />

      {/* Hero */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Breadcrumbs items={crumbs} variant="dark" className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{sub.name}</h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">{sub.intro}</p>
        </div>
      </div>

      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Ürün kartı */}
            <div className="max-w-md mx-auto w-full">
              {subProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Teknik vurgular */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                {L.techTitle}
              </h2>
              <ul className="space-y-4 mb-10">
                {sub.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href={productPath(sub.productId, en)}>
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                    {L.productDetailBtn} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href={localeCategoryPath(category, en)}>
                  <Button variant="outline" className="gap-2">
                    {L.allPrefix} {category.name}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Kardeş alt kategoriler */}
          <div className="mt-20">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              {L.otherSeriesPrefix} {category.name} {L.seriesSuffix}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={localeSubCategoryPath(category, s, en)}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <h3 className="font-heading font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sm text-slate-500">{s.highlights[0]}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactCta otherCategory={localeCategories(en).find((c) => c.slug !== category.slug)} en={en} />
    </Layout>
  );
}
