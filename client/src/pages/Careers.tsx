import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { useLanguage } from "@/lib/i18n";
import { ArrowDown, ArrowRight, Check, ChevronDown, MapPin, MoveUpRight, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Careers() {
  const { t } = useLanguage();

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
      index: "A",
      title: t("careers.benefits.team.title"),
      desc: t("careers.benefits.team.desc"),
    },
    {
      index: "B",
      title: t("careers.benefits.dev.title"),
      desc: t("careers.benefits.dev.desc"),
    },
    {
      index: "C",
      title: t("careers.benefits.tech.title"),
      desc: t("careers.benefits.tech.desc"),
    },
    {
      index: "D",
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

      <section className="relative isolate overflow-hidden bg-[#172747] text-[#f5f3ec]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 49.9%, rgba(214,222,232,.28) 50%, transparent 50.1%), linear-gradient(rgba(214,222,232,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(214,222,232,.2) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 64px 64px, 64px 64px",
            maskImage: "linear-gradient(90deg, transparent, black 42%, black)",
          }}
        />
        <div className="absolute -right-28 top-12 hidden h-[28rem] w-[28rem] rounded-full border border-white/10 md:block" aria-hidden="true">
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-16 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d58a5a]" />
        </div>
        <div className="container relative mx-auto px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
          <div className="mb-14 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#cbd3df] md:mb-20">
            <span className="h-px w-8 bg-[#d58a5a]" />
            <span>{t("careers.eyebrow")}</span>
          </div>
          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.8rem,7.2vw,6.4rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-[#fbf9f3]">
              {t("careers.title")}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#d0d7e1] md:mt-9 md:text-lg md:leading-8">
              {t("careers.subtitle")}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#positions"
                className="inline-flex min-h-12 items-center justify-center gap-4 bg-[#d58a5a] px-6 text-sm font-bold text-[#172747] transition-colors hover:bg-[#e4a273] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5f3ec]"
              >
                {t("careers.cta")}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="flex items-center gap-2 text-sm text-[#cbd3df]">
                <MapPin className="h-4 w-4 text-[#d58a5a]" aria-hidden="true" />
                {t("careers.location")}
              </span>
            </div>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-white/15 pt-5 md:mt-24">
            <p className="max-w-sm text-xs leading-5 text-[#b7c1d0] md:text-sm">
              {t("careers.hero_note")}
            </p>
            <span className="hidden font-mono text-xs tracking-widest text-[#b7c1d0] sm:block">KURLAR / 1975</span>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0e9]">
        <div className="container mx-auto grid gap-10 px-5 py-16 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:px-8 md:py-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#a65d37]">
              <span className="h-px w-7 bg-[#a65d37]" />
              {t("careers.about.kicker")}
            </p>
            <h2 className="max-w-sm font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#172747] md:text-4xl">
              {t("careers.why_us")}
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8 text-[#46536a] md:text-xl md:leading-9">
              {t("careers.about.copy")}
            </p>
            <div className="mt-10 grid gap-x-8 border-t border-[#d7d4cc] sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit.index} className="border-b border-[#d7d4cc] py-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.16em] text-[#a65d37]">{benefit.index}</span>
                    <Wrench className="h-4 w-4 text-[#7b8796]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#172747]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#59657a]">{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="positions" className="scroll-mt-24 bg-[#e7e8e5]">
        <div className="container mx-auto px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 flex flex-col gap-6 border-b border-[#c9ced1] pb-7 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#a65d37]">
                <span className="h-px w-7 bg-[#a65d37]" />
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
                <span className="font-mono text-sm tracking-widest text-[#a65d37]">{position.number}</span>
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
                    <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#a65d37]" aria-hidden="true" />{t("careers.location")}</span>
                    <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#a65d37]" aria-hidden="true" />{t("careers.full_time")}</span>
                  </div>
                  <details className="career-details group mt-5 max-w-3xl border-t border-[#c9ced1] pt-4">
                    <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#172747] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a65d37] [&::-webkit-details-marker]:hidden">
                      <span>{t("careers.requirements")}</span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-[#a65d37] transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="grid gap-x-8 gap-y-3 pt-4 sm:grid-cols-2">
                      {position.requirements.map((requirement) => (
                        <li key={requirement} className="flex items-start gap-3 text-sm leading-6 text-[#59657a]">
                          <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#a65d37]" aria-hidden="true" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
                <div className="flex items-center md:pl-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-11 w-full items-center justify-between gap-6 bg-[#172747] px-5 text-sm font-bold text-[#f5f3ec] transition-colors hover:bg-[#263c63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#a65d37] md:w-auto"
                  >
                    {t("careers.apply")}
                    <MoveUpRight className="h-4 w-4 text-[#e4a273]" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-[#677181]">{t("careers.contact_note")}</p>
        </div>
      </section>

      <section className="bg-[#172747] text-[#f5f3ec]">
        <div className="container mx-auto flex flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e4a273]">{t("careers.closing.kicker")}</p>
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.035em] md:text-3xl">{t("careers.closing.title")}</h2>
            <p className="mt-3 text-sm leading-6 text-[#cbd3df]">{t("careers.closing.copy")}</p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-5 border border-white/35 px-5 text-sm font-bold text-[#f5f3ec] transition-colors hover:border-[#e4a273] hover:text-[#e4a273] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5f3ec]"
          >
            {t("careers.closing.action")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
