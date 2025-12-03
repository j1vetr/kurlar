import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, categories } from "@/lib/data";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Filter, Layers, Zap, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Products() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (activeCategory && activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Modern Hero Section with Gradient */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/30 to-transparent blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              Profesyonel Çözümler
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Endüstriyel Güç, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Mükemmel Performans
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Kurlar Dalgıç Pompa ve Motor sistemleri ile en zorlu koşullarda bile kesintisiz su temini ve yüksek verimlilik sağlayın.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50/50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Premium Sidebar */}
            <div className="w-full lg:w-72 shrink-0 space-y-8">
              {/* Filter Box */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-50">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Filter className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">Kategoriler</h3>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                      activeCategory === 'all' 
                        ? "bg-primary text-white shadow-lg shadow-primary/25" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Layers className="w-4 h-4" /> Tüm Ürünler
                    </span>
                    {activeCategory === 'all' && <ChevronRight className="w-4 h-4" />}
                  </button>

                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.category)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                        activeCategory === cat.category 
                          ? "bg-primary text-white shadow-lg shadow-primary/25" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {cat.category === 'pump' ? <Layers className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                        {cat.title}
                      </span>
                      {activeCategory === cat.category && <ChevronRight className="w-4 h-4" />}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Hızlı Filtre</h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input 
                      placeholder="Ürün Ara..." 
                      className="pl-10 h-10 bg-slate-50 border-slate-100 focus:bg-white transition-colors text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden hidden lg:block">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <h4 className="font-bold text-lg mb-2 relative z-10">Proje Desteği</h4>
                <p className="text-blue-100 text-sm mb-4 relative z-10 leading-relaxed">
                  Projeniz için en uygun pompa seçimini mühendislerimizle birlikte yapın.
                </p>
                <Button variant="secondary" size="sm" className="w-full bg-white text-blue-700 hover:bg-blue-50 border-0 relative z-10">
                  İletişime Geç
                </Button>
              </div>
            </div>

            {/* Product Grid Area */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-bold text-2xl text-slate-900">
                  {activeCategory === 'all' ? 'Tüm Ürünler' : categories.find(c => c.category === activeCategory)?.title}
                </h2>
                <span className="text-slate-500 text-sm bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                  {filteredProducts.length} Sonuç
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredProducts.map(product => (
                    <motion.div key={product.id} variants={itemVariants}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-dashed border-slate-200 text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sonuç Bulunamadı</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mb-6">
                    "{searchQuery}" aramasına uygun ürün bulamadık. Lütfen farklı anahtar kelimeler deneyin.
                  </p>
                  <Button variant="outline" onClick={() => {setActiveCategory('all'); setSearchQuery('');}}>
                    Filtreleri Temizle
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
