import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { MapPin, Search, Phone, Navigation, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Full Dealer Data from User
const dealers = [
  { id: 1, city: "İSTANBUL", district: "BÜYÜKÇEKMECE", name: "SER POMPA", contact: "Sertan Sadi", address: "ÇAKMAKLI MAH. HADIMKÖY YOLU CAD. NO:53/3", phone: "0532 283 06 19" },
  { id: 2, city: "ÇANAKKALE", district: "BİGA", name: "General Bobinaj", contact: "Bayram Alkan", address: "İstiklal Mahallesi, 2. Sanayi Sitesi, 11. Blok Daire: 27", phone: "0536 575 58 53" },
  { id: 3, city: "BALIKESİR", district: "GÖNEN", name: "Adil Bobinaj", contact: "Adil Baykal", address: "Kurtuluş Mahallesi, Şehit Rahmibey Caddesi No:21/A", phone: "0532 788 57 75" },
  { id: 4, city: "MANİSA", district: "TURGUTLU", name: "BOR-SAN", contact: "ENGİN DEMİRDAL", address: "KÜÇÜK SANAYİ SİTESİ 107 SOK. NO:26", phone: "0533 432 55 47" },
  { id: 5, city: "İZMİR", district: "TİRE", name: "HEYBET TİCARET", contact: "NAİL ÖZTUNÇ", address: "İPEKÇİLER MAH. SANAYİ SİTESİ EREĞLİ CAD. NO:16", phone: "0532 331 54 90" },
  { id: 6, city: "İZMİR", district: "ÖDEMİŞ", name: "ÇAĞLAYAN TARIM", contact: "HALUK YURDAKUL", address: "UMURBEY MAH. ARİF SOK. NO:4", phone: "0533 345 29 30" },
  { id: 7, city: "İZMİR", district: "ÖDEMİŞ", name: "EKER POMPA", contact: "BÜLENT EKER", address: "CUMHURİYET MAH. KARŞIYAKA CAD. NO:9", phone: "0533 460 46 18" },
  { id: 8, city: "İZMİR", district: "KONAK", name: "3AS POMPA", contact: "RAGIP VATANSEVER", address: "HALKAPINAR MAH. 1490 SOK. NO:3", phone: "0530 393 28 81" },
  { id: 9, city: "İZMİR", district: "KONAK", name: "EN Pompa", contact: "Engin Yağdereli", address: "Mersinli Mahallesi, 2816 Sokak No:86/A", phone: "0533 578 65 73" },
  { id: 10, city: "İZMİR", district: "TORBALI", name: "Çınarlar Boru", contact: "Behçet Çınar", address: "Pamukyazı Mahallesi, 8. Cadde No:38", phone: "0532 311 25 58" },
  { id: 11, city: "AYDIN", district: "NAZİLLİ", name: "DİKMEN BOBİNAJ", contact: "Kadir Dikmen", address: "YENİ SANAYİ SİTESİ 511. SOK. NO:7", phone: "0532 427 47 71" },
  { id: 12, city: "KÜTAHYA", district: "MERKEZ", name: "Ak Bobinaj", contact: "Ahmet Keçeci", address: "İstiklal Mahallesi, Hal Sokak No:4/A", phone: "0533 020 56 81" },
  { id: 13, city: "ESKİŞEHİR", district: "TEPEBAŞI", name: "Kocaoğlu Sondaj", contact: "Cengiz Kocaoğlu", address: "Yeşildere Mahallesi, Kökdere Sokak No:93", phone: "0532 205 51 17" },
  { id: 14, city: "AFYONKARAHİSAR", district: "MERKEZ", name: "ŞAHİN ELEKTRİK", contact: "İdris Şahin", address: "Veysel Karani Mahallesi, 1144. Sokak No:33/A", phone: "0505 358 15 07" },
  { id: 15, city: "AFYONKARAHİSAR", district: "SANDIKLI", name: "DEMİR BOBİNAJ", contact: "Ahmet Demir", address: "Tapduk Emre Mahallesi, 9. Cadde No:9, Yeni Sanayi Sitesi", phone: "0543 955 57 08" },
  { id: 16, city: "KONYA", district: "KARATAY", name: "ALFA INTERNATIONAL", contact: "ALİ DEMİRÖRS", address: "FEVZİ ÇAKMAK MAH. 10659. SOK. NO:20/A", phone: "0555 494 73 94" },
  { id: 17, city: "KONYA", district: "KARATAY", name: "SAYSU", contact: "MURAT TAMDEĞER", address: "FEVZİ ÇAKMAK MAH. 10665. SOK. NO:9", phone: "0555 989 07 64" },
  { id: 18, city: "KONYA", district: "AKŞEHİR", name: "TEKNİK BOBİNAJ", contact: "HÜSEYİN BELEK", address: "MEYDAN MAH. ÇOCUK PARKI SOK. NO:10", phone: "0536 655 53 07" },
  { id: 19, city: "ANTALYA", district: "MERKEZ", name: "CENGİZ GLOBAL", contact: "Nevzat Cengiz", address: "SEDİR MAH. AKIN CAD. NO:28/A", phone: "0532 476 07 43" },
  { id: 20, city: "ANTALYA", district: "ELMALI", name: "USTA BOBİNAJ", contact: "Salih Kocabıyık", address: "SANAYİ SİTESİ 3.BLOK NO:26", phone: "0539 276 54 31" },
  { id: 21, city: "ANTALYA", district: "GAZİPAŞA", name: "Özsu Sondaj", contact: "Ayhan Saklanmaz", address: "Yeni Mahallesi, İnönü Caddesi, Belediye Arkası 3. Çarşı No:2/C", phone: "0534 959 49 44" },
  { id: 22, city: "KARAMAN", district: "MERKEZ", name: "ŞAHİN ELEKTRİK", contact: "ŞAHİN DURAN", address: "HAMİDİYE MAH. YENİ SANAYİ SİTESİ NO:51", phone: "0542 410 35 12" },
  { id: 23, city: "ANKARA", district: "YENİMAHALLE", name: "Murat Su Pompaları", contact: "Murat İkizoğlu", address: "İvedik OSB 1464. Cadde No: 28", phone: "0541 275 24 67" },
  { id: 24, city: "NEVŞEHİR", district: "MERKEZ", name: "Çözüm Mutlusu", contact: "Emin Demirtaş", address: "Yeni Sanayi Sitesi, 2. Blok No:16", phone: "0535 718 92 30" },
  { id: 25, city: "BARTIN", district: "MERKEZ", name: "Güldal Ticaret", contact: "Okay Güldal", address: "Okulak Mahallesi, Topçu Konağı Caddesi No:70/1", phone: "0533 654 37 25" },
  { id: 26, city: "KAYSERİ", district: "MELİKGAZİ", name: "IŞIK ELEKTRİK", contact: "ZİYA IŞIK", address: "ANBAR MAH. AĞAÇ İŞLERİ SANAYİ 31. CAD. NO:66", phone: "0533 551 49 50" },
  { id: 27, city: "HATAY", district: "ANTAKYA", name: "DAPLAN ELEKTRİK", contact: "Mehmet Daplan", address: "SANAYİ SİTESİ 1.CAD. NO:58", phone: "0532 372 94 11" },
  { id: 28, city: "KİLİS", district: "MERKEZ", name: "DALPOMP SEVERLER", contact: "HÜSEYİN SEVER", address: "YAVUZ SULTAN SELİM MAH. MERCİDABIK CAD. NO:178", phone: "0532 791 64 28" },
  { id: 29, city: "GAZİANTEP", district: "ŞEHİTKAMİL", name: "BAR DALGIÇ", contact: "Barış Adem Alnıaçık", address: "KÜSGET SANAYİ SİTESİ 60003. CAD. NO:13", phone: "0535 670 58 19" },
  { id: 30, city: "ŞANLIURFA", district: "HALİLİYE", name: "BERAT ELEKTRİK", contact: "ABDÜLKERİM ÖZOĞLU", address: "PAŞABAĞI MAH. ŞUTİM TOPTANCILAR SİTESİ NO:65/A", phone: "0541 553 93 95" },
  { id: 31, city: "MARDİN", district: "KIZILTEPE", name: "YALÇIN TARIM", contact: "METİN YALÇIN", address: "FIRAT MAH. İPEKYOLU CAD. NO:145/A", phone: "0533 202 34 44" },
  { id: 32, city: "MARDİN", district: "KIZILTEPE", name: "SAY TARIMSAL", contact: "SADIK YALÇIN", address: "İpekyolu Caddesi No:191 E", phone: "0542 558 36 19" }
];

// Extract unique cities for filter
const cities = Array.from(new Set(dealers.map(d => d.city))).sort();

export default function Dealers() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDealers = dealers.filter(d => {
    const matchesCity = selectedCity ? d.city === selectedCity : true;
    const matchesSearch = 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      d.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Yurt İçi Bayi & Servis Ağı</h1>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Türkiye'nin dört bir yanındaki yetkili satış ve servis noktalarımızla her zaman yanınızdayız.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 min-h-[800px]">
          {/* Interactive Map Section */}
          <div className="lg:w-7/12 bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col shadow-inner">
            {/* Map Header */}
            <div className="bg-white p-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <MapPin className="text-primary" /> Türkiye Bayi Haritası
              </h3>
              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {filteredDealers.length} Sonuç Listelendi
              </span>
            </div>

            {/* SVG Map Container */}
            <div className="flex-1 relative bg-[#eef2f6] flex items-center justify-center p-4 group">
               {/* 
                  In a real scenario, we would use a robust SVG map library like react-simple-maps or leaflets.
                  Here, we'll create a stylized representation using CSS positioning for key cities to simulate the experience.
               */}
               <div className="relative w-full h-full max-w-[600px] aspect-[4/3]">
                  {/* Simplified Map Silhouette (Using CSS/SVG path would be ideal, using a placeholder image for mockup) */}
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Turkey_location_map.svg/2526px-Turkey_location_map.svg.png" 
                    alt="Türkiye Haritası" 
                    className="w-full h-full object-contain opacity-30 mix-blend-multiply grayscale"
                  />
                  
                  {/* Interactive Dots for Major Cities */}
                  {/* Istanbul */}
                  <div 
                    className={cn("absolute top-[22%] left-[22%] w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer transition-all hover:scale-150", selectedCity === 'İSTANBUL' ? "bg-primary scale-125" : "bg-red-500")}
                    onClick={() => setSelectedCity('İSTANBUL')}
                    title="İstanbul"
                  />
                  {/* Izmir */}
                  <div 
                    className={cn("absolute top-[45%] left-[12%] w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer transition-all hover:scale-150", selectedCity === 'İZMİR' ? "bg-primary scale-125" : "bg-red-500")}
                    onClick={() => setSelectedCity('İZMİR')}
                    title="İzmir"
                  />
                  {/* Ankara */}
                  <div 
                    className={cn("absolute top-[30%] left-[40%] w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer transition-all hover:scale-150", selectedCity === 'ANKARA' ? "bg-primary scale-125" : "bg-red-500")}
                    onClick={() => setSelectedCity('ANKARA')}
                    title="Ankara"
                  />
                  {/* Antalya */}
                  <div 
                    className={cn("absolute top-[65%] left-[30%] w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer transition-all hover:scale-150", selectedCity === 'ANTALYA' ? "bg-primary scale-125" : "bg-red-500")}
                    onClick={() => setSelectedCity('ANTALYA')}
                    title="Antalya"
                  />
                   {/* Gaziantep */}
                   <div 
                    className={cn("absolute top-[55%] left-[65%] w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer transition-all hover:scale-150", selectedCity === 'GAZİANTEP' ? "bg-primary scale-125" : "bg-red-500")}
                    onClick={() => setSelectedCity('GAZİANTEP')}
                    title="Gaziantep"
                  />
               </div>
               
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg text-xs max-w-xs border border-slate-100">
                 <p className="font-bold text-primary mb-1">Nasıl Kullanılır?</p>
                 <p className="text-muted-foreground">Harita üzerindeki noktalara tıklayarak veya sağdaki listeden şehir seçerek bayilerimize ulaşabilirsiniz.</p>
               </div>
            </div>
          </div>

          {/* Dealer List Sidebar */}
          <div className="lg:w-5/12 flex flex-col bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden h-[800px]">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Şehir, ilçe veya bayi adı ara..." 
                  className="pl-10 h-12 bg-white border-slate-200 focus:border-primary focus:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                <button 
                  onClick={() => setSelectedCity(null)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-bold rounded-full transition-all border",
                    !selectedCity 
                      ? "bg-primary text-white border-primary shadow-sm" 
                      : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                  )}
                >
                  TÜMÜ
                </button>
                {cities.map(city => (
                  <button 
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-bold rounded-full transition-all border",
                      selectedCity === city 
                        ? "bg-primary text-white border-primary shadow-sm" 
                        : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                    )}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/30">
              {filteredDealers.length > 0 ? filteredDealers.map(dealer => (
                <div 
                  key={dealer.id} 
                  className="bg-white p-5 border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-slate-800 group-hover:text-primary transition-colors">
                        {dealer.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                         <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                           {dealer.city}
                         </span>
                         <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                           {dealer.district}
                         </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                       <Navigation className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-3 border-t border-slate-50">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{dealer.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <User className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-medium">{dealer.contact}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>{dealer.phone}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 flex gap-2">
                    <Button size="sm" className="w-full bg-primary hover:bg-blue-900 text-white font-bold">
                       Hemen Ara
                    </Button>
                    <Button size="sm" variant="outline" className="w-full border-slate-200 hover:bg-slate-50 text-slate-700 font-bold">
                       Yol Tarifi
                    </Button>
                  </div>
                </div>
              )) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                  <MapPin className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-medium">Aradığınız kriterlere uygun bayi bulunamadı.</p>
                  <Button variant="link" onClick={() => {setSelectedCity(null); setSearchQuery('');}}>Filtreleri Temizle</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
