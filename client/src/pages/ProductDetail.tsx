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
import { Download, ArrowRight, FileText, Ruler, Shield, Zap, Settings, Info, Layers, HelpCircle, ChevronDown, Sliders, ArrowUpRight, ChevronRight, Home } from "lucide-react";
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
                  {product.category === 'pump' && (
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      IP68
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                  {product.name}
                </h1>
                
                {product.availableSizes && (
                  <div className="mb-6 inline-flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('product.available_sizes')}</span>
                    <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-sm shadow-sm flex items-center gap-2 self-start">
                      <Ruler className="w-4 h-4" /> {product.availableSizes}
                    </span>
                  </div>
                )}

                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tabs / Sections */}
              <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto relative scrollbar-hide">
                {/* Scroll Hint Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none md:hidden" />
                
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={cn(
                    "flex-1 min-w-[120px] py-4 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                    activeTab === 'overview' ? "bg-white border-b-2 border-primary text-primary" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <Info className="w-4 h-4" /> {t('product.overview')}
                </button>
                <button 
                  onClick={() => setActiveTab('specs')}
                  className={cn(
                    "flex-1 min-w-[120px] py-4 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                    activeTab === 'specs' ? "bg-white border-b-2 border-primary text-primary" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <Ruler className="w-4 h-4" /> {t('product.specs')}
                </button>
                {product.mechanicalPartsImages && (
                  <button 
                    onClick={() => setActiveTab('parts')}
                    className={cn(
                      "flex-1 min-w-[120px] py-4 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                      activeTab === 'parts' ? "bg-white border-b-2 border-primary text-primary" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <Layers className="w-4 h-4" /> {t('product.parts')}
                  </button>
                )}
                {product.options && (
                  <button 
                    onClick={() => setActiveTab('options')}
                    className={cn(
                      "flex-1 min-w-[120px] py-4 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                      activeTab === 'options' ? "bg-white border-b-2 border-primary text-primary" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <Sliders className="w-4 h-4" /> {t('product.options')}
                  </button>
                )}
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

                      <div className="border border-slate-200 rounded-sm overflow-hidden">
                        <table className="w-full text-sm text-left">
                          <tbody className="divide-y divide-slate-200">
                            {product.specs && Object.entries(product.specs).map(([key, value], i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                <td className="px-4 py-3 font-medium text-slate-600 border-r border-slate-200 w-1/2">{key}</td>
                                <td className="px-4 py-3 font-bold text-slate-900">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
                             <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-slate-200">
                               {p.subCategory}
                             </span>
                           </div>

                           <img 
                             src={p.image} 
                             alt={p.name}
                             className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500 ease-out"
                           />
                         </div>
                         
                         <div className="p-5 flex flex-col flex-grow">
                           <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                             {p.name}
                           </h3>
                           <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-wide">
                             {t('product.review')} <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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

          {/* FAQ Section - Beautiful Accordion Design */}
          {product.faq && product.faq.length > 0 && (
             <div className="max-w-4xl mx-auto mb-16">
                <div className="text-center mb-12">
                   <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                     <HelpCircle className="w-8 h-8 text-primary" /> {t('product.faq_title')}
                   </h2>
                   <p className="text-slate-500">{t('product.faq_desc')}</p>
                </div>
                
                <div className="space-y-4">
                  {product.faq.map((item, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-bold text-slate-900 text-lg pr-8">{item.question}</span>
                        <ChevronDown 
                          className={cn(
                            "w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0",
                            openFaq === index ? "rotate-180 text-primary" : ""
                          )} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-0 border-t border-slate-50">
                              <p className="text-slate-600 leading-relaxed pt-4">{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
             </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
