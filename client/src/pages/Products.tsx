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
    if (searchQuery) {
       // Handle specific subcategory searches from navbar
       if (searchQuery.includes('Paslanmaz Çelik') && product.subCategory === 'Paslanmaz Çelik') return true;
       if (searchQuery.includes('Noryl') && product.subCategory === 'Noryl') return true;
       if (searchQuery.includes('Pik Döküm') && product.subCategory === 'Pik Döküm') return true;
       if (searchQuery.includes('Paslanmaz Döküm') && product.subCategory === 'Paslanmaz Döküm') return true;
       
       if (searchQuery.includes('Hi-Temp') && product.subCategory === 'HI-TEMP') return true;
       if (searchQuery.includes('S-Type') && product.subCategory === 'S-Type') return true;
       if (searchQuery.includes('Yağlı Tip') && product.subCategory === 'Yağlı Tip') return true;
       
       return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (categoryFilter && product.category !== categoryFilter) return false;
    return true;
  });

  // If we have a specific search query, we should show filtered results instead of all products
  // But the current UI shows "Pumps Section" and "Motors Section" separately.
  // Let's adapt the UI to show filtered results if a search is active.

  const showFilteredView = !!searchQuery;
  
  // Group products by category for display
  const pumpProducts = showFilteredView ? filteredProducts.filter(p => p.category === 'pump') : products.filter(p => p.category === 'pump');
  const motorProducts = showFilteredView ? filteredProducts.filter(p => p.category === 'motor') : products.filter(p => p.category === 'motor');

  return (
    <Layout>
      {/* Hero Header */}
      <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
             {searchQuery ? `Arama Sonuçları: "${searchQuery}"` : 'Ürün Yelpazemiz'}
           </h1>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             Endüstriyel standartlarda, yüksek performanslı dalgıç pompa ve motor çözümleri.
           </p>
        </div>
      </div>

      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 py-20">
          
          {/* Pumps Section */}
          {(pumpProducts.length > 0) && (
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
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {pumpProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
             </div>
          </div>
          )}

          {/* Motors Section */}
          {(motorProducts.length > 0) && (
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

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {motorProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
             </div>
          </div>
          )}
          
          {filteredProducts.length === 0 && searchQuery && (
             <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Sonuç Bulunamadı</h3>
                <p className="text-slate-500">Aradığınız kriterlere uygun ürün bulunamadı.</p>
             </div>
          )}

        </div>
      </div>
    </Layout>
  );
}
