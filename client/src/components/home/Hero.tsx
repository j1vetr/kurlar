import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MapPin, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

interface HeroProps {
  /**
   * Visible page H1 (manufacturer keyword phrase). Rendered as a static,
   * SSR-stable eyebrow line above the animated slogans, which are
   * decorative and intentionally NOT headings.
   */
  headline: string;
}

export function Hero({ headline }: HeroProps) {
  const { t } = useLanguage();
  const [showSecondText, setShowSecondText] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  // Text animation sequence
  useEffect(() => {
    // Time for typewriter (approx 3s) + reading time (1.5s)
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // YouTube facade: iframe (~900KB üçüncü taraf JS/CSS) SAYFA YÜKLEMESİNDE ASLA inmez.
  // Video yalnızca kullanıcı oynat butonuna tıklayınca yüklenir (mobil PageSpeed).
  const playVideo = () => {
    // Tıklama anında preconnect: iframe bağlantı kurulumunu hızlandırır.
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://www.youtube-nocookie.com";
    document.head.appendChild(link);
    setShowVideo(true);
  };

  const firstText = t('hero.inspired_by_history');

  return (
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center bg-black">
      {/* Video Background - poster önce, YouTube embed sonradan (facade) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Poster görsel: LCP için hemen yüklenir, video hazır olunca altında kalır */}
        <img
          src="/assets/gallery/hero-bg.webp"
          srcSet="/assets/gallery/hero-bg-sm.webp 640w, /assets/gallery/hero-bg.webp 700w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width={700}
          height={467}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optimized for mobile full screen coverage: wider width to force height fit */}
        {showVideo && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500%] h-[120%] md:w-[150%] md:h-[150%] lg:w-full lg:h-[140%] pointer-events-none">
             <iframe 
               src="https://www.youtube-nocookie.com/embed/6i9Wi-eVd6c?controls=0&autoplay=1&mute=1&loop=1&playlist=6i9Wi-eVd6c&start=38&enablejsapi=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3" 
               title="Kurlar tanıtım videosu"
               className="w-full h-full pointer-events-none object-cover scale-125"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               style={{ border: 'none' }}
             />
          </div>
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center h-full pt-20">
        {/* Static H1: always in the SSR HTML, not animated (no hidden/opacity-0 states). */}
        <h1 className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-white/80 mb-8 px-4">
          {headline}
        </h1>
        <div className="h-40 md:h-60 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showSecondText ? (
              <motion.div 
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
                  className="ml-1 inline-block w-1 h-8 md:h-12 bg-primary/60 align-middle"
                />
              </motion.div>
            ) : (
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <p className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight drop-shadow-2xl text-center uppercase text-white/90">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-pulse">
                    {t('hero.designed_for_future')}
                  </span>
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-12 flex flex-col sm:flex-row gap-6"
                >
                  <Link href="/bayi-servis">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-10 h-14 text-lg rounded-full backdrop-blur-sm transition-all duration-300">
                      <MapPin className="mr-3 w-6 h-6" /> {t('hero.dealer_network_btn')}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Video oynat butonu (facade): YouTube yalnızca tıklama ile yüklenir */}
      {!showVideo && (
        <button
          onClick={playVideo}
          aria-label={t('hero.play_video')}
          className="absolute bottom-28 md:bottom-24 right-6 md:right-10 z-30 flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
        >
          <span className="hidden md:inline text-xs uppercase tracking-[0.2em] font-bold">{t('hero.play_video')}</span>
          <span className="w-12 h-12 rounded-full border-2 border-white/40 group-hover:border-white flex items-center justify-center backdrop-blur-sm bg-white/10 transition-colors">
            <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
          </span>
        </button>
      )}

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 cursor-pointer hover:text-white transition-colors"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.2em] mb-2 font-bold animate-pulse">{t('hero.scroll_down')}</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent animate-water-flow opacity-50" style={{ animationDuration: '1.5s' }}></div>
        </div>
      </motion.div>
    </div>
  );
}
