
export interface Product {
  id: string;
  name: string;
  modelCode?: string;
  shortName?: string;
  category: 'pump' | 'motor';
  subCategory: string;
  image: string;
  gallery?: string[];
  description: string;
  longDescription?: string;
  features?: string[];
  specs?: Record<string, string>;
  subSpecs?: { title: string; columns: string[]; data: string[][] }[];
  specsImage?: string;
  mechanicalPartsImages?: { title: string; image: string }[];
  applications?: string[];
  faq?: { question: string; answer: string }[];
  downloads?: { name: string; url: string }[];
}

// Helper to get product data with language
export const getProductWithLanguage = (product: Product, lang: 'TR' | 'EN' | 'AR' | 'ES' | 'PT') => {
  const desc = descriptions[product.id as keyof typeof descriptions];
  if (!desc || !desc[lang]) return product;

  return {
    ...product,
    name: desc[lang].name || product.name,
    subCategory: desc[lang].subCategory || product.subCategory,
    description: desc[lang].description,
    longDescription: desc[lang].longDescription,
    features: desc[lang].features,
    specs: desc[lang].specs || product.specs,
    subSpecs: desc[lang].subSpecs || product.subSpecs,
    mechanicalPartsImages: desc[lang].mechanicalPartsImages || product.mechanicalPartsImages,
    options: desc[lang].options || product.options,
    faq: desc[lang].faq || product.faq
  };
};

