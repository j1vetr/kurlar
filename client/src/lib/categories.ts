/**
 * TR kategori mimarisi — tek source of truth.
 *
 * Ana kategoriler: /urunler/dalgic-pompalar, /urunler/dalgic-motorlar
 * Alt kategoriler gerçek ürün ailelerinden türetilir (uydurma kategori yok).
 * Tüm teknik değerler data.ts'teki gerçek ürün verisinden alınmıştır.
 */

export interface CategoryFaq {
  question: string;
  answer: string;
}

export interface SubCategoryDef {
  /** URL parçası: /urunler/<categorySlug>/<slug> */
  slug: string;
  /** data.ts ürün id'si (kp, kpn, ...) */
  productId: string;
  /** H1 ve görünür ad */
  name: string;
  /** SEO title (" | Kurlar" otomatik eklenir) */
  title: string;
  /** Meta description */
  description: string;
  /** Sayfa girişi (görünür) */
  intro: string;
  /** Gerçek veriye dayalı kısa teknik vurgular */
  highlights: string[];
}

export interface CategorySection {
  heading: string;
  paragraphs: string[];
}

export interface CategoryDef {
  /** URL parçası: /urunler/<slug> */
  slug: string;
  /** data.ts kategori anahtarı */
  categoryKey: "pump" | "motor";
  /** H1 */
  name: string;
  /** SEO title (" | Kurlar" otomatik eklenir) */
  title: string;
  /** Meta description */
  description: string;
  /** Sayfa girişi */
  intro: string;
  /** 300-700 kelimelik teknik/alıcı odaklı içerik */
  sections: CategorySection[];
  faqs: CategoryFaq[];
  subCategories: SubCategoryDef[];
}

