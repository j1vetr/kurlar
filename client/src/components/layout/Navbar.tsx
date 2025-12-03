import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, FileText, Download, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
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
            <div className="relative flex items-center justify-center">
               <img 
                  src="/assets/logo.png" 
                  alt="Kurlar Logo" 
                  className="h-10 md:h-12 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105" 
                />
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 h-full">
          <Link href="/">
            <a className={cn("px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-colors", location === "/" ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50")}>
              Ana Sayfa
            </a>
          </Link>
          
          <Link href="/hakkimizda">
            <a className={cn("px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-colors", location === "/hakkimizda" ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50")}>
              Hakkımızda
            </a>
          </Link>

          {/* Mega Menu Trigger */}
          <div 
            className="group h-full"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link href="/urunler">
              <a className={cn(
                "px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1 cursor-pointer", 
                (location.startsWith("/urunler") || productsOpen) ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50"
              )}>
                Ürünler
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", productsOpen && "rotate-180")} />
              </a>
            </Link>

            {/* Mega Menu Overlay & Content */}
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl"
                >
                  {/* Top subtle border line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-blue-400 to-primary"></div>
                  
                  <div className="container mx-auto py-12">
                    <div className="grid grid-cols-12 gap-8">
                      
                      {/* Column 1: Pumps */}
                      <div className="col-span-3">
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                          </div>
                          <h3 className="font-heading font-bold text-lg text-foreground">Dalgıç Pompalar</h3>
                        </div>
                        <ul className="space-y-2">
                          {[
                            { name: "Paslanmaz Çelik", desc: "Korozyona dayanıklı seri" },
                            { name: "Noryl Serisi", desc: "Hafif ve yüksek verimli" },
                            { name: "Pik Döküm", desc: "Ağır hizmet tipi" },
                            { name: "Paslanmaz Döküm", desc: "Endüstriyel çözümler" }
                          ].map((item) => (
                            <li key={item.name}>
                              <Link href={`/urunler?search=${item.name}`}>
                                <a className="group/item flex flex-col p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                  <span className="text-sm font-bold text-slate-700 group-hover/item:text-primary transition-colors flex items-center">
                                    {item.name}
                                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                  </span>
                                  <span className="text-xs text-slate-400 font-medium mt-0.5">{item.desc}</span>
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Motors */}
                      <div className="col-span-3">
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <h3 className="font-heading font-bold text-lg text-foreground">Dalgıç Motorlar</h3>
                        </div>
                        <ul className="space-y-2">
                          {[
                            { name: "Yağlı Tip Motorlar", desc: "Yeniden sarılabilir" },
                            { name: "HI-TEMP Motorlar", desc: "Yüksek sıcaklık dayanımı" },
                            { name: "S-Type Motorlar", desc: "İnce gövde tasarımı" }
                          ].map((item) => (
                            <li key={item.name}>
                              <Link href={`/urunler?search=${item.name}`}>
                                <a className="group/item flex flex-col p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                  <span className="text-sm font-bold text-slate-700 group-hover/item:text-primary transition-colors flex items-center">
                                    {item.name}
                                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                  </span>
                                  <span className="text-xs text-slate-400 font-medium mt-0.5">{item.desc}</span>
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Featured Visual */}
                      <div className="col-span-3 px-4 border-x border-slate-50">
                         <div className="h-full flex flex-col justify-between bg-slate-50 rounded-xl overflow-hidden relative group/card cursor-pointer">
                           <div className="p-6 z-10">
                             <span className="text-xs font-bold text-primary uppercase tracking-wider bg-white px-2 py-1 rounded mb-3 inline-block shadow-sm">Yeni</span>
                             <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">HI-TEMP Serisi</h4>
                             <p className="text-sm text-slate-500 mb-4">Jeotermal sular için özel olarak geliştirildi.</p>
                             <span className="text-sm font-bold text-primary underline decoration-2 underline-offset-4 group-hover/card:text-blue-700">İncele</span>
                           </div>
                           <img src="/assets/km2.png" className="absolute bottom-0 right-0 w-40 h-auto object-contain translate-x-4 translate-y-4 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-transform duration-500" />
                         </div>
                      </div>

                      {/* Column 4: Catalog & Contact */}
                      <div className="col-span-3">
                        <div className="h-full flex flex-col gap-4">
                          {/* Catalog Card */}
                          <div className="flex-1 bg-primary rounded-xl p-6 text-white relative overflow-hidden group/catalog cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                             
                             <div className="relative z-10">
                               <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover/catalog:bg-white/20 transition-colors">
                                 <Download className="w-5 h-5 text-white" />
                               </div>
                               <h4 className="font-bold text-xl mb-1">2025 Katalog</h4>
                               <p className="text-blue-100 text-sm mb-4">Tüm teknik veriler ve ürün detayları.</p>
                               <span className="text-sm font-bold flex items-center">
                                 İndir <ArrowRight className="ml-2 w-4 h-4 group-hover/catalog:translate-x-1 transition-transform" />
                               </span>
                             </div>
                          </div>

                          {/* Quick Support */}
                          <div className="bg-slate-50 rounded-xl p-5 flex items-center gap-4 border border-slate-100 hover:border-primary/20 transition-colors group/support cursor-pointer">
                             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary group-hover/support:scale-110 transition-transform">
                               <Phone className="w-4 h-4" />
                             </div>
                             <div>
                               <p className="text-xs text-slate-500 font-semibold uppercase">Müşteri Hizmetleri</p>
                               <p className="text-sm font-bold text-slate-900 group-hover/support:text-primary transition-colors">+90 232 000 00 00</p>
                             </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/bayi-servis">
            <a className={cn("px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-colors", location === "/bayi-servis" ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50")}>
              Bayi & Servis
            </a>
          </Link>
          
          <Link href="/iletisim">
            <a className={cn("px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-colors", location === "/iletisim" ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-slate-50")}>
              İletişim
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-2">
              <Link href="/">
                <a onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 py-3 border-b border-slate-50">Ana Sayfa</a>
              </Link>
              
              <div className="py-3 border-b border-slate-50">
                <div className="text-base font-bold text-primary mb-3">Ürünler</div>
                <div className="pl-4 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Dalgıç Pompalar</div>
                    <ul className="space-y-2">
                       {["Paslanmaz Çelik", "Noryl", "Pik Döküm", "Paslanmaz Döküm"].map(i => (
                         <li key={i}>
                           <Link href={`/urunler?search=${i}`}>
                             <a onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-600 block font-medium">{i}</a>
                           </Link>
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Dalgıç Motorlar</div>
                    <ul className="space-y-2">
                       {["Yağlı Tip", "HI-TEMP", "S-Type"].map(i => (
                         <li key={i}>
                           <Link href={`/urunler?search=${i}`}>
                             <a onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-600 block font-medium">{i}</a>
                           </Link>
                         </li>
                       ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Link href="/hakkimizda">
                <a onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 py-3 border-b border-slate-50">Hakkımızda</a>
              </Link>
              <Link href="/bayi-servis">
                <a onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 py-3 border-b border-slate-50">Bayi & Servis</a>
              </Link>
              <Link href="/iletisim">
                <a onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-900 py-3">İletişim</a>
              </Link>
              
              <div className="bg-slate-50 p-4 rounded-lg mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-bold">KATALOG</p>
                  <p className="text-sm font-bold text-primary">2025 Ürün Kataloğu</p>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                  <Download className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
