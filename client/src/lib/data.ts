
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
  specsImage?: string;
  mechanicalPartsImages?: { title: string; image: string }[];
  applications?: string[];
  faq?: { question: string; answer: string }[];
  downloads?: { name: string; url: string }[];
  availableSizes?: string; // Added available sizes field
  options?: string[];
}

export const products: Product[] = [
  // 1. Paslanmaz Çelik Dalgıç Pompalar (KP)
  {
    id: 'kp',
    name: 'Paslanmaz Çelik Dalgıç Pompalar (KP)',
    shortName: 'KP Serisi',
    category: 'pump',
    subCategory: 'Paslanmaz Çelik',
    availableSizes: '4” | 6” | 8” | 10”',
    image: '/assets/products/kp1.png',
    gallery: [
        '/assets/products/kp1.png',
        '/assets/products/kp2.png',
        '/assets/products/kp3.png'
    ],
    description: 'Kurlar tarafından üretilen paslanmaz çelik dalgıç pompalar, korozyona dayanıklı yapısı sayesinde uzun ömürlü ve güvenilir performans sunar.',
    longDescription: `Kurlar tarafından üretilen paslanmaz çelik dalgıç pompalar, korozyona dayanıklı yapısı sayesinde uzun ömürlü ve güvenilir performans sunar. Tarımsal sulama, endüstriyel su temini ve yer altı suyu tahliyesi gibi zorlu uygulamalar için idealdir. Yüksek verimlilik ve bakım kolaylığı ile suyun olduğu her alanda maksimum dayanım sağlar.`,
    mechanicalPartsImages: [
        { title: '4" Mekanik Parçalar', image: '/assets/details/4inc-mech.png' },
        { title: '6" Mekanik Parçalar', image: '/assets/details/6inc-mech.png' },
        { title: '8" - 10" Mekanik Parçalar', image: '/assets/details/8inc-mech.png' }
    ],
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
    faq: [
      {
        question: "Dalgıç pompa nedir ve nasıl çalışır?",
        answer: "Dalgıç pompa, sıvıların belirli bir derinlikten yüzeye çıkarılması için kullanılan, tamamı sıvı içinde çalışan motorlu bir pompa türüdür. Özellikle su temini, drenaj, atık su yönetimi gibi alanlarda kullanılır. Çalışma prensibi, motorun sıvının içinde çalışarak emiş gücüyle sıvıyı yukarı taşımasıdır."
      },
      {
        question: "Paslanmaz çelik dalgıç pompa neden tercih edilir?",
        answer: "Paslanmaz çelik dalgıç pompalar, korozyona karşı yüksek dayanıklılık gösterdiği için özellikle kimyasal içerikli veya aşındırıcı sıvılarda tercih edilir. Uzun ömürlü yapıları sayesinde endüstriyel uygulamalarda güvenle kullanılabilir."
      },
      {
        question: "Dalgıç pompa nerelerde kullanılır?",
        answer: "Dalgıç pompalar; tarımsal sulama, kuyu suyu temini, inşaat sahaları, foseptik tahliyesi, balık çiftlikleri ve endüstriyel prosesler gibi birçok alanda kullanılır. Özellikle zorlu çevre koşullarında etkin performans göstermeleriyle bilinirler."
      },
      {
        question: "Dalgıç pompa seçimi yaparken nelere dikkat edilmelidir?",
        answer: "Dalgıç pompa seçiminde sıvının cinsi, debi ihtiyacı, pompalama yüksekliği, enerji verimliliği ve pompanın gövde malzemesi gibi faktörler dikkate alınmalıdır. Uzun ömür ve güvenli kullanım için profesyonel destekle doğru model seçimi önemlidir."
      },
      {
        question: "Endüstriyel dalgıç pompaların avantajları nelerdir?",
        answer: "Endüstriyel dalgıç pompalar yüksek kapasiteli çalışmaları destekler, enerji verimliliği sağlar ve bakım gereksinimi düşüktür. Paslanmaz çelik modeller ise agresif ortamlarda uzun süreli dayanıklılık sunar."
      },
      {
        question: "Dalgıç pompa arızaları nasıl önlenebilir?",
        answer: "Dalgıç pompa arızalarını önlemek için düzenli bakım yapılmalı, filtre temizliği aksatılmamalı ve pompa her zaman uygun koşullarda çalıştırılmalıdır. Ayrıca, paslanmaz çelik dalgıç pompa gibi dayanıklı modeller tercih edilerek olası korozyon ve yıpranma sorunları minimize edilebilir."
      },
      {
        question: "Paslanmaz çelik dalgıç pompaların bakım ihtiyacı nasıldır?",
        answer: "Paslanmaz çelik dalgıç pompalar, sağlam gövde yapısı sayesinde düşük bakım gereksinimi sunar. Ancak yüksek verimlilik ve uzun ömür için düzenli olarak filtre temizliği yapılmalı, sızdırmazlık elemanları kontrol edilmelidir. Özellikle kumlu veya partiküllü sıvılarla çalışan sistemlerde periyodik bakım aralıkları sıklaştırılmalıdır."
      },
      {
        question: "Paslanmaz çelik dalgıç pompalar tuzlu suya dayanıklı mı?",
        answer: "Paslanmaz çelik dalgıç pompalar, genel olarak korozyona karşı yüksek direnç gösterse de, her paslanmaz çelik tipi tuzlu suya karşı aynı dayanıklılığı göstermez. Deniz suyu gibi yüksek klor ve tuz içeren ortamlarda AISI 316L gibi özel alaşımlar tercih edilmelidir."
      }
    ],
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
    availableSizes: '4"',
    image: '/assets/products/kpn41.png',
    gallery: [
        '/assets/products/kpn41.png',
        '/assets/products/kpn42.png',
        '/assets/products/kpn43.png'
    ],
    description: '4” Kurlar Noryl Dalgıç Pompa çarkları ve difüzörleri, mükemmel tasarımları sayesinde yüksek hidrolik verimlilik ve performans sunar.',
    longDescription: `4” Kurlar Noryl Dalgıç Pompa çarkları ve difüzörleri, mükemmel tasarımları sayesinde yüksek hidrolik verimlilik ve performans sunar; ayrıca yüzer fan sistemi sayesinde kum ve aşındırıcı maddelere karşı mükemmel bir koruma sağlamaktadır. Paslanmaz çelikten üretilen süzgeç, 50 g/m³ olarak belirlenen boyutun üzerindeki parçaların pompanın içine girmesini önleyerek, pompanın ömrünü uzatmaktadır. Yatay ve dikey kurulum pozisyonuna uygundur. Çıkış haznesi bağlantısı hem NPT hem BSP uygun olup, NEMA standartlarına göre motor bağlantısına uygun tasarlanmıştır.`,
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
    faq: [
      {
        question: "Noryl dalgıç pompa nedir?",
        answer: "Noryl dalgıç pompalar, gövdesi veya fanları ısıya ve kimyasallara dayanıklı Noryl plastik malzemeden üretilen hafif ve ekonomik dalgıç pompa türleridir. Özellikle temiz su transferi ve evsel kullanım için idealdir."
      },
      {
        question: "Noryl pompaların avantajları nelerdir?",
        answer: "Metal gövdelere göre daha ekonomik fiyatlıdır ve hafiftir, bu da montaj kolaylığı sağlar. Yüzer fan sistemi sayesinde kum ve aşındırıcılara karşı dirençlidir."
      },
      {
        question: "Noryl pompa nerelerde kullanılır?",
        answer: "Temiz su temini, evsel su kullanımı, hafif ve orta yoğunlukta sıvı transferlerinde kullanılır. 35°C'ye kadar olan sularda performans gösterir."
      },
      {
        question: "Dalgıç pompa arızaları nasıl önlenebilir?",
        answer: "Düzenli bakım, filtre temizliği ve uygun çalışma koşullarının sağlanması arızaları önler. Pompanın susuz çalıştırılmaması kritiktir."
      }
    ],
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
    availableSizes: '5" | 6” | 7" | 8” | 9" | 10”',
    image: '/assets/products/kpd1.png',
    gallery: [
       '/assets/products/kpd1.png',
       '/assets/products/kpd2.png',
       '/assets/products/kpd3.png'
    ],
    description: 'KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Pik Döküm Dalgıç Pompalar tamamen pik döküm malzemeden yapılmıştır.',
    longDescription: `KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Pik Döküm Dalgıç Pompalar tamamen pik döküm (talep üzerine pompalar komple bronz malzemeden üretilebilmektedir) malzemeden yapılmıştır. Tamamen pik döküm olarak imal edilen difüzörler, fanlar, emiş ve çıkış haznesi korozyona karşı son derece dayanıklı kılar. Tasarım ve malzeme özellikleriyle yüksek verimlilik, yüksek dayanıklık, uzun ömür ve istikrarlı performans sağlamaktadır. Yatay ve dikey kurulum pozisyonuna uygundur. NEMA standartlarına göre motor bağlantısına uygundur.`,
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
    faq: [
      {
        question: "Pik döküm dalgıç pompa özellikleri nelerdir?",
        answer: "Pik döküm pompalar, ağır hizmet tipi kullanımlar için tasarlanmıştır. Mekanik darbelere karşı dayanıklı, sağlam yapılı ve uzun ömürlüdürler. Genellikle tarımsal ve endüstriyel alanlarda tercih edilirler."
      },
      {
        question: "Pik döküm pompaların paslanmaz pompalardan farkı nedir?",
        answer: "Pik döküm pompalar daha ekonomik bir çözüm sunarken, mekanik dayanıklılıkları yüksektir. Ancak korozyon direnci paslanmaz çelik kadar yüksek değildir, bu nedenle aşırı korozif sıvılarda paslanmaz veya bronz modeller tercih edilmelidir."
      },
      {
        question: "Bakım periyotları nasıldır?",
        answer: "Mekanik yapısı sağlam olsa da, düzenli aralıklarla süzgeç temizliği ve yağ kontrolü yapılmalıdır. Kumlu sularda bakım sıklığı artırılmalıdır."
      }
    ],
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
    availableSizes: '6” | 8” | 10”',
    image: '/assets/products/ksx1.png',
    gallery: [
      '/assets/products/ksx1.png',
      '/assets/products/ksx2.png'
    ],
    description: 'KSX 6″-8-“10” Kurlar Paslanmaz Döküm Dalgıç Pompalar tamamen AISI 304 döküm malzemeden yapılmıştır.',
    longDescription: `KSX 6″-8-“10” Kurlar Paslanmaz Döküm Dalgıç Pompalar tamamen AISI 304 döküm (talep üzerine pompalar komple AISI 316L malzemeden üretilebilmektedir) malzemeden yapılmıştır. Tamamen paslanmaz çelik olarak imal edilen difüzörler, fanlar, emiş ve çıkış haznesi, süzgeç korozyona karşı son derece dayanıklı kılar. Tasarım ve malzeme özellikleriyle yüksek verimlilik, yüksek dayanıklık, uzun ömür ve istikrarlı performans sağlamaktadır. Yatay ve dikey kurulum pozisyonuna uygundur. NEMA standartlarına göre motor bağlantısına uygundur.`,
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
    faq: [
      {
        question: "Paslanmaz döküm pompa nerede kullanılır?",
        answer: "Agresif kimyasallar, deniz suyu veya yüksek korozyon riski taşıyan endüstriyel sıvılarda kullanılır. Döküm yapısı sayesinde hem mekanik hem de kimyasal dayanıklılığı çok yüksektir."
      },
      {
        question: "Neden AISI 304 döküm tercih edilmeli?",
        answer: "Standart paslanmaz çelik saclara göre döküm malzeme çok daha kalın ve rijit bir yapı sunar. Bu da pompanın en zorlu koşullarda bile formunu korumasını ve uzun yıllar hizmet vermesini sağlar."
      },
      {
        question: "Deniz suyunda kullanılabilir mi?",
        answer: "Evet, özellikle AISI 316L opsiyonu ile deniz suyu ve tuzlu su uygulamalarında mükemmel sonuç verir."
      }
    ],
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
    availableSizes: '4"',
    image: '/assets/products/km41.png',
    gallery: [
        '/assets/products/km41.png'
    ],
    description: 'Yağlı Tip Dalgıç Motorlar, yağ soğutmalı geri sarılabilir motorlardır (gıdada kullanılan toksik olmayan yağ).',
    longDescription: `Yağlı Tip Dalgıç Motorlar, yağ soğutmalı geri sarılabilir motorlardır (gıdada kullanılan toksik olmayan yağ). Gürültüsüz çalışır ve uzun ömürlü hizmet sağlamaktadır. Hem yatay hem dikey çalışmaya uygundur. Boyutları ve NEMA standartlarına göre uygun flanş bağlantısı bulunmaktadır.`,
    features: [
      'Uzun Süreli Kullanım',
      'Yüksek Performans',
      'NEMA Standartlarına Uygun Pompa Bağlantısı',
      'IP 68 Koruma'
    ],
    specsImage: '/assets/details/km4-specs.png',
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
    faq: [
      {
        question: "Yağlı tip dalgıç motor nedir?",
        answer: "Motorun soğutulması ve yatakların yağlanması için gıdaya uygun özel bir yağ kullanılan dalgıç motor türüdür. Sessiz çalışır ve uzun ömürlüdür."
      },
      {
        question: "Kullanılan yağ çevreye zararlı mı?",
        answer: "Hayır, motorlarımızda kullanılan yağlar toksik olmayan (non-toxic), gıda tüzüğüne uygun ve çevre dostu yağlardır. İçme suyu kuyularında güvenle kullanılabilir."
      },
      {
        question: "Sarılabilir motor ne demektir?",
        answer: "Motor sargılarının arıza durumunda yenilenebilir (tekrar sarılabilir) olmasıdır. Bu özellik, motorun ömrünü uzatır ve servis maliyetlerini düşürür."
      }
    ],
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
    availableSizes: '6" | 7" | 8" | 10"',
    image: '/assets/products/km2.png',
    gallery: [
        '/assets/products/km2.png',
        '/assets/products/km1.png',
        '/assets/products/km3.png'
    ],
    description: '6”-7”-8”-10” HI-TEMP (60°C) Sarılabilir Dalgıç Motorlar ISO 9001 sertifikalı tesislerimizde üretilmiştir.',
    longDescription: `6”-7”-8”-10” HI-TEMP (60°C) Sarılabilir Dalgıç Motorlar ISO 9001 sertifikalı tesislerimizde düşük işletme maliyeti için özel izolasyonulu Bobin Teli (PBN) ile yüksek sıcaklığa özel üretilmiştir.  Su soğutmalı 6″ HI-TEMP (60°C) Sarılabilir Dalgıç Motorlar özel basınç dengeleyici çek-valf, diyafram, kum çanı, su ile yağlamalı yüksek dayanım gösteren eksenel ve radyal yataklar ile donatılmıştır. Motorlar, -15°C’ye kadar muhafaza edilmek için saf su ve gliserin karışımı ile doldurulmuştur.`,
    features: [
      'Yüksek verim, düşük işletme maliyeti',
      'Yüksek sıcaklığa özel PBN bobin teli',
      'Standart motorlara göre daha uzun ömür',
      'Su soğutmalı dalgıç motor yapısı',
      'Voltaj dalgalanmalarına karşı yüksek direnç',
      'Paslanmaz çelik motor mili & NBR kum çanı'
    ],
    options: [
      'Komple AISI 304, 316 veya DUBLEX üretim',
      '6’’ NEMA çift flanş üretim seçeneği',
      'PT100 sensör opsiyonu',
      'İçme suyu mevzuatına uygun kablo (VDE, ACS, KTW)',
      '100m’ye kadar özel kablo üretimi',
      'Direkt veya yıldız/üçgen yol verme',
      '4 damarlı kablo (3 faz + topraklama)',
      '500V, 525V, 630V, 1000V uyumlu üretim',
      'SIC/SIC-NBR-304 mekanik keçe seçeneği',
      'Maksimum 75°C ve 90°C sıcaklık opsiyonu'
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
    faq: [
      {
        question: "HI-TEMP motorların özelliği nedir?",
        answer: "Standart dalgıç motorlar genellikle 30-35°C su sıcaklığına kadar çalışırken, HI-TEMP motorlar özel izolasyonlu PBN bobin telleri sayesinde 60°C ve üzeri sıcaklıklardaki sularda sorunsuz çalışabilir."
      },
      {
        question: "Jeotermal kuyularda kullanılabilir mi?",
        answer: "Evet, yüksek sıcaklık dayanımı sayesinde jeotermal kuyular ve sıcak su kaynakları için en ideal çözümdür."
      },
      {
        question: "Su soğutmalı sistemin avantajı nedir?",
        answer: "Çevre dostudur ve motorun verimli bir şekilde soğutulmasını sağlar. Ayrıca özel karışım sıvısı ile donmaya karşı da koruma sağlar."
      }
    ],
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
    availableSizes: '6" | 7" | 8"',
    image: '/assets/products/kms11.png',
    gallery: [
        '/assets/products/kms11.png'
    ],
    description: '6”-7”-8”-10” HI-TEMP (60°C) Sarılabilir Dalgıç Motorlar ISO 9001 sertifikalı tesislerimizde üretilmiştir.',
    longDescription: `6”-7”-8”-10” HI-TEMP (60°C) Sarılabilir Dalgıç Motorlar ISO 9001 sertifikalı tesislerimizde düşük işletme maliyeti için özel izolasyonulu Bobin Teli (PBN) ile yüksek sıcaklığa özel üretilmiştir.  Su soğutmalı 6″ HI-TEMP (60°C) Sarılabilir Dalgıç Motorlar özel basınç dengeleyici çek-valf, diyafram, kum çanı, su ile yağlamalı yüksek dayanım gösteren eksenel ve radyal yataklar ile donatılmıştır. Motorlar, -15°C’ye kadar muhafaza edilmek için saf su ve gliserin karışımı ile doldurulmuştur.`,
    features: [
      'Düşük işletme maliyeti için yüksek verimli dizayn',
      'Yüksek sıcaklık için özel izolasyonlu bobin teli (PBN)',
      'Standart motorlara göre daha uzun ömürlü',
      'Su soğutmalı dalgıç motor',
      'Voltaj dalgalanmalarına karşı yüksek dayanım',
      'Paslanmaz çelik motor mili'
    ],
    options: [
      'Motorlar AISI 304, AISI 316 veya DUBLEX olarak üretilebilir',
      '6” NEMA standardında çift flanş üretim seçeneği',
      'PT100 sensör entegrasyonu',
      'İçme suyu mevzuatına uygun kablo seçeneği (VDE, ACS, KTW onaylı)',
      '100 metreye kadar özel kablo üretimi',
      'Direkt veya yıldız/üçgen yol verme',
      '4 damarlı kablo üretimi (3 faz + 1 topraklama)',
      '500V, 525V, 630V ve 1000V’a uygun üretim',
      'Mekanik keçe SIC/SIC-NBR-304 olarak üretilebilir',
      'Maksimum 75°C ve 90°C sıcaklık opsiyonları'
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
    faq: [
      {
        question: "S-Type motorların farkı nedir?",
        answer: "S-Type motorlar, enerji verimliliği ve düşük işletme maliyeti odaklı tasarlanmıştır. Özel bobin yapısı ve hidrolik tasarımı ile standart motorlara göre daha az enerji tüketir ve daha uzun ömürlüdür."
      },
      {
        question: "Hangi voltaj aralıklarında çalışır?",
        answer: "380-415V aralığında çalışır ve voltaj dalgalanmalarına karşı yüksek dayanım gösterir. Ayrıca frekans konvertörü ile hız kontrolü yapılabilir."
      }
    ],
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
