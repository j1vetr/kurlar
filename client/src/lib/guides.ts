/**
 * Rehber / Bilgi Merkezi içerikleri — tek source of truth.
 *
 * Kurallar:
 * - TR-only (EN kapsam dışı), tüm içerik SSR HTML'inde görünür.
 * - Teknik değerler YALNIZCA data.ts spec tablolarından (TR otoritatif) ve
 *   categories.ts'teki doğrulanmış içerikten alınmıştır. Uydurma değer yok.
 * - Çelişkili değerler (.local/tasks/manual-verification.md) alıntılanmaz.
 * - Bilgilendirme amaçlı (informational intent): ticari kategori sayfalarıyla
 *   yarışmaz, onlara doğal linkler verir.
 * - dateModified yalnızca içerik gerçekten değiştiğinde güncellenir.
 */

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  /** Opsiyonel madde listesi (görsel liste olarak render edilir). */
  bullets?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideLink {
  label: string;
  href: string;
}

export interface GuideDef {
  /** URL parçası: /rehber/<slug> */
  slug: string;
  /** Soru-intent H1 */
  h1: string;
  /** SEO title (" | Kurlar" otomatik eklenir) */
  title: string;
  /** Meta description */
  description: string;
  /** ISO tarih — gerçek yayın tarihi */
  datePublished: string;
  /** ISO tarih — içerik değiştiğinde güncellenir */
  dateModified: string;
  /** Giriş paragrafı (H1 altında görünür) */
  intro: string;
  sections: GuideSection[];
  /** Görünür FAQ — yalnızca varsa FAQPage JSON-LD üretilir */
  faqs?: GuideFaq[];
  /** Ticari kategori/ürün sayfalarına doğal linkler */
  relatedCategories: GuideLink[];
  /** İlgili diğer rehber slug'ları */
  relatedGuides: string[];
  /** Bu rehberin "İlgili Rehberler" bölümünde görüneceği kategori slug'ları */
  forCategories: ("dalgic-pompalar" | "dalgic-motorlar")[];
}

const PUBLISHED = "2026-08-11";

