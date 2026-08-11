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
  categoryPath,
  subCategoryPath,
  productCategories,
  type CategoryDef,
  type SubCategoryDef,
} from "@/lib/categories";
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
  const segments = location.split("?")[0].split("/").filter(Boolean);
  // /urunler/<catSlug>[/<subSlug>]
  const catSlug = segments[1];
  const subSlug = segments[2];

  if (subSlug) {
    const match = getSubCategory(catSlug, subSlug);
    if (!match) return <NotFound />;
    return <SubCategoryView category={match.category} sub={match.sub} />;
  }

  const category = getCategoryBySlug(catSlug);
  if (!category) return <NotFound />;
  return <CategoryView category={category} />;
}

function collectionJsonLd(name: string, description: string, path: string, productIds: string[]) {
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
        url: normalizeCanonical(`/urunler/${id}`),
      })),
    },
  };
}

function ContactCta({ otherCategory }: { otherCategory?: CategoryDef }) {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Projeniz için doğru ürünü birlikte seçelim
            </h2>
            <p className="text-slate-400 max-w-xl">
              Kuyu çapı, debi ve basma yüksekliği bilgilerinizi iletin; teknik ekibimiz
              uygulamanıza uygun modeli önersin.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/iletisim">
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2 px-6 py-6 text-base">
                <Phone className="w-4 h-4" /> Teklif ve Teknik Destek
              </Button>
            </Link>
            <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-white hover:text-slate-900 gap-2 px-6 py-6 text-base">
                <FileText className="w-4 h-4" /> 2025 Ürün Kataloğu (PDF)
              </Button>
            </a>
            {otherCategory && (
              <Link href={categoryPath(otherCategory)}>
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

function FaqSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-10 text-center">
          Sık Sorulan Sorular
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

function CategoryView({ category }: { category: CategoryDef }) {
  const path = categoryPath(category);
  const otherCategory = productCategories.find((c) => c.slug !== category.slug);
  const categoryProducts = products.filter((p) => p.category === category.categoryKey);

  const crumbs: Crumb[] = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünler", href: "/urunler" },
    { name: category.name },
  ];

  return (
    <Layout>
      <SEO
        title={category.title}
        description={category.description}
        canonical={`https://kurlar.com.tr${path}`}
        jsonLd={[
          collectionJsonLd(
            category.name,
            category.description,
            path,
            categoryProducts.map((p) => p.id),
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
              {category.name} Serileri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.subCategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={subCategoryPath(category, sub)}
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

      <FaqSection faqs={category.faqs} />
      <ContactCta otherCategory={otherCategory} />
    </Layout>
  );
}

function SubCategoryView({ category, sub }: { category: CategoryDef; sub: SubCategoryDef }) {
  const path = subCategoryPath(category, sub);
  const subProducts = products.filter((p) => p.id === sub.productId);
  const siblings = category.subCategories.filter((s) => s.slug !== sub.slug);

  const crumbs: Crumb[] = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünler", href: "/urunler" },
    { name: category.name, href: categoryPath(category) },
    { name: sub.name },
  ];

  return (
    <Layout>
      <SEO
        title={sub.title}
        description={sub.description}
        canonical={`https://kurlar.com.tr${path}`}
        jsonLd={[
          collectionJsonLd(sub.name, sub.description, path, subProducts.map((p) => p.id)),
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
                Teknik Özellikler
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
                <Link href={`/urunler/${sub.productId}`}>
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                    Ürün Detayı ve Teknik Tablolar <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href={categoryPath(category)}>
                  <Button variant="outline" className="gap-2">
                    Tüm {category.name}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Kardeş alt kategoriler */}
          <div className="mt-20">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Diğer {category.name} Serileri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={subCategoryPath(category, s)}
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

      <ContactCta otherCategory={productCategories.find((c) => c.slug !== category.slug)} />
    </Layout>
  );
}
