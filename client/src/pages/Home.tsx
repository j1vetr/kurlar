import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Globe, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Select featured products (one from each main type if possible)
  const featuredProducts = [
    products.find(p => p.id === 'kp'),
    products.find(p => p.id === 'kpn'),
    products.find(p => p.id === 'km'),
    products.find(p => p.id === 'kms')
  ].filter(Boolean) as typeof products;

  return (
    <Layout noTopPadding={true}>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section - Clean & Premium */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                  Hakkımızda
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                  Yarım Asırlık Tecrübe, <br/>
                  <span className="text-slate-400">Global Mühendislik</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  1975 yılından bu yana dalgıç pompa ve motor teknolojilerinde Türkiye'nin öncü markası olarak, 
                  suyun gücünü teknolojiyle buluşturuyoruz. 25.000m² üretim tesisimizde, 
                  uluslararası standartlarda üretim yapıyor ve 40'tan fazla ülkeye ihracat gerçekleştiriyoruz.
                </p>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-slate-900">Global Erişim</h4>
                    </div>
                    <p className="text-sm text-slate-500">40+ Ülkeye İhracat</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-slate-900">Dev Üretim</h4>
                    </div>
                    <p className="text-sm text-slate-500">35.000m² Tesis</p>
                  </div>
                </div>

                <Link href="/hakkimizda">
                  <Button variant="outline" className="h-12 px-8 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full">
                    Hikayemizi Keşfedin <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Image Composition */}
            <div className="order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/gallery/kurlarsld.png" 
                    alt="Kurlar Fabrika" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-2xl font-bold text-slate-900">200+</span>
                      <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Uzman Personel</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full -z-10 blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Showcase - Dark & Modern */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                Ürünlerimiz
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Mükemmellik İçin <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Tasarlandı
                </span>
              </h2>
            </div>
            <Link href="/urunler">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 mt-8 md:mt-0 backdrop-blur-sm">
                Tüm Ürünleri İncele <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Category Cards - Large & Impactful */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/urunler?category=${cat.category}`}>
                <a className="group relative h-[300px] md:h-[400px] bg-slate-800 rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black opacity-90 z-0"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-10 z-20 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-heading font-bold mb-2 group-hover:text-blue-400 transition-colors">{cat.title}</h3>
                      <p className="text-slate-400 text-lg max-w-xs">{cat.description}</p>
                    </div>
                    <div className="flex items-center text-blue-400 font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Ürünleri Gör <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="absolute right-0 bottom-0 w-3/4 h-3/4 z-10 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-contain object-bottom drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                    />
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* Featured Products Grid - Minimal */}
          <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl font-bold mb-10 text-center md:text-left">Öne Çıkan Modeller</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  className="bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md text-white"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Contact Strip */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
            Projenize güç katmaya hazır mısınız?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 h-14 px-10 rounded-full font-bold text-lg shadow-xl shadow-blue-900/20">
                Hemen İletişime Geçin
              </Button>
            </Link>
            <Link href="/bayi-servis">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-10 rounded-full font-bold text-lg">
                En Yakın Bayi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
