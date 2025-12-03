import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroVideo from "@assets/generated_videos/stainless_steel_submersible_pump_underwater_operation_with_bubbles_and_clear_blue_water..mp4";

export function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full opacity-90"
        />
        {/* Gradient Overlay for text readability and brand tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
            Dalgıç Pompalarda <br/>
            <span className="text-blue-200">Güç, Dayanıklılık</span> ve <br/>
            Mühendislik
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
            Yüksek verimlilik, uzun ömür ve güvenilir performans için tasarlanmış profesyonel çözümler.
            Geleceğin su teknolojilerini bugün üretiyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/urunler">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 h-14 text-lg rounded-none md:rounded-sm transition-all duration-300 hover:scale-105">
                Ürünleri İncele <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link href="/bayi-servis">
              <Button size="lg" variant="outline" className="bg-primary/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/10 hover:border-white font-medium px-8 h-14 text-lg rounded-none md:rounded-sm">
                Bayi & Servis Noktaları <MapPin className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Keşfet</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </div>
  );
}
