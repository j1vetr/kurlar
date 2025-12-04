import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, categories, getProductWithLanguage } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Globe, Building2, ArrowUpRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { SEO } from "@/components/shared/SEO";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <Layout noTopPadding={true}>
      <SEO 
        title={t('seo.home.title')} 
        description={t('seo.home.desc')} 
        canonical="https://kurlar.com.tr/"
      />
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
                <div className="absolute -bottom-6 -right-6 bg-primary/90 text-white p-6 rounded-lg shadow-xl hidden md:block">
                  <div className="text-3xl font-bold">1975</div>
                  <div className="text-sm text-blue-100 uppercase tracking-wider">{t('home.about.since')}</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                {t('home.about.title_1')} <br/> <span className="text-primary">{t('home.about.title_2')}</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {t('home.about.desc')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t('home.global_export')}</h4>
                    <p className="text-sm text-slate-500">{t('home.tech_transfer')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t('home.local_production')}</h4>
                    <p className="text-sm text-slate-500">{t('home.local_capital')}</p>
                  </div>
                </div>
              </div>

              <Link href="/hakkimizda">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white gap-2">
                  {t('nav.about')} <ArrowRight className="w-4 h-4" />
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
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                {t('home.products.range')}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                {t('home.products.solutions')}
              </h2>
            </div>
            <Link href="/urunler">
              <Button variant="ghost" className="text-slate-600 hover:text-primary hover:bg-blue-50 mt-4 md:mt-0">
                {t('home.products.view_all')} <ArrowRight className="ml-2 w-4 h-4" />
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
             {[...products, ...products].map((baseProduct, index) => {
               const product = getProductWithLanguage(baseProduct, language);
               return (
               <div key={`${product.id}-${index}`} className="w-[300px] md:w-[380px] flex-shrink-0">
                 <Link href={`/urunler/${product.id}`}>
                   <a className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary transition-all duration-300 hover:shadow-xl flex flex-col h-full">
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
                       
                       <div className="absolute bottom-4 right-4 bg-primary text-white rounded-full p-3 shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                         <ArrowUpRight className="w-5 h-5" />
                       </div>
                     </div>
                     
                     {/* Content Area */}
                     <div className="p-6 flex flex-col flex-grow border-t border-slate-50">
                       <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                         {product.name}
                       </h3>
                       <p className="text-sm text-slate-500 line-clamp-2 mt-auto leading-relaxed">
                         {product.description}
                       </p>
                     </div>
                   </a>
                 </Link>
               </div>
               );
             })}
           </motion.div>
        </div>
          
        <div className="container mx-auto px-6">
          
        </div>
      </section>

      {/* Contact Strip Removed */}
    </Layout>
  );
}
