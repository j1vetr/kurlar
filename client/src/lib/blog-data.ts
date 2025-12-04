
import engineerImage from '@assets/generated_images/engineer_checking_pump_installation.png';
import norylImage from '@assets/generated_images/stainless_steel_and_plastic_pump_parts.png';
import maintenanceImage from '@assets/generated_images/technician_repairing_motor.png';
import solarImage from '@assets/generated_images/solar_powered_irrigation.png';
import controlImage from '@assets/generated_images/control_panel_troubleshooting.png';
import irrigationImage from '@assets/generated_images/large_irrigation_field.png';
import wastewaterImage from '@assets/generated_images/water_treatment_plant.png';
import motorImage from '@assets/generated_images/electric_motor_cutaway.png';

export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  date: string;
  readingTime: number; // minutes
  author: string;
  category: string;
  translations: {
    [key: string]: {
      title: string;
      excerpt: string;
      content: string;
      tags: string[];
    }
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-choose-submersible-pump',
    image: engineerImage,
    date: '2024-03-15',
    readingTime: 5,
    author: 'Ahmet Yılmaz',
    category: 'Guide',
    translations: {
      tr: {
        title: 'Doğru Dalgıç Pompa Seçimi Nasıl Yapılır?',
        excerpt: 'İhtiyaçlarınıza en uygun dalgıç pompayı seçerken dikkat etmeniz gereken debi, basma yüksekliği ve kuyu çapı gibi kritik faktörler.',
        content: `
          <p>Dalgıç pompa seçimi, verimli bir su temini sistemi kurmanın en kritik adımıdır. Yanlış pompa seçimi, hem enerji israfına hem de sistemin sık sık arızalanmasına neden olabilir. İşte doğru seçimi yapmanız için temel kriterler:</p>
          
          <h3>1. Debi (Q) İhtiyacının Belirlenmesi</h3>
          <p>İlk adım, saatte ne kadar suya ihtiyacınız olduğunu belirlemektir. Tarımsal sulama için bitki türü ve arazi büyüklüğü, endüstriyel kullanım için ise proses gereksinimleri dikkate alınmalıdır.</p>
          
          <h3>2. Basma Yüksekliği (H) Hesabı</h3>
          <p>Suyun ne kadar yükseğe taşınacağı, pompanın gücünü belirler. Bu hesaplamada:</p>
          <ul>
            <li>Kuyunun derinliği</li>
            <li>Suyun iletileceği noktanın yüksekliği</li>
            <li>Boru hattındaki sürtünme kayıpları</li>
          </ul>
          <p>mutlaka göz önünde bulundurulmalıdır.</p>

          <h3>3. Kuyu Çapı ve Özellikleri</h3>
          <p>Pompanızın kuyuya fiziksel olarak sığması gerekir. 4", 6", 8" gibi standart kuyu çaplarına uygun serilerimizden seçim yapabilirsiniz. Ayrıca suyun temiz, kumlu veya kireçli olması da fan malzemesi seçimini (Noryl vs Paslanmaz) etkiler.</p>
          
          <p>Kurlar Pompa olarak, uzman mühendis kadromuzla size en uygun seçimi yapmanızda yardımcı oluyoruz. Gelişmiş pompa seçim sihirbazımızı kullanarak saniyeler içinde öneri alabilirsiniz.</p>
        `,
        tags: ['Pompa Seçimi', 'Rehber', 'Verimlilik']
      },
      en: {
        title: 'How to Choose the Right Submersible Pump?',
        excerpt: 'Critical factors to consider when selecting the best submersible pump for your needs, including flow rate, head, and well diameter.',
        content: `
          <p>Selecting the right submersible pump is the most critical step in establishing an efficient water supply system. Choosing the wrong pump can lead to energy waste and frequent system failures. Here are the key criteria for making the right choice:</p>
          
          <h3>1. Determining Flow Rate (Q) Needs</h3>
          <p>The first step is to determine how much water you need per hour. For agricultural irrigation, crop type and land size should be considered, while industrial use requires analyzing process requirements.</p>
          
          <h3>2. Calculating Head (H)</h3>
          <p>How high the water needs to be transported determines the pump's power. This calculation must include:</p>
          <ul>
            <li>Well depth</li>
            <li>Elevation of the delivery point</li>
            <li>Friction losses in the pipeline</li>
          </ul>

          <h3>3. Well Diameter and Characteristics</h3>
          <p>Your pump must physically fit into the well. You can choose from our series suitable for standard well diameters like 4", 6", 8". Additionally, whether the water is clean, sandy, or calcareous affects the impeller material selection (Noryl vs Stainless).</p>
          
          <p>At Kurlar Pump, we help you make the most suitable choice with our expert engineering team. You can get recommendations in seconds using our advanced pump selection wizard.</p>
        `,
        tags: ['Pump Selection', 'Guide', 'Efficiency']
      }
    }
  },
  {
    id: '2',
    slug: 'noryl-vs-stainless-steel',
    image: norylImage,
    date: '2024-03-10',
    readingTime: 4,
    author: 'Mehmet Demir',
    category: 'Technology',
    translations: {
      tr: {
        title: 'Noryl vs Paslanmaz Çelik: Hangi Malzeme Daha İyi?',
        excerpt: 'Dalgıç pompalarda kullanılan Noryl plastik ve paslanmaz çelik malzemelerin avantajları, dezavantajları ve kullanım alanları.',
        content: `
          <p>Dalgıç pompalarda malzeme seçimi, pompanın ömrünü ve performansını doğrudan etkiler. En yaygın iki seçenek olan Noryl (mühendislik plastiği) ve Paslanmaz Çelik arasındaki farkları inceliyoruz.</p>

          <h3>Noryl Pompalar (KPN Serisi)</h3>
          <p>Noryl, yüksek dayanıklılığa sahip özel bir termoplastiktir.</p>
          <ul>
            <li><strong>Avantajları:</strong> Kuma karşı yüksek direnç, hafiflik, pürüzsüz yüzey sayesinde düşük sürtünme kaybı.</li>
            <li><strong>Kullanım Alanı:</strong> Özellikle kumlu sularda ve 4"-6" kuyularda tercih edilir.</li>
          </ul>

          <h3>Paslanmaz Çelik Pompalar (KP/KSX Serisi)</h3>
          <p>AISI 304 veya 316 kalite paslanmaz çelikten üretilirler.</p>
          <ul>
            <li><strong>Avantajları:</strong> Yüksek korozyon direnci, endüstriyel dayanıklılık, sıcak suya dayanım.</li>
            <li><strong>Kullanım Alanı:</strong> Endüstriyel tesisler, içme suyu şebekeleri ve agresif sular.</li>
          </ul>

          <p>Hangi malzemenin sizin için daha iyi olduğu, suyunuzun kimyasal ve fiziksel özelliklerine bağlıdır. Kumlu bir kuyunuz varsa Noryl, endüstriyel bir uygulamanız varsa Paslanmaz Çelik daha doğru bir tercih olabilir.</p>
        `,
        tags: ['Malzeme Bilgisi', 'Teknoloji', 'Karşılaştırma']
      },
      en: {
        title: 'Noryl vs Stainless Steel: Which Material is Best?',
        excerpt: 'Advantages, disadvantages, and use cases of Noryl plastic and stainless steel materials used in submersible pumps.',
        content: `
          <p>Material selection in submersible pumps directly affects the pump's life and performance. We examine the differences between the two most common options: Noryl (engineering plastic) and Stainless Steel.</p>

          <h3>Noryl Pumps (KPN Series)</h3>
          <p>Noryl is a special thermoplastic with high durability.</p>
          <ul>
            <li><strong>Advantages:</strong> High resistance to sand, lightweight, low friction loss due to smooth surface.</li>
            <li><strong>Use Case:</strong> Preferred especially in sandy waters and 4"-6" wells.</li>
          </ul>

          <h3>Stainless Steel Pumps (KP/KSX Series)</h3>
          <p>Manufactured from AISI 304 or 316 quality stainless steel.</p>
          <ul>
            <li><strong>Advantages:</strong> High corrosion resistance, industrial durability, hot water resistance.</li>
            <li><strong>Use Case:</strong> Industrial facilities, drinking water networks, and aggressive waters.</li>
          </ul>

          <p>Which material is better for you depends on the chemical and physical properties of your water. If you have a sandy well, Noryl might be the right choice; if you have an industrial application, Stainless Steel might be better.</p>
        `,
        tags: ['Material Science', 'Technology', 'Comparison']
      }
    }
  },
  {
    id: '3',
    slug: 'maintenance-tips',
    image: maintenanceImage,
    date: '2024-03-01',
    readingTime: 6,
    author: 'Teknik Servis',
    category: 'Maintenance',
    translations: {
      tr: {
        title: 'Uzun Ömürlü Pompalar İçin Temel Bakım İpuçları',
        excerpt: 'Dalgıç pompa ve motorlarınızın ömrünü uzatacak, arızaları önleyecek periyodik bakım ve kontrol önerileri.',
        content: `
          <p>Dalgıç pompalar zorlu koşullar altında çalışırlar. Düzenli bakım, plansız duruşların önüne geçer ve ekipman ömrünü uzatır.</p>

          <h3>1. Elektrik Değerlerinin Kontrolü</h3>
          <p>Voltaj ve amper değerleri düzenli olarak ölçülmelidir. Aşırı akım çekimi, mekanik bir zorlanmanın veya motor sargı problemlerinin habercisi olabilir.</p>

          <h3>2. Pano Kontrolleri</h3>
          <p>Kontrol panosundaki kontaktörler, termikler ve faz koruma röleleri test edilmelidir. Gevşek bağlantılar ark yapabilir ve motorun yanmasına neden olabilir.</p>

          <h3>3. İzolasyon Testi (Megger)</h3>
          <p>Yılda en az bir kez motorun izolasyon direnci ölçülmelidir. Düşük değerler, su sızdırmazlığının bozulduğunu gösterebilir.</p>

          <p>Kurlar Pompa yetkili servisleri, profesyonel bakım hizmetleri ile ekipmanlarınızın her zaman en yüksek performansta çalışmasını sağlar.</p>
        `,
        tags: ['Bakım', 'Servis', 'İpuçları']
      },
      en: {
        title: 'Essential Maintenance Tips for Long-Lasting Pumps',
        excerpt: 'Periodic maintenance and inspection recommendations to extend the life of your submersible pumps and motors and prevent failures.',
        content: `
          <p>Submersible pumps operate under harsh conditions. Regular maintenance prevents unplanned downtime and extends equipment life.</p>

          <h3>1. Electrical Value Checks</h3>
          <p>Voltage and amperage values should be measured regularly. Excessive current draw can indicate mechanical strain or motor winding problems.</p>

          <h3>2. Panel Inspections</h3>
          <p>Contactors, thermal relays, and phase protection relays in the control panel should be tested. Loose connections can cause arcing and lead to motor burnout.</p>

          <h3>3. Insulation Test (Megger)</h3>
          <p>The motor's insulation resistance should be measured at least once a year. Low values may indicate compromised water sealing.</p>

          <p>Kurlar Pump authorized services ensure your equipment always operates at peak performance with professional maintenance services.</p>
        `,
        tags: ['Maintenance', 'Service', 'Tips']
      }
    }
  },
  {
    id: '4',
    slug: 'energy-efficiency-irrigation',
    image: solarImage,
    date: '2024-02-20',
    readingTime: 5,
    author: 'Canan Yılmaz',
    category: 'Sustainability',
    translations: {
      tr: {
        title: 'Sulama Sistemlerinde Enerji Verimliliği',
        excerpt: 'Modern sulama pompalarında enerji tüketimini düşürmenin yolları ve güneş enerjili (solar) sistemlerin avantajları.',
        content: `
          <p>Tarımsal işletmelerde en büyük gider kalemlerinden biri enerjidir. Doğru pompa ve sürücü kullanımı ile enerji maliyetlerini %40'a varan oranlarda düşürmek mümkündür.</p>

          <h3>Frekans İnvertörü (VFD) Kullanımı</h3>
          <p>Sürücüler, pompanın hızını ihtiyaca göre ayarlar. İhtiyaç azaldığında motoru yavaşlatarak ciddi enerji tasarrufu sağlar ve mekanik ömrü uzatır.</p>

          <h3>Solar Sulama Sistemleri</h3>
          <p>Güneş enerjili dalgıç pompa sistemleri, şebeke elektriğinin olmadığı yerlerde veya elektrik maliyetini sıfırlamak isteyenler için mükemmel çözümdür. Kurlar Pompa, yüksek verimli solar uyumlu motorlar sunmaktadır.</p>
        `,
        tags: ['Enerji', 'Solar', 'Tarım']
      },
      en: {
        title: 'Energy Efficiency in Irrigation Systems',
        excerpt: 'Ways to reduce energy consumption in modern irrigation pumps and the advantages of solar-powered systems.',
        content: `
          <p>Energy is one of the biggest expense items in agricultural operations. It is possible to reduce energy costs by up to 40% with the right pump and drive usage.</p>

          <h3>Variable Frequency Drive (VFD) Usage</h3>
          <p>Drives adjust the pump speed according to demand. By slowing down the motor when demand decreases, they provide significant energy savings and extend mechanical life.</p>

          <h3>Solar Irrigation Systems</h3>
          <p>Solar-powered submersible pump systems are excellent solutions for locations without grid electricity or for those wanting to eliminate electricity costs. Kurlar Pump offers high-efficiency solar-compatible motors.</p>
        `,
        tags: ['Energy', 'Solar', 'Agriculture']
      }
    }
  },
  {
    id: '5',
    slug: 'troubleshooting-guide',
    image: controlImage,
    date: '2024-02-15',
    readingTime: 7,
    author: 'Teknik Servis',
    category: 'Support',
    translations: {
      tr: {
        title: 'Yaygın Dalgıç Pompa Sorunları ve Çözümleri',
        excerpt: 'Pompa çalışıyor ama su basmıyor mu? Termik mi atıyor? Sık karşılaşılan arızaların nedenleri ve hızlı çözüm önerileri.',
        content: `
          <p>Sahada karşılaşılan sorunların çoğu, basit kontrollerle teşhis edilebilir. İşte en sık görülen problemler:</p>

          <h3>1. Pompa Çalışıyor Ama Su Basmıyor</h3>
          <ul>
            <li>Kuyudaki su seviyesi düşmüş olabilir.</li>
            <li>Pompa emiş filtresi tıkanmış olabilir.</li>
            <li>Çekvalf ters takılmış veya sıkışmış olabilir.</li>
          </ul>

          <h3>2. Motor Aşırı Isınıyor / Termik Atıyor</h3>
          <ul>
            <li>Voltaj dengesizliği veya faz kaybı olabilir.</li>
            <li>Pompa mili sıkışmış veya fanlar sürtüyor olabilir.</li>
            <li>Kullanılan kablo kesiti yetersiz olabilir.</li>
          </ul>
        `,
        tags: ['Arıza', 'Destek', 'Çözüm']
      },
      en: {
        title: 'Common Submersible Pump Problems and Solutions',
        excerpt: 'Pump running but no water? Thermal overload tripping? Causes of common failures and quick solution recommendations.',
        content: `
          <p>Most problems encountered in the field can be diagnosed with simple checks. Here are the most common problems:</p>

          <h3>1. Pump Running But No Water</h3>
          <ul>
            <li>Water level in the well may have dropped.</li>
            <li>Pump suction filter may be clogged.</li>
            <li>Check valve may be installed backwards or stuck.</li>
          </ul>

          <h3>2. Motor Overheating / Thermal Trip</h3>
          <ul>
            <li>There may be voltage imbalance or phase loss.</li>
            <li>Pump shaft may be stuck or impellers rubbing.</li>
            <li>Cable cross-section used may be insufficient.</li>
          </ul>
        `,
        tags: ['Troubleshooting', 'Support', 'Solutions']
      }
    }
  },
  {
    id: '6',
    slug: 'modern-irrigation',
    image: irrigationImage,
    date: '2024-02-05',
    readingTime: 4,
    author: 'Ahmet Yılmaz',
    category: 'Agriculture',
    translations: {
      tr: {
        title: 'Yüksek Verim İçin Modern Sulama Teknikleri',
        excerpt: 'Vahşi sulamadan damlama ve yağmurlama sistemlerine geçişin tarımsal verimliliğe ve su tasarrufuna etkisi.',
        content: `
          <p>Su kaynaklarının azalması, modern sulama tekniklerini zorunlu kılıyor. Doğru basınçta ve debide su sağlayan dalgıç pompalar, bu sistemlerin kalbidir.</p>
          <p>Damlama sulama sistemleri, suyu doğrudan bitki köküne ileterek buharlaşma kaybını en aza indirir. Bu sistemler, sabit basınç sağlayan yüksek verimli pompalar gerektirir. Kurlar Pompa ürünleri, hassas basınç kontrolü ile modern sulama sistemlerine tam uyum sağlar.</p>
        `,
        tags: ['Tarım', 'Sulama', 'Verimlilik']
      },
      en: {
        title: 'Modern Irrigation Techniques for High Yield',
        excerpt: 'The impact of transitioning from flood irrigation to drip and sprinkler systems on agricultural productivity and water conservation.',
        content: `
          <p>Decreasing water resources make modern irrigation techniques mandatory. Submersible pumps providing water at the right pressure and flow are the heart of these systems.</p>
          <p>Drip irrigation systems minimize evaporation loss by delivering water directly to the plant root. These systems require high-efficiency pumps providing constant pressure. Kurlar Pump products fully integrate with modern irrigation systems with precise pressure control.</p>
        `,
        tags: ['Agriculture', 'Irrigation', 'Efficiency']
      }
    }
  },
  {
    id: '7',
    slug: 'industrial-wastewater',
    image: wastewaterImage,
    date: '2024-01-28',
    readingTime: 5,
    author: 'Mühendislik Departmanı',
    category: 'Industry',
    translations: {
      tr: {
        title: 'Endüstriyel Atık Su Yönetimi',
        excerpt: 'Fabrikalar ve tesisler için zorlu atık suların tahliyesinde kullanılan özel pompa çözümleri ve Döküm (KPD) serisinin önemi.',
        content: `
          <p>Endüstriyel atık sular; kimyasallar, katı partiküller ve lifli maddeler içerebilir. Standart pompalar bu koşullarda kısa sürede tıkanır veya arızalanır.</p>
          <p>KPD Serisi döküm gövdeli pompalarımız, geniş kanallı fan yapıları ve dayanıklı mekanik salmastraları ile en zorlu atık suların transferinde bile kesintisiz hizmet verir. Arıtma tesislerinde güvenilirlik bir tercih değil, zorunluluktur.</p>
        `,
        tags: ['Endüstri', 'Atık Su', 'Arıtma']
      },
      en: {
        title: 'Industrial Wastewater Management',
        excerpt: 'Special pump solutions used for discharging difficult wastewater for factories and facilities, and the importance of the Cast Iron (KPD) series.',
        content: `
          <p>Industrial wastewater may contain chemicals, solid particles, and fibrous materials. Standard pumps clog or fail quickly under these conditions.</p>
          <p>Our KPD Series cast iron pumps provide uninterrupted service even in transferring the most difficult wastewater with their wide-channel impeller structures and durable mechanical seals. Reliability in treatment plants is not a choice, but a necessity.</p>
        `,
        tags: ['Industry', 'Wastewater', 'Treatment']
      }
    }
  },
  {
    id: '8',
    slug: 'motor-technologies',
    image: motorImage,
    date: '2024-01-15',
    readingTime: 6,
    author: 'Mehmet Demir',
    category: 'Technology',
    translations: {
      tr: {
        title: 'Dalgıç Motor Teknolojilerini Anlamak',
        excerpt: 'Su soğutmalı ve yağ soğutmalı motorlar arasındaki farklar, yeniden sarılabilir bobin teknolojisi ve enerji verimliliği sınıfları.',
        content: `
          <p>Dalgıç motorlar, suyun altında yıllarca bakım gerektirmeden çalışmak üzere tasarlanmıştır. İki temel teknoloji öne çıkar:</p>
          
          <h3>Su Soğutmalı Motorlar</h3>
          <p>Çevre dostudur ve soğutma performansı yüksektir. Kurlar Pompa motorları, su ile yağlanan radyal ve eksenel yataklar sayesinde uzun ömürlüdür. Yeniden sarılabilir bobin yapısı (PVC veya PE2) tamir maliyetlerini düşürür.</p>

          <h3>Verimlilik Standartları</h3>
          <p>Motorlarımız uluslararası NEMA standartlarına uygun flanş yapısına sahiptir ve yüksek verimlilik sınıflarında üretilerek işletme maliyetlerinizi düşürür.</p>
        `,
        tags: ['Motor', 'Teknoloji', 'Ar-Ge']
      },
      en: {
        title: 'Understanding Submersible Motor Technologies',
        excerpt: 'Differences between water-cooled and oil-cooled motors, rewindable winding technology, and energy efficiency classes.',
        content: `
          <p>Submersible motors are designed to operate underwater for years without maintenance. Two main technologies stand out:</p>
          
          <h3>Water-Cooled Motors</h3>
          <p>Environmentally friendly with high cooling performance. Kurlar Pump motors are long-lasting thanks to water-lubricated radial and axial bearings. The rewindable winding structure (PVC or PE2) reduces repair costs.</p>

          <h3>Efficiency Standards</h3>
          <p>Our motors feature flange structures complying with international NEMA standards and are produced in high efficiency classes to lower your operating costs.</p>
        `,
        tags: ['Motor', 'Technology', 'R&D']
      }
    }
  }
];

export function getBlogPost(slug: string, lang: string = 'en') {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;

  const t = post.translations[lang as keyof typeof post.translations] || post.translations['en'];
  
  return {
    ...post,
    title: t.title,
    excerpt: t.excerpt,
    content: t.content,
    tags: t.tags
  };
}

export function getBlogPosts(lang: string = 'en') {
  return blogPosts.map(post => {
    const t = post.translations[lang as keyof typeof post.translations] || post.translations['en'];
    return {
      ...post,
      title: t.title,
      excerpt: t.excerpt,
      content: t.content,
      tags: t.tags
    };
  });
}
