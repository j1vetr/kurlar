import { Layout } from "@/components/layout/Layout";
import { products, getProductWithLanguage } from "@/lib/data";
import { useRoute, Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ArrowRight, FileText, Ruler, Shield, Zap, Settings, Info, Layers, HelpCircle, ChevronDown, Sliders, ArrowUpRight, ChevronRight, Home, Thermometer, Activity, Box, ArrowDown, ZoomIn, ZoomOut, Check, Star, PlusCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { SEO } from "@/components/shared/SEO";
import NotFound from "@/pages/not-found";
import { getCategoryByKey, categoryPath } from "@/lib/categories";
import { getEnCategoryByKey, enCategoryPath } from "@/lib/categories-en";
import {
  isEnPath,
  homePath,
  productsPath,
  productPath,
  hreflangFor,
} from "@/lib/locale";
import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from "@/components/shared/Breadcrumbs";
import {
  productSeoTitle,
  productSeoDescription,
  productJsonLd,
  productImageAlt,
  imageDims,
  compactSizes,
} from "@/lib/product-seo";
import { SITE_URL } from "@/lib/head";

/** HI-TEMP (km) ürününün seri boyutları — tüm seriler SSR DOM'unda kalır. */
const HITEMP_SERIES = ["6", "7", "8", "10"];

/** Ana Sayfa > Ürünler > [Üst Kategori] > Ürün breadcrumb zinciri (TR/EN) */
function productCrumbs(product: { category: string; name: string }, en: boolean): Crumb[] {
  const parent = en ? getEnCategoryByKey(product.category) : getCategoryByKey(product.category);
  return [
    { name: en ? "Home" : "Ana Sayfa", href: homePath(en) },
    { name: en ? "Products" : "Ürünler", href: productsPath(en) },
    ...(parent
      ? [{ name: parent.name, href: en ? enCategoryPath(parent) : categoryPath(parent) }]
      : []),
    { name: product.name },
  ];
}

function ImageMagnifier({ src, alt, width, height }: { src: string; alt: string; width?: number; height?: number }) {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
      onMouseMove={handleMouseMove}
    >
      <img 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        className="max-w-full max-h-full object-contain pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: zoom ? 'scale(1.5)' : 'scale(1)', // Reduced scale from 2 to 1.5
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
}

function PdfViewer({ url, title }: { url: string; title: string }) {
  const { t, language } = useLanguage();
  const [scale, setScale] = useState(50);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 25, 50));

  return (
    <div className="w-full bg-slate-100 border-t border-slate-200 relative group">
      {/* Mobile View - Download/View Button Only */}
      <div className="md:hidden p-8 flex flex-col items-center justify-center text-center">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 w-full max-w-sm">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500 text-sm mb-6">
            {language === 'TR'
              ? "Detaylı teknik verileri görüntülemek için aşağıdaki butona tıklayınız."
              : "Click the button below to view detailed technical data."}
          </p>
          
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 px-4 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all"
          >
            <Download className="w-5 h-5" />
            {t('product.view_technical_data') || "Teknik Verileri Görüntüle"}
          </a>
        </div>
      </div>

      {/* Desktop View - Full PDF Viewer */}
      <div className="hidden md:block h-[800px] relative">
        <div className="w-full h-full overflow-auto bg-slate-200/50 flex justify-center">
          <div 
            className="transition-all duration-300 ease-in-out origin-top"
            style={{ width: `${scale}%`, height: '100%' }}
          >
            <iframe 
              src={`${url}#navpanes=0&toolbar=0&view=FitH`} 
              className="w-full h-full border-0 shadow-lg" 
              title={title}
            />
          </div>
        </div>
        
        {/* Custom Zoom Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
          <button
            onClick={handleZoomIn}
            className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-110 active:scale-95"
            title="Yakınlaştır"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-white hover:bg-slate-50 text-slate-700 p-3 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-110 active:scale-95"
            title="Uzaklaştır"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <div className="bg-slate-900/80 backdrop-blur text-white text-xs font-bold py-1 px-2 rounded-md text-center shadow-lg mt-1">
            {scale}%
          </div>
        </div>
      </div>
    </div>
  );
}

function HiTempProductLayout({ product }: { product: any }) {
  const { t, language } = useLanguage();
  const [location] = useLocation();
  const en = isEnPath(location.split("?")[0]);
  // Bu özel yerleşimdeki sabit etiketler: TR dışındaki dillerde İngilizce.
  const trText = language === 'TR';
  const L = trText
    ? {
        product: "Ürün",
        overview: "GENEL BAKIŞ",
        modelSelection: "Model Seçimi:",
        thermalCapacity: "Termal Kapasite",
        maxOperation: "Maksimum Çalışma",
        energyEfficiency: "Enerji Verimliliği",
        superiorPerformance: "Üstün Performans",
        protectionLevel: "Koruma Seviyesi",
        waterDustProof: "Su & Toz Geçirmez",
        engineeringFeatures: "Mühendislik Özellikleri",
        keyFeatures: "Temel Özellikler",
        motorType: "MOTOR TİPİ",
        power: "GÜÇ",
        efficiency: "η - VERİMLİLİK",
        powerFactor: "Cosφ - GÜÇ FAKTÖRÜ",
        axialLoad: "EKSENEL YÜK",
        atLoad: "% yükte",
        series: "Serisi",
        manufacturer: "Üretici",
      }
    : {
        product: "Product",
        overview: "OVERVIEW",
        modelSelection: "Model Selection:",
        thermalCapacity: "Thermal Capacity",
        maxOperation: "Maximum Operation",
        energyEfficiency: "Energy Efficiency",
        superiorPerformance: "Superior Performance",
        protectionLevel: "Protection Level",
        waterDustProof: "Water & Dust Proof",
        engineeringFeatures: "Engineering Features",
        keyFeatures: "Key Features",
        motorType: "MOTOR TYPE",
        power: "POWER",
        efficiency: "η - EFFICIENCY",
        powerFactor: "Cosφ - POWER FACTOR",
        axialLoad: "AXIAL LOAD",
        atLoad: "at % load",
        series: "Series",
        manufacturer: "Manufacturer",
      };
  const [activeSeries, setActiveSeries] = useState("6");
  const [activeDetailTab, setActiveDetailTab] = useState("specs");
  const [activeImage, setActiveImage] = useState(0);
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);
  const galleryImages = product.gallery || [product.image];

  // SEO metinleri UI dilinden bağımsız, URL locale'ine (TR/EN) göre üretilir.
  const baseProduct = products.find((p) => p.id === product.id) ?? product;
  const seoP = getProductWithLanguage(baseProduct, en ? "EN" : "TR");

  return (
    <Layout>
      <SEO 
        title={productSeoTitle(seoP, en)} 
        description={productSeoDescription(seoP, en)} 
        canonical={`https://kurlar.com.tr${productPath(product.id, en)}`}
        alternates={hreflangFor(productPath(product.id, en))}
        ogLocale={en ? "en_US" : "tr_TR"}
        ogImage={`${SITE_URL}${product.image}`}
        jsonLd={[
          breadcrumbJsonLd(productCrumbs(seoP, en), productPath(product.id, en)),
          productJsonLd(seoP, en),
        ]}
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 py-12 md:py-20 relative z-20">
          <Breadcrumbs items={productCrumbs(product, en)} variant="dark" className="mb-10 justify-start" />
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Column: Image Gallery */}
            <div className="w-full lg:w-5/12">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-2xl p-8 mb-4 group overflow-hidden border border-slate-700/50 shadow-2xl">
                  
                  {/* Studio Background - Radial Spotlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700/80 via-slate-900 to-slate-950 z-0"></div>
                  
                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

                  {/* Side "Lights" - Blue/Cold Tech Lighting */}
                  <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-blue-500/10 to-transparent blur-2xl z-10"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-blue-500/10 to-transparent blur-2xl z-10"></div>
                  
                  {/* Top "Spotlight" - White/Bright */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-40 bg-white/10 blur-[80px] z-10 rounded-full"></div>

                  {/* Decorative Tech Corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg z-20"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg z-20"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg z-20"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg z-20"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                    <div className="bg-slate-900/90 backdrop-blur border border-slate-700/50 px-3 py-1.5 rounded-lg shadow-xl">
                      <span className="text-white font-black tracking-widest text-sm">KM</span>
                    </div>
                  </div>

                  {/* Quality Logos */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
                    <div className="bg-white/90 backdrop-blur p-1.5 rounded-lg shadow-xl border border-slate-200/50" title={language === 'TR' ? 'CE Uygunluk İşareti' : 'CE Marking'}>
                      <img src="/assets/quality/ce.png" alt={language === 'TR' ? 'CE uygunluk işareti' : 'CE marking'} width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="bg-white/90 backdrop-blur p-1.5 rounded-lg shadow-xl border border-slate-200/50" title={language === 'TR' ? 'TSE Belgesi' : 'TSE Certificate'}>
                      <img src="/assets/quality/tse.png" alt={language === 'TR' ? 'TSE belgesi' : 'TSE certificate'} width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  
                  <div className="relative h-[350px] md:h-[450px] flex items-center justify-center p-4 z-20">
                     <div className="relative w-full h-full filter drop-shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
                       <ImageMagnifier src={galleryImages[activeImage]} alt={productImageAlt(seoP, en)} {...imageDims(galleryImages[activeImage])} />
                     </div>
                  </div>

                  {/* Zoom Hint Badge - Icon Only */}
                  <div className="absolute bottom-6 right-6 z-20">
                    <div className="bg-slate-900/60 backdrop-blur-md p-2.5 rounded-full shadow-lg border border-white/10 text-white animate-pulse">
                      <div className="w-5 h-5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21L16.65 16.65" />
                          <path d="M11 8V14" />
                          <path d="M8 11H14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thumbnails */}
                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-3 gap-3">
                    {galleryImages.map((img: string, idx: number) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        aria-label={`${product.name} — ${idx + 1}`}
                        aria-pressed={activeImage === idx}
                        className={cn(
                          "bg-slate-800/50 backdrop-blur-sm border rounded-xl p-2 h-20 flex items-center justify-center transition-all duration-300 relative overflow-hidden group w-full",
                          activeImage === idx 
                            ? "border-primary ring-1 ring-primary shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)]" 
                            : "border-slate-700 hover:border-slate-600 hover:bg-slate-800"
                        )}
                      >
                        <img src={img} alt="" loading="lazy" {...imageDims(img)} className="max-w-full max-h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-7/12">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-primary/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-primary/30">
                  {L.manufacturer}: Kurlar
                </span>
                <span className="bg-slate-800/50 backdrop-blur-sm text-slate-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  IP68
                </span>
                <span className="bg-slate-800/50 backdrop-blur-sm text-slate-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700 flex items-center gap-1">
                  <Ruler className="w-3 h-3" /> 6" - 7" - 8" - 10"
                </span>
              </div>
              
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-white mb-2">
                  {product.name}
                </h1>
                <div className="text-white/80 text-lg font-medium tracking-wide flex items-center gap-2">
                  Model No : <span className="text-white font-bold text-xl bg-primary/20 px-2 py-0.5 rounded border border-primary/30">KM</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl border-l-4 border-primary/50 pl-6">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl">
                 <div className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg">
                    <Thermometer className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                       <div className="text-slate-400 text-xs uppercase font-bold">{t('product.max_temp')}</div>
                       <div className="text-white font-bold">{t('product.temp_value')}</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg">
                    <Zap className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                       <div className="text-slate-400 text-xs uppercase font-bold">{t('product.efficiency')}</div>
                       <div className="text-white font-bold">{t('product.efficiency_value')}</div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => {
                    const element = document.getElementById('technical-details');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setActiveSeries("overview");
                    }
                  }}
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  {t('product.technical_details') || "Teknik Detaylar"}
                </button>
                <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 rounded-full font-bold text-lg bg-transparent transition-all">
                    <Download className="mr-2 w-5 h-5" /> {t('product.download_catalog')}
                  </Button>
                </a>
                <Link href="/iletisim#contact-form">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 rounded-full font-bold text-lg bg-transparent transition-all">
                    {t('product.request_quote')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Industrial Dashboard Layout */}
      <div className="bg-slate-50 min-h-screen relative" id="technical-details">
        {/* Technical Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Sticky Industrial Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20 md:h-24 overflow-x-auto scrollbar-hide gap-4 py-2">
              
              {/* Overview Toggle */}
              <button 
                onClick={() => setActiveSeries("overview")}
                aria-pressed={activeSeries === "overview"}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap border-2 ml-1",
                  activeSeries === "overview" 
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 scale-105" 
                    : "bg-white text-slate-500 border-slate-100 hover:border-slate-300 hover:text-slate-900"
                )}
              >
                <Info className="w-5 h-5" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase tracking-wider opacity-60 font-bold">{L.product}</span>
                  <span className="font-bold tracking-wide text-sm">{L.overview}</span>
                </div>
              </button>

              {/* Connector Line */}
              <div className="h-10 w-px bg-slate-200 hidden md:block"></div>

              {/* Series Selectors */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden md:block">{L.modelSelection}</span>
                {HITEMP_SERIES.map(size => (
                  <button
                    key={size}
                    onClick={() => setActiveSeries(size)}
                    aria-pressed={activeSeries === size}
                    aria-label={`${size}" ${L.series}`}
                    className={cn(
                      "relative group flex flex-col items-center justify-center w-14 h-14 md:w-20 md:h-16 rounded-xl border-2 transition-all duration-300 overflow-hidden",
                      activeSeries === size
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/20 scale-110 z-10"
                        : "border-slate-200 bg-white hover:border-primary/50 hover:bg-slate-50"
                    )}
                  >
                    <div className="flex flex-col items-center leading-none relative z-10">
                       <span className={cn(
                         "text-lg md:text-xl font-black",
                         activeSeries === size ? "text-primary" : "text-slate-600 group-hover:text-slate-800"
                       )}>{size}"</span>
                       <span className={cn(
                         "text-[9px] uppercase font-bold tracking-wider mt-0.5",
                         activeSeries === size ? "text-primary/80" : "text-slate-400"
                       )}>{L.series}</span>
                    </div>
                    
                    {/* Active Indicator Line */}
                    {activeSeries === size && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
                    )}
                    
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="hidden md:flex items-center gap-3 ml-auto">
                 {/* Removed SYSTEM READY indicator */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* SEO: tüm bölümler her zaman DOM'da render edilir; inaktif olanlar
              yalnızca CSS (hidden) ile gizlenir — crawler tab açmadan okur. */}

          {/* OVERVIEW MODE */}
          <div className={activeSeries === "overview" ? undefined : "hidden"}>
              <div className="space-y-8">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Thermal Module */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Thermometer className="w-24 h-24 text-red-500" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{L.thermalCapacity}</div>
                      <div className="text-4xl font-black text-slate-900 mb-1">90°C</div>
                      <div className="text-sm font-medium text-slate-500 mb-6">{L.maxOperation}</div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 w-[90%] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Efficiency Module */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Zap className="w-24 h-24 text-yellow-500" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{L.energyEfficiency}</div>
                      <div className="text-4xl font-black text-slate-900 mb-1">84%</div>
                      <div className="text-sm font-medium text-slate-500 mb-6">{L.superiorPerformance}</div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-green-500 w-[84%] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Durability Module */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Shield className="w-24 h-24 text-blue-500" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{L.protectionLevel}</div>
                      <div className="text-4xl font-black text-slate-900 mb-1">IP68</div>
                      <div className="text-sm font-medium text-slate-500 mb-6">{L.waterDustProof}</div>
                      <div className="flex gap-1">
                         {[1,2,3,4,5].map(i => (
                           <div key={i} className="h-1.5 flex-1 bg-blue-500 rounded-full"></div>
                         ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Brief */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Text */}
                  <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                      <div className="bg-slate-100 p-2 rounded-lg">
                        <FileText className="w-5 h-5 text-slate-700" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{L.engineeringFeatures}</h3>
                    </div>
                    <div className="prose prose-slate max-w-none">
                      <p className="text-lg leading-relaxed text-slate-600">
                        {product.longDescription}
                      </p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-slate-900">{L.keyFeatures}</h3>
                    </div>
                    <ul className="divide-y divide-slate-100">
                      {product.features?.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group">
                          <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <Check className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                          </div>
                          <span className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
          </div>

          {/* SERIES SPECS MODE — her seri kendi bloğunda, hepsi DOM'da */}
          {HITEMP_SERIES.map((series) => (
            <div key={series} className={activeSeries === series ? undefined : "hidden"}>
              <div className="space-y-6">
                 {/* Series Header */}
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div>
                       <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                         <span className="text-primary">{series}"</span> {t('product.series_title')}
                         <span className="text-base font-normal text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                           {t('product.technical_data_sheet')}
                         </span>
                       </h2>
                       <p className="text-slate-500 mt-2">
                         {series} {t('product.series_desc')}
                       </p>
                    </div>
                 </div>

                 {/* Series Specific Details (Specs, Options, Advantages) - Tabbed Interface */}
                 {product.seriesDetails && product.seriesDetails[series] && (
                   <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                      {/* Tab Navigation */}
                      <div className="flex border-b border-slate-200 bg-slate-50/50" role="tablist" aria-label={t('product.specs_title')}>
                        {['specs', 'options', 'advantages'].map((tab) => (
                           <button
                             key={tab}
                             id={`series-${series}-tab-${tab}`}
                             role="tab"
                             aria-selected={activeDetailTab === tab}
                             aria-controls={`series-${series}-panel-${tab}`}
                             onClick={() => setActiveDetailTab(tab)}
                             className={cn(
                               "flex-1 py-4 px-6 text-sm md:text-base font-bold uppercase tracking-wider transition-all relative",
                               activeDetailTab === tab 
                                 ? "text-primary bg-white" 
                                 : "text-slate-400 hover:text-slate-600 hover:bg-slate-100/50"
                             )}
                           >
                              {tab === 'specs' && t('product.specs_title')}
                              {tab === 'options' && t('product.product_options')}
                              {tab === 'advantages' && t('product.key_advantages')}
                              
                              {activeDetailTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                              )}
                           </button>
                        ))}
                      </div>

                      {/* Tab Content — tüm paneller DOM'da, inaktifler CSS ile gizli */}
                      <div className="p-8 min-h-[400px]">
                            <div
                              id={`series-${series}-panel-specs`}
                              role="tabpanel"
                              aria-labelledby={`series-${series}-tab-specs`}
                              className={activeDetailTab === 'specs' ? undefined : 'hidden'}
                            >
                                 <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-slate-100 p-2 rounded-lg"><Settings className="w-5 h-5 text-slate-700"/></div>
                                    <h3 className="text-xl font-bold text-slate-900">{t('product.specs_title')}</h3>
                                 </div>
                                 
                                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                       {product.seriesDetails[series].technicalSpecs.map((item: string, idx: number) => (
                                         <li key={idx} className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all group">
                                            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-all">
                                               <Settings className="w-4 h-4 text-slate-500 group-hover:text-white" />
                                            </div>
                                            <span className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 pt-1">{item}</span>
                                         </li>
                                       ))}
                                    </ul>
                                 </div>

                                 {/* Quick Navigation Buttons */}
                                 <div className="mt-8 flex flex-wrap gap-4">
                                    <button 
                                      onClick={() => {
                                        const el = document.getElementById(`performance-section-${series}`);
                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                      }}
                                      className="flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all text-sm group"
                                    >
                                      <Activity className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                                      {t('product.jump_to_technical')}
                                      <ArrowDown className="w-4 h-4 ml-1 opacity-50" />
                                    </button>
                                    <button 
                                      onClick={() => {
                                        const el = document.getElementById(`dimensions-section-${series}`);
                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                      }}
                                      className="flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all text-sm group"
                                    >
                                      <Box className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                                      {t('product.jump_to_dimensions')}
                                      <ArrowDown className="w-4 h-4 ml-1 opacity-50" />
                                    </button>
                                 </div>
                            </div>

                            <div
                              id={`series-${series}-panel-options`}
                              role="tabpanel"
                              aria-labelledby={`series-${series}-tab-options`}
                              className={activeDetailTab === 'options' ? undefined : 'hidden'}
                            >
                                 <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-blue-50 p-2 rounded-lg"><Sliders className="w-5 h-5 text-blue-600"/></div>
                                    <h3 className="text-xl font-bold text-slate-900">{t('product.customization_options')}</h3>
                                 </div>
                                 
                                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                       {product.seriesDetails[series].options.map((item: string, idx: number) => (
                                         <li key={idx} className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 bg-blue-50/10 hover:bg-blue-50/30 hover:border-blue-100 hover:shadow-sm transition-all group">
                                            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                               <PlusCircle className="w-4 h-4 text-blue-500 group-hover:text-white" />
                                            </div>
                                            <span className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 pt-1">{item}</span>
                                         </li>
                                       ))}
                                    </ul>
                                 </div>
                            </div>

                            <div
                              id={`series-${series}-panel-advantages`}
                              role="tabpanel"
                              aria-labelledby={`series-${series}-tab-advantages`}
                              className={activeDetailTab === 'advantages' ? undefined : 'hidden'}
                            >
                                 <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-green-50 p-2 rounded-lg"><Zap className="w-5 h-5 text-green-600"/></div>
                                    <h3 className="text-xl font-bold text-slate-900">{t('product.why_choose')}</h3>
                                 </div>
                                 
                                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                       {product.seriesDetails[series].advantages.map((item: string, idx: number) => (
                                         <li key={idx} className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 bg-green-50/10 hover:bg-green-50/30 hover:border-green-100 hover:shadow-sm transition-all group">
                                            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                                               <Star className="w-4 h-4 text-green-600 group-hover:text-white" />
                                            </div>
                                            <span className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 pt-1">{item}</span>
                                         </li>
                                       ))}
                                    </ul>
                                 </div>
                            </div>
                      </div>
                   </div>
                 )}

                 {/* Data Tables - "Monitor" Style */}
                 {product.subSpecs?.filter((s: any) => s.title.includes(series + '"')).map((spec: any, idx: number) => (
                    <div 
                      key={idx} 
                      id={`${!spec.title.includes('50Hz') ? "dimensions-section" : "performance-section"}-${series}`}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                    >
                       <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-200 flex items-center justify-center relative">
                          <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm uppercase tracking-wider absolute left-6">
                             {!spec.title.includes('50Hz') ? <Box className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
                             {spec.title}
                          </h3>
                          {/* Centered Decorative Dots */}
                          <div className="flex gap-1.5">
                             <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                          </div>
                       </div>
                       
                       {/* PDF iframe'i yalnızca aktif seride mount edilir (performans);
                           altındaki semantic tablo her zaman DOM'da kalır (SEO). */}
                       {spec.pdf && activeSeries === series && (
                          <PdfViewer url={spec.pdf} title={spec.title} />
                       )}
                       <div className={cn("overflow-x-auto border-t border-slate-200", spec.pdf && "hidden")}>
                          <table className="w-full text-sm text-left whitespace-nowrap border-collapse">
                            {/* Custom Header for Hi-Temp Performance Data */}
                            {product.id === 'km' && spec.title.includes('50Hz') ? (
                              <thead className="bg-[#E30613] text-white text-[10px] md:text-xs uppercase font-bold tracking-wider text-center border-2 border-black">
                                {/* ROW 1 */}
                                <tr>
                                  <th rowSpan={3} className="px-1 py-1 border border-black sticky left-0 z-10 bg-[#E30613] align-middle min-w-[80px]">
                                    <div className="flex flex-col gap-0.5">
                                      <span className="text-white font-bold">{L.motorType}</span>
                                    </div>
                                  </th>
                                  <th colSpan={2} rowSpan={2} className="px-1 py-1 border border-black align-middle">
                                    <div className="flex flex-col gap-0.5">
                                      <span>{L.power}</span>
                                    </div>
                                  </th>
                                  <th rowSpan={2} className="px-1 py-1 border border-black align-middle">U<sub>N</sub></th>
                                  <th rowSpan={2} className="px-1 py-1 border border-black align-middle">n<sub>N</sub></th>
                                  <th rowSpan={2} className="px-1 py-1 border border-black align-middle">I<sub>N</sub></th>
                                  <th rowSpan={2} className="px-1 py-1 border border-black align-middle">I<sub>A</sub></th>
                                  
                                  <th colSpan={3} className="px-1 py-1 border border-black align-middle">
                                     <div className="flex flex-col gap-0.5">
                                       <span className="text-white font-bold">{L.efficiency}</span>
                                     </div>
                                  </th>
                                  
                                  <th colSpan={3} className="px-1 py-1 border border-black align-middle">
                                     <div className="flex flex-col gap-0.5">
                                       <span className="text-white font-bold">{L.powerFactor}</span>
                                     </div>
                                  </th>
                                  
                                  <th rowSpan={2} className="px-1 py-1 border border-black align-middle">T<sub>N</sub></th>
                                  <th rowSpan={2} className="px-1 py-1 border border-black align-middle">T<sub>A</sub></th>
                                  
                                  <th rowSpan={2} className="px-1 py-1 border border-black align-middle">
                                    <div className="flex flex-col gap-0.5">
                                      <span className="text-white font-bold">{L.axialLoad}</span>
                                    </div>
                                  </th>
                                </tr>
                                
                                {/* ROW 2 */}
                                <tr>
                                  {/* Efficiency Subheader */}
                                  <th colSpan={3} className="px-1 py-1 border border-black text-[9px] bg-[#C40511] font-normal">{L.atLoad}</th>
                                  
                                  {/* PF Subheader */}
                                  <th colSpan={3} className="px-1 py-1 border border-black text-[9px] bg-[#C40511] font-normal">{L.atLoad}</th>
                                </tr>

                                {/* ROW 3 - Units */}
                                <tr>
                                  <th className="px-1 py-1 border border-black align-middle border-r border-black">HP</th>
                                  <th className="px-1 py-1 border border-black align-middle border-r border-black">kW</th>
                                  
                                  <th className="px-1 py-1 border border-black align-middle border-r border-black">V</th>
                                  <th className="px-1 py-1 border border-black align-middle border-r border-black">rpm</th>
                                  <th className="px-1 py-1 border border-black align-middle border-r border-black">A</th>
                                  <th className="px-1 py-1 border border-black align-middle border-r border-black">A</th>
                                  
                                  <th className="px-1 py-1 border border-black border-r border-black">50</th>
                                  <th className="px-1 py-1 border border-black border-r border-black">75</th>
                                  <th className="px-1 py-1 border border-black border-r border-black">100</th>
                                  
                                  <th className="px-1 py-1 border border-black border-r border-black">50</th>
                                  <th className="px-1 py-1 border border-black border-r border-black">75</th>
                                  <th className="px-1 py-1 border border-black border-r border-black">100</th>
                                  
                                  <th className="px-1 py-1 border border-black border-r border-black">Nm</th>
                                  <th className="px-1 py-1 border border-black border-r border-black">Nm</th>
                                  <th className="px-1 py-1 border border-black">kN</th>
                                </tr>
                              </thead>
                            ) : (
                              <thead className="bg-slate-100 text-xs uppercase text-slate-700 font-bold tracking-wider">
                                <tr>
                                  {spec.columns.map((col: string, i: number) => (
                                    <th key={i} className={cn(
                                      "px-4 py-3 border-b border-slate-300 border-r border-slate-300 last:border-r-0 bg-slate-100",
                                      i === 0 && "sticky left-0 z-10 border-r-2 border-r-slate-300 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]"
                                    )}>{col}</th>
                                  ))}
                                </tr>
                              </thead>
                            )}
                            <tbody className="font-mono text-slate-700 text-xs md:text-sm">
                              {product.id === 'km' && spec.title.includes('50Hz') ? (
                                // Optimized rendering for Hi-Temp with merging
                                spec.data.map((row: string[], i: number) => {
                                  const isStartOfGroup = i % 3 === 0;
                                  const groupIndex = Math.floor(i / 3);
                                  // Alternating colors: White vs Light Gray
                                  const isEvenGroup = groupIndex % 2 === 0;
                                  const isHovered = hoveredGroup === groupIndex;
                                  
                                  const rowBgClass = isHovered 
                                    ? "bg-blue-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)] relative z-20" 
                                    : (isEvenGroup ? "bg-white" : "bg-slate-100");
                                    
                                  const textClass = isHovered ? "font-black text-blue-900" : "font-medium text-black";
                                  const borderClass = isHovered ? "border-blue-300" : "border-black";
                                  
                                  // Manual mapping of indices for absolute certainty
                                  // 0:Model, 1:HP, 2:kW, 3:V, 4:rpm, 5:In, 6:Ia, 7:Eff50, 8:Eff75, 9:Eff100, 10:PF50, 11:PF75, 12:PF100, 13:Tn, 14:Ta, 15:Axial
                                  
                                  return (
                                    <tr 
                                      key={i} 
                                      onMouseEnter={() => setHoveredGroup(groupIndex)}
                                      onMouseLeave={() => setHoveredGroup(null)}
                                      className={cn(
                                        "transition-all duration-150 group",
                                        rowBgClass
                                      )}
                                    >
                                      {/* Model Name - Col 0 - RowSpan 3 */}
                                      {isStartOfGroup && (
                                        <td rowSpan={3} className={cn(
                                          "px-2 py-2 border text-center sticky left-0 z-10 align-middle border-r border-black",
                                          isHovered ? "bg-blue-200 text-blue-900 font-black border-blue-400 shadow-md" : "bg-white font-bold text-black border-black",
                                          !isHovered && rowBgClass
                                        )}>
                                          {row[0]}
                                        </td>
                                      )}

                                      {/* Power HP - Col 1 - RowSpan 3 */}
                                      {isStartOfGroup && (
                                        <td rowSpan={3} className={cn(
                                          "px-2 py-2 border text-center align-middle border-r border-black", 
                                          isHovered ? "bg-blue-100 text-blue-900 font-black border-blue-300" : "font-bold text-black border-black",
                                          !isHovered && rowBgClass
                                        )}>{row[1]}</td>
                                      )}
                                      
                                      {/* Power kW - Col 2 - RowSpan 3 */}
                                      {isStartOfGroup && (
                                        <td rowSpan={3} className={cn(
                                          "px-2 py-2 border text-center align-middle border-r border-black", 
                                          isHovered ? "bg-blue-100 text-blue-900 font-black border-blue-300" : "font-bold text-black border-black",
                                          !isHovered && rowBgClass
                                        )}>{row[2]}</td>
                                      )}

                                      {/* V - Col 3 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[3]}</td>
                                      {/* rpm - Col 4 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[4]}</td>
                                      {/* In - Col 5 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[5]}</td>
                                      {/* Ia - Col 6 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[6]}</td>
                                      
                                      {/* Eff 50 - Col 7 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[7]}</td>
                                      {/* Eff 75 - Col 8 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[8]}</td>
                                      {/* Eff 100 - Col 9 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[9]}</td>
                                      
                                      {/* PF 50 - Col 10 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[10]}</td>
                                      {/* PF 75 - Col 11 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[11]}</td>
                                      {/* PF 100 - Col 12 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black", borderClass, textClass)}>{row[12]}</td>
                                      
                                      {/* Tn - Col 13 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black font-semibold", borderClass, textClass)}>{row[13]}</td>
                                      {/* Ta - Col 14 */}
                                      <td className={cn("px-2 py-1 border text-center border-r border-black font-semibold", borderClass, textClass)}>{row[14]}</td>

                                      {/* Axial Load - Col 15 - RowSpan 3 */}
                                      {isStartOfGroup && (
                                        <td rowSpan={3} className={cn(
                                          "px-2 py-2 border text-center align-middle font-bold", 
                                          isHovered ? "bg-blue-100 text-blue-900 font-black border-blue-300" : "text-black border-black",
                                          !isHovered && rowBgClass
                                        )}>{row[15]}</td>
                                      )}
                                    </tr>
                                  );
                                })
                              ) : (
                                // Standard rendering for other tables
                                spec.data.map((row: string[], i: number) => (
                                  <tr key={i} className={cn(
                                    "hover:bg-blue-50/50 transition-colors group",
                                    i % 2 === 1 ? "bg-slate-50" : "bg-white"
                                  )}>
                                    {row.map((cell: string, j: number) => (
                                      <td key={j} className={cn(
                                        "px-4 py-3 border-b border-r border-slate-200 last:border-r-0",
                                        j === 0 && cn(
                                          "text-primary font-bold font-sans sticky left-0 z-10 border-r-2 border-r-slate-300 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]",
                                          i % 2 === 1 ? "bg-slate-50" : "bg-white",
                                          "group-hover:bg-blue-50/50"
                                        )
                                      )}>{cell}</td>
                                    ))}
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          ))}

          <OtherProductsMarquee currentId={product.id} en={en} />
        </div>
      </div>
    </Layout>
  );
}

/** Diğer ürünler marquee'si — her iki ürün yerleşiminde ortak, crawlable iç linkler. */
function OtherProductsMarquee({ currentId, en }: { currentId: string; en: boolean }) {
  const { t, language } = useLanguage();
  return (
    <div className="mb-24 border-t border-slate-200 pt-16">
      <div className="text-center mb-12">
         <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
           <Settings className="w-8 h-8 text-primary" /> {t('product.other_products')}
         </h2>
         <p className="text-slate-500">{t('product.other_products_desc')}</p>
      </div>

      <div className="relative w-full overflow-hidden">
         {/* Gradient Masks */}
         <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

         <motion.div 
           className="flex gap-6 px-6"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ 
             repeat: Infinity, 
             ease: "linear", 
             duration: 40 
           }}
           style={{ width: "fit-content" }}
         >
           {[...products, ...products].filter(p => p.id !== currentId).map((baseP, index) => {
             const p = getProductWithLanguage(baseP, language);
             return (
             <div key={`${p.id}-${index}`} className="w-[260px] md:w-[320px] flex-shrink-0">
               <Link href={productPath(p.id, en)} className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                   <div className="aspect-[4/5] bg-white relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                     <img 
                       src={p.image} 
                       alt={p.name}
                       loading="lazy"
                       {...imageDims(p.image)}
                       className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500 ease-out"
                     />
                     
                     {/* Quick View Button */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                       <div className="bg-white/90 text-slate-900 font-bold text-sm px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-slate-100">
                         {t('product.view_details')}
                       </div>
                     </div>
                   </div>
                   
                   <div className="p-5 flex flex-col flex-grow relative bg-white">
                     <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                       {p.name}
                     </h3>
                     <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
                       {p.description}
                     </p>
                     <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{p.modelCode}</span>
                        <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          {t('product.details')} <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                     </div>
                   </div>
               </Link>
             </div>
             );
           })}
         </motion.div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const [location] = useLocation();
  const cleanPath = location.split("?")[0];
  const en = isEnPath(cleanPath);
  // TR: /urunler/:id — EN: /en/products/:id
  const productId = cleanPath.match(/^\/(?:en\/products|urunler)\/([^/]+)$/)?.[1];
  const { t, language } = useLanguage();
  
  const baseProduct = products.find(p => p.id === productId);
  const product = baseProduct ? getProductWithLanguage(baseProduct, language) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'parts' | 'options'>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    // True 404: render the real not-found page (server also returns HTTP 404).
    return <NotFound />;
  }

  // Use Special Layout for Hi-Temp Motors
  if (product.id === 'km') {
    return <HiTempProductLayout product={product} />;
  }

  const galleryImages = product.gallery || [product.image];

  // SEO metinleri UI dilinden bağımsız, URL locale'ine (TR/EN) göre üretilir.
  const seoP = getProductWithLanguage(baseProduct!, en ? "EN" : "TR");

  return (
    <Layout>
      <SEO 
        title={productSeoTitle(seoP, en)} 
        description={productSeoDescription(seoP, en)} 
        canonical={`https://kurlar.com.tr${productPath(product.id, en)}`}
        alternates={hreflangFor(productPath(product.id, en))}
        ogLocale={en ? "en_US" : "tr_TR"}
        ogImage={`${SITE_URL}${product.image}`}
        jsonLd={[
          breadcrumbJsonLd(productCrumbs(seoP, en), productPath(product.id, en)),
          productJsonLd(seoP, en),
        ]}
      />
      {/* Breadcrumb - Redesigned */}
      <div className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-500 mb-1">
              <Link href={homePath(en)} className="hover:text-primary transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                {t('nav.home')}
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href={productsPath(en)} className="hover:text-primary transition-colors">
                {t('nav.products')}
              </Link>
              {(() => {
                const parent = en ? getEnCategoryByKey(product.category) : getCategoryByKey(product.category);
                return parent ? (
                  <>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <Link href={en ? enCategoryPath(parent) : categoryPath(parent)} className="hover:text-primary transition-colors">
                      {parent.name}
                    </Link>
                  </>
                ) : null;
              })()}
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className="text-primary font-bold bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm text-xs uppercase tracking-wide">
                {product.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Area - Functional Industrial Layout */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white rounded-none shadow-sm border border-slate-200 lg:flex overflow-hidden mb-16">
            
            {/* Left Column: Gallery */}
            <div className="lg:w-1/2 bg-white p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
               <div className="flex-grow flex items-center justify-center bg-slate-50/50 border border-slate-100 mb-4 p-8 h-[350px] md:h-[450px] overflow-hidden relative group cursor-zoom-in">
                 {/* Quality Badges */}
                 <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 flex flex-col gap-2">
                   <div className="bg-white/90 backdrop-blur-sm border border-slate-200 p-1.5 rounded shadow-sm" title="Türk Standartları Enstitüsü">
                     <div className="w-8 h-8 flex items-center justify-center">
                       <img src="/assets/quality/tse.png" alt={en ? 'TSE certificate' : 'TSE belgesi'} width={32} height={32} className="w-full h-full object-contain" />
                     </div>
                   </div>
                   <div className="bg-white/90 backdrop-blur-sm border border-slate-200 p-1.5 rounded shadow-sm" title="Conformité Européenne">
                     <div className="w-8 h-8 flex items-center justify-center">
                       <img src="/assets/quality/ce.png" alt={en ? 'CE marking' : 'CE uygunluk işareti'} width={32} height={32} className="w-full h-full object-contain" />
                     </div>
                   </div>
                 </div>
                 
                 <ImageMagnifier src={galleryImages[activeImage]} alt={productImageAlt(seoP, en)} {...imageDims(galleryImages[activeImage])} />

                 {/* Zoom Hint Badge - Icon Only */}
                 <div className="absolute bottom-4 right-4 z-10">
                    <div className="bg-slate-900/40 backdrop-blur-md p-2.5 rounded-full shadow-lg border border-white/20 text-white animate-pulse">
                      <div className="w-5 h-5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21L16.65 16.65" />
                          <path d="M11 8V14" />
                          <path d="M8 11H14" />
                        </svg>
                      </div>
                    </div>
                 </div>
               </div>
               
               {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      aria-label={`${product.name} — ${idx + 1}`}
                      aria-pressed={activeImage === idx}
                      className={cn(
                        "border bg-slate-50 p-2 h-20 flex items-center justify-center transition-all",
                        activeImage === idx ? "border-primary ring-1 ring-primary" : "border-slate-200 hover:border-slate-300"
                      )}
                    >
                      <img src={img} alt="" loading="lazy" {...imageDims(img)} className="max-w-full max-h-full object-contain" />
                    </button>
                  ))}
                </div>
               )}
            </div>

            {/* Right Column: Technical Info */}
            <div className="lg:w-1/2 flex flex-col">
              {/* Header */}
              <div className="p-8 border-b border-slate-200">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                    {product.subCategory}
                  </span>
                  {product.category === 'motor' && (
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      IP68
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                  {product.name}
                </h1>
                
                {product.modelCode && (
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Model No:</span>
                    <span className="text-slate-900 font-extrabold text-xl bg-slate-100 px-4 py-1.5 rounded border border-slate-200 shadow-sm">
                      {product.modelCode}
                    </span>
                  </div>
                )}
                
                {/* İlk görünür bölüm: marka / tip / çap — gerçek data, semantic HTML */}
                <dl className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm border border-slate-200 rounded-sm bg-slate-50/60 p-4">
                  <div>
                    <dt className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">{language === 'TR' ? 'Marka' : 'Brand'}</dt>
                    <dd className="text-slate-900 font-bold">Kurlar</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">{language === 'TR' ? 'Ürün Tipi' : 'Product Type'}</dt>
                    <dd className="text-slate-900 font-bold">
                      {product.category === 'pump'
                        ? (language === 'TR' ? 'Dalgıç Pompa' : 'Submersible Pump')
                        : (language === 'TR' ? 'Dalgıç Motor' : 'Submersible Motor')}
                    </dd>
                  </div>
                  {product.availableSizes && (
                    <div>
                      <dt className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">{language === 'TR' ? 'Çap Seçenekleri' : 'Diameter Options'}</dt>
                      <dd className="text-slate-900 font-bold">{compactSizes(product.availableSizes)}</dd>
                    </div>
                  )}
                </dl>

                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tabs / Sections - Improved for Mobile (Pill Design) */}
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-4">
                {/* Mobile Dropdown for very small screens or simple list */}
                <div className="md:hidden flex flex-col gap-2">
                  <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-4 px-4" role="tablist" aria-label={t('product.specs_title')}>
                    <button 
                      role="tab"
                      aria-selected={activeTab === 'overview'}
                      aria-controls="tab-panel-overview"
                      onClick={() => setActiveTab('overview')}
                      className={cn(
                        "flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all border whitespace-nowrap",
                        activeTab === 'overview' 
                          ? "bg-primary text-white border-primary shadow-md" 
                          : "bg-white text-slate-600 border-slate-200 hover:border-primary/50"
                      )}
                    >
                      <Info className="w-4 h-4" /> {t('product.overview')}
                    </button>
                    <button 
                      role="tab"
                      aria-selected={activeTab === 'specs'}
                      aria-controls="tab-panel-specs"
                      onClick={() => setActiveTab('specs')}
                      className={cn(
                        "flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all border whitespace-nowrap",
                        activeTab === 'specs' 
                          ? "bg-primary text-white border-primary shadow-md" 
                          : "bg-white text-slate-600 border-slate-200 hover:border-primary/50"
                      )}
                    >
                      <Ruler className="w-4 h-4" /> {t('product.specs')}
                    </button>
                    {product.mechanicalPartsImages && (
                      <button 
                        role="tab"
                        aria-selected={activeTab === 'parts'}
                        aria-controls="tab-panel-parts"
                        onClick={() => setActiveTab('parts')}
                        className={cn(
                          "flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all border whitespace-nowrap",
                          activeTab === 'parts' 
                            ? "bg-primary text-white border-primary shadow-md" 
                            : "bg-white text-slate-600 border-slate-200 hover:border-primary/50"
                        )}
                      >
                        <Layers className="w-4 h-4" /> {t('product.parts')}
                      </button>
                    )}
                    {product.options && (
                      <button 
                        role="tab"
                        aria-selected={activeTab === 'options'}
                        aria-controls="tab-panel-options"
                        onClick={() => setActiveTab('options')}
                        className={cn(
                          "flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all border whitespace-nowrap",
                          activeTab === 'options' 
                            ? "bg-primary text-white border-primary shadow-md" 
                            : "bg-white text-slate-600 border-slate-200 hover:border-primary/50"
                        )}
                      >
                        <Sliders className="w-4 h-4" /> {t('product.options')}
                      </button>
                    )}
                  </div>
                </div>

                {/* Desktop Tabs */}
                <div className="hidden md:flex gap-0 overflow-x-auto relative scrollbar-hide -mb-[17px]" role="tablist" aria-label={t('product.specs_title')}>
                  <button 
                    role="tab"
                    aria-selected={activeTab === 'overview'}
                    aria-controls="tab-panel-overview"
                    onClick={() => setActiveTab('overview')}
                    className={cn(
                      "min-w-[140px] py-4 px-6 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap border-b-2 z-10",
                      activeTab === 'overview' ? "bg-white border-primary text-primary rounded-t-lg" : "text-slate-500 border-transparent hover:text-slate-700 hover:bg-white/50"
                    )}
                  >
                    <Info className="w-4 h-4" /> {t('product.overview')}
                  </button>
                  <button 
                    role="tab"
                    aria-selected={activeTab === 'specs'}
                    aria-controls="tab-panel-specs"
                    onClick={() => setActiveTab('specs')}
                    className={cn(
                      "min-w-[140px] py-4 px-6 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap border-b-2 z-10",
                      activeTab === 'specs' ? "bg-white border-primary text-primary rounded-t-lg" : "text-slate-500 border-transparent hover:text-slate-700 hover:bg-white/50"
                    )}
                  >
                    <Ruler className="w-4 h-4" /> {t('product.specs')}
                  </button>
                  {product.mechanicalPartsImages && (
                    <button 
                      role="tab"
                      aria-selected={activeTab === 'parts'}
                      aria-controls="tab-panel-parts"
                      onClick={() => setActiveTab('parts')}
                      className={cn(
                        "min-w-[140px] py-4 px-6 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap border-b-2 z-10",
                        activeTab === 'parts' ? "bg-white border-primary text-primary rounded-t-lg" : "text-slate-500 border-transparent hover:text-slate-700 hover:bg-white/50"
                      )}
                    >
                      <Layers className="w-4 h-4" /> {t('product.parts')}
                    </button>
                  )}
                  {product.options && (
                    <button 
                      role="tab"
                      aria-selected={activeTab === 'options'}
                      aria-controls="tab-panel-options"
                      onClick={() => setActiveTab('options')}
                      className={cn(
                        "min-w-[140px] py-4 px-6 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap border-b-2 z-10",
                        activeTab === 'options' ? "bg-white border-primary text-primary rounded-t-lg" : "text-slate-500 border-transparent hover:text-slate-700 hover:bg-white/50"
                      )}
                    >
                      <Sliders className="w-4 h-4" /> {t('product.options')}
                    </button>
                  )}
                </div>
              </div>

              {/* Tab Content — tüm paneller SEO için DOM'da; inaktifler CSS ile gizli */}
              <div className="flex-grow p-8 bg-white overflow-y-auto max-h-[500px]">
                <div id="tab-panel-overview" role="tabpanel" aria-label={t('product.overview')} className={activeTab === 'overview' ? undefined : 'hidden'}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" /> {t('product.desc_title')}
                      </h3>
                      <div className="prose prose-sm text-slate-600 max-w-none">
                        <p className="whitespace-pre-line">{product.longDescription || product.description}</p>
                      </div>
                    </div>
                    
                    <div>
                       <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" /> {t('product.features_title')}
                      </h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {product.features?.map((f: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border-l-2 border-slate-100 pl-3 py-1 capitalize">
                            <span className="block mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="tab-panel-specs" role="tabpanel" aria-label={t('product.specs')} className={activeTab === 'specs' ? undefined : 'hidden'}>
                  <div>
                     <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-primary" /> {t('product.specs_title')}
                      </h3>
                      
                      {product.specsImage && (
                        <div className="mb-8">
                          <img src={product.specsImage} alt={`${product.name} — ${language === 'TR' ? 'teknik özellikler tablosu' : 'technical specifications table'}`} loading="lazy" className="w-full border border-slate-200 rounded-sm" />
                        </div>
                      )}

                      {product.id === 'km4' && (
                        <div className="flex flex-wrap gap-3 mb-8">
                          <Button 
                            onClick={() => document.getElementById('spec-group-0')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                            className="bg-slate-800 hover:bg-slate-700 text-white font-bold shadow-sm"
                          >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            {t('product.monophase') || 'Monofaze'}
                          </Button>
                          <Button 
                            onClick={() => document.getElementById('spec-group-1')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                            className="bg-slate-800 hover:bg-slate-700 text-white font-bold shadow-sm"
                          >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            {t('product.triphase') || 'Trifaze'}
                          </Button>
                        </div>
                      )}

                      {/* product.subSpecs logic removed as per request to only show generic specs */}
                      {product.specs && (
                        <div className="border border-slate-200 rounded-sm overflow-hidden">
                          <table className="w-full text-sm text-left">
                            <tbody className="divide-y divide-slate-200">
                              {Object.entries(product.specs).map(([key, value], i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                  <td className="px-4 py-3 font-medium text-slate-600 border-r border-slate-200 w-1/2">{key}</td>
                                  <td className="px-4 py-3 font-bold text-slate-900">{String(value)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Standard SubSpecs Rendering for other products */}
                      {product.subSpecs && product.subSpecs.map((spec: { title: string; columns: string[]; data: string[][] }, idx: number) => (
                        <div key={idx} className="mt-8 border border-slate-200 rounded-sm overflow-hidden shadow-sm">
                          <h4 className="bg-slate-100 px-4 py-3 font-bold text-slate-900 border-b border-slate-200 flex items-center gap-2">
                             <Ruler className="w-4 h-4 text-primary" /> {spec.title}
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left whitespace-nowrap">
                              <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-bold tracking-wider">
                                <tr>
                                  {spec.columns.map((col: string, i: number) => (
                                    <th key={i} className="px-4 py-3 border-b border-slate-200 border-r border-slate-200 last:border-r-0">{col}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 bg-white">
                                {spec.data.map((row: string[], i: number) => (
                                  <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                                    {row.map((cell: string, j: number) => (
                                      <td key={j} className="px-4 py-3 font-medium text-slate-700 border-r border-slate-100 last:border-r-0 tabular-nums">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {product.mechanicalPartsImages && (
                  <div id="tab-panel-parts" role="tabpanel" aria-label={t('product.parts')} className={activeTab === 'parts' ? undefined : 'hidden'}>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {product.mechanicalPartsImages.map((part: { title: string; image: string }, idx: number) => (
                       <Dialog key={idx}>
                         <DialogTrigger asChild>
                           <Button variant="outline" className="h-auto py-8 flex flex-col items-center gap-3 border-slate-200 hover:border-primary hover:bg-slate-50 hover:text-primary transition-all group whitespace-normal text-center">
                             <Layers className="w-8 h-8 text-slate-400 group-hover:text-primary mb-1 transition-colors" />
                             <span className="font-bold text-lg">{part.title}</span>
                             <span className="text-xs text-slate-500 font-normal bg-slate-100 px-3 py-1 rounded-full group-hover:bg-white transition-colors">{t('product.view_click')}</span>
                           </Button>
                         </DialogTrigger>
                         <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-hidden p-0 bg-white border-slate-200">
                           <DialogHeader className="p-4 border-b border-slate-100 bg-white z-10">
                              <DialogTitle className="text-lg font-bold text-slate-900 text-center sm:text-left">{part.title}</DialogTitle>
                           </DialogHeader>
                           <div className="p-4 w-full h-full overflow-auto flex items-center justify-center bg-slate-50/50 min-h-[300px]">
                             <img src={part.image} alt={part.title} className="max-w-full h-auto object-contain" />
                           </div>
                         </DialogContent>
                       </Dialog>
                     ))}
                   </div>
                  </div>
                )}

                {product.options && (
                  <div id="tab-panel-options" role="tabpanel" aria-label={t('product.options')} className={activeTab === 'options' ? undefined : 'hidden'}>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-primary" /> {t('product.options_title')}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {product.options.map((option: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 p-4 border border-slate-100 rounded-sm bg-slate-50/50 hover:bg-white hover:border-primary/20 hover:shadow-sm transition-all group">
                          <div className="bg-white border border-slate-200 p-1.5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <Settings className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-700 font-medium text-sm">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                )}
              </div>

              {/* Footer Actions - Sticky on Mobile */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-4 sticky bottom-0 lg:relative z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:shadow-none">
                <Link href="/iletisim#contact-form" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-sm font-bold uppercase tracking-wide shadow-lg lg:shadow-none">
                    {t('product.request_quote')}
                  </Button>
                </Link>
                <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 hidden sm:block">
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-white h-12 rounded-sm font-bold uppercase tracking-wide">
                    <Download className="mr-2 w-4 h-4" /> {t('product.download_catalog')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Other Products - Infinite Marquee (ortak bileşen) */}
          <OtherProductsMarquee currentId={product.id} en={en} />
        </div>
      </div>
    </Layout>
  );
}