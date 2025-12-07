import { Layout } from "@/components/layout/Layout";
import { products, getProductWithLanguage } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ArrowRight, FileText, Ruler, Shield, Zap, Settings, Info, Layers, HelpCircle, ChevronDown, Sliders, ArrowUpRight, ChevronRight, Home, Thermometer, Activity, Box } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { SEO } from "@/components/shared/SEO";

function ImageMagnifier({ src, alt }: { src: string; alt: string }) {
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
        className="max-w-full max-h-full object-contain pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: zoom ? 'scale(1.5)' : 'scale(1)', // Reduced scale from 2 to 1.5
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
}

function HiTempProductLayout({ product }: { product: any }) {
  const { t } = useLanguage();
  const [activeSeries, setActiveSeries] = useState("6");
  const [activeImage, setActiveImage] = useState(0);
  const galleryImages = product.gallery || [product.image];

  return (
    <Layout>
      <SEO 
        title={product.name} 
        description={product.description} 
        canonical={`https://kurlar.com.tr/urunler/${product.id}`}
      />
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 py-12 md:py-20 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Column: Image Gallery */}
            <div className="w-full lg:w-5/12">
              <div className="relative">
                {/* Main Image Container */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-4 relative group">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                    <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-2 rounded-lg shadow-xl">
                      <Thermometer className="w-5 h-5 text-red-500" />
                    </div>
                  </div>
                  
                  <div className="relative h-[300px] md:h-[400px] flex items-center justify-center p-4">
                     {/* Glow Effect behind image */}
                     <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform scale-75 opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                     
                     <div className="relative z-10 w-full h-full">
                       <ImageMagnifier src={galleryImages[activeImage]} alt={product.name} />
                     </div>
                  </div>

                  {/* Zoom Hint */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur text-slate-400 text-xs px-3 py-1.5 rounded-full border border-slate-700 flex items-center gap-2 pointer-events-none">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    Hover to zoom
                  </div>
                </div>

                {/* Thumbnails */}
                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {galleryImages.map((img: string, idx: number) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={cn(
                          "bg-slate-800/50 backdrop-blur-sm border rounded-xl p-2 h-20 flex items-center justify-center transition-all duration-300 relative overflow-hidden group",
                          activeImage === idx 
                            ? "border-primary ring-1 ring-primary shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)]" 
                            : "border-slate-700 hover:border-slate-600 hover:bg-slate-800"
                        )}
                      >
                        <img src={img} alt="" className="max-w-full max-h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-7/12">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-primary/25">
                  <Thermometer className="w-3 h-3" /> Hi-Temp Series
                </span>
                <span className="bg-slate-800/50 backdrop-blur-sm text-slate-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  IP68 Protection
                </span>
                <span className="bg-slate-800/50 backdrop-blur-sm text-slate-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700 flex items-center gap-1">
                  <Box className="w-3 h-3" /> 6" - 10"
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-white">
                {product.name}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl border-l-4 border-primary/50 pl-6">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl">
                 <div className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg">
                    <Thermometer className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                       <div className="text-slate-400 text-xs uppercase font-bold">Max Temp</div>
                       <div className="text-white font-bold">Up to 90°C</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg">
                    <Zap className="w-5 h-5 text-primary" />
                    <div className="text-sm">
                       <div className="text-slate-400 text-xs uppercase font-bold">Efficiency</div>
                       <div className="text-white font-bold">High (PBN Wire)</div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim#contact-form">
                  <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-full font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95">
                    {t('product.request_quote')}
                  </Button>
                </Link>
                <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 rounded-full font-bold text-lg bg-transparent transition-all">
                    <Download className="mr-2 w-5 h-5" /> {t('product.download_catalog')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          
          <Tabs defaultValue="overview" className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Sidebar Navigation */}
              <div className="w-full md:w-64 flex-shrink-0 space-y-8 sticky top-24">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2">
                  <TabsList className="flex flex-col h-auto bg-transparent p-0 gap-1">
                    <TabsTrigger value="overview" className="w-full justify-start px-4 py-3 text-base font-bold data-[state=active]:bg-slate-100 data-[state=active]:text-primary rounded-xl transition-all">
                      <Info className="w-4 h-4 mr-3" /> {t('product.overview')}
                    </TabsTrigger>
                    <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">Series Specs</div>
                    {['6', '7', '8', '10'].map(size => (
                      <TabsTrigger key={size} value={`series-${size}`} className="w-full justify-start px-4 py-3 text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-white rounded-xl transition-all">
                        <Ruler className="w-4 h-4 mr-3" /> {size}" Series
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Quick Contacts */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg">
                   <h4 className="font-bold text-lg mb-2">Need Help?</h4>
                   <p className="text-slate-400 text-sm mb-4">Our engineers are ready to assist with your specific requirements.</p>
                   <Link href="/iletisim">
                     <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                       Contact Engineering
                     </Button>
                   </Link>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8 mt-0 focus-visible:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                         <Thermometer className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">High Temperature</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Engineered to operate continuously at 60°C standard, with options up to 90°C. Perfect for geothermal and industrial applications.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                         <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">High Efficiency</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Special PBN winding wire and optimized magnetic design deliver superior efficiency, reducing operational costs significantly.
                      </p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Product Description</h3>
                    <div className="prose prose-slate max-w-none text-slate-600">
                      <p className="whitespace-pre-line text-lg leading-relaxed">{product.longDescription}</p>
                    </div>
                    
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features?.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Series Tabs */}
                {['6', '7', '8', '10'].map(size => {
                   const specs = product.subSpecs?.filter((s: any) => s.title.includes(size + '"'));
                   
                   return (
                    <TabsContent key={size} value={`series-${size}`} className="space-y-8 mt-0 focus-visible:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-slate-900 text-white px-8 py-6 flex items-center justify-between">
                           <div>
                             <h2 className="text-2xl font-bold flex items-center gap-3">
                               <span className="bg-primary px-3 py-1 rounded text-lg">{size}"</span>
                               Series Technical Data
                             </h2>
                             <p className="text-slate-400 mt-1">High Temperature Submersible Motor Specifications</p>
                           </div>
                           <Activity className="w-8 h-8 text-slate-500 hidden sm:block" />
                        </div>
                        
                        <div className="p-0">
                          {specs && specs.length > 0 ? (
                            specs.map((spec: any, idx: number) => (
                              <div key={idx} className={cn("p-6 md:p-8", idx !== 0 && "border-t border-slate-200")}>
                                <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                                  {spec.title.includes('Sandık') ? <Box className="w-5 h-5 text-primary" /> : <Settings className="w-5 h-5 text-primary" />}
                                  {spec.title}
                                </h3>
                                
                                <div className="overflow-x-auto rounded-xl border border-slate-200">
                                  <table className="w-full text-sm text-left whitespace-nowrap border-separate border-spacing-0">
                                    <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-bold tracking-wider">
                                      <tr>
                                        {spec.columns.map((col: string, i: number) => (
                                          <th key={i} className={cn(
                                            "px-6 py-4 border-b border-slate-200 border-r border-slate-200 last:border-r-0 bg-slate-50",
                                            i === 0 && "sticky left-0 z-10 border-r-2 border-r-slate-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]"
                                          )}>{col}</th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                      {spec.data.map((row: string[], i: number) => (
                                        <tr key={i} className="hover:bg-blue-50/30 transition-colors group bg-white">
                                          {row.map((cell: string, j: number) => (
                                            <td key={j} className={cn(
                                              "px-6 py-4 font-medium border-r border-slate-50 last:border-r-0 tabular-nums transition-colors",
                                              j === 0 ? "text-primary font-bold bg-white sticky left-0 z-10 border-r-2 border-r-slate-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-blue-50/50" : "text-slate-600"
                                            )}>{cell}</td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="p-12 text-center text-slate-400">
                              No technical data available for this series yet.
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                   );
                })}

              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default function ProductDetail() {
  const [, params] = useRoute("/urunler/:id");
  const productId = params?.id;
  const { t, language } = useLanguage();
  
  const baseProduct = products.find(p => p.id === productId);
  const product = baseProduct ? getProductWithLanguage(baseProduct, language) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'parts' | 'options'>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">{t('product.not_found')}</h1>
          <Link href="/urunler"><Button>{t('product.back')}</Button></Link>
        </div>
      </Layout>
    );
  }

  // Use Special Layout for Hi-Temp Motors
  if (product.id === 'km') {
    return <HiTempProductLayout product={product} />;
  }

  const galleryImages = product.gallery || [product.image];

  return (
    <Layout>
      <SEO 
        title={product.name} 
        description={product.description} 
        canonical={`https://kurlar.com.tr/urunler/${product.id}`}
      />
      {/* Breadcrumb - Redesigned */}
      <div className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-1">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                {t('nav.home')}
              </Link>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <Link href="/urunler" className="hover:text-primary transition-colors">
                {t('nav.products')}
              </Link>
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
                       <img src="/assets/quality/tse.png" alt="TSE" className="w-full h-full object-contain" />
                     </div>
                   </div>
                   <div className="bg-white/90 backdrop-blur-sm border border-slate-200 p-1.5 rounded shadow-sm" title="Conformité Européenne">
                     <div className="w-8 h-8 flex items-center justify-center">
                       <img src="/assets/quality/ce.png" alt="CE" className="w-full h-full object-contain" />
                     </div>
                   </div>
                 </div>
                 
                 <ImageMagnifier src={galleryImages[activeImage]} alt={product.name} />

                 {/* Zoom Hint Badge */}
                 <div className="absolute bottom-4 right-4 z-10 bg-white/80 backdrop-blur text-slate-500 text-[10px] md:text-xs px-2 py-1 rounded-full shadow-sm border border-slate-200 flex items-center gap-1 pointer-events-none">
                    <span className="md:hidden">{t('product.zoom_hint_mobile')}</span>
                    <span className="hidden md:inline">{t('product.zoom_hint_desktop')}</span>
                    <div className="w-3 h-3 md:w-4 md:h-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21L16.65 16.65" />
                        <path d="M11 8V14" />
                        <path d="M8 11H14" />
                      </svg>
                    </div>
                 </div>
               </div>
               
               {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        "border bg-slate-50 p-2 h-20 flex items-center justify-center transition-all",
                        activeImage === idx ? "border-primary ring-1 ring-primary" : "border-slate-200 hover:border-slate-300"
                      )}
                    >
                      <img src={img} alt="" className="max-w-full max-h-full object-contain" />
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
                
                {/* product.availableSizes removed as per request */}

                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tabs / Sections - Improved for Mobile (Pill Design) */}
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-4">
                {/* Mobile Dropdown for very small screens or simple list */}
                <div className="md:hidden flex flex-col gap-2">
                  <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-4 px-4">
                    <button 
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
                <div className="hidden md:flex gap-0 overflow-x-auto relative scrollbar-hide -mb-[17px]">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={cn(
                      "min-w-[140px] py-4 px-6 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap border-b-2 z-10",
                      activeTab === 'overview' ? "bg-white border-primary text-primary rounded-t-lg" : "text-slate-500 border-transparent hover:text-slate-700 hover:bg-white/50"
                    )}
                  >
                    <Info className="w-4 h-4" /> {t('product.overview')}
                  </button>
                  <button 
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

              {/* Tab Content */}
              <div className="flex-grow p-8 bg-white overflow-y-auto max-h-[500px]">
                {activeTab === 'overview' && (
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
                        {product.features?.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border-l-2 border-slate-100 pl-3 py-1 capitalize">
                            <span className="block mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div>
                     <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-primary" /> {t('product.specs_title')}
                      </h3>
                      
                      {product.specsImage && (
                        <div className="mb-8">
                          <img src={product.specsImage} alt="Teknik Özellikler" className="w-full border border-slate-200 rounded-sm" />
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
                                  <td className="px-4 py-3 font-bold text-slate-900">{value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Standard SubSpecs Rendering for other products */}
                      {product.subSpecs && product.subSpecs.map((spec, idx) => (
                        <div key={idx} className="mt-8 border border-slate-200 rounded-sm overflow-hidden shadow-sm">
                          <h4 className="bg-slate-100 px-4 py-3 font-bold text-slate-900 border-b border-slate-200 flex items-center gap-2">
                             <Ruler className="w-4 h-4 text-primary" /> {spec.title}
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left whitespace-nowrap">
                              <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-bold tracking-wider">
                                <tr>
                                  {spec.columns.map((col, i) => (
                                    <th key={i} className="px-4 py-3 border-b border-slate-200 border-r border-slate-200 last:border-r-0">{col}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 bg-white">
                                {spec.data.map((row, i) => (
                                  <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                                    {row.map((cell, j) => (
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
                )}

                {activeTab === 'parts' && product.mechanicalPartsImages && (
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {product.mechanicalPartsImages.map((part, idx) => (
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
                )}

                {activeTab === 'options' && product.options && (
                  <div>
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-primary" /> {t('product.options_title')}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {product.options.map((option, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 border border-slate-100 rounded-sm bg-slate-50/50 hover:bg-white hover:border-primary/20 hover:shadow-sm transition-all group">
                          <div className="bg-white border border-slate-200 p-1.5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <Settings className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-700 font-medium text-sm">{option}</span>
                        </div>
                      ))}
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
          
          {/* Other Products - Infinite Marquee */}
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
                 {[...products, ...products].filter(p => p.id !== product.id).map((baseP, index) => {
                   const p = getProductWithLanguage(baseP, language);
                   return (
                   <div key={`${p.id}-${index}`} className="w-[260px] md:w-[320px] flex-shrink-0">
                     <Link href={`/urunler/${p.id}`}>
                       <a className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                         <div className="aspect-[4/5] bg-white relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           
                           <div className="absolute top-3 left-3 z-20">
                             {/* Subcategory Badge removed as per request */}
                           </div>

                           <img 
                             src={p.image} 
                             alt={p.name}
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
                       </a>
                     </Link>
                   </div>
                   );
                 })}
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}