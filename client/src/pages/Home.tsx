import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Globe, Building2, ArrowUpRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Explicitly select the main products for the homepage
  const featuredProducts = [
    products.find(p => p.id === 'kp'),
    products.find(p => p.id === 'kpn'),
    products.find(p => p.id === 'kpd'),
    products.find(p => p.id === 'ksx'),
  ].filter(Boolean) as typeof products;

  return (
    <Layout noTopPadding={true}>
      <Hero />

      {/* Hakkımızda Section - Clean, Corporate */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/gallery/kurlarsld.png" 
                    alt="Kurlar Fabrika" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg shadow-xl hidden md:block">
                  <div className="text-3xl font-bold">1975</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wider">Yılından Beri</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Mühendislik ve Kalitenin <br/> <span className="text-blue-600">Buluşma Noktası</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Türkiye'nin ilk Paslanmaz Çelik Dalgıç Pompa üreticisi olarak, 25.000m² üretim tesisimizde dünya standartlarında çözümler üretiyoruz. 40'tan fazla ülkeye ihracat yaparak kalitemizi global pazarda kanıtlıyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Global İhracat</h4>
                    <p className="text-sm text-slate-500">40+ Ülkeye teknoloji transferi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Yerli Üretim</h4>
                    <p className="text-sm text-slate-500">%100 Yerli sermaye ve üretim</p>
                  </div>
                </div>
              </div>

              <Link href="/hakkimizda">
                <Button className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 rounded-lg">
                  Kurumsal Sayfamız <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünler Section - Re-designed from scratch */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                Ürün Yelpazemiz
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Profesyonel Pompa Sistemleri
              </h2>
            </div>
            <Link href="/urunler">
              <Button variant="ghost" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 mt-4 md:mt-0">
                Tüm Modelleri Gör <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/urunler/${product.id}`}>
                <a className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                  {/* Image Area */}
                  <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                      <ArrowUpRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-2">
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                         {product.subCategory}
                       </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mt-auto">
                      {product.description}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          
          {/* Categories Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
             {categories.map(cat => (
               <Link key={cat.id} href={`/urunler?category=${cat.category}`}>
                 <a className="flex items-center bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group">
                    <div className="w-20 h-20 bg-slate-50 rounded-lg flex items-center justify-center p-2 shrink-0 mr-6 group-hover:bg-blue-50 transition-colors">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {cat.title}
                      </h4>
                      <p className="text-sm text-slate-500 mb-2">{cat.description}</p>
                      <span className="text-sm font-bold text-blue-600 flex items-center">
                        Kategoriye Git <ChevronRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                 </a>
               </Link>
             ))}
          </div>

        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Projenize Özel Çözümler İçin</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Teknik ekibimiz ihtiyaçlarınıza en uygun pompa sistemini belirlemek için hazır.
          </p>
          <Link href="/iletisim">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-full font-bold">
              Bize Ulaşın
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
