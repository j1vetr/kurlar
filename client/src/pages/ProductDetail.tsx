import { Layout } from "@/components/layout/Layout";
import { products } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, FileText, Ruler, Shield, Zap, Settings, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const [, params] = useRoute("/urunler/:id");
  const productId = params?.id;
  const product = products.find(p => p.id === productId);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs'>('overview');

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
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white rounded-none shadow-sm border border-slate-200 lg:flex overflow-hidden">
            
            {/* Left Column: Gallery */}
            <div className="lg:w-1/2 bg-white p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
               <div className="flex-grow flex items-center justify-center bg-slate-50/50 border border-slate-100 mb-4 p-8 min-h-[400px]">
                 <img 
                    src={galleryImages[activeImage]} 
                    alt={product.name}
                    className="max-w-full max-h-[400px] object-contain"
                  />
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
                <div className="flex items-center gap-2 mb-4">
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
                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tabs / Sections */}
              <div className="flex border-b border-slate-200 bg-slate-50">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={cn(
                    "flex-1 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                    activeTab === 'overview' ? "bg-white border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <Info className="w-4 h-4" /> Genel Bakış
                </button>
                <button 
                  onClick={() => setActiveTab('specs')}
                  className={cn(
                    "flex-1 py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                    activeTab === 'specs' ? "bg-white border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  <Ruler className="w-4 h-4" /> Teknik Veriler
                </button>
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
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border-l-2 border-slate-100 pl-3 py-1">
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
                        <Settings className="w-4 h-4 text-blue-600" /> Teknik Özellikler Tablosu
                      </h3>
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
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-sm font-bold uppercase tracking-wide">
                  Teklif İste
                </Button>
                <Button variant="outline" className="flex-1 border-slate-300 text-slate-700 hover:bg-white h-12 rounded-sm font-bold uppercase tracking-wide">
                  <Download className="mr-2 w-4 h-4" /> Katalog İndir
                </Button>
              </div>
            </div>
          </div>
          
          {/* Applications Section - Industrial Cards */}
          {product.applications && (
            <div className="mt-12">
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
