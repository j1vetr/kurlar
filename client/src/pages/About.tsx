import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Globe, Award, Users, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

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
            {t('home.about.title').split(' ').slice(0, 3).join(' ')} <br/> <span className="text-primary">{t('home.about.title').split(' ').slice(3).join(' ')}</span>
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

        {/* History Timeline - Redesigned & Unique */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-3">{t('about.history.title')}</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4 text-lg">{t('about.history.subtitle')}</p>
          </div>
          
          <div className="relative">
            {/* Central Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 via-primary to-blue-100 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                { year: '2022', title: t('about.history.2022.title'), desc: t('about.history.2022.desc') },
                { year: '2019', title: t('about.history.2019.title'), desc: t('about.history.2019.desc') },
                { year: '2012', title: t('about.history.2012.title'), desc: t('about.history.2012.desc') },
                { year: '2008', title: t('about.history.2008.title'), desc: t('about.history.2008.desc') },
                { year: '2000', title: t('about.history.2000.title'), desc: t('about.history.2000.desc') },
                { year: '1996', title: t('about.history.1996.title'), desc: t('about.history.1996.desc') },
                { year: '1989', title: t('about.history.1989.title'), desc: t('about.history.1989.desc') },
                { year: '1975', title: t('about.history.1975.title'), desc: t('about.history.1975.desc') }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 text-center md:text-left p-6 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative group">
                     <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rotate-45 hidden md:block ${index % 2 === 0 ? '-left-2' : '-right-2'}`}></div>
                     <span className="text-4xl font-bold text-blue-100 absolute top-2 right-4 select-none group-hover:text-blue-50 transition-colors">{item.year}</span>
                     <div className="relative z-10">
                       <span className="inline-block px-3 py-1 bg-blue-50 text-primary font-bold rounded-full text-sm mb-3 border border-blue-100">{item.year}</span>
                       <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                       <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>

                  {/* Center Point */}
                  <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-white shadow-md z-10"></div>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
