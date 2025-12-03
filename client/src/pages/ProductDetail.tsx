import { Layout } from "@/components/layout/Layout";
import { products } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, FileText, Ruler, Shield, Zap, Settings, Info, Layers, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
  const product = products.find(p => p.id === productId);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'parts'>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Ürün Bulunamadı</h1>
          <Link href="/urunler"><Button>Ürünlere Dön</Button></Link>
        </div>
      </Layout>
    );
  }

  const galleryImages = product.gallery || [product.image];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-xs font-medium text-slate-500 uppercase tracking-wide gap-2">
            <Link href="/" className="hover:text-slate-900">Ana Sayfa</Link> / 
            <Link href="/urunler" className="hover:text-slate-900">Ürünler</Link> / 
            <span className="text-slate-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Area - Functional Industrial Layout */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white rounded-none shadow-sm border border-slate-200 lg:flex overflow-hidden mb-16">
            
            {/* Left Column: Gallery */}
            <div className="lg:w-1/2 bg-white p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
               <div className="flex-grow flex items-center justify-center bg-slate-50/50 border border-slate-100 mb-4 p-8 h-[220px] overflow-hidden relative group cursor-zoom-in">
                 {/* Quality Badges */}
                 <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
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
               </div>
               
               {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        "border bg-slate-50 p-2 h-20 flex items-center justify-center transition-all",
                        activeImage === idx ? "border-blue-600 ring-1 ring-blue-600" : "border-slate-200 hover:border-slate-300"
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
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      IP68
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                  {product.name}
                </h1>
                
                {product.availableSizes && (
                  <div className="mb-6 inline-flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mevcut Boyutlar (İnç)</span>
                    <span className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-sm shadow-sm flex items-center gap-2 self-start">
                      <Ruler className="w-4 h-4" /> {product.availableSizes}
                    </span>
                  </div>
                )}

                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tabs / Sections */}
              <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={cn(
                    "flex-1 min-w-[120px] py-4 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                    activeTab === 'overview' ? "bg-white border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <Info className="w-4 h-4" /> Genel Bakış
                </button>
                <button 
                  onClick={() => setActiveTab('specs')}
                  className={cn(
                    "flex-1 min-w-[120px] py-4 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                    activeTab === 'specs' ? "bg-white border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <Ruler className="w-4 h-4" /> Teknik Veriler
                </button>
                {product.mechanicalPartsImages && (
                  <button 
                    onClick={() => setActiveTab('parts')}
                    className={cn(
                      "flex-1 min-w-[120px] py-4 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                      activeTab === 'parts' ? "bg-white border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <Layers className="w-4 h-4" /> Mekanik Parçalar
                  </button>
                )}
              </div>

              {/* Tab Content */}
              <div className="flex-grow p-8 bg-white overflow-y-auto max-h-[500px]">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" /> Ürün Açıklaması
                      </h3>
                      <div className="prose prose-sm text-slate-600 max-w-none">
                        <p className="whitespace-pre-line">{product.longDescription || product.description}</p>
                      </div>
                    </div>
                    
                    <div>
                       <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-600" /> Özellikler
                      </h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {product.features?.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border-l-2 border-slate-100 pl-3 py-1 capitalize">
                            <span className="block mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></span>
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
                        <Settings className="w-4 h-4 text-blue-600" /> Teknik Özellikler
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
                   <div className="space-y-8">
                     {product.mechanicalPartsImages.map((part, idx) => (
                       <div key={idx}>
                         <h4 className="font-bold text-slate-900 mb-2">{part.title}</h4>
                         <div className="bg-white border border-slate-200 p-4 rounded-sm">
                           <img src={part.image} alt={part.title} className="w-full h-auto" />
                         </div>
                       </div>
                     ))}
                   </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-sm font-bold uppercase tracking-wide">
                  Teklif İste
                </Button>
                <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-white h-12 rounded-sm font-bold uppercase tracking-wide">
                    <Download className="mr-2 w-4 h-4" /> 2025 Kataloğu İndir
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Section - Beautiful Accordion Design */}
          {product.faq && product.faq.length > 0 && (
             <div className="max-w-4xl mx-auto mb-16">
                <div className="text-center mb-12">
                   <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                     <HelpCircle className="w-8 h-8 text-blue-600" /> Sıkça Sorulan Sorular
                   </h2>
                   <p className="text-slate-500">Bu ürün hakkında en çok merak edilen soruların cevapları.</p>
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
                            openFaq === index ? "rotate-180 text-blue-600" : ""
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

          {/* Applications Section - Industrial Cards */}
          {product.applications && (
            <div className="mb-16">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" /> Kullanım Alanları
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.applications.map((app, i) => (
                  <div key={i} className="bg-white p-6 border border-slate-200 border-l-4 border-l-blue-600 shadow-sm">
                    <h4 className="font-bold text-slate-900">{app}</h4>
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
