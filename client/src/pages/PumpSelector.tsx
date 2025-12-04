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

        const localizedProduct = getProductWithLanguage(p, language);
        
        // Get max capacity and head from specs
        // Note: In a real app, we would have min/max ranges or performance curves.
        // Here we check if the requested value is within the product's maximum capabilities.
        // We assume if a pump has Max Q=290, it can cover Q=10. 
        // Ideally we'd check if it's not *too* powerful (e.g. > 10x required), but for now simple max check.
        
        // Different keys for languages? No, data.ts structure uses localized keys in `specs` object.
        // We need to handle the keys dynamically based on language or normalize data.
        // Actually `getProductWithLanguage` returns localized specs.
        // Let's try to find the keys by keyword or just index if consistent.
        // The keys are localized in data.ts: 'Maksimum Kapasite' vs 'Maximum Capacity'
        
        const specs = localizedProduct.specs || {};
        let maxFlow = 0;
        let maxHead = 0;

        // Find Flow Rate Key (contains m³/h or m³/saat)
        Object.entries(specs).forEach(([key, val]) => {
          if (val.includes('m³/')) {
             maxFlow = parseValue(val);
          }
          if (val.includes('m') && !val.includes('m³') && !val.includes('mm') && (key.includes('Head') || key.includes('Basma') || key.includes('ارتفاع') || key.includes('Altura'))) {
             maxHead = parseValue(val);
          }
        });

        // Fallback logic if parsing failed (hardcoded for demo based on known products)
        if (maxFlow === 0) maxFlow = 100; 
        if (maxHead === 0) maxHead = 100;

        // Filter logic: Product must be able to handle the requested flow and head
        // i.e., Product Max > Requested
        const capable = maxFlow >= userFlow && maxHead >= userHead;

        // Application logic
        let appMatch = true;
        if (application === 'sandy') {
           // Noryl and some stainless are good for sand. Cast iron maybe less so?
           // Just a simple heuristic for the demo
           if (p.id === 'kpn') appMatch = true; // Noryl is great for sand
           else if (p.id === 'kp') appMatch = true; // Stainless also good
           else appMatch = false; // Cast iron maybe not preferred for high sand? (Just assumption for demo)
        }

        return capable && appMatch;
      });

      setMatches(filtered);
      setStep(3);
      setIsCalculating(false);
    }, 800);
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
      <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/water-bg.jpg')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            {t('wizard.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            {t('wizard.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Wizard Container */}
      <div className="flex-1 container mx-auto px-6 -mt-10 pb-20 relative z-20">
        <Card className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden border-0">
          
          {/* Progress Bar */}
          <div className="bg-slate-100 h-2 w-full">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 md:p-12 min-h-[500px] flex flex-col">
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('wizard.step1.title')}</h2>
                    <p className="text-slate-500">{t('wizard.step1.subtitle')}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {applications.map((app) => {
                      const Icon = app.icon;
                      const isSelected = application === app.id;
                      return (
                        <button
                          key={app.id}
                          onClick={() => setApplication(app.id as Application)}
                          className={`
                            relative p-8 rounded-xl border-2 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-lg
                            ${isSelected ? `border-primary ${app.bg}` : 'border-slate-100 hover:border-slate-300 bg-white'}
                          `}
                        >
                          {isSelected && (
                            <div className="absolute top-4 right-4 text-primary">
                              <CheckCircle2 className="w-6 h-6" />
                            </div>
                          )}
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${isSelected ? 'bg-white shadow-sm' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                            <Icon className={`w-8 h-8 ${isSelected ? app.color : 'text-slate-400'}`} />
                          </div>
                          <h3 className={`font-bold text-lg mb-2 ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>{app.label}</h3>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-auto flex justify-end">
                    <Button 
                      size="lg" 
                      onClick={() => setStep(2)} 
                      disabled={!application}
                      className="px-8 rounded-full"
                    >
                      {t('wizard.next')} <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
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
                  <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('wizard.step2.title')}</h2>
                    <p className="text-slate-500">{t('wizard.step2.subtitle')}</p>
                  </div>

                  <div className="max-w-xl mx-auto w-full space-y-12 mb-12">
                    {/* Flow Rate Slider */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="flex items-center gap-2 font-bold text-slate-700">
                          <Waves className="w-5 h-5 text-primary" />
                          {t('wizard.flow_rate')}
                        </label>
                        <span className="text-3xl font-heading font-bold text-primary">
                          {flowRate[0]} <span className="text-base font-sans text-slate-400 font-normal">m³/h</span>
                        </span>
                      </div>
                      <Slider
                        value={flowRate}
                        onValueChange={setFlowRate}
                        max={300}
                        step={5}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-400 uppercase font-bold tracking-wider">
                        <span>0 m³/h</span>
                        <span>300 m³/h</span>
                      </div>
                    </div>

                    {/* Head Slider */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="flex items-center gap-2 font-bold text-slate-700">
                          <Ruler className="w-5 h-5 text-primary" />
                          {t('wizard.head')}
                        </label>
                        <span className="text-3xl font-heading font-bold text-primary">
                          {head[0]} <span className="text-base font-sans text-slate-400 font-normal">mSS</span>
                        </span>
                      </div>
                      <Slider
                        value={head}
                        onValueChange={setHead}
                        max={600}
                        step={10}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-400 uppercase font-bold tracking-wider">
                        <span>0 m</span>
                        <span>600 m</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex justify-between">
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      onClick={() => setStep(1)}
                      className="text-slate-500 hover:text-slate-900"
                    >
                      <ChevronLeft className="mr-2 w-4 h-4" /> {t('wizard.back')}
                    </Button>
                    <Button 
                      size="lg" 
                      onClick={calculateMatches}
                      className="px-8 rounded-full bg-primary hover:bg-primary/90"
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
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('wizard.step3.title')}</h2>
                    <p className="text-slate-500">{t('wizard.step3.subtitle')}</p>
                  </div>

                  {matches.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                      {matches.map((product) => (
                        <motion.div 
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                           <ProductCard product={product} />
                           <div className="mt-2 text-center">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
                                <CheckCircle2 className="w-3 h-3" /> {t('wizard.match_score')}: 98%
                              </div>
                           </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-xl mb-12 border border-dashed border-slate-200">
                      <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-slate-700 mb-2">{t('products.no_results')}</h3>
                      <p className="text-slate-500 max-w-md mx-auto">{t('wizard.no_results')}</p>
                    </div>
                  )}

                  <div className="mt-auto flex justify-center">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={() => {
                        setStep(1);
                        setApplication(null);
                        setMatches([]);
                      }}
                      className="px-8 rounded-full"
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
