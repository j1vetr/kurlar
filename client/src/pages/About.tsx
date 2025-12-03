import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Globe, Award, Users, Building2 } from "lucide-react";

export default function About() {
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
            Tarihimizden ilham alındı, <br/> <span className="text-blue-400">gelecek için tasarlandı</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            1975'ten bugüne, suyun gücünü teknolojiyle buluşturuyor, Türkiye'den dünyaya değer katıyoruz.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="relative">
              <img 
                src="/assets/gallery/kurlarsld.png" 
                alt="Kurlar Fabrika" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="text-center">
                  <span className="block text-5xl font-bold text-primary mb-2">50+</span>
                  <span className="text-slate-500 font-medium uppercase tracking-wider text-sm">Yıllık Tecrübe</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Yarım Asırlık Tecrübe ve <br/> Yenilikçi Vizyon
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Kurlar Pompa ve Motor 1975 yılında Yaşar Kurfeyiz tarafından İstanbul’da kurulmuştur. Dalgıç pompa ve motor üretimine 25m² atölyede 2 kişi ile başlayan Kurlar, günümüzde <span className="font-bold text-slate-900">40’dan fazla ülkeye ihracat yaparak üretimine 25.000m² Açık – 10.250m² Kapalı alanda 200’e yakın nitelikli ekibi ile İzmir’de devam etmektedir.</span>
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              <span className="font-bold text-slate-900">Türkiye’nin ilk Paslanmaz Çelik Dalgıç Pompa üreticisi</span> olan Kurlar, diğer ürünlerde de sektörün öncüsü konumundadır. Dalgıç Pompa ve Motor üzerine deneyimli mühendis kadrosuna sahip olan Kurlar ürünlerin gelişimi ve farklılıkları ile kalitesini her geçen gün arttırarak sektörün takip edilen firması haline gelmiştir.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">40+ Ülke</h4>
                  <p className="text-sm text-slate-500">İhracat Ağı</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">35.000 m²</h4>
                  <p className="text-sm text-slate-500">Üretim Tesisi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">200+</h4>
                  <p className="text-sm text-slate-500">Nitelikli Personel</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">ISO 9001</h4>
                  <p className="text-sm text-slate-500">Kalite Standartları</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-3xl p-12 text-white mb-24 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-4">
              <div className="text-5xl font-bold mb-2">180B+</div>
              <div className="text-blue-200 font-medium">Dalgıç Pompa & Motor Üretimi</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold mb-2">17B+</div>
              <div className="text-blue-200 font-medium">Kalite Denetimi Yapıldı</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200 font-medium">Aktif Bayi Ağı</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
              <span className="bg-primary text-white px-3 py-1 rounded text-sm mr-3">MİSYON</span>
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              Kullanıcılarına yüksek verimlilik ve sürdürülebilir kalite esasına uygun yüksek teknolojili yerli ve güvenilir ürünlerin üretimine her gün yenisi ekleyerek Kurlar’ı dünya markası yapmak.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
              <span className="bg-primary text-white px-3 py-1 rounded text-sm mr-3">VİZYON</span>
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              Dalgıç Pompa ve Dalgıç Motor dendiğinde akla ilk gelen, güvenilirliğiyle, müşteri memnuniyetiyle ve yenilikleriyle rakipsiz bir dünya markası olmak.
            </p>
          </div>
        </div>

        {/* History Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Tarihçe</h2>
            <p className="text-slate-500 mt-2">Başarılarla dolu yolculuğumuzun kilometre taşları.</p>
          </div>
          
          <div className="relative border-l-2 border-blue-100 pl-8 ml-4 space-y-12">
            {[
              { year: '2022', title: 'İzmir Fabrika', desc: 'Dalgıç pompa fabrikası İzmir\'e taşındı.' },
              { year: '2019', title: 'Yeni Motor Tesisi', desc: 'Dalgıç motor üretimi için İzmir’de 25.000m² açık – 10.250m² kapalı alana sahip fabrika kuruldu.' },
              { year: '2012', title: 'Küresel Erişim', desc: 'İhracat hacmi 6 kıtaya ulaştı.' },
              { year: '2008', title: 'Büyüme', desc: '4000 m² ilave fabrika kuruldu.' },
              { year: '2000', title: 'Bir İlk', desc: 'Türkiye\'de ilk kez paslanmaz çelik dalgıç pompa üretimine başlandı.' },
              { year: '1996', title: 'İlk İhracat', desc: 'İlk ihracat gerçekleştirildi.' },
              { year: '1989', title: 'Test Laboratuvarı', desc: 'Türkiye\'nin ilk teknolojik pompa ve motor test laboratuvarı kuruldu.' },
              { year: '1975', title: 'Kuruluş', desc: 'Yaşar Kurfeyiz önderliğinde şirketimizin kurulduğu yıl.' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary"></div>
                <span className="text-primary font-bold text-xl block mb-1">{item.year}</span>
                <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
