import { Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href={`/urunler/${product.id}`}>
      <a className="block h-full">
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "group relative bg-white h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100",
            className
          )}
        >
          {/* Premium Badge for specific items if needed (optional logic) */}
          {product.category === 'pump' && (
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm border border-slate-100 text-[10px] font-bold px-2 py-1 rounded-full text-slate-600 shadow-sm uppercase tracking-wider">
              {product.subCategory}
            </div>
          )}

          {/* Image Container - Increased spacing and premium feel */}
          <div className="relative w-full aspect-[4/4] bg-gradient-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden p-4">
            {/* Decorative background circle */}
            <div className="absolute w-56 h-56 bg-primary/5 rounded-full blur-3xl -z-0 group-hover:bg-primary/10 transition-colors duration-500" />
            
            <motion.img 
              src={product.image} 
              alt={product.name}
              className="relative w-full h-full object-contain z-10 drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.15))" }}
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300 z-10" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow relative border-t border-slate-50">
            <div className="mb-auto">
              <div className="flex items-center gap-2 mb-3">
                <span className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  product.category === 'pump' ? "bg-blue-500" : "bg-orange-500"
                )} />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {product.category === 'pump' ? 'Dalgıç Pompa' : 'Dalgıç Motor'}
                </span>
              </div>
              
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              
              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Area */}
            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
              <span className="text-sm font-medium text-primary group-hover:underline decoration-primary/30 underline-offset-4 transition-all">
                İncele
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
}
