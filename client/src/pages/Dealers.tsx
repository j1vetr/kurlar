import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { MapPin, Search, Phone, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Mock data for dealers
const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Konya", "Adana", "Gaziantep"];
const dealers = [
  { id: 1, name: "Kurlar Merkez Servis", city: "İzmir", district: "Çiğli", phone: "+90 232 000 00 00", type: "Merkez" },
  { id: 2, name: "Anadolu Pompa Sistemleri", city: "Ankara", district: "Ostim", phone: "+90 312 000 00 00", type: "Bayi" },
  { id: 3, name: "Marmara Teknik", city: "İstanbul", district: "İkitelli", phone: "+90 212 000 00 00", type: "Yetkili Servis" },
  { id: 4, name: "Güney Su Teknolojileri", city: "Antalya", district: "Kepez", phone: "+90 242 000 00 00", type: "Bayi" },
  { id: 5, name: "Bursa Dalgıç", city: "Bursa", district: "Nilüfer", phone: "+90 224 000 00 00", type: "Bayi & Servis" },
];

export default function Dealers() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDealers = dealers.filter(d => {
    const matchesCity = selectedCity ? d.city === selectedCity : true;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Bayi & Servis Noktaları</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Size en yakın çözüm ortağımızı bulun. Türkiye'nin 81 ilinde yaygın servis ağı.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 h-[600px]">
          {/* Map Area (Simulated) */}
          <div className="lg:w-2/3 bg-blue-50 rounded-xl border border-blue-100 relative overflow-hidden flex items-center justify-center group">
            {/* This would be an interactive SVG map in production */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
               <span className="text-9xl font-bold text-blue-200 select-none">TÜRKİYE</span>
            </div>
            
            {/* Simulated Map Points */}
            <div className="relative w-full h-full">
               {/* Random positions for visual effect */}
               <div className="absolute top-1/3 left-1/4 group-hover:scale-110 transition-transform cursor-pointer" onClick={() => setSelectedCity('İstanbul')}>
                  <MapPin className="w-8 h-8 text-red-500 drop-shadow-md" fill="currentColor" />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white px-1 rounded shadow-sm mt-1">İstanbul</span>
               </div>
               <div className="absolute top-1/2 left-1/6 group-hover:scale-110 transition-transform cursor-pointer" onClick={() => setSelectedCity('İzmir')}>
                  <MapPin className="w-8 h-8 text-primary drop-shadow-md" fill="currentColor" />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white px-1 rounded shadow-sm mt-1">İzmir</span>
               </div>
               <div className="absolute top-1/3 left-1/2 group-hover:scale-110 transition-transform cursor-pointer" onClick={() => setSelectedCity('Ankara')}>
                  <MapPin className="w-8 h-8 text-red-500 drop-shadow-md" fill="currentColor" />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 bg-white px-1 rounded shadow-sm mt-1">Ankara</span>
               </div>
            </div>

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg text-xs max-w-xs">
              <p className="font-bold text-primary mb-1">Harita Kullanımı</p>
              <p className="text-muted-foreground">İlgili şehre tıklayarak o bölgedeki bayileri listeleyebilirsiniz.</p>
            </div>
          </div>

          {/* Sidebar List */}
          <div className="lg:w-1/3 flex flex-col bg-white border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border bg-slate-50">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Şehir veya bayi ara..." 
                  className="pl-9 h-10 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button 
                  onClick={() => setSelectedCity(null)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors",
                    !selectedCity ? "bg-primary text-white" : "bg-white border border-border hover:bg-slate-50"
                  )}
                >
                  Tümü
                </button>
                {cities.map(city => (
                  <button 
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors",
                      selectedCity === city ? "bg-primary text-white" : "bg-white border border-border hover:bg-slate-50"
                    )}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {filteredDealers.length > 0 ? filteredDealers.map(dealer => (
                <div key={dealer.id} className="p-4 border border-slate-100 rounded-lg hover:border-primary/30 hover:bg-slate-50 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{dealer.name}</h4>
                      <span className="text-xs font-medium text-muted-foreground bg-slate-200/50 px-2 py-0.5 rounded">{dealer.type}</span>
                    </div>
                    <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    {dealer.district}, {dealer.city}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3 pt-3 border-t border-slate-100">
                    <Phone className="w-3 h-3" /> {dealer.phone}
                  </div>
                </div>
              )) : (
                <div className="text-center py-10 text-muted-foreground">
                  <p>Bu kriterlere uygun sonuç bulunamadı.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
