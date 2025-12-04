import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'TR' | 'EN' | 'AR' | 'ES' | 'PT';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Pump Selector Wizard
  'wizard.title': { TR: 'Pompa Seçim Sihirbazı', EN: 'Pump Selection Wizard', AR: 'معالج اختيار المضخة', ES: 'Asistente de Selección de Bombas', PT: 'Assistente de Seleção de Bombas' },
  'wizard.subtitle': { TR: 'İhtiyacınıza en uygun pompayı saniyeler içinde bulun.', EN: 'Find the most suitable pump for your needs in seconds.', AR: 'اعثر على المضخة الأنسب لاحتياجاتك في ثوانٍ.', ES: 'Encuentre la bomba más adecuada para sus necesidades en segundos.', PT: 'Encontre a bomba mais adequada às suas necessidades em segundos.' },
  'wizard.start_btn': { TR: 'Sihirbazı Başlat', EN: 'Start Wizard', AR: 'بدء المعالج', ES: 'Iniciar Asistente', PT: 'Iniciar Assistente' },
  'wizard.step1.badge': { TR: 'ADIM 1 / 3', EN: 'STEP 1 / 3', AR: 'الخطوة 1 / 3', ES: 'PASO 1 / 3', PT: 'PASSO 1 / 3' },
  'wizard.step1.title': { TR: 'Uygulama Alanı', EN: 'Application Area', AR: 'منطقة التطبيق', ES: 'Área de Aplicación', PT: 'Área de Aplicação' },
  'wizard.step1.subtitle': { TR: 'Pompayı nerede kullanacaksınız?', EN: 'Where will you use the pump?', AR: 'أين ستستخدم المضخة؟', ES: '¿Dónde utilizará la bomba?', PT: 'Onde você usará a bomba?' },
  'wizard.step2.title': { TR: 'Teknik Gereksinimler', EN: 'Technical Requirements', AR: 'المتطلبات الفنية', ES: 'Requisitos Técnicos', PT: 'Requisitos Técnicos' },
  'wizard.step2.subtitle': { TR: 'İstenen debi ve basma yüksekliği değerleri', EN: 'Desired flow rate and head values', AR: 'قيم معدل التدفق والرأس المطلوبة', ES: 'Valores deseados de caudal y altura', PT: 'Valores desejados de vazão e altura manométrica' },
  'wizard.step3.title': { TR: 'Sonuçlar', EN: 'Results', AR: 'النتائج', ES: 'Resultados', PT: 'Resultados' },
  'wizard.step3.subtitle': { TR: 'Sizin için seçtiğimiz pompalar', EN: 'Pumps we selected for you', AR: 'المضخات التي اخترناها لك', ES: 'Bombas que seleccionamos para usted', PT: 'Bombas que selecionamos para você' },
  'wizard.flow_rate': { TR: 'Debi (m³/saat)', EN: 'Flow Rate (m³/h)', AR: 'معدل التدفق (متر مكعب/ساعة)', ES: 'Caudal (m³/h)', PT: 'Vazão (m³/h)' },
  'wizard.head': { TR: 'Basma Yüksekliği (mSS)', EN: 'Head (m)', AR: 'الرأس (متر)', ES: 'Altura (m)', PT: 'Altura Manométrica (m)' },
  'wizard.calculate': { TR: 'POMPALARI BUL', EN: 'FIND PUMPS', AR: 'ابحث عن المضخات', ES: 'ENCONTRAR BOMBAS', PT: 'ENCONTRAR BOMBAS' },
  'wizard.back': { TR: 'Geri', EN: 'Back', AR: 'خلف', ES: 'Atrás', PT: 'Voltar' },
  'wizard.next': { TR: 'İleri', EN: 'Next', AR: 'التالي', ES: 'Siguiente', PT: 'Próximo' },
  'wizard.reset': { TR: 'Baştan Başla', EN: 'Start Over', AR: 'ابدأ من جديد', ES: 'Empezar de Nuevo', PT: 'Começar de Novo' },
  'wizard.no_results': { TR: 'Kriterlerinize uygun pompa bulunamadı.', EN: 'No pumps found matching your criteria.', AR: 'لم يتم العثور على مضخات تطابق معاييرك.', ES: 'No se encontraron bombas que coincidan con sus criterios.', PT: 'Nenhuma bomba encontrada correspondente aos seus critérios.' },
  'wizard.app.clean': { TR: 'Temiz Su', EN: 'Clean Water', AR: 'مياه نظيفة', ES: 'Agua Limpia', PT: 'Água Limpa' },
  'wizard.app.sandy': { TR: 'Kumlu Su', EN: 'Sandy Water', AR: 'مياه رملية', ES: 'Agua Arenosa', PT: 'Água Arenosa' },
  'wizard.app.sewage': { TR: 'Atık Su / Foseptik', EN: 'Sewage / Wastewater', AR: 'مياه الصرف الصحي', ES: 'Aguas Residuales', PT: 'Esgoto / Águas Residuais' },
  'wizard.app.industrial': { TR: 'Endüstriyel', EN: 'Industrial', AR: 'صناعي', ES: 'Industrial', PT: 'Industrial' },
  'wizard.match_score': { TR: 'Eşleşme Skoru', EN: 'Match Score', AR: 'درجة التطابق', ES: 'Puntuación de Coincidencia', PT: 'Pontuação de Correspondência' },
  'wizard.analysis': { TR: 'Teknik Analiz', EN: 'Technical Analysis', AR: 'التحليل الفني', ES: 'Análisis Técnico', PT: 'Análise Técnica' },
  'wizard.performance': { TR: 'Performans', EN: 'Performance', AR: 'الأداء', ES: 'Rendimiento', PT: 'Desempenho' },
  'wizard.capacity_usage': { TR: 'Kapasite Kullanımı', EN: 'Capacity Usage', AR: 'استخدام السعة', ES: 'Uso de Capacidad', PT: 'Uso da Capacidade' },
  'wizard.status.optimal': { TR: 'OPTİMAL ÇALIŞMA', EN: 'OPTIMAL OPERATION', AR: 'تشغيل مثالي', ES: 'OPERACIÓN ÓPTIMA', PT: 'OPERAÇÃO OTIMIZADA' },
  'wizard.status.efficient': { TR: 'YÜKSEK VERİM', EN: 'HIGH EFFICIENCY', AR: 'كفاءة عالية', ES: 'ALTA EFICIENCIA', PT: 'ALTA EFICIÊNCIA' },
  'wizard.status.oversized': { TR: 'YÜKSEK KAPASİTE', EN: 'HIGH CAPACITY', AR: 'سعة عالية', ES: 'ALTA CAPACIDAD', PT: 'ALTA CAPACIDADE' },
  'wizard.status.limit': { TR: 'SINIR DEĞER', EN: 'LIMIT VALUE', AR: 'قيمة الحد', ES: 'VALOR LÍMITE', PT: 'VALOR LIMITE' },
  'wizard.tech.voltage': { TR: 'Voltaj', EN: 'Voltage', AR: 'الجهد', ES: 'Voltaje', PT: 'Tensão' },
  'wizard.tech.outlet': { TR: 'Çıkış', EN: 'Outlet', AR: 'المخرج', ES: 'Salida', PT: 'Saída' },
  'wizard.tech.diameter': { TR: 'Çap', EN: 'Diameter', AR: 'القطر', ES: 'Diámetro', PT: 'Diâmetro' },
  'wizard.calc.note': { TR: 'Bu sonuçlar teorik verilere dayanmaktadır. Kesin seçim için uzmanlarımızla görüşün.', EN: 'These results are based on theoretical data. Consult our experts for precise selection.', AR: 'تستند هذه النتائج إلى بيانات نظرية. استشر خبراؤنا للاختيار الدقيق.', ES: 'Estos resultados se basan en datos teóricos. Consulte a nuestros expertos para una selección precisa.', PT: 'Esses resultados são baseados em dados teóricos. Consulte nossos especialistas para uma seleção precisa.' },

  // Navbar
  'nav.home': { TR: 'Ana Sayfa', EN: 'Home', AR: 'الرئيسية', ES: 'Inicio', PT: 'Início' },
  'nav.corporate': { TR: 'Kurumsal', EN: 'Corporate', AR: 'الشركة', ES: 'Corporativo', PT: 'Corporativo' },
  'nav.about': { TR: 'Hakkımızda', EN: 'About Us', AR: 'من نحن', ES: 'Sobre Nosotros', PT: 'Sobre Nós' },
  'nav.rd': { TR: 'Ar-Ge Merkezi', EN: 'R&D Center', AR: 'مركز البحث والتطوير', ES: 'Centro de I+D', PT: 'Centro de P&D' },
  'nav.certificates': { TR: 'Sertifikalarımız', EN: 'Certificates', AR: 'الشهادات', ES: 'Certificados', PT: 'Certificados' },
  'nav.contact': { TR: 'İletişim', EN: 'Contact', AR: 'اتصل بنا', ES: 'Contacto', PT: 'Contato' },
  'nav.products': { TR: 'Ürünler', EN: 'Products', AR: 'المنتجات', ES: 'Productos', PT: 'Produtos' },
  'nav.products.kp': { TR: 'Paslanmaz Çelik Dalgıç Pompalar', EN: 'Stainless Steel Submersible Pumps', AR: 'مضخات غاطسة من الفولاذ المقاوم للصدأ', ES: 'Bombas Sumergibles de Acero Inoxidable', PT: 'Bombas Submersíveis de Aço Inoxidável' },
  'nav.products.kpn': { TR: '4″ Noryl Dalgıç Pompalar', EN: '4″ Noryl Submersible Pumps', AR: 'مضخات غاطسة نوريل 4 بوصة', ES: 'Bombas Sumergibles Noryl de 4″', PT: 'Bombas Submersíveis Noryl de 4″' },
  'nav.products.kpd': { TR: 'Pik Döküm Dalgıç Pompalar', EN: 'Cast Iron Submersible Pumps', AR: 'مضخات غاطسة من الحديد الزهر', ES: 'Bombas Sumergibles de Hierro Fundido', PT: 'Bombas Submersíveis de Ferro Fundido' },
  'nav.products.ksx': { TR: 'Paslanmaz Döküm Dalgıç Pompalar', EN: 'Stainless Cast Submersible Pumps', AR: 'مضخات غاطسة مصبوبة من الفولاذ المقاوم للصدأ', ES: 'Bombas Sumergibles de Fundición Inoxidable', PT: 'Bombas Submersíveis de Fundição Inoxidável' },
  'nav.products.km': { TR: 'Hi-Temp Dalgıç Motorlar', EN: 'Hi-Temp Submersible Motors', AR: 'محركات غاطسة عالية الحرارة', ES: 'Motores Sumergibles de Alta Temperatura', PT: 'Motores Submersíveis de Alta Temperatura' },
  'nav.products.kms': { TR: 'S-Type Dalgıç Motorlar', EN: 'S-Type Submersible Motors', AR: 'محركات غاطسة S-Type', ES: 'Motores Sumergibles S-Type', PT: 'Motores Submersíveis S-Type' },
  'nav.products.km4': { TR: '4" Yağlı Tip Dalgıç Motorlar', EN: '4" Oil Filled Submersible Motors', AR: 'محركات غاطسة مملوءة بالزيت 4 بوصة', ES: 'Motores Sumergibles Llenos de Aceite de 4"', PT: 'Motores Submersíveis a Óleo de 4"' },
  'nav.pumps': { TR: 'Dalgıç Pompalar', EN: 'Submersible Pumps', AR: 'مضخات غاطسة', ES: 'Bombas Sumergibles', PT: 'Bombas Submersíveis' },
  'nav.motors': { TR: 'Dalgıç Motorlar', EN: 'Submersible Motors', AR: 'محركات غاطسة', ES: 'Motores Sumergibles', PT: 'Motores Submersíveis' },
  'nav.view_catalog': { TR: 'GÖRÜNTÜLE', EN: 'VIEW', AR: 'عرض', ES: 'VER', PT: 'VER' },
  'nav.catalog_title': { TR: 'KURLAR KATALOG', EN: 'KURLAR CATALOG', AR: 'كتالوج كورلار', ES: 'CATÁLOGO KURLAR', PT: 'CATÁLOGO KURLAR' },
  'nav.dealer_service': { TR: 'Bayi & Servis', EN: 'Dealer & Service', AR: 'الوكيل والخدمة', ES: 'Distribuidor y Servicio', PT: 'Revendedor e Serviço' },
  'nav.dealer_network': { TR: 'Yurt İçi Bayi & Servis Ağı', EN: 'Domestic Dealer & Service Network', AR: 'شبكة الوكلاء والخدمة المحلية', ES: 'Red Nacional de Distribuidores y Servicio', PT: 'Rede Nacional de Revendedores e Serviço' },
  'nav.career': { TR: 'Kariyer', EN: 'Career', AR: 'وظائف', ES: 'Carrera', PT: 'Carreira' },
  'nav.open_positions': { TR: 'Açık Pozisyonlar', EN: 'Open Positions', AR: 'الوظائف المتاحة', ES: 'Posiciones Abiertas', PT: 'Vagas Abertas' },

  // Hero
  'hero.inspired_by_history': { TR: 'TARİHİMİZDEN İLHAM ALINDI,', EN: 'INSPIRED BY OUR HISTORY,', AR: 'مستوحى من تاريخنا،', ES: 'INSPIRADO EN NUESTRA HISTORIA,', PT: 'INSPIRADO EM NOSSA HISTÓRIA,' },
  'hero.designed_for_future': { TR: 'GELECEK İÇİN TASARLANDI', EN: 'DESIGNED FOR THE FUTURE', AR: 'صممت للمستقبل', ES: 'DISEÑADO PARA EL FUTURO', PT: 'PROJETADO PARA O FUTURO' },
  'hero.dealer_network_btn': { TR: 'Bayi Ağı', EN: 'Dealer Network', AR: 'شبكة الوكلاء', ES: 'Red de Distribuidores', PT: 'Rede de Revendedores' },
  'hero.scroll_down': { TR: 'Aşağı Kaydır', EN: 'Scroll Down', AR: 'للمزيد', ES: 'Desplazarse', PT: 'Rolar para Baixo' },
  'hero.title': { TR: 'Suyun Gücünü Yöneten Teknoloji', EN: 'Technology Managing the Power of Water', AR: 'التكنولوجيا التي تدير قوة المياه', ES: 'Tecnología que Gestiona el Poder del Agua', PT: 'Tecnologia Gerenciando o Poder da Água' },
  'hero.subtitle': { TR: 'Yüksek verimli dalgıç pompa ve motor çözümleri ile geleceği tasarlıyoruz.', EN: 'We design the future with high-efficiency submersible pump and motor solutions.', AR: 'نصمم المستقبل بحلول مضخات ومحركات غاطسة عالية الكفاءة.', ES: 'Diseñamos el futuro con soluciones de bombas y motores sumergibles de alta eficiencia.', PT: 'Projetamos o futuro com soluções de bombas e motores submersíveis de alta eficiência.' },
  'hero.discover': { TR: 'Ürünleri Keşfet', EN: 'Discover Products', AR: 'اكتشف المنتجات', ES: 'Descubrir Productos', PT: 'Descobrir Produtos' },
  'hero.contact_us': { TR: 'Bize Ulaşın', EN: 'Contact Us', AR: 'اتصل بنا', ES: 'Contáctenos', PT: 'Contate-nos' },

  // R&D Center
  'rnd.title': { TR: 'Ar-Ge Merkezi', EN: 'R&D Center', AR: 'مركز البحث والتطوير', ES: 'Centro de I+D', PT: 'Centro de P&D' },
  'rnd.desc': { TR: 'Yenilikçi teknolojiler ve mühendislik çözümleri ile geleceği tasarlıyoruz.', EN: 'We design the future with innovative technologies and engineering solutions.', AR: 'نصمم المستقبل بتقنيات مبتكرة وحلول هندسية.', ES: 'Diseñamos el futuro con tecnologías innovadoras y soluciones de ingeniería.', PT: 'Projetamos o futuro com tecnologias inovadoras e soluções de engenharia.' },
  'rnd.design_power': { TR: 'Mühendislik ve Tasarım Gücü', EN: 'Engineering and Design Power', AR: 'قوة الهندسة والتصميم', ES: 'Poder de Ingeniería y Diseño', PT: 'Poder de Engenharia e Design' },
  'rnd.design_desc1': { TR: 'Kurlar Ar-Ge Merkezi, sektörün en gelişmiş tasarım ve simülasyon yazılımlarını kullanarak ürün geliştirme süreçlerini yönetmektedir.', EN: 'Kurlar R&D Center manages product development processes using the sector\'s most advanced design and simulation software.', AR: 'يدير مركز Kurlar للبحث والتطوير عمليات تطوير المنتجات باستخدام برامج التصميم والمحاكاة الأكثر تقدمًا في القطاع.', ES: 'El Centro de I+D de Kurlar gestiona los procesos de desarrollo de productos utilizando el software de diseño y simulación más avanzado del sector.', PT: 'O Centro de P&D da Kurlar gerencia os processos de desenvolvimento de produtos usando o software de design e simulação mais avançado do setor.' },
  'rnd.design_desc2': { TR: 'Her yeni ürün, kapsamlı analizler ve testlerden geçerek üretime hazırlanır. Amacımız, maksimum verimlilik ve dayanıklılık sunan ürünler tasarlamaktır.', EN: 'Every new product is prepared for production through comprehensive analysis and testing. Our goal is to design products that offer maximum efficiency and durability.', AR: 'يتم إعداد كل منتج جديد للإنتاج من خلال التحليل والاختبار الشامل. هدفنا هو تصميم منتجات تقدم أقصى قدر من الكفاءة والمتانة.', ES: 'Cada nuevo producto se prepara para la producción a través de análisis y pruebas exhaustivas. Nuestro objetivo es diseñar productos que ofrezcan la máxima eficiencia y durabilidad.', PT: 'Cada novo produto é preparado para a produção através de análises e testes abrangentes. Nosso objetivo é projetar produtos que ofereçam máxima eficiência e durabilidade.' },
  'rnd.precision_production': { TR: 'Hassas Üretim', EN: 'Precision Production', AR: 'إنتاج دقيق', ES: 'Producción de Precisión', PT: 'Produção de Precisão' },
  'rnd.quality_control': { TR: 'Kalite Kontrol', EN: 'Quality Control', AR: 'مراقبة الجودة', ES: 'Control de Calidad', PT: 'Controle de Qualidade' },
  'rnd.process_title': { TR: 'Geliştirme Süreci', EN: 'Development Process', AR: 'عملية التطوير', ES: 'Proceso de Desarrollo', PT: 'Processo de Desenvolvimento' },
  'rnd.process_desc': { TR: 'Fikirden ürüne uzanan yolculuğumuzda titiz bir çalışma süreci izliyoruz.', EN: 'We follow a meticulous work process in our journey from idea to product.', AR: 'نحن نتبع عملية عمل دقيقة في رحلتنا من الفكرة إلى المنتج.', ES: 'Seguimos un proceso de trabajo meticuloso en nuestro viaje de la idea al producto.', PT: 'Seguimos um processo de trabalho meticuloso em nossa jornada da ideia ao produto.' },
  
  'rnd.steps.1': { TR: 'İhtiyaç Analizi ve Pazar Araştırması', EN: 'Needs Analysis and Market Research', AR: 'تحليل الاحتياجات وأبحاث السوق', ES: 'Análisis de Necesidades e Investigación de Mercado', PT: 'Análise de Necessidades e Pesquisa de Mercado' },
  'rnd.steps.2': { TR: 'Teknik Tasarım ve Simülasyon', EN: 'Technical Design and Simulation', AR: 'التصميم الفني والمحاكاة', ES: 'Diseño Técnico y Simulación', PT: 'Design Técnico e Simulação' },
  'rnd.steps.3': { TR: 'Prototip Üretimi ve Doğrulama', EN: 'Prototype Production and Validation', AR: 'إنتاج النموذج الأولي والتحقق منه', ES: 'Producción de Prototipos y Validación', PT: 'Produção de Protótipos e Validação' },
  'rnd.steps.4': { TR: 'Seri Üretim ve Kalite Kontrol', EN: 'Mass Production and Quality Control', AR: 'الإنتاج الضخم ومراقبة الجودة', ES: 'Producción en Masa y Control de Calidad', PT: 'Produção em Massa e Controle de Qualidade' },

  'rnd.features.design.title': { TR: 'Ürün Tasarımı', EN: 'Product Design', AR: 'تصميم المنتج', ES: 'Diseño de Producto', PT: 'Design de Produto' },
  'rnd.features.design.desc': { TR: 'CAD/CAM yazılımları ile 3D modelleme ve hidrolik tasarım optimizasyonu.', EN: '3D modeling and hydraulic design optimization with CAD/CAM software.', AR: 'النمذجة ثلاثية الأبعاد وتحسين التصميم الهيدروليكي باستخدام برامج CAD/CAM.', ES: 'Modelado 3D y optimización del diseño hidráulico con software CAD/CAM.', PT: 'Modelagem 3D e otimização de design hidráulico com software CAD/CAM.' },
  'rnd.features.performance.title': { TR: 'Performans Testleri', EN: 'Performance Tests', AR: 'اختبارات الأداء', ES: 'Pruebas de Rendimiento', PT: 'Testes de Desempenho' },
  'rnd.features.performance.desc': { TR: 'Bilgisayar kontrollü test istasyonlarında debi, basınç ve verimlilik ölçümleri.', EN: 'Flow, pressure and efficiency measurements in computer-controlled test stations.', AR: 'قياسات التدفق والضغط والكفاءة في محطات الاختبار التي يتم التحكم فيها بواسطة الكمبيوتر.', ES: 'Mediciones de flujo, presión y eficiencia en estaciones de prueba controladas por computadora.', PT: 'Medições de fluxo, pressão e eficiência em estações de teste controladas por computador.' },
  'rnd.features.durability.title': { TR: 'Dayanıklılık Analizi', EN: 'Durability Analysis', AR: 'تحليل المتانة', ES: 'Análisis de Durabilidad', PT: 'Análise de Durabilidade' },
  'rnd.features.durability.desc': { TR: 'Malzeme yorulma testleri ve korozyon direnci analizleri.', EN: 'Material fatigue tests and corrosion resistance analyses.', AR: 'اختبارات إجهاد المواد وتحليلات مقاومة التآكل.', ES: 'Pruebas de fatiga de materiales y análisis de resistencia a la corrosión.', PT: 'Testes de fadiga de materiais e análises de resistência à corrosão.' },

  // About - History
  'about.history.title': { TR: 'Tarihçe', EN: 'History', AR: 'تاريخ', ES: 'Historia', PT: 'História' },
  'about.history.subtitle': { TR: 'Başarılarla Dolu Yarım Asır', EN: 'Half a Century Full of Success', AR: 'نصف قرن مليء بالنجاح', ES: 'Medio Siglo Lleno de Éxito', PT: 'Meio Século Cheio de Sucesso' },
  
  // Contact Form
  'contact.form.title': { TR: 'Bize Ulaşın', EN: 'Get in Touch', AR: 'تواصل معنا', ES: 'Póngase en Contacto', PT: 'Entre em Contato' },
  'contact.form.subtitle': { TR: 'Sorularınız, görüşleriniz veya teklif talepleriniz için aşağıdaki formu doldurabilirsiniz.', EN: 'You can fill out the form below for your questions, opinions or quote requests.', AR: 'يمكنك ملء النموذج أدناه لأسئلتك أو آرائك أو طلبات عروض الأسعار.', ES: 'Puede completar el formulario a continuación para sus preguntas, opiniones o solicitudes de cotización.', PT: 'Você pode preencher o formulário abaixo para suas dúvidas, opiniões ou solicitações de cotação.' },
  'contact.form.name': { TR: 'Adınız Soyadınız', EN: 'Full Name', AR: 'الاسم الكامل', ES: 'Nombre Completo', PT: 'Nome Completo' },
  'contact.form.email': { TR: 'E-posta Adresi', EN: 'Email Address', AR: 'عنوان البريد الإلكتروني', ES: 'Dirección de Correo Electrónico', PT: 'Endereço de E-mail' },
  'contact.form.phone': { TR: 'Telefon Numarası', EN: 'Phone Number', AR: 'رقم الهاتف', ES: 'Número de Teléfono', PT: 'Número de Telefone' },
  'contact.form.subject': { TR: 'Konu', EN: 'Subject', AR: 'الموضوع', ES: 'Asunto', PT: 'Assunto' },
  'contact.form.message': { TR: 'Mesajınız', EN: 'Your Message', AR: 'رسالتك', ES: 'Su Mensaje', PT: 'Sua Mensagem' },
  'contact.form.send': { TR: 'GÖNDER', EN: 'SEND', AR: 'إرسال', ES: 'ENVIAR', PT: 'ENVIAR' },
  'contact.form.success': { TR: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.', EN: 'Your message has been sent successfully. We will get back to you as soon as possible.', AR: 'تم إرسال رسالتك بنجاح. سنعود إليك في أقرب وقت ممكن.', ES: 'Su mensaje ha sido enviado con éxito. Nos pondremos en contacto con usted lo antes posible.', PT: 'Sua mensagem foi enviada com sucesso. Entraremos em contato com você o mais breve possível.' },

  // Product Card UI
  'product.review': { TR: 'İncele', EN: 'Review', AR: 'مراجعة', ES: 'Revisar', PT: 'Revisão' },
  'product.general_specs': { TR: 'Genel Teknik Özellikler', EN: 'General Technical Specifications', AR: 'المواصفات الفنية العامة', ES: 'Especificaciones Técnicas Generales', PT: 'Especificações Técnicas Gerais' },
  'product.monophase': { TR: 'Monofaze', EN: 'Monophase', AR: 'أحادي الطور', ES: 'Monofásico', PT: 'Monofásico' },
  'product.triphase': { TR: 'Trifaze', EN: 'Triphase', AR: 'ثلاثي الطور', ES: 'Trifásico', PT: 'Trifásico' },
  'product.category.pump': { TR: 'Dalgıç Pompa', EN: 'Submersible Pump', AR: 'مضخة غاطسة', ES: 'Bomba Sumergible', PT: 'Bomba Submersível' },
  'product.category.motor': { TR: 'Dalgıç Motor', EN: 'Submersible Motor', AR: 'محرك غاطس', ES: 'Motor Sumergible', PT: 'Motor Submersível' },
  
  // Products Page
  'products.search_results': { TR: 'Arama Sonuçları', EN: 'Search Results', AR: 'نتائج البحث', ES: 'Resultados de la Búsqueda', PT: 'Resultados da Pesquisa' },
  'products.title': { TR: 'Ürünlerimiz', EN: 'Our Products', AR: 'منتجاتنا', ES: 'Nuestros Productos', PT: 'Nossos Produtos' },
  'products.subtitle': { TR: 'Yüksek performanslı dalgıç pompa ve motor çözümlerimizi keşfedin.', EN: 'Discover our high-performance submersible pump and motor solutions.', AR: 'اكتشف حلولنا للمضخات والمحركات الغاطسة عالية الأداء.', ES: 'Descubra nuestras soluciones de bombas y motores sumergibles de alto rendimiento.', PT: 'Descubra nossas soluções de bombas e motores submersíveis de alto desempenho.' },
  'products.pumps_desc': { TR: 'Her türlü ihtiyaca uygun geniş pompa seçenekleri', EN: 'Wide range of pump options suitable for every need', AR: 'مجموعة واسعة من خيارات المضخات المناسبة لكل الاحتياجات', ES: 'Amplia gama de opciones de bombas adecuadas para cada necesidad', PT: 'Ampla gama de opções de bombas adequadas para cada necessidade' },
  'products.motors_desc': { TR: 'Güçlü ve verimli dalgıç motorlar', EN: 'Powerful and efficient submersible motors', AR: 'محركات غاطسة قوية وفعالة', ES: 'Motores sumergibles potentes y eficientes', PT: 'Motores submersíveis potentes e eficientes' },
  'products.model_count': { TR: 'MODEL', EN: 'MODELS', AR: 'عارضات ازياء', ES: 'MODELOS', PT: 'MODELOS' },
  'products.no_results': { TR: 'Sonuç Bulunamadı', EN: 'No Results Found', AR: 'لم يتم العثور على نتائج', ES: 'No se Encontraron Resultados', PT: 'Nenhum Resultado Encontrado' },
  'products.no_results_desc': { TR: 'Aradığınız kriterlere uygun ürün bulunamadı. Lütfen farklı anahtar kelimeler deneyin.', EN: 'No products found matching your search criteria. Please try different keywords.', AR: 'لم يتم العثور على منتجات تطابق معايير البحث الخاصة بك. يرجى تجربة كلمات رئيسية مختلفة.', ES: 'No se encontraron productos que coincidan con sus criterios de búsqueda. Por favor, intente con diferentes palabras clave.', PT: 'Nenhum produto encontrado correspondente aos seus critérios de pesquisa. Por favor, tente palavras-chave diferentes.' },

  // Home
  'home.products.range': { TR: 'GENİŞ ÜRÜN YELPAZESİ', EN: 'WIDE PRODUCT RANGE', AR: 'مجموعة واسعة من المنتجات', ES: 'AMPLIA GAMA DE PRODUCTOS', PT: 'AMPLA GAMA DE PRODUTOS' },
  'home.products.solutions': { TR: 'Endüstriyel Çözümler', EN: 'Industrial Solutions', AR: 'حلول صناعية', ES: 'Soluciones Industriales', PT: 'Soluções Industriais' },
  'home.products.view_all': { TR: 'Tüm Ürünleri Gör', EN: 'View All Products', AR: 'عرض جميع المنتجات', ES: 'Ver Todos los Productos', PT: 'Ver Todos os Produtos' },
  
  // About - Stats & Desc
  'about.exp_years': { TR: 'Yıllık Tecrübe', EN: 'Years of Experience', AR: 'سنوات من الخبرة', ES: 'Años de Experiencia', PT: 'Anos de Experiência' },
  'about.half_century': { TR: 'Yarım Asırlık Tecrübe', EN: 'Half a Century of Experience', AR: 'نصف قرن من الخبرة', ES: 'Medio Siglo de Experiencia', PT: 'Meio Século de Experiência' },
  'about.desc.p1': { TR: 'Kurlar Pompa ve Motor 1975 yılında Yaşar Kurfeyiz tarafından İstanbul’da kurulmuştur. Dalgıç pompa ve motor üretimine 25m² atölyede 2 kişi ile başlayan Kurlar, günümüzde <span className="font-bold text-slate-900">40’dan fazla ülkeye ihracat yaparak üretimine 25.000m² Açık – 10.250m² Kapalı alanda 200’e yakın nitelikli ekibi ile İzmir’de devam etmektedir.</span>', EN: 'Kurlar Pump and Motor was founded in Istanbul in 1975 by Yaşar Kurfeyiz. Starting submersible pump and motor production with 2 people in a 25m² workshop, Kurlar today <span className="font-bold text-slate-900">continues its production in Izmir with a qualified team of nearly 200 people in a 25,000m² Open – 10,250m² Closed area, exporting to more than 40 countries.</span>', AR: 'تأسست Kurlar Pump and Motor في إسطنبول عام 1975 على يد ياشار كورفيز. بدأت Kurlar إنتاج المضخات والمحركات الغاطسة بشخصين في ورشة عمل مساحتها 25 مترًا مربعًا، واليوم <span className="font-bold text-slate-900">تواصل إنتاجها في إزمير مع فريق مؤهل يضم ما يقرب من 200 شخص في منطقة مفتوحة تبلغ مساحتها 25000 متر مربع - 10250 مترًا مربعًا مغلقة، وتصدر إلى أكثر من 40 دولة.</span>', ES: 'Kurlar Pump and Motor fue fundada en Estambul en 1975 por Yaşar Kurfeyiz. Comenzando la producción de bombas y motores sumergibles con 2 personas en un taller de 25m², Kurlar hoy <span className="font-bold text-slate-900">continúa su producción en Izmir con un equipo calificado de casi 200 personas en un área de 25,000m² Abierta – 10,250m² Cerrada, exportando a más de 40 países.</span>', PT: 'A Kurlar Pump and Motor foi fundada em Istambul em 1975 por Yaşar Kurfeyiz. Iniciando a produção de bombas e motores submersíveis com 2 pessoas em uma oficina de 25m², a Kurlar hoje <span className="font-bold text-slate-900">continua sua produção em Izmir com uma equipe qualificada de quase 200 pessoas em uma área de 25.000m² Aberta – 10.250m² Fechada, exportando para mais de 40 países.</span>' },
  'about.desc.p2': { TR: '<span className="font-bold text-slate-900">Türkiye’nin ilk Paslanmaz Çelik Dalgıç Pompa üreticisi</span> olan Kurlar, diğer ürünlerde de sektörün öncüsü konumundadır. Dalgıç Pompa ve Motor üzerine deneyimli mühendis kadrosuna sahip olan Kurlar ürünlerin gelişimi ve farklılıkları ile kalitesini her geçen gün arttırarak sektörün takip edilen firması haline gelmiştir.', EN: 'As <span className="font-bold text-slate-900">Turkey\'s first Stainless Steel Submersible Pump manufacturer</span>, Kurlar is also a pioneer in the sector in other products. Having an experienced engineer staff on Submersible Pump and Motor, Kurlar has become a followed company in the sector by increasing its quality day by day with the development and differences of its products.', AR: 'باعتبارها <span className="font-bold text-slate-900">أول مصنع لمضخات الغاطسة المصنوعة من الفولاذ المقاوم للصدأ في تركيا</span>، تعد Kurlar أيضًا رائدة في القطاع في منتجات أخرى. بفضل وجود طاقم مهندسين ذوي خبرة في المضخات والمحركات الغاطسة، أصبحت Kurlar شركة متبعة في القطاع من خلال زيادة جودتها يومًا بعد يوم مع تطوير واختلافات منتجاتها.', ES: 'Como <span className="font-bold text-slate-900">el primer fabricante de bombas sumergibles de acero inoxidable de Turquía</span>, Kurlar también es pionera en el sector en otros productos. Con un personal de ingenieros experimentados en bombas y motores sumergibles, Kurlar se ha convertido en una empresa seguida en el sector al aumentar su calidad día a día con el desarrollo y las diferencias de sus productos.', PT: 'Como <span className="font-bold text-slate-900">o primeiro fabricante de bombas submersíveis de aço inoxidável da Turquia</span>, a Kurlar também é pioneira no setor em outros produtos. Com uma equipe de engenheiros experientes em Bombas e Motores Submersíveis, a Kurlar tornou-se uma empresa seguida no setor, aumentando sua qualidade dia a dia com o desenvolvimento e as diferenças de seus produtos.' },
  'about.stats.countries': { TR: '40+ Ülke', EN: '40+ Countries', AR: '40+ دولة', ES: '40+ Países', PT: '40+ Países' },
  'about.stats.facility': { TR: 'Üretim Tesisi', EN: 'Production Facility', AR: 'منشأة الإنتاج', ES: 'Instalación de Producción', PT: 'Instalação de Produção' },
  'about.stats.staff': { TR: 'Nitelikli Personel', EN: 'Qualified Personnel', AR: 'موظفين مؤهلين', ES: 'Personal Calificado', PT: 'Pessoal Qualificado' },
  'about.stats.quality': { TR: 'Kalite Standartları', EN: 'Quality Standards', AR: 'معايير الجودة', ES: 'Estándares de Calidad', PT: 'Padrões de Qualidade' },
  'about.stats.production': { TR: 'Dalgıç Pompa & Motor Üretimi', EN: 'Submersible Pump & Motor Production', AR: 'إنتاج المضخات والمحركات الغاطسة', ES: 'Producción de Bombas y Motores Sumergibles', PT: 'Produção de Bombas e Motores Submersíveis' },
  'about.stats.audit': { TR: 'Kalite Denetimi Yapıldı', EN: 'Quality Audit Performed', AR: 'تم إجراء تدقيق الجودة', ES: 'Auditoría de Calidad Realizada', PT: 'Auditoria de Qualidade Realizada' },
  'about.stats.dealers': { TR: 'Aktif Bayi Ağı', EN: 'Active Dealer Network', AR: 'شبكة وكلاء نشطة', ES: 'Red de Distribuidores Activa', PT: 'Rede de Revendedores Ativa' },
  'about.mission.title': { TR: 'MİSYON', EN: 'MISSION', AR: 'مهمة', ES: 'MISIÓN', PT: 'MISSÃO' },
  'about.mission.desc': { TR: 'Kullanıcılarına yüksek verimlilik ve sürdürülebilir kalite esasına uygun yüksek teknolojili yerli ve güvenilir ürünlerin üretimine her gün yenisi ekleyerek Kurlar’ı dünya markası yapmak.', EN: 'To make Kurlar a world brand by adding new ones every day to the production of high-tech domestic and reliable products suitable for the basis of high efficiency and sustainable quality for its users.', AR: 'جعل Kurlar علامة تجارية عالمية من خلال إضافة منتجات جديدة كل يوم إلى إنتاج منتجات محلية وموثوقة عالية التقنية مناسبة لأساس الكفاءة العالية والجودة المستدامة لمستخدميها.', ES: 'Hacer de Kurlar una marca mundial añadiendo nuevos productos cada día a la producción de productos nacionales y fiables de alta tecnología adecuados para la base de alta eficiencia y calidad sostenible para sus usuarios.', PT: 'Tornar a Kurlar uma marca mundial adicionando novos produtos a cada dia à produção de produtos nacionais e confiáveis de alta tecnologia, adequados à base de alta eficiência e qualidade sustentável para seus usuários.' },
  'about.vision.title': { TR: 'VİZYON', EN: 'VISION', AR: 'رؤية', ES: 'VISIÓN', PT: 'VISÃO' },
  'about.vision.desc': { TR: 'Dalgıç Pompa ve Dalgıç Motor dendiğinde akla ilk gelen, güvenilirliğiyle, müşteri memnuniyetiyle ve yenilikleriyle rakipsiz bir dünya markası olmak.', EN: 'To be an unrivaled world brand with its reliability, customer satisfaction and innovations, which comes to mind first when Submersible Pump and Submersible Motor are mentioned.', AR: 'أن نكون علامة تجارية عالمية لا مثيل لها بموثوقيتها ورضا العملاء وابتكاراتها، والتي تتبادر إلى الذهن أولاً عند ذكر المضخة الغاطسة والمحرك الغاطس.', ES: 'Ser una marca mundial inigualable con su fiabilidad, satisfacción del cliente e innovaciones, que viene a la mente primero cuando se mencionan la Bomba Sumergible y el Motor Sumergible.', PT: 'Ser uma marca mundial inigualável com sua confiabilidade, satisfação do cliente e inovações, que vem à mente primeiro quando se mencionam Bomba Submersível e Motor Submersível.' },

  // Careers - Benefits
  'careers.benefits.team.title': { TR: 'Güçlü Ekip Ruhu', EN: 'Strong Team Spirit', AR: 'روح الفريق القوية', ES: 'Fuerte Espíritu de Equipo', PT: 'Forte Espírito de Equipe' },
  'careers.benefits.team.desc': { TR: 'Birbirini destekleyen, deneyimli ve dinamik bir ekiple çalışma fırsatı.', EN: 'Opportunity to work with a supportive, experienced and dynamic team.', AR: 'فرصة للعمل مع فريق داعم وذوي خبرة وديناميكي.', ES: 'Oportunidad de trabajar con un equipo solidario, experimentado y dinámico.', PT: 'Oportunidade de trabalhar com uma equipe solidária, experiente e dinâmica.' },
  'careers.benefits.dev.title': { TR: 'Sürekli Gelişim', EN: 'Continuous Development', AR: 'التطوير المستمر', ES: 'Desarrollo Continuo', PT: 'Desenvolvimento Contínuo' },
  'careers.benefits.dev.desc': { TR: 'Mesleki eğitimler ve kariyer gelişim programları ile potansiyelinizi artırın.', EN: 'Increase your potential with vocational trainings and career development programs.', AR: 'زد من إمكاناتك من خلال التدريب المهني وبرامج التطوير الوظيفي.', ES: 'Aumente su potencial con capacitaciones vocacionales y programas de desarrollo profesional.', PT: 'Aumente seu potencial com treinamentos vocacionais e programas de desenvolvimento de carreira.' },
  'careers.benefits.tech.title': { TR: 'Öncü Teknoloji', EN: 'Pioneering Technology', AR: 'تكنولوجيا رائدة', ES: 'Tecnología Pionera', PT: 'Tecnologia Pioneira' },
  'careers.benefits.tech.desc': { TR: 'Sektörün en modern üretim teknolojileri ile çalışma imkanı.', EN: 'Opportunity to work with the sector\'s most modern production technologies.', AR: 'فرصة للعمل بأحدث تقنيات الإنتاج في القطاع.', ES: 'Oportunidad de trabajar con las tecnologías de producción más modernas del sector.', PT: 'Oportunidade de trabalhar com as tecnologias de produção mais modernas do setor.' },

  // SEO Titles & Descriptions
  'seo.home.title': { TR: 'Ana Sayfa', EN: 'Home', AR: 'الرئيسية', ES: 'Inicio', PT: 'Início' },
  'seo.home.desc': { TR: 'Kurlar Pompa - Yüksek verimli dalgıç pompa ve motor çözümleri.', EN: 'Kurlar Pump - High efficiency submersible pump and motor solutions.', AR: 'مضخات كورلار - حلول مضخات ومحركات غاطسة عالية الكفاءة.', ES: 'Bombas Kurlar - Soluciones de bombas y motores sumergibles de alta eficiencia.', PT: 'Bombas Kurlar - Soluções de bombas e motores submersíveis de alta eficiência.' },
  
  'seo.about.title': { TR: 'Hakkımızda', EN: 'About Us', AR: 'من نحن', ES: 'Sobre Nosotros', PT: 'Sobre Nós' },
  'seo.about.desc': { TR: 'Kurlar Pompa hakkında detaylı bilgi, tarihçemiz ve vizyonumuz.', EN: 'Detailed information about Kurlar Pump, our history and vision.', AR: 'معلومات مفصلة عن مضخات كورلار، تاريخنا ورؤيتنا.', ES: 'Información detallada sobre Bombas Kurlar, nuestra historia y visión.', PT: 'Informações detalhadas sobre Bombas Kurlar, nossa história e visão.' },

  'seo.products.title': { TR: 'Ürünler', EN: 'Products', AR: 'المنتجات', ES: 'Productos', PT: 'Produtos' },
  'seo.products.desc': { TR: 'Geniş ürün yelpazemizi keşfedin: Dalgıç pompalar, motorlar ve daha fazlası.', EN: 'Discover our wide product range: Submersible pumps, motors and more.', AR: 'اكتشف مجموعتنا الواسعة من المنتجات: مضخات غاطسة، محركات والمزيد.', ES: 'Descubra nuestra amplia gama de productos: Bombas sumergibles, motores y más.', PT: 'Descubra nossa ampla gama de produtos: Bombas submersíveis, motores e mais.' },

  'seo.dealers.title': { TR: 'Bayi ve Servis Ağı', EN: 'Dealer and Service Network', AR: 'شبكة الوكلاء والخدمة', ES: 'Red de Distribuidores y Servicio', PT: 'Rede de Revendedores e Serviço' },
  'seo.dealers.desc': { TR: 'Size en yakın Kurlar bayi ve servis noktalarını bulun.', EN: 'Find the nearest Kurlar dealer and service points.', AR: 'اعثر على أقرب وكيل ومركز خدمة لكورلار.', ES: 'Encuentre los puntos de venta y servicio de Kurlar más cercanos.', PT: 'Encontre os revendedores e pontos de serviço Kurlar mais próximos.' },

  'seo.contact.title': { TR: 'İletişim', EN: 'Contact', AR: 'اتصل بنا', ES: 'Contacto', PT: 'Contato' },
  'seo.contact.desc': { TR: 'Bizimle iletişime geçin. Adres, telefon ve iletişim formu.', EN: 'Contact us. Address, phone and contact form.', AR: 'اتصل بنا. العنوان والهاتف ونموذج الاتصال.', ES: 'Contáctenos. Dirección, teléfono y formulario de contacto.', PT: 'Entre em contato conosco. Endereço, telefone e formulário de contato.' },

  'seo.rnd.title': { TR: 'Ar-Ge Merkezi', EN: 'R&D Center', AR: 'مركز البحث والتطوير', ES: 'Centro de I+D', PT: 'Centro de P&D' },
  'seo.rnd.desc': { TR: 'Kurlar Ar-Ge Merkezi ve teknolojik yeniliklerimiz.', EN: 'Kurlar R&D Center and our technological innovations.', AR: 'مركز كورلار للبحث والتطوير وابتكاراتنا التكنولوجية.', ES: 'Centro de I+D de Kurlar e innovaciones tecnológicas.', PT: 'Centro de P&D Kurlar e nossas inovações tecnológicas.' },

  'seo.certificates.title': { TR: 'Sertifikalarımız', EN: 'Certificates', AR: 'الشهادات', ES: 'Certificados', PT: 'Certificados' },
  'seo.certificates.desc': { TR: 'Kalite ve standart belgelerimiz.', EN: 'Our quality and standard documents.', AR: 'وثائق الجودة والمعايير الخاصة بنا.', ES: 'Nuestros documentos de calidad y estándares.', PT: 'Nossos documentos de qualidade e padrões.' },

  'seo.careers.title': { TR: 'Kariyer', EN: 'Careers', AR: 'وظائف', ES: 'Carreras', PT: 'Carreiras' },
  'seo.careers.desc': { TR: 'Kurlar ailesine katılın. Açık pozisyonlar ve kariyer fırsatları.', EN: 'Join the Kurlar family. Open positions and career opportunities.', AR: 'انضم إلى عائلة كورلار. الوظائف المتاحة وفرص العمل.', ES: 'Únase a la familia Kurlar. Posiciones abiertas y oportunidades de carrera.', PT: 'Junte-se à família Kurlar. Vagas abertas e oportunidades de carreira.' },
  'careers.benefits.social.title': { TR: 'Sosyal Haklar', EN: 'Social Rights', AR: 'الحقوق الاجتماعية', ES: 'Derechos Sociales', PT: 'Direitos Sociais' },
  'careers.benefits.social.desc': { TR: 'Rekabetçi maaş, özel sağlık sigortası, servis ve yemek imkanları.', EN: 'Competitive salary, private health insurance, shuttle and meal facilities.', AR: 'راتب تنافسي، تأمين صحي خاص، خدمات النقل والوجبات.', ES: 'Salario competitivo, seguro médico privado, servicio de transporte y comidas.', PT: 'Salário competitivo, seguro saúde privado, transporte e refeições.' },
  'careers.days_ago': { TR: 'gün önce', EN: 'days ago', AR: 'منذ أيام', ES: 'días atrás', PT: 'dias atrás' },

  // Home - About Section
  'home.about.title_1': { TR: 'Mühendislik ve Kalitenin', EN: 'The Meeting Point of', AR: 'نقطة التقاء', ES: 'El Punto de Encuentro de', PT: 'O Ponto de Encontro da' },
  'home.about.title_2': { TR: 'Buluşma Noktası', EN: 'Engineering and Quality', AR: 'الهندسة والجودة', ES: 'la Ingeniería y la Calidad', PT: 'Engenharia e Qualidade' },
  'home.about.desc': { TR: 'Türkiye\'nin ilk Paslanmaz Çelik Dalgıç Pompa üreticisi olarak, 25.000m² üretim tesisimizde dünya standartlarında çözümler üretiyoruz. 40\'tan fazla ülkeye ihracat yaparak kalitemizi global pazarda kanıtlıyoruz.', EN: 'As Turkey\'s first Stainless Steel Submersible Pump manufacturer, we produce world-class solutions in our 25,000m² production facility. We prove our quality in the global market by exporting to more than 40 countries.', AR: 'بصفتنا أول مصنع لمضخات الغاطسة المصنوعة من الفولاذ المقاوم للصدأ في تركيا، ننتج حلولاً عالمية المستوى في منشأتنا الإنتاجية التي تبلغ مساحتها 25000 متر مربع. نثبت جودتنا في السوق العالمية من خلال التصدير إلى أكثر من 40 دولة.', ES: 'Como el primer fabricante de bombas sumergibles de acero inoxidable de Turquía, producimos soluciones de clase mundial en nuestra instalación de producción de 25,000 m². Demostramos nuestra calidad en el mercado global exportando a más de 40 países.', PT: 'Como o primeiro fabricante de bombas submersíveis de aço inoxidável da Turquia, produzimos soluções de classe mundial em nossa instalação de produção de 25.000 m². Provamos nossa qualidade no mercado global exportando para mais de 40 países.' },
  'home.about.since': { TR: 'Yılından Beri', EN: 'Since', AR: 'منذ عام', ES: 'Desde', PT: 'Desde' },
  'home.global_export': { TR: 'Global İhracat', EN: 'Global Export', AR: 'تصدير عالمي', ES: 'Exportación Global', PT: 'Exportação Global' },
  'home.tech_transfer': { TR: '40+ Ülkeye Teknoloji Transferi', EN: 'Technology Transfer to 40+ Countries', AR: 'نقل التكنولوجيا إلى أكثر من 40 دولة', ES: 'Transferencia de Tecnología a más de 40 Países', PT: 'Transferência de Tecnologia para mais de 40 Países' },
  'home.local_production': { TR: 'Yerli Üretim', EN: 'Domestic Production', AR: 'الإنتاج المحلي', ES: 'Producción Nacional', PT: 'Produção Nacional' },
  'home.local_capital': { TR: '%100 Yerli Sermaye ve Üretim', EN: '100% Domestic Capital and Production', AR: '100٪ رأس مال وإنتاج محلي', ES: '100% Capital y Producción Nacional', PT: '100% Capital e Produção Nacional' },

  // Home - Products Section
  'home.products.range': { TR: 'Ürün Yelpazemiz', EN: 'Product Range', AR: 'مجموعة المنتجات', ES: 'Gama de Productos', PT: 'Gama de Produtos' },
  'home.products.solutions': { TR: 'Profesyonel Pompa ve Motor Çözümleri', EN: 'Professional Pump and Motor Solutions', AR: 'حلول المضخات والمحركات المهنية', ES: 'Soluciones Profesionales de Bombas y Motores', PT: 'Soluções Profissionais de Bombas e Motores' },
  'home.products.view_all': { TR: 'Tüm Modelleri Gör', EN: 'View All Models', AR: 'عرض جميع الموديلات', ES: 'Ver Todos los Modelos', PT: 'Ver Todos os Modelos' },
  'product.review': { TR: 'İncele', EN: 'Review', AR: 'استعراض', ES: 'Revisar', PT: 'Revisar' },

  // Footer
  'footer.rights': { TR: 'Kurlar Dalgıç Pompa & Motor Tüm Hakları Saklıdır.', EN: 'Kurlar Submersible Pump & Motor All Rights Reserved.', AR: 'جميع الحقوق محفوظة لشركة كورلار للمضخات والمحركات الغاطسة.', ES: 'Kurlar Bombas y Motores Sumergibles Todos los Derechos Reservados.', PT: 'Kurlar Bombas e Motores Submersíveis Todos os Direitos Reservados.' },
  'footer.quick_links': { TR: 'Hızlı Erişim', EN: 'Quick Links', AR: 'روابط سريعة', ES: 'Enlaces Rápidos', PT: 'Links Rápidos' },
  'footer.product_groups': { TR: 'Ürün Grupları', EN: 'Product Groups', AR: 'مجموعات المنتجات', ES: 'Grupos de Productos', PT: 'Grupos de Produtos' },
  'footer.stainless_series': { TR: 'Paslanmaz Serisi', EN: 'Stainless Series', AR: 'سلسلة الفولاذ المقاوم للصدأ', ES: 'Serie Inoxidable', PT: 'Série Inoxidável' },
  'footer.cast_series': { TR: 'Döküm Serisi', EN: 'Cast Iron Series', AR: 'سلسلة الحديد الزهر', ES: 'Serie de Hierro Fundido', PT: 'Série de Ferro Fundido' },
  'footer.legal_contact': { TR: 'Yasal & İletişim', EN: 'Legal & Contact', AR: 'قانوني واتصال', ES: 'Legal y Contacto', PT: 'Legal e Contato' },
  'footer.privacy': { TR: 'Gizlilik Politikası', EN: 'Privacy Policy', AR: 'سياسة الخصوصية', ES: 'Política de Privacidad', PT: 'Política de Privacidade' },
  'footer.cookies': { TR: 'Çerez Politikası', EN: 'Cookie Policy', AR: 'سياسة ملفات تعريف الارتباط', ES: 'Política de Cookies', PT: 'Política de Cookies' },
  'footer.desc': { TR: '1975\'ten beri suyun gücünü teknolojiyle buluşturuyor, Türkiye\'den dünyaya değer katıyoruz. Yüksek verimli dalgıç pompa ve motor çözümleri.', EN: 'Bringing the power of water together with technology since 1975, adding value from Turkey to the world. High efficiency submersible pump and motor solutions.', AR: 'نجمع بين قوة المياه والتكنولوجيا منذ عام 1975، ونضيف قيمة من تركيا إلى العالم. حلول مضخات ومحركات غاطسة عالية الكفاءة.', ES: 'Uniendo el poder del agua con la tecnología desde 1975, añadiendo valor desde Turquía al mundo. Soluciones de bombas y motores sumergibles de alta eficiencia.', PT: 'Unindo o poder da água com a tecnologia desde 1975, agregando valor da Turquia para o mundo. Soluções de bombas e motores submersíveis de alta eficiência.' },

  // Contact Page
  'contact.title': { TR: 'İletişim', EN: 'Contact', AR: 'اتصل بنا', ES: 'Contacto', PT: 'Contato' },
  'contact.headline': { TR: 'Size Nasıl Yardımcı Olabiliriz?', EN: 'How Can We Help You?', AR: 'كيف يمكننا مساعدتك؟', ES: '¿Cómo Podemos Ayudarle?', PT: 'Como Podemos Ajudá-lo?' },
  'contact.desc': { TR: 'Projeleriniz için teknik destek, teklif talepleri veya genel sorularınız için uzman ekibimizle iletişime geçin.', EN: 'Contact our expert team for technical support, quote requests, or general inquiries for your projects.', AR: 'اتصل بفريق الخبراء لدينا للحصول على الدعم الفني أو طلبات عروض الأسعار أو الاستفسارات العامة لمشاريعك.', ES: 'Póngase en contacto con nuestro equipo de expertos para soporte técnico, solicitudes de cotización o consultas generales para sus proyectos.', PT: 'Entre em contato com nossa equipe de especialistas para suporte técnico, solicitações de orçamento ou perguntas gerais para seus projetos.' },
  'contact.head_office': { TR: 'Merkez Fabrika', EN: 'Headquarters Factory', AR: 'المصنع الرئيسي', ES: 'Fábrica Central', PT: 'Fábrica Sede' },
  'contact.get_directions': { TR: 'Yol Tarifi Al', EN: 'Get Directions', AR: 'احصل على الاتجاهات', ES: 'Obtener Direcciones', PT: 'Obter Direções' },
  'contact.phone_support': { TR: 'Telefon & Destek', EN: 'Phone & Support', AR: 'الهاتف والدعم', ES: 'Teléfono y Soporte', PT: 'Telefone e Suporte' },
  'contact.phone_desc': { TR: 'Hafta içi 08:30 - 18:00 saatleri arasında bize ulaşabilirsiniz.', EN: 'You can reach us between 08:30 - 18:00 on weekdays.', AR: 'يمكنك الوصول إلينا بين الساعة 08:30 - 18:00 في أيام الأسبوع.', ES: 'Puede comunicarse con nosotros entre las 08:30 y las 18:00 de lunes a viernes.', PT: 'Você pode nos contatar entre 08:30 - 18:00 nos dias úteis.' },
  'contact.email': { TR: 'E-Posta', EN: 'E-Mail', AR: 'البريد الإلكتروني', ES: 'Correo Electrónico', PT: 'E-mail' },
  'contact.email_desc': { TR: 'Teklif ve bilgi talepleriniz için e-posta adresimiz.', EN: 'Our e-mail address for your quote and information requests.', AR: 'عنوان البريد الإلكتروني الخاص بنا لطلبات عروض الأسعار والمعلومات.', ES: 'Nuestra dirección de correo electrónico para sus solicitudes de cotización e información.', PT: 'Nosso endereço de e-mail para suas solicitações de orçamento e informações.' },

  // Product Detail
  'product.not_found': { TR: 'Ürün Bulunamadı', EN: 'Product Not Found', AR: 'المنتج غير موجود', ES: 'Producto No Encontrado', PT: 'Produto Não Encontrado' },
  'product.back': { TR: 'Ürünlere Dön', EN: 'Back to Products', AR: 'العودة إلى المنتجات', ES: 'Volver a Productos', PT: 'Voltar aos Produtos' },
  'product.available_sizes': { TR: 'Mevcut Boyutlar (İnç)', EN: 'Available Sizes (Inch)', AR: 'الأحجام المتوفرة (بوصة)', ES: 'Tamaños Disponibles (Pulgadas)', PT: 'Tamanhos Disponíveis (Polegadas)' },
  'product.overview': { TR: 'Genel Bakış', EN: 'Overview', AR: 'نظرة عامة', ES: 'Visión General', PT: 'Visão Geral' },
  'product.specs': { TR: 'Teknik Veriler', EN: 'Technical Data', AR: 'البيانات الفنية', ES: 'Datos Técnicos', PT: 'Dados Técnicos' },
  'product.parts': { TR: 'Mekanik Parçalar', EN: 'Mechanical Parts', AR: 'الأجزاء الميكانيكية', ES: 'Partes Mecánicas', PT: 'Peças Mecânicas' },
  'product.options': { TR: 'Opsiyonlar', EN: 'Options', AR: 'الخيارات', ES: 'Opciones', PT: 'Opções' },
  'product.options_title': { TR: 'Opsiyonlar & Seçenekler', EN: 'Options & Selections', AR: 'الخيارات والاختيارات', ES: 'Opciones y Selecciones', PT: 'Opções e Seleções' },
  'product.desc_title': { TR: 'Ürün Açıklaması', EN: 'Product Description', AR: 'وصف المنتج', ES: 'Descripción del Producto', PT: 'Descrição do Produto' },
  'product.features_title': { TR: 'Özellikler', EN: 'Features', AR: 'الميزات', ES: 'Características', PT: 'Características' },
  'product.specs_title': { TR: 'Teknik Özellikler', EN: 'Technical Specifications', AR: 'المواصفات الفنية', ES: 'Especificaciones Técnicas', PT: 'Especificações Técnicas' },
  'product.request_quote': { TR: 'Teklif İste', EN: 'Request Quote', AR: 'طلب عرض سعر', ES: 'Solicitar Cotización', PT: 'Solicitar Orçamento' },
  'product.download_catalog': { TR: '2025 Kataloğu İndir', EN: 'Download 2025 Catalog', AR: 'تنزيل كتالوج 2025', ES: 'Descargar Catálogo 2025', PT: 'Baixar Catálogo 2025' },
  'product.faq_title': { TR: 'Sıkça Sorulan Sorular', EN: 'Frequently Asked Questions', AR: 'أسئلة مكررة', ES: 'Preguntas Frecuentes', PT: 'Perguntas Frequentes' },
  'product.faq_desc': { TR: 'Bu ürün hakkında en çok merak edilen soruların cevapları.', EN: 'Answers to the most frequently asked questions about this product.', AR: 'إجابات على الأسئلة الأكثر شيوعًا حول هذا المنتج.', ES: 'Respuestas a las preguntas más frecuentes sobre este producto.', PT: 'Respostas para as perguntas mais frequentes sobre este produto.' },
  'product.other_products': { TR: 'Diğer Ürünlerimiz', EN: 'Our Other Products', AR: 'منتجاتنا الأخرى', ES: 'Nuestros Otros Productos', PT: 'Nossos Outros Produtos' },
  'product.other_products_desc': { TR: 'İlginizi çekebilecek diğer profesyonel çözümlerimiz.', EN: 'Other professional solutions that may interest you.', AR: 'حلول مهنية أخرى قد تهمك.', ES: 'Otras soluciones profesionales que pueden interesarle.', PT: 'Outras soluções profissionais que podem lhe interessar.' },
  'product.view_click': { TR: 'Görüntülemek için tıklayın', EN: 'Click to view', AR: 'انقر للعرض', ES: 'Clic para ver', PT: 'Clique para ver' },
  'product.zoom_hint_mobile': { TR: 'Büyütmek için dokunun', EN: 'Tap to zoom', AR: 'انقر للتكبير', ES: 'Toque para ampliar', PT: 'Toque para ampliar' },
  'product.zoom_hint_desktop': { TR: 'Büyütmek için üzerine gelin', EN: 'Hover to zoom', AR: 'مرر الماوس للتكبير', ES: 'Pase el ratón para ampliar', PT: 'Passe o mouse para ampliar' },

  // Products Page
  'products.title': { TR: 'Ürün Yelpazemiz', EN: 'Our Product Range', AR: 'مجموعة منتجاتنا', ES: 'Nuestra Gama de Productos', PT: 'Nossa Gama de Produtos' },
  'products.subtitle': { TR: 'Endüstriyel standartlarda, yüksek performanslı dalgıç pompa ve motor çözümleri.', EN: 'Industrial standard, high performance submersible pump and motor solutions.', AR: 'حلول مضخات ومحركات غاطسة عالية الأداء وذات معايير صناعية.', ES: 'Soluciones de bombas y motores sumergibles de alto rendimiento y estándar industrial.', PT: 'Soluções de bombas e motores submersíveis de alto desempenho e padrão industrial.' },
  'products.search_results': { TR: 'Arama Sonuçları', EN: 'Search Results', AR: 'نتائج البحث', ES: 'Resultados de Búsqueda', PT: 'Resultados da Pesquisa' },
  'products.pumps_desc': { TR: 'Paslanmaz, Noryl ve Döküm serisi profesyonel pompalar.', EN: 'Stainless, Noryl and Cast Iron series professional pumps.', AR: 'مضخات احترافية من سلسلة الفولاذ المقاوم للصدأ والنوريل والحديد الزهر.', ES: 'Bombas profesionales de las series Inoxidable, Noryl y Hierro Fundido.', PT: 'Bombas profissionais das séries Inoxidável, Noryl e Ferro Fundido.' },
  'products.motors_desc': { TR: 'Yüksek verimli, uzun ömürlü motor teknolojileri.', EN: 'High efficiency, long life motor technologies.', AR: 'تقنيات محركات عالية الكفاءة وطويلة العمر.', ES: 'Tecnologías de motores de alta eficiencia y larga vida.', PT: 'Tecnologias de motores de alta eficiência e longa vida útil.' },
  'products.model_count': { TR: 'Model', EN: 'Models', AR: 'موديل', ES: 'Modelos', PT: 'Modelos' },
  'products.no_results': { TR: 'Sonuç Bulunamadı', EN: 'No Results Found', AR: 'لم يتم العثور على نتائج', ES: 'No se encontraron resultados', PT: 'Nenhum resultado encontrado' },
  'products.no_results_desc': { TR: 'Aradığınız kriterlere uygun ürün bulunamadı.', EN: 'No products found matching your criteria.', AR: 'لم يتم العثور على منتجات مطابقة لمعاييرك.', ES: 'No se encontraron productos que coincidan con sus criterios.', PT: 'Nenhum produto encontrado correspondente aos seus critérios.' },

  // Careers
  'careers.title': { TR: 'Geleceği Birlikte Şekillendirelim', EN: 'Lets Shape the Future Together', AR: 'لنشكل المستقبل معًا', ES: 'Demos Forma al Futuro Juntos', PT: 'Vamos Moldar o Futuro Juntos' },
  'careers.subtitle': { TR: 'Kurlar Dalgıç Pompa ailesine katılın, sektörün öncüsü teknolojilerini birlikte geliştirelim. Yeteneğinize ve enerjinize ihtiyacımız var.', EN: 'Join the Kurlar Submersible Pump family, lets develop pioneering technologies together. We need your talent and energy.', AR: 'انضم إلى عائلة كورلار للمضخات الغاطسة، لنطور تقنيات رائدة معًا. نحن بحاجة إلى موهبتك وطاقتك.', ES: 'Únase a la familia Kurlar, desarrollemos tecnologías pioneras juntos. Necesitamos su talento y energía.', PT: 'Junte-se à família Kurlar, vamos desenvolver tecnologias pioneiras juntos. Precisamos do seu talento e energia.' },
  'careers.cta': { TR: 'Açık Pozisyonları İncele', EN: 'View Open Positions', AR: 'عرض الوظائف المتاحة', ES: 'Ver Posiciones Abiertas', PT: 'Ver Vagas Abertas' },
  'careers.why_us': { TR: 'Neden Kurlar?', EN: 'Why Kurlar?', AR: 'لماذا كورلار؟', ES: '¿Por qué Kurlar?', PT: 'Por que Kurlar?' },
  'careers.why_us_desc': { TR: 'Çalışanlarımızın mutluluğu ve gelişimi bizim için önceliktir. İşte size sunduğumuz ayrıcalıklardan bazıları.', EN: 'The happiness and development of our employees is our priority. Here are some of the privileges we offer you.', AR: 'سعادة وتطوير موظفينا هي أولويتنا. إليك بعض الامتيازات التي نقدمها لك.', ES: 'La felicidad y el desarrollo de nuestros empleados es nuestra prioridad. Aquí hay algunos de los privilegios que le ofrecemos.', PT: 'A felicidade e o desenvolvimento de nossos funcionários são nossa prioridade. Aqui estão alguns dos privilégios que oferecemos a você.' },
  'careers.positions_title': { TR: 'Açık Pozisyonlar', EN: 'Open Positions', AR: 'الوظائف المتاحة', ES: 'Posiciones Abiertas', PT: 'Vagas Abertas' },
  'careers.positions_desc': { TR: 'Ekibimize katılmak için güncel iş ilanlarımızı inceleyin.', EN: 'Check our current job postings to join our team.', AR: 'تحقق من إعلانات الوظائف الحالية للانضمام إلى فريقنا.', ES: 'Revise nuestras ofertas de trabajo actuales para unirse a nuestro equipo.', PT: 'Confira nossas vagas atuais para se juntar à nossa equipe.' },
  'careers.position_available': { TR: 'Pozisyon Mevcut', EN: 'Positions Available', AR: 'الوظائف المتاحة', ES: 'Posiciones Disponibles', PT: 'Vagas Disponíveis' },
  'careers.apply': { TR: 'Başvur', EN: 'Apply', AR: 'تقديم', ES: 'Aplicar', PT: 'Aplicar' },
  'careers.details': { TR: 'Detaylar', EN: 'Details', AR: 'التفاصيل', ES: 'Detalles', PT: 'Detalhes' },
  'careers.requirements': { TR: 'Aranan Nitelikler:', EN: 'Requirements:', AR: 'المتطلبات:', ES: 'Requisitos:', PT: 'Requisitos:' },
  'careers.general_app_title': { TR: 'Aradığınız Pozisyonu Bulamadınız mı?', EN: 'Couldnt Find the Position You Were Looking For?', AR: 'لم تجد الوظيفة التي كنت تبحث عنها؟', ES: '¿No encontró la posición que buscaba?', PT: 'Não encontrou a vaga que procurava?' },
  'careers.general_app_desc': { TR: 'Yetenek havuzumuza katılın, niteliklerinize uygun bir pozisyon açıldığında sizinle iletişime geçelim.', EN: 'Join our talent pool, we will contact you when a position suitable for your qualifications opens.', AR: 'انضم إلى مجموعة المواهب لدينا، وسنتصل بك عند توفر وظيفة مناسبة لمؤهلاتك.', ES: 'Únase a nuestro grupo de talentos, lo contactaremos cuando se abra una posición adecuada para sus calificaciones.', PT: 'Junte-se ao nosso banco de talentos, entraremos em contato quando surgir uma vaga adequada às suas qualificações.' },
  'careers.general_app_btn': { TR: 'Genel Başvuru Yap', EN: 'General Application', AR: 'تقديم عام', ES: 'Solicitud General', PT: 'Candidatura Geral' },

  // Certificates
  'certs.title': { TR: 'Kalite ve Sertifikalarımız', EN: 'Quality and Certificates', AR: 'الجودة والشهادات', ES: 'Calidad y Certificados', PT: 'Qualidade e Certificados' },
  'certs.desc': { TR: 'Uluslararası standartlara uygun üretim süreçlerimiz ve kalite belgelerimizle, güvenilirliğimizi tescilliyoruz.', EN: 'We certify our reliability with our production processes compliant with international standards and quality certificates.', AR: 'نحن نعتمد موثوقيتنا من خلال عمليات الإنتاج المتوافقة مع المعايير الدولية وشهادات الجودة.', ES: 'Certificamos nuestra fiabilidad con nuestros procesos de producción que cumplen con los estándares internacionales y certificados de calidad.', PT: 'Certificamos nossa confiabilidade com nossos processos de produção em conformidade com os padrões internacionais e certificados de qualidade.' },
  'certs.view_doc': { TR: 'Belgeyi Görüntüle', EN: 'View Document', AR: 'عرض المستند', ES: 'Ver Documento', PT: 'Ver Documento' },
  'certs.quality_policy': { TR: 'Kalite Politikamız', EN: 'Our Quality Policy', AR: 'سياسة الجودة لدينا', ES: 'Nuestra Política de Calidad', PT: 'Nossa Política de Qualidade' },

  // Dealers
  'dealers.title': { TR: 'Yurt İçi Bayi & Servis Ağı', EN: 'Domestic Dealer & Service Network', AR: 'شبكة الوكلاء والخدمة المحلية', ES: 'Red Nacional de Distribuidores y Servicio', PT: 'Rede Nacional de Revendedores e Serviço' },
  'dealers.desc': { TR: 'Türkiyenin dört bir yanındaki yetkili satış ve servis noktalarımızla her zaman yanınızdayız.', EN: 'We are always with you with our authorized sales and service points all over Turkey.', AR: 'نحن دائمًا معك من خلال نقاط البيع والخدمة المعتمدة لدينا في جميع أنحاء تركيا.', ES: 'Siempre estamos con usted con nuestros puntos de venta y servicio autorizados en toda Turquía.', PT: 'Estamos sempre com você com nossos pontos de venda e serviço autorizados em toda a Turquia.' },
  'dealers.map_title': { TR: 'Türkiye Bayi Haritası', EN: 'Turkey Dealer Map', AR: 'خريطة وكلاء تركيا', ES: 'Mapa de Distribuidores de Turquía', PT: 'Mapa de Revendedores da Turquia' },
  'dealers.has_dealer': { TR: 'Bayi Var', EN: 'Has Dealer', AR: 'يوجد وكيل', ES: 'Tiene Distribuidor', PT: 'Tem Revendedor' },
  'dealers.no_dealer': { TR: 'Bayi Yok', EN: 'No Dealer', AR: 'لا يوجد وكيل', ES: 'No Tiene Distribuidor', PT: 'Sem Revendedor' },
  'dealers.search_placeholder': { TR: 'Şehir, ilçe veya bayi adı ara...', EN: 'Search city, district or dealer name...', AR: 'ابحث عن المدينة أو الحي أو اسم الوكيل...', ES: 'Buscar ciudad, distrito o nombre del distribuidor...', PT: 'Pesquisar cidade, bairro ou nome do revendedor...' },
  'dealers.filter_city': { TR: 'Hızlı Şehir Filtresi', EN: 'Quick City Filter', AR: 'تصفية المدينة السريعة', ES: 'Filtro Rápido de Ciudad', PT: 'Filtro Rápido de Cidade' },
  'dealers.all_cities': { TR: 'TÜM İLLER', EN: 'ALL CITIES', AR: 'جميع المدن', ES: 'TODAS LAS CIUDADES', PT: 'TODAS AS CIDADES' },
  'dealers.results': { TR: 'Sonuç', EN: 'Results', AR: 'النتائج', ES: 'Resultados', PT: 'Resultados' },
  'dealers.clear_filter': { TR: 'Filtreyi Temizle', EN: 'Clear Filter', AR: 'مسح التصفية', ES: 'Borrar Filtro', PT: 'Limpar Filtro' },
  'dealers.call_now': { TR: 'Hemen Ara', EN: 'Call Now', AR: 'اتصل الآن', ES: 'Llamar Ahora', PT: 'Ligar Agora' },
  'dealers.get_directions': { TR: 'Yol Tarifi', EN: 'Get Directions', AR: 'احصل على الاتجاهات', ES: 'Obtener Direcciones', PT: 'Obter Direções' },
  'dealers.not_found_title': { TR: 'Sonuç Bulunamadı', EN: 'No Results Found', AR: 'لم يتم العثور على نتائج', ES: 'No se encontraron resultados', PT: 'Nenhum resultado encontrado' },
  'dealers.not_found_desc': { TR: 'Aradığınız kriterlere uygun bayi bulunamadı.', EN: 'No dealer found matching your criteria.', AR: 'لم يتم العثور على وكيل مطابق لمعاييرك.', ES: 'No se encontró ningún distribuidor que coincida con sus criterios.', PT: 'Nenhum revendedor encontrado correspondente aos seus critérios.' },

  // R&D
  'rnd.title': { TR: 'Ar-Ge ve İnovasyon', EN: 'R&D and Innovation', AR: 'البحث والتطوير والابتكار', ES: 'I+D e Innovación', PT: 'P&D e Inovação' },
  'rnd.desc': { TR: 'Sürekli gelişim ilkesiyle, sektörün en verimli ve dayanıklı dalgıç pompa teknolojilerini geliştiriyoruz.', EN: 'With the principle of continuous improvement, we develop the most efficient and durable submersible pump technologies in the industry.', AR: 'بمبدأ التحسين المستمر، نقوم بتطوير تقنيات المضخات الغاطسة الأكثر كفاءة ومتانة في الصناعة.', ES: 'Con el principio de mejora continua, desarrollamos las tecnologías de bombas sumergibles más eficientes y duraderas de la industria.', PT: 'Com o princípio de melhoria contínua, desenvolvemos as tecnologias de bombas submersíveis mais eficientes e duráveis da indústria.' },
  'rnd.design_power': { TR: 'Mühendislik ve Tasarım Gücü', EN: 'Engineering and Design Power', AR: 'قوة الهندسة والتصميم', ES: 'Poder de Ingeniería y Diseño', PT: 'Poder de Engenharia e Design' },
  'rnd.design_desc1': { TR: 'Kurlar Ar-Ge Merkezi, ürünlerimizin performansını ve dayanıklılığını artırmak için sürekli çalışmaktadır. Modern laboratuvarlarımızda gerçekleştirilen testler ve analizler, her bir parçanın en zorlu koşullarda bile kusursuz çalışmasını garanti altına alır.', EN: 'Kurlar R&D Center works continuously to increase the performance and durability of our products. Tests and analyses performed in our modern laboratories ensure that each part works perfectly even under the most difficult conditions.', AR: 'يعمل مركز كورلار للبحث والتطوير باستمرار لزيادة أداء ومتانة منتجاتنا. تضمن الاختبارات والتحليلات التي يتم إجراؤها في مختبراتنا الحديثة أن كل جزء يعمل بشكل مثالي حتى في أصعب الظروف.', ES: 'El Centro de I+D de Kurlar trabaja continuamente para aumentar el rendimiento y la durabilidad de nuestros productos. Las pruebas y análisis realizados en nuestros laboratorios modernos garantizan que cada pieza funcione perfectamente incluso en las condiciones más difíciles.', PT: 'O Centro de P&D da Kurlar trabalha continuamente para aumentar o desempenho e a durabilidade de nossos produtos. Testes e análises realizados em nossos laboratórios modernos garantem que cada peça funcione perfeitamente, mesmo nas condições mais difíceis.' },
  'rnd.design_desc2': { TR: 'Enerji verimliliği yüksek motorlar ve hidrolik tasarımlarımız, işletme maliyetlerini düşürürken çevresel sürdürülebilirliğe de katkı sağlar. Uzman mühendis kadromuz, simülasyon ve modelleme teknolojileriyle ürün geliştirme süreçlerini yönetmektedir.', EN: 'Our high energy efficiency motors and hydraulic designs contribute to environmental sustainability while reducing operating costs. Our expert engineer staff manages product development processes with simulation and modeling technologies.', AR: 'تساهم محركاتنا ذات كفاءة الطاقة العالية وتصميماتنا الهيدروليكية في الاستدامة البيئية مع تقليل تكاليف التشغيل. يدير موظفونا الخبراء من المهندسين عمليات تطوير المنتجات باستخدام تقنيات المحاكاة والنمذجة.', ES: 'Nuestros motores de alta eficiencia energética y diseños hidráulicos contribuyen a la sostenibilidad ambiental al tiempo que reducen los costos operativos. Nuestro personal experto de ingenieros gestiona los procesos de desarrollo de productos con tecnologías de simulación y modelado.', PT: 'Nossos motores de alta eficiência energética e projetos hidráulicos contribuem para a sustentabilidade ambiental, reduzindo os custos operacionais. Nossa equipe de engenheiros especialistas gerencia os processos de desenvolvimento de produtos com tecnologias de simulação e modelagem.' },
  'rnd.precision_production': { TR: 'Hassas Üretim', EN: 'Precision Production', AR: 'إنتاج دقيق', ES: 'Producción de Precisión', PT: 'Produção de Precisão' },
  'rnd.quality_control': { TR: 'Kalite Kontrol', EN: 'Quality Control', AR: 'مراقبة الجودة', ES: 'Control de Calidad', PT: 'Controle de Qualidade' },
  'rnd.process_title': { TR: 'Geliştirme Süreci', EN: 'Development Process', AR: 'عملية التطوير', ES: 'Proceso de Desarrollo', PT: 'Processo de Desenvolvimento' },
  'rnd.process_desc': { TR: 'Fikirden ürüne giden yolda, her aşamayı titizlikle planlıyor ve uyguluyoruz.', EN: 'On the way from idea to product, we meticulously plan and implement every stage.', AR: 'في الطريق من الفكرة إلى المنتج، نخطط وننفذ كل مرحلة بدقة.', ES: 'En el camino de la idea al producto, planificamos e implementamos meticulosamente cada etapa.', PT: 'No caminho da ideia ao produto, planejamos e implementamos meticulosamente cada etapa.' },

  // Cookie Policy
  'cookie.title': { TR: 'Çerez Politikası', EN: 'Cookie Policy', AR: 'سياسة ملفات تعريف الارتباط', ES: 'Política de Cookies', PT: 'Política de Cookies' },
  'cookie.subtitle': { TR: 'Daha iyi bir deneyim için çerezleri nasıl kullanıyoruz?', EN: 'How do we use cookies for a better experience?', AR: 'كيف نستخدم ملفات تعريف الارتباط للحصول على تجربة أفضل؟', ES: '¿Cómo utilizamos las cookies para una mejor experiencia?', PT: 'Como usamos cookies para uma experiência melhor?' },
  'cookie.what_is': { TR: 'Çerez (Cookie) Nedir?', EN: 'What is a Cookie?', AR: 'ما هو ملف تعريف الارتباط؟', ES: '¿Qué es una Cookie?', PT: 'O que é um Cookie?' },
  'cookie.types': { TR: 'Kullandığımız Çerez Türleri', EN: 'Types of Cookies We Use', AR: 'أنواع ملفات تعريف الارتباط التي نستخدمها', ES: 'Tipos de Cookies que Utilizamos', PT: 'Tipos de Cookies que Usamos' },
  'cookie.management': { TR: 'Çerez Yönetimi', EN: 'Cookie Management', AR: 'إدارة ملفات تعريف الارتباط', ES: 'Gestión de Cookies', PT: 'Gerenciamento de Cookies' },

  // Privacy Policy
  'privacy.title': { TR: 'Gizlilik Politikası', EN: 'Privacy Policy', AR: 'سياسة الخصوصية', ES: 'Política de Privacidad', PT: 'Política de Privacidade' },
  'privacy.subtitle': { TR: 'Verilerinizin güvenliği bizim için önemlidir.', EN: 'The security of your data is important to us.', AR: 'أمان بياناتك مهم بالنسبة لنا.', ES: 'La seguridad de sus datos es importante para nosotros.', PT: 'A segurança dos seus dados é importante para nós.' },
  'privacy.collection': { TR: 'Veri Toplama ve Kullanım', EN: 'Data Collection and Use', AR: 'جمع البيانات واستخدامها', ES: 'Recopilación y Uso de Datos', PT: 'Coleta e Uso de Dados' },
  'privacy.security': { TR: 'Veri Güvenliği', EN: 'Data Security', AR: 'أمان البيانات', ES: 'Seguridad de Datos', PT: 'Segurança de Dados' },
  'privacy.links': { TR: 'Üçüncü Taraf Bağlantılar', EN: 'Third Party Links', AR: 'روابط الطرف الثالث', ES: 'Enlaces de Terceros', PT: 'Links de Terceiros' },
  'privacy.changes': { TR: 'Değişiklikler', EN: 'Changes', AR: 'التغييرات', ES: 'Cambios', PT: 'Alterações' },

  // Cookie Policy Descriptions
  'cookie.what_is_desc': { TR: 'Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, site tercihlerinizin hatırlanması, oturumun açık tutulması ve size özel içerik sunulması gibi işlevler için kullanılır.', EN: 'Cookies are small text files saved to your device through your browser when you visit our website. These files are used for functions such as remembering your site preferences, keeping your session open, and presenting content specific to you.', AR: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم حفظها على جهازك من خلال متصفحك عند زيارة موقعنا على الويب. تُستخدم هذه الملفات لوظائف مثل تذكر تفضيلات موقعك ، والحفاظ على جلستك مفتوحة ، وتقديم محتوى خاص بك.', ES: 'Las cookies son pequeños archivos de texto guardados en su dispositivo a través de su navegador cuando visita nuestro sitio web. Estos archivos se utilizan para funciones como recordar sus preferencias del sitio, mantener su sesión abierta y presentar contenido específico para usted.', PT: 'Cookies são pequenos arquivos de texto salvos no seu dispositivo através do seu navegador quando você visita nosso site. Esses arquivos são usados para funções como lembrar suas preferências do site, manter sua sessão aberta e apresentar conteúdo específico para você.' },
  'cookie.types_desc_mandatory': { TR: 'Web sitesinin düzgün çalışması için gerekli olan temel çerezlerdir.', EN: 'Basic cookies required for the website to function properly.', AR: 'ملفات تعريف الارتباط الأساسية المطلوبة لعمل الموقع بشكل صحيح.', ES: 'Cookies básicas requeridas para que el sitio web funcione correctamente.', PT: 'Cookies básicos necessários para que o site funcione corretamente.' },
  'cookie.types_desc_analytics': { TR: 'Ziyaretçi davranışlarını analiz ederek sitemizi geliştirmemize yardımcı olur.', EN: 'Helps us improve our site by analyzing visitor behavior.', AR: 'يساعدنا في تحسين موقعنا من خلال تحليل سلوك الزائر.', ES: 'Nos ayuda a mejorar nuestro sitio analizando el comportamiento de los visitantes.', PT: 'Nos ajuda a melhorar nosso site analisando o comportamento dos visitantes.' },
  'cookie.types_desc_functional': { TR: 'Dil tercihi gibi kişisel ayarlarınızı hatırlamamızı sağlar.', EN: 'Allows us to remember your personal settings such as language preference.', AR: 'يسمح لنا بتذكر إعداداتك الشخصية مثل تفضيل اللغة.', ES: 'Nos permite recordar su configuración personal, como la preferencia de idioma.', PT: 'Nos permite lembrar suas configurações pessoais, como preferência de idioma.' },
  'cookie.management_desc': { TR: 'Tarayıcı ayarlarınız üzerinden çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz. Ancak, çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir.', EN: 'You can delete or block cookies at any time through your browser settings. However, if you disable cookies, some features of our website may not work properly.', AR: 'يمكنك حذف ملفات تعريف الارتباط أو حظرها في أي وقت من خلال إعدادات المتصفح. ومع ذلك ، إذا قمت بتعطيل ملفات تعريف الارتباط ، فقد لا تعمل بعض ميزات موقعنا بشكل صحيح.', ES: 'Puede eliminar o bloquear las cookies en cualquier momento a través de la configuración de su navegador. Sin embargo, si deshabilita las cookies, es posible que algunas funciones de nuestro sitio web no funcionen correctamente.', PT: 'Você pode excluir ou bloquear cookies a qualquer momento através das configurações do seu navegador. No entanto, se você desativar os cookies, alguns recursos do nosso site podem não funcionar corretamente.' },

  // Privacy Policy Descriptions
  'privacy.collection_desc': { TR: 'Kurlar Pompa olarak, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda, size daha iyi hizmet sunabilmek adına bazı kişisel verilerinizi (isim, e-posta, iletişim bilgileri vb.) toplayabiliriz. Bu veriler, taleplerinizi yanıtlamak, ürünlerimiz hakkında bilgi vermek ve hizmet kalitemizi artırmak amacıyla kullanılır.', EN: 'As Kurlar Pump, when you visit our website or use our services, we may collect some of your personal data (name, e-mail, contact information, etc.) in order to provide you with better service. This data is used to respond to your requests, provide information about our products and improve our service quality.', AR: 'بصفتنا Kurlar Pump ، عند زيارة موقعنا على الويب أو استخدام خدماتنا ، قد نجمع بعض بياناتك الشخصية (الاسم والبريد الإلكتروني ومعلومات الاتصال وما إلى ذلك) من أجل تزويدك بخدمة أفضل. تُستخدم هذه البيانات للرد على طلباتك وتوفير معلومات حول منتجاتنا وتحسين جودة خدمتنا.', ES: 'Como Kurlar Pump, cuando visita nuestro sitio web o utiliza nuestros servicios, podemos recopilar algunos de sus datos personales (nombre, correo electrónico, información de contacto, etc.) para brindarle un mejor servicio. Estos datos se utilizan para responder a sus solicitudes, proporcionar información sobre nuestros productos y mejorar la calidad de nuestro servicio.', PT: 'Como Kurlar Pump, quando você visita nosso site ou usa nossos serviços, podemos coletar alguns de seus dados pessoais (nome, e-mail, informações de contato, etc.) para lhe fornecer um melhor serviço. Esses dados são usados para responder às suas solicitações, fornecer informações sobre nossos produtos e melhorar a qualidade do nosso serviço.' },
  'privacy.security_desc': { TR: 'Toplanan kişisel verileriniz, yetkisiz erişime, kaybolmaya veya değiştirilmeye karşı korunmak üzere endüstri standardı güvenlik önlemleriyle saklanmaktadır. Verileriniz, yasal zorunluluklar dışında üçüncü şahıslarla paylaşılmaz.', EN: 'Your collected personal data is stored with industry standard security measures to protect against unauthorized access, loss or alteration. Your data is not shared with third parties except for legal obligations.', AR: 'يتم تخزين بياناتك الشخصية التي تم جمعها بتدابير أمان قياسية صناعية للحماية من الوصول غير المصرح به أو الفقد أو التغيير. لا يتم مشاركة بياناتك مع أطراف ثالثة باستثناء الالتزامات القانونية.', ES: 'Sus datos personales recopilados se almacenan con medidas de seguridad estándar de la industria para proteger contra el acceso no autorizado, la pérdida o la alteración. Sus datos no se comparten con terceros, excepto por obligaciones legales.', PT: 'Seus dados pessoais coletados são armazenados com medidas de segurança padrão da indústria para proteger contra acesso não autorizado, perda ou alteração. Seus dados não são compartilhados com terceiros, exceto por obrigações legais.' },
  'privacy.links_desc': { TR: 'Web sitemiz, diğer web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından veya içeriklerinden sorumlu değiliz. Bağlantı verilen sitelerin gizlilik politikalarını incelemenizi öneririz.', EN: 'Our website may contain links to other websites. We are not responsible for the privacy practices or content of these sites. We recommend that you review the privacy policies of the linked sites.', AR: 'قد يحتوي موقعنا على روابط لمواقع ويب أخرى. نحن لسنا مسؤولين عن ممارسات الخصوصية أو محتوى هذه المواقع. نوصيك بمراجعة سياسات الخصوصية للمواقع المرتبطة.', ES: 'Nuestro sitio web puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad o el contenido de estos sitios. Le recomendamos que revise las políticas de privacidad de los sitios vinculados.', PT: 'Nosso site pode conter links para outros sites. Não somos responsáveis pelas práticas de privacidade ou conteúdo desses sites. Recomendamos que você revise as políticas de privacidade dos sites vinculados.' },
  'privacy.changes_desc': { TR: 'Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlandığı tarihte yürürlüğe girer. Politikamızı düzenli olarak gözden geçirmenizi tavsiye ederiz.', EN: 'We may update this privacy policy from time to time. Changes are effective on the date they are published on this page. We recommend that you review our policy regularly.', AR: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. التغييرات سارية في تاريخ نشرها على هذه الصفحة. نوصيك بمراجعة سياستنا بانتظام.', ES: 'Podemos actualizar esta política de privacidad de vez en cuando. Los cambios entran en vigencia en la fecha en que se publican en esta página. Le recomendamos que revise nuestra política regularmente.', PT: 'Podemos atualizar esta política de privacidade de tempos em tempos. As alterações entram em vigor na data em que são publicadas nesta página. Recomendamos que você revise nossa política regularmente.' },

  // Careers - Positions
  'careers.pos.winding.title': { TR: 'Bobinaj Ustası', EN: 'Winding Master', AR: 'رئيس اللف', ES: 'Maestro de Bobinado', PT: 'Mestre de Enrolamento' },
  'careers.pos.winding.desc': { TR: 'Dalgıç motor üretim hattımızda görev alacak, bobin sarımı konusunda deneyimli çalışma arkadaşları arıyoruz.', EN: 'We are looking for experienced colleagues in coil winding to work on our submersible motor production line.', AR: 'نحن نبحث عن زملاء ذوي خبرة في لف الملفات للعمل في خط إنتاج المحركات الغاطسة لدينا.', ES: 'Buscamos colegas con experiencia en bobinado de bobinas para trabajar en nuestra línea de producción de motores sumergibles.', PT: 'Procuramos colegas experientes em enrolamento de bobinas para trabalhar em nossa linha de produção de motores submersíveis.' },
  'careers.pos.cnc.title': { TR: 'CNC Operatörü', EN: 'CNC Operator', AR: 'مشغل CNC', ES: 'Operador CNC', PT: 'Operador CNC' },
  'careers.pos.cnc.desc': { TR: 'Talaşlı imalat bölümümüzde CNC tezgahlarını kullanabilecek, teknik resim okuma bilgisine sahip personeller.', EN: 'Personnel who can use CNC benches in our machining department and have knowledge of reading technical drawings.', AR: 'موظفون يمكنهم استخدام مقاعد CNC في قسم التصنيع لدينا ولديهم معرفة بقراءة الرسومات الفنية.', ES: 'Personal que pueda utilizar bancos CNC en nuestro departamento de mecanizado y tenga conocimientos de lectura de dibujos técnicos.', PT: 'Pessoal que possa usar bancadas CNC em nosso departamento de usinagem e tenha conhecimento de leitura de desenhos técnicos.' },
  'careers.pos.assembly.title': { TR: 'Montaj Teknisyeni', EN: 'Assembly Technician', AR: 'فني تجميع', ES: 'Técnico de Montaje', PT: 'Técnico de Montagem' },
  'careers.pos.assembly.desc': { TR: 'Pompa ve motor montaj hattında çalışacak, el aletleri kullanımına hakim ekip arkadaşları.', EN: 'Team members who will work on the pump and motor assembly line and are proficient in using hand tools.', AR: 'أعضاء الفريق الذين سيعملون في خط تجميع المضخات والمحركات ويجيدون استخدام الأدوات اليدوية.', ES: 'Miembros del equipo que trabajarán en la línea de montaje de bombas y motores y son competentes en el uso de herramientas manuales.', PT: 'Membros da equipe que trabalharão na linha de montagem de bombas e motores e são proficientes no uso de ferramentas manuais.' },
  'careers.pos.qc.title': { TR: 'Kalite Kontrol Uzmanı', EN: 'Quality Control Specialist', AR: 'أخصائي مراقبة الجودة', ES: 'Especialista en Control de Calidad', PT: 'Especialista em Controle de Qualidade' },
  'careers.pos.qc.desc': { TR: 'Üretim süreçlerinin kalite standartlarına uygunluğunu denetleyecek, ölçüm cihazlarını kullanabilen uzmanlar.', EN: 'Specialists who will supervise the compliance of production processes with quality standards and can use measuring devices.', AR: 'المتخصصون الذين سيشرفون على امتثال عمليات الإنتاج لمعايير الجودة ويمكنهم استخدام أجهزة القياس.', ES: 'Especialistas que supervisarán el cumplimiento de los procesos de producción con los estándares de calidad y pueden utilizar dispositivos de medición.', PT: 'Especialistas que supervisionarão a conformidade dos processos de produção com os padrões de qualidade e podem usar dispositivos de medição.' },

  // About - History
  'about.history.2022.title': { TR: 'İzmir Fabrika', EN: 'Izmir Factory', AR: 'مصنع إزمير', ES: 'Fábrica de Izmir', PT: 'Fábrica de Izmir' },
  'about.history.2022.desc': { TR: 'Dalgıç pompa fabrikası İzmir\'e taşındı.', EN: 'Submersible pump factory moved to Izmir.', AR: 'تم نقل مصنع المضخات الغاطسة إلى إزمير.', ES: 'La fábrica de bombas sumergibles se trasladó a Izmir.', PT: 'A fábrica de bombas submersíveis mudou-se para Izmir.' },
  'about.history.2019.title': { TR: 'İhracat Başarısı', EN: 'Export Success', AR: 'نجاح التصدير', ES: 'Éxito de Exportación', PT: 'Sucesso de Exportação' },
  'about.history.2019.desc': { TR: '40\'tan fazla ülkeye ihracat ağı kuruldu.', EN: 'Export network established to more than 40 countries.', AR: 'تم إنشاء شبكة تصدير لأكثر من 40 دولة.', ES: 'Se estableció una red de exportación a más de 40 países.', PT: 'Rede de exportação estabelecida para mais de 40 países.' },
  'about.history.2012.title': { TR: 'Ar-Ge Merkezi', EN: 'R&D Center', AR: 'مركز البحث والتطوير', ES: 'Centro de I+D', PT: 'Centro de P&D' },
  'about.history.2012.desc': { TR: 'Modern Ar-Ge laboratuvarı kuruldu.', EN: 'Modern R&D laboratory established.', AR: 'تم إنشاء مختبر بحث وتطوير حديث.', ES: 'Se estableció un moderno laboratorio de I+D.', PT: 'Laboratório moderno de P&D estabelecido.' },
  'about.history.2008.title': { TR: 'Paslanmaz Üretimi', EN: 'Stainless Production', AR: 'إنتاج الفولاذ المقاوم للصدأ', ES: 'Producción de Inoxidable', PT: 'Produção de Inoxidável' },
  'about.history.2008.desc': { TR: 'İlk paslanmaz çelik dalgıç pompa üretimi.', EN: 'First stainless steel submersible pump production.', AR: 'أول إنتاج لمضخة غاطسة من الفولاذ المقاوم للصدأ.', ES: 'Primera producción de bomba sumergible de acero inoxidable.', PT: 'Primeira produção de bomba submersível de aço inoxidável.' },
  'about.history.2000.title': { TR: 'Yeni Tesis', EN: 'New Facility', AR: 'منشأة جديدة', ES: 'Nueva Instalación', PT: 'Nova Instalação' },
  'about.history.2000.desc': { TR: 'Konya Organize Sanayi Bölgesi\'ne taşınma.', EN: 'Moving to Konya Organized Industrial Zone.', AR: 'الانتقال إلى منطقة كونيا الصناعية المنظمة.', ES: 'Traslado a la Zona Industrial Organizada de Konya.', PT: 'Mudança para a Zona Industrial Organizada de Konya.' },
  'about.history.1996.title': { TR: 'Dalgıç Motor', EN: 'Submersible Motor', AR: 'محرك غاطس', ES: 'Motor Sumergible', PT: 'Motor Submersível' },
  'about.history.1996.desc': { TR: 'İlk dalgıç motor üretimi başladı.', EN: 'First submersible motor production started.', AR: 'بدأ إنتاج أول محرك غاطس.', ES: 'Comenzó la primera producción de motores sumergibles.', PT: 'Iniciou-se a primeira produção de motores submersíveis.' },
  'about.history.1989.title': { TR: 'Seri Üretim', EN: 'Mass Production', AR: 'الإنتاج الضخم', ES: 'Producción en Masa', PT: 'Produção em Massa' },
  'about.history.1989.desc': { TR: 'Santrifüj pompa seri üretimine geçildi.', EN: 'Centrifugal pump mass production started.', AR: 'بدأ الإنتاج الضخم لمضخات الطرد المركزي.', ES: 'Comenzó la producción en masa de bombas centrífugas.', PT: 'Iniciou-se a produção em massa de bombas centrífugas.' },
  'about.history.1975.title': { TR: 'Kuruluş', EN: 'Establishment', AR: 'تأسيس', ES: 'Establecimiento', PT: 'Estabelecimento' },
  'about.history.1975.desc': { TR: 'Kurlar Pompa\'nın temelleri atıldı.', EN: 'Foundations of Kurlar Pump were laid.', AR: 'تم وضع أسس Kurlar Pump.', ES: 'Se sentaron las bases de Kurlar Pump.', PT: 'As fundações da Kurlar Pump foram lançadas.' },

  // Certificates - List
  'certs.iso14001.desc': { TR: 'Çevre Yönetim Sistemi Sertifikası', EN: 'Environmental Management System Certificate', AR: 'شهادة نظام إدارة البيئة', ES: 'Certificado del Sistema de Gestión Ambiental', PT: 'Certificado do Sistema de Gestão Ambiental' },
  'certs.iso9001.desc': { TR: 'Kalite Yönetim Sistemi Sertifikası', EN: 'Quality Management System Certificate', AR: 'شهادة نظام إدارة الجودة', ES: 'Certificado del Sistema de Gestión de Calidad', PT: 'Certificado do Sistema de Gestão da Qualidade' },
  'certs.iso45001.desc': { TR: 'İş Sağlığı ve Güvenliği Yönetim Sistemi', EN: 'Occupational Health and Safety Management System', AR: 'نظام إدارة الصحة والسلامة المهنية', ES: 'Sistema de Gestión de Seguridad y Salud Ocupacional', PT: 'Sistema de Gestão de Saúde e Segurança Ocupacional' },

  // Certificates - Policy
  'certs.policy.customer': { TR: 'Müşteri memnuniyetini en üst düzeyde tutmak', EN: 'Keeping customer satisfaction at the highest level', AR: 'الحفاظ على رضا العملاء عند أعلى مستوى', ES: 'Mantener la satisfacción del cliente al más alto nivel', PT: 'Manter a satisfação do cliente no mais alto nível' },
  'certs.policy.standard': { TR: 'Uluslararası kalite standartlarına tam uyum', EN: 'Full compliance with international quality standards', AR: 'الامتثال الكامل لمعايير الجودة الدولية', ES: 'Cumplimiento total de los estándares de calidad internacionales', PT: 'Conformidade total com os padrões internacionais de qualidade' },
  'certs.policy.improvement': { TR: 'Sürekli iyileştirme ve gelişim odaklı yaklaşım', EN: 'Continuous improvement and development oriented approach', AR: 'نهج موجه نحو التحسين المستمر والتطوير', ES: 'Enfoque orientado a la mejora continua y el desarrollo', PT: 'Abordagem orientada para a melhoria contínua e desenvolvimento' },
  'certs.policy.environment': { TR: 'Çevreye duyarlı ve sürdürülebilir üretim', EN: 'Environmentally sensitive and sustainable production', AR: 'إنتاج مستدام ومراعي للبيئة', ES: 'Producción ambientalmente sensible y sostenible', PT: 'Produção ambientalmente sensível e sustentável' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('TR');

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry['TR'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'AR' ? 'rtl' : 'ltr'} className={language === 'AR' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
