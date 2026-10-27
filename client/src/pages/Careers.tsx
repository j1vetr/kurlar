import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { useLanguage } from "@/lib/i18n";
import { getProductWithLanguage, products } from "@/lib/data";
import { productPath } from "@/lib/locale";
import { imageDims } from "@/lib/product-seo";
import { ArrowDown, ArrowRight, Check, ChevronDown, MapPin, MoveUpRight, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Careers() {
  const { t, language } = useLanguage();
  const isEnglish = language === "EN";
  const featuredProducts = products
    .filter((product) => ["kp", "km", "kpd"].includes(product.id))
    .map((product) => getProductWithLanguage(product, language));

  const positions = [
    {
      id: "winding",
      number: "01",
      title: t("careers.pos.winding.title"),
      team: t("careers.team.production"),
      description: t("careers.pos.winding.desc"),
      requirements: [
        t("careers.req.winding.1"),
        t("careers.req.winding.2"),
        t("careers.req.winding.3"),
        t("careers.req.winding.4"),
        t("careers.req.winding.5"),
      ],
    },
    {
      id: "cnc",
      number: "02",
      title: t("careers.pos.cnc.title"),
      team: t("careers.team.machining"),
      description: t("careers.pos.cnc.desc"),
      requirements: [
        t("careers.req.cnc.1"),
        t("careers.req.cnc.2"),
        t("careers.req.cnc.3"),
        t("careers.req.cnc.4"),
        t("careers.req.cnc.5"),
      ],
    },
    {
      id: "assembly",
      number: "03",
      title: t("careers.pos.assembly.title"),
      team: t("careers.team.production"),
      description: t("careers.pos.assembly.desc"),
      requirements: [
        t("careers.req.assembly.1"),
        t("careers.req.assembly.2"),
        t("careers.req.assembly.3"),
        t("careers.req.assembly.4"),
        t("careers.req.assembly.5"),
      ],
    },
  ];

  const benefits = [
    {
      title: t("careers.benefits.team.title"),
      desc: t("careers.benefits.team.desc"),
    },
    {
      title: t("careers.benefits.dev.title"),
      desc: t("careers.benefits.dev.desc"),
    },
    {
      title: t("careers.benefits.tech.title"),
      desc: t("careers.benefits.tech.desc"),
    },
    {
      title: t("careers.benefits.social.title"),
      desc: t("careers.benefits.social.desc"),
    },
  ];

  return (
    <Layout>
      <SEO
        title={t("seo.careers.title")}
        description={t("seo.careers.desc")}
        canonical="https://kurlar.com.tr/kariyer"
      />

      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-white text-slate-900">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 49.9%, rgba(214,222,232,.28) 50%, transparent 50.1%), linear-gradient(rgba(214,222,232,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(214,222,232,.2) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 64px 64px, 64px 64px",
            maskImage: "linear-gradient(90deg, transparent, black 42%, black)",
          }}
        />
        <div className="container relative mx-auto px-5 pb-12 pt-10 md:px-8 md:pb-20 md:pt-16">
          <div className="mb-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary md:mb-12">
            <span className="h-px w-8 bg-primary" />
            <span>{t("careers.eyebrow")}</span>
          </div>
          <div className="grid items-center gap-8 md:grid-cols-[0.96fr_1.04fr] md:gap-7 lg:gap-12">
            <div className="min-w-0">
              <h1 className="max-w-[12ch] text-balance font-heading text-[clamp(2.6rem,5.1vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-primary">
                {t("careers.title")}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:mt-7 md:text-lg md:leading-8">
                {t("careers.subtitle")}
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#positions"
                  className="inline-flex min-h-12 items-center justify-center gap-4 bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {t("careers.cta")}
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <span className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  {t("careers.location")}
                </span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[600px]">
              <div aria-hidden="true" className="absolute inset-x-0 top-[14%] h-[58%] border-y border-blue-100/80 bg-[linear-gradient(90deg,transparent_49.8%,rgba(36,52,116,.07)_50%,transparent_50.2%)]" />
              <div className="relative grid grid-cols-3 items-end gap-2 sm:gap-3">
                {featuredProducts.map((product, index) => {
                  const image = product.image.replace(/\.webp$/, "-card.webp");
                  const dimensions = imageDims(product.image);
                  const featured = index === 1;
                  return (
                    <Link
                      key={product.id}
                      href={productPath(product.id, isEnglish)}
                      aria-label={product.name}
                      className={`group relative flex min-w-0 flex-col items-center justify-end overflow-hidden border border-blue-100 bg-white px-2 pb-3 pt-4 shadow-[0_12px_32px_rgba(36,52,116,0.07)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${featured ? "h-[280px] sm:h-[360px]" : "h-[238px] sm:h-[310px]"}`}
                    >
                      <span className="absolute inset-x-0 top-0 h-1 bg-primary/80" aria-hidden="true" />
                      <div className="flex h-[76%] w-full items-center justify-center">
                        <img
                          src={image}
                          alt=""
                          width={dimensions ? Math.round(dimensions.width * 620 / dimensions.height) : undefined}
                          height={620}
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="mt-2 line-clamp-2 min-h-8 w-full text-center text-[10px] font-semibold leading-4 text-[#243474] sm:text-xs">
                        {product.name}
                      </span>
                      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
                        {product.modelCode ?? product.id.toUpperCase()}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-end justify-between border-t border-slate-200 pt-5 md:mt-14">
            <p className="max-w-sm text-xs leading-5 text-slate-500 md:text-sm">
              {t("careers.hero_note")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto grid gap-10 px-5 py-16 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:px-8 md:py-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-7 bg-primary" />
              {t("careers.about.kicker")}
            </p>
            <h2 className="max-w-sm font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#172747] md:text-4xl">
              {t("careers.why_us")}
            </h2>
            <div className="mt-8 overflow-hidden rounded-lg border border-slate-100 bg-white">
              <img
                src="/assets/gallery/kurlarsld.webp"
                srcSet="/assets/gallery/kurlarsld-sm.webp 640w, /assets/gallery/kurlarsld.webp 960w"
                sizes="(min-width: 768px) 35vw, calc(100vw - 40px)"
                alt={t("careers.factory_image_alt")}
                width={960}
                height={540}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8 text-[#46536a] md:text-xl md:leading-9">
              {t("careers.about.copy")}
            </p>
            <div className="mt-10 grid gap-x-8 border-t border-slate-200 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="border-b border-slate-200 py-6">
                  <div className="mb-4">
                    <Wrench className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#172747]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#59657a]">{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="positions" className="scroll-mt-24 border-y border-slate-100 bg-slate-50">
        <div className="container mx-auto px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 flex flex-col gap-6 border-b border-[#c9ced1] pb-7 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-7 bg-primary" />
                {t("careers.positions_kicker")}
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[#172747] md:text-5xl">
                {t("careers.positions_title")}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-[#59657a]">{t("careers.positions_desc")}</p>
            </div>
            <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-[#6b7480]">
              {positions.length} / {t("careers.position_available")}
            </span>
          </div>

          <div className="divide-y divide-[#c9ced1] border-y border-[#c9ced1]">
            {positions.map((position) => (
              <article key={position.id} className="grid gap-6 py-7 md:grid-cols-[5rem_1fr_auto] md:gap-8 md:py-9">
                <span className="font-mono text-sm tracking-widest text-primary">{position.number}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] text-[#172747] md:text-[2rem]">
                      {position.title}
                    </h3>
                    <span className="border border-[#b8c0c4] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#4f5c6d]">
                      {position.team}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[#59657a] md:text-base md:leading-7">
                    {position.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#5b6675]">
                    <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{t("careers.location")}</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{t("careers.full_time")}</span>
                  </div>
                  <details className="career-details group mt-5 max-w-3xl border-t border-[#c9ced1] pt-4">
                    <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#172747] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <span>{t("careers.requirements")}</span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="grid gap-x-8 gap-y-3 pt-4 sm:grid-cols-2">
                      {position.requirements.map((requirement) => (
                        <li key={requirement} className="flex items-start gap-3 text-sm leading-6 text-[#59657a]">
                          <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
                <div className="flex items-center md:pl-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-11 w-full items-center justify-between gap-6 bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary md:w-auto"
                  >
                    {t("careers.apply")}
                    <MoveUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-[#677181]">{t("careers.contact_note")}</p>
        </div>
      </section>

      <section className="bg-white text-primary">
        <div className="container mx-auto flex flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">{t("careers.closing.kicker")}</p>
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.035em] md:text-3xl">{t("careers.closing.title")}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{t("careers.closing.copy")}</p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-5 border border-primary/25 px-5 text-sm font-bold text-primary transition-colors hover:border-primary hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {t("careers.closing.action")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
