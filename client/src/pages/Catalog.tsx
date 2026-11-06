import { useEffect } from "react";
import { SEO } from "@/components/shared/SEO";
import { useLanguage } from "@/lib/i18n";
import { ArrowDownToLine, ArrowUpRight, ChevronDown, FileText } from "lucide-react";
import { CATALOG } from "@shared/catalog";
import { SITE_URL } from "@/lib/head";
import { catalogCopy, catalogLanguages, type CatalogLanguage } from "@/lib/catalog-copy";

export default function Catalog() {
  const { language, setLanguage } = useLanguage();
  const copy = catalogCopy[language];
  const selectedLanguage = catalogLanguages.find(({ code }) => code === language)!;

  useEffect(() => {
    // Also handle client-side navigation, which does not reach the server redirect.
    if (window.matchMedia("(max-width: 767px)").matches
      || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {
      window.location.replace(CATALOG.pdfPath);
    }
  }, []);

  return (
    <>
      <SEO
        title={copy.title}
        description={copy.description}
        canonical={`${SITE_URL}${CATALOG.pagePath}`}
      />

      <main dir="ltr" className="fixed inset-0 z-[100] flex h-[100dvh] min-h-0 flex-col overflow-hidden bg-[#f4f7fb] text-[#203a70]">
        <header className="relative z-10 flex h-[68px] shrink-0 items-center gap-3 border-b border-[#d9e2ef] bg-white px-3 shadow-[0_2px_10px_rgba(32,58,112,.05)] sm:px-5 md:h-[62px] md:px-6">
          <a
            href="/"
            aria-label={copy.home}
            className="flex h-11 shrink-0 items-center gap-2 pr-2 text-[#294687] outline-none focus-visible:ring-2 focus-visible:ring-[#294687] focus-visible:ring-offset-2"
          >
            <span className="flex h-8 w-8 items-center justify-center bg-[#294687] text-white md:hidden">
              <FileText className="h-4 w-4" aria-hidden="true" />
            </span>
            <img
              src="/assets/logo-nav.webp"
              srcSet="/assets/logo-nav-sm.webp 1x, /assets/logo-nav.webp 2x"
              alt="Kurlar Logo"
              width={310}
              height={96}
              className="hidden h-9 w-auto object-contain md:block"
            />
          </a>
          <span className="h-7 w-px shrink-0 bg-[#d9e2ef]" aria-hidden="true" />
          <h1 className="min-w-0 flex-1 truncate font-heading text-sm font-semibold tracking-[-0.02em] text-[#24396f] sm:text-base">
            {copy.barTitle}
          </h1>

          <div className="relative flex h-11 w-[68px] shrink-0 items-center justify-center gap-2 border border-[#d5dfed] bg-white text-[#294687] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#294687]">
            <img
              src={selectedLanguage.flag}
              alt=""
              aria-hidden="true"
              width={28}
              height={18}
              className="pointer-events-none h-[18px] w-7 object-cover"
            />
            <ChevronDown className="pointer-events-none h-3 w-3" aria-hidden="true" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as CatalogLanguage)}
              aria-label={copy.language}
              title={`${copy.language}: ${selectedLanguage.name}`}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            >
              {catalogLanguages.map(({ code, name }) => (
                <option key={code} value={code} lang={code.toLowerCase()}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <nav aria-label={copy.actions} className="ml-auto flex shrink-0 items-center gap-1 md:hidden">
            <a
              href={CATALOG.pdfPath}
              target="_blank"
              rel="noopener"
              aria-label={copy.open}
              title={copy.open}
              className="inline-flex h-11 w-11 items-center justify-center border border-[#d5dfed] bg-white text-[#294687] transition-colors hover:bg-[#f0f4fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={CATALOG.downloadPath}
              download={CATALOG.downloadName}
              aria-label={copy.download}
              title={copy.download}
              className="inline-flex h-11 w-11 items-center justify-center bg-[#294687] text-white transition-colors hover:bg-[#20396f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
            >
              <ArrowDownToLine className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </header>

        <div className="flex min-h-0 flex-1">
          <section aria-label={copy.barTitle} className="min-h-0 min-w-0 flex-1 bg-[#e8edf4]">
            <object
              data={CATALOG.pdfPath}
              type="application/pdf"
              title={`Kurlar ${CATALOG.year} ${copy.title}`}
              className="block h-full min-h-0 w-full border-0 bg-[#e8edf4]"
            >
              <div className="flex h-full min-h-0 flex-col items-center justify-center gap-4 bg-[#f4f7fb] px-6 text-center text-sm text-[#536078]">
                <p className="max-w-md leading-6">{copy.fallback}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={CATALOG.pdfPath}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#294687] px-4 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
                  >
                    {copy.open}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={CATALOG.downloadPath}
                    download={CATALOG.downloadName}
                    className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#bfcbe0] bg-white px-4 font-semibold text-[#294687] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
                  >
                    <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                    {copy.download}
                  </a>
                </div>
              </div>
            </object>
          </section>

          <nav
            aria-label={copy.actions}
            className="hidden w-[68px] shrink-0 flex-col items-center gap-2 border-l border-[#d9e2ef] bg-white py-3 md:flex"
          >
            <a
              href={CATALOG.pdfPath}
              target="_blank"
              rel="noopener"
              aria-label={copy.open}
              title={copy.open}
              className="inline-flex h-12 w-12 items-center justify-center border border-[#d5dfed] bg-white text-[#294687] transition-colors hover:bg-[#f0f4fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={CATALOG.downloadPath}
              download={CATALOG.downloadName}
              aria-label={copy.download}
              title={copy.download}
              className="inline-flex h-12 w-12 items-center justify-center bg-[#294687] text-white transition-colors hover:bg-[#20396f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294687]"
            >
              <ArrowDownToLine className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </main>
    </>
  );
}
