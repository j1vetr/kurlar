
export interface Product {
  id: string;
  name: string;
  shortName?: string;
  category: 'pump' | 'motor';
  subCategory: string;
  image: string;
  gallery?: string[];
  description: string;
  longDescription?: string;
  features?: string[];
  specs?: Record<string, string>;
  applications?: string[];
  downloads?: { name: string; url: string }[];
}

export const products: Product[] = [
  // 1. Paslanmaz Çelik Dalgıç Pompalar (KP)
  {
    id: 'kp',
    name: 'Paslanmaz Çelik Dalgıç Pompalar (KP)',
    shortName: 'KP Serisi',
    category: 'pump',
    subCategory: 'Paslanmaz Çelik',
    image: '/assets/gallery/galeri6pompa.png',
    gallery: [
        '/assets/gallery/galeri6pompa.png',
        '/assets/gallery/galeri5pompa.png',
        '/assets/gallery/galeri4pompa.png'
    ],
    description: 'Tamamen AISI 304 paslanmaz çelikten üretilmiş, korozyona dayanıklı, yüksek verimli dalgıç pompalar.',
    longDescription: `4″ – 6″ – 8″ – 10″ Kurlar Paslanmaz Çelik Dalgıç Pompalar tamamen AISI 304 (talep üzerine pompalar komple AISI 316L malzemeden üretilebilmektedir) malzemeden yapılmıştır.

Tamamen paslanmaz çelik olarak imal edilen difüzörler, fanlar, emiş ve çıkış haznesi ile süzgeç, korozyona karşı son derece dayanıklıdır. Tasarım ve malzeme özellikleri sayesinde yüksek verimlilik, uzun ömür, yüksek dayanıklılık ve istikrarlı performans sunmaktadır.

Yatay ve dikey kurulum pozisyonuna uygundur. Kurlar Paslanmaz Çelik Dalgıç Pompaları, NEMA standartlarına göre motor bağlantısına uygundur.`,
    features: [
      'Uzun süreli ve güvenilir kullanım',
      'Yüksek performanslı çalışma',
      'Kolay bakım ve pratik montaj imkânı',
      'NEMA standartlarına uygun motor bağlantısı',
      'Aşınmaya dirençli, su ile yağlanan yataklar',
      'Hem yatay hem de dikey çalışmaya uygun tasarım'
    ],
    specs: {
      'Maksimum Kapasite': '290 m³/saat',
      'Maksimum Basma Yüksekliği': '700m',
      'Maksimum Kum Miktarı': '50g/m³',
      'Maksimum Su Sıcaklığı': '60°C',
      'Maksimum Daldırma': '300m',
      'Koruma Sınıfı': 'IP68',
      'Çıkış Bağlantısı': 'BSP & NPT',
      'Fan Malzemesi': 'AISI 304',
      'Mil & Kaplin': 'AISI 304',
      'Difüzör': 'AISI 304',
      'Süzgeç': 'AISI 304'
    },
    applications: [
      'Sivil ve endüstriyel su temin sistemleri',
      'Tarımsal sulama sistemleri',
      'Basınç yükseltme uygulamaları'
    ]
  },

  // 2. Noryl Dalgıç Pompalar (KPN)
  {
    id: 'kpn',
    name: 'Noryl Dalgıç Pompalar (KPN)',
    shortName: 'KPN Serisi',
    category: 'pump',
    subCategory: 'Noryl',
    image: '/assets/gallery/galeri9pompa.png',
    gallery: [
        '/assets/gallery/galeri9pompa.png',
        '/assets/gallery/galeri8pompa.png'
    ],
    description: 'Yüksek hidrolik verimlilik ve kum koruması sağlayan özel tasarımlı Noryl fanlı pompalar.',
    longDescription: `4” Kurlar Noryl Dalgıç Pompa, özel olarak tasarlanmış fanları ve difüzörleri yapılanması sayesinde yüksek hidrolik verimlilik ve performans sunar. Yüzer fan sistemi ile kum ve diğer aşındırıcı maddelere karşı güçlü bir koruma sağlar.

Paslanmaz çelikten üretilmiş süzgeci sayesinde, 50 g/m³ üzerindeki parçaların pompa içine girmesi engellenerek sistemin uzun ömürlü çalışması desteklenir. Ürün hem yatay hem de dikey kurulumlara uygundur.`,
    features: [
      'Uzun süreli ve güvenilir kullanım',
      'Yüksek performanslı çalışma',
      'Kolay bakım ve pratik montaj imkânı',
      'NEMA standartlarına uygun motor bağlantısı',
      'Aşınmaya dirençli, su ile yağlanan yataklar',
      'Hem yatay hem de dikey çalışmaya uygun tasarım'
    ],
    specs: {
      'Maksimum Kapasite': '24 m³/saat',
      'Maksimum Basma Yüksekliği': '200 m',
      'Maksimum Kum Miktarı': '50g/m³',
      'Maksimum Pompa Çapı': '98 mm',
      'Maksimum Su Sıcaklığı': '35°C',
      'Maksimum Daldırma': '300m',
      'Koruma Sınıfı': 'IP68',
      'Çıkış Bağlantısı': 'NPT & BSP',
      'Difüzör': 'Noryl',
      'Fan': 'Noryl'
    },
    applications: [
      'Sivil ve endüstriyel su temin sistemleri',
      'Tarımsal sulama sistemleri'
    ]
  },

  // 3. Pik Döküm Dalgıç Pompalar (KPD)
  {
    id: 'kpd',
    name: 'Pik Döküm Dalgıç Pompalar (KPD)',
    shortName: 'KPD Serisi',
    category: 'pump',
    subCategory: 'Pik Döküm',
    image: '/assets/gallery/galeri10pompa.png',
    gallery: [
       '/assets/gallery/galeri10pompa.png'
    ],
    description: 'Zorlu koşullara dayanıklı, tamamen pik döküm malzemeden üretilmiş ağır hizmet tipi pompalar.',
    longDescription: `KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Pik Döküm Dalgıç Pompalar tamamen pik döküm (talep üzerine pompalar komple bronz malzemeden üretilebilmektedir) malzemeden yapılmıştır.

Tamamen pik döküm olarak imal edilen difüzörler, fanlar, emiş ve çıkış haznesi, yapıyı korozyona karşı son derece dayanıklı kılar. Tasarımı ve malzeme özellikleri sayesinde yüksek verimlilik, yüksek dayanıklılık, uzun ömür ve istikrarlı performans sağlar.`,
    features: [
      'Uzun süreli kullanım',
      'Yüksek performans',
      'NEMA standartlarına uygun motor bağlantısı',
      'Aşınmaya dirençli, su ile yağlanan yataklar',
      'Yatay ve dikey çalışmaya uygun tasarım'
    ],
    specs: {
      'Maksimum Kapasite': '290 m³/saat',
      'Maksimum Basma Yüksekliği': '700m',
      'Maksimum Kum Miktarı': '50g/m³',
      'Maksimum Su Sıcaklığı': '30°C',
      'Maksimum Daldırma': '300m',
      'Koruma Sınıfı': 'IP68',
      'Difüzör': 'GG 20',
      'Fan': 'GG 20',
      'Mil & Kaplin': 'AISI 420'
    },
    applications: [
      'Sivil ve endüstriyel su temini sistemleri',
      'Tarımsal sulama alanları',
      'Basınç yükseltme sistemleri',
      'Rezervuar veya kuyulardan su temini'
    ]
  },

  // 4. Paslanmaz Döküm Dalgıç Pompalar (KSX)
  {
    id: 'ksx',
    name: 'Paslanmaz Döküm Dalgıç Pompalar (KSX)',
    shortName: 'KSX Serisi',
    category: 'pump',
    subCategory: 'Paslanmaz Döküm',
    image: '/assets/gallery/ksxgal3.png',
    gallery: [
      '/assets/gallery/ksxgal3.png',
      '/assets/gallery/ksxgal2.png'
    ],
    description: 'AISI 304 döküm paslanmaz çelik yapısıyla en zorlu ve agresif sıvılar için üstün çözüm.',
    longDescription: `KSX 6″ – 8″ – 10″ Kurlar Paslanmaz Döküm Dalgıç Pompalar tamamen AISI 304 döküm malzemeden üretilmiştir. Talep üzerine, pompalar komple AISI 316L malzemeden de üretilebilmektedir.

Paslanmaz çelikten döküm olarak imal edilen difüzörler, fanlar, emiş ve çıkış haznesi, süzgeç, korozyona karşı yüksek dayanıklılık sağlar. Tasarım ve malzeme kalitesi sayesinde yüksek verimlilik, uzun ömür, yüksek dayanıklılık ve istikrarlı performans sunar.`,
    features: [
      'Uzun süreli kullanım',
      'Yüksek performans',
      'NEMA standartlarına uygun motor bağlantısı',
      'Aşınmaya dirençli, su ile yağlanan yataklar',
      'Yatay ve dikey çalışmaya uygun tasarım'
    ],
    specs: {
      'Maksimum Kapasite': '290 m³/saat',
      'Maksimum Basma Yüksekliği': '700m',
      'Maksimum Kum Miktarı': '50g/m³',
      'Maksimum Su Sıcaklığı': '60°C',
      'Maksimum Daldırma': '300m',
      'Koruma Sınıfı': 'IP68',
      'Çıkış Bağlantısı': 'BSP & NPT & FLANGE DN',
      'Difüzör': 'AISI 304 Döküm',
      'Fan': 'AISI 304 Döküm'
    },
    applications: [
      'Sivil ve endüstriyel su temini sistemleri',
      'Tarımsal alanlara su temini',
      'Basınç yükseltme uygulamaları',
      'Rezervuar veya kuyulardan su temini'
    ]
  },

  // 5. Yağlı Tip Dalgıç Motorlar (KM4)
  {
    id: 'km4',
    name: 'Yağlı Tip Dalgıç Motorlar (KM4)',
    shortName: 'KM4 Serisi',
    category: 'motor',
    subCategory: 'Yağlı Tip',
    image: '/assets/gallery/galeri7pompa.png', // Using generic motor image
    gallery: [
        '/assets/gallery/galeri7pompa.png'
    ],
    description: 'Gıdaya uygun yağ soğutmalı, sessiz çalışan ve geri sarılabilir 4" dalgıç motorlar.',
    longDescription: `Yağ soğutmalı, geri sarılabilir motorlardır. Kullanılan yağ, gıdaya uygun ve toksik olmayan yapıdadır. Sessiz çalışır ve uzun ömürlü performans sunar. Yatay ve dikey çalışma pozisyonlarına uygundur. Motor boyutları ve bağlantı flanşı, NEMA standartlarına uygun olarak tasarlanmıştır.`,
    features: [
      'Uzun Süreli Kullanım',
      'Yüksek Performans',
      'NEMA Standartlarına Uygun Pompa Bağlantısı',
      'IP 68 Koruma'
    ],
    specs: {
      'Güç Aralığı': '0.37 – 7.5 kW',
      'Maksimum Sıvı Sıcaklığı': '+35 °C',
      'Maksimum Daldırma': '200 metre',
      'Yol Verme Kapasitesi': '24 kez/saat',
      'Koruma Sınıfı': 'IP68',
      'İzolasyon Sınıfı': 'F',
      'Motor Tipi': '2 kutuplu, 50 Hz (n ≈ 2900 rpm)',
      'Voltaj (Monofaz)': '210 – 220 – 230 V',
      'Voltaj (Trifaz)': '380 – 400 – 415 V'
    },
    applications: [
      'Tarımsal sulama',
      'Endüstriyel su temini'
    ]
  },

  // 6. HI-TEMP Dalgıç Motorlar (KM)
  {
    id: 'km',
    name: 'HI-TEMP Dalgıç Motorlar (KM)',
    shortName: 'KM Serisi',
    category: 'motor',
    subCategory: 'HI-TEMP',
    image: '/assets/gallery/galeri6pompa.png', // Using generic motor image
    gallery: [
        '/assets/gallery/galeri6pompa.png'
    ],
    description: 'Yüksek sıcaklıklarda (60°C+) çalışabilen, PBN bobin telli, su soğutmalı özel motorlar.',
    longDescription: `6”-7”-8”-10” HI-TEMP (60°C) Sarılabilir Dalgıç Motorlar ISO 9001 sertifikalı tesislerimizde, yüksek sıcaklıklarda düşük işletme maliyeti hedefiyle özel PBN bobin teli ile üretilmiştir.

Su soğutmalı yapısıyla 6″ ve üzeri çapta kuyular için idealdir. Basınç dengeleyici çek-valf, diyafram, kum çanı ve dayanıklı yataklarla donatılmıştır. -15°C’ye kadar saf su + gliserin karışımı ile koruma altına alınmıştır.`,
    features: [
      'Yüksek verim, düşük işletme maliyeti',
      'Yüksek sıcaklığa özel PBN bobin teli',
      'Standart motorlara göre daha uzun ömür',
      'Su soğutmalı dalgıç motor yapısı',
      'Voltaj dalgalanmalarına karşı yüksek direnç',
      'Paslanmaz çelik motor mili & NBR kum çanı'
    ],
    specs: {
      'Güç Aralığı': 'kW’tan 260kW’a (5.5HP’den 350HP’ye) kadar',
      'Bağlantı': 'NEMA Standartlarına Uygun',
      'Malzeme Opsiyonu': 'AISI 304 - AISI 316 - BRONZE - DUBLEX',
      'Soğutma Sistemi': 'Su ile Soğutmalı Sistem',
      'Kurulum Pozisyonu': 'Dikey ve Yatay',
      'Standart Voltaj': '380/415V – 50/60Hz',
      'Hız Ayarı': 'Frekans Konvertörü Uyumlu'
    },
    applications: [
      'Jeotermal kuyular',
      'Sıcak su kaynakları',
      'Endüstriyel prosesler'
    ]
  },

  // 7. S-Type Dalgıç Motorlar (KMS)
  {
    id: 'kms',
    name: 'S-Type Dalgıç Motorlar (KMS)',
    shortName: 'KMS Serisi',
    category: 'motor',
    subCategory: 'S-Type',
    image: '/assets/gallery/galeri5pompa.png', // Using generic motor image
    gallery: [
        '/assets/gallery/galeri5pompa.png'
    ],
    description: 'Düşük işletme maliyeti ve yüksek verimlilik için özel tasarlanmış su soğutmalı motorlar.',
    longDescription: `6”-7”-8” S-TYPE Dalgıç Motorlar ISO 9001 sertifikalı tesislerimizde düşük işletme maliyeti sağlamak amacıyla özel izolasyonlu PBN bobin teli ile yüksek sıcaklıklara dayanıklı olarak üretilmiştir.

Su soğutmalı yapısıyla, motorlar özel basınç dengeleyici çek-valf, diyafram, kum çanı, su ile yağlamalı eksensel ve radyal yataklar ile donatılmıştır.`,
    features: [
      'Düşük işletme maliyeti için yüksek verimli dizayn',
      'Yüksek sıcaklık için özel izolasyonlu bobin teli (PBN)',
      'Standart motorlara göre daha uzun ömürlü',
      'Su soğutmalı dalgıç motor',
      'Voltaj dalgalanmalarına karşı yüksek dayanım',
      'Paslanmaz çelik motor mili'
    ],
    specs: {
      'Güç Aralığı': 'kW’tan 260kW’a (5.5HP’den 350HP’ye) kadar',
      'Bağlantı': 'NEMA Standartlarına Uygun',
      'Malzeme Opsiyonu': 'AISI 304 - AISI 316 - BRONZE - DUBLEX',
      'Soğutma Sistemi': 'Su ile Soğutmalı Sistem',
      'Kurulum Pozisyonu': 'Dikey ve Yatay',
      'Standart Voltaj': '380/415V – 50/60Hz',
      'Hız Ayarı': 'Frekans Konvertörü Uyumlu'
    },
    applications: [
      'İçme suyu temini',
      'Sulama sistemleri',
      'Dar çaplı kuyular'
    ]
  }
];

export const categories = [
  {
    id: 'pumps',
    category: 'pump',
    title: 'Dalgıç Pompalar',
    description: 'Paslanmaz, Noryl ve Döküm seçenekleriyle her ihtiyaca uygun profesyonel çözümler.',
    image: '/assets/gallery/galeri6pompa.png',
    subCategories: ['Paslanmaz Çelik', 'Noryl', 'Pik Döküm', 'Paslanmaz Döküm']
  },
  {
    id: 'motors',
    category: 'motor',
    title: 'Dalgıç Motorlar',
    description: 'Yüksek verimli, uzun ömürlü ve güçlü motor teknolojileri.',
    image: '/assets/gallery/galeri7pompa.png',
    subCategories: ['Yağlı Tip', 'HI-TEMP', 'S-Type']
  }
];