const descriptions = {
  kp: {
    TR: {
      name: 'Paslanmaz Çelik Dalgıç Pompalar',
      modelCode: 'KP - KPS',
      subCategory: 'Paslanmaz Çelik',
      description: 'Kurlar tarafından üretilen paslanmaz çelik dalgıç pompalar, korozyona dayanıklı yapısı sayesinde uzun ömürlü ve güvenilir performans sunar.',
      longDescription: `Kurlar tarafından üretilen paslanmaz çelik dalgıç pompalar, korozyona dayanıklı yapısı sayesinde uzun ömürlü ve güvenilir performans sunar. Tarımsal sulama, endüstriyel su temini ve yer altı suyu tahliyesi gibi zorlu uygulamalar için idealdir. Yüksek verimlilik ve bakım kolaylığı ile suyun olduğu her alanda maksimum dayanım sağlar.`,
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
        'Fan': 'AISI 304',
        'Mil & Kaplin': 'AISI 304',
        'Difüzör': 'AISI 304',
        'Süzgeç': 'AISI 304',
        'Klepe': 'AISI 304',
        'Emiş Haznesi': 'AISI 304',
        'Çıkış Haznesi': 'AISI 304'
      },
      mechanicalPartsImages: [
        { title: '4" Mekanik Parçalar', image: '/assets/details/4inc-mech.png' },
        { title: '6" Mekanik Parçalar', image: '/assets/details/6inc-mech.png' },
        { title: '8" - 10" Mekanik Parçalar', image: '/assets/details/8inc-mech.png' }
      ],
      faq: [
        { question: "Paslanmaz çelik pompaların avantajı nedir?", answer: "AISI 304 paslanmaz çelik yapısı sayesinde korozyona karşı üstün dayanıklılık sağlar ve suyun hijyenik kalmasını korur." },
        { question: "Hangi montaj pozisyonlarında çalışır?", answer: "Hem dikey hem de yatay montaj pozisyonlarında güvenle çalıştırılabilir." }
      ]
    },
    EN: {
      name: 'Stainless Steel Submersible Pumps',
      modelCode: 'KP - KPS',
      subCategory: 'Stainless Steel',
      description: 'Stainless steel submersible pumps manufactured by Kurlar offer long-lasting and reliable performance thanks to their corrosion-resistant structure.',
      longDescription: `Stainless steel submersible pumps manufactured by Kurlar offer long-lasting and reliable performance thanks to their corrosion-resistant structure. Ideal for demanding applications such as agricultural irrigation, industrial water supply, and groundwater extraction. It provides maximum durability in every area with water thanks to high efficiency and ease of maintenance.`,
      features: [
        'Long-lasting and reliable use',
        'High performance operation',
        'Easy maintenance and practical assembly',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for both horizontal and vertical operation'
      ],
      specs: {
        'Maximum Capacity': '290 m³/h',
        'Maximum Head': '700m',
        'Max Sand Amount': '50g/m³',
        'Max Water Temp': '60°C',
        'Max Immersion': '300m',
        'Protection Class': 'IP68',
        'Outlet Connection': 'BSP & NPT',
        'Impeller Material': 'AISI 304',
        'Shaft & Coupling': 'AISI 304',
        'Diffuser': 'AISI 304',
        'Strainer': 'AISI 304'
      },
      mechanicalPartsImages: [
        { title: '4" Mechanical Parts', image: '/assets/details/4inc-mech.png' },
        { title: '6" Mechanical Parts', image: '/assets/details/6inc-mech.png' },
        { title: '8" - 10" Mechanical Parts', image: '/assets/details/8inc-mech.png' }
      ],
      faq: [
        { question: "What is the advantage of stainless steel pumps?", answer: "Thanks to its AISI 304 stainless steel structure, it provides superior resistance to corrosion and maintains the hygienic quality of the water." },
        { question: "In which mounting positions does it work?", answer: "It can be operated safely in both vertical and horizontal mounting positions." }
      ]
    },
    AR: {
      name: 'مضخات غاطسة من الفولاذ المقاوم للصدأ',
      modelCode: 'KP - KPS',
      subCategory: 'الفولاذ المقاوم للصدأ',
      description: 'توفر المضخات الغاطسة المصنوعة من الفولاذ المقاوم للصدأ التي تصنعها كورلار أداءً طويل الأمد وموثوقًا بفضل هيكلها المقاوم للتآكل.',
      longDescription: `توفر المضخات الغاطسة المصنوعة من الفولاذ المقاوم للصدأ التي تصنعها كورلار أداءً طويل الأمد وموثوقًا بفضل هيكلها المقاوم للتآكل. مثالية للتطبيقات الصعبة مثل الري الزراعي وإمدادات المياه الصناعية واستخراج المياه الجوفية. توفر أقصى درجات المتانة في كل منطقة توجد بها مياه بفضل الكفاءة العالية وسهولة الصيانة.`,
      features: [
        'استخدام طويل الأمد وموثوق',
        'تشغيل عالي الأداء',
        'صيانة سهلة وتجميع عملي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ],
      specs: {
        'السعة القصوى': '290 متر مكعب/ساعة',
        'أقصى ارتفاع للضخ': '700 متر',
        'أقصى كمية رمل': '50 جم/متر مكعب',
        'أقصى درجة حرارة للماء': '60 درجة مئوية',
        'أقصى غمر': '300 متر',
        'فئة الحماية': 'IP68',
        'وصلة المخرج': 'BSP & NPT',
        'مادة المروحة': 'AISI 304',
        'العمود والاقتران': 'AISI 304',
        'الموزع': 'AISI 304',
        'المصفاة': 'AISI 304'
      },
      mechanicalPartsImages: [
        { title: 'أجزاء ميكانيكية 4 بوصة', image: '/assets/details/4inc-mech.png' },
        { title: 'أجزاء ميكانيكية 6 بوصة', image: '/assets/details/6inc-mech.png' },
        { title: 'أجزاء ميكانيكية 8 - 10 بوصة', image: '/assets/details/8inc-mech.png' }
      ],
      faq: [
        { question: "ما هي ميزة المضخات المصنوعة من الفولاذ المقاوم للصدأ؟", answer: "بفضل هيكلها المصنوع من الفولاذ المقاوم للصدأ AISI 304، فإنها توفر مقاومة فائقة للتآكل وتحافظ على الجودة الصحية للمياه." },
        { question: "في أي مواضع تركيب تعمل؟", answer: "يمكن تشغيلها بأمان في كل من مواضع التركيب الرأسي والأفقي." }
      ]
    },
    ES: {
      name: 'Bombas Sumergibles de Acero Inoxidable',
      modelCode: 'KP - KPS',
      subCategory: 'Acero Inoxidable',
      description: 'Las bombas sumergibles de acero inoxidable fabricadas por Kurlar ofrecen un rendimiento duradero y fiable gracias a su estructura resistente a la corrosión.',
      longDescription: `Las bombas sumergibles de acero inoxidable fabricadas por Kurlar ofrecen un rendimiento duradero y fiable gracias a su estructura resistente a la corrosión. Ideal para aplicaciones exigentes como riego agrícola, suministro de agua industrial y extracción de agua subterránea. Proporciona la máxima durabilidad en cualquier área con agua gracias a su alta eficiencia y facilidad de mantenimiento.`,
      features: [
        'Uso duradero y fiable',
        'Funcionamiento de alto rendimiento',
        'Fácil mantenimiento y montaje práctico',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ],
      specs: {
        'Capacidad Máxima': '290 m³/h',
        'Altura Máxima': '700m',
        'Cantidad Máx. de Arena': '50g/m³',
        'Temp. Máx. del Agua': '60°C',
        'Inmersión Máxima': '300m',
        'Clase de Protección': 'IP68',
        'Conexión de Salida': 'BSP & NPT',
        'Material del Impulsor': 'AISI 304',
        'Eje y Acoplamiento': 'AISI 304',
        'Difusor': 'AISI 304',
        'Filtro': 'AISI 304'
      },
      mechanicalPartsImages: [
        { title: 'Partes Mecánicas de 4"', image: '/assets/details/4inc-mech.png' },
        { title: 'Partes Mecánicas de 6"', image: '/assets/details/6inc-mech.png' },
        { title: 'Partes Mecánicas de 8" - 10"', image: '/assets/details/8inc-mech.png' }
      ],
      faq: [
        { question: "¿Cuál es la ventaja de las bombas de acero inoxidable?", answer: "Gracias a su estructura de acero inoxidable AISI 304, proporciona una resistencia superior a la corrosión y mantiene la calidad higiénica del agua." },
        { question: "¿En qué posiciones de montaje funciona?", answer: "Se puede operar de manera segura tanto en posiciones de montaje vertical como horizontal." }
      ]
    },
    PT: {
      name: 'Bombas Submersíveis de Aço Inoxidável',
      modelCode: 'KP - KPS',
      subCategory: 'Aço Inoxidável',
      description: 'As bombas submersíveis de aço inoxidável fabricadas pela Kurlar oferecem desempenho duradouro e confiável graças à sua estrutura resistente à corrosão.',
      longDescription: `As bombas submersíveis de aço inoxidável fabricadas pela Kurlar oferecem desempenho duradouro e confiável graças à sua estrutura resistente à corrosão. Ideal para aplicações exigentes como irrigação agrícola, abastecimento de água industrial e extração de água subterrânea. Proporciona máxima durabilidade em qualquer área com água graças à alta eficiência e facilidade de manutenção.`,
      features: [
        'Uso duradouro e confiável',
        'Operação de alto desempenho',
        'Fácil manutenção e montagem prática',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ],
      specs: {
        'Capacidade Máxima': '290 m³/h',
        'Altura Máxima': '700m',
        'Quantidade Máx. de Areia': '50g/m³',
        'Temp. Máx. da Água': '60°C',
        'Imersão Máxima': '300m',
        'Classe de Proteção': 'IP68',
        'Conexão de Saída': 'BSP & NPT',
        'Material do Impulsor': 'AISI 304',
        'Eixo e Acoplamento': 'AISI 304',
        'Difusor': 'AISI 304',
        'Filtro': 'AISI 304'
      },
      mechanicalPartsImages: [
        { title: 'Peças Mecânicas de 4"', image: '/assets/details/4inc-mech.png' },
        { title: 'Peças Mecânicas de 6"', image: '/assets/details/6inc-mech.png' },
        { title: 'Peças Mecânicas de 8" - 10"', image: '/assets/details/8inc-mech.png' }
      ],
      faq: [
        { question: "Qual a vantagem das bombas de aço inoxidável?", answer: "Graças à sua estrutura em aço inoxidável AISI 304, proporciona resistência superior à corrosão e mantém a qualidade higiênica da água." },
        { question: "Em quais posições de montagem funciona?", answer: "Pode ser operado com segurança nas posições de montagem vertical e horizontal." }
      ]
    }
  },
  kpn: {
    TR: {
      name: '4″ Noryl Dalgıç Pompalar',
      modelCode: 'KPN4',
      subCategory: 'Noryl Seri',
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
        'Devir': '2900 RPM',
        'Difüzör': 'Noryl',
        'Fan': 'Noryl',
        'Mil': 'AISI 304',
        'Kaplin': 'AISI 304',
        'Süzgeç': 'AISI 304',
        'Klepe': 'AISI 304',
        'Emiş Haznesi': 'AISI 304',
        'Çıkış Haznesi': 'AISI 304',
        'Dif. Tası / Kademe': 'AISI 304'
      },
      faq: [
        { question: "Noryl malzemenin avantajı nedir?", answer: "Yüksek mukavemetli mühendislik plastiği olan Noryl, korozyona ve aşınmaya karşı yüksek direnç gösterir, hafiftir ve uzun ömürlüdür." },
        { question: "Kumlu suda çalışır mı?", answer: "Evet, yüzer fan sistemi sayesinde kum ve aşındırıcı partiküllere karşı yüksek direnç gösterir." }
      ]
    },
    EN: {
      name: '4″ Noryl Submersible Pumps',
      modelCode: 'KPN4',
      subCategory: 'Noryl Series',
      description: '4” Kurlar Noryl Submersible Pump impellers and diffusers offer high hydraulic efficiency and performance thanks to their excellent designs.',
      longDescription: `4” Kurlar Noryl Submersible Pump impellers and diffusers offer high hydraulic efficiency and performance thanks to their excellent designs; it also provides excellent protection against sand and abrasive materials thanks to the floating impeller system. The stainless steel strainer prevents particles larger than 50 g/m³ from entering the pump, extending the pump's life. Suitable for horizontal and vertical installation. The discharge chamber connection is suitable for both NPT and BSP and is designed for motor connection according to NEMA standards.`,
      features: [
        'Long-lasting and reliable use',
        'High performance operation',
        'Easy maintenance and practical assembly',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for both horizontal and vertical operation'
      ],
      specs: {
        'Maximum Capacity': '24 m³/h',
        'Maximum Head': '600m',
        'Max Sand Amount': '50g/m³',
        'Max Water Temp': '35°C',
        'Max Immersion': '150m',
        'Protection Class': 'IP68',
        'Outlet Connection': '1 1/4" - 2"',
        'Impeller Material': 'Noryl',
        'Shaft & Coupling': 'AISI 304',
        'Diffuser': 'Noryl',
        'Strainer': 'AISI 304'
      },
      faq: [
        { question: "What is the advantage of Noryl material?", answer: "Noryl, a high-strength engineering plastic, shows high resistance to corrosion and abrasion, is lightweight and long-lasting." },
        { question: "Does it work in sandy water?", answer: "Yes, thanks to the floating impeller system, it shows high resistance to sand and abrasive particles." }
      ]
    },
    AR: {
      name: 'مضخات غاطسة نوريل 4 بوصة',
      modelCode: 'KPN4',
      subCategory: 'سلسلة نوريل',
      description: 'توفر دافعات وموزعات مضخة Noryl الغاطسة مقاس 4 بوصة من كورلار كفاءة هيدروليكية عالية وأداءً بفضل تصميماتها الممتازة.',
      longDescription: `توفر دافعات وموزعات مضخة Noryl الغاطسة مقاس 4 بوصة من كورلار كفاءة هيدروليكية عالية وأداءً بفضل تصميماتها الممتازة؛ كما أنها توفر حماية ممتازة ضد الرمل والمواد الكاشطة بفضل نظام المروحة العائمة. تمنع المصفاة المصنوعة من الفولاذ المقاوم للصدأ الجزيئات الأكبر من 50 جم/م³ من دخول المضخة، مما يطيل عمر المضخة. مناسب للتركيب الأفقي والرأسي. وصلة غرفة التفريغ مناسبة لكل من NPT و BSP ومصممة لتوصيل المحرك وفقًا لمعايير NEMA.`,
      features: [
        'استخدام طويل الأمد وموثوق',
        'تشغيل عالي الأداء',
        'صيانة سهلة وتجميع عملي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ],
      specs: {
        'السعة القصوى': '24 متر مكعب/ساعة',
        'أقصى ارتفاع للضخ': '600 متر',
        'أقصى كمية رمل': '50 جم/متر مكعب',
        'أقصى درجة حرارة للماء': '35 درجة مئوية',
        'أقصى غمر': '150 متر',
        'فئة الحماية': 'IP68',
        'وصلة المخرج': '1 1/4" - 2"',
        'مادة المروحة': 'نوريل',
        'العمود والاقتران': 'AISI 304',
        'الموزع': 'نوريل',
        'المصفاة': 'AISI 304'
      },
      faq: [
        { question: "ما هي ميزة مادة النوريل؟", answer: "النوريل، وهو بلاستيك هندسي عالي القوة، يظهر مقاومة عالية للتآكل والاحتكاك، وهو خفيف الوزن وطويل الأمد." },
        { question: "هل يعمل في المياه الرملية؟", answer: "نعم، بفضل نظام المروحة العائمة، يظهر مقاومة عالية للرمل والجزيئات الكاشطة." }
      ]
    },
    ES: {
      name: 'Bombas Sumergibles Noryl de 4″',
      modelCode: 'KPN4',
      subCategory: 'Serie Noryl',
      description: 'Los impulsores y difusores de la bomba sumergible Noryl de 4” de Kurlar ofrecen una alta eficiencia hidráulica y rendimiento gracias a sus excelentes diseños.',
      longDescription: `Los impulsores y difusores de la bomba sumergible Noryl de 4” de Kurlar ofrecen una alta eficiencia hidráulica y rendimiento gracias a sus excelentes diseños; también proporciona una excelente protección contra arena y materiales abrasivos gracias al sistema de impulsor flotante. El filtro de acero inoxidable evita que entren partículas mayores de 50 g/m³ en la bomba, extendiendo su vida útil. Adecuado para instalación horizontal y vertical. La conexión de la cámara de descarga es adecuada tanto para NPT como para BSP y está diseñada para la conexión del motor según los estándares NEMA.`,
      features: [
        'Uso duradero y fiable',
        'Funcionamiento de alto rendimiento',
        'Fácil mantenimiento y montaje práctico',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ],
      specs: {
        'Capacidad Máxima': '24 m³/h',
        'Altura Máxima': '600m',
        'Cantidad Máx. de Arena': '50g/m³',
        'Temp. Máx. del Agua': '35°C',
        'Inmersión Máxima': '150m',
        'Clase de Protección': 'IP68',
        'Conexión de Salida': '1 1/4" - 2"',
        'Material del Impulsor': 'Noryl',
        'Eje y Acoplamiento': 'AISI 304',
        'Difusor': 'Noryl',
        'Filtro': 'AISI 304'
      },
      faq: [
        { question: "¿Cuál es la ventaja del material Noryl?", answer: "Noryl, un plástico de ingeniería de alta resistencia, muestra una alta resistencia a la corrosión y la abrasión, es ligero y duradero." },
        { question: "¿Funciona en agua arenosa?", answer: "Sí, gracias al sistema de impulsor flotante, muestra una alta resistencia a la arena y partículas abrasivas." }
      ]
    },
    PT: {
      name: 'Bombas Submersíveis Noryl de 4″',
      modelCode: 'KPN4',
      subCategory: 'Série Noryl',
      description: 'Os impulsores e difusores da Bomba Submersível Noryl de 4” da Kurlar oferecem alta eficiência hidráulica e desempenho graças aos seus excelentes designs.',
      longDescription: `Os impulsores e difusores da Bomba Submersível Noryl de 4” da Kurlar oferecem alta eficiência hidráulica e desempenho graças aos seus excelentes designs; também oferece excelente proteção contra areia e materiais abrasivos graças ao sistema de impulsor flutuante. O filtro de aço inoxidável evita que partículas maiores que 50 g/m³ entrem na bomba, estendendo a vida útil da bomba. Adequado para instalação horizontal e vertical. A conexão da câmara de descarga é adequada para NPT e BSP e é projetada para conexão do motor de acordo com os padrões NEMA.`,
      features: [
        'Uso duradouro e confiável',
        'Operação de alto desempenho',
        'Fácil manutenção e montagem prática',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ],
      specs: {
        'Capacidade Máxima': '24 m³/h',
        'Altura Máxima': '600m',
        'Quantidade Máx. de Areia': '50g/m³',
        'Temp. Máx. da Água': '35°C',
        'Imersão Máxima': '150m',
        'Classe de Proteção': 'IP68',
        'Conexão de Saída': '1 1/4" - 2"',
        'Material do Impulsor': 'Noryl',
        'Eixo e Acoplamento': 'AISI 304',
        'Difusor': 'Noryl',
        'Filtro': 'AISI 304'
      },
      faq: [
        { question: "Qual a vantagem do material Noryl?", answer: "Noryl, um plástico de engenharia de alta resistência, mostra alta resistência à corrosão e abrasão, é leve e duradouro." },
        { question: "Funciona em água arenosa?", answer: "Sim, graças ao sistema de impulsor flutuante, mostra alta resistência à areia e partículas abrasivas." }
      ]
    }
  },
  kpd: {
    TR: {
      name: 'Pik Döküm Dalgıç Pompalar',
      modelCode: 'KPD',
      subCategory: 'Pik Döküm',
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
        'Çıkış Bağlantısı': 'BSP & NPT',
        'Difüzör': 'GG 20',
        'Fan': 'GG 20',
        'Mil & Kaplin': 'AISI 420',
        'Süzgeç': 'AISI 304',
        'Klepe': 'AISI 304',
        'Emiş Haznesi': 'GG 20',
        'Çıkış Haznesi': 'GG 20'
      },
      faq: [
        { question: "Pik döküm malzemenin avantajı nedir?", answer: "Pik döküm, yüksek mukavemeti ve darbelere karşı dayanıklılığı ile bilinir. Ağır hizmet koşulları için idealdir." },
        { question: "Paslanma yapar mı?", answer: "Standart döküm malzemeler zamanla oksitlenebilir ancak özel boya ve kaplamalarla bu süre uzatılır. Korozyon riski yüksek sular için paslanmaz veya bronz opsiyonlarımızı değerlendirebilirsiniz." }
      ]
    },
    EN: {
      name: 'Cast Iron Submersible Pumps',
      modelCode: 'KPD',
      subCategory: 'Cast Iron',
      description: 'KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Cast Iron Submersible Pumps are made entirely of cast iron material.',
      longDescription: `KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ Kurlar Cast Iron Submersible Pumps are made entirely of cast iron material (pumps can be produced entirely from bronze material upon request). Diffusers, impellers, suction and discharge chambers made entirely of cast iron make it extremely resistant to corrosion. It provides high efficiency, high durability, long life and stable performance with its design and material properties. Suitable for horizontal and vertical installation. Suitable for motor connection according to NEMA standards.`,
      features: [
        'Long-term use',
        'High performance',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for horizontal and vertical operation'
      ],
      specs: {
        'Maximum Capacity': '350 m³/h',
        'Maximum Head': '650m',
        'Max Sand Amount': '50g/m³',
        'Max Water Temp': '40°C',
        'Max Immersion': '350m',
        'Protection Class': 'IP68',
        'Outlet Connection': 'Flanged',
        'Body Material': 'GG25 Cast Iron',
        'Impeller Material': 'GG25 Cast Iron',
        'Shaft': 'AISI 420'
      },
      faq: [
        { question: "What is the advantage of cast iron material?", answer: "Cast iron is known for its high strength and impact resistance. Ideal for heavy duty conditions." },
        { question: "Does it rust?", answer: "Standard casting materials may oxidize over time, but this period is extended with special paints and coatings. You can evaluate our stainless or bronze options for waters with high corrosion risk." }
      ]
    },
    AR: {
      name: 'مضخات غاطسة من الحديد الزهر',
      modelCode: 'KPD',
      subCategory: 'الحديد الزهر',
      description: 'مضخات KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ الغاطسة من الحديد الزهر من كورلار مصنوعة بالكامل من مادة الحديد الزهر.',
      longDescription: `مضخات KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ الغاطسة من الحديد الزهر من كورلار مصنوعة بالكامل من مادة الحديد الزهر (يمكن إنتاج المضخات بالكامل من مادة البرونز عند الطلب). تجعل الموزعات والدوافع وغرف الشفط والتفريغ المصنوعة بالكامل من الحديد الزهر مقاومة للغاية للتآكل. توفر كفاءة عالية ومتانة عالية وعمرًا طويلاً وأداءً مستقرًا بفضل تصميمها وخصائص موادها. مناسب للتركيب الأفقي والرأسي. مناسب لتوصيل المحرك وفقًا لمعايير NEMA.`,
      features: [
        'استخدام طويل الأمد',
        'أداء عالي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ],
      specs: {
        'السعة القصوى': '350 متر مكعب/ساعة',
        'أقصى ارتفاع للضخ': '650 متر',
        'أقصى كمية رمل': '50 جم/متر مكعب',
        'أقصى درجة حرارة للماء': '40 درجة مئوية',
        'أقصى غمر': '350 متر',
        'فئة الحماية': 'IP68',
        'وصلة المخرج': 'شفة',
        'مادة الجسم': 'GG25 حديد زهر',
        'مادة المروحة': 'GG25 حديد زهر',
        'العمود': 'AISI 420'
      },
      faq: [
        { question: "ما هي ميزة مادة الحديد الزهر؟", answer: "يُعرف الحديد الزهر بقوته العالية ومقاومته للصدمات. مثالي لظروف الخدمة الشاقة." },
        { question: "هل يصدأ؟", answer: "قد تتأكسد مواد الصب القياسية بمرور الوقت، ولكن يتم تمديد هذه الفترة بطلاءات ودهانات خاصة. يمكنك تقييم خياراتنا المصنوعة من الفولاذ المقاوم للصدأ أو البرونز للمياه ذات مخاطر التآكل العالية." }
      ]
    },
    ES: {
      name: 'Bombas Sumergibles de Hierro Fundido',
      modelCode: 'KPD',
      subCategory: 'Hierro Fundido',
      description: 'Las bombas sumergibles de hierro fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ de Kurlar están hechas completamente de material de hierro fundido.',
      longDescription: `Las bombas sumergibles de hierro fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ de Kurlar están hechas completamente de material de hierro fundido (las bombas se pueden producir completamente de material de bronce bajo pedido). Los difusores, impulsores, cámaras de succión y descarga hechos completamente de hierro fundido lo hacen extremadamente resistente a la corrosión. Proporciona alta eficiencia, alta durabilidad, larga vida útil y rendimiento estable con su diseño y propiedades materiales. Adecuado para instalación horizontal y vertical. Adecuado para conexión de motor según estándares NEMA.`,
      features: [
        'Uso a largo plazo',
        'Alto rendimiento',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ],
      specs: {
        'Capacidad Máxima': '350 m³/h',
        'Altura Máxima': '650m',
        'Cantidad Máx. de Arena': '50g/m³',
        'Temp. Máx. del Agua': '40°C',
        'Inmersión Máxima': '350m',
        'Clase de Protección': 'IP68',
        'Conexión de Salida': 'Bridada',
        'Material del Cuerpo': 'GG25 Hierro Fundido',
        'Material del Impulsor': 'GG25 Hierro Fundido',
        'Eje': 'AISI 420'
      },
      faq: [
        { question: "¿Cuál es la ventaja del material de hierro fundido?", answer: "El hierro fundido es conocido por su alta resistencia y resistencia al impacto. Ideal para condiciones de trabajo pesado." },
        { question: "¿Se oxida?", answer: "Los materiales de fundición estándar pueden oxidarse con el tiempo, pero este período se extiende con pinturas y recubrimientos especiales. Puede evaluar nuestras opciones de acero inoxidable o bronce para aguas con alto riesgo de corrosión." }
      ]
    },
    PT: {
      name: 'Bombas Submersíveis de Ferro Fundido',
      modelCode: 'KPD',
      subCategory: 'Ferro Fundido',
      description: 'As Bombas Submersíveis de Ferro Fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ da Kurlar são feitas inteiramente de material de ferro fundido.',
      longDescription: `As Bombas Submersíveis de Ferro Fundido KPD 5’’ – 6’’ – 7’’ – 8’’ – 9’’ – 10’’ da Kurlar são feitas inteiramente de material de ferro fundido (bombas podem ser produzidas inteiramente de material de bronze mediante solicitação). Difusores, impulsores, câmaras de sucção e descarga feitos inteiramente de ferro fundido tornam-no extremamente resistente à corrosão. Proporciona alta eficiência, alta durabilidade, longa vida útil e desempenho estável com seu design e propriedades materiais. Adequado para instalação horizontal e vertical. Adequado para conexão do motor de acordo com os padrões NEMA.`,
      features: [
        'Uso a longo prazo',
        'Alto desempenho',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ],
      specs: {
        'Capacidade Máxima': '350 m³/h',
        'Altura Máxima': '650m',
        'Quantidade Máx. de Areia': '50g/m³',
        'Temp. Máx. da Água': '40°C',
        'Imersão Máxima': '350m',
        'Classe de Proteção': 'IP68',
        'Conexão de Saída': 'Flangeada',
        'Material do Corpo': 'GG25 Ferro Fundido',
        'Material do Impulsor': 'GG25 Ferro Fundido',
        'Eixo': 'AISI 420'
      },
      faq: [
        { question: "Qual a vantagem do material ferro fundido?", answer: "O ferro fundido é conhecido por sua alta resistência e resistência ao impacto. Ideal para condições de trabalho pesado." },
        { question: "Enferruja?", answer: "Materiais de fundição padrão podem oxidar com o tempo, mas esse período é estendido com tintas e revestimentos especiais. Você pode avaliar nossas opções de aço inoxidável ou bronze para águas com alto risco de corrosão." }
      ]
    }
  },
  ksx: {
    TR: {
      name: 'Paslanmaz Döküm Dalgıç Pompalar',
      modelCode: 'KSX',
      subCategory: 'Paslanmaz Döküm',
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
        'Difüzör': 'AISI 304',
        'Fan': 'AISI 304',
        'Mil': 'AISI 304',
        'Kaplin': 'AISI 304',
        'Süzgeç': 'AISI 304',
        'Klepe': 'AISI 304',
        'Emiş Haznesi': 'AISI 304',
        'Çıkış Haznesi': 'AISI 304'
      },
      faq: [
        { question: "Döküm paslanmaz ile sac paslanmaz arasındaki fark nedir?", answer: "Döküm paslanmaz (AISI 304/316), sac paslanmazlara göre çok daha kalın et kalınlığına sahiptir, bu da daha yüksek basınç ve aşınma direnci sağlar." },
        { question: "Deniz suyunda kullanılır mı?", answer: "Standart AISI 304 modeller tatlı su içindir. Deniz suyu uygulamaları için AISI 316L veya Dublex malzeme opsiyonlarımız mevcuttur." }
      ]
    },
    EN: {
      name: 'Cast Stainless Submersible Pumps',
      modelCode: 'KSX',
      subCategory: 'Cast Stainless',
      description: 'KSX 6″-8-“10” Kurlar Cast Stainless Steel Submersible Pumps are made entirely of AISI 304 cast material.',
      longDescription: `KSX 6″-8-“10” Kurlar Cast Stainless Steel Submersible Pumps are made entirely of AISI 304 cast material (pumps can be produced entirely from AISI 316L material upon request). Diffusers, impellers, suction and discharge chambers, strainers made entirely of stainless steel make it extremely resistant to corrosion. It provides high efficiency, high durability, long life and stable performance with its design and material properties. Suitable for horizontal and vertical installation. Suitable for motor connection according to NEMA standards.`,
      features: [
        'Long-term use',
        'High performance',
        'Motor connection according to NEMA standards',
        'Wear-resistant, water-lubricated bearings',
        'Design suitable for horizontal and vertical operation'
      ],
      specs: {
        'Maximum Capacity': '300 m³/h',
        'Maximum Head': '700m',
        'Max Sand Amount': '50g/m³',
        'Max Water Temp': '60°C',
        'Max Immersion': '350m',
        'Protection Class': 'IP68',
        'Body Material': 'AISI 304 Cast',
        'Impeller Material': 'AISI 304 Cast',
        'Shaft': 'AISI 420'
      },
      faq: [
        { question: "What is the difference between cast stainless and sheet stainless?", answer: "Cast stainless (AISI 304/316) has a much thicker wall thickness than sheet stainless, which provides higher pressure and wear resistance." },
        { question: "Is it used in sea water?", answer: "Standard AISI 304 models are for fresh water. For sea water applications, we have AISI 316L or Duplex material options available." }
      ]
    },
    AR: {
      name: 'مضخات غاطسة من الفولاذ المقاوم للصدأ المصبوب',
      modelCode: 'KSX',
      subCategory: 'الفولاذ المقاوم للصدأ المصبوب',
      description: 'مضخات KSX 6″-8-“10” الغاطسة المصنوعة من الفولاذ المقاوم للصدأ المصبوب من كورلار مصنوعة بالكامل من مادة AISI 304 المصبوبة.',
      longDescription: `مضخات KSX 6″-8-“10” الغاطسة المصنوعة من الفولاذ المقاوم للصدأ المصبوب من كورلار مصنوعة بالكامل من مادة AISI 304 المصبوبة (يمكن إنتاج المضخات بالكامل من مادة AISI 316L عند الطلب). تجعل الموزعات والدوافع وغرف الشفط والتفريغ والمصافي المصنوعة بالكامل من الفولاذ المقاوم للصدأ مقاومة للغاية للتآكل. توفر كفاءة عالية ومتانة عالية وعمرًا طويلاً وأداءً مستقرًا بفضل تصميمها وخصائص موادها. مناسب للتركيب الأفقي والرأسي. مناسب لتوصيل المحرك وفقًا لمعايير NEMA.`,
      features: [
        'استخدام طويل الأمد',
        'أداء عالي',
        'توصيل المحرك وفقًا لمعايير NEMA',
        'محامل مقاومة للتآكل ومزلقة بالماء',
        'تصميم مناسب للتشغيل الأفقي والرأسي'
      ],
      specs: {
        'السعة القصوى': '300 متر مكعب/ساعة',
        'أقصى ارتفاع للضخ': '700 متر',
        'أقصى كمية رمل': '50 جم/متر مكعب',
        'أقصى درجة حرارة للماء': '60 درجة مئوية',
        'أقصى غمر': '350 متر',
        'فئة الحماية': 'IP68',
        'مادة الجسم': 'AISI 304 مصبوب',
        'مادة المروحة': 'AISI 304 مصبوب',
        'العمود': 'AISI 420'
      },
      faq: [
        { question: "ما الفرق بين الفولاذ المقاوم للصدأ المصبوب والفولاذ المقاوم للصدأ الصفيحي؟", answer: "يتميز الفولاذ المقاوم للصدأ المصبوب (AISI 304/316) بسماكة جدار أكبر بكثير من الفولاذ المقاوم للصدأ الصفيحي، مما يوفر مقاومة أعلى للضغط والتآكل." },
        { question: "هل يستخدم في مياه البحر؟", answer: "نماذج AISI 304 القياسية مخصصة للمياه العذبة. لتطبيقات مياه البحر، تتوفر لدينا خيارات مواد AISI 316L أو Duplex." }
      ]
    },
    ES: {
      name: 'Bombas Sumergibles de Acero Inoxidable Fundido',
      modelCode: 'KSX',
      subCategory: 'Acero Inoxidable Fundido',
      description: 'Las bombas sumergibles de acero inoxidable fundido KSX 6″-8-“10” de Kurlar están hechas completamente de material fundido AISI 304.',
      longDescription: `Las bombas sumergibles de acero inoxidable fundido KSX 6″-8-“10” de Kurlar están hechas completamente de material fundido AISI 304 (las bombas se pueden producir completamente de material AISI 316L bajo pedido). Los difusores, impulsores, cámaras de succión y descarga, filtros hechos completamente de acero inoxidable lo hacen extremadamente resistente a la corrosión. Proporciona alta eficiencia, alta durabilidad, larga vida útil y rendimiento estable con su diseño y propiedades materiales. Adecuado para instalación horizontal y vertical. Adecuado para conexión de motor según estándares NEMA.`,
      features: [
        'Uso a largo plazo',
        'Alto rendimiento',
        'Conexión del motor según estándares NEMA',
        'Cojinetes lubricados por agua resistentes al desgaste',
        'Diseño adecuado para funcionamiento horizontal y vertical'
      ],
      specs: {
        'Capacidad Máxima': '300 m³/h',
        'Altura Máxima': '700m',
        'Cantidad Máx. de Arena': '50g/m³',
        'Temp. Máx. del Agua': '60°C',
        'Inmersión Máxima': '350m',
        'Clase de Protección': 'IP68',
        'Material del Cuerpo': 'AISI 304 Fundido',
        'Material del Impulsor': 'AISI 304 Fundido',
        'Eje': 'AISI 420'
      },
      faq: [
        { question: "¿Cuál es la diferencia entre acero inoxidable fundido y acero inoxidable en lámina?", answer: "El acero inoxidable fundido (AISI 304/316) tiene un espesor de pared mucho mayor que el acero inoxidable en lámina, lo que proporciona mayor resistencia a la presión y al desgaste." },
        { question: "¿Se usa en agua de mar?", answer: "Los modelos estándar AISI 304 son para agua dulce. Para aplicaciones de agua de mar, tenemos opciones de material AISI 316L o Duplex disponibles." }
      ]
    },
    PT: {
      name: 'Bombas Submersíveis de Aço Inoxidável Fundido',
      modelCode: 'KSX',
      subCategory: 'Aço Inoxidável Fundido',
      description: 'As Bombas Submersíveis de Aço Inoxidável Fundido KSX 6″-8-“10” da Kurlar são feitas inteiramente de material fundido AISI 304.',
      longDescription: `As Bombas Submersíveis de Aço Inoxidável Fundido KSX 6″-8-“10” da Kurlar são feitas inteiramente de material fundido AISI 304 (bombas podem ser produzidas inteiramente de material AISI 316L mediante solicitação). Difusores, impulsores, câmaras de sucção e descarga, filtros feitos inteiramente de aço inoxidável tornam-no extremamente resistente à corrosão. Proporciona alta eficiência, alta durabilidade, longa vida útil e desempenho estável com seu design e propriedades materiais. Adequado para instalação horizontal e vertical. Adequado para conexão do motor de acordo com os padrões NEMA.`,
      features: [
        'Uso a longo prazo',
        'Alto desempenho',
        'Conexão do motor de acordo com os padrões NEMA',
        'Rolamentos lubrificados a água resistentes ao desgaste',
        'Design adequado para operação horizontal e vertical'
      ],
      specs: {
        'Capacidade Máxima': '300 m³/h',
        'Altura Máxima': '700m',
        'Quantidade Máx. de Areia': '50g/m³',
        'Temp. Máx. da Água': '60°C',
        'Imersão Máxima': '350m',
        'Classe de Proteção': 'IP68',
        'Material do Corpo': 'AISI 304 Fundido',
        'Material do Impulsor': 'AISI 304 Fundido',
        'Eixo': 'AISI 420'
      },
      faq: [
        { question: "Qual a diferença entre aço inoxidável fundido e aço inoxidável em chapa?", answer: "O aço inoxidável fundido (AISI 304/316) tem uma espessura de parede muito maior que o aço inoxidável em chapa, o que proporciona maior resistência à pressão e ao desgaste." },
        { question: "É usado em água do mar?", answer: "Os modelos padrão AISI 304 são para água doce. Para aplicações em água do mar, temos opções de material AISI 316L ou Duplex disponíveis." }
      ]
    }
  },
  km4: {
    TR: {
      name: 'Yağlı Tip Dalgıç Motorlar',
      modelCode: 'KM4',
      subCategory: 'Dalgıç Motorlar',
      description: 'Yağlı Tip Dalgıç Motorlar, yağ soğutmalı geri sarılabilir motorlardır (gıdada kullanılan toksik olmayan yağ).',
      longDescription: `Yağlı Tip Dalgıç Motorlar, yağ soğutmalı geri sarılabilir motorlardır (gıdada kullanılan toksik olmayan yağ). Gürültüsüz çalışır ve uzun ömürlü hizmet sağlamaktadır. Hem yatay hem dikey çalışmaya uygundur. Boyutları ve NEMA standartlarına göre uygun flanş bağlantısı bulunmaktadır.`,
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
        'Asgari Soğutma Akış Hızı': '8 cm/s',
        'Sürekli Servis Sınıfı': 'S1',
        'Koruma Sınıfı': 'IP68',
        'İzolasyon Sınıfı': 'F',
        'Motor Tipi': '2 kutuplu, 50 Hz (n ≈ 2900 rpm)',
        'Voltaj (Monofaz)': '210 – 220 – 230 V',
        'Voltaj (Trifaz)': '380 – 400 – 415 V'
      },
      faq: [
        { question: "Motor yağı gıdaya uygun mu?", answer: "Evet, motorlarımızda kullanılan yağ toksik olmayan, gıdaya uygun ve çevre dostu bir yağdır." },
        { question: "Sarma işlemi yapılabilir mi?", answer: "Evet, yağlı tip motorlarımız tekrar sarılabilir (rewindable) özelliktedir." }
      ]
    },
    EN: {
      name: 'Oil Filled Submersible Motors',
      modelCode: 'KM4',
      subCategory: 'Submersible Motors',
      description: 'Oil Filled Submersible Motors are oil-cooled rewindable motors (non-toxic oil used in food).',
      longDescription: `Oil Filled Submersible Motors are oil-cooled rewindable motors (non-toxic oil used in food). It works silently and provides long-lasting service. Suitable for both horizontal and vertical operation. It has flange connection suitable for dimensions and NEMA standards.`,
      features: [
        'Long-Term Use',
        'High Performance',
        'Pump Connection According to NEMA Standards',
        'IP 68 Protection'
      ],
      specs: {
        'Power Range': '0.37 – 7.5 kW',
        'Max Liquid Temp': '+35 °C',
        'Max Immersion': '200 meters',
        'Start Capacity': '24 times/hour',
        'Min Cooling Flow': '8 cm/s',
        'Service Class': 'S1',
        'Protection Class': 'IP68',
        'Insulation Class': 'F',
        'Motor Type': '2-pole, 50 Hz (n ≈ 2900 rpm)',
        'Voltage (Monophase)': '210 – 220 – 230 V',
        'Voltage (Triphase)': '380 – 400 – 415 V'
      },
      faq: [
        { question: "Is the motor oil food grade?", answer: "Yes, the oil used in our motors is non-toxic, food grade and environmentally friendly." },
        { question: "Can it be rewound?", answer: "Yes, our oil-filled motors are rewindable." }
      ]
    },
    AR: {
      name: 'محركات غاطسة مملوءة بالزيت',
      modelCode: 'KM4',
      subCategory: 'محركات غاطسة',
      description: 'محركات الغاطسة المملوءة بالزيت هي محركات قابلة لإعادة اللف مبردة بالزيت (زيت غير سام يستخدم في الغذاء).',
      longDescription: `محركات الغاطسة المملوءة بالزيت هي محركات قابلة لإعادة اللف مبردة بالزيت (زيت غير سام يستخدم في الغذاء). يعمل بصمت ويوفر خدمة طويلة الأمد. مناسب للتشغيل الأفقي والرأسي. يحتوي على وصلة شفة مناسبة للأبعاد ومعايير NEMA.`,
      features: [
        'استخدام طويل الأمد',
        'أداء عالي',
        'توصيل المضخة وفقًا لمعايير NEMA',
        'حماية IP 68'
      ],
      specs: {
        'نطاق الطاقة': '0.37 – 7.5 كيلوواط',
        'أقصى درجة حرارة للسائل': '+35 درجة مئوية',
        'أقصى غمر': '200 متر',
        'سعة البدء': '24 مرة/ساعة',
        'الحد الأدنى لتدفق التبريد': '8 سم/ثانية',
        'فئة الخدمة': 'S1',
        'فئة الحماية': 'IP68',
        'فئة العزل': 'F',
        'نوع المحرك': '2 قطب، 50 هرتز (n ≈ 2900 دورة في الدقيقة)',
        'الجهد (أحادي الطور)': '210 – 220 – 230 فولت',
        'الجهد (ثلاثي الطور)': '380 – 400 – 415 فولت'
      },
      faq: [
        { question: "هل زيت المحرك صالح للطعام؟", answer: "نعم، الزيت المستخدم في محركاتنا غير سام وصالح للطعام وصديق للبيئة." },
        { question: "هل يمكن إعادة لفه؟", answer: "نعم، محركاتنا المملوءة بالزيت قابلة لإعادة اللف." }
      ]
    },
    ES: {
      name: 'Motores Sumergibles Llenos de Aceite',
      modelCode: 'KM4',
      subCategory: 'Motores Sumergibles',
      description: 'Los motores sumergibles llenos de aceite son motores rebobinables enfriados por aceite (aceite no tóxico utilizado en alimentos).',
      longDescription: `Los motores sumergibles llenos de aceite son motores rebobinables enfriados por aceite (aceite no tóxico utilizado en alimentos). Funciona silenciosamente y proporciona un servicio duradero. Adecuado para funcionamiento horizontal y vertical. Tiene conexión de brida adecuada para dimensiones y estándares NEMA.`,
      features: [
        'Uso a Largo Plazo',
        'Alto Rendimiento',
        'Conexión de Bomba Según Estándares NEMA',
        'Protección IP 68'
      ],
      specs: {
        'Rango de Potencia': '0.37 – 7.5 kW',
        'Temp. Máx. del Líquido': '+35 °C',
        'Inmersión Máxima': '200 metros',
        'Capacidad de Arranque': '24 veces/hora',
        'Flujo Mín. de Refrigeración': '8 cm/s',
        'Clase de Servicio': 'S1',
        'Clase de Protección': 'IP68',
        'Clase de Aislamiento': 'F',
        'Tipo de Motor': '2 polos, 50 Hz (n ≈ 2900 rpm)',
        'Voltaje (Monofásico)': '210 – 220 – 230 V',
        'Voltaje (Trifásico)': '380 – 400 – 415 V'
      },
      faq: [
        { question: "¿El aceite del motor es apto para uso alimentario?", answer: "Sí, el aceite utilizado en nuestros motores no es tóxico, es apto para uso alimentario y respetuoso con el medio ambiente." },
        { question: "¿Se puede rebobinar?", answer: "Sí, nuestros motores llenos de aceite son rebobinables." }
      ]
    },
    PT: {
      name: 'Motores Submersíveis a Óleo',
      modelCode: 'KM4',
      subCategory: 'Motores Submersíveis',
      description: 'Motores Submersíveis Preenchidos com Óleo são motores rebobináveis resfriados a óleo (óleo não tóxico usado em alimentos).',
      longDescription: `Motores Submersíveis Preenchidos com Óleo são motores rebobináveis resfriados a óleo (óleo não tóxico usado em alimentos). Funciona silenciosamente e oferece serviço duradouro. Adequado para operação horizontal e vertical. Possui conexão de flange adequada para dimensões e padrões NEMA.`,
      features: [
        'Uso a Longo Prazo',
        'Alto Desempenho',
        'Conexão da Bomba de Acordo com os Padrões NEMA',
        'Proteção IP 68'
      ],
      specs: {
        'Faixa de Potência': '0.37 – 7.5 kW',
        'Temp. Máx. do Líquido': '+35 °C',
        'Imersão Máxima': '200 metros',
        'Capacidade de Partida': '24 vezes/hora',
        'Fluxo Mín. de Resfriamento': '8 cm/s',
        'Classe de Serviço': 'S1',
        'Classe de Proteção': 'IP68',
        'Classe de Isolamento': 'F',
        'Tipo de Motor': '2 polos, 50 Hz (n ≈ 2900 rpm)',
        'Tensão (Monofásica)': '210 – 220 – 230 V',
        'Tensão (Trifásica)': '380 – 400 – 415 V'
      },
      faq: [
        { question: "O óleo do motor é de qualidade alimentar?", answer: "Sim, o óleo utilizado em nossos motores é atóxico, de qualidade alimentar e ecologicamente correto." },
        { question: "Pode ser rebobinado?", answer: "Sim, nossos motores a óleo são rebobináveis." }
      ]
    }
  },
  km: {
    TR: {
      name: 'HI-TEMP Dalgıç Motorlar',
      modelCode: 'KM',
      subCategory: 'Dalgıç Motorlar',
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
      specs: {
        'Maksimum Eksenel Yük': '60.000 N',
        'Maksimum Ortam Sıcaklığı': '60°C / 90°C (Opsiyonel)',
        'İzolasyon Sınıfı': 'Yüksek Isı Dayanımlı (PBN)',
        'Koruma Sınıfı': 'IP68',
        'Bağlantı': 'NEMA Standart',
        'Soğutma': 'Su Soğutmalı',
        'Verimlilik': '%84 - %87'
      },
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
      faq: [
        { question: "Maksimum çalışma sıcaklığı nedir?", answer: "Hi-Temp motorlarımız standart olarak 75°C, opsiyonel olarak 90°C su sıcaklığına kadar sorunsuz çalışır." },
        { question: "Standart motordan farkı nedir?", answer: "Yüksek sıcaklığa dayanıklı özel bobin teli (XLPE) ve yalıtım malzemeleri kullanılarak üretilmiştir." }
      ]
    },
    EN: {
      name: 'HI-TEMP Submersible Motors',
      modelCode: 'KM',
      subCategory: 'Submersible Motors',
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
      specs: {
        'Maximum Axial Load': '60.000 N',
        'Max Ambient Temp': '60°C / 90°C (Optional)',
        'Insulation Class': 'High Heat Resistant (PBN)',
        'Protection Class': 'IP68',
        'Connection': 'NEMA Standard',
        'Cooling': 'Water Cooled',
        'Efficiency': '84% - 87%'
      },
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
      ],
      faq: [
        { question: "What is the maximum operating temperature?", answer: "Our Hi-Temp motors operate smoothly up to 75°C as standard and optionally up to 90°C water temperature." },
        { question: "What is the difference from a standard motor?", answer: "It is produced using high temperature resistant special winding wire (XLPE) and insulation materials." }
      ]
    },
    AR: {
      name: 'محركات غاطسة HI-TEMP',
      modelCode: 'KM',
      subCategory: 'محركات غاطسة',
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
      specs: {
        'أقصى حمل محوري': '60.000 نيوتن',
        'أقصى درجة حرارة محيطة': '60 درجة / 90 درجة (اختياري)',
        'فئة العزل': 'مقاوم للحرارة العالية (PBN)',
        'فئة الحماية': 'IP68',
        'الاتصال': 'معيار NEMA',
        'التبريد': 'تبريد مائي',
        'الكفاءة': '84٪ - 87٪'
      },
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
      ],
      faq: [
        { question: "ما هي أقصى درجة حرارة للتشغيل؟", answer: "تعمل محركاتنا ذات درجة الحرارة العالية بسلاسة حتى 75 درجة مئوية كمعيار قياسي واختياريًا حتى 90 درجة مئوية لدرجة حرارة الماء." },
        { question: "ما الفرق بينه وبين المحرك القياسي؟", answer: "يتم إنتاجه باستخدام سلك لف خاص مقاوم لدرجات الحرارة العالية (XLPE) ومواد عازلة." }
      ]
    },
    ES: {
      name: 'Motores Sumergibles HI-TEMP',
      modelCode: 'KM',
      subCategory: 'Motores Sumergibles',
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
      specs: {
        'Carga Axial Máxima': '60.000 N',
        'Temp. Amb. Máx.': '60°C / 90°C (Opcional)',
        'Clase de Aislamiento': 'Resistente al Alto Calor (PBN)',
        'Clase de Protección': 'IP68',
        'Conexión': 'Estándar NEMA',
        'Refrigeración': 'Enfriado por Agua',
        'Eficiencia': '84% - 87%'
      },
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
      ],
      faq: [
        { question: "¿Cuál es la temperatura máxima de funcionamiento?", answer: "Nuestros motores de alta temperatura funcionan sin problemas hasta 75°C como estándar y opcionalmente hasta 90°C de temperatura del agua." },
        { question: "¿Cuál es la diferencia con un motor estándar?", answer: "Se produce utilizando alambre de bobinado especial resistente a altas temperaturas (XLPE) y materiales de aislamiento." }
      ]
    },
    PT: {
      name: 'Motores Submersíveis HI-TEMP',
      modelCode: 'KM',
      subCategory: 'Motores Submersíveis',
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
      specs: {
        'Carga Axial Máxima': '60.000 N',
        'Temp. Amb. Máx.': '60°C / 90°C (Opcional)',
        'Classe de Isolamento': 'Resistente ao Alto Calor (PBN)',
        'Classe de Proteção': 'IP68',
        'Conexão': 'Padrão NEMA',
        'Resfriamento': 'Resfriado a Água',
        'Eficiência': '84% - 87%'
      },
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
      ],
      faq: [
        { question: "Qual a temperatura máxima de operação?", answer: "Nossos motores Hi-Temp operam suavemente até 75°C como padrão e opcionalmente até 90°C de temperatura da água." },
        { question: "Qual a diferença de um motor padrão?", answer: "É produzido utilizando fio de enrolamento especial resistente a altas temperaturas (XLPE) e materiais de isolamento." }
      ]
    }
  },
  kms: {
    TR: {
      name: 'S-TYPE Dalgıç Motorlar',
      modelCode: 'KMS',
      subCategory: 'Dalgıç Motorlar',
      description: 'S-Type Dalgıç Motorlar, enerji verimliliği ve dayanıklılık için optimize edilmiş, yeni nesil su soğutmalı motorlardır.',
      longDescription: `S-Type Dalgıç Motorlar, enerji verimliliği ve dayanıklılık için optimize edilmiş, yeni nesil su soğutmalı motorlardır. Düşük enerji tüketimi ve yüksek performansı bir arada sunar. Paslanmaz çelik gövde ve korozyona dayanıklı bileşenler, uzun ömürlü kullanım sağlar. Voltaj dalgalanmalarına karşı toleransı yüksektir.`,
      features: [
        'Yüksek enerji verimliliği ve düşük işletme maliyeti',
        'Dayanıklı paslanmaz çelik gövde',
        'Kolay bakım ve onarım imkanı',
        'Maksimum 75°C ve 90°C sıcaklık opsiyonları'
      ],
      specs: {
        'Maksimum Eksenel Yük': '50.000 N',
        'Maksimum Ortam Sıcaklığı': '35°C (Opsiyonel 90°C)',
        'İzolasyon Sınıfı': 'F Sınıfı',
        'Koruma Sınıfı': 'IP68',
        'Bağlantı': 'NEMA Standart',
        'Soğutma': 'Su Soğutmalı',
        'Verimlilik': '%80 - %83'
      },
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
      faq: [
        { question: "S-Type motorların farkı nedir?", answer: "S-Type motorlar, enerji verimliliği ve düşük işletme maliyeti odaklı tasarlanmıştır. Özel bobin yapısı ve hidrolik tasarımı ile standart motorlara göre daha az enerji tüketir." },
        { question: "Hangi voltaj aralıklarında çalışır?", answer: "380-415V aralığında çalışır ve voltaj dalgalanmalarına karşı yüksek dayanım gösterir." }
      ]
    },
    EN: {
      name: 'S-TYPE Submersible Motors',
      modelCode: 'KMS',
      subCategory: 'Submersible Motors',
      description: 'S-Type Submersible Motors are new generation water-cooled motors optimized for energy efficiency and durability.',
      longDescription: `S-Type Submersible Motors are new generation water-cooled motors optimized for energy efficiency and durability. It offers low energy consumption and high performance together. Stainless steel body and corrosion-resistant components ensure long-lasting use. High tolerance to voltage fluctuations.`,
      features: [
        'High energy efficiency and low operating cost',
        'Durable stainless steel body',
        'Easy maintenance and repair',
        'Maximum 75°C and 90°C temperature options'
      ],
      specs: {
        'Maximum Axial Load': '50.000 N',
        'Max Ambient Temp': '35°C (Optional 90°C)',
        'Insulation Class': 'Class F',
        'Protection Class': 'IP68',
        'Connection': 'NEMA Standard',
        'Cooling': 'Water Cooled',
        'Efficiency': '80% - 83%'
      },
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
      ],
      faq: [
        { question: "What is the difference of S-Type motors?", answer: "S-Type motors are designed with a focus on energy efficiency and low operating costs. It consumes less energy than standard motors with its special coil structure and hydraulic design." },
        { question: "In which voltage ranges does it operate?", answer: "It operates in the 380-415V range and shows high resistance to voltage fluctuations." }
      ]
    },
    AR: {
      name: 'محركات غاطسة S-TYPE',
      modelCode: 'KMS',
      subCategory: 'محركات غاطسة',
      description: 'محركات S-Type الغاطسة هي جيل جديد من المحركات المبردة بالماء والمحسنة لكفاءة الطاقة والمتانة.',
      longDescription: `محركات S-Type الغاطسة هي جيل جديد من المحركات المبردة بالماء والمحسنة لكفاءة الطاقة والمتانة. يوفر استهلاكًا منخفضًا للطاقة وأداءً عاليًا معًا. يضمن الهيكل المصنوع من الفولاذ المقاوم للصدأ والمكونات المقاومة للتآكل استخدامًا طويل الأمد. تحمل عالي لتقلبات الجهد.`,
      features: [
        'كفاءة عالية في استخدام الطاقة وتكلفة تشغيل منخفضة',
        'هيكل متين من الفولاذ المقاوم للصدأ',
        'سهولة الصيانة والإصلاح',
        'خيارات درجة حرارة قصوى 75 درجة مئوية و 90 درجة مئوية'
      ],
      specs: {
        'أقصى حمل محوري': '50.000 نيوتن',
        'أقصى درجة حرارة محيطة': '35 درجة مئوية (اختياري 90 درجة)',
        'فئة العزل': 'الفئة F',
        'فئة الحماية': 'IP68',
        'الاتصال': 'معيار NEMA',
        'التبريد': 'تبريد مائي',
        'الكفاءة': '80٪ - 83٪'
      },
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
      ],
      faq: [
        { question: "ما هو الفرق بين محركات S-Type؟", answer: "تم تصميم محركات S-Type مع التركيز على كفاءة الطاقة وتكاليف التشغيل المنخفضة. تستهلك طاقة أقل من المحركات القياسية بفضل هيكل الملف الخاص والتصميم الهيدروليكي." },
        { question: "في أي نطاقات الجهد تعمل؟", answer: "تعمل في نطاق 380-415 فولت وتظهر مقاومة عالية لتقلبات الجهد." }
      ]
    },
    ES: {
      name: 'Motores Sumergibles S-TYPE',
      modelCode: 'KMS',
      subCategory: 'Motores Sumergibles',
      description: 'Los motores sumergibles S-Type son motores de nueva generación enfriados por agua optimizados para la eficiencia energética y la durabilidad.',
      longDescription: `Los motores sumergibles S-Type son motores de nueva generación enfriados por agua optimizados para la eficiencia energética y la durabilidad. Ofrece bajo consumo de energía y alto rendimiento juntos. El cuerpo de acero inoxidable y los componentes resistentes a la corrosión garantizan un uso duradero. Alta tolerancia a las fluctuaciones de voltaje.`,
      features: [
        'Alta eficiencia energética y bajo costo operativo',
        'Cuerpo de acero inoxidable duradero',
        'Fácil mantenimiento y reparación',
        'Opciones de temperatura máxima de 75°C y 90°C'
      ],
      specs: {
        'Carga Axial Máxima': '50.000 N',
        'Temp. Amb. Máx.': '35°C (Opcional 90°C)',
        'Clase de Aislamiento': 'Clase F',
        'Clase de Protección': 'IP68',
        'Conexión': 'Estándar NEMA',
        'Refrigeración': 'Enfriado por Agua',
        'Eficiencia': '80% - 83%'
      },
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
      ],
      faq: [
        { question: "¿Cuál es la diferencia de los motores S-Type?", answer: "Los motores S-Type están diseñados con un enfoque en la eficiencia energética y los bajos costos operativos. Consume menos energía que los motores estándar con su estructura de bobina especial y diseño hidráulico." },
        { question: "¿En qué rangos de voltaje funciona?", answer: "Funciona en el rango de 380-415V y muestra una alta resistencia a las fluctuaciones de voltaje." }
      ]
    },
    PT: {
      name: 'Motores Submersíveis S-TYPE',
      modelCode: 'KMS',
      subCategory: 'Motores Submersíveis',
      description: 'Os Motores Submersíveis S-Type são motores de nova geração resfriados a água otimizados para eficiência energética e durabilidade.',
      longDescription: `Os Motores Submersíveis S-Type são motores de nova geração resfriados a água otimizados para eficiência energética e durabilidade. Oferece baixo consumo de energia e alto desempenho juntos. Corpo em aço inoxidável e componentes resistentes à corrosão garantem uso duradouro. Alta tolerância a flutuações de tensão.`,
      features: [
        'Alta eficiência energética e baixo custo operacional',
        'Corpo em aço inoxidável durável',
        'Fácil manutenção e reparo',
        'Opções de temperatura máxima de 75°C e 90°C'
      ],
      specs: {
        'Carga Axial Máxima': '50.000 N',
        'Temp. Amb. Máx.': '35°C (Opcional 90°C)',
        'Classe de Isolamento': 'Classe F',
        'Classe de Proteção': 'IP68',
        'Conexão': 'Padrão NEMA',
        'Resfriamento': 'Resfriado a Água',
        'Eficiência': '80% - 83%'
      },
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
      ],
      faq: [
        { question: "Qual a diferença dos motores S-Type?", answer: "Os motores S-Type são projetados com foco na eficiência energética e baixos custos operacionais. Consome menos energia que os motores padrão com sua estrutura de bobina especial e design hidráulico." },
        { question: "Em quais faixas de tensão opera?", answer: "Opera na faixa de 380-415V e apresenta alta resistência a flutuações de tensão." }
      ]
    }
  }
};

