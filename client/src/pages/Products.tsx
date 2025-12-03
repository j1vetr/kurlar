import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/lib/data";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, ArrowDown } from "lucide-react";

export default function Products() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const categoryFilter = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  // Filter products logic (kept minimal for data integrity, but UI will be direct)
  const filteredProducts = products.filter(product => {
    if (categoryFilter && product.category !== categoryFilter) return false;
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Group products by category for display
  const pumpProducts = products.filter(p => p.category === 'pump');
  const motorProducts = products.filter(p => p.category === 'motor');

  return (
    <Layout>
      {/* Hero Header */}
      <div className="bg-slate-900 py-20 text-center">
        <div className="container mx-auto px-6">
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
             Ürün Yelpazemiz
           </h1>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             Endüstriyel standartlarda, yüksek performanslı dalgıç pompa ve motor çözümleri.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        
        {/* Pumps Section */}
        <div className="mb-24" id="pumps">
           <div className="flex items-end justify-between border-b border-slate-200 pb-6 mb-12">
              <div>
                 <h2 className="text-3xl font-heading font-bold text-slate-900">Dalgıç Pompalar</h2>
                 <p className="text-slate-500 mt-2">Paslanmaz, Noryl ve Döküm serisi profesyonel pompalar.</p>
              </div>
              <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-wider">
                 {pumpProducts.length} Model
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pumpProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </div>

        {/* Motors Section */}
        <div id="motors">
           <div className="flex items-end justify-between border-b border-slate-200 pb-6 mb-12">
              <div>
                 <h2 className="text-3xl font-heading font-bold text-slate-900">Dalgıç Motorlar</h2>
                 <p className="text-slate-500 mt-2">Yüksek verimli, uzun ömürlü motor teknolojileri.</p>
              </div>
              <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-wider">
                 {motorProducts.length} Model
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {motorProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </div>

      </div>
    </Layout>
  );
}
