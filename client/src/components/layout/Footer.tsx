import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
                 <img src="/assets/logo.png" alt="Kurlar Logo" className="w-full h-auto object-contain" />
               </div>
               <span className="font-heading font-bold text-2xl tracking-tight">KURLAR</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              1975'ten beri suyun gücünü teknolojiyle buluşturuyor, Türkiye'den dünyaya değer katıyoruz. Yüksek verimli dalgıç pompa ve motor çözümleri.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/kurlar-pompa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/kurlarpompa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/kurlarpompa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hızlı Erişim</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/"><a className="hover:text-blue-400 transition-colors">Ana Sayfa</a></Link></li>
              <li><Link href="/hakkimizda"><a className="hover:text-blue-400 transition-colors">Kurumsal</a></Link></li>
              <li><Link href="/urunler"><a className="hover:text-blue-400 transition-colors">Ürünler</a></Link></li>
              <li><Link href="/kariyer"><a className="hover:text-blue-400 transition-colors">Kariyer</a></Link></li>
              <li><Link href="/iletisim"><a className="hover:text-blue-400 transition-colors">İletişim</a></Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Ürün Grupları</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/urunler?category=pump"><a className="hover:text-blue-400 transition-colors">Dalgıç Pompalar</a></Link></li>
              <li><Link href="/urunler?category=motor"><a className="hover:text-blue-400 transition-colors">Dalgıç Motorlar</a></Link></li>
              <li><Link href="/urunler?search=Paslanmaz"><a className="hover:text-blue-400 transition-colors">Paslanmaz Serisi</a></Link></li>
              <li><Link href="/urunler?search=Döküm"><a className="hover:text-blue-400 transition-colors">Döküm Serisi</a></Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Yasal & İletişim</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/gizlilik-politikasi"><a className="hover:text-blue-400 transition-colors">Gizlilik Politikası</a></Link></li>
              <li><Link href="/cerez-politikasi"><a className="hover:text-blue-400 transition-colors">Çerez Politikası</a></Link></li>
              <li className="pt-4 text-slate-500">
                İzmir, Türkiye <br/>
                info@kurlar.com.tr
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Kurlar Dalgıç Pompa & Motor Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center gap-1">
            <span>Geliştirici & Tasarımcı :</span>
            <a 
              href="https://toov.com.tr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              TOOV <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
