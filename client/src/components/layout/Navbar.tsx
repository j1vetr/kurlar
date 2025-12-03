import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, FileText } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  // Keep scroll logic only for shadow, not for background color since it's always white now
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    // "Ürünler" will be handled separately for Mega Menu
    { name: "Bayi & Servis", href: "/bayi-servis" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b",
        isScrolled ? "shadow-md border-slate-200 py-2" : "border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo Area */}
        <Link href="/">
          <a className="group relative z-50">
             {/* Logo container with adjusted spacing */}
            <div className="relative flex items-center justify-center">
               {/* Animated border removed/simplified for white header look, or kept subtle */}
               <div className="absolute inset-0 rounded-full bg-blue-50/50 scale-110 group-hover:scale-125 transition-transform duration-500" />
               <img 
                  src="/assets/logo.png" 
                  alt="Kurlar Logo" 
                  className="h-10 md:h-12 w-auto object-contain relative z-10" 
                />
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <Link href="/">
            <a className={cn("text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors", location === "/" ? "text-primary" : "text-slate-600")}>
              Ana Sayfa
            </a>
          </Link>
          
          <Link href="/hakkimizda">
            <a className={cn("text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors", location === "/hakkimizda" ? "text-primary" : "text-slate-600")}>
              Hakkımızda
            </a>
          </Link>

          {/* Mega Menu Trigger */}
          <div 
            className="group h-full flex items-center"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link href="/urunler">
              <a className={cn(
                "text-sm font-bold uppercase tracking-wider flex items-center gap-1 py-4 transition-colors", 
                (location.startsWith("/urunler") || productsOpen) ? "text-primary" : "text-slate-600 hover:text-primary"
              )}>
                Ürünler
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", productsOpen && "rotate-180")} />
              </a>
            </Link>

            {/* Mega Menu Content */}
            <div className={cn(
              "absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 origin-top overflow-hidden",
              productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            )}>
              <div className="container mx-auto">
                <div className="flex border-x border-slate-50">
                  {/* Pumps Column */}
                  <div className="flex-1 p-10 border-r border-slate-50 bg-slate-50/30">
                    <Link href="/urunler?category=pump">
                      <h3 className="font-heading font-bold text-lg mb-6 text-slate-900 hover:text-primary cursor-pointer flex items-center group/title">
                        DALGIÇ POMPALAR
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-primary" />
                      </h3>
                    </Link>
                    <ul className="space-y-3">
                      {[
                        "Paslanmaz Çelik Dalgıç Pompalar",
                        "Noryl Dalgıç Pompalar",
                        "Pik Döküm Dalgıç Pompalar",
                        "Paslanmaz Döküm Dalgıç Pompalar"
                      ].map((item) => (
                        <li key={item}>
                          <Link href={`/urunler?search=${item}`}>
                            <a className="text-sm text-slate-500 hover:text-primary hover:translate-x-1 transition-all block font-medium">
                              {item}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Motors Column */}
                  <div className="flex-1 p-10 border-r border-slate-50 bg-slate-50/30">
                    <Link href="/urunler?category=motor">
                      <h3 className="font-heading font-bold text-lg mb-6 text-slate-900 hover:text-primary cursor-pointer flex items-center group/title">
                        DALGIÇ MOTORLAR
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-primary" />
                      </h3>
                    </Link>
                    <ul className="space-y-3">
                      {[
                        "Yağlı Tip Dalgıç Motorlar",
                        "HI-TEMP Dalgıç Motorlar",
                        "S-Type Dalgıç Motorlar"
                      ].map((item) => (
                        <li key={item}>
                          <Link href={`/urunler?search=${item}`}>
                            <a className="text-sm text-slate-500 hover:text-primary hover:translate-x-1 transition-all block font-medium">
                              {item}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Catalog Promo Card */}
                  <div className="w-1/3 p-0">
                    <div className="h-full bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:bg-blue-900 transition-colors">
                      <div className="relative z-10">
                        <span className="text-blue-200 text-sm font-medium mb-2 block">2025</span>
                        <h3 className="font-heading text-4xl font-bold leading-tight mb-4">
                          KURLAR <br/> KATALOG
                        </h3>
                      </div>
                      
                      <div className="relative z-10 flex items-center text-sm font-bold tracking-wider uppercase mt-8">
                        GÖRÜNTÜLE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>

                      {/* Background Icon Decoration */}
                      <FileText className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/bayi-servis">
            <a className={cn("text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors", location === "/bayi-servis" ? "text-primary" : "text-slate-600")}>
              Bayi & Servis
            </a>
          </Link>
          
          <Link href="/iletisim">
            <a className={cn("text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors", location === "/iletisim" ? "text-primary" : "text-slate-600")}>
              İletişim
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto pb-20 animate-in slide-in-from-right-10">
          <div className="flex flex-col p-6 space-y-6">
            <Link href="/">
              <a onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Ana Sayfa</a>
            </Link>
            
            <div className="space-y-4">
              <div className="text-lg font-bold text-primary border-b border-slate-100 pb-2">Ürünler</div>
              <div className="pl-4 space-y-6">
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-3 uppercase">Dalgıç Pompalar</div>
                  <ul className="space-y-2">
                     {["Paslanmaz Çelik", "Noryl", "Pik Döküm", "Paslanmaz Döküm"].map(i => (
                       <li key={i}>
                         <Link href="/urunler">
                           <a onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-500 block py-1">{i}</a>
                         </Link>
                       </li>
                     ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-3 uppercase">Dalgıç Motorlar</div>
                  <ul className="space-y-2">
                     {["Yağlı Tip", "HI-TEMP", "S-Type"].map(i => (
                       <li key={i}>
                         <Link href="/urunler">
                           <a onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-500 block py-1">{i}</a>
                         </Link>
                       </li>
                     ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/hakkimizda">
              <a onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Hakkımızda</a>
            </Link>
            <Link href="/bayi-servis">
              <a onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Bayi & Servis</a>
            </Link>
            <Link href="/iletisim">
              <a onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">İletişim</a>
            </Link>
            
            <div className="bg-primary p-6 rounded-xl text-white mt-4">
              <h4 className="font-bold text-xl mb-2">2025 Katalog</h4>
              <p className="text-blue-100 text-sm mb-4">En yeni ürünlerimizi inceleyin.</p>
              <button className="text-sm font-bold uppercase flex items-center">Görüntüle <ArrowRight className="ml-2 w-4 h-4" /></button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
