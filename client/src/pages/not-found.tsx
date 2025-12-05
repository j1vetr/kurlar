import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";
import { SEO } from "@/components/shared/SEO";

export default function NotFound() {
  return (
    <Layout>
      <SEO 
        title="Sayfa Bulunamadı | 404" 
        description="Aradığınız sayfa bulunamadı." 
        canonical="https://kurlar.com.tr/404"
      />
      
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="relative inline-block mb-8">
            <h1 className="text-[150px] md:text-[200px] font-heading font-bold text-slate-900 leading-none select-none opacity-5">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-blue-50 p-6 rounded-full animate-bounce shadow-lg">
                <FileQuestion className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Sayfa Bulunamadı
          </h2>
          <h3 className="text-xl text-slate-500 font-medium mb-6">
            Page Not Found
          </h3>
          
          <p className="text-slate-600 max-w-md mx-auto mb-10 text-lg">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
            Lütfen adresi kontrol edin veya ana sayfaya dönün.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 uppercase tracking-wider gap-2 min-w-[200px]">
                <Home className="w-5 h-5" />
                Ana Sayfa
              </Button>
            </Link>
            
            <Link href="/iletisim">
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-bold px-8 h-14 uppercase tracking-wider gap-2 min-w-[200px]">
                İletişim
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
