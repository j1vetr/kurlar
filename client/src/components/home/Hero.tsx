import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "@assets/generated_videos/stainless_steel_submersible_pump_underwater_operation_with_bubbles_and_clear_blue_water..mp4";

export function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full scale-105"
        />
        {/* Modern Gradient Overlay - Less intrusive, more premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <span className="text-white/90 font-medium tracking-widest text-sm uppercase">Su Teknolojilerinde Gelecek</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 tracking-tight drop-shadow-lg">
            Mühendislik <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Akışında.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl font-light leading-relaxed border-l-4 border-blue-500 pl-6">
            Zorlu koşullarda kesintisiz performans sağlayan yeni nesil dalgıç pompa sistemleri.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/urunler">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 border-none font-bold px-10 h-16 text-lg rounded-full shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30">
                Keşfet <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            
            <Link href="/bayi-servis">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-10 h-16 text-lg rounded-full backdrop-blur-sm transition-all duration-300">
                <MapPin className="mr-3 w-6 h-6" /> Bayi Ağı
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
