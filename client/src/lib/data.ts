
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
// Helper to get product data with language
export const getProductWithLanguage = (product: Product, lang: 'TR' | 'EN' | 'AR' | 'ES' | 'PT') => {
  const desc = descriptions[product.id as keyof typeof descriptions];
  if (!desc || !desc[lang]) return product;

  return {
    ...product,
    description: desc[lang].description,
    longDescription: desc[lang].longDescription,
    features: desc[lang].features,
    options: desc[lang].options || product.options
  };
};

const descriptions = {
  kp: {
    TR: {
      description: 'Kurlar tarafından üretilen paslanmaz çelik dalgıç pompalar, korozyona dayanıklı yapısı sayesinde uzun ömürlü ve güvenilir performans sunar.',
      longDescription: `Kurlar tarafından üretilen paslanmaz çelik dalgıç pompalar, korozyona dayanıklı yapısı sayesinde uzun ömürlü ve güvenilir performans sunar. Tarımsal sulama, endüstriyel su temini ve yer altı suyu tahliyesi gibi zorlu uygulamalar için idealdir. Yüksek verimlilik ve bakım kolaylığı ile suyun olduğu her alanda maksimum dayanım sağlar.`,
      features: [
        'Uzun süreli ve güvenilir kullanım',
        'Yüksek performanslı çalışma',
        'Kolay bakım ve pratik montaj imkânı',
        'NEMA standartlarına uygun motor bağlantısı',
        'Aşınmaya dirençli, su ile yağlanan yataklar',
        'Hem yatay hem de dikey çalışmaya uygun tasarım'
      ]
    },
    EN: {
      description: 'Stainless steel submersible pumps manufactured by Kurlar offer long-lasting and reliable performance thanks to their corrosion-resistant structure.',
      longDescription: `Stainless steel submersible pumps manufactured by Kurlar offer long-lasting and reliable performance thanks to their corrosion-resistant structure. Ideal for demanding applications such as agricultural irrigation, industrial water supply, and groundwater extraction. It provides maximum durability in every area with water thanks to high efficiency and ease of maintenance.`,
      features: [
        'Long-lasting and reliable use',
        'High performance operation',
        'Easy maintenance and practical assembly',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for both horizontal and vertical operation'
      ]
    },
    AR: {
      description: 'توفر المضخات الغاطسة المصنوعة من الفولاذ المقاوم للصدأ التي تصنعها كورلار أداءً طويل الأمد وموثوقًا بفضل هيكلها المقاوم للتآكل.',
      longDescription: `توفر المضخات الغاطسة المصنوعة من الفولاذ المقاوم للصدأ التي تصنعها كورلار أداءً طويل الأمد وموثوقًا بفضل هيكلها المقاوم للتآكل. مثالية للتطبيقات الصعبة مثل الري الزراعي وإمدادات المياه الصناعية واستخراج المياه الجوفية. توفر أقصى درجات المتانة في كل منطقة توجد بها مياه بفضل الكفاءة العالية وسهولة الصيانة.`,
      features: [
        'استخدام طويل الأمد وموثوق',
        'تشغيل عالي الأداء',
        'صيانة سهلة وتجميع عملي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ]
    },
    ES: {
      description: 'Las bombas sumergibles de acero inoxidable fabricadas por Kurlar ofrecen un rendimiento duradero y fiable gracias a su estructura resistente a la corrosión.',
      longDescription: `Las bombas sumergibles de acero inoxidable fabricadas por Kurlar ofrecen un rendimiento duradero y fiable gracias a su estructura resistente a la corrosión. Ideal para aplicaciones exigentes como riego agrícola, suministro de agua industrial y extracción de agua subterránea. Proporciona la máxima durabilidad en cualquier área con agua gracias a su alta eficiencia y facilidad de mantenimiento.`,
      features: [
        'Uso duradero y fiable',
        'Funcionamiento de alto rendimiento',
        'Fácil mantenimiento y montaje práctico',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ]
    },
    PT: {
      description: 'As bombas submersíveis de aço inoxidável fabricadas pela Kurlar oferecem desempenho duradouro e confiável graças à sua estrutura resistente à corrosão.',
      longDescription: `As bombas submersíveis de aço inoxidável fabricadas pela Kurlar oferecem desempenho duradouro e confiável graças à sua estrutura resistente à corrosão. Ideal para aplicações exigentes como irrigação agrícola, abastecimento de água industrial e extração de água subterrânea. Proporciona máxima durabilidade em qualquer área com água graças à alta eficiência e facilidade de manutenção.`,
      features: [
        'Uso duradouro e confiável',
        'Operação de alto desempenho',
        'Fácil manutenção e montagem prática',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ]
    }
  },
  kpn: {
    TR: {
      description: '4” Kurlar Noryl Dalgıç Pompa çarkları ve difüzörleri, mükemmel tasarımları sayesinde yüksek hidrolik verimlilik ve performans sunar.',
      longDescription: `4” Kurlar Noryl Dalgıç Pompa çarkları ve difüzörleri, mükemmel tasarımları sayesinde yüksek hidrolik verimlilik ve performans sunar; ayrıca yüzer fan sistemi sayesinde kum ve aşındırıcı maddelere karşı mükemmel bir koruma sağlamaktadır. Paslanmaz çelikten üretilen süzgeç, 50 g/m³ olarak belirlenen boyutun üzerindeki parçaların pompanın içine girmesini önleyerek, pompanın ömrünü uzatmaktadır. Yatay ve dikey kurulum pozisyonuna uygundur. Çıkış haznesi bağlantısı hem NPT hem BSP uygun olup, NEMA standartlarına göre motor bağlantısına uygun tasarlanmıştır.`,
      features: [
        'Uzun süreli ve güvenilir kullanım',
        'Yüksek performanslı çalışma',
        'Kolay bakım ve pratik montaj imkânı',
        'NEMA standartlarına uygun motor bağlantısı',
        'Aşınmaya dirençli, su ile yağlanan yataklar',
        'Hem yatay hem de dikey çalışmaya uygun tasarım'
      ]
    },
    EN: {
      description: '4” Kurlar Noryl Submersible Pump impellers and diffusers offer high hydraulic efficiency and performance thanks to their excellent designs.',
      longDescription: `4” Kurlar Noryl Submersible Pump impellers and diffusers offer high hydraulic efficiency and performance thanks to their excellent designs; it also provides excellent protection against sand and abrasive materials thanks to the floating impeller system. The stainless steel strainer prevents particles larger than 50 g/m³ from entering the pump, extending the pump's life. Suitable for horizontal and vertical installation. The discharge chamber connection is suitable for both NPT and BSP and is designed for motor connection according to NEMA standards.`,
      features: [
        'Long-lasting and reliable use',
        'High performance operation',
        'Easy maintenance and practical assembly',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for both horizontal and vertical operation'
      ]
    },
    AR: {
      description: 'توفر دافعات وموزعات مضخة Noryl الغاطسة مقاس 4 بوصة من كورلار كفاءة هيدروليكية عالية وأداءً بفضل تصميماتها الممتازة.',
      longDescription: `توفر دافعات وموزعات مضخة Noryl الغاطسة مقاس 4 بوصة من كورلار كفاءة هيدروليكية عالية وأداءً بفضل تصميماتها الممتازة؛ كما أنها توفر حماية ممتازة ضد الرمل والمواد الكاشطة بفضل نظام المروحة العائمة. تمنع المصفاة المصنوعة من الفولاذ المقاوم للصدأ الجزيئات الأكبر من 50 جم/م³ من دخول المضخة، مما يطيل عمر المضخة. مناسب للتركيب الأفقي والرأسي. وصلة غرفة التفريغ مناسبة لكل من NPT و BSP ومصممة لتوصيل المحرك وفقًا لمعايير NEMA.`,
      features: [
        'استخدام طويل الأمد وموثوق',
        'تشغيل عالي الأداء',
        'صيانة سهلة وتجميع عملي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ]
    },
    ES: {
      description: 'Los impulsores y difusores de la bomba sumergible Noryl de 4” de Kurlar ofrecen una alta eficiencia hidráulica y rendimiento gracias a sus excelentes diseños.',
      longDescription: `Los impulsores y difusores de la bomba sumergible Noryl de 4” de Kurlar ofrecen una alta eficiencia hidráulica y rendimiento gracias a sus excelentes diseños; también proporciona una excelente protección contra arena y materiales abrasivos gracias al sistema de impulsor flotante. El filtro de acero inoxidable evita que entren partículas mayores de 50 g/m³ en la bomba, extendiendo su vida útil. Adecuado para instalación horizontal y vertical. La conexión de la cámara de descarga es adecuada tanto para NPT como para BSP y está diseñada para la conexión del motor según los estándares NEMA.`,
      features: [
        'Uso duradero y fiable',
        'Funcionamiento de alto rendimiento',
        'Fácil mantenimiento y montaje práctico',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ]
    },
    PT: {
      description: 'Os impulsores e difusores da Bomba Submersível Noryl de 4” da Kurlar oferecem alta eficiência hidráulica e desempenho graças aos seus excelentes designs.',
      longDescription: `Os impulsores e difusores da Bomba Submersível Noryl de 4” da Kurlar oferecem alta eficiência hidráulica e desempenho graças aos seus excelentes designs; também oferece excelente proteção contra areia e materiais abrasivos graças ao sistema de impulsor flutuante. O filtro de aço inoxidável evita que partículas maiores que 50 g/m³ entrem na bomba, estendendo a vida útil da bomba. Adequado para instalação horizontal e vertical. A conexão da câmara de descarga é adequada para NPT e BSP e é projetada para conexão do motor de acordo com os padrões NEMA.`,
      features: [
        'Uso duradouro e confiável',
        'Operação de alto desempenho',
        'Fácil manutenção e montagem prática',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ]
    }
  },
  kpd: {
    TR: {
      description: 'KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Pik Döküm Dalgıç Pompalar tamamen pik döküm malzemeden yapılmıştır.',
      longDescription: `KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Pik Döküm Dalgıç Pompalar tamamen pik döküm (talep üzerine pompalar komple bronz malzemeden üretilebilmektedir) malzemeden yapılmıştır. Tamamen pik döküm olarak imal edilen difüzörler, fanlar, emiş ve çıkış haznesi korozyona karşı son derece dayanıklı kılar. Tasarım ve malzeme özellikleriyle yüksek verimlilik, yüksek dayanıklık, uzun ömür ve istikrarlı performans sağlamaktadır. Yatay ve dikey kurulum pozisyonuna uygundur. NEMA standartlarına göre motor bağlantısına uygundur.`,
      features: [
        'Uzun süreli kullanım',
        'Yüksek performans',
        'NEMA standartlarına uygun motor bağlantısı',
        'Aşınmaya dirençli, su ile yağlanan yataklar',
        'Yatay ve dikey çalışmaya uygun tasarım'
      ]
    },
    EN: {
      description: 'KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Cast Iron Submersible Pumps are made entirely of cast iron material.',
      longDescription: `KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Cast Iron Submersible Pumps are made entirely of cast iron material (pumps can be produced entirely from bronze material upon request). Diffusers, impellers, suction and discharge chambers made entirely of cast iron make it extremely resistant to corrosion. It provides high efficiency, high durability, long life and stable performance with its design and material properties. Suitable for horizontal and vertical installation. Suitable for motor connection according to NEMA standards.`,
      features: [
        'Long-term use',
        'High performance',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for horizontal and vertical operation'
      ]
    },
    AR: {
      description: 'مضخات KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ الغاطسة من الحديد الزهر من كورلار مصنوعة بالكامل من مادة الحديد الزهر.',
      longDescription: `مضخات KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ الغاطسة من الحديد الزهر من كورلار مصنوعة بالكامل من مادة الحديد الزهر (يمكن إنتاج المضخات بالكامل من مادة البرونز عند الطلب). تجعل الموزعات والدوافع وغرف الشفط والتفريغ المصنوعة بالكامل من الحديد الزهر مقاومة للغاية للتآكل. توفر كفاءة عالية ومتانة عالية وعمرًا طويلاً وأداءً مستقرًا بفضل تصميمها وخصائص موادها. مناسب للتركيب الأفقي والرأسي. مناسب لتوصيل المحرك وفقًا لمعايير NEMA.`,
      features: [
        'استخدام طويل الأمد',
        'أداء عالي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ]
    },
    ES: {
      description: 'Las bombas sumergibles de hierro fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ de Kurlar están hechas completamente de material de hierro fundido.',
      longDescription: `Las bombas sumergibles de hierro fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ de Kurlar están hechas completamente de material de hierro fundido (las bombas se pueden producir completamente de material de bronce bajo pedido). Los difusores, impulsores, cámaras de succión y descarga hechos completamente de hierro fundido lo hacen extremadamente resistente a la corrosión. Proporciona alta eficiencia, alta durabilidad, larga vida útil y rendimiento estable con su diseño y propiedades materiales. Adecuado para instalación horizontal y vertical. Adecuado para conexión de motor según estándares NEMA.`,
      features: [
        'Uso a largo plazo',
        'Alto rendimiento',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ]
    },
    PT: {
      description: 'As Bombas Submersíveis de Ferro Fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ da Kurlar são feitas inteiramente de material de ferro fundido.',
      longDescription: `As Bombas Submersíveis de Ferro Fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ da Kurlar são feitas inteiramente de material de ferro fundido (bombas podem ser produzidas inteiramente de material de bronze mediante solicitação). Difusores, impulsores, câmaras de sucção e descarga feitos inteiramente de ferro fundido tornam-no extremamente resistente à corrosão. Proporciona alta eficiência, alta durabilidade, longa vida útil e desempenho estável com seu design e propriedades materiais. Adequado para instalação horizontal e vertical. Adequado para conexão do motor de acordo com os padrões NEMA.`,
      features: [
        'Uso a longo prazo',
        'Alto desempenho',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ]
    }
  },
  ksx: {
    TR: {
      description: 'KSX 6″-8-“10” Kurlar Paslanmaz Döküm Dalgıç Pompalar tamamen AISI 304 döküm malzemeden yapılmıştır.',
      longDescription: `KSX 6″-8-“10” Kurlar Paslanmaz Döküm Dalgıç Pompalar tamamen AISI 304 döküm (talep üzerine pompalar komple AISI 316L malzemeden üretilebilmektedir) malzemeden yapılmıştır. Tamamen paslanmaz çelik olarak imal edilen difüzörler, fanlar, emiş ve çıkış haznesi, süzgeç korozyona karşı son derece dayanıklı kılar. Tasarım ve malzeme özellikleriyle yüksek verimlilik, yüksek dayanıklık, uzun ömür ve istikrarlı performans sağlamaktadır. Yatay ve dikey kurulum pozisyonuna uygundur. NEMA standartlarına göre motor bağlantısına uygundur.`,
      features: [
        'Uzun süreli kullanım',
        'Yüksek performans',
        'NEMA standartlarına uygun motor bağlantısı',
        'Aşınmaya dirençli, su ile yağlanan yataklar',
        'Yatay ve dikey çalışmaya uygun tasarım'
      ]
    },
    EN: {
      description: 'KSX 6″-8-“10” Kurlar Cast Stainless Steel Submersible Pumps are made entirely of AISI 304 cast material.',
      longDescription: `KSX 6″-8-“10” Kurlar Cast Stainless Steel Submersible Pumps are made entirely of AISI 304 cast material (pumps can be produced entirely from AISI 316L material upon request). Diffusers, impellers, suction and discharge chambers, strainers made entirely of stainless steel make it extremely resistant to corrosion. It provides high efficiency, high durability, long life and stable performance with its design and material properties. Suitable for horizontal and vertical installation. Suitable for motor connection according to NEMA standards.`,
      features: [
        'Long-term use',
        'High performance',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for horizontal and vertical operation'
      ]
    },
    AR: {
      description: 'مضخات KSX 6″-8-“10” الغاطسة المصنوعة من الفولاذ المقاوم للصدأ المصبوب من كورلار مصنوعة بالكامل من مادة AISI 304 المصبوبة.',
      longDescription: `مضخات KSX 6″-8-“10” الغاطسة المصنوعة من الفولاذ المقاوم للصدأ المصبوب من كورلار مصنوعة بالكامل من مادة AISI 304 المصبوبة (يمكن إنتاج المضخات بالكامل من مادة AISI 316L عند الطلب). تجعل الموزعات والدوافع وغرف الشفط والتفريغ والمصافي المصنوعة بالكامل من الفولاذ المقاوم للصدأ مقاومة للغاية للتآكل. توفر كفاءة عالية ومتانة عالية وعمرًا طويلاً وأداءً مستقرًا بفضل تصميمها وخصائص موادها. مناسب للتركيب الأفقي والرأسي. مناسب لتوصيل المحرك وفقًا لمعايير NEMA.`,
      features: [
        'استخدام طويل الأمد',
        'أداء عالي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ]
    },
    ES: {
      description: 'Las bombas sumergibles de acero inoxidable fundido KSX 6″-8-“10” de Kurlar están hechas completamente de material fundido AISI 304.',
      longDescription: `Las bombas sumergibles de acero inoxidable fundido KSX 6″-8-“10” de Kurlar están hechas completamente de material fundido AISI 304 (las bombas se pueden producir completamente de material AISI 316L bajo pedido). Los difusores, impulsores, cámaras de succión y descarga, filtros hechos completamente de acero inoxidable lo hacen extremadamente resistente a la corrosión. Proporciona alta eficiencia, alta durabilidad, larga vida útil y rendimiento estable con su diseño y propiedades materiales. Adecuado para instalación horizontal y vertical. Adecuado para conexión de motor según estándares NEMA.`,
      features: [
        'Uso a largo plazo',
        'Alto rendimiento',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ]
    },
    PT: {
      description: 'As Bombas Submersíveis de Aço Inoxidável Fundido KSX 6″-8-“10” da Kurlar são feitas inteiramente de material fundido AISI 304.',
      longDescription: `As Bombas Submersíveis de Aço Inoxidável Fundido KSX 6″-8-“10” da Kurlar são feitas inteiramente de material fundido AISI 304 (bombas podem ser produzidas inteiramente de material AISI 316L mediante solicitação). Difusores, impulsores, câmaras de sucção e descarga, filtros feitos inteiramente de aço inoxidável tornam-no extremamente resistente à corrosão. Proporciona alta eficiência, alta durabilidade, longa vida útil e desempenho estável com seu design e propriedades materiais. Adequado para instalação horizontal e vertical. Adequado para conexão do motor de acordo com os padrões NEMA.`,
      features: [
        'Uso a longo prazo',
        'Alto desempenho',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ]
    }
  },
  km4: {
    TR: {
      description: 'Yağlı Tip Dalgıç Motorlar, yağ soğutmalı geri sarılabilir motorlardır (gıdada kullanılan toksik olmayan yağ).',
      longDescription: `Yağlı Tip Dalgıç Motorlar, yağ soğutmalı geri sarılabilir motorlardır (gıdada kullanılan toksik olmayan yağ). Gürültüsüz çalışır ve uzun ömürlü hizmet sağlamaktadır. Hem yatay hem dikey çalışmaya uygundur. Boyutları ve NEMA standartlarına göre uygun flanş bağlantısı bulunmaktadır.`,
      features: [
        'Uzun Süreli Kullanım',
        'Yüksek Performans',
        'NEMA Standartlarına Uygun Pompa Bağlantısı',
        'IP 68 Koruma'
      ]
    },
    EN: {
      description: 'Oil Filled Submersible Motors are oil-cooled rewindable motors (non-toxic oil used in food).',
      longDescription: `Oil Filled Submersible Motors are oil-cooled rewindable motors (non-toxic oil used in food). It works silently and provides long-lasting service. Suitable for both horizontal and vertical operation. It has flange connection suitable for dimensions and NEMA standards.`,
      features: [
        'Long-Term Use',
        'High Performance',
        'Pump Connection According to NEMA Standards',
        'IP 68 Protection'
      ]
    },
    AR: {
      description: 'محركات الغاطسة المملوءة بالزيت هي محركات قابلة لإعادة اللف مبردة بالزيت (زيت غير سام يستخدم في الغذاء).',
      longDescription: `محركات الغاطسة المملوءة بالزيت هي محركات قابلة لإعادة اللف مبردة بالزيت (زيت غير سام يستخدم في الغذاء). يعمل بصمت ويوفر خدمة طويلة الأمد. مناسب للتشغيل الأفقي والرأسي. يحتوي على وصلة شفة مناسبة للأبعاد ومعايير NEMA.`,
      features: [
        'استخدام طويل الأمد',
        'أداء عالي',
        'توصيل المضخة وفقًا لمعايير NEMA',
        'حماية IP 68'
      ]
    },
    ES: {
      description: 'Los motores sumergibles llenos de aceite son motores rebobinables enfriados por aceite (aceite no tóxico utilizado en alimentos).',
      longDescription: `Los motores sumergibles llenos de aceite son motores rebobinables enfriados por aceite (aceite no tóxico utilizado en alimentos). Funciona silenciosamente y proporciona un servicio duradero. Adecuado para funcionamiento horizontal y vertical. Tiene conexión de brida adecuada para dimensiones y estándares NEMA.`,
      features: [
        'Uso a Largo Plazo',
        'Alto Rendimiento',
        'Conexión de Bomba Según Estándares NEMA',
        'Protección IP 68'
      ]
    },
    PT: {
      description: 'Motores Submersíveis Preenchidos com Óleo são motores rebobináveis resfriados a óleo (óleo não tóxico usado em alimentos).',
      longDescription: `Motores Submersíveis Preenchidos com Óleo são motores rebobináveis resfriados a óleo (óleo não tóxico usado em alimentos). Funciona silenciosamente e oferece serviço duradouro. Adequado para operação horizontal e vertical. Possui conexão de flange adequada para dimensões e padrões NEMA.`,
      features: [
        'Uso a Longo Prazo',
        'Alto Desempenho',
        'Conexão da Bomba de Acordo com os Padrões NEMA',
        'Proteção IP 68'
      ]
    }
  },
  km: {
    TR: {
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
      ]
    },
    EN: {
      description: '6”-7”-8”-10” HI-TEMP (60°C) Rewindable Submersible Motors are produced in our ISO 9001 certified facilities.',
      longDescription: `6”-7”-8”-10” HI-TEMP (60°C) Rewindable Submersible Motors are specially produced for high temperatures with special insulated Coil Wire (PBN) for low operating costs in our ISO 9001 certified facilities. Water-cooled 6″ HI-TEMP (60°C) Rewindable Submersible Motors are equipped with special pressure compensating check valve, diaphragm, sand slinger, water-lubricated high-resistance axial and radial bearings. Motors are filled with a mixture of pure water and glycerin for storage down to -15°C.`,
      features: [
        'High efficiency, low operating cost',
        'Special PBN coil wire for high temperature',
        'Longer life compared to standard motors',
        'Water-cooled submersible motor structure',
        'High resistance to voltage fluctuations',
        'Stainless steel motor shaft & NBR sand slinger'
      ],
      options: [
        'Complete AISI 304, 316 or DUBLEX production',
        '6’’ NEMA double flange production option',
        'PT100 sensor option',
        'Cable suitable for drinking water legislation (VDE, ACS, KTW)',
        'Special cable production up to 100m',
        'Direct or star/delta starting',
        '4-core cable (3 phase + ground)',
        'Production compatible with 500V, 525V, 630V, 1000V',
        'SIC/SIC-NBR-304 mechanical seal option',
        'Maximum 75°C and 90°C temperature option'
      ]
    },
    AR: {
      description: 'يتم إنتاج محركات غاطسة قابلة لإعادة اللف 6"-7"-8"-10" HI-TEMP (60 درجة مئوية) في مرافقنا الحاصلة على شهادة ISO 9001.',
      longDescription: `يتم إنتاج محركات غاطسة قابلة لإعادة اللف 6"-7"-8"-10" HI-TEMP (60 درجة مئوية) خصيصًا لدرجات الحرارة المرتفعة باستخدام سلك ملف معزول خاص (PBN) لتكاليف تشغيل منخفضة في مرافقنا الحاصلة على شهادة ISO 9001. تم تجهيز محركات غاطسة قابلة لإعادة اللف مبردة بالماء مقاس 6 بوصات HI-TEMP (60 درجة مئوية) بصمام فحص خاص لتعويض الضغط، وحجاب حاجز، ومانع رمل، ومحامل محورية ونصف قطرية عالية المقاومة مشحمة بالماء. تمتلئ المحركات بخليط من الماء النقي والجلسرين للتخزين حتى -15 درجة مئوية.`,
      features: [
        'كفاءة عالية، تكلفة تشغيل منخفضة',
        'سلك ملف PBN خاص لدرجات الحرارة العالية',
        'عمر أطول مقارنة بالمحركات القياسية',
        'هيكل محرك غاطس مبرد بالماء',
        'مقاومة عالية لتقلبات الجهد',
        'عمود محرك من الفولاذ المقاوم للصدأ ومانع رمل NBR'
      ],
      options: [
        'إنتاج كامل من AISI 304 أو 316 أو DUBLEX',
        'خيار إنتاج شفة مزدوجة NEMA 6 بوصة',
        'خيار مستشعر PT100',
        'كابل مناسب لتشريعات مياه الشرب (VDE، ACS، KTW)',
        'إنتاج كابل خاص يصل إلى 100 متر',
        'بدء تشغيل مباشر أو نجمة/دلتا',
        'كابل 4 نوى (3 مراحل + أرضي)',
        'إنتاج متوافق مع 500 فولت، 525 فولت، 630 فولت، 1000 فولت',
        'خيار ختم ميكانيكي SIC/SIC-NBR-304',
        'خيار درجة حرارة قصوى 75 درجة مئوية و 90 درجة مئوية'
      ]
    },
    ES: {
      description: 'Los motores sumergibles rebobinables HI-TEMP (60°C) de 6”-7”-8”-10” se producen en nuestras instalaciones certificadas ISO 9001.',
      longDescription: `Los motores sumergibles rebobinables HI-TEMP (60°C) de 6”-7”-8”-10” se producen especialmente para altas temperaturas con alambre de bobina con aislamiento especial (PBN) para bajos costos operativos en nuestras instalaciones certificadas ISO 9001. Los motores sumergibles rebobinables HI-TEMP (60°C) de 6″ enfriados por agua están equipados con válvula de retención de compensación de presión especial, diafragma, deflector de arena, cojinetes axiales y radiales de alta resistencia lubricados por agua. Los motores están llenos de una mezcla de agua pura y glicerina para almacenamiento hasta -15°C.`,
      features: [
        'Alta eficiencia, bajo costo operativo',
        'Alambre de bobina PBN especial para alta temperatura',
        'Vida útil más larga en comparación con los motores estándar',
        'Estructura de motor sumergible enfriado por agua',
        'Alta resistencia a las fluctuaciones de voltaje',
        'Eje del motor de acero inoxidable y deflector de arena NBR'
      ],
      options: [
        'Producción completa AISI 304, 316 o DUBLEX',
        'Opción de producción de doble brida NEMA de 6’’',
        'Opción de sensor PT100',
        'Cable adecuado para la legislación de agua potable (VDE, ACS, KTW)',
        'Producción de cable especial hasta 100m',
        'Arranque directo o estrella/triángulo',
        'Cable de 4 hilos (3 fases + tierra)',
        'Producción compatible con 500V, 525V, 630V, 1000V',
        'Opción de sello mecánico SIC/SIC-NBR-304',
        'Opción de temperatura máxima de 75°C y 90°C'
      ]
    },
    PT: {
      description: 'Motores Submersíveis Rebobináveis HI-TEMP (60°C) de 6”-7”-8”-10” são produzidos em nossas instalações certificadas ISO 9001.',
      longDescription: `Motores Submersíveis Rebobináveis HI-TEMP (60°C) de 6”-7”-8”-10” são produzidos especialmente para altas temperaturas com fio de bobina isolado especial (PBN) para baixos custos operacionais em nossas instalações certificadas ISO 9001. Motores Submersíveis Rebobináveis HI-TEMP (60°C) de 6″ resfriados a água são equipados com válvula de retenção de compensação de pressão especial, diafragma, defletor de areia, rolamentos axiais e radiais de alta resistência lubrificados a água. Os motores são preenchidos com uma mistura de água pura e glicerina para armazenamento até -15°C.`,
      features: [
        'Alta eficiência, baixo custo operacional',
        'Fio de bobina PBN especial para alta temperatura',
        'Vida útil mais longa em comparação com motores padrão',
        'Estrutura do motor submersível resfriado a água',
        'Alta resistência a flutuações de tensão',
        'Eixo do motor de aço inoxidável e defletor de areia NBR'
      ],
      options: [
        'Produção completa AISI 304, 316 ou DUBLEX',
        'Opção de produção de flange dupla NEMA de 6’’',
        'Opção de sensor PT100',
        'Cabo adequado para legislação de água potável (VDE, ACS, KTW)',
        'Produção de cabo especial até 100m',
        'Partida direta ou estrela/triângulo',
        'Cabo de 4 vias (3 fases + terra)',
        'Produção compatível com 500V, 525V, 630V, 1000V',
        'Opção de selo mecânico SIC/SIC-NBR-304',
        'Opção de temperatura máxima de 75°C e 90°C'
      ]
    }
  },
  kms: {
    TR: {
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
      ]
    },
    EN: {
      description: '6”-7”-8”-10” HI-TEMP (60°C) Rewindable Submersible Motors are produced in our ISO 9001 certified facilities.',
      longDescription: `6”-7”-8”-10” HI-TEMP (60°C) Rewindable Submersible Motors are specially produced for high temperatures with special insulated Coil Wire (PBN) for low operating costs in our ISO 9001 certified facilities. Water-cooled 6″ HI-TEMP (60°C) Rewindable Submersible Motors are equipped with special pressure compensating check valve, diaphragm, sand slinger, water-lubricated high-resistance axial and radial bearings. Motors are filled with a mixture of pure water and glycerin for storage down to -15°C.`,
      features: [
        'High efficiency design for low operating cost',
        'Special insulated coil wire (PBN) for high temperature',
        'Longer life compared to standard motors',
        'Water-cooled submersible motor',
        'High resistance to voltage fluctuations',
        'Stainless steel motor shaft'
      ],
      options: [
        'Motors can be produced as AISI 304, AISI 316 or DUBLEX',
        '6” NEMA standard double flange production option',
        'PT100 sensor integration',
        'Cable option suitable for drinking water legislation (VDE, ACS, KTW approved)',
        'Special cable production up to 100 meters',
        'Direct or star/delta starting',
        '4-core cable production (3 phases + 1 ground)',
        'Production suitable for 500V, 525V, 630V and 1000V',
        'Mechanical seal can be produced as SIC/SIC-NBR-304',
        'Maximum 75°C and 90°C temperature options'
      ]
    },
    AR: {
      description: 'يتم إنتاج محركات غاطسة قابلة لإعادة اللف 6"-7"-8"-10" HI-TEMP (60 درجة مئوية) في مرافقنا الحاصلة على شهادة ISO 9001.',
      longDescription: `يتم إنتاج محركات غاطسة قابلة لإعادة اللف 6"-7"-8"-10" HI-TEMP (60 درجة مئوية) خصيصًا لدرجات الحرارة المرتفعة باستخدام سلك ملف معزول خاص (PBN) لتكاليف تشغيل منخفضة في مرافقنا الحاصلة على شهادة ISO 9001. تم تجهيز محركات غاطسة قابلة لإعادة اللف مبردة بالماء مقاس 6 بوصات HI-TEMP (60 درجة مئوية) بصمام فحص خاص لتعويض الضغط، وحجاب حاجز، ومانع رمل، ومحامل محورية ونصف قطرية عالية المقاومة مشحمة بالماء. تمتلئ المحركات بخليط من الماء النقي والجلسرين للتخزين حتى -15 درجة مئوية.`,
      features: [
        'تصميم عالي الكفاءة لتكلفة تشغيل منخفضة',
        'سلك ملف معزول خاص (PBN) لدرجة حرارة عالية',
        'عمر أطول مقارنة بالمحركات القياسية',
        'محرك غاطس مبرد بالماء',
        'مقاومة عالية لتقلبات الجهد',
        'عمود محرك من الفولاذ المقاوم للصدأ'
      ],
      options: [
        'يمكن إنتاج المحركات كـ AISI 304 أو AISI 316 أو DUBLEX',
        'خيار إنتاج شفة مزدوجة قياسية 6 بوصة NEMA',
        'تكامل مستشعر PT100',
        'خيار كابل مناسب لتشريعات مياه الشرب (معتمد من VDE، ACS، KTW)',
        'إنتاج كابل خاص يصل إلى 100 متر',
        'بدء تشغيل مباشر أو نجمة/دلتا',
        'إنتاج كابل 4 نوى (3 مراحل + 1 أرضي)',
        'إنتاج مناسب لـ 500 فولت، 525 فولت، 630 فولت و 1000 فولت',
        'يمكن إنتاج الختم الميكانيكي كـ SIC/SIC-NBR-304',
        'خيارات درجة حرارة قصوى 75 درجة مئوية و 90 درجة مئوية'
      ]
    },
    ES: {
      description: 'Los motores sumergibles rebobinables HI-TEMP (60°C) de 6”-7”-8”-10” se producen en nuestras instalaciones certificadas ISO 9001.',
      longDescription: `Los motores sumergibles rebobinables HI-TEMP (60°C) de 6”-7”-8”-10” se producen especialmente para altas temperaturas con alambre de bobina con aislamiento especial (PBN) para bajos costos operativos en nuestras instalaciones certificadas ISO 9001. Los motores sumergibles rebobinables HI-TEMP (60°C) de 6″ enfriados por agua están equipados con válvula de retención de compensación de presión especial, diafragma, deflector de arena, cojinetes axiales y radiales de alta resistencia lubricados por agua. Los motores están llenos de una mezcla de agua pura y glicerina para almacenamiento hasta -15°C.`,
      features: [
        'Diseño de alta eficiencia para bajo costo operativo',
        'Alambre de bobina con aislamiento especial (PBN) para alta temperatura',
        'Vida útil más larga en comparación con los motores estándar',
        'Motor sumergible enfriado por agua',
        'Alta resistencia a las fluctuaciones de voltaje',
        'Eje del motor de acero inoxidable'
      ],
      options: [
        'Los motores se pueden producir como AISI 304, AISI 316 o DUBLEX',
        'Opción de producción de doble brida estándar NEMA de 6”',
        'Integración de sensor PT100',
        'Opción de cable adecuada para la legislación de agua potable (aprobado por VDE, ACS, KTW)',
        'Producción de cable especial hasta 100 metros',
        'Arranque directo o estrella/triángulo',
        'Producción de cable de 4 núcleos (3 fases + 1 tierra)',
        'Producción adecuada para 500V, 525V, 630V y 1000V',
        'El sello mecánico se puede producir como SIC/SIC-NBR-304',
        'Opciones de temperatura máxima de 75°C y 90°C'
      ]
    },
    PT: {
      description: 'Motores Submersíveis Rebobináveis HI-TEMP (60°C) de 6”-7”-8”-10” são produzidos em nossas instalações certificadas ISO 9001.',
      longDescription: `Motores Submersíveis Rebobináveis HI-TEMP (60°C) de 6”-7”-8”-10” são produzidos especialmente para altas temperaturas com fio de bobina isolado especial (PBN) para baixos custos operacionais em nossas instalações certificadas ISO 9001. Motores Submersíveis Rebobináveis HI-TEMP (60°C) de 6″ resfriados a água são equipados com válvula de retenção de compensação de pressão especial, diafragma, defletor de areia, rolamentos axiais e radiais de alta resistência lubrificados a água. Os motores são preenchidos com uma mistura de água pura e glicerina para armazenamento até -15°C.`,
      features: [
        'Design de alta eficiência para baixo custo operacional',
        'Fio de bobina isolado especial (PBN) para alta temperatura',
        'Vida útil mais longa em comparação com motores padrão',
        'Motor submersível resfriado a água',
        'Alta resistência a flutuações de tensão',
        'Eixo do motor de aço inoxidável'
      ],
      options: [
        'Motores podem ser produzidos como AISI 304, AISI 316 ou DUBLEX',
        'Opção de produção de flange dupla padrão NEMA de 6”',
        'Integração do sensor PT100',
        'Opção de cabo adequada para legislação de água potável (aprovado por VDE, ACS, KTW)',
        'Produção de cabo especial até 100 metros',
        'Partida direta ou estrela/triângulo',
        'Produção de cabo de 4 núcleos (3 fases + 1 terra)',
        'Produção adequada para 500V, 525V, 630V e 1000V',
        'Selo mecânico pode ser produzido como SIC/SIC-NBR-304',
        'Opções de temperatura máxima de 75°C e 90°C'
      ]
    }
  }
};

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