export const products: Product[] = [
  // 1. Paslanmaz Çelik Dalgıç Pompalar (KP)
  {
    id: 'kp',
    name: 'Paslanmaz Çelik Dalgıç Pompalar',
    modelCode: 'KP - KPS',
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
    name: 'Noryl Dalgıç Pompalar',
    modelCode: 'KPN4',
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
    name: 'Pik Döküm Dalgıç Pompalar',
    modelCode: 'KPD',
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
    name: 'Paslanmaz Döküm Dalgıç Pompalar',
    modelCode: 'KSX',
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
    name: 'Yağlı Tip Dalgıç Motorlar',
    modelCode: 'KM4',
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
    specs: {
      'Güç Aralığı': '0.37 – 7.5 kW',
      'Maksimum Sıvı Sıcaklığı': '+35 °C',
      'Maksimum Daldırma': '200 metre',
      'Yol Verme Kapasitesi': '24 kez/saat',
      'Asgari Soğutma Akış Hızı': '8 cm/s',
      'Sürekli Servis Sınıfı': 'S1',
      'Koruma Sınıfı': 'IP68',
      'İzolasyon Sınıfı': 'F',
      'Motor Tipi': '2 kutuplu, 50 Hz (n ≈ 2900 rpm)',
      'Voltaj (Monofaz)': '210 – 220 – 230 V',
      'Voltaj (Trifaz)': '380 – 400 – 415 V'
    },
    subSpecs: [
      {
        title: 'Monofaze 4" Dalgıç Motor Listesi',
        columns: ['Model', 'Güç (HP/kW)', 'Devir', 'Eksenel Yük', 'cos φ', 'Verim', 'Kapasitör', 'Uzunluk', 'Ağırlık', 'Voltaj / Akım'],
        data: [
          ['KM4-0.55M', '0,55 HP / 0,37 kW', '2835 RPM', '2 kN', '0,87', '%60', '20 µF', '415 mm', '8,2 kg', '3,2 A'],
          ['KM4-0.75M', '0,75 HP / 0,55 kW', '2835 RPM', '2 kN', '0,92', '%83', '30 µF', '430 mm', '9,1 kg', '3,3 A'],
          ['KM4-1M', '1 HP / 0,75 kW', '2845 RPM', '2 kN', '0,88', '%71', '35 µF', '465 mm', '10,5 kg', '5,4 A'],
          ['KM4-1.5M', '1,5 HP / 1,1 kW', '2820 RPM', '2 kN', '0,88', '%67', '45 µF', '475 mm', '11,2 kg', '8,5 A'],
          ['KM4-2M', '2 HP / 1,5 kW', '2825 RPM', '3 kN', '0,87', '%74', '60 µF', '538 mm', '15 kg', '10,7 A'],
          ['KM4-3M', '3 HP / 2,2 kW', '2840 RPM', '3 kN', '0,87', '%87', '75 µF', '600 mm', '17 kg', '13,2 A'],
          ['KM4-4M', '4 HP / 3 kW', '2840 RPM', '3 kN', '0,89', '%75', '90 µF', '635 mm', '20 kg', '20,5 A']
        ]
      },
      {
        title: 'Trifaze 4" Dalgıç Motor Listesi',
        columns: ['Model', 'Güç (HP/kW)', 'Devir', 'Eksenel Yük', 'cos φ', 'Verim', 'Uzunluk', 'Ağırlık', 'Akım (220-230V)', 'Akım (400-415V)'],
        data: [
          ['KM4-0.75T', '0,75 HP / 0,55 kW', '2825 RPM', '2 kN', '0,71', '%65', '415 mm', '7,8 kg', '3,8 A', '1,8 A'],
          ['KM4-1T', '1 HP / 0,75 kW', '2825 RPM', '2 kN', '0,71', '%65', '430 mm', '9,2 kg', '4,7 A', '2,5 A'],
          ['KM4-1.5T', '1,5 HP / 1,1 kW', '2820 RPM', '2 kN', '0,77', '%64', '465 mm', '10,6 kg', '6,5 A', '3,4 A'],
          ['KM4-2T', '2 HP / 1,5 kW', '2820 RPM', '2 kN', '0,75', '%71', '473 mm', '11,4 kg', '8,1 A', '4,3 A'],
          ['KM4-3T', '3 HP / 2,2 kW', '2810 RPM', '3 kN', '0,77', '%73', '566 mm', '14,8 kg', '10,4 A', '6 A'],
          ['KM4-4T', '4 HP / 3 kW', '2800 RPM', '3 kN', '0,77', '%80', '600 mm', '17,9 kg', '12,3 A', '7,4 A'],
          ['KM4-5.5T', '5,5 HP / 4 kW', '2810 RPM', '3 kN', '0,78', '%83', '635 mm', '19,9 kg', '16 A', '9,5 A'],
          ['KM4-7.5T', '7,5 HP / 5,5 kW', '2840 RPM', '5 kN', '0,78', '%88', '775 mm', '25 kg', '25 A', '12,2 A'],
          ['KM4-10T', '10 HP / 7,5 kW', '2830 RPM', '5 kN', '0,77', '%85', '862 mm', '29,4 kg', '32 A', '17,5 A']
        ]
      }
    ],
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
    name: 'HI-TEMP Dalgıç Motorlar',
    modelCode: 'KM',
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
      'Güç Aralığı': 'kW’tan 260 kW’a (5.5 HP’den 350 HP’ye) kadar',
      'Bağlantı': 'NEMA Standartlarına Uygun',
      'Malzeme Opsiyonu': 'AISI 304, AISI 316, BRONZE, DUBLEX, SUPER DUBLEX',
      'Soğutma Sistemi': 'Su ile Soğutmalı Sistem',
      'Kurulum Pozisyonu': 'Dikey ve Yatay',
      'Çalışma Yönü': 'Saat yönünde ve tersinde',
      'Standart Voltaj': '380/415V – 50/60 Hz (Voltaj toleransı ±%10)',
      'Hız Ayarı': 'Frekans konvertörü ile istenen devirde çalıştırılabilme (30 Hz üzerinde)'
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
    name: 'S-Type Dalgıç Motorlar',
    modelCode: 'KMS',
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
      'Malzeme Opsiyonu': 'AISI 304 - AISI 316 - BRONZE - DUBLEX - SUPER DUBLEX',
      'Soğutma Sistemi': 'Su ile Soğutmalı Sistem',
      'Kurulum Pozisyonu': 'Dikey ve Yatay',
      'Çalışma Yönü': 'Saat Yönünde ve Tersinde',
      'Standart Voltaj': '380/415V – 50/60Hz (Voltaj toleransı ±%10)',
      'Hız Ayarı': 'Frekans Konvertörü ile İstenen Devirde Çalıştırılabilme (30Hz üzerinde)'
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
