import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Award, CheckCircle, Shield, FileCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Certificates() {
  const { t } = useLanguage();
  const certificates = [
    {
      id: 'iso14001',
      code: 'ISO 14001',
      title: 'Çevre Yönetim Sistemi',
      description: t('certs.iso14001.desc'),
      image: '/assets/certificates/iso14001.webp',
      color: 'green'
    },
    {
      id: 'iso9001',
      code: 'ISO 9001',
      title: 'Kalite Yönetim Sistemi',
      description: t('certs.iso9001.desc'),
      image: '/assets/certificates/iso9001.png',
      color: 'blue'
    },
    {
      id: 'iso45001',
      code: 'ISO 45001',
      title: 'İş Sağlığı ve Güvenliği',
      description: t('certs.iso45001.desc'),
      image: '/assets/certificates/iso45001.png',
      color: 'orange'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-slate-50 border-b border-slate-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            {t('certs.title')}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('certs.desc')}
          </p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="p-8 bg-slate-50/50 border-b border-slate-100 flex items-center justify-center h-64 relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                 <img 
                   src={cert.image} 
                   alt={cert.title} 
                   className="max-h-full max-w-full object-contain relative z-0 transform group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                     cert.color === 'green' ? 'bg-green-100 text-green-600' :
                     cert.color === 'blue' ? 'bg-blue-100 text-primary' :
                     'bg-orange-100 text-orange-600'
                   }`}>
                      <Award className="w-5 h-5" />
                   </div>
                   <span className="font-bold text-slate-900 text-lg">{cert.code}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>

                <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                  <FileCheck className="w-4 h-4" /> {t('certs.view_doc')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Quality Policy Strip */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-bold mb-6">{t('certs.quality_policy')}</h2>
                 <div className="space-y-4">
                    {[
                      t('certs.policy.customer'),
                      t('certs.policy.standard'),
                      t('certs.policy.improvement'),
                      t('certs.policy.environment')
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <CheckCircle className="w-5 h-5 text-primary/60 shrink-0" />
                         <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 <Shield className="w-48 h-48 text-slate-800" />
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
