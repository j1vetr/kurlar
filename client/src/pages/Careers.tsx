import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin, ArrowRight, CheckCircle2, Users, Zap, Trophy } from "lucide-react";
import { Link } from "wouter";

export default function Careers() {
  const positions = [
    {
      id: 1,
      title: "Bobinaj Ustası",
      department: "Üretim",
      type: "Tam Zamanlı",
      location: "İzmir Fabrika",
      description: "Dalgıç motor üretim hattımızda görev alacak, bobin sarımı konusunda deneyimli çalışma arkadaşları arıyoruz.",
      requirements: [
        "Endüstri Meslek Lisesi veya Meslek Yüksekokulu Elektrik/Elektronik bölümlerinden mezun",
        "Bobinaj sarımı konusunda en az 3 yıl deneyimli",
        "El aletleri kullanımına hakim",
        "Titiz ve detay odaklı çalışabilen",
        "Ekip çalışmasına yatkın"
      ]
    },
    {
      id: 2,
      title: "CNC Operatörü",
      department: "Talaşlı İmalat",
      type: "Tam Zamanlı",
      location: "İzmir Fabrika",
      description: "Modern makine parkurumuzda CNC tezgahlarını kullanacak, teknik resim okuma bilgisine sahip operatörler arıyoruz.",
      requirements: [
        "Tercihen Meslek Lisesi Tesviye, Makine veya CNC bölümlerinden mezun",
        "CNC Torna veya Freze tezgahlarında en az 2 yıl deneyimli",
        "Teknik resim okuma ve ölçüm aletleri (kumpas, mikrometre vb.) kullanabilen",
        "Vardiyalı çalışabilecek",
        "Erkek adaylar için askerlik hizmetini tamamlamış"
      ]
    },
    {
      id: 3,
      title: "Montaj Teknisyeni",
      department: "Üretim",
      type: "Tam Zamanlı",
      location: "İzmir Fabrika",
      description: "Dalgıç pompa ve motor montaj hattında görev alacak, mekanik montaj konusunda yetkin çalışma arkadaşları.",
      requirements: [
        "Meslek Lisesi Makine veya Metal İşleri bölümlerinden mezun",
        "Mekanik montaj konusunda deneyimli",
        "El becerisi yüksek",
        "Öğrenmeye açık ve gelişime istekli",
        "İş sağlığı ve güvenliği kurallarına tam uyum sağlayan"
      ]
    },
    {
      id: 4,
      title: "Kalite Kontrol Uzmanı",
      department: "Kalite",
      type: "Tam Zamanlı",
      location: "İzmir Fabrika",
      description: "Üretim süreçlerinin kalite standartlarına uygunluğunu denetleyecek, raporlama yapabilecek uzmanlar.",
      requirements: [
        "Üniversitelerin Makine Mühendisliği veya ilgili bölümlerinden mezun",
        "Kalite yönetim sistemleri (ISO 9001) konusunda bilgi sahibi",
        "Ölçüm cihazları kullanımında yetkin",
        "Analitik düşünme ve problem çözme yeteneği güçlü",
        "İngilizce bilen"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Güçlü Ekip Ruhu",
      desc: "Birbirini destekleyen, deneyimli ve dinamik bir ekiple çalışma fırsatı."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Sürekli Gelişim",
      desc: "Mesleki eğitimler ve kariyer gelişim programları ile potansiyelinizi artırın."
    },
    {
      icon: <Trophy className="w-6 h-6 text-blue-600" />,
      title: "Öncü Teknoloji",
      desc: "Sektörün en modern üretim teknolojileri ile çalışma imkanı."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
      title: "Sosyal Haklar",
      desc: "Rekabetçi maaş, özel sağlık sigortası, servis ve yemek imkanları."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Geleceği Birlikte Şekillendirelim
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Kurlar Dalgıç Pompa ailesine katılın, sektörün öncü teknolojilerini birlikte geliştirelim. Yeteneğinize ve enerjinize ihtiyacımız var.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 rounded-sm uppercase tracking-wider">
              Açık Pozisyonları İncele
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
              Neden Kurlar?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Çalışanlarımızın mutluluğu ve gelişimi bizim için önceliktir. İşte size sunduğumuz ayrıcalıklardan bazıları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="py-20 bg-slate-50" id="positions">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">
                Açık Pozisyonlar
              </h2>
              <p className="text-slate-500">
                Ekibimize katılmak için güncel iş ilanlarımızı inceleyin.
              </p>
            </div>
            <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-wider mt-4 md:mt-0">
              {positions.length} Pozisyon Mevcut
            </div>
          </div>

          <div className="space-y-6">
            {positions.map((pos, index) => (
              <motion.div 
                key={pos.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {pos.title}
                      </h3>
                      <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                        {pos.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {pos.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {pos.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> 2 gün önce
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {pos.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Aranan Nitelikler:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pos.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 shrink-0 lg:w-48">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wide h-12">
                      Başvur
                    </Button>
                    <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-bold uppercase tracking-wide h-12">
                      Detaylar
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* General Application CTA */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Aradığınız Pozisyonu Bulamadınız mı?
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                Yetenek havuzumuza katılın, niteliklerinize uygun bir pozisyon açıldığında sizinle iletişime geçelim.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 h-14 uppercase tracking-wider">
                Genel Başvuru Yap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
