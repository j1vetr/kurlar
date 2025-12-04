import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'TR' | 'EN' | 'AR' | 'ES' | 'PT';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.home': { TR: 'Ana Sayfa', EN: 'Home', AR: 'الرئيسية', ES: 'Inicio', PT: 'Início' },
  'nav.corporate': { TR: 'Kurumsal', EN: 'Corporate', AR: 'الشركة', ES: 'Corporativo', PT: 'Corporativo' },
  'nav.about': { TR: 'Hakkımızda', EN: 'About Us', AR: 'من نحن', ES: 'Sobre Nosotros', PT: 'Sobre Nós' },
  'nav.rd': { TR: 'Ar-Ge Merkezi', EN: 'R&D Center', AR: 'مركز البحث والتطوير', ES: 'Centro de I+D', PT: 'Centro de P&D' },
  'nav.certificates': { TR: 'Sertifikalarımız', EN: 'Certificates', AR: 'الشهادات', ES: 'Certificados', PT: 'Certificados' },
  'nav.contact': { TR: 'İletişim', EN: 'Contact', AR: 'اتصل بنا', ES: 'Contacto', PT: 'Contato' },
  'nav.products': { TR: 'Ürünler', EN: 'Products', AR: 'المنتجات', ES: 'Productos', PT: 'Produtos' },
  'nav.pumps': { TR: 'Dalgıç Pompalar', EN: 'Submersible Pumps', AR: 'مضخات غاطسة', ES: 'Bombas Sumergibles', PT: 'Bombas Submersíveis' },
  'nav.motors': { TR: 'Dalgıç Motorlar', EN: 'Submersible Motors', AR: 'محركات غاطسة', ES: 'Motores Sumergibles', PT: 'Motores Submersíveis' },
  'nav.view_catalog': { TR: 'GÖRÜNTÜLE', EN: 'VIEW', AR: 'عرض', ES: 'VER', PT: 'VER' },
  'nav.catalog_title': { TR: 'KURLAR KATALOG', EN: 'KURLAR CATALOG', AR: 'كتالوج كورلار', ES: 'CATÁLOGO KURLAR', PT: 'CATÁLOGO KURLAR' },
  'nav.dealer_service': { TR: 'Bayi & Servis', EN: 'Dealer & Service', AR: 'الوكيل والخدمة', ES: 'Distribuidor y Servicio', PT: 'Revendedor e Serviço' },
  'nav.dealer_network': { TR: 'Yurt İçi Bayi & Servis Ağı', EN: 'Domestic Dealer & Service Network', AR: 'شبكة الوكلاء والخدمة المحلية', ES: 'Red Nacional de Distribuidores y Servicio', PT: 'Rede Nacional de Revendedores e Serviço' },
  'nav.career': { TR: 'Kariyer', EN: 'Career', AR: 'وظائف', ES: 'Carrera', PT: 'Carreira' },
  'nav.open_positions': { TR: 'Açık Pozisyonlar', EN: 'Open Positions', AR: 'الوظائف المتاحة', ES: 'Posiciones Abiertas', PT: 'Vagas Abertas' },

  // Hero
  'hero.title': { TR: 'Suyun Gücünü Yöneten Teknoloji', EN: 'Technology Managing the Power of Water', AR: 'التكنولوجيا التي تدير قوة المياه', ES: 'Tecnología que Gestiona el Poder del Agua', PT: 'Tecnologia Gerenciando o Poder da Água' },
  'hero.subtitle': { TR: 'Yüksek verimli dalgıç pompa ve motor çözümleri ile geleceği tasarlıyoruz.', EN: 'We design the future with high-efficiency submersible pump and motor solutions.', AR: 'نصمم المستقبل بحلول مضخات ومحركات غاطسة عالية الكفاءة.', ES: 'Diseñamos el futuro con soluciones de bombas y motores sumergibles de alta eficiencia.', PT: 'Projetamos o futuro com soluções de bombas e motores submersíveis de alta eficiência.' },
  'hero.discover': { TR: 'Ürünleri Keşfet', EN: 'Discover Products', AR: 'اكتشف المنتجات', ES: 'Descubrir Productos', PT: 'Descobrir Produtos' },
  'hero.contact_us': { TR: 'Bize Ulaşın', EN: 'Contact Us', AR: 'اتصل بنا', ES: 'Contáctenos', PT: 'Contate-nos' },

  // Home - About Section
  'home.about.title': { TR: 'Mühendislik ve Kalitenin Buluşma Noktası', EN: 'The Meeting Point of Engineering and Quality', AR: 'نقطة التقاء الهندسة والجودة', ES: 'El Punto de Encuentro de la Ingeniería y la Calidad', PT: 'O Ponto de Encontro da Engenharia e Qualidade' },
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
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('TR');

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
