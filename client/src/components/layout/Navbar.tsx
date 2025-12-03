import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, FileText } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuStructure = [
    { type: "link", name: "Ana Sayfa", href: "/" },
    {
      type: "dropdown",
      name: "Kurumsal",
      href: "/hakkimizda", // Default link
      children: [
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "İletişim", href: "/iletisim" },
        { name: "İletişim Formu", href: "/iletisim" },
      ]
    },
    {
      type: "mega",
      name: "Ürünler",
      href: "/urunler"
    },
    {
      type: "dropdown",
      name: "Bayi & Servis",
      href: "/bayi-servis",
      children: [
        { name: "Yurt İçi Bayi & Servis Ağı", href: "/bayi-servis" }
      ]
    },
    {
      type: "dropdown",
      name: "AR-GE",
      href: "/ar-ge",
      children: [
        { name: "Ar-Ge Merkezi", href: "/ar-ge" },
        { name: "Sertifikalarımız", href: "/sertifikalar" }
      ]
    },
    {
      type: "dropdown",
      name: "Medya",
      href: "/medya",
      children: [
        { name: "Haberler", href: "/haberler" },
        { name: "Yazılar", href: "/yazilar" }
      ]
    },
    {
      type: "dropdown",
      name: "Kariyer",
      href: "/kariyer",
      children: [
        { name: "Açık Pozisyonlar", href: "/kariyer" }
      ]
    }
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
            <div className="relative flex items-center justify-center">
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
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          {menuStructure.map((item) => {
            if (item.type === "link") {
              return (
                <Link key={item.name} href={item.href}>
                  <a className={cn("text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors", location === item.href ? "text-primary" : "text-slate-600")}>
                    {item.name}
                  </a>
                </Link>
              );
            }

            if (item.type === "dropdown") {
              return (
                <div 
                  key={item.name}
                  className="group relative h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={item.href}>
                    <a className={cn(
                      "text-sm font-bold uppercase tracking-wider flex items-center gap-1 py-4 transition-colors", 
                      (location.startsWith(item.href) || activeDropdown === item.name) ? "text-primary" : "text-slate-600 hover:text-primary"
                    )}>
                      {item.name}
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === item.name && "rotate-180")} />
                    </a>
                  </Link>

                  <div className={cn(
                    "absolute top-full left-0 w-56 bg-white border border-slate-100 shadow-xl rounded-b-lg transition-all duration-200 origin-top overflow-hidden z-50",
                    activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}>
                    <ul className="py-2">
                      {item.children?.map((child) => (
                        <li key={child.name}>
                          <Link href={child.href}>
                            <a className="block px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors">
                              {child.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            if (item.type === "mega") {
              return (
                <div 
                  key={item.name}
                  className="group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={item.href}>
                    <a className={cn(
                      "text-sm font-bold uppercase tracking-wider flex items-center gap-1 py-4 transition-colors", 
                      (location.startsWith(item.href) || activeDropdown === item.name) ? "text-primary" : "text-slate-600 hover:text-primary"
                    )}>
                      {item.name}
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === item.name && "rotate-180")} />
                    </a>
                  </Link>

                  {/* Mega Menu Content */}
                  <div className={cn(
                    "absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 origin-top overflow-hidden z-40",
                    activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
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
                              "Paslanmaz Çelik Dalgıç Pompalar (KP)",
                              "4″ Noryl Dalgıç Pompalar (KPN)",
                              "Pik Döküm Dalgıç Pompalar (KPD)",
                              "Paslanmaz Döküm Dalgıç Pompalar (KSX)"
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
                              "Hi-Temp Dalgıç Motorlar (KM)",
                              "S-Type Dalgıç Motorlar (KMS)",
                              "4\" Yağlı Tip Dalgıç Motorlar (KM4)"
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
              );
            }
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto pb-20 animate-in slide-in-from-right-10">
          <div className="flex flex-col p-6 space-y-6">
            {menuStructure.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-4">
                <div className="text-lg font-bold text-slate-900 mb-2 flex justify-between items-center">
                  {item.type === "link" ? (
                    <Link href={item.href}>
                      <a onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
                    </Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>
                
                {(item.type === "dropdown" || item.type === "mega") && item.children && (
                  <ul className="pl-4 space-y-2 border-l-2 border-slate-100 mt-2">
                    {item.children.map(child => (
                      <li key={child.name}>
                        <Link href={child.href}>
                          <a onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-500 block py-1 hover:text-primary">
                            {child.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {item.type === "mega" && !item.children && (
                   <div className="pl-4 space-y-6 border-l-2 border-slate-100 mt-2">
                     <div>
                        <div className="text-xs font-bold text-primary uppercase mb-2">Dalgıç Pompalar</div>
                        {[
                          "Paslanmaz Çelik Dalgıç Pompalar (KP)",
                          "4″ Noryl Dalgıç Pompalar (KPN)",
                          "Pik Döküm Dalgıç Pompalar (KPD)",
                          "Paslanmaz Döküm Dalgıç Pompalar (KSX)"
                        ].map(sub => (
                          <Link key={sub} href="/urunler">
                            <a onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-500 block py-1 mb-1">{sub}</a>
                          </Link>
                        ))}
                     </div>
                     <div>
                        <div className="text-xs font-bold text-primary uppercase mb-2">Dalgıç Motorlar</div>
                        {[
                          "Hi-Temp Dalgıç Motorlar (KM)",
                          "S-Type Dalgıç Motorlar (KMS)",
                          "4\" Yağlı Tip Dalgıç Motorlar (KM4)"
                        ].map(sub => (
                          <Link key={sub} href="/urunler">
                            <a onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-500 block py-1 mb-1">{sub}</a>
                          </Link>
                        ))}
                     </div>
                   </div>
                )}
              </div>
            ))}
            
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
