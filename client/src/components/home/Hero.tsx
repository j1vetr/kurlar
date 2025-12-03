import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [showSecondText, setShowSecondText] = useState(false);
  
  // Text animation sequence
  useEffect(() => {
    // Time for typewriter (approx 3s) + reading time (1.5s)
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const firstText = "Tarihimizden ilham alındı,";

  return (
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center bg-black">
      {/* Video Background - YouTube Embed */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[150%] md:h-[150%] lg:w-full lg:h-[140%] pointer-events-none">
           <iframe 
             src="https://www.youtube.com/embed/6i9Wi-eVd6c?controls=0&autoplay=1&mute=1&loop=1&playlist=6i9Wi-eVd6c&start=38&enablejsapi=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3" 
             className="w-full h-full pointer-events-none object-cover"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             style={{ border: 'none' }}
           />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center h-full pt-20">
        <div className="h-40 md:h-60 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showSecondText ? (
              <motion.h1 
                key="typewriter"
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-tight tracking-wide"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
              >
                {firstText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: index * 0.08,
                      ease: "linear"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-1 inline-block w-1 h-8 md:h-12 bg-blue-400 align-middle"
                />
              </motion.h1>
            ) : (
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 leading-none tracking-tight drop-shadow-2xl text-center uppercase">
                  Gelecek İçin <br/>
                  <span className="text-blue-500">Tasarlandı</span>
                </h1>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-12 flex flex-col sm:flex-row gap-6"
                >
                  <Link href="/bayi-servis">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-10 h-14 text-lg rounded-full backdrop-blur-sm transition-all duration-300">
                      <MapPin className="mr-3 w-6 h-6" /> Bayi Ağı
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/40"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </div>
  );
}
