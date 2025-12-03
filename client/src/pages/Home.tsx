import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Select a few featured products
  const featuredProducts = [
    products.find(p => p.id === 'kp1'),
    products.find(p => p.id === 'kpn41'),
    products.find(p => p.id === 'km1'),
    products.find(p => p.id === 'ksx1')
  ].filter(Boolean) as typeof products;

  return (
    <Layout>
      <Hero />

      {/* Section 2: Smooth Transition Categories */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Ürün Kategorileri</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                İhtiyacınıza Uygun <br/> Profesyonel Çözümler
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md mt-6 md:mt-0 text-lg">
              Endüstriyel, tarımsal ve evsel kullanım için optimize edilmiş geniş ürün yelpazemizi keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <Link key={category.id} href={`/urunler?category=${category.category}`}>
                <a className="group relative h-[400px] overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  {/* Background Gradient Blob */}
                  <div className={`absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br ${idx === 0 ? 'from-blue-50 to-transparent' : 'from-cyan-50 to-transparent'} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`} />
                  
                  <div className="absolute inset-0 p-10 flex flex-col z-10">
                    <div className="mb-auto">
                       <h3 className="text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-blue-700 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-bold group/btn">
                      <span className="mr-2">İncele</span>
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-300">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Image Positioned Absolute */}
                  <div className="absolute bottom-0 right-0 w-3/5 h-4/5 flex items-end justify-end p-6">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-contain object-bottom drop-shadow-2xl group-hover:scale-110 group-hover:-translate-x-4 transition-transform duration-700 ease-out"
                    />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Dark Engineering Section (Parallax feel) */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 blur-[100px] rounded-full"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                Kurlar'ın <span className="text-blue-400">Mühendislik Gücü</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Sadece bir pompa değil, verimlilik ve dayanıklılık üretiyoruz. 
                Her bir parçası, maksimum performans ve minimum enerji tüketimi için 
                titizlikle tasarlanmıştır.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Paslanmaz Dayanıklılık", desc: "Korozyona karşı maksimum direnç sağlayan özel alaşımlar." },
                  { title: "Enerji Verimliliği", desc: "Optimize edilmiş hidrolik tasarım ile düşük enerji tüketimi." },
                  { title: "Sessiz Çalışma", desc: "Gelişmiş balans teknolojisi ile minimum titreşim ve ses." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-blue-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
               {/* Abstract Composition */}
               <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                       <span className="block text-4xl font-bold text-blue-400 mb-2">30+</span>
                       <span className="text-sm text-slate-400">Yıllık Tecrübe</span>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                       <span className="block text-4xl font-bold text-cyan-400 mb-2">15k</span>
                       <span className="text-sm text-slate-400">m² Üretim Alanı</span>
                    </div>
                    <div className="col-span-2 bg-slate-800/50 p-6 rounded-xl text-center">
                       <span className="block text-4xl font-bold text-white mb-2">%100</span>
                       <span className="text-sm text-slate-400">Yerli Mühendislik & Üretim</span>
                    </div>
                 </div>
               </div>
               {/* Decorative back element */}
               <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl -z-10 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Products Carousel Style */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Öne Çıkan Modeller</h2>
            <p className="text-muted-foreground text-lg">
              En zorlu projelerde tercih edilen, yüksek performanslı amiral gemisi ürünlerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} className="bg-white shadow-md hover:shadow-xl border-none" />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/urunler">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-12 h-14 rounded-full transition-all duration-300">
                Tüm Ürünleri İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Projenize Özel Çözümler
              </h2>
              <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                Teknik ekibimizle iletişime geçin, ihtiyaçlarınıza en uygun pompa sistemini birlikte belirleyelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/iletisim">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-10 h-14 rounded-full text-lg">
                    Teklif İste
                  </Button>
                </Link>
                <Link href="/bayi-servis">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-10 h-14 rounded-full text-lg backdrop-blur-sm">
                    Bayi Bul
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
