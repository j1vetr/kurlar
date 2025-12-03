import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Search, Microscope, Cpu, ShieldCheck, BarChart } from "lucide-react";

export default function RAndD() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Geleceği Tasarlıyoruz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Kurlar Ar-Ge Merkezi, 30 yılı aşkın tecrübeyle dalgıç pompa teknolojilerine yön veriyor.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Ar-Ge Laboratuvarı ve <br/> <span className="text-blue-600">İnovasyon Merkezi</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Kurlar, dalgıç pompa ve motor teknolojisinde 30 yılı aşkın tecrübesiyle sektöre öncülük etmektedir. Gelişmiş üretim teknolojilerimiz ve yenilikçi Ar-Ge yaklaşımımız, müşterilerimizin ihtiyacına özel, yüksek performanslı ve uzun ömürlü ürünler geliştirmemizi sağlamaktadır.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Modern test laboratuvarlarımız ve detaylı süreç analizlerimizle en zorlu uygulamalara dahi uygun çözümler sunuyoruz. Uzman ekibimiz, tasarımdan üretime kadar tüm süreçlerde teknik destek, arıza analizi ve performans optimizasyonu sağlamaktadır.
            </p>
          </div>
          <div className="relative">
             <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-xl relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="/assets/gallery/kurlarsld.png" 
                  alt="Ar-Ge Merkezi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden md:block z-20">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                      <Microscope className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="font-bold text-slate-900">İleri Teknoloji</div>
                      <div className="text-xs text-slate-500">Simülasyon & Modelleme</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100">
          <h3 className="text-3xl font-heading font-bold text-center mb-16 text-slate-900">Geliştirme Süreçlerimiz</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

             {/* Step 1 */}
             <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg shadow-blue-600/20">
                   <Search className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">1. İhtiyaç Analizi</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Pazar taleplerini ve müşteri ihtiyaçlarını analiz ederek, sektördeki eksiklikleri belirliyoruz. Her yeni ürünün temeli bu kapsamlı araştırmaya dayanır.
                </p>
             </div>

             {/* Step 2 */}
             <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg shadow-cyan-500/20">
                   <Cpu className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">2. Tasarım & Prototip</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Yüksek verimlilik ve enerji tasarrufu odaklı tasarımlar geliştiriyoruz. Simülasyon yazılımları ile dijital ortamda doğrulanan tasarımlar prototipe dönüştürülür.
                </p>
             </div>

             {/* Step 3 */}
             <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg shadow-indigo-600/20">
                   <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">3. Üretim & Test</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Prototipler, en zorlu koşullarda test edilir. Performans, dayanıklılık ve güvenlik testlerinden başarıyla geçen ürünler seri üretime alınır.
                </p>
             </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