export const guides: GuideDef[] = [
  {
    slug: "dalgic-pompa-nedir",
    h1: "Dalgıç Pompa Nedir?",
    title: "Dalgıç Pompa Nedir? Tanımı, Yapısı ve Kullanım Alanları",
    description:
      "Dalgıç pompa nedir, hangi parçalardan oluşur, nerelerde kullanılır? Çok kademeli santrifüj yapı, gövde malzemeleri ve kuyu uygulamaları — üretici gözüyle rehber.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Dalgıç pompa, tamamen suya daldırılarak çalışan ve kuyu dibindeki suyu yüzeye basan çok kademeli santrifüj pompadır. Pompa, altına bağlanan dalgıç motor ile birlikte kuyu içine indirilir; su, kademelerdeki fan ve difüzörlerden geçerek basınç kazanır ve boru hattıyla yüzeye iletilir.",
    sections: [
      {
        heading: "Dalgıç Pompanın Yapısı",
        paragraphs: [
          "Bir dalgıç pompa temel olarak emiş haznesi, süzgeç, kademeler (fan + difüzör), mil, kaplin, klepe (çek valf) ve çıkış haznesinden oluşur. Su süzgeçten emilir, her kademede fanın kazandırdığı hızı difüzör basınca çevirir; kademe sayısı arttıkça pompanın basma yüksekliği artar. Çıkıştaki klepe, pompa durduğunda borudaki suyun geri kaçmasını önler.",
          "Pompa mili, NEMA standardındaki kaplin bağlantısıyla dalgıç motora bağlanır. Kurlar dalgıç pompalarında yataklar su ile yağlanır ve aşınmaya dirençlidir; seriler hem yatay hem dikey montaj pozisyonuna uygundur.",
        ],
      },
      {
        heading: "Gövde Malzemesi Seçenekleri",
        paragraphs: [
          "Dalgıç pompalar kullanılacakları suyun özelliğine göre farklı malzemelerden üretilir. Kurlar ürün gamında dört ana malzeme ailesi bulunur:",
        ],
        bullets: [
          "Paslanmaz çelik (KP serisi): Fan, difüzör, mil, süzgeç ve hazneler AISI 304 paslanmazdır; korozyona dayanıklıdır.",
          "Noryl (KPN serisi, 4\"): Çark ve difüzörler yüksek hidrolik verimlilik sağlayan Noryl malzemedendir; yüzer fan sistemi kuma karşı koruma sağlar.",
          "Pik döküm (KPD serisi): Difüzörler, fanlar ve hazneler pik dökümdür; talep üzerine komple bronz üretim yapılabilir.",
          "Paslanmaz döküm (KSX serisi): Tüm ıslak parçalar AISI 304 dökümdür; talep üzerine komple AISI 316L üretilebilir.",
        ],
      },
      {
        heading: "Nerelerde Kullanılır?",
        paragraphs: [
          "Dalgıç pompalar; tarımsal sulama, içme suyu temini, endüstriyel su temini, yer altı suyu tahliyesi ve dar çaplı derin kuyularda kullanılır. Kuyu çapına göre 4\" ile 10\" arasında seri seçilir: 4\" kuyular için KPN Noryl serisi (24 m³/saat debi, 200 m basma yüksekliğine kadar), daha büyük çaplarda KP, KPD ve KSX serileri (290 m³/saat debi, 700 m basma yüksekliğine kadar) tercih edilir.",
        ],
      },
      {
        heading: "Dalgıç Pompa ile Diğer Pompaların Farkı",
        paragraphs: [
          "Yüzeyden emiş yapan santrifüj pompaların aksine dalgıç pompa suyun içinde çalıştığı için emme derinliği sınırı yoktur; su pompaya kendiliğinden dolar. Motor ve pompa kuyu içinde olduğundan sessiz çalışır, donma riski düşüktür ve derin kuyulardan yüksek basma yüksekliklerine su iletebilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Dalgıç pompa hangi malzemelerden üretilir?",
        answer:
          "Kurlar dalgıç pompaları paslanmaz çelik (AISI 304), Noryl, pik döküm ve paslanmaz döküm (AISI 304, talep üzerine AISI 316L) malzemelerden üretilir. Malzeme seçimi suyun kimyasal yapısına ve uygulamaya göre yapılır.",
      },
      {
        question: "Dalgıç pompa hangi derinliklerde çalışır?",
        answer:
          "Kurlar dalgıç pompa serileri 300 m daldırma derinliğine kadar kullanılabilir; basma yüksekliği KP, KPD ve KSX serilerinde 700 m'ye, 4\" KPN serisinde 200 m'ye kadar çıkar.",
      },
      {
        question: "Dalgıç pompa motorsuz çalışır mı?",
        answer:
          "Hayır. Dalgıç pompa, altına NEMA standardında bağlanan bir dalgıç motorla tahrik edilir. Pompa ve motor, kuyu içine tek gövde hâlinde indirilir.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç pompa modellerini inceleyin", href: "/urunler/dalgic-pompalar" },
      { label: "Dalgıç motor modelleri", href: "/urunler/dalgic-motorlar" },
    ],
    relatedGuides: ["dalgic-pompa-calisma-prensibi", "dalgic-pompa-nasil-secilir", "dalgic-motor-nedir"],
    forCategories: ["dalgic-pompalar"],
  },
  {
    slug: "dalgic-motor-nedir",
    h1: "Dalgıç Motor Nedir?",
    title: "Dalgıç Motor Nedir? Yapısı, Soğutma Tipleri ve Kullanımı",
    description:
      "Dalgıç motor nedir, su soğutmalı ve yağlı tip arasındaki fark nedir? Sarılabilir motor yapısı, NEMA bağlantısı ve kuyu uygulamaları hakkında üretici rehberi.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Dalgıç motor, kuyu içinde tamamen su altında çalışarak dalgıç pompayı tahrik eden elektrik motorudur. Pompanın altına NEMA standardında flanş bağlantısıyla monte edilir ve pompayla birlikte kuyuya indirilir. Sızdırmazlığı IP68 koruma sınıfıyla sağlanır.",
    sections: [
      {
        heading: "Dalgıç Motorun Yapısı",
        paragraphs: [
          "Dalgıç motorlar, kuyu koşullarında uzun ömür için özel tasarlanmış asenkron elektrik motorlarıdır. Kurlar su soğutmalı motorlarında basınç dengeleyici çek-valf, diyafram, kum çanı ile su ile yağlamalı yüksek dayanımlı eksenel ve radyal yataklar bulunur. Motor içi, -15°C'ye kadar koruma sağlayan saf su ve gliserin karışımı ile doldurulur.",
          "Kurlar dalgıç motorları sarılabilir (rewindable) tiptir: arıza durumunda stator sargıları yenilenebilir. Bu, motorun toplam servis ömrünü uzatır ve işletme maliyetini düşürür.",
        ],
      },
      {
        heading: "Soğutma Tipleri: Yağlı ve Su Soğutmalı",
        paragraphs: [
          "4\" KM4 serisi motorlar yağ soğutmalıdır; kullanılan yağ toksik olmayan, gıdaya uygun tiptedir ve motorlar içme suyu kuyularında güvenle kullanılır. KM4 serisi 0.37 – 7.5 kW güç aralığında, monofaze (210–230 V) ve trifaze (380–415 V) seçenekleriyle üretilir.",
          "6\" ve üzeri KM (HI-TEMP) ve KMS (S-Type) serileri su soğutmalıdır. HI-TEMP motorlar özel izolasyonlu PBN bobin teli sayesinde standart olarak 60°C, opsiyonel olarak 90°C ortam sıcaklığına kadar çalışır. S-Type motorlar enerji verimliliği odaklıdır ve %80 – %83 verim aralığında çalışır.",
        ],
      },
      {
        heading: "NEMA Bağlantı Standardı",
        paragraphs: [
          "Dalgıç motorların pompa bağlantısı NEMA standardına göre yapılır. Bu sayede NEMA uyumlu her dalgıç pompa, aynı çaptaki NEMA uyumlu dalgıç motorla eşleştirilebilir. Kurlar hem pompalarını hem motorlarını bu standarda göre ürettiği için pompa-motor seti tek üreticiden temin edilebilir.",
        ],
      },
      {
        heading: "Soğutma Akışının Önemi",
        paragraphs: [
          "Dalgıç motor, üzerinden geçen su akışı ile soğur. Bu nedenle motorun kuyu içinde yeterli su akışı olan bir seviyeye yerleştirilmesi gerekir; örneğin KM4 serisi için asgari soğutma akış hızı 8 cm/s'dir. Yetersiz akış, motorun aşırı ısınmasına ve sargı ömrünün kısalmasına yol açar.",
        ],
      },
    ],
    faqs: [
      {
        question: "Yağlı ve su soğutmalı dalgıç motor farkı nedir?",
        answer:
          "Yağlı tip motorlarda (KM4) soğutma ve yağlama gıdaya uygun, toksik olmayan yağ ile yapılır; 4\" kuyular için üretilir. Su soğutmalı motorlarda (KM, KMS) motor içi saf su-gliserin karışımıyla doludur ve yataklar su ile yağlanır; 6\" ve üzeri çaplarda, yüksek güçlerde kullanılır.",
      },
      {
        question: "Dalgıç motor tekrar sarılabilir mi?",
        answer:
          "Evet. Kurlar dalgıç motorları sarılabilir (rewindable) tiptedir; arıza durumunda sargılar yenilenerek motor tekrar kullanılabilir.",
      },
      {
        question: "Dalgıç motor sıcak sularda çalışır mı?",
        answer:
          "Standart motorlar 35°C'ye kadar tasarlanır. KM HI-TEMP serisi PBN bobin teli ile standart 60°C, opsiyonel 90°C ortam sıcaklığına kadar çalışır; jeotermal ve sıcak su kuyuları için uygundur.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç motor modellerini inceleyin", href: "/urunler/dalgic-motorlar" },
      { label: "Dalgıç pompa modelleri", href: "/urunler/dalgic-pompalar" },
    ],
    relatedGuides: ["dalgic-motor-nasil-secilir", "nema-dalgic-motor-standardi", "dalgic-pompa-nedir"],
    forCategories: ["dalgic-motorlar"],
  },
  {
    slug: "dalgic-pompa-nasil-secilir",
    h1: "Dalgıç Pompa Nasıl Seçilir?",
    title: "Dalgıç Pompa Nasıl Seçilir? Adım Adım Seçim Rehberi",
    description:
      "Dalgıç pompa seçiminde kuyu çapı, debi, basma yüksekliği, kum oranı ve su sıcaklığı nasıl değerlendirilir? Üretici gözüyle adım adım seçim rehberi.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Doğru dalgıç pompa seçimi; kuyu çapı, ihtiyaç duyulan debi, toplam basma yüksekliği, sudaki kum oranı ve su sıcaklığının birlikte değerlendirilmesiyle yapılır. Yanlış seçim, verim kaybına ve pompanın erken aşınmasına yol açar.",
    sections: [
      {
        heading: "1. Kuyu Çapını Belirleyin",
        paragraphs: [
          "Pompa, kuyu borusunun içine rahatça inebilmelidir. 4\" kuyular için maksimum 98 mm pompa çapına sahip KPN Noryl serisi tasarlanmıştır. Daha geniş kuyularda 5\"–10\" aralığındaki KP paslanmaz çelik, KPD pik döküm ve KSX paslanmaz döküm serileri kullanılır.",
        ],
      },
      {
        heading: "2. Debi İhtiyacını Hesaplayın",
        paragraphs: [
          "Debi, pompanın birim zamanda bastığı su miktarıdır (m³/saat). Sulama alanı, kullanım suyu ihtiyacı veya proses gereksinimine göre belirlenir. KPN serisi 24 m³/saat'e, KP, KPD ve KSX serileri 290 m³/saat'e kadar debi sunar. Kuyunun verimi (kuyudan güvenle çekilebilecek su miktarı) pompa debisinden düşükse, pompa kuyu verimine göre seçilmelidir.",
        ],
      },
      {
        heading: "3. Toplam Basma Yüksekliğini Belirleyin",
        paragraphs: [
          "Toplam basma yüksekliği; kuyudaki dinamik su seviyesi, yüzeydeki yükseltme ihtiyacı ve boru hattındaki sürtünme kayıplarının toplamıdır. KP, KPD ve KSX serileri 700 m'ye, KPN serisi 200 m'ye kadar basma yüksekliği sağlar. Debi ve basma yüksekliği birlikte, pompa eğrisi üzerinde çalışma noktasını belirler.",
        ],
      },
      {
        heading: "4. Kum Oranını ve Su Kalitesini Değerlendirin",
        paragraphs: [
          "Kurlar dalgıç pompaları maksimum 50 g/m³ kum miktarına göre tasarlanmıştır. Kum içeren kuyularda KPN serisinin yüzer fan sistemi aşınmaya karşı koruma sağlar. Korozif sularda paslanmaz seçenekler öne çıkar: KP serisinde ıslak parçalar AISI 304'tür; KSX serisi talep üzerine komple AISI 316L üretilebilir.",
        ],
      },
      {
        heading: "5. Su Sıcaklığını Kontrol Edin",
        paragraphs: [
          "Her serinin maksimum su sıcaklığı farklıdır: KPD 30°C, KPN 35°C, KP ve KSX 60°C'ye kadar kullanılabilir. Sıcak su ve jeotermal uygulamalarda pompayla birlikte motorun da sıcaklık dayanımı (örneğin HI-TEMP motorlar) kontrol edilmelidir.",
        ],
      },
      {
        heading: "6. Motorla Birlikte Değerlendirin",
        paragraphs: [
          "Pompa tek başına çalışmaz; seçilen modelin gerektirdiği güçte, kuyu çapına uygun bir dalgıç motorla eşleştirilmelidir. Kurlar pompaları NEMA standardında motor bağlantısına sahiptir. Kuyu çapı, debi ve basma yüksekliği bilgilerinizi ileterek teknik ekibimizden model önerisi alabilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Dalgıç pompa seçiminde en önemli iki parametre nedir?",
        answer:
          "Debi (m³/saat) ve toplam basma yüksekliği (m). Bu iki değer pompanın çalışma noktasını belirler; kuyu çapı ise hangi serinin fiziksel olarak kullanılabileceğini sınırlar.",
      },
      {
        question: "Kumlu kuyu için hangi dalgıç pompa uygundur?",
        answer:
          "4\" kuyularda yüzer fan sistemli KPN Noryl serisi kum ve aşındırıcı maddelere karşı koruma sağlar. Tüm serilerde izin verilen maksimum kum miktarı 50 g/m³'tür.",
      },
      {
        question: "Pompayı büyük seçmek sorun olur mu?",
        answer:
          "Evet. Kuyu veriminden yüksek debili pompa seçilirse kuyu susuz kalabilir ve pompa hasar görür. Pompa, kuyu verimi ve gerçek ihtiyaca göre boyutlandırılmalıdır.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç pompa modellerini inceleyin", href: "/urunler/dalgic-pompalar" },
      { label: "Paslanmaz çelik dalgıç pompalar (KP)", href: "/urunler/dalgic-pompalar/paslanmaz-celik" },
      { label: "4\" Noryl dalgıç pompalar (KPN)", href: "/urunler/dalgic-pompalar/noryl" },
      { label: "Pik döküm dalgıç pompalar (KPD)", href: "/urunler/dalgic-pompalar/pik-dokum" },
    ],
    relatedGuides: [
      "dalgic-pompada-debi-ve-basma-yuksekligi",
      "derin-kuyu-dalgic-pompa-secimi",
      "dalgic-pompa-ve-motor-secimi",
    ],
    forCategories: ["dalgic-pompalar"],
  },
  {
    slug: "dalgic-motor-nasil-secilir",
    h1: "Dalgıç Motor Nasıl Seçilir?",
    title: "Dalgıç Motor Nasıl Seçilir? Güç, Çap ve Sıcaklık Kriterleri",
    description:
      "Dalgıç motor seçiminde güç eşleşmesi, kuyu çapı, su sıcaklığı, voltaj ve yol verme nasıl değerlendirilir? Üretici gözüyle pratik seçim rehberi.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Dalgıç motor seçimi; pompanın güç ihtiyacı, kuyu çapı, su sıcaklığı, şebeke voltajı ve yol verme yöntemine göre yapılır. Motor, pompanın çalışma noktasındaki güç ihtiyacını karşılamalı ve kuyu koşullarında güvenle soğuyabilmelidir.",
    sections: [
      {
        heading: "1. Güç İhtiyacını Pompaya Göre Belirleyin",
        paragraphs: [
          "Motor gücü, seçilen pompanın çalışma noktasındaki mil gücü ihtiyacına göre belirlenir. Kurlar ürün gamında 4\" KM4 serisi 0.37 – 7.5 kW aralığını kapsar; 6\" ve üzeri su soğutmalı serilerde güç 260 kW'a kadar çıkar. Motor tablolarındaki güç değerleri, pompa modeliyle birlikte değerlendirilir.",
        ],
      },
      {
        heading: "2. Kuyu Çapına Uygun Motor Çapı Seçin",
        paragraphs: [
          "Motor çapı pompayla ve kuyuyla uyumlu olmalıdır: 4\" kuyular için KM4, daha büyük kuyular için 6\", 7\", 8\" ve 10\" çaplarında KM (HI-TEMP) ve KMS (S-Type) serileri üretilir. Pompa-motor bağlantısı NEMA standardında olduğundan aynı çap sınıfındaki Kurlar pompa ve motorları doğrudan eşleşir.",
        ],
      },
      {
        heading: "3. Su Sıcaklığını Kontrol Edin",
        paragraphs: [
          "KM4 serisinin maksimum sıvı sıcaklığı +35°C'dir. Sıcak sularda KM HI-TEMP serisi kullanılır: özel izolasyonlu PBN bobin teli ile standart 60°C, opsiyonel 90°C ortam sıcaklığına kadar çalışır. KMS serisinde de yüksek sıcaklık opsiyonları mevcuttur. Sıcaklık arttıkça soğutma akışının önemi artar.",
        ],
      },
      {
        heading: "4. Voltaj ve Yol Verme Yöntemini Belirleyin",
        paragraphs: [
          "KM4 serisi monofaze 210 – 230 V ve trifaze 380 – 415 V seçenekleriyle üretilir. HI-TEMP motorlar direkt (DOL) veya yıldız-üçgen (Y∆) yol vermeye uygundur. KMS serisinde 500V, 525V, 630V ve 1000V'a uygun üretim yapılabilir. Sık kalkış gereken uygulamalarda motorun yol verme kapasitesi (örneğin KM4 için saatte 24 kalkış) aşılmamalıdır.",
        ],
      },
      {
        heading: "5. Soğutma Koşullarını Doğrulayın",
        paragraphs: [
          "Motor, üzerinden geçen su akışıyla soğur; KM4 için asgari soğutma akış hızı 8 cm/s'dir. Geniş çaplı kuyularda veya motorun su girişinin üzerinde kaldığı durumlarda soğutma gömleği ihtiyacı teknik ekiple değerlendirilmelidir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Dalgıç motor gücü nasıl seçilir?",
        answer:
          "Motor gücü, pompanın çalışma noktasındaki mil gücü ihtiyacını karşılayacak şekilde pompa modeliyle birlikte belirlenir. Kurlar motor gamı 0.37 kW'tan 260 kW'a kadar uzanır.",
      },
      {
        question: "Motor çapı nasıl belirlenir?",
        answer:
          "Kuyu çapına ve pompa serisine göre: 4\" kuyularda KM4, daha büyük kuyularda 6\"–10\" çaplarında KM (HI-TEMP) veya KMS (S-Type) serileri kullanılır.",
      },
      {
        question: "Jeotermal kuyu için hangi motor uygundur?",
        answer:
          "KM HI-TEMP serisi, PBN bobin teli sayesinde standart 60°C ve opsiyonel 90°C ortam sıcaklığına kadar çalışır; jeotermal ve sıcak su kaynakları için tasarlanmıştır.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç motor modellerini inceleyin", href: "/urunler/dalgic-motorlar" },
      { label: "Dalgıç pompa modelleri", href: "/urunler/dalgic-pompalar" },
    ],
    relatedGuides: ["dalgic-motor-nedir", "nema-dalgic-motor-standardi", "dalgic-pompa-ve-motor-secimi"],
    forCategories: ["dalgic-motorlar"],
  },
  {
    slug: "dalgic-pompa-calisma-prensibi",
    h1: "Dalgıç Pompa Çalışma Prensibi Nedir?",
    title: "Dalgıç Pompa Çalışma Prensibi — Kademeler, Fan ve Difüzör",
    description:
      "Dalgıç pompa nasıl çalışır? Çok kademeli santrifüj prensip, fan-difüzör ilişkisi, çek valf ve su ile yağlanan yataklar adım adım anlatılıyor.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Dalgıç pompa, çok kademeli santrifüj prensiple çalışır: dalgıç motorun döndürdüğü mil üzerindeki fanlar suya hız kazandırır, her fanın üzerindeki difüzör bu hızı basınca çevirir. Kademeler üst üste eklendikçe basınç artar ve su, kuyu derinliğinden yüzeye basılır.",
    sections: [
      {
        heading: "Adım Adım Çalışma Süreci",
        paragraphs: [
          "Pompa çalıştığında su, pompanın alt bölümündeki süzgeçten emiş haznesine girer. Süzgeç, iri partiküllerin pompa içine girmesini engeller. Motorun döndürdüğü mile bağlı ilk fan, suyu merkezden çevreye doğru savurarak hız kazandırır; fanın hemen üzerindeki difüzör, suyun hızını basınca çevirir ve bir üst kademeye yönlendirir.",
          "Bu işlem her kademede tekrarlanır. Kademe sayısı arttıkça toplam basınç (basma yüksekliği) artar — bu nedenle aynı seri içinde farklı kademe sayılarına sahip modeller farklı basma yüksekliklerine ulaşır. Kurlar serilerinde bu yapı 700 m basma yüksekliğine kadar ölçeklenir.",
          "Son kademeden çıkan su, çıkış haznesindeki klepe (çek valf) üzerinden boru hattına iletilir. Klepe, pompa durduğunda boru kolonundaki suyun geriye boşalmasını ve pompanın ters dönmesini önler.",
        ],
      },
      {
        heading: "Yataklama ve Sızdırmazlık",
        paragraphs: [
          "Kurlar dalgıç pompalarında mil yatakları su ile yağlanır ve aşınmaya dirençlidir; ayrıca harici yağlama gerektirmez. Pompa-motor bütünü IP68 koruma sınıfında, tamamen su altında çalışacak şekilde tasarlanmıştır. Seriler hem yatay hem dikey montaj pozisyonunda çalışabilir.",
        ],
      },
      {
        heading: "Kum ve Aşındırıcılara Karşı Tasarım",
        paragraphs: [
          "Kuyu suyundaki kum, fan ve difüzör yüzeylerini aşındırır. Kurlar pompaları maksimum 50 g/m³ kum miktarına göre tasarlanır. 4\" KPN serisinde yüzer fan (floating impeller) sistemi, fanların kum kaynaklı sıkışmasına ve aşınmasına karşı ek koruma sağlar.",
        ],
      },
      {
        heading: "Verimli Çalışmanın Koşulları",
        paragraphs: [
          "Pompanın tasarlandığı debi-basma yüksekliği aralığında (çalışma noktasında) kullanılması hem verimi hem ömrü doğrudan etkiler. Ayrıca motorun yeterli su akışıyla soğuması ve pompanın dinamik su seviyesinin altında kalması gerekir. Doğru model seçimi için debi ve basma yüksekliği kavramlarını açıkladığımız rehbere göz atabilirsiniz.",
        ],
      },
    ],
    relatedCategories: [
      { label: "Dalgıç pompa modellerini inceleyin", href: "/urunler/dalgic-pompalar" },
    ],
    relatedGuides: [
      "dalgic-pompa-nedir",
      "dalgic-pompada-debi-ve-basma-yuksekligi",
      "dalgic-pompa-nasil-secilir",
    ],
    forCategories: ["dalgic-pompalar"],
  },
  {
    slug: "dalgic-pompa-ve-motor-secimi",
    h1: "Dalgıç Pompa ve Motor Seçimi Birlikte Nasıl Yapılır?",
    title: "Dalgıç Pompa ve Motor Seçimi — Uyumlu Set Oluşturma Rehberi",
    description:
      "Dalgıç pompa ve dalgıç motor birlikte nasıl seçilir? NEMA uyumu, güç eşleşmesi, çap uyumu ve soğutma koşullarıyla uyumlu set oluşturma rehberi.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Dalgıç pompa ve dalgıç motor kuyuda tek gövde hâlinde çalışır; bu yüzden seçimleri birbirinden bağımsız yapılamaz. Uyumlu bir set için çap, bağlantı standardı, güç ve soğutma koşulları birlikte değerlendirilmelidir.",
    sections: [
      {
        heading: "1. Önce Pompa, Sonra Motor",
        paragraphs: [
          "Seçim her zaman su ihtiyacından başlar: kuyu çapı, debi ve toplam basma yüksekliğine göre pompa modeli belirlenir. Pompanın çalışma noktasındaki mil gücü ihtiyacı, motorun gücünü belirler. Motor gücü pompanın ihtiyacının altında kalmamalıdır.",
        ],
      },
      {
        heading: "2. Çap ve NEMA Uyumunu Doğrulayın",
        paragraphs: [
          "Pompa ile motorun bağlantısı NEMA standardına göre yapılır: kaplin ve flanş ölçüleri standarttır. Kurlar pompaları (KP, KPN, KPD, KSX) NEMA standardında motor bağlantısına sahiptir; motor tarafında KM4 (4\"), KM HI-TEMP (6\"–10\") ve KMS serileri aynı standartta üretilir. Böylece aynı çap sınıfındaki Kurlar pompa ve motorları doğrudan eşleştirilir.",
        ],
      },
      {
        heading: "3. Su Sıcaklığına Göre Çift Kontrol",
        paragraphs: [
          "Sıcaklık dayanımı pompa ve motor için ayrı ayrı kontrol edilmelidir. Örneğin KP serisi pompa 60°C su sıcaklığına kadar kullanılabilirken, standart bir motorun sınırı 35°C olabilir; bu durumda motor tarafında HI-TEMP seri (standart 60°C, opsiyonel 90°C) seçilmelidir. Setin sıcaklık sınırı, iki bileşenden düşük olanına göre belirlenir.",
        ],
      },
      {
        heading: "4. Soğutma ve Montaj Koşullarını Planlayın",
        paragraphs: [
          "Motor, pompanın altında kaldığı için emilen su motorun üzerinden geçerek onu soğutur. Asgari soğutma akış hızı sağlanmalıdır (KM4 için 8 cm/s). Yatay montaj gereken uygulamalarda hem pompanın hem motorun yatay çalışmaya uygunluğu doğrulanmalıdır — Kurlar serileri her iki pozisyona da uygundur.",
        ],
      },
      {
        heading: "5. Tek Üreticiden Set Almanın Avantajı",
        paragraphs: [
          "Pompa ve motorun aynı üreticiden alınması; bağlantı uyumu, garanti ve yedek parça süreçlerini tek muhatapta toplar. Kurlar, 1975'ten bu yana hem dalgıç pompayı hem dalgıç motoru kendi tesislerinde üreten bir imalatçı olarak pompa-motor setini birlikte boyutlandırır. Kuyu bilgilerinizi ileterek set önerisi alabilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Farklı marka pompa ve motor birlikte kullanılabilir mi?",
        answer:
          "Bağlantılar NEMA standardındaysa mekanik olarak eşleştirilebilir. Ancak güç eşleşmesi, sıcaklık dayanımı ve garanti bütünlüğü açısından pompa ve motorun birlikte boyutlandırılması önerilir.",
      },
      {
        question: "Motor gücü pompadan büyük seçilirse ne olur?",
        answer:
          "Motorun gücü pompanın ihtiyacını karşılamalıdır; ihtiyacın altında motor seçmek aşırı yüklenmeye yol açar. Gereksiz büyük motor ise yatırım ve enerji maliyetini artırır. Doğru eşleşme pompa eğrisindeki çalışma noktasına göre yapılır.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç pompa modellerini inceleyin", href: "/urunler/dalgic-pompalar" },
      { label: "Dalgıç motor modellerini inceleyin", href: "/urunler/dalgic-motorlar" },
    ],
    relatedGuides: ["dalgic-pompa-nasil-secilir", "dalgic-motor-nasil-secilir", "nema-dalgic-motor-standardi"],
    forCategories: ["dalgic-pompalar", "dalgic-motorlar"],
  },
  {
    slug: "derin-kuyu-dalgic-pompa-secimi",
    h1: "Derin Kuyu Dalgıç Pompa Seçimi Nasıl Yapılır?",
    title: "Derin Kuyu Dalgıç Pompa Seçimi — Derinlik, Debi ve Malzeme",
    description:
      "Derin kuyularda dalgıç pompa seçerken daldırma derinliği, basma yüksekliği, kademe yapısı ve malzeme nasıl değerlendirilir? Üretici rehberi.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Derin kuyularda pompa seçimi, sığ kuyulara göre daha kritiktir: basma yüksekliği yüzlerce metreye çıkar, pompa gövdesi yüksek basınca ve daldırma derinliğine dayanmalıdır. Kurlar serileri 700 m basma yüksekliği ve 300 m daldırma derinliğine kadar bu ihtiyacı karşılar.",
    sections: [
      {
        heading: "Derin Kuyuda Kritik Parametreler",
        paragraphs: [
          "Derin kuyu uygulamasında üç değer birlikte okunmalıdır: dinamik su seviyesi (pompanın su bastığı gerçek derinlik), pompanın daldırma derinliği (pompanın üzerindeki su sütunu basıncı) ve toplam basma yüksekliği. Kurlar KP, KPD ve KSX serileri 700 m basma yüksekliğine ve 300 m daldırma derinliğine kadar; 4\" KPN serisi 200 m basma yüksekliğine kadar kullanılır.",
        ],
      },
      {
        heading: "Kademe Sayısı ve Basma Yüksekliği İlişkisi",
        paragraphs: [
          "Dalgıç pompalarda basma yüksekliği kademe sayısıyla artar: her kademe (fan + difüzör) toplam basınca katkı yapar. Derin kuyularda çok kademeli modeller seçilir; bu da pompa boyunu uzatır. Pompa boyu ve çapının kuyu yapısıyla uyumu montaj öncesi doğrulanmalıdır.",
        ],
      },
      {
        heading: "Malzeme ve Dayanım",
        paragraphs: [
          "Derin kuyularda pompa yüksek basınç altında uzun süre çalışır; malzeme seçimi ömrü doğrudan etkiler. KP serisinde fan, difüzör, mil ve hazneler AISI 304 paslanmaz çeliktir. KSX serisinde tüm ıslak parçalar AISI 304 dökümdür ve kalın et yapısıyla yüksek basınç dayanımı sağlar; talep üzerine AISI 316L üretilebilir. KPD pik döküm seri, difüzör ve fanlarda pik dökümün aşınma direncini kullanır.",
        ],
      },
      {
        heading: "Motor Tarafını Unutmayın",
        paragraphs: [
          "Derin kuyuda motor da yüksek daldırma basıncına ve uzun kablo hattına uygun seçilmelidir. Yüksek güç ihtiyacında 6\"–10\" su soğutmalı KM ve KMS serileri kullanılır; KMS serisinde 500V ve üzeri voltajlara uygun üretim, uzun kablo hatlarındaki gerilim düşümü senaryolarında değerlendirilir. Yol verme yöntemi (DOL / Y∆) şebeke koşullarına göre belirlenir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kurlar dalgıç pompaları kaç metre derinliğe kadar kullanılır?",
        answer:
          "Seriler 300 m daldırma derinliğine kadar kullanılabilir; toplam basma yüksekliği KP, KPD ve KSX serilerinde 700 m'ye kadar çıkar.",
      },
      {
        question: "Derin kuyu pompası ile normal dalgıç pompa farklı mı?",
        answer:
          "Prensip aynıdır; derin kuyu modelleri daha çok kademeyle daha yüksek basma yüksekliğine ulaşır ve gövdeleri yüksek basınca göre tasarlanır. Seçim, kuyunun derinlik ve debi değerlerine göre yapılır.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç pompa modellerini inceleyin", href: "/urunler/dalgic-pompalar" },
      { label: "Paslanmaz döküm dalgıç pompalar (KSX)", href: "/urunler/dalgic-pompalar/paslanmaz-dokum" },
      { label: "Dalgıç motor modelleri", href: "/urunler/dalgic-motorlar" },
    ],
    relatedGuides: [
      "dalgic-pompa-nasil-secilir",
      "dalgic-pompada-debi-ve-basma-yuksekligi",
      "6-inc-dalgic-pompa",
    ],
    forCategories: ["dalgic-pompalar"],
  },
  {
    slug: "4-inc-dalgic-pompa",
    h1: "4 İnç Dalgıç Pompa Hangi Kuyularda Kullanılır?",
    title: "4 İnç Dalgıç Pompa — Dar Çaplı Kuyular İçin Seçim Rehberi",
    description:
      "4 inç dalgıç pompa nedir, hangi kuyularda kullanılır? 98 mm çap, 24 m³/saat debi, 200 m basma yüksekliği ve KM4 motor eşleşmesi hakkında rehber.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "4 inç dalgıç pompa, iç çapı yaklaşık 100 mm olan dar kuyular için üretilen kompakt pompa sınıfıdır. Kurlar'ın 4\" çözümü KPN serisidir: maksimum 98 mm pompa çapıyla 4\" kuyu borusuna iner, 24 m³/saat debi ve 200 m basma yüksekliğine kadar performans sunar.",
    sections: [
      {
        heading: "4 İnç Kuyu Nerelerde Karşımıza Çıkar?",
        paragraphs: [
          "Dar çaplı sondaj kuyuları; bahçe ve küçük parsel sulaması, müstakil su temini ve sondaj maliyetinin sınırlı tutulduğu uygulamalarda yaygındır. Bu kuyularda pompanın dış çapı kritik sınırdır: KPN serisinin maksimum çapı 98 mm'dir ve 4\" kuyu borusunun içine güvenle iner.",
        ],
      },
      {
        heading: "KPN Serisinin Teknik Özellikleri",
        paragraphs: [
          "KPN serisi 4\" Noryl dalgıç pompalarda çark ve difüzörler, yüksek hidrolik verimlilik sağlayan Noryl malzemeden üretilir. Yüzer fan (floating impeller) sistemi kum ve aşındırıcı maddelere karşı koruma sağlar; paslanmaz süzgeç iri partikülleri pompa dışında tutar.",
        ],
        bullets: [
          "Maksimum debi: 24 m³/saat",
          "Maksimum basma yüksekliği: 200 m",
          "Maksimum pompa çapı: 98 mm",
          "Maksimum su sıcaklığı: 35°C",
          "Maksimum kum miktarı: 50 g/m³",
          "Devir: 2900 RPM",
        ],
      },
      {
        heading: "4 İnç Motor Eşleşmesi: KM4 Serisi",
        paragraphs: [
          "4\" pompalar, aynı çap sınıfındaki KM4 yağlı tip dalgıç motorlarla eşleştirilir. KM4 serisi 0.37 – 7.5 kW güç aralığında, monofaze (210–230 V) ve trifaze (380–415 V) seçenekleriyle üretilir; soğutma-yağlama, gıdaya uygun toksik olmayan yağ ile yapılır. Bağlantı NEMA standardındadır.",
        ],
      },
      {
        heading: "Ne Zaman Daha Büyük Çapa Geçilmeli?",
        paragraphs: [
          "İhtiyaç 24 m³/saat debinin veya 200 m basma yüksekliğinin üzerine çıkıyorsa 4\" sınıf yetersiz kalır; 6\" ve üzeri kuyu açılarak KP, KPD veya KSX serilerine geçilir. Kuyu açılmadan önce ihtiyacın netleştirilmesi, hem sondaj hem ekipman maliyetini optimize eder.",
        ],
      },
    ],
    faqs: [
      {
        question: "4 inç dalgıç pompa kaç metreden su basar?",
        answer:
          "KPN serisi 4\" dalgıç pompalar 200 m basma yüksekliğine kadar performans sunar. Gerçek değer, seçilen modelin kademe sayısına ve çalışma noktasına bağlıdır.",
      },
      {
        question: "4 inç dalgıç pompa kumlu suda çalışır mı?",
        answer:
          "KPN serisinin yüzer fan sistemi kum ve aşındırıcı maddelere karşı koruma sağlar; izin verilen maksimum kum miktarı 50 g/m³'tür.",
      },
    ],
    relatedCategories: [
      { label: "4\" Noryl dalgıç pompaları inceleyin (KPN)", href: "/urunler/dalgic-pompalar/noryl" },
      { label: "Dalgıç motor modelleri", href: "/urunler/dalgic-motorlar" },
    ],
    relatedGuides: ["6-inc-dalgic-pompa", "dalgic-pompa-nasil-secilir", "dalgic-motor-nasil-secilir"],
    forCategories: ["dalgic-pompalar"],
  },
  {
    slug: "6-inc-dalgic-pompa",
    h1: "6 İnç Dalgıç Pompa Özellikleri Nelerdir?",
    title: "6 İnç Dalgıç Pompa — Özellikler, Seriler ve Motor Eşleşmesi",
    description:
      "6 inç dalgıç pompa hangi uygulamalarda kullanılır? KP ve KSX serileri, 6\" HI-TEMP motor eşleşmesi ve seçim kriterleri hakkında üretici rehberi.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "6 inç dalgıç pompa, tarımsal sulama ve su temini uygulamalarının en yaygın sınıflarından biridir: 4\" sınıfın debi sınırlarını aşar, 8\"–10\" sınıfa göre daha ekonomik sondaj gerektirir. Kurlar 6\" kuyular için paslanmaz çelik KP ve paslanmaz döküm KSX serilerini üretir.",
    sections: [
      {
        heading: "6 İnç Sınıfının Kullanım Alanları",
        paragraphs: [
          "6\" kuyular; orta ve büyük ölçekli tarımsal sulama, içme suyu temini ve endüstriyel su uygulamalarında yaygındır. Bu sınıfta debi ihtiyaçları 4\" pompaların 24 m³/saat sınırının üzerine çıkar ve seri seçimine bağlı olarak yüksek basma yükseklikleri gerekir.",
        ],
      },
      {
        heading: "6 İnç Kuyular İçin Kurlar Serileri",
        paragraphs: [
          "KP serisi paslanmaz çelik dalgıç pompalar 4\"–10\" aralığını kapsar ve 6\" modelleriyle bu sınıfın temel çözümüdür: ıslak parçalar AISI 304'tür, seri 290 m³/saat debi ve 700 m basma yüksekliğine kadar ölçeklenir (üst değerler serinin tamamı içindir; model bazında değişir).",
          "KSX serisi 6\"-8\"-10\" paslanmaz döküm pompalar, komple AISI 304 döküm yapısıyla yüksek basınç ve aşınma direnci gerektiren 6\" uygulamalar için üretilir; talep üzerine AISI 316L malzeme seçeneği vardır. Her iki seri de 50 g/m³ kum miktarına ve 60°C su sıcaklığına kadar kullanılabilir.",
        ],
      },
      {
        heading: "6 İnç Motor Eşleşmesi",
        paragraphs: [
          "6\" pompalar, NEMA standardı sayesinde 6\" dalgıç motorlarla doğrudan eşleşir. Kurlar KM6 HI-TEMP su soğutmalı motorlar bu sınıfta 4 – 45 kW güç aralığını kapsar; özel PBN bobin teliyle standart 60°C, opsiyonel 90°C ortam sıcaklığına kadar çalışır. Enerji verimliliği öncelikliyse KMS S-Type seri değerlendirilir.",
        ],
      },
      {
        heading: "Seçimde Dikkat Edilecekler",
        paragraphs: [
          "6\" sınıf içinde model seçimi; kuyunun verimi, istenen debi ve toplam basma yüksekliğine göre pompa eğrisi üzerinden yapılır. Kumlu veya korozif sularda malzeme seçimi (AISI 304 / talep üzerine AISI 316L) ayrıca değerlendirilmelidir. Kuyu bilgilerinizle teknik ekibimizden model önerisi alabilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "6 inç dalgıç pompa ne kadar su basar?",
        answer:
          "Debi modele göre değişir; 6\" modelleri de kapsayan KP ve KSX serileri toplamda 290 m³/saat debiye ve 700 m basma yüksekliğine kadar ölçeklenir. Doğru model, kuyu verimi ve ihtiyaca göre pompa eğrisinden seçilir.",
      },
      {
        question: "6 inç pompaya hangi motor takılır?",
        answer:
          "NEMA standardında 6\" dalgıç motorlar kullanılır. Kurlar KM6 HI-TEMP serisi 4 – 45 kW aralığını kapsar; su soğutmalıdır ve sarılabilir yapıdadır.",
      },
    ],
    relatedCategories: [
      { label: "Paslanmaz çelik dalgıç pompaları inceleyin (KP)", href: "/urunler/dalgic-pompalar/paslanmaz-celik" },
      { label: "Paslanmaz döküm dalgıç pompalar (KSX)", href: "/urunler/dalgic-pompalar/paslanmaz-dokum" },
      { label: "Dalgıç motor modelleri", href: "/urunler/dalgic-motorlar" },
    ],
    relatedGuides: ["4-inc-dalgic-pompa", "derin-kuyu-dalgic-pompa-secimi", "dalgic-pompa-nasil-secilir"],
    forCategories: ["dalgic-pompalar"],
  },
  {
    slug: "nema-dalgic-motor-standardi",
    h1: "NEMA Dalgıç Motor Standardı Nedir?",
    title: "NEMA Dalgıç Motor Standardı — Bağlantı Uyumu Rehberi",
    description:
      "NEMA dalgıç motor standardı nedir, pompa-motor uyumunu nasıl sağlar? Flanş ve kaplin bağlantısı, marka bağımsız eşleşme ve Kurlar üretim standardı.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "NEMA (National Electrical Manufacturers Association), elektrik ekipmanları için standartlar geliştiren ABD merkezli kuruluştur. Dalgıç motor dünyasında NEMA standardı; motorun pompaya bağlandığı flanş ve kaplin ölçülerini tanımlar. Bu sayede NEMA uyumlu bir pompa, aynı çap sınıfındaki NEMA uyumlu herhangi bir motorla eşleştirilebilir.",
    sections: [
      {
        heading: "Standart Neyi Tanımlar?",
        paragraphs: [
          "NEMA bağlantı standardı; motor flanşının ölçülerini, bağlantı cıvatalarının yerleşimini ve mil-kaplin geometrisini çap sınıfına (4\", 6\", 8\", 10\") göre tanımlar. Örneğin Kurlar KM HI-TEMP motorlarda bağlantı, NEMA standardında 4 x M12 cıvata düzeniyle yapılır.",
        ],
      },
      {
        heading: "Neden Önemli?",
        paragraphs: [
          "Standart bağlantı, kuyu ekipmanında esneklik sağlar: pompa ve motor farklı zamanlarda yenilenebilir, servis sırasında bileşenler ayrı ayrı değiştirilebilir. Alıcı açısından en pratik sonucu şudur: NEMA uyumlu 6\" bir pompa, NEMA uyumlu 6\" bir motora doğrudan monte edilebilir.",
        ],
      },
      {
        heading: "Kurlar Ürünlerinde NEMA Uyumu",
        paragraphs: [
          "Kurlar hem pompa hem motor tarafında NEMA standardıyla üretim yapar: KP, KPN, KPD ve KSX pompa serileri NEMA standardında motor bağlantısına sahiptir; KM4, KM HI-TEMP ve KMS motor serileri aynı standartta flanş bağlantısıyla üretilir. KMS serisinde 6\" NEMA standardında çift flanş üretim seçeneği de sunulur.",
        ],
      },
      {
        heading: "Montajda Dikkat Edilecekler",
        paragraphs: [
          "NEMA uyumu mekanik eşleşmeyi garanti eder; ancak setin doğru çalışması için motor gücünün pompanın ihtiyacını karşılaması, sıcaklık dayanımının kuyu koşullarına uygun olması ve soğutma akışının sağlanması gerekir. Bu kriterler pompa ve motor seçim rehberlerimizde ayrıntılı anlatılmıştır.",
        ],
      },
    ],
    faqs: [
      {
        question: "NEMA uyumlu motor her pompaya takılır mı?",
        answer:
          "Aynı çap sınıfında (örneğin 6\") NEMA uyumlu pompa ve motorlar mekanik olarak eşleşir. Güç, sıcaklık ve soğutma uyumu ise ayrıca doğrulanmalıdır.",
      },
      {
        question: "Kurlar motorları hangi bağlantıyla üretilir?",
        answer:
          "Tüm Kurlar dalgıç motorları NEMA standardında flanş bağlantısıyla üretilir; örneğin KM HI-TEMP serisinde bağlantı NEMA standardında 4 x M12'dir.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç motor modellerini inceleyin", href: "/urunler/dalgic-motorlar" },
      { label: "Dalgıç pompa modelleri", href: "/urunler/dalgic-pompalar" },
    ],
    relatedGuides: ["dalgic-motor-nedir", "dalgic-motor-nasil-secilir", "dalgic-pompa-ve-motor-secimi"],
    forCategories: ["dalgic-motorlar"],
  },
  {
    slug: "dalgic-pompada-debi-ve-basma-yuksekligi",
    h1: "Dalgıç Pompada Debi ve Basma Yüksekliği Ne Anlama Gelir?",
    title: "Dalgıç Pompada Debi ve Basma Yüksekliği — Temel Kavramlar",
    description:
      "Debi (m³/saat) ve basma yüksekliği (m) dalgıç pompa seçimini nasıl belirler? Pompa eğrisi, toplam manometrik yükseklik ve doğru okuma rehberi.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    intro:
      "Debi ve basma yüksekliği, bir dalgıç pompanın performansını tanımlayan iki temel değerdir. Debi, pompanın birim zamanda bastığı su miktarını (m³/saat); basma yüksekliği, suyun basılabildiği toplam yüksekliği (metre) ifade eder. Doğru pompa seçimi bu iki değerin birlikte okunmasıyla yapılır.",
    sections: [
      {
        heading: "Debi Nedir?",
        paragraphs: [
          "Debi, pompanın çıkışından birim zamanda geçen su hacmidir; dalgıç pompalarda genellikle m³/saat cinsinden verilir. İhtiyaç; sulanacak alan, kullanım suyu talebi veya proses gereksinimine göre hesaplanır. Kurlar ürün gamında debi, 4\" KPN serisinde 24 m³/saat'e, KP, KPD ve KSX serilerinde 290 m³/saat'e kadar çıkar.",
          "Önemli bir sınır da kuyunun kendi verimidir: kuyudan güvenle çekilebilecek su miktarı, pompanın debisinden düşükse dinamik su seviyesi pompanın altına iner ve pompa susuz kalır. Pompa debisi hiçbir zaman kuyu veriminin üzerinde seçilmemelidir.",
        ],
      },
      {
        heading: "Basma Yüksekliği (Toplam Manometrik Yükseklik) Nedir?",
        paragraphs: [
          "Basma yüksekliği; pompanın suyu ulaştırabileceği toplam yüksekliktir ve üç bileşenin toplamıdır: kuyudaki dinamik su seviyesi (suyun yüzeye taşınacağı düşey mesafe), yüzeyden kullanım noktasına kadar olan yükselti farkı ve boru hattındaki sürtünme kayıpları. Bu toplam, literatürde toplam manometrik yükseklik olarak da adlandırılır.",
          "Kurlar serilerinde maksimum basma yüksekliği KPN'de 200 m, KP, KPD ve KSX serilerinde 700 m'dir. Bu üst değerler serinin en çok kademeli modelleri içindir; her modelin kendi eğrisi esas alınır.",
        ],
      },
      {
        heading: "Pompa Eğrisi ve Çalışma Noktası",
        paragraphs: [
          "Debi ile basma yüksekliği ters ilişkilidir: pompa daha yükseğe bastıkça debisi düşer. Bu ilişki her model için pompa eğrisiyle (Q-H eğrisi) gösterilir. Sistemin ihtiyaç eğrisi ile pompa eğrisinin kesiştiği nokta çalışma noktasıdır; pompanın bu noktada verimli bölgede kalması hem enerji tüketimini hem ömrü belirler.",
        ],
      },
      {
        heading: "Seçimde Sık Yapılan Hatalar",
        paragraphs: [
          "Sürtünme kayıplarını hesaba katmamak, kuyunun statik seviyesini dinamik seviye yerine kullanmak ve pompayı 'garanti olsun' diye büyük seçmek en sık hatalardır. Büyük seçilen pompa, eğrisinin verimsiz bölgesinde çalışır ve kuyuyu boşaltabilir. Debi ve basma yüksekliği değerlerinizi doğru belirleyip model seçimini pompa eğrisi üzerinden yapın; emin olmadığınız durumda teknik ekibimize danışın.",
        ],
      },
    ],
    faqs: [
      {
        question: "Debi ve basma yüksekliği neden birlikte değerlendirilir?",
        answer:
          "İkisi ters ilişkilidir: pompa daha yükseğe bastıkça debisi düşer. Bir pompanın '290 m³/saat' ve '700 m' değerleri aynı anda geçerli değildir; gerçek performans, modelin Q-H eğrisindeki çalışma noktasından okunur.",
      },
      {
        question: "Toplam manometrik yükseklik nasıl hesaplanır?",
        answer:
          "Dinamik su seviyesi + yüzeydeki yükselti farkı + boru hattı sürtünme kayıpları toplanır. Sürtünme kayıpları boru çapı, uzunluğu ve debiyle değişir.",
      },
    ],
    relatedCategories: [
      { label: "Dalgıç pompa modellerini inceleyin", href: "/urunler/dalgic-pompalar" },
    ],
    relatedGuides: [
      "dalgic-pompa-nasil-secilir",
      "derin-kuyu-dalgic-pompa-secimi",
      "dalgic-pompa-calisma-prensibi",
    ],
    forCategories: ["dalgic-pompalar"],
  },
];

/** /rehber/<slug> path listesi (SSR route çözümü ve sitemap için). */
export const guidePaths: string[] = guides.map((g) => `/rehber/${g.slug}`);

export function getGuideBySlug(slug: string): GuideDef | undefined {
  return guides.find((g) => g.slug === slug);
}

/** Kategori sayfasındaki "İlgili Rehberler" bölümü için. */
export function guidesForCategory(categorySlug: string): GuideDef[] {
  return guides.filter((g) => g.forCategories.includes(categorySlug as GuideDef["forCategories"][number]));
}
