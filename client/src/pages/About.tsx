import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import factoryImg from "@assets/stock_images/modern_high_tech_fac_b41f4e55.jpg";
import teamImg from "@assets/stock_images/engineers_discussing_80c2014f.jpg";
import productionImg from "@assets/stock_images/cnc_machine_working__6de74fb5.jpg";

export default function About() {
  return (
    <Layout>
      <div className="bg-slate-50 border-b border-border py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            30 Yıllık Mühendislik Deneyimi
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Kurlar Dalgıç Pompa olarak, suyun gücünü teknolojiyle buluşturuyor, 
            dünya standartlarında pompa ve motor sistemleri üretiyoruz.
          </p>
        </div>
      </div>

      {/* Intro Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
            <img 
              src={factoryImg} 
              alt="Kurlar Fabrika" 
              className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="text-primary font-bold text-4xl mb-1">15.000 m²</p>
              <p className="text-sm text-muted-foreground">Kapalı Üretim Alanı</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
              Geleceği Üretiyoruz
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              1995 yılında İzmir'de kurulan firmamız, dalgıç pompa ve motor teknolojilerinde 
              Türkiye'nin öncü üreticilerinden biridir. Modern üretim tesisimizde, 
              AR-GE odaklı yaklaşımımızla sektörün ihtiyaçlarına yenilikçi çözümler sunuyoruz.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Üretimimizin her aşamasında kaliteyi ön planda tutuyor, ISO 9001 standartlarına 
              uygun süreçlerimizle müşterilerimize en güvenilir ürünleri ulaştırıyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-lg text-foreground">Yerli Üretim</h4>
                <p className="text-sm text-muted-foreground">%100 yerli sermaye ve mühendislik</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-lg text-foreground">Global Vizyon</h4>
                <p className="text-sm text-muted-foreground">20+ ülkeye ihracat başarısı</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Üretim Teknolojimiz</h2>
              <p className="text-white/60">Modern CNC parkurumuz ve uzman kadromuz.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img src={productionImg} alt="CNC Üretim" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-bold text-lg">Hassas İşleme</h3>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] md:mt-8"
            >
              <img src={teamImg} alt="AR-GE Ekibi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-bold text-lg">Uzman Kadro</h3>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                 <span className="text-white/20 font-bold text-xl">Kalite Kontrol Lab.</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="font-bold text-lg">Test Laboratuvarı</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-heading font-bold text-center mb-16">Tarihçemiz</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200"></div>
          
          {[
            { year: "1995", title: "Kuruluş", desc: "İzmir'de küçük bir atölyede üretime başladık." },
            { year: "2005", title: "İlk İhracat", desc: "Ortadoğu pazarına ilk dalgıç pompa ihracatımızı gerçekleştirdik." },
            { year: "2012", title: "Yeni Fabrika", desc: "15.000 m²'lik modern üretim tesisimize taşındık." },
            { year: "2018", title: "Ar-Ge Merkezi", desc: "Teknoloji ve inovasyon merkezimizi kurduk." },
            { year: "2024", title: "Sürdürülebilirlik", desc: "Yeşil enerji ile üretim yapan ilk tesis olduk." },
          ].map((item, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm z-10"></div>
              <div className={`w-5/12 p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-primary font-bold text-xl block mb-2">{item.year}</span>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
