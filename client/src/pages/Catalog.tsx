import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { useLanguage } from "@/lib/i18n";
import { ArrowDownToLine, ArrowUpRight, BookOpen, FileText } from "lucide-react";
import { CATALOG } from "@shared/catalog";
import { SITE_URL } from "@/lib/head";

export default function Catalog() {
  const { language } = useLanguage();
  const isEnglish = language === "EN";
  const copy = isEnglish
    ? {
        title: "Product catalogue",
        description: "Explore the Kurlar 2026 product catalogue for 50 Hz pumps and motors.",
        eyebrow: "KURLAR · TECHNICAL LIBRARY",
        heading: "2026 Product\nCatalogue",
        intro:
          "The complete 2026 range of Kurlar pumps and motors, with specifications, performance data and selection details in one place.",
        edition: "PRODUCT CATALOGUE",
        format: "Bilingual · 50 Hz",
        pages: "Pages",
        size: "File size",
        year: "Edition",
        download: "Download PDF",
        open: "Open in new tab",
        read: "Read the catalogue",
        readerNote: "Use the document controls to search, zoom and move through the catalogue.",
        mobileTitle: "Reading on a phone?",
        mobileText:
          "Inline PDF support varies by browser. Open the catalogue in a new tab or download a copy for the best reading experience.",
        coverAlt: "Cover of the Kurlar 2026 product catalogue",
        fallback: "Your browser cannot display this PDF inline.",
      }
    : {
        title: "Ürün kataloğu",
        description: "Kurlar 2026 ürün kataloğunda 50 Hz pompa ve motor serilerini inceleyin.",
        eyebrow: "KURLAR · TEKNİK KÜTÜPHANE",
        heading: "2026 Ürün\nKataloğu",
        intro:
          "Kurlar pompa ve motorlarının 2026 ürün gamı, teknik özellikler, performans verileri ve seçim bilgileriyle bir arada.",
        edition: "ÜRÜN KATALOĞU",
        format: "Türkçe · English · 50 Hz",
        pages: "Sayfa",
        size: "Dosya boyutu",
        year: "Baskı",
        download: "PDF indir",
        open: "Yeni sekmede aç",
        read: "Kataloğu inceleyin",
        readerNote: "Katalog içinde arama yapmak, yakınlaştırmak ve sayfalar arasında gezinmek için belge araçlarını kullanın.",
        mobileTitle: "Telefondan mı okuyorsunuz?",
        mobileText:
          "PDF görüntüleme desteği tarayıcıya göre değişebilir. En iyi okuma deneyimi için kataloğu yeni sekmede açın veya indirin.",
        coverAlt: "Kurlar 2026 ürün kataloğunun kapağı",
        fallback: "Tarayıcınız bu PDF dosyasını sayfa içinde görüntüleyemiyor.",
      };

  return (
    <Layout>
      <SEO
        title={copy.title}
        description={copy.description}
        canonical={`${SITE_URL}${CATALOG.pagePath}`}
      />

      <section className="relative isolate overflow-hidden border-b border-[#dce4f0] bg-[#f7f9fc]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-10 hidden w-[47%] border-l border-[#e5ebf3] bg-[linear-gradient(90deg,transparent_49.8%,rgba(36,52,116,.045)_50%,transparent_50.2%)] md:block"
        />
        <div className="container mx-auto px-5 pb-10 pt-9 md:px-8 md:pb-14 md:pt-12">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#294687] md:mb-10">
            <span className="h-px w-8 bg-[#294687]" aria-hidden="true" />
            <span>{copy.eyebrow}</span>
          </div>

          <div className="grid items-center gap-9 md:grid-cols-[1.05fr_.95fr] md:gap-12 lg:gap-20">
            <div className="max-w-2xl">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.19em] text-[#7b879a]">
                {copy.edition} / {CATALOG.year}
              </p>
              <h1 className="whitespace-pre-line font-heading text-[clamp(2.7rem,6vw,5.5rem)] font-semibold leading-[.99] tracking-[-.055em] text-[#1e356e]">
                {copy.heading}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#536078] md:mt-7 md:text-lg md:leading-8">
                {copy.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4 border-y border-[#dce4f0] py-4">
                {[
                  { label: copy.pages, value: CATALOG.pages.toString() },
                  { label: copy.size, value: `~${CATALOG.sizeMB} MB` },
                  { label: copy.year, value: CATALOG.year.toString() },
                ].map((item) => (
                  <div key={item.label} className="min-w-[76px]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#8490a2]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#263c72]">{item.value}</p>
                  </div>
                ))}
                <p className="ml-auto self-center text-right text-[11px] font-medium leading-5 text-[#64718a]">
                  {copy.format}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CATALOG.downloadPath}
                  download={CATALOG.downloadName}
                  className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#294687] px-5 text-sm font-bold text-white transition-colors hover:bg-[#20396f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#294687]"
                >
                  <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                  {copy.download}
                </a>
                <a
                  href={CATALOG.pdfPath}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#bfcbe0] bg-white px-5 text-sm font-bold text-[#294687] transition-colors hover:border-[#294687] hover:bg-[#f2f5fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#294687]"
                >
                  {copy.open}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[220px] md:max-w-[350px]">
              <div className="relative px-3 pb-4 pl-5">
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-5 w-[82%] border border-[#dce4f0] bg-white"
                />
                <div className="relative border border-[#dce4f0] bg-white p-2 shadow-[0_22px_50px_rgba(37,57,102,.13)]">
                  <img
                    src={CATALOG.coverPath}
                    alt={copy.coverAlt}
                    width={637}
                    height={900}
                    fetchPriority="high"
                    decoding="async"
                    className="block aspect-[637/900] w-full object-cover"
                  />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#294687]">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    {CATALOG.year} · 50 Hz
                  </div>
                </div>
                <div className="absolute -right-1 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[9px] font-medium uppercase tracking-[0.23em] text-[#8996aa] md:block">
                  KURLAR / ENGINEERED FLOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-10 md:px-8 md:py-14">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#294687]">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {copy.read}
            </p>
            <h2 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#24396f] md:text-2xl">
              Kurlar {CATALOG.year} · 50 Hz
            </h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-[#69758b]">{copy.readerNote}</p>
        </div>

        <div className="overflow-hidden border border-[#d7e0ed] bg-[#f3f6fa]">
          <object
            data={CATALOG.pdfPath}
            type="application/pdf"
            aria-label={`Kurlar ${CATALOG.year} ${copy.title}`}
            className="block h-[65vh] min-h-[420px] w-full bg-[#eef2f7] md:h-[min(78vh,920px)] md:min-h-[640px]"
          >
            <div className="p-8 text-center text-sm text-[#536078]">
              <p>{copy.fallback}</p>
              <a
                href={CATALOG.pdfPath}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex min-h-10 items-center text-sm font-bold text-[#294687] underline underline-offset-4"
              >
                {copy.open}
              </a>
            </div>
          </object>

          <div className="flex flex-col gap-4 p-5 md:hidden">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d3deed] bg-white text-[#294687]">
                <FileText className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#24396f]">{copy.mobileTitle}</h3>
                <p className="mt-1 text-xs leading-5 text-[#66738a]">{copy.mobileText}</p>
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href={CATALOG.pdfPath}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#294687] px-4 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
              >
                {copy.open}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CATALOG.downloadPath}
                download={CATALOG.downloadName}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#bfcbe0] bg-white px-4 text-sm font-bold text-[#294687] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                {copy.download}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
