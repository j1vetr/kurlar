import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, FileText } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [mobileOverlayLangOpen, setMobileOverlayLangOpen] = useState(false);
  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

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
        { name: "Ar-Ge Merkezi", href: "/arge-merkezi" },
        { name: "Sertifikalarımız", href: "/sertifikalarimiz" },
        { name: "İletişim", href: "/iletisim" },
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isTransparent 
          ? "bg-transparent border-transparent py-6" 
          : "bg-white border-slate-200 py-2 shadow-md"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo Area */}
        <Link href="/">
          <a className="group relative z-50">
            <div className="relative flex items-center justify-center px-4 py-1">
               <div className={cn(
                 "absolute inset-0 rounded-full transition-all duration-500",
                 isTransparent ? "bg-white shadow-lg opacity-90" : "bg-transparent"
               )} />
               <img 
                  src="/assets/logo.png" 
                  alt="Kurlar Logo" 
                  className={cn(
                    "h-10 md:h-12 w-auto object-contain relative z-10 transition-all duration-300"
                  )} 
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
                  <a className={cn(
                    "text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors", 
                    location === item.href 
                      ? "text-primary" 
                      : (isTransparent ? "text-white hover:text-blue-100" : "text-slate-600 hover:text-primary")
                  )}>
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
                      (location.startsWith(item.href) || activeDropdown === item.name) 
                        ? "text-primary" 
                        : (isTransparent ? "text-white hover:text-blue-100" : "text-slate-600 hover:text-primary")
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
                      (location.startsWith(item.href) || activeDropdown === item.name) 
                        ? "text-primary" 
                        : (isTransparent ? "text-white hover:text-blue-100" : "text-slate-600 hover:text-primary")
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
                              { name: "Paslanmaz Çelik Dalgıç Pompalar (KP)", id: "kp" },
                              { name: "4″ Noryl Dalgıç Pompalar (KPN)", id: "kpn" },
                              { name: "Pik Döküm Dalgıç Pompalar (KPD)", id: "kpd" },
                              { name: "Paslanmaz Döküm Dalgıç Pompalar (KSX)", id: "ksx" }
                            ].map((item) => (
                              <li key={item.id}>
                                <Link href={`/urunler/${item.id}`}>
                                  <a className="text-sm text-slate-500 hover:text-primary hover:translate-x-1 transition-all block font-medium">
                                    {item.name}
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
                              { name: "Hi-Temp Dalgıç Motorlar (KM)", id: "km" },
                              { name: "S-Type Dalgıç Motorlar (KMS)", id: "kms" },
                              { name: "4\" Yağlı Tip Dalgıç Motorlar (KM4)", id: "km4" }
                            ].map((item) => (
                              <li key={item.id}>
                                <Link href={`/urunler/${item.id}`}>
                                  <a className="text-sm text-slate-500 hover:text-primary hover:translate-x-1 transition-all block font-medium">
                                    {item.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Catalog Promo Card */}
                        <div className="w-1/3 p-0">
                          <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer" className="block h-full">
                            <div className="h-full bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:bg-primary/90 transition-colors">
                              <div className="relative z-10">
                                <span className="text-blue-100 text-sm font-medium mb-2 block">2025</span>
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
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          
          {/* Language Switcher */}
          <div className="relative group h-full flex items-center ml-4">
            <button className={cn(
              "flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors",
              isTransparent ? "text-white hover:text-blue-100" : "text-slate-600 hover:text-primary"
            )}>
              <span className="text-xl">🇹🇷</span>
              <span className="hidden xl:inline">TR</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            
            <div className="absolute top-full right-0 w-40 bg-white border border-slate-100 shadow-xl rounded-b-lg transition-all duration-200 origin-top opacity-0 invisible translate-y-[-8px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 overflow-hidden">
              <ul className="py-1">
                {[
                   { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
                   { code: 'EN', name: 'English', flag: '🇬🇧' },
                   { code: 'AR', name: 'العربية', flag: '🇦🇪' },
                   { code: 'ES', name: 'Español', flag: '🇪🇸' },
                   { code: 'PT', name: 'Português', flag: '🇵🇹' },
                ].map((lang) => (
                  <li key={lang.code}>
                    <button className="w-full px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors flex items-center gap-3 text-left">
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
           {/* Mobile Language Selector - Custom Dropdown */}
           <div className="relative">
             <button 
               onClick={() => setMobileLangOpen(!mobileLangOpen)}
               className={cn(
                 "flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors",
                 isTransparent ? "text-white" : "text-slate-900"
               )}
             >
               <span className="text-xl">🇹🇷</span>
               <ChevronDown className={cn("w-3 h-3 transition-transform", mobileLangOpen && "rotate-180")} />
             </button>
             
             {/* Custom Dropdown */}
             {mobileLangOpen && (
               <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                 {[
                    { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
                    { code: 'EN', name: 'English', flag: '🇬🇧' },
                    { code: 'AR', name: 'العربية', flag: '🇦🇪' },
                    { code: 'ES', name: 'Español', flag: '🇪🇸' },
                    { code: 'PT', name: 'Português', flag: '🇵🇹' },
                 ].map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => {
                       console.log("Language changed to", lang.code);
                       setMobileLangOpen(false);
                     }}
                     className="w-full px-4 py-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors flex items-center gap-3 text-left border-b border-slate-50 last:border-0"
                   >
                     <span className="text-lg">{lang.flag}</span>
                     <span className="font-medium">{lang.name}</span>
                   </button>
                 ))}
               </div>
             )}
           </div>

           {/* Mobile Menu Toggle */}
           <button 
             className={cn("p-2 -mr-2", isTransparent ? "text-white" : "text-slate-900")}
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] overflow-y-auto animate-in slide-in-from-right-10 duration-300">
          {/* Mobile Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
            <Link href="/">
              <a className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                 <img src="/assets/logo.png" alt="Kurlar Logo" className="h-10 w-auto" />
              </a>
            </Link>
            
            <div className="flex items-center gap-4">
              {/* Mobile Language Selector inside Overlay */}
               <div className="relative">
                 <button 
                   onClick={() => setMobileOverlayLangOpen(!mobileOverlayLangOpen)}
                   className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-slate-900"
                 >
                   <span className="text-xl">🇹🇷</span>
                   <ChevronDown className={cn("w-3 h-3 transition-transform", mobileOverlayLangOpen && "rotate-180")} />
                 </button>
                 
                 {mobileOverlayLangOpen && (
                   <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                     {[
                        { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
                        { code: 'EN', name: 'English', flag: '🇬🇧' },
                        { code: 'AR', name: 'العربية', flag: '🇦🇪' },
                        { code: 'ES', name: 'Español', flag: '🇪🇸' },
                        { code: 'PT', name: 'Português', flag: '🇵🇹' },
                     ].map((lang) => (
                       <button
                         key={lang.code}
                         onClick={() => {
                           console.log("Language changed to", lang.code);
                           setMobileOverlayLangOpen(false);
                         }}
                         className="w-full px-4 py-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors flex items-center gap-3 text-left border-b border-slate-50 last:border-0"
                       >
                         <span className="text-lg">{lang.flag}</span>
                         <span className="font-medium">{lang.name}</span>
                       </button>
                     ))}
                   </div>
                 )}
               </div>

              <button 
                className="p-2 -mr-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>

          <div className="flex flex-col p-6 pb-20">
            {menuStructure.map((item) => (
              <div key={item.name} className="border-b border-slate-100 last:border-0">
                <div 
                  className="py-4 flex justify-between items-center cursor-pointer group"
                  onClick={() => {
                    if (item.children || item.type === "mega") {
                      setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name);
                    }
                  }}
                >
                  {item.type === "link" ? (
                    <Link href={item.href}>
                      <a 
                        className="text-lg font-bold text-slate-900 block w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ) : (
                    <>
                      <span className={cn(
                        "text-lg font-bold transition-colors",
                        expandedMobileItem === item.name ? "text-primary" : "text-slate-900"
                      )}>
                        {item.name}
                      </span>
                      <ChevronDown className={cn(
                        "w-5 h-5 text-slate-400 transition-transform duration-300",
                        expandedMobileItem === item.name ? "rotate-180 text-primary" : ""
                      )} />
                    </>
                  )}
                </div>
                
                {/* Mobile Dropdown Content */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  expandedMobileItem === item.name ? "max-h-[1000px] opacity-100 mb-4" : "max-h-0 opacity-0"
                )}>
                  {(item.type === "dropdown") && item.children && (
                    <ul className="pl-4 space-y-3 border-l-2 border-slate-100 ml-2">
                      {item.children.map(child => (
                        <li key={child.name}>
                          <Link href={child.href}>
                            <a 
                              onClick={() => setMobileMenuOpen(false)} 
                              className="text-slate-600 block hover:text-primary font-medium"
                            >
                              {child.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.type === "mega" && (
                     <div className="pl-4 space-y-6 border-l-2 border-slate-100 ml-2">
                       <div>
                          <div className="text-xs font-bold text-primary uppercase mb-3 tracking-wider">Dalgıç Pompalar</div>
                          <div className="space-y-3">
                            {[
                              { name: "Paslanmaz Çelik Dalgıç Pompalar (KP)", id: "kp" },
                              { name: "4″ Noryl Dalgıç Pompalar (KPN)", id: "kpn" },
                              { name: "Pik Döküm Dalgıç Pompalar (KPD)", id: "kpd" },
                              { name: "Paslanmaz Döküm Dalgıç Pompalar (KSX)", id: "ksx" }
                            ].map(sub => (
                              <Link key={sub.id} href={`/urunler/${sub.id}`}>
                                <a onClick={() => setMobileMenuOpen(false)} className="text-slate-600 block font-medium text-sm hover:text-primary">{sub.name}</a>
                              </Link>
                            ))}
                          </div>
                       </div>
                       <div>
                          <div className="text-xs font-bold text-primary uppercase mb-3 tracking-wider">Dalgıç Motorlar</div>
                          <div className="space-y-3">
                            {[
                              { name: "Hi-Temp Dalgıç Motorlar (KM)", id: "km" },
                              { name: "S-Type Dalgıç Motorlar (KMS)", id: "kms" },
                              { name: "4\" Yağlı Tip Dalgıç Motorlar (KM4)", id: "km4" }
                            ].map(sub => (
                              <Link key={sub.id} href={`/urunler/${sub.id}`}>
                                <a onClick={() => setMobileMenuOpen(false)} className="text-slate-600 block font-medium text-sm hover:text-primary">{sub.name}</a>
                              </Link>
                            ))}
                          </div>
                       </div>
                     </div>
                  )}
                </div>
              </div>
            ))}
            
            <div className="bg-slate-900 p-6 rounded-xl text-white mt-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-2">2025 Katalog</h4>
                <p className="text-slate-300 text-sm mb-4">En yeni teknoloji ürünlerimizi inceleyin.</p>
                <a href="/assets/docs/Kurlar-Product-Catalogue-2025.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  Kataloğu İndir <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <FileText className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
