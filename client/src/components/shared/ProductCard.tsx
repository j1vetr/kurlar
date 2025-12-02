import { Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
          whileHover={{ y: -5 }}
          className={cn(
            "group relative bg-white border border-border h-full p-6 flex flex-col transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden rounded-sm",
            className
          )}
        >
          {/* Image Container */}
          <div className="relative w-full aspect-[4/5] mb-6 bg-slate-50 flex items-center justify-center overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white opacity-50" />
            <motion.img 
              src={product.image} 
              alt={product.name}
              className="relative w-3/4 h-auto object-contain z-10 drop-shadow-md transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover Overlay Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm z-20 text-primary">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-2">
              {product.subCategory}
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full" />
        </motion.div>
      </a>
    </Link>
  );
}
