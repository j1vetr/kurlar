import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle, Shield, FileCheck, X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SEO } from "@/components/shared/SEO";
import { useState } from "react";

export default function Certificates() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = [
    {
      id: 'tse',
      code: 'TSE',
      title: t('certs.tse.title'),
      description: t('certs.tse.desc'),
      image: '/assets/certificates/tse.pdf', // Using PDF as source
      thumbnail: '/assets/quality/tse.png', // Fallback or generic thumb if needed, reusing existing asset or icon
      color: 'red'
    },
    {
      id: 'ce-kp',
      code: 'CE - KP',
      title: t('certs.cekp.title'),
      description: t('certs.cekp.desc'),
      image: '/assets/certificates/ce-kp.pdf',
      thumbnail: '/assets/quality/ce.png',
      color: 'blue'
    },
    {
      id: 'ce-km',
      code: 'CE - KM',
      title: t('certs.cekm.title'),
      description: t('certs.cekm.desc'),
      image: '/assets/certificates/ce-km.pdf',
      thumbnail: '/assets/quality/ce.png',
      color: 'blue'
    },
    {
      id: 'iso14001',
      code: 'ISO 14001',
      title: 'Çevre Yönetim Sistemi',
      description: t('certs.iso14001.desc'),
      image: '/assets/certificates/iso14001.webp', // Image file
      thumbnail: '/assets/certificates/iso14001.webp',
      color: 'green'
    },
    {
      id: 'iso9001',
      code: 'ISO 9001',
      title: 'Kalite Yönetim Sistemi',
      description: t('certs.iso9001.desc'),
      image: '/assets/certificates/iso9001.png', // Image file
      thumbnail: '/assets/certificates/iso9001.png',
      color: 'blue'
    },
    {
      id: 'iso45001',
      code: 'ISO 45001',
      title: 'İş Sağlığı ve Güvenliği',
      description: t('certs.iso45001.desc'),
      image: '/assets/certificates/iso45001.png', // Image file
      thumbnail: '/assets/certificates/iso45001.png',
      color: 'orange'
    }
  ];

  return (
    <Layout>
      <SEO 
        title={t('seo.certificates.title')} 
        description={t('seo.certificates.desc')} 
        canonical="https://kurlar.com.tr/sertifikalarimiz"
      />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer"
              onClick={() => setSelectedCert(cert.image)}
            >
              <div className="p-8 bg-slate-50/50 border-b border-slate-100 flex items-center justify-center h-64 relative overflow-hidden">
                 <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-primary" />
                    </div>
                 </div>
                 <img 
                   src={cert.thumbnail} 
                   alt={`Kurlar ${cert.code} – ${cert.title}`} 
                   title={cert.title}
                   loading="lazy"
                   className="max-h-full max-w-full object-contain relative z-0 transform group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                     cert.color === 'green' ? 'bg-green-100 text-green-600' :
                     cert.color === 'blue' ? 'bg-blue-100 text-primary' :
                     cert.color === 'red' ? 'bg-red-100 text-red-600' :
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

                <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:border-primary group-hover:text-white">
                  <FileCheck className="w-4 h-4" /> {t('certs.view_doc')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden relative shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white">
                <h3 className="font-bold text-lg text-slate-800">Sertifika Görüntüleyici</h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>
              
              <div className="flex-1 bg-slate-100 p-0 overflow-hidden relative">
                {selectedCert.endsWith('.pdf') ? (
                   <iframe 
                     src={`${selectedCert}#toolbar=0&view=FitH`} 
                     className="w-full h-full border-0" 
                     title="Certificate PDF"
                   />
                ) : (
                   <div className="w-full h-full flex items-center justify-center overflow-auto p-8">
                     <img 
                       src={selectedCert} 
                       alt="Certificate Full View" 
                       className="max-w-full max-h-full object-contain shadow-lg"
                     />
                   </div>
                )}
              </div>

              <div className="p-4 bg-white border-t border-slate-100 flex justify-end">
                 <a 
                   href={selectedCert} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-sm font-bold text-primary hover:underline flex items-center gap-2"
                 >
                   <FileCheck className="w-4 h-4" /> Yeni Sekmede Aç
                 </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
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
