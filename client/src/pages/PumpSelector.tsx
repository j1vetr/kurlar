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

        // Application filtering
        let appMatch = true;
        if (application === 'sandy' && !['kpn', 'kp'].includes(p.id)) appMatch = false;
        if (application === 'industrial' && !['kpd', 'ksx', 'kp'].includes(p.id)) appMatch = false;
        if (application === 'sewage' && !['kpd'].includes(p.id)) appMatch = false;

        if (!appMatch) return;

        // Match against general technical data (Series Level)
        const maxFlow = product.technicalData?.maxFlow || 0;
        const maxHead = product.technicalData?.maxHead || 0;

        // Hard fail if product capabilities are less than requirements
        if (maxFlow < userFlow || maxHead < userHead) return;

        const utilFlow = userFlow / maxFlow;
        const utilHead = userHead / maxHead;
        
        // Scoring logic for Product Series
        // We want to recommend series that can COMFORTABLY handle the load
        // Ideally, the pump should be operating at around 40-70% of its max capacity for the series
        const flowScore = 1 - Math.abs(utilFlow - 0.55); 
        const headScore = 1 - Math.abs(utilHead - 0.55);
        
        let rawScore = (flowScore * 0.4 + headScore * 0.6) * 100;
        
        // Boost score for specific application matches to recommend the "best" series for the job
        if (application === 'sandy' && p.id === 'kpn') rawScore += 15; // KPN is best for sandy
        if (application === 'industrial' && p.id === 'ksx') rawScore += 15; // KSX is best for industrial stainless
        if (application === 'sewage' && p.id === 'kpd') rawScore += 20; // KPD is THE choice for sewage
        if (application === 'clean' && p.id === 'kp') rawScore += 10; // KP is standard for clean water

        // Penalize if utilization is too low (pump is way too big) or too high (pump is at limit)
        if (utilFlow < 0.15 || utilHead < 0.15) rawScore -= 15; // Way too big
        if (utilFlow > 0.9 || utilHead > 0.9) rawScore -= 15; // At the limit

        if (rawScore < 0) rawScore = 10; // Min score
        if (rawScore > 99) rawScore = 99;

        let status: MatchResult['status'] = 'optimal';
        if (utilFlow < 0.2 || utilHead < 0.2) status = 'oversized';
        else if (utilFlow > 0.85 || utilHead > 0.85) status = 'limit';
        else if (utilFlow > 0.4 && utilHead > 0.4 && utilFlow < 0.8 && utilHead < 0.8) status = 'optimal';
        else status = 'efficient';

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
      setMatches(results); // Show all matching series
      setStep(3);
      setIsCalculating(false);
    }, 800); 
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
                  <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                      {t('wizard.step1.badge') || "ADIM 1 / 3"}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                      {t('wizard.step1.title')}
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                      {t('wizard.step1.subtitle')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {applications.map((app) => {
                      const Icon = app.icon;
                      const isSelected = application === app.id;
                      return (
                        <button
                          key={app.id}
                          onClick={() => handleApplicationSelect(app.id as Application)}
                          className={`
                            relative p-8 rounded-2xl border-2 transition-all duration-500 flex flex-col items-start text-left group overflow-hidden
                            ${isSelected 
                              ? `border-primary shadow-xl scale-[1.02] ${app.bg}` 
                              : 'border-slate-100 hover:border-primary/30 bg-white hover:shadow-2xl hover:-translate-y-1'
                            }
                          `}
                        >
                          {/* Background Gradient Blob */}
                          <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${app.color.replace('text-', 'bg-')}`} />
                          
                          {isSelected && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-4 right-4 text-primary bg-white rounded-full p-1 shadow-sm"
                            >
                              <CheckCircle2 className="w-6 h-6 fill-primary text-white" />
                            </motion.div>
                          )}
                          
                          <div className={`
                            w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm
                            ${isSelected ? 'bg-white scale-110' : 'bg-slate-50 group-hover:scale-110 group-hover:bg-white'}
                          `}>
                            <Icon className={`w-8 h-8 transition-colors duration-300 ${isSelected ? app.color : 'text-slate-400 group-hover:text-primary'}`} />
                          </div>
                          
                          <h3 className={`font-bold text-xl mb-3 transition-colors duration-300 ${isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-primary'}`}>
                            {app.label}
                          </h3>
                          
                          <p className="text-slate-500 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                             {app.id === 'clean' && "İçme suyu, tarımsal sulama ve genel su temini için ideal çözümler."}
                             {app.id === 'sandy' && "Kum içeren sular için özel olarak tasarlanmış, aşınmaya dayanıklı pompalar."}
                             {app.id === 'industrial' && "Endüstriyel prosesler ve zorlu çalışma koşulları için yüksek performans."}
                             {app.id === 'sewage' && "Atık sular ve foseptik tahliyesi için tıkanmaz yapılı pompalar."}
                          </p>

                          <div className={`mt-6 flex items-center text-sm font-bold transition-all duration-300 ${isSelected ? 'text-primary translate-x-2' : 'text-slate-300 group-hover:text-primary group-hover:translate-x-2'}`}>
                            Seçim Yap <ChevronRight className="w-4 h-4 ml-1" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  
                  <div className="mt-auto text-center">
                    <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> 
                      Kurlar Garantisi ile Doğru Seçim
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
                              
                              <Link href={`/urunler/${match.product.id}`}>
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
                                      <span className="text-lg font-bold text-slate-900">
                                        {match.product.technicalData?.maxFlow}
                                      </span>
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
                                      <span className="text-lg font-bold text-slate-900">
                                        {match.product.technicalData?.maxHead}
                                      </span>
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
