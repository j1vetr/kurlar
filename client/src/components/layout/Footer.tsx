import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white border-t border-primary/20">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                 <img src="/assets/logo.png" alt="Kurlar Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-blue-50 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/kurlar-pompa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group border border-primary/30"
              >
                <Linkedin className="w-5 h-5 text-blue-100 group-hover:text-primary" />
              </a>
              <a 
                href="https://www.facebook.com/kurlarpompa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group border border-primary/30"
              >
                <Facebook className="w-5 h-5 text-blue-100 group-hover:text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/kurlarpompa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/50 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group border border-primary/30"
              >
                <Instagram className="w-5 h-5 text-blue-100 group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">{t('footer.quick_links')}</h4>
            <ul className="space-y-3 text-sm text-blue-50">
              <li><Link href="/"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.home')}</a></Link></li>
              <li><Link href="/hakkimizda"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.corporate')}</a></Link></li>
              <li><Link href="/urunler"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.products')}</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></Link></li>
              <li><Link href="/kariyer"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.career')}</a></Link></li>
              <li><Link href="/iletisim"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.contact')}</a></Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">{t('footer.product_groups')}</h4>
            <ul className="space-y-3 text-sm text-blue-50">
              <li><Link href="/urunler?category=pump"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.pumps')}</a></Link></li>
              <li><Link href="/urunler?category=motor"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.motors')}</a></Link></li>
              <li><Link href="/urunler?search=Paslanmaz"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.stainless_series')}</a></Link></li>
              <li><Link href="/urunler?search=Döküm"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.cast_series')}</a></Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">{t('footer.legal_contact')}</h4>
            <ul className="space-y-3 text-sm text-blue-50">
              <li><Link href="/gizlilik-politikasi"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.privacy')}</a></Link></li>
              <li><Link href="/cerez-politikasi"><a className="hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.cookies')}</a></Link></li>
              <li className="pt-4 text-blue-100/80">
                İzmir, Türkiye <br/>
                info@kurlar.com.tr
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-black/20 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-100/60">
          <p>
            {t('footer.rights')}
          </p>
          <div className="flex items-center gap-1">
            <span>Geliştirici & Tasarımcı :</span>
            <a 
              href="https://toov.com.tr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-blue-50 hover:text-white transition-colors flex items-center gap-1"
            >
              TOOV <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
