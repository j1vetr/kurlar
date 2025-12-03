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

      {/* Ürünler Section - Re-designed with Infinite Marquee */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <div>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                Ürün Yelpazemiz
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Profesyonel Pompa ve Motor Çözümleri
              </h2>
            </div>
            <Link href="/urunler">
              <Button variant="ghost" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 mt-4 md:mt-0">
                Tüm Modelleri Gör <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Infinite Marquee Slider */}
        <div className="relative w-full">
           {/* Gradient Masks for Smooth Fade */}
           <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

           <motion.div 
             className="flex gap-8 px-6"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ 
               repeat: Infinity, 
               ease: "linear", 
               duration: 40 // Slow and smooth scroll
             }}
             style={{ width: "fit-content" }}
           >
             {/* Double the products array to create seamless loop */}
             {[...products, ...products].map((product, index) => (
               <div key={`${product.id}-${index}`} className="w-[300px] md:w-[380px] flex-shrink-0">
                 <Link href={`/urunler/${product.id}`}>
                   <a className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                     {/* Image Area */}
                     <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       
                       {/* Subcategory Badge */}
                       <div className="absolute top-4 left-4 z-20">
                         <span className="bg-white/90 backdrop-blur text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-slate-100">
                           {product.subCategory}
                         </span>
                       </div>

                       <img 
                         src={product.image} 
                         alt={product.name}
                         className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                       />
                       
                       <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                         <ArrowUpRight className="w-5 h-5" />
                       </div>
                     </div>
                     
                     {/* Content Area */}
                     <div className="p-6 flex flex-col flex-grow border-t border-slate-50">
                       <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                         {product.name}
                       </h3>
                       <p className="text-sm text-slate-500 line-clamp-2 mt-auto leading-relaxed">
                         {product.description}
                       </p>
                     </div>
                   </a>
                 </Link>
               </div>
             ))}
           </motion.div>
        </div>
          
        <div className="container mx-auto px-6">
          
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
