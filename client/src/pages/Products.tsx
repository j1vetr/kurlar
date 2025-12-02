import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, categories } from "@/lib/data";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

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

  return (
    <Layout>
      <div className="bg-slate-50 border-b border-border py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Ürünlerimiz</h1>
          <p className="text-muted-foreground max-w-2xl">
            Endüstriyel ve tarımsal ihtiyaçlarınız için yüksek performanslı dalgıç pompa ve motor çözümleri.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Kategoriler
              </h3>
              <div className="flex flex-col gap-2">
                <Button
                  variant={activeCategory === 'all' ? "default" : "ghost"}
                  className={cn("justify-start w-full", activeCategory === 'all' && "bg-primary text-white")}
                  onClick={() => setActiveCategory('all')}
                >
                  Tüm Ürünler
                </Button>
                {categories.map(cat => (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.category ? "default" : "ghost"}
                    className={cn("justify-start w-full", activeCategory === cat.category && "bg-primary text-white")}
                    onClick={() => setActiveCategory(cat.category)}
                  >
                    {cat.title}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-bold text-primary mb-2">Yardım mı lazım?</h4>
              <p className="text-sm text-blue-800/70 mb-4">
                Projeniz için en uygun pompayı seçmenize yardımcı olalım.
              </p>
              <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800">
                İletişime Geç
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Ürün adı, kod veya özellik ara..." 
                className="pl-10 h-12 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                <p className="text-muted-foreground">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                <Button variant="link" onClick={() => {setActiveCategory('all'); setSearchQuery('');}}>
                  Filtreleri Temizle
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
