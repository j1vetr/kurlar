import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Globe, Award, Users, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SEO } from "@/components/shared/SEO";

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO 
        title={t('seo.about.title')} 
        description={t('seo.about.desc')} 
        canonical="https://kurlar.com.tr/hakkimizda"
      />
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
            {t('home.about.title_1')} <br/> <span className="text-primary">{t('home.about.title_2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('footer.desc')}
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
                  <span className="text-slate-500 font-medium uppercase tracking-wider text-sm">{t('about.exp_years')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              {t('about.half_century')}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.desc.p1') }}></p>
            <p className="text-slate-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.desc.p2') }}></p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t('home.global_export')}</h4>
                  <p className="text-sm text-slate-500">{t('about.stats.countries')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">35.000 m²</h4>
                  <p className="text-sm text-slate-500">{t('about.stats.facility')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">200+</h4>
                  <p className="text-sm text-slate-500">{t('about.stats.staff')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">ISO 9001</h4>
                  <p className="text-sm text-slate-500">{t('about.stats.quality')}</p>
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
              <div className="text-blue-100 font-medium">{t('about.stats.production')}</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold mb-2">17B+</div>
              <div className="text-blue-100 font-medium">{t('about.stats.audit')}</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 font-medium">{t('about.stats.dealers')}</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-2xl border-2 border-primary/30 shadow-lg hover:border-primary hover:shadow-blue-100 transition-all duration-300 group">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
              <span className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm mr-3 group-hover:bg-primary transition-colors">{t('about.mission.title')}</span>
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              {t('about.mission.desc')}
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl border-2 border-primary/30 shadow-lg hover:border-primary hover:shadow-blue-100 transition-all duration-300 group">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
              <span className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm mr-3 group-hover:bg-primary transition-colors">{t('about.vision.title')}</span>
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              {t('about.vision.desc')}
            </p>
          </div>
        </div>

        {/* History Timeline - Horizontal Infinite Scroll */}
        <div className="w-full overflow-hidden py-12 bg-slate-50/50 border-y border-slate-200/60">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">{t('about.history.title')}</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4 text-lg">{t('about.history.subtitle')}</p>
          </div>
          
          <div className="relative w-full">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

            {/* Central Line Background */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 z-0"></div>

            <motion.div 
              className="flex gap-0 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 60, // Slow and steady
              }}
              style={{ width: "fit-content" }}
              whileHover={{ animationPlayState: "paused" }} // Note: specific CSS override might be needed for true pause
            >
               {/* Duplicate data for seamless loop */}
               {[
                 ...[
                    { year: '2022', desc: 'DALGIÇ POMPA FABRİKASININ İZMİR’E TAŞINMASI' },
                    { year: '2019', desc: 'DALGIÇ MOTOR ÜRETİMİ İÇİN İZMİR’DE 25.000m² AÇIK – 10.250m² KAPALI ALANA SAHİP FABRİKA KURULUMU' },
                    { year: '2012', desc: 'İHRACAT HACMİNDE 6 KITAYA ULAŞILDI' },
                    { year: '2008', desc: '4000m²’LİK İLAVE FABRİKA KURULUMU' },
                    { year: '2002', desc: 'DÜNYA’DA İLK KEZ BORU MUHAFAZALI UZUN KADEMELİ PASLANMAZ ÇELİK DALGIÇ POMPA YAPILMASI' },
                    { year: '2000', desc: 'TÜRKİYE’DE İLK PASLANMAZ ÇELİK DALGIÇ POMPA İMALATINA BAŞLANMASI' },
                    { year: '1999', desc: '2500m²’LİK İLAVE FABRİKA KURULUMU' },
                    { year: '1996', desc: 'KURLAR İLK İHRACATINI GERÇEKLEŞTİRMESİ' },
                    { year: '1991', desc: 'AR&GE’NİN İLK ADIMLARI ATILMASI, POMPA VE MOTORLARDA DİZAYN DEĞİŞİKLİĞİ YAPILMASI' },
                    { year: '1989', desc: 'TÜRKİYE’NİN İLK TEKNOLOJİK POMPA VE MOTOR TEST LABORATUVARI KURULUMU' },
                    { year: '1983', desc: '200m²’LİK FABRİKA KURULUMU' },
                    { year: '1979', desc: 'DALGIÇ MOTOR ÜRETİMİNE BAŞLANMASI' },
                    { year: '1977', desc: 'PİK DÖKÜM DALGIÇ POMPA ÜRETİMİNE BAŞLANMASI' },
                    { year: '1975', desc: 'KURULUŞ' }
                  ],
                  ...[
                    { year: '2022', desc: 'DALGIÇ POMPA FABRİKASININ İZMİR’E TAŞINMASI' },
                    { year: '2019', desc: 'DALGIÇ MOTOR ÜRETİMİ İÇİN İZMİR’DE 25.000m² AÇIK – 10.250m² KAPALI ALANA SAHİP FABRİKA KURULUMU' },
                    { year: '2012', desc: 'İHRACAT HACMİNDE 6 KITAYA ULAŞILDI' },
                    { year: '2008', desc: '4000m²’LİK İLAVE FABRİKA KURULUMU' },
                    { year: '2002', desc: 'DÜNYA’DA İLK KEZ BORU MUHAFAZALI UZUN KADEMELİ PASLANMAZ ÇELİK DALGIÇ POMPA YAPILMASI' },
                    { year: '2000', desc: 'TÜRKİYE’DE İLK PASLANMAZ ÇELİK DALGIÇ POMPA İMALATINA BAŞLANMASI' },
                    { year: '1999', desc: '2500m²’LİK İLAVE FABRİKA KURULUMU' },
                    { year: '1996', desc: 'KURLAR İLK İHRACATINI GERÇEKLEŞTİRMESİ' },
                    { year: '1991', desc: 'AR&GE’NİN İLK ADIMLARI ATILMASI, POMPA VE MOTORLARDA DİZAYN DEĞİŞİKLİĞİ YAPILMASI' },
                    { year: '1989', desc: 'TÜRKİYE’NİN İLK TEKNOLOJİK POMPA VE MOTOR TEST LABORATUVARI KURULUMU' },
                    { year: '1983', desc: '200m²’LİK FABRİKA KURULUMU' },
                    { year: '1979', desc: 'DALGIÇ MOTOR ÜRETİMİNE BAŞLANMASI' },
                    { year: '1977', desc: 'PİK DÖKÜM DALGIÇ POMPA ÜRETİMİNE BAŞLANMASI' },
                    { year: '1975', desc: 'KURULUŞ' }
                  ]
               ].map((item, index) => (
                    <div key={index} className="w-[400px] flex flex-col items-center group relative px-6 shrink-0">
                      
                      {/* Top Card (Even Index) */}
                      <div className={`mb-8 transition-all duration-500 transform w-full ${index % 2 === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {index % 2 === 0 ? (
                          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 relative min-h-[160px] flex flex-col justify-center text-center group-hover:-translate-y-2">
                            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-slate-200 rotate-45 group-hover:border-primary/50 transition-colors"></div>
                            <span className="text-5xl font-black text-slate-100 absolute top-2 right-4 z-0 group-hover:text-blue-50 transition-colors">{item.year}</span>
                            <div className="relative z-10">
                               <span className="text-primary font-bold text-2xl block mb-2">{item.year}</span>
                               <p className="text-slate-600 text-xs font-bold uppercase leading-relaxed tracking-wide line-clamp-4">{item.desc}</p>
                            </div>
                          </div>
                        ) : <div className="min-h-[160px]"></div>}
                      </div>

                      {/* Center Dot on Line */}
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 shrink-0 my-0">
                        <div className="w-3 h-3 bg-white rounded-full border-[3px] border-primary shadow-lg z-10 group-hover:scale-150 group-hover:border-blue-400 transition-transform duration-300"></div>
                        <div className="absolute w-8 h-8 bg-primary/10 rounded-full animate-pulse group-hover:bg-primary/20"></div>
                        {/* Vertical connector line */}
                        <div className={`absolute w-0.5 bg-primary/20 h-[180px] z-0 ${index % 2 === 0 ? 'bottom-1/2' : 'top-1/2'}`}></div>
                      </div>

                      {/* Bottom Card (Odd Index) */}
                      <div className={`mt-8 transition-all duration-500 transform w-full ${index % 2 !== 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        {index % 2 !== 0 ? (
                          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 relative min-h-[160px] flex flex-col justify-center text-center group-hover:translate-y-2">
                            <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-200 rotate-45 group-hover:border-primary/50 transition-colors"></div>
                            <span className="text-5xl font-black text-slate-100 absolute bottom-2 right-4 z-0 group-hover:text-blue-50 transition-colors">{item.year}</span>
                            <div className="relative z-10">
                               <span className="text-primary font-bold text-2xl block mb-2">{item.year}</span>
                               <p className="text-slate-600 text-xs font-bold uppercase leading-relaxed tracking-wide line-clamp-4">{item.desc}</p>
                            </div>
                          </div>
                        ) : <div className="min-h-[160px]"></div>}
                      </div>
                      
                    </div>
                  ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
