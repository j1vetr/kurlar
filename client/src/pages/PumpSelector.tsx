import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { products, getProductWithLanguage, Product } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Droplets, Waves, Factory, ChevronRight, ChevronLeft, 
  CheckCircle2, AlertCircle, Ruler, Gauge, 
  Activity, Zap, BarChart3, ArrowRight, ShieldCheck
} from "lucide-react";
import { Link } from "wouter";
import { ProductCard } from "@/components/shared/ProductCard";

type Step = 1 | 2 | 3;
type Application = 'clean' | 'sandy' | 'sewage' | 'industrial';

interface MatchResult {
  product: Product;
  score: number;
  status: 'optimal' | 'efficient' | 'limit' | 'oversized';
  utilizationFlow: number; // 0-1
  utilizationHead: number; // 0-1
}

export default function PumpSelector() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  const [application, setApplication] = useState<Application | null>(null);
  
  // Detailed inputs
  const [flowRate, setFlowRate] = useState<number[]>([10]);
  const [head, setHead] = useState<number[]>([50]);
  
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateMatches = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const userFlow = flowRate[0];
      const userHead = head[0];

      const results: MatchResult[] = [];

      products.forEach(p => {
        // Only pumps
        if (p.category !== 'pump') return;

        const product = getProductWithLanguage(p, language);
        const maxFlow = product.technicalData?.maxFlow || 0;
        const maxHead = product.technicalData?.maxHead || 0;

        // Hard fail if specs are below requirements
        if (maxFlow < userFlow || maxHead < userHead) return;

        // Application filtering
        let appMatch = true;
        if (application === 'sandy' && !['kpn', 'kp'].includes(p.id)) appMatch = false;
        if (application === 'industrial' && !['kpd', 'ksx', 'kp'].includes(p.id)) appMatch = false;
        if (application === 'sewage' && !['kpd'].includes(p.id)) appMatch = false;

        if (!appMatch) return;

        // Calculate detailed score
        // Ideal operating point is usually ~60-70% of max capacity
        // We calculate "Utilization" = UserReq / MaxCap
        
        const utilFlow = userFlow / maxFlow;
        const utilHead = userHead / maxHead;
        
        // Distance from "Ideal" (0.65 utilization)
        // The closer to 0.65, the better the score. 
        // If util is very low (<0.1), it's oversized (bad score).
        // If util is very high (>0.9), it's pushed to limit (risky).
        
        const flowScore = 1 - Math.abs(utilFlow - 0.65); 
        const headScore = 1 - Math.abs(utilHead - 0.65);
        
        // Weighted score (Head is usually more critical for pumps)
        let rawScore = (flowScore * 0.4 + headScore * 0.6) * 100;
        
        // Normalize: Boost score visually for "good enough" matches
        if (rawScore < 60) rawScore += 20; 
        if (rawScore > 98) rawScore = 99;

        let status: MatchResult['status'] = 'optimal';
        
        if (utilFlow < 0.3 || utilHead < 0.3) status = 'oversized';
        else if (utilFlow > 0.85 || utilHead > 0.85) status = 'limit';
        else if (utilFlow > 0.5 && utilHead > 0.5) status = 'efficient';

        results.push({
          product,
          score: Math.round(rawScore),
          status,
          utilizationFlow: utilFlow,
          utilizationHead: utilHead
        });
      });

      // Sort by score descending
      results.sort((a, b) => b.score - a.score);

      setMatches(results);
      setStep(3);
      setIsCalculating(false);
    }, 1200); // Slightly longer for dramatic effect
  };

  const handleApplicationSelect = (appId: Application) => {
    setApplication(appId);
    setTimeout(() => setStep(2), 300);
  };

  const applications = [
    { id: 'clean', label: t('wizard.app.clean'), icon: Droplets, color: "text-blue-500", bg: "bg-blue-50 border-blue-200" },
    { id: 'sandy', label: t('wizard.app.sandy'), icon: Waves, color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
    { id: 'industrial', label: t('wizard.app.industrial'), icon: Factory, color: "text-slate-600", bg: "bg-slate-50 border-slate-200" },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'optimal': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'efficient': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'limit': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'oversized': return 'text-slate-600 bg-slate-50 border-slate-200';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusLabel = (status: string) => {
    return t(`wizard.status.${status}`);
  };

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
        <Card className="max-w-5xl mx-auto bg-white shadow-xl md:shadow-2xl rounded-xl overflow-hidden border-0">
          
          {/* Progress Bar */}
          <div className="bg-slate-100 h-1.5 md:h-2 w-full">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-6 md:p-12 min-h-[400px] md:min-h-[600px] flex flex-col">
            
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

                  <div className="max-w-2xl mx-auto w-full space-y-10 md:space-y-16 mb-8 md:mb-12">
                    {/* Flow Rate Control */}
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                        <label className="flex items-center gap-3 font-bold text-slate-700 text-lg">
                          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <Waves className="w-6 h-6" />
                          </div>
                          <div>
                            {t('wizard.flow_rate')}
                            <span className="block text-xs font-normal text-slate-400 mt-0.5">Min: 0 - Max: 300 m³/h</span>
                          </div>
                        </label>
                        <div className="flex items-center gap-3">
                          <Input 
                            type="number" 
                            value={flowRate[0]} 
                            onChange={(e) => setFlowRate([Math.min(300, Math.max(0, Number(e.target.value)))])}
                            className="w-24 text-right font-bold text-lg h-12 bg-white"
                          />
                          <span className="text-slate-400 font-medium">m³/h</span>
                        </div>
                      </div>
                      <Slider
                        value={flowRate}
                        onValueChange={setFlowRate}
                        max={300}
                        step={5}
                        className="py-4 touch-none"
                      />
                    </div>

                    {/* Head Control */}
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                        <label className="flex items-center gap-3 font-bold text-slate-700 text-lg">
                          <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                            <Ruler className="w-6 h-6" />
                          </div>
                          <div>
                            {t('wizard.head')}
                            <span className="block text-xs font-normal text-slate-400 mt-0.5">Min: 0 - Max: 600 mSS</span>
                          </div>
                        </label>
                        <div className="flex items-center gap-3">
                          <Input 
                            type="number" 
                            value={head[0]} 
                            onChange={(e) => setHead([Math.min(600, Math.max(0, Number(e.target.value)))])}
                            className="w-24 text-right font-bold text-lg h-12 bg-white"
                          />
                          <span className="text-slate-400 font-medium">mSS</span>
                        </div>
                      </div>
                      <Slider
                        value={head}
                        onValueChange={setHead}
                        max={600}
                        step={10}
                        className="py-4 touch-none"
                      />
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
                      className="px-8 rounded-full bg-primary hover:bg-primary/90 w-full md:w-auto h-14 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    >
                      {isCalculating ? (
                        <Gauge className="w-5 h-5 animate-spin mr-2" />
                      ) : (
                        <Gauge className="w-5 h-5 mr-2" />
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
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{t('wizard.step3.title')}</h2>
                    <p className="text-slate-500">{t('wizard.calc.note')}</p>
                  </div>

                  {matches.length > 0 ? (
                    <div className="space-y-8 mb-12">
                      {matches.map((match, idx) => (
                        <motion.div 
                          key={match.product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                          <div className="flex flex-col lg:flex-row">
                            {/* Product Info */}
                            <div className="w-full lg:w-1/3 p-6 lg:p-8 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col">
                              <div className="flex justify-between items-start mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                  {match.product.modelCode || match.product.id.toUpperCase()}
                                </span>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${getStatusColor(match.status)}`}>
                                  {getStatusLabel(match.status)}
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                {match.product.name}
                              </h3>
                              
                              <div className="relative h-48 w-full my-4 flex items-center justify-center">
                                <img 
                                  src={match.product.image} 
                                  alt={match.product.name} 
                                  className="h-full object-contain mix-blend-multiply"
                                />
                              </div>
                              
                              <Link href={`/products/${match.product.id}`}>
                                <Button className="w-full mt-auto gap-2 group-hover:bg-primary group-hover:text-white" variant="outline">
                                  {t('product.review')} <ArrowRight className="w-4 h-4" />
                                </Button>
                              </Link>
                            </div>

                            {/* Technical Analysis */}
                            <div className="w-full lg:w-2/3 p-6 lg:p-8">
                              <div className="flex items-center gap-2 mb-6">
                                <Activity className="w-5 h-5 text-primary" />
                                <h4 className="font-bold text-slate-900">{t('wizard.analysis')}</h4>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {/* Score Gauge */}
                                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                                  <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                                    <svg className="w-full h-full transform -rotate-90">
                                      <circle
                                        className="text-slate-200"
                                        strokeWidth="8"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="40"
                                        cx="48"
                                        cy="48"
                                      />
                                      <circle
                                        className="text-primary transition-all duration-1000 ease-out"
                                        strokeWidth="8"
                                        strokeDasharray={251.2}
                                        strokeDashoffset={251.2 - (251.2 * match.score) / 100}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="40"
                                        cx="48"
                                        cy="48"
                                      />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <span className="text-2xl font-bold text-primary">{match.score}%</span>
                                    </div>
                                  </div>
                                  <span className="text-sm font-medium text-slate-600">{t('wizard.match_score')}</span>
                                </div>

                                {/* Technical Specs Grid */}
                                <div className="col-span-2 grid grid-cols-2 gap-4">
                                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                                      <Waves className="w-4 h-4" />
                                      <span className="text-xs font-bold uppercase">{t('wizard.flow_rate')}</span>
                                    </div>
                                    <div className="flex items-end gap-2">
                                      <span className="text-lg font-bold text-slate-900">{match.product.technicalData?.maxFlow}</span>
                                      <span className="text-xs text-slate-500 mb-1">m³/h (Max)</span>
                                    </div>
                                    {/* Utilization Bar */}
                                    <div className="mt-2 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                      <div 
                                        className="h-full bg-blue-500 rounded-full" 
                                        style={{ width: `${Math.min(100, match.utilizationFlow * 100)}%` }}
                                      />
                                    </div>
                                    <div className="flex justify-between mt-1">
                                      <span className="text-[10px] text-slate-400">{t('wizard.capacity_usage')}</span>
                                      <span className="text-[10px] font-bold text-slate-600">{Math.round(match.utilizationFlow * 100)}%</span>
                                    </div>
                                  </div>

                                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                                      <Ruler className="w-4 h-4" />
                                      <span className="text-xs font-bold uppercase">{t('wizard.head')}</span>
                                    </div>
                                    <div className="flex items-end gap-2">
                                      <span className="text-lg font-bold text-slate-900">{match.product.technicalData?.maxHead}</span>
                                      <span className="text-xs text-slate-500 mb-1">mSS (Max)</span>
                                    </div>
                                    {/* Utilization Bar */}
                                    <div className="mt-2 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                      <div 
                                        className="h-full bg-amber-500 rounded-full" 
                                        style={{ width: `${Math.min(100, match.utilizationHead * 100)}%` }}
                                      />
                                    </div>
                                    <div className="flex justify-between mt-1">
                                      <span className="text-[10px] text-slate-400">{t('wizard.capacity_usage')}</span>
                                      <span className="text-[10px] font-bold text-slate-600">{Math.round(match.utilizationHead * 100)}%</span>
                                    </div>
                                  </div>
                                  
                                  {/* Additional Specs (Mocked based on ID for now as data is limited) */}
                                  <div className="p-3 rounded-lg bg-white border border-slate-100 flex items-center gap-3">
                                    <div className="p-1.5 bg-slate-100 rounded text-slate-500"><Zap className="w-4 h-4" /></div>
                                    <div>
                                      <div className="text-[10px] text-slate-400 uppercase font-bold">{t('wizard.tech.voltage')}</div>
                                      <div className="text-sm font-bold text-slate-700">
                                        {match.product.id.includes('noryl') ? '220V / 380V' : '380V (Triphase)'}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="p-3 rounded-lg bg-white border border-slate-100 flex items-center gap-3">
                                    <div className="p-1.5 bg-slate-100 rounded text-slate-500"><Gauge className="w-4 h-4" /></div>
                                    <div>
                                      <div className="text-[10px] text-slate-400 uppercase font-bold">{t('wizard.tech.outlet')}</div>
                                      <div className="text-sm font-bold text-slate-700">
                                        {match.product.specs?.['Çıkış Bağlantısı'] || match.product.specs?.['Outlet Connection'] || '2" - 4"'}
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>

                              {/* Performance Graph Visualization (Simplified) */}
                              <div className="relative h-32 bg-slate-50 rounded-xl border border-slate-100 p-4 overflow-hidden">
                                <div className="absolute top-2 left-4 text-xs font-bold text-slate-400 flex items-center gap-1">
                                  <BarChart3 className="w-3 h-3" /> {t('wizard.performance')}
                                </div>
                                {/* Draw a simple curve using SVG */}
                                <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                  {/* Grid lines */}
                                  <line x1="0" y1="10" x2="100" y2="10" stroke="#e2e8f0" strokeWidth="0.5" />
                                  <line x1="0" y1="25" x2="100" y2="25" stroke="#e2e8f0" strokeWidth="0.5" />
                                  <line x1="0" y1="40" x2="100" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
                                  
                                  {/* Pump Curve (Simulated) */}
                                  <path 
                                    d="M0,5 Q50,10 100,45" 
                                    fill="none" 
                                    stroke="#cbd5e1" 
                                    strokeWidth="2" 
                                    strokeDasharray="4 4"
                                  />
                                  <path 
                                    d="M0,5 Q50,10 100,45" 
                                    fill="none" 
                                    stroke={match.status === 'optimal' ? '#10b981' : '#3b82f6'} 
                                    strokeWidth="3" 
                                    strokeLinecap="round"
                                  />
                                  
                                  {/* User Point */}
                                  <circle 
                                    cx={match.utilizationFlow * 100} 
                                    cy={50 - (match.utilizationHead * 45)} 
                                    r="3" 
                                    fill="white" 
                                    stroke="#ef4444" 
                                    strokeWidth="2"
                                  />
                                </svg>
                                <div className="absolute bottom-1 right-2 text-[10px] text-slate-400">
                                  Flow (Q) &rarr;
                                </div>
                                <div className="absolute top-1 left-1 text-[10px] text-slate-400 transform -rotate-90 origin-bottom-left">
                                  Head (H) &rarr;
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 bg-slate-50 rounded-3xl mb-12 border-2 border-dashed border-slate-200">
                      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-10 h-10 text-slate-400" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{t('products.no_results')}</h3>
                      <p className="text-slate-500 max-w-md mx-auto px-4 mb-8">{t('wizard.no_results')}</p>
                      <Button 
                        variant="outline"
                        onClick={() => setStep(2)}
                      >
                        {t('wizard.back')}
                      </Button>
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
                      className="px-8 rounded-full w-full md:w-auto border-slate-200 hover:bg-slate-50 text-slate-600"
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
