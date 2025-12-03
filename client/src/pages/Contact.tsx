import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Elegant Hero */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-primary/60 font-bold tracking-widest uppercase text-sm mb-4 block">
             İletişim
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Size Nasıl Yardımcı Olabiliriz?
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Projeleriniz için teknik destek, teklif talepleri veya genel sorularınız için uzman ekibimizle iletişime geçin.
          </p>
        </div>
      </div>

      {/* Main Info Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Head Office Card */}
           <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
                 <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Merkez Fabrika</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                İbni Melek OSB. Mah. Tosbi Yol<br/>
                5. Sok. No: 5 Tire / İzmir
              </p>
              <a href="https://g.co/kgs/2gGV7No" target="_blank" rel="noopener noreferrer" className="mt-auto text-primary font-bold hover:text-blue-800 flex items-center gap-2">
                Yol Tarifi Al <ArrowRight className="w-4 h-4" />
              </a>
           </div>

           {/* Phone Support */}
           <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                 <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Telefon & Destek</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Hafta içi 08:30 - 18:00 saatleri arasında bize ulaşabilirsiniz.
              </p>
              <a href="tel:902325123030" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors">
                +90 (232) 512 30 30
              </a>
           </div>

           {/* Email */}
           <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6">
                 <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">E-Posta</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Teklif ve bilgi talepleriniz için e-posta adresimiz.
              </p>
              <a href="mailto:info@kurlar.com.tr" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                info@kurlar.com.tr
              </a>
           </div>
        </div>
      </div>

      {/* Map Section - Full Width */}
      <div className="w-full h-[500px] bg-slate-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.641431896711!2d27.70699921244816!3d38.12527557178196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b93de0ed96103d%3A0x8cff47f9de61ed93!2zS3VybGFyIERhbGfEscOnIFBvbXBhICYgRGFsZ8Sxw6cgTW90b3I!5e0!3m2!1str!2str!4v1764785445493!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(0%)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
        
        {/* Map Overlay Card */}
        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
           <div className="flex items-center gap-3 mb-2">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-bold text-slate-900">Global Merkez</span>
           </div>
           <p className="text-sm text-slate-500">
             Türkiye'nin en büyük dalgıç pompa üretim tesislerinden biri.
           </p>
        </div>
      </div>
    </Layout>
  );
}
