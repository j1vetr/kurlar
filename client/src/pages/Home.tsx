import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3 } from "lucide-react";
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

      {/* Categories Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/urunler?category=${category.category}`}>
                <a className="group relative overflow-hidden rounded-lg bg-slate-50 border border-border hover:border-primary/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row items-center h-full">
                    <div className="p-10 flex-1 z-10 relative">
                      <h2 className="text-3xl font-heading font-bold text-primary mb-3 group-hover:translate-x-2 transition-transform duration-300">
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 max-w-xs">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary">
                        Tüm Modelleri Gör <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                    <div className="flex-1 h-64 md:h-full w-full relative flex items-center justify-center bg-gradient-to-br from-slate-100 to-white">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-auto h-48 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Power Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Kurlar'ın Üretim Gücü
            </h2>
            <p className="text-muted-foreground text-lg">
              Modern teknoloji ve uzman mühendislik ile suyun gücünü yönetiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Üstün Dayanıklılık", desc: "En zorlu koşullarda bile uzun ömürlü kullanım için test edilmiş malzemeler." },
              { icon: Zap, title: "Yüksek Verimlilik", desc: "Enerji tasarrufu sağlayan gelişmiş motor ve hidrolik teknolojisi." },
              { icon: BarChart3, title: "Performans Odaklı", desc: "Her damlada maksimum basınç ve debi sağlayan optimize edilmiş tasarım." },
              { icon: CheckCircle2, title: "Tam Kalite Kontrol", desc: "Üretimin her aşamasında %100 test ve kalite güvencesi." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-50/50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Öne Çıkan Ürünler</h2>
              <p className="text-muted-foreground">En çok tercih edilen profesyonel çözümlerimiz.</p>
            </div>
            <Link href="/urunler">
              <Button variant="outline" className="hidden md:flex">Tüm Ürünler</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/urunler">
              <Button variant="outline" className="w-full">Tüm Ürünler</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Map Link */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Size En Yakın Çözüm Ortağını Bulun
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Türkiye genelindeki yaygın bayi ve servis ağımızla her zaman yanınızdayız.
            Hızlı teknik destek ve yedek parça garantisi.
          </p>
          <Link href="/bayi-servis">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 border-none font-bold px-10 h-14">
              Bayi Haritasını İncele
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
