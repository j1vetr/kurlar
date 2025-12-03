import { Layout } from "@/components/layout/Layout";
import { products } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, FileText, Download, ChevronDown, ArrowRight } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function ProductDetail() {
  const [, params] = useRoute("/urunler/:id");
  const productId = params?.id;
  const product = products.find(p => p.id === productId);
  const [activeImage, setActiveImage] = useState(0);

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
      <div className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-sm text-slate-500 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link> / 
            <Link href="/urunler" className="hover:text-primary transition-colors">Ürünler</Link> / 
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Gallery Section (Left) - 5 Cols */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 mb-4 relative overflow-hidden shadow-sm min-h-[400px] flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-80" />
              <img 
                src={galleryImages[activeImage]} 
                alt={product.name}
                className="relative z-10 w-full max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`border rounded-xl p-2 bg-white transition-all ${activeImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-slate-100 hover:border-primary/50'}`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-20 object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Section (Right) - 7 Cols */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide inline-block mb-2">
                {product.subCategory}
              </span>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-primary/30 pl-6">
                {product.description}
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {product.features?.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  Teklif İste <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-200 hover:bg-slate-50 text-slate-700">
                  <Download className="mr-2 w-5 h-5" /> Katalog İndir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content Tabs */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start h-auto p-1 bg-slate-200/50 rounded-xl mb-8 overflow-x-auto flex-wrap">
              <TabsTrigger value="description" className="rounded-lg py-3 px-6 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm">Açıklama & Özellikler</TabsTrigger>
              <TabsTrigger value="specs" className="rounded-lg py-3 px-6 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm">Teknik Özellikler</TabsTrigger>
              {/* Removed Mechanical Parts tab as we are just displaying general info now, images are used in gallery or generic */}
              <TabsTrigger value="faq" className="rounded-lg py-3 px-6 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm">Sıkça Sorulan Sorular</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm focus-visible:ring-0">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Ürün Detayları</h3>
                <div className="whitespace-pre-line text-slate-600 leading-relaxed mb-8 text-lg">
                  {product.longDescription || product.description}
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-slate-900">Genel Özellikler</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                  {product.features?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {product.applications && (
                  <>
                    <h4 className="text-xl font-bold mt-8 mb-4 text-slate-900">Kullanım Alanları</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                      {product.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </TabsContent>

            <TabsContent value="specs" className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm focus-visible:ring-0">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Teknik Veriler</h3>
              {product.specs ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-2 rounded transition-colors">
                      <span className="font-medium text-slate-500">{key}</span>
                      <span className="font-bold text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">Teknik özellikler hazırlanıyor.</p>
              )}
            </TabsContent>

            <TabsContent value="faq" className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm focus-visible:ring-0">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Sıkça Sorulan Sorular</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium text-slate-900">Bu ürün hangi alanlarda kullanılır?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    Bu ürün özellikle tarımsal sulama, endüstriyel su temini, kuyu suyu çıkarımı ve basınçlandırma sistemlerinde yaygın olarak kullanılmaktadır. Dayanıklı yapısı sayesinde zorlu koşullarda güvenle tercih edilebilir.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium text-slate-900">Bakım periyotları nedir?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    Ürünümüz uzun ömürlü kullanım için tasarlanmıştır. Ancak optimum performans için 6 ayda bir genel kontrol, yılda bir kez detaylı bakım önerilmektedir. Çalışma koşullarına (su kalitesi, çalışma süresi) göre bu süreler değişebilir.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium text-slate-900">Yedek parça ve servis imkanı var mı?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    Evet, Kurlar olarak tüm ürünlerimiz için geniş yedek parça stoğumuz ve yetkili servis ağımız bulunmaktadır. Üretici firma olmamızın avantajıyla hızlı ve güvenilir destek sağlıyoruz.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium text-slate-900">Garanti süresi ne kadar?</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    Ürünlerimiz üretim hatalarına karşı 2 yıl garantilidir. Kullanıcı hatası dışındaki durumlarda teknik servisimiz ücretsiz destek sağlamaktadır.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Projeniz için desteğe mi ihtiyacınız var?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Uzman mühendislerimiz en doğru pompa seçimini yapmanız için size yardımcı olmaya hazır.
          </p>
          <Link href="/iletisim">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary text-white hover:bg-primary/90 border-0">
              Bizimle İletişime Geçin
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
