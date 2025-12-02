import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img src="/assets/logo.png" alt="Kurlar Logo" className="h-12 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Yüksek verimlilik, uzun ömür ve güvenilir performans için tasarlanmış profesyonel dalgıç pompa çözümleri.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/hakkimizda"><a className="hover:text-white transition-colors">Hakkımızda</a></Link></li>
              <li><Link href="/bayi-servis"><a className="hover:text-white transition-colors">Bayi & Servis</a></Link></li>
              <li><Link href="/iletisim"><a className="hover:text-white transition-colors">İletişim</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Ürünler</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/urunler?category=pump"><a className="hover:text-white transition-colors">Dalgıç Pompalar</a></Link></li>
              <li><Link href="/urunler?category=motor"><a className="hover:text-white transition-colors">Dalgıç Motorlar</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>İzmir, Türkiye</li>
              <li>info@kurlar.com.tr</li>
              <li>+90 232 000 00 00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            &copy; 2025 Kurlar Dalgıç Pompa. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            {/* Social Media placeholders */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
