import { Layout } from "@/components/layout/Layout";
import { useState, useEffect, useMemo } from "react";
import { MapPin, Search, Phone, Navigation, User, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip } from "react-tooltip";
import { geoMercator, geoPath } from "d3-geo";

// Turkey GeoJSON URL (Local)
const TURKEY_GEO_JSON = "/assets/turkey-cities.json";

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
  const [geographies, setGeographies] = useState<any[]>([]);
  const [scale, setScale] = useState(2400);
  const [translate, setTranslate] = useState<{x: number, y: number}>({ x: 0, y: 0 });

  // Fetch Map Data
  useEffect(() => {
    fetch(TURKEY_GEO_JSON)
      .then(response => response.json())
      .then(data => {
        if (data && data.features) {
          setGeographies(data.features);
        }
      })
      .catch(err => console.error("Failed to load map:", err));
  }, []);

  const filteredDealers = dealers.filter(d => {
    const matchesCity = selectedCity ? d.city === selectedCity : true;
    const searchLower = searchQuery.toLocaleLowerCase('tr');
    const matchesSearch = 
      d.name.toLocaleLowerCase('tr').includes(searchLower) || 
      d.city.toLocaleLowerCase('tr').includes(searchLower) ||
      d.district.toLocaleLowerCase('tr').includes(searchLower);
    return matchesCity && matchesSearch;
  });

  // Helper to check if a city has dealers (Fuzzy match for map)
  const cityHasDealers = (cityName: string) => {
    if (!cityName) return false;
    const normalize = (str: string) => str.replace(/İ/g, 'I').replace(/ı/g, 'i').toUpperCase();
    const normalizedCityName = normalize(cityName);
    
    // Special case mappings
    if (normalizedCityName === "AFYON") return dealers.some(d => d.city === "AFYONKARAHİSAR");
    
    return dealers.some(d => normalize(d.city) === normalizedCityName);
  };

  const getCityColor = (cityName: string) => {
    if (!cityName) return "#e2e8f0";
    const hasDealers = cityHasDealers(cityName);
    const normalize = (str: string) => str.replace(/İ/g, 'I').replace(/ı/g, 'i').toUpperCase();
    
    let isSelected = false;
    if (selectedCity) {
      const normalizedSelected = normalize(selectedCity);
      const normalizedMapCity = normalize(cityName);
      
      if (normalizedSelected === normalizedMapCity) isSelected = true;
      if (normalizedSelected === "AFYONKARAHİSAR" && normalizedMapCity === "AFYON") isSelected = true;
    }

    if (isSelected) return "#243474"; // Brand Primary
    if (hasDealers) return "#93c5fd"; // Blue 300
    return "#e2e8f0"; // Slate 200
  };

  // D3 Map Projection
  const width = 800;
  const height = 450;
  
  const projection = geoMercator()
    .center([35, 39]) // Turkey center
    .scale(scale)
    .translate([width / 2 + translate.x, height / 2 + translate.y]);

  const pathGenerator = geoPath().projection(projection);

  const handleZoomIn = () => setScale(s => s * 1.2);
  const handleZoomOut = () => setScale(s => Math.max(1000, s / 1.2));
  const handleReset = () => { setScale(3200); setTranslate({x:0, y:0}); setSelectedCity(null); };

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
          <div className="lg:w-7/12 bg-white rounded-xl border border-slate-200 relative overflow-hidden flex flex-col shadow-lg ring-1 ring-slate-100">
            {/* Map Header */}
            <div className="bg-white p-4 border-b border-slate-200 flex justify-between items-center z-10 bg-gradient-to-r from-white to-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                <MapPin className="text-primary" /> Türkiye Bayi Haritası
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <span className="w-3 h-3 rounded-full bg-primary/60 shadow-sm"></span> Bayi Var
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></span> Bayi Yok
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-20 right-4 flex flex-col gap-2 z-20">
              <Button variant="secondary" size="icon" onClick={handleZoomIn} className="h-9 w-9 rounded-full shadow-lg bg-white hover:bg-slate-50 border border-slate-100 text-slate-700">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" onClick={handleZoomOut} className="h-9 w-9 rounded-full shadow-lg bg-white hover:bg-slate-50 border border-slate-100 text-slate-700">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" onClick={handleReset} className="h-9 w-9 rounded-full shadow-lg bg-white hover:bg-slate-50 border border-slate-100 text-slate-700">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative bg-slate-50/50 flex items-center justify-center overflow-hidden">
              {geographies.length > 0 ? (
                <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="max-w-full max-h-full cursor-grab active:cursor-grabbing drop-shadow-xl">
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <g>
                    {geographies.map((geo, i) => {
                      const cityName = geo.properties.name;
                      const hasDealers = cityHasDealers(cityName);
                      const normalize = (str: string) => str.replace(/İ/g, 'I').replace(/ı/g, 'i').toUpperCase();
                      
                      // Logic for highlighting selected city
                      let isSelected = false;
                      if (selectedCity && cityName) {
                        const normalizedSelected = normalize(selectedCity);
                        const normalizedMapCity = normalize(cityName);
                        if (normalizedSelected === normalizedMapCity) isSelected = true;
                        if (normalizedSelected === "AFYONKARAHİSAR" && normalizedMapCity === "AFYON") isSelected = true;
                      }
                      
                      return (
                        <path
                          key={i}
                          d={pathGenerator(geo) || undefined}
                          fill={isSelected ? "#243474" : (hasDealers ? "#60a5fa" : "#e2e8f0")}
                          stroke="#ffffff"
                          strokeWidth={isSelected ? 2 : 1}
                          className={cn(
                            "transition-all duration-300 outline-none",
                            hasDealers ? "hover:fill-primary cursor-pointer hover:filter hover:drop-shadow-lg" : "hover:fill-slate-300"
                          )}
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content={cityName}
                          onClick={() => {
                            if (!cityName) return;
                            
                            const normalize = (str: string) => str.replace(/İ/g, 'I').replace(/ı/g, 'i').toUpperCase();
                            const normalizedMapCity = normalize(cityName);
                            
                            // Try to match with dealers list
                            const matchedCity = cities.find(c => normalize(c) === normalizedMapCity);
                            
                            if (matchedCity) {
                              setSelectedCity(matchedCity);
                            } else if (normalizedMapCity === "AFYON") {
                              setSelectedCity("AFYONKARAHİSAR");
                            } else if (hasDealers) {
                               // Fuzzy match fallback
                               const fuzzyMatch = dealers.find(d => d.city.includes(normalizedMapCity) || normalizedMapCity.includes(d.city));
                               if (fuzzyMatch) setSelectedCity(fuzzyMatch.city);
                            }
                          }}
                        />
                      );
                    })}
                  </g>
                </svg>
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  <span className="loading loading-spinner"></span> Harita Yükleniyor...
                </div>
              )}
              <Tooltip id="map-tooltip" className="z-50 text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-md shadow-xl" />
            </div>
          </div>

          {/* Dealer List Sidebar */}
          <div className="lg:w-5/12 flex flex-col bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden h-[800px]">
            <div className="p-6 border-b border-slate-100 bg-white z-10 shadow-sm">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Şehir, ilçe veya bayi adı ara..." 
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hızlı Şehir Filtresi</span>
              </div>
              
              {/* Horizontal Scrolling City Filter */}
              <div className="relative -mx-6 px-6">
                <div className="flex overflow-x-auto gap-2 pb-4 pt-1 scrollbar-hide mask-linear-fade">
                  <button 
                    onClick={() => setSelectedCity(null)}
                    className={cn(
                      "px-4 py-2 text-sm font-bold rounded-lg transition-all border whitespace-nowrap flex-shrink-0",
                      !selectedCity 
                        ? "bg-slate-900 text-white border-slate-900 shadow-md transform scale-105" 
                        : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary hover:bg-slate-50"
                    )}
                  >
                    TÜM İLLER
                  </button>
                  {cities.map(city => (
                    <button 
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={cn(
                        "px-4 py-2 text-sm font-bold rounded-lg transition-all border whitespace-nowrap flex-shrink-0",
                        selectedCity === city 
                          ? "bg-primary text-white border-primary shadow-md transform scale-105" 
                          : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary hover:bg-slate-50"
                      )}
                    >
                      {city}
                    </button>
                  ))}
                </div>
                {/* Fade gradients for scroll indication */}
                <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                <div className="absolute left-0 top-0 bottom-4 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/30">
              <div className="flex justify-between items-center px-2 mb-2">
                 <span className="text-xs font-bold text-slate-500">{filteredDealers.length} Sonuç</span>
                 {selectedCity && (
                   <button onClick={() => setSelectedCity(null)} className="text-xs text-primary hover:underline">Filtreyi Temizle</button>
                 )}
              </div>

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
                    <Button 
                      size="sm" 
                      className="w-full bg-primary hover:bg-blue-900 text-white font-bold"
                      asChild
                    >
                      <a href={`tel:${dealer.phone.replace(/\s+/g, '')}`}>
                        Hemen Ara
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-slate-200 hover:bg-slate-50 text-slate-700 font-bold"
                      asChild
                    >
                       <a 
                         href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${dealer.name} ${dealer.address} ${dealer.district} ${dealer.city}`)}`}
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         Yol Tarifi
                       </a>
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
