import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { products, getProductWithLanguage, Product } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Droplets, Waves, Factory, ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, Ruler, Gauge } from "lucide-react";
import { Link } from "wouter";
import { ProductCard } from "@/components/shared/ProductCard";

type Step = 1 | 2 | 3;
type Application = 'clean' | 'sandy' | 'sewage' | 'industrial';

export default function PumpSelector() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  const [application, setApplication] = useState<Application | null>(null);
  const [flowRate, setFlowRate] = useState<number[]>([10]);
  const [head, setHead] = useState<number[]>([50]);
  const [matches, setMatches] = useState<Product[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  // Parse numeric value from string like "290 m³/saat" or "700m"
  const parseValue = (str: string | undefined): number => {
    if (!str) return 0;
    const match = str.match(/(\d+)/);
    return match ? parseInt(match[0]) : 0;
  };

  const calculateMatches = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for effect
    setTimeout(() => {
      const userFlow = flowRate[0];
      const userHead = head[0];

      const filtered = products.filter(p => {
        // Only look at pumps, not motors
        if (p.category !== 'pump') return false;

        // Use standardized technical data if available
        const maxFlow = p.technicalData?.maxFlow || 0;
        const maxHead = p.technicalData?.maxHead || 0;

        // Filter logic: Product must be able to handle the requested flow and head
        const capable = maxFlow >= userFlow && maxHead >= userHead;

        // Application logic
        let appMatch = true;
        if (application === 'sandy') {
           // Noryl (kpn) and Stainless (kp) are good for sand
           if (p.id === 'kpn' || p.id === 'kp') appMatch = true;
           else appMatch = false; 
        } else if (application === 'industrial') {
           // Cast iron (kpd) and Cast Stainless (ksx) are best for heavy industrial
           if (p.id === 'kpd' || p.id === 'ksx') appMatch = true;
           else if (p.id === 'kp') appMatch = true; // Stainless is also good
           else appMatch = false; // Noryl not for heavy industrial
        } else if (application === 'sewage') {
           // Assuming Cast Iron is best for dirty water/sewage if available, but for now generic
           if (p.id === 'kpd') appMatch = true;
           else appMatch = false;
        }

        return capable && appMatch;
      });

      setMatches(filtered);
      setStep(3);
      setIsCalculating(false);
    }, 800);
  };

  const handleApplicationSelect = (appId: Application) => {
    setApplication(appId);
    // Auto-advance on mobile/desktop for better UX
    setTimeout(() => setStep(2), 300);
  };

  const applications = [
    { id: 'clean', label: t('wizard.app.clean'), icon: Droplets, color: "text-blue-500", bg: "bg-blue-50 border-blue-200" },
    { id: 'sandy', label: t('wizard.app.sandy'), icon: Waves, color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
    { id: 'industrial', label: t('wizard.app.industrial'), icon: Factory, color: "text-slate-600", bg: "bg-slate-50 border-slate-200" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/water-bg.jpg')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6"
          >
            {t('wizard.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t('wizard.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Wizard Container */}
      <div className="flex-1 container mx-auto px-4 md:px-6 -mt-6 md:-mt-10 pb-20 relative z-20">
        <Card className="max-w-4xl mx-auto bg-white shadow-xl md:shadow-2xl rounded-xl overflow-hidden border-0">
          
          {/* Progress Bar */}
          <div className="bg-slate-100 h-1.5 md:h-2 w-full">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-6 md:p-12 min-h-[400px] md:min-h-[500px] flex flex-col">
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{t('wizard.step1.title')}</h2>
                    <p className="text-sm md:text-base text-slate-500">{t('wizard.step1.subtitle')}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                    {applications.map((app) => {
                      const Icon = app.icon;
                      const isSelected = application === app.id;
                      return (
                        <button
                          key={app.id}
                          onClick={() => handleApplicationSelect(app.id as Application)}
                          className={`
                            relative p-6 md:p-8 rounded-xl border-2 transition-all duration-300 flex flex-col items-center text-center group active:scale-95 touch-manipulation
                            ${isSelected ? `border-primary ${app.bg}` : 'border-slate-100 hover:border-slate-300 bg-white hover:shadow-lg'}
                          `}
                        >
                          {isSelected && (
                            <div className="absolute top-3 right-3 md:top-4 md:right-4 text-primary">
                              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                          )}
                          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 transition-colors ${isSelected ? 'bg-white shadow-sm' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                            <Icon className={`w-6 h-6 md:w-8 md:h-8 ${isSelected ? app.color : 'text-slate-400'}`} />
                          </div>
                          <h3 className={`font-bold text-base md:text-lg mb-1 md:mb-2 ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>{app.label}</h3>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-auto flex justify-end md:hidden">
                    <p className="text-xs text-slate-400 mx-auto">
                      {t('wizard.next')} &rarr;
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{t('wizard.step2.title')}</h2>
                    <p className="text-sm md:text-base text-slate-500">{t('wizard.step2.subtitle')}</p>
                  </div>

                  <div className="max-w-xl mx-auto w-full space-y-8 md:space-y-12 mb-8 md:mb-12">
                    {/* Flow Rate Slider */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="flex items-center gap-2 font-bold text-slate-700 text-sm md:text-base">
                          <Waves className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          {t('wizard.flow_rate')}
                        </label>
                        <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
                          {flowRate[0]} <span className="text-sm md:text-base font-sans text-slate-400 font-normal">m³/h</span>
                        </span>
                      </div>
                      <Slider
                        value={flowRate}
                        onValueChange={setFlowRate}
                        max={300}
                        step={5}
                        className="py-4 touch-none"
                      />
                      <div className="flex justify-between text-[10px] md:text-xs text-slate-400 uppercase font-bold tracking-wider">
                        <span>0 m³/h</span>
                        <span>300 m³/h</span>
                      </div>
                    </div>

                    {/* Head Slider */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="flex items-center gap-2 font-bold text-slate-700 text-sm md:text-base">
                          <Ruler className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          {t('wizard.head')}
                        </label>
                        <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
                          {head[0]} <span className="text-sm md:text-base font-sans text-slate-400 font-normal">mSS</span>
                        </span>
                      </div>
                      <Slider
                        value={head}
                        onValueChange={setHead}
                        max={600}
                        step={10}
                        className="py-4 touch-none"
                      />
                      <div className="flex justify-between text-[10px] md:text-xs text-slate-400 uppercase font-bold tracking-wider">
                        <span>0 m</span>
                        <span>600 m</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col-reverse md:flex-row justify-between gap-4">
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      onClick={() => setStep(1)}
                      className="text-slate-500 hover:text-slate-900 w-full md:w-auto"
                    >
                      <ChevronLeft className="mr-2 w-4 h-4" /> {t('wizard.back')}
                    </Button>
                    <Button 
                      size="lg" 
                      onClick={calculateMatches}
                      className="px-8 rounded-full bg-primary hover:bg-primary/90 w-full md:w-auto h-12 md:h-10"
                    >
                      {isCalculating ? (
                        <Gauge className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Gauge className="w-4 h-4 mr-2" />
                      )}
                      {t('wizard.calculate')}
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{t('wizard.step3.title')}</h2>
                    <p className="text-sm md:text-base text-slate-500">{t('wizard.step3.subtitle')}</p>
                  </div>

                  {matches.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                      {matches.map((product) => (
                        <motion.div 
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                           <ProductCard product={product} />
                           <div className="mt-2 text-center">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                <CheckCircle2 className="w-3 h-3" /> {t('wizard.match_score')}: 98%
                              </div>
                           </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 md:py-12 bg-slate-50 rounded-xl mb-8 md:mb-12 border border-dashed border-slate-200">
                      <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-base md:text-lg font-bold text-slate-700 mb-2">{t('products.no_results')}</h3>
                      <p className="text-sm md:text-base text-slate-500 max-w-md mx-auto px-4">{t('wizard.no_results')}</p>
                    </div>
                  )}

                  <div className="mt-auto flex justify-center pb-4 md:pb-0">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={() => {
                        setStep(1);
                        setApplication(null);
                        setMatches([]);
                      }}
                      className="px-8 rounded-full w-full md:w-auto"
                    >
                      {t('wizard.reset')}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
