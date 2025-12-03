import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünler", href: "/urunler" },
    { name: "Bayi & Servis", href: "/bayi-servis" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with Water Animation Border */}
        <Link href="/">
          <a className="group relative">
            <div className="water-border-container">
              <div className="water-border-content">
                <img 
                  src="/assets/logo.png" 
                  alt="Kurlar Logo" 
                  className="h-8 w-auto object-contain" 
                />
              </div>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  location === link.href
                    ? "text-primary font-semibold after:w-full"
                    : isScrolled ? "text-foreground hover:text-primary" : "text-foreground/90 md:text-white hover:text-white/80 md:mix-blend-difference shadow-black/20 drop-shadow-sm"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={cn("w-6 h-6", !isScrolled && !mobileMenuOpen && "text-white")} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-border shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/50",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
