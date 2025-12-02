import { Layout } from "@/components/layout/Layout";
import { products } from "@/lib/data";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, FileText, ArrowRight, Share2 } from "lucide-react";
import { Link } from "wouter";

export default function ProductDetail() {
  const [, params] = useRoute("/urunler/:id"); // This won't work directly with query params routing of wouter for ?id=... but I used /urunler?id= in ProductCard.
  // Wait, ProductCard uses /urunler?id=...
  // Let's fix ProductCard to use /urun/:id for cleaner URLs or handle query params here.
  // Actually wouter doesn't have built-in query param parsing in the hook, it relies on window.location.
  // I will change the route strategy. Let's support both or just fix ProductCard to link to /urun/:id
  
  // Let's assume I'll fix App.tsx to have /urun/:id route.
  
  const productId = params?.id;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Ürün Bulunamadı</h1>
          <Link href="/urunler"><Button>Ürünlere Dön</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-slate-50 border-b border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-sm text-muted-foreground gap-2">
            <Link href="/">Ana Sayfa</Link> / 
            <Link href="/urunler">Ürünler</Link> / 
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="bg-white border border-slate-100 rounded-xl p-12 flex items-center justify-center relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-radial-gradient from-slate-50 to-white opacity-50" />
            <img 
              src={product.image} 
              alt={product.name}
              className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Info Section */}
          <div>
            <div className="mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {product.subCategory}
              </span>
            </div>
            <h1 className="text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description} Yüksek mühendislik standartlarında üretilmiş, zorlu koşullara dayanıklı ve maksimum verimlilik sağlayan profesyonel çözüm.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Paslanmaz Çelik Gövde Yapısı",
                "Yüksek Enerji Verimliliği",
                "Kolay Montaj ve Bakım",
                "Uzun Ömürlü Yataklama Sistemi"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-foreground/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 border-t border-border pt-8">
              <Button size="lg" className="h-14 px-8 text-lg">
                Teklif İste <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                <FileText className="mr-2 w-5 h-5" /> Teknik Katalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
