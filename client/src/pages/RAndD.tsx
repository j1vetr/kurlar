import { Layout } from "@/components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Microscope, Cpu, ShieldCheck, BarChart, Atom, Zap, Globe, Network } from "lucide-react";
import { useRef } from "react";

export default function RAndD() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      <div ref={containerRef} className="bg-slate-950 min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
        
        {/* Futuristic Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-500/10 via-violet-500/5 to-transparent blur-3xl" />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y, opacity }}
            className="container mx-auto px-6 text-center relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 inline-block relative"
            >
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
              <Atom className="w-20 h-20 text-cyan-400 relative z-10 mx-auto" />
            </motion.div>

            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-slate-400"
            >
              FUTURE LAB
            </motion.h1>

            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-cyan-100/70 max-w-2xl mx-auto font-light tracking-wide"
            >
              <span className="text-cyan-400 font-mono mr-2">&gt;</span>
              Geleceğin teknolojilerini bugünden kodluyoruz.
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-500 to-transparent"></div>
              <span className="text-[10px] font-mono text-cyan-500 tracking-[0.2em] uppercase">Keşfet</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 pb-32">
          
          {/* Section 1: The Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-cyan-500"></span>
                <span className="text-cyan-400 font-mono text-sm tracking-wider">SYSTEM_CORE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                İnovasyonun <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Merkezi Üssü</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                Kurlar Ar-Ge Laboratuvarı, sıradan bir çalışma alanı değil; teknolojinin sınırlarının zorlandığı bir inovasyon üssüdür. Burada veri, metal ve enerji bir araya gelerek yarının çözümlerini oluşturur.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">30+</div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Yıllık Deneyim</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Yerli Teknoloji</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-square md:aspect-video">
                 <img 
                   src="/assets/gallery/kurlarsld.png" 
                   alt="Advanced R&D" 
                   className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
                 />
                 
                 {/* Overlay UI Elements */}
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 </div>
                 
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 to-transparent p-8">
                    <div className="font-mono text-xs text-cyan-400 mb-2">STATUS: ACTIVE</div>
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: "0%" }}
                         whileInView={{ width: "85%" }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className="h-full bg-cyan-500"
                       />
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Technologies Cards */}
          <div className="mb-40">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-20"
             >
               <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Teknolojik Altyapı</h3>
               <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Cpu className="w-8 h-8" />,
                    title: "Dijital İkizleme",
                    desc: "Ürünlerin sanal kopyaları üzerinde gerçek zamanlı simülasyonlar ve stres testleri."
                  },
                  {
                    icon: <Network className="w-8 h-8" />,
                    title: "IoT Entegrasyonu",
                    desc: "Akıllı sensörler ve uzaktan izleme sistemleri ile sürekli veri analizi."
                  },
                  {
                    icon: <Microscope className="w-8 h-8" />,
                    title: "Nano Malzemeler",
                    desc: "Daha dayanıklı ve hafif bileşenler için ileri malzeme mühendisliği çalışmaları."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-md group transition-colors duration-500"
                  >
                    <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300 text-slate-400">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Section 3: The Process (Futuristic Timeline) */}
          <div className="relative">
             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
             
             {[
                { step: "01", title: "Veri Analizi", desc: "Big Data ile pazar ihtiyaçlarının taranması." },
                { step: "02", title: "Prototipleme", desc: "3D baskı ve hızlı üretim teknikleri." },
                { step: "03", title: "Saha Testleri", desc: "Ekstrem koşullarda dayanıklılık simülasyonları." },
                { step: "04", title: "Lansman", desc: "Teknolojinin son kullanıcı ile buluşması." }
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 mb-20 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                   <div className="hidden md:block flex-1"></div>
                   <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-500 text-cyan-400 font-bold font-mono shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                      {item.step}
                   </div>
                   <div className="flex-1">
                      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500">
                         <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                         <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

        </div>

        {/* Footer Gradient */}
        <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20"></div>
      </div>
    </Layout>
  );
}