export const productCategories: CategoryDef[] = [
  {
    slug: "dalgic-pompalar",
    categoryKey: "pump",
    name: "Dalgıç Pompalar",
    title: "Dalgıç Pompa Modelleri & Üreticisi",
    description:
      "Kurlar dalgıç pompa serileri: paslanmaz çelik (KP), Noryl (KPN), pik döküm (KPD) ve paslanmaz döküm (KSX). 4\"–10\" kuyu çapları, 290 m³/saat debi ve 700 m basma yüksekliğine kadar üretici çözümleri.",
    intro:
      "Kurlar, 1975'ten bu yana dalgıç pompa üreten bir Türk imalatçısıdır. İzmir'deki tesislerimizde üretilen paslanmaz çelik, Noryl ve döküm gövdeli dalgıç pompa serileri; tarımsal sulama, içme suyu temini ve endüstriyel su uygulamaları için 4\" ile 10\" arası kuyu çaplarına uygun olarak tasarlanır ve 40'tan fazla ülkeye ihraç edilir.",
    sections: [
      {
        heading: "Malzeme Seçenekleri",
        paragraphs: [
          "Dalgıç pompada malzeme seçimi, kuyudaki su kalitesine ve beklenen servis ömrüne göre yapılır. KP serisi paslanmaz çelik dalgıç pompalar korozyona dayanıklı yapısıyla uzun ömürlü ve güvenilir performans sunar. KSX serisinde difüzörler, fanlar, emiş ve çıkış haznesi ile süzgeç tamamen AISI 304 paslanmaz döküm olarak imal edilir; talep üzerine komple AISI 316L malzemeden üretim yapılabilir.",
          "KPD serisi pik döküm dalgıç pompalarda difüzörler, fanlar, emiş ve çıkış haznesi tamamen pik dökümden üretilir; talep üzerine pompalar komple bronz malzemeden imal edilebilir. KPN serisi 4\" Noryl dalgıç pompalarda ise çark ve difüzörler yüksek hidrolik verimlilik sağlayan Noryl malzemeden üretilir.",
        ],
      },
      {
        heading: "Çap ve Kapasite Aralığı",
        paragraphs: [
          "Ürün gamı 4\", 5\", 6\", 7\", 8\", 9\" ve 10\" kuyu çaplarını kapsar. KP, KPD ve KSX serileri 290 m³/saat debi ve 700 m basma yüksekliğine kadar, 4\" KPN serisi ise 24 m³/saat debi ve 200 m basma yüksekliğine kadar performans sunar. Doğru model seçimi kuyu çapı, istenen debi ve toplam manometrik yükseklik birlikte değerlendirilerek yapılır.",
        ],
      },
      {
        heading: "Kumlu ve Aşındırıcı Sular",
        paragraphs: [
          "Kum içeren kuyularda KPN serisinin yüzer fan (floating impeller) sistemi kum ve aşındırıcı maddelere karşı koruma sağlar. Paslanmaz çelikten üretilen süzgeç, 50 g/m³ üzerindeki partiküllerin pompa içine girmesini önleyerek pompa ömrünü uzatır.",
        ],
      },
      {
        heading: "Montaj ve Bağlantı Standartları",
        paragraphs: [
          "Tüm seriler yatay ve dikey kurulum pozisyonuna uygundur. Motor bağlantıları NEMA standartlarına göre tasarlanmıştır; çıkış haznesi bağlantısı hem BSP hem NPT dişe uygundur. Bu sayede pompalar, NEMA flanşlı Kurlar dalgıç motorları ile doğrudan eşleştirilebilir.",
        ],
      },
      {
        heading: "Uygulama Alanları",
        paragraphs: [
          "Kurlar dalgıç pompaları tarımsal sulama, içme suyu temini, endüstriyel su temini, yer altı suyu tahliyesi ve dar çaplı kuyularda kullanılır. Uygulamanıza uygun seri seçimi için teknik ekibimizle iletişime geçebilir veya ürün kataloğumuzu inceleyebilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hangi kuyu çapları için dalgıç pompa üretiyorsunuz?",
        answer:
          "4\" Noryl (KPN) serisinden başlayarak 5\", 6\", 7\", 8\", 9\" ve 10\" kuyu çaplarına uygun paslanmaz çelik (KP), pik döküm (KPD) ve paslanmaz döküm (KSX) seriler üretiyoruz.",
      },
      {
        question: "Kumlu kuyular için hangi dalgıç pompa uygundur?",
        answer:
          "KPN serisi 4\" Noryl dalgıç pompalar, yüzer fan sistemi sayesinde kum ve aşındırıcı maddelere karşı koruma sağlar; paslanmaz süzgeci 50 g/m³ üzerindeki partikülleri pompa dışında tutar.",
      },
      {
        question: "Korozif sular için hangi malzeme seçenekleri var?",
        answer:
          "KSX serisi standart olarak AISI 304 paslanmaz dökümdür ve talep üzerine komple AISI 316L üretilebilir. KPD serisi pik döküm pompalar da talep üzerine komple bronz malzemeden imal edilebilir.",
      },
      {
        question: "Pompalar hangi motorlarla kullanılabilir?",
        answer:
          "Motor bağlantıları NEMA standartlarına uygundur; pompalarımız aynı standarda göre üretilen Kurlar dalgıç motorlarıyla doğrudan eşleştirilir.",
      },
    ],
    subCategories: [
      {
        slug: "paslanmaz-celik",
        productId: "kp",
        name: "Paslanmaz Çelik Dalgıç Pompalar",
        title: "Paslanmaz Çelik Dalgıç Pompa (KP Serisi)",
        description:
          "KP serisi paslanmaz çelik dalgıç pompalar: 4\"–10\" çap, 290 m³/h debi, 700 m basma yüksekliği. Korozyona dayanıklı, NEMA uyumlu üretici çözümü.",
        intro:
          "KP serisi paslanmaz çelik dalgıç pompalar, korozyona dayanıklı yapısı sayesinde uzun ömürlü ve güvenilir performans sunar. Tarımsal sulama, endüstriyel su temini ve yer altı suyu tahliyesi gibi zorlu uygulamalar için idealdir.",
        highlights: [
          "4\" | 6\" | 8\" | 10\" kuyu çapları",
          "290 m³/saat'e kadar debi, 700 m'ye kadar basma yüksekliği",
          "Korozyona dayanıklı paslanmaz çelik gövde",
          "NEMA standardında motor bağlantısı, BSP ve NPT çıkış",
        ],
      },
      {
        slug: "noryl",
        productId: "kpn",
        name: "Noryl Dalgıç Pompalar",
        title: "Noryl Dalgıç Pompa 4\" (KPN Serisi)",
        description:
          "KPN serisi 4\" Noryl dalgıç pompalar: yüzer fan sistemiyle kuma dayanıklı, 24 m³/h debi, 200 m basma yüksekliği. Dar çaplı kuyular için üretici çözümü.",
        intro:
          "KPN serisi 4\" Noryl dalgıç pompaların çark ve difüzörleri yüksek hidrolik verimlilik sağlar; yüzer fan sistemi kum ve aşındırıcı maddelere karşı koruma sunar. Paslanmaz süzgeç, 50 g/m³ üzerindeki partikülleri pompa dışında tutarak ömrü uzatır.",
        highlights: [
          "4\" kuyu çapı — dar çaplı kuyular için",
          "24 m³/h'e kadar debi, 200 m'ye kadar basma yüksekliği",
          "Yüzer fan sistemi ile kum koruması",
          "Yatay ve dikey montaj; NEMA, BSP ve NPT uyumu",
        ],
      },
      {
        slug: "pik-dokum",
        productId: "kpd",
        name: "Pik Döküm Dalgıç Pompalar",
        title: "Pik Döküm Dalgıç Pompa (KPD Serisi)",
        description:
          "KPD serisi pik döküm dalgıç pompalar: 5\"–10\" çap, 290 m³/saat debi, 700 m basma yüksekliği. Talep üzerine komple bronz üretim seçeneği.",
        intro:
          "KPD serisi dalgıç pompalarda difüzörler, fanlar, emiş ve çıkış haznesi tamamen pik dökümden imal edilir; bu yapı korozyona karşı yüksek dayanım ve istikrarlı performans sağlar. Talep üzerine pompalar komple bronz malzemeden üretilebilir.",
        highlights: [
          "5\" | 6\" | 7\" | 8\" | 9\" | 10\" kuyu çapları",
          "290 m³/saat'e kadar debi, 700 m'ye kadar basma yüksekliği",
          "Komple pik döküm hidrolik; talep üzerine bronz opsiyon",
          "NEMA standardında motor bağlantısı",
        ],
      },
      {
        slug: "paslanmaz-dokum",
        productId: "ksx",
        name: "Paslanmaz Döküm Dalgıç Pompalar",
        title: "Paslanmaz Döküm Dalgıç Pompa (KSX Serisi)",
        description:
          "KSX serisi AISI 304 paslanmaz döküm dalgıç pompalar: 6\"–10\" çap, 290 m³/saat debi, 700 m basma yüksekliği. Talep üzerine AISI 316L üretim.",
        intro:
          "KSX serisi dalgıç pompalar tamamen AISI 304 paslanmaz döküm malzemeden üretilir; difüzörler, fanlar, emiş-çıkış haznesi ve süzgeç paslanmaz çeliktir. Talep üzerine komple AISI 316L malzemeden imalat yapılabilir.",
        highlights: [
          "6\" | 8\" | 10\" kuyu çapları",
          "290 m³/saat'e kadar debi, 700 m'ye kadar basma yüksekliği",
          "Komple AISI 304 döküm; talep üzerine AISI 316L",
          "Yatay ve dikey montaj; NEMA uyumlu bağlantı",
        ],
      },
    ],
  },
  {
    slug: "dalgic-motorlar",
    categoryKey: "motor",
    name: "Dalgıç Motorlar",
    title: "Dalgıç Motor Modelleri & Üreticisi",
    description:
      "Kurlar dalgıç motor serileri: 4\" yağlı tip (KM4), su soğutmalı HI-TEMP (KM) ve S-Type (KMS). Sarılabilir, NEMA uyumlu, 260 kW'a kadar üretici çözümleri.",
    intro:
      "Kurlar, 1975'ten bu yana dalgıç motor üreten bir Türk imalatçısıdır. 4\" yağlı tip (KM4), su soğutmalı HI-TEMP (KM) ve S-Type (KMS) serileri; içme suyu, sulama, endüstriyel prosesler ve jeotermal kuyular için üretilir, 40'tan fazla ülkeye ihraç edilir.",
    sections: [
      {
        heading: "Soğutma ve Yağlama Teknolojileri",
        paragraphs: [
          "KM4 serisi 4\" yağlı tip dalgıç motorlar, gıda tüzüğüne uygun toksik olmayan yağ ile soğutulur ve yağlanır; bu sayede içme suyu kuyularında güvenle kullanılabilir, gürültüsüz çalışır ve uzun ömürlü hizmet verir.",
          "KM ve KMS serileri su soğutmalı sistemle çalışır. Su ile yağlamalı, yüksek dayanım gösteren eksenel ve radyal yataklar; basınç dengeleyici çek-valf, diyafram ve kum çanı ile birlikte kullanılır. Motorlar, -15°C'ye kadar koruma için saf su ve gliserin karışımı ile doldurulur.",
        ],
      },
      {
        heading: "Yüksek Sıcaklık Dayanımı (HI-TEMP)",
        paragraphs: [
          "Standart dalgıç motorlar genellikle 30-35°C su sıcaklığına kadar çalışırken, KM serisi HI-TEMP motorlar özel izolasyonlu PBN bobin telleri sayesinde 60°C sıcaklıktaki sularda çalışabilir. Bu özellik jeotermal kuyular ve sıcak su kaynakları için idealdir. KMS serisinde ayrıca maksimum 75°C ve 90°C sıcaklık opsiyonları sunulur.",
        ],
      },
      {
        heading: "Sarılabilir Motor Avantajı",
        paragraphs: [
          "Motorlarımız sarılabilir (rewindable) tiptir: arıza durumunda motor sargıları yenilenebilir. Bu, motorun toplam ömrünü uzatır ve servis maliyetlerini düşürür.",
        ],
      },
      {
        heading: "Güç, Voltaj ve Bağlantı Standartları",
        paragraphs: [
          "KMS serisinde güç aralığı 260 kW'a (350 HP) kadar çıkar; 500V, 525V, 630V ve 1000V'a uygun üretim yapılabilir. Standart voltaj 380/415V – 50/60 Hz'dir (±%10 voltaj toleransı) ve motorlar frekans konvertörü ile 30 Hz üzerinde istenen devirde çalıştırılabilir. Tüm seriler NEMA standartlarına uygun flanş bağlantısıyla üretilir, dikey ve yatay kurulum pozisyonlarına uygundur.",
        ],
      },
      {
        heading: "Uygulama Alanları",
        paragraphs: [
          "Kurlar dalgıç motorları içme suyu temini, tarımsal sulama, endüstriyel su temini ve prosesler, jeotermal kuyular ile sıcak su kaynaklarında kullanılır. İçme suyu mevzuatına uygun VDE, ACS, KTW onaylı kablo seçeneği mevcuttur. Motor seçimi için teknik ekibimizle iletişime geçebilir veya ürün kataloğumuzu inceleyebilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "HI-TEMP dalgıç motorlar hangi sıcaklığa kadar çalışır?",
        answer:
          "KM serisi HI-TEMP motorlar, özel izolasyonlu PBN bobin telleri sayesinde 60°C sıcaklıktaki sularda çalışır. KMS serisinde maksimum 75°C ve 90°C sıcaklık opsiyonları da sunulur.",
      },
      {
        question: "Sarılabilir dalgıç motor ne demektir?",
        answer:
          "Motor sargılarının arıza durumunda yenilenebilir (tekrar sarılabilir) olmasıdır. Bu özellik motorun ömrünü uzatır ve servis maliyetlerini düşürür.",
      },
      {
        question: "Dalgıç motorlar içme suyu kuyularında kullanılabilir mi?",
        answer:
          "Evet. KM4 yağlı tip motorlarda gıda tüzüğüne uygun toksik olmayan yağ kullanılır; ayrıca içme suyu mevzuatına uygun VDE, ACS, KTW onaylı kablo seçeneği mevcuttur.",
      },
      {
        question: "Motorlar frekans konvertörü ile kullanılabilir mi?",
        answer:
          "Evet, motorlar frekans konvertörü ile 30 Hz üzerinde istenen devirde çalıştırılabilir. Standart voltaj 380/415V – 50/60 Hz olup ±%10 voltaj toleransına sahiptir.",
      },
    ],
    subCategories: [
      {
        slug: "yagli-tip",
        productId: "km4",
        name: "Yağlı Tip Dalgıç Motorlar",
        title: "Yağlı Tip Dalgıç Motor 4\" (KM4 Serisi)",
        description:
          "KM4 serisi 4\" yağlı tip dalgıç motorlar: gıdaya uygun toksik olmayan yağ ile soğutma, sarılabilir yapı, NEMA flanş. İçme suyu kuyularına uygun.",
        intro:
          "KM4 serisi 4\" yağlı tip dalgıç motorlar, gıda tüzüğüne uygun toksik olmayan yağ ile soğutulan geri sarılabilir motorlardır. Gürültüsüz çalışır, uzun ömürlü hizmet sağlar; hem yatay hem dikey çalışmaya uygundur.",
        highlights: [
          "4\" çap — dar kuyular için kompakt çözüm",
          "Gıdaya uygun, toksik olmayan soğutma yağı",
          "Geri sarılabilir motor yapısı",
          "NEMA standartlarına uygun flanş bağlantısı",
        ],
      },
      {
        slug: "hi-temp",
        productId: "km",
        name: "HI-TEMP Dalgıç Motorlar",
        title: "HI-TEMP Dalgıç Motor 60°C (KM Serisi)",
        description:
          "KM serisi HI-TEMP dalgıç motorlar: PBN bobin teliyle 60°C sıcak suda çalışma, su soğutmalı sistem, 6\"–10\" çap. Jeotermal kuyular için ideal.",
        intro:
          "KM serisi HI-TEMP (60°C) sarılabilir dalgıç motorlar, özel izolasyonlu PBN bobin teli ile yüksek sıcaklığa dayanıklı üretilir. Su soğutmalı sistem; basınç dengeleyici çek-valf, diyafram, kum çanı ve su ile yağlamalı eksenel/radyal yataklarla donatılmıştır.",
        highlights: [
          "6\" | 7\" | 8\" | 10\" çaplar",
          "PBN bobin teli ile 60°C su sıcaklığında çalışma",
          "Jeotermal kuyular ve sıcak su kaynakları için ideal",
          "Saf su + gliserin dolgusu ile -15°C'ye kadar koruma",
        ],
      },
      {
        slug: "s-type",
        productId: "kms",
        name: "S-Type Dalgıç Motorlar",
        title: "S-Type Dalgıç Motor (KMS Serisi)",
        description:
          "KMS serisi S-Type dalgıç motorlar: 260 kW'a kadar güç, 6\"–8\" çap, 75°C/90°C sıcaklık opsiyonları, düşük işletme maliyeti odaklı verimli tasarım.",
        intro:
          "KMS serisi S-Type dalgıç motorlar, enerji verimliliği ve düşük işletme maliyeti odaklı tasarlanmıştır. 260 kW'a (350 HP) kadar güç aralığı; 500V, 525V, 630V ve 1000V'a uygun üretim ve maksimum 75°C / 90°C sıcaklık opsiyonları sunar.",
        highlights: [
          "6\" | 7\" | 8\" çaplar, 260 kW'a kadar güç",
          "Düşük işletme maliyeti için yüksek verimli dizayn",
          "Maksimum 75°C ve 90°C sıcaklık opsiyonları",
          "SIC/SIC-NBR-304 mekanik keçe opsiyonu; NEMA bağlantı",
        ],
      },
    ],
  },
];

/** /urunler/dalgic-pompalar gibi ana kategori yolu */
export function categoryPath(cat: CategoryDef): string {
  return `/urunler/${cat.slug}`;
}

/** /urunler/dalgic-pompalar/paslanmaz-celik gibi alt kategori yolu */
export function subCategoryPath(cat: CategoryDef, sub: SubCategoryDef): string {
  return `/urunler/${cat.slug}/${sub.slug}`;
}

export function getCategoryBySlug(slug: string): CategoryDef | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getSubCategory(
  categorySlug: string,
  subSlug: string,
): { category: CategoryDef; sub: SubCategoryDef } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const sub = category.subCategories.find((s) => s.slug === subSlug);
  return sub ? { category, sub } : undefined;
}

/** Ürün kategorisine (pump/motor) karşılık gelen kategori tanımı */
export function getCategoryByKey(key: string): CategoryDef | undefined {
  return productCategories.find((c) => c.categoryKey === key);
}

/** SSR route çözümü için tüm geçerli kategori/alt kategori path'leri */
export const categoryPaths: string[] = productCategories.flatMap((cat) => [
  categoryPath(cat),
  ...cat.subCategories.map((sub) => subCategoryPath(cat, sub)),
]);
