import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Search, Microscope, Cpu, ShieldCheck, BarChart, Settings, Activity, PenTool } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function RAndD() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            {t('rnd.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('rnd.desc')}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              {t('rnd.design_power').split(' ').slice(0, 2).join(' ')} <span className="text-primary">{t('rnd.design_power').split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {t('rnd.design_desc1')}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('rnd.design_desc2')}
            </p>
          </div>
          <div className="relative">
             <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden shadow-xl relative group">
                <img 
                  src="/assets/gallery/kurlarsld.png" 
                  alt="Ar-Ge Merkezi" 
                  className="w-full h-full object-cover" 
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-slate-100 hidden md:block z-20">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                      <Settings className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="font-bold text-slate-900">{t('rnd.precision_production')}</div>
                      <div className="text-xs text-slate-500">{t('rnd.quality_control')}</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <PenTool className="w-8 h-8 text-primary" />,
              title: "Ürün Tasarımı",
              desc: "CAD/CAM yazılımları ile 3D modelleme ve hidrolik tasarım optimizasyonu."
            },
            {
              icon: <Activity className="w-8 h-8 text-primary" />,
              title: "Performans Testleri",
              desc: "Bilgisayar kontrollü test istasyonlarında debi, basınç ve verimlilik ölçümleri."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-primary" />,
              title: "Dayanıklılık Analizi",
              desc: "Malzeme yorulma testleri ve korozyon direnci analizleri."
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 bg-slate-900 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-heading font-bold mb-6">{t('rnd.process_title')}</h3>
              <p className="text-slate-300 text-lg mb-8">
                {t('rnd.process_desc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm">1</span>
                  <span>İhtiyaç Analizi ve Pazar Araştırması</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm">2</span>
                  <span>Teknik Tasarım ve Simülasyon</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm">3</span>
                  <span>Prototip Üretimi ve Doğrulama</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm">4</span>
                  <span>Seri Üretim ve Kalite Kontrol</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 md:h-auto">
               <img 
                 src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                 alt="Engineering Process" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
