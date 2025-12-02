import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">İletişim</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Sorularınız, teklif talepleriniz ve teknik destek için bize ulaşın.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          {[
            { icon: Phone, title: "Telefon", lines: ["+90 232 000 00 00", "+90 232 000 00 01"] },
            { icon: Mail, title: "E-Posta", lines: ["info@kurlar.com.tr", "satis@kurlar.com.tr"] },
            { icon: MapPin, title: "Adres", lines: ["İzmir Organize Sanayi Bölgesi", "10025 Sokak No:10, Çiğli / İzmir"] },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center hover:translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-muted-foreground">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Bize Yazın</h2>
            <p className="text-muted-foreground mb-8">
              Aşağıdaki formu doldurarak bize ulaşabilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Adınız Soyadınız</label>
                  <Input placeholder="Ad Soyad" className="h-12 bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefon</label>
                  <Input placeholder="05XX XXX XX XX" className="h-12 bg-slate-50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">E-Posta</label>
                <Input placeholder="ornek@sirket.com" type="email" className="h-12 bg-slate-50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Konu</label>
                <Input placeholder="Teklif talebi, Teknik destek vb." className="h-12 bg-slate-50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Mesajınız</label>
                <Textarea placeholder="Mesajınızı buraya yazın..." className="min-h-[150px] bg-slate-50 resize-none" />
              </div>
              
              <Button size="lg" className="w-full md:w-auto h-12 px-8">
                Mesajı Gönder
              </Button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="h-full min-h-[400px] bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/city-fields.png')] opacity-30"></div>
            <div className="text-center relative z-10 p-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-xl animate-bounce">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-2">Merkez Fabrika</h3>
              <p className="text-muted-foreground">İzmir, Türkiye</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
