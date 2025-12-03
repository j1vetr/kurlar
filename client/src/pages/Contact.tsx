import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">İletişim</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Sizden haber almak istiyoruz. İhtiyaçlarınızı anlamak ve beklentileri aşan bir çözüm sunmak için heyecanlıyız.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          {[
            { 
              icon: Phone, 
              title: "Telefon", 
              lines: ["+90 (232) 512 30 30"],
              link: "tel:902325123030"
            },
            { 
              icon: Mail, 
              title: "E-Posta", 
              lines: ["info@kurlar.com.tr"],
              link: "mailto:info@kurlar.com.tr"
            },
            { 
              icon: MapPin, 
              title: "Adres", 
              lines: ["İbni Melek OSB. Mah. Tosbi Yol", "5. Sok. No: 5 Tire / İzmir"],
              link: "https://g.co/kgs/2gGV7No"
            },
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center hover:translate-y-1 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-slate-600">{line}</p>
              ))}
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Bize Yazın</h2>
            <p className="text-slate-600 mb-8">
              Aşağıdaki formu doldurarak bize ulaşabilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Adınız Soyadınız</label>
                  <Input placeholder="Ad Soyad" className="h-12 bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Telefon</label>
                  <Input placeholder="05XX XXX XX XX" className="h-12 bg-slate-50 border-slate-200" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">E-Posta</label>
                  <Input placeholder="ornek@sirket.com" type="email" className="h-12 bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Firma</label>
                  <Input placeholder="Firma Adı" className="h-12 bg-slate-50 border-slate-200" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Mesajınız</label>
                <Textarea placeholder="Yorumlar/Sorular..." className="min-h-[150px] bg-slate-50 border-slate-200 resize-none" />
              </div>
              
              <Button size="lg" className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary/90">
                Gönder
              </Button>
            </form>
          </div>

          {/* Map - Using an image placeholder that looks professional or if iframe is allowed */}
          <div className="h-full min-h-[400px] bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-inner relative">
             {/* Since we can't easily embed a real dynamic google map without API key, we'll use a link-image approach or simple placeholder */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12585.85589564845!2d27.452217!3d38.085017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6b5d6833365b%3A0x35c497365e058686!2sKurlar%20Dalg%C4%B1%C3%A7%20Pompa%20ve%20Motor!5e0!3m2!1str!2str!4v1701600000000!5m2!1str!2str" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 w-full h-full"
             ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
