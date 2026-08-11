import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from "@/components/shared/Breadcrumbs";
import NotFound from "@/pages/not-found";
import { getGuideBySlug, guides, type GuideDef } from "@/lib/guides";
import { normalizeCanonical } from "@/lib/head";
import { BRAND, ORGANIZATION_ID } from "@/lib/brand";
import { Link, useLocation } from "wouter";
import { ArrowRight, BookOpen, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * /rehber/:slug — rehber detay sayfası (TR-only).
 * İçeriğin tamamı SSR HTML'inde görünür; Article + BreadcrumbList JSON-LD,
 * görünür FAQ olan sayfalarda ek olarak FAQPage JSON-LD üretilir.
 */
export default function GuideDetail() {
  const [location] = useLocation();
  const slug = location.split("?")[0].split("/").filter(Boolean)[1];
  const guide = slug ? getGuideBySlug(slug) : undefined;
  if (!guide) return <NotFound />;
  return <GuideView guide={guide} />;
}

function articleJsonLd(guide: GuideDef, path: string) {
  const url = normalizeCanonical(path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "tr-TR",
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

function faqJsonLd(guide: GuideDef) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (guide.faqs ?? []).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

function GuideView({ guide }: { guide: GuideDef }) {
  const path = `/rehber/${guide.slug}`;
  const crumbs: Crumb[] = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Rehber", href: "/rehber" },
    { name: guide.h1 },
  ];

  const jsonLd: object[] = [articleJsonLd(guide, path), breadcrumbJsonLd(crumbs, path)];
  if (guide.faqs && guide.faqs.length > 0) jsonLd.push(faqJsonLd(guide));

  const related = guide.relatedGuides
    .map((s) => guides.find((g) => g.slug === s))
    .filter((g): g is GuideDef => Boolean(g));

  return (
    <Layout>
      <SEO
        title={guide.title}
        description={guide.description}
        canonical={`https://kurlar.com.tr${path}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Breadcrumbs items={crumbs} variant="dark" className="mb-6" />
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
            {guide.h1}
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">{guide.intro}</p>
        </div>
      </div>

      {/* İçerik */}
      <article className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {guide.sections.map((section, i) => (
            <section key={i} className={i > 0 ? "mt-12" : undefined}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-slate-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 mt-2">
                  {section.bullets.map((b, k) => (
                    <li key={k} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-700">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Ticari kategorilere doğal linkler */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="font-heading font-bold text-lg text-slate-900 mb-4">İlgili Ürünler</h2>
            <ul className="space-y-2">
              {guide.relatedCategories.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    {link.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* Görünür FAQ (varsa) — FAQPage JSON-LD ile birebir aynı içerik */}
      {guide.faqs && guide.faqs.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-10 text-center">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-6">
              {guide.faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* İlgili rehberler */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">İlgili Rehberler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/rehber/${g.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <BookOpen className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-heading font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {g.h1}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                Uygulamanız için doğru modeli birlikte seçelim
              </h2>
              <p className="text-slate-400 max-w-xl">
                Kuyu çapı, debi ve basma yüksekliği bilgilerinizi iletin; teknik ekibimiz
                uygulamanıza uygun pompa ve motoru önersin. {BRAND.phoneDisplay}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/iletisim">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2 px-6 py-6 text-base">
                  <Phone className="w-4 h-4" /> Teklif ve Teknik Destek
                </Button>
              </Link>
              <Link href="/rehber">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 gap-2 px-6 py-6 text-base">
                  Tüm Rehberler <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
