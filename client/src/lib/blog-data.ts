
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
        excerpt: 'İhtiyaçlarınıza en uygun dalgıç pompayı seçerken dikkat etmeniz gereken debi, basma yüksekliği ve kuyu çapı gibi kritik faktörler hakkında kapsamlı bir rehber.',
        content: `
          <p class="lead">Dalgıç pompa seçimi, verimli bir su temini sistemi kurmanın en kritik adımıdır. Yanlış pompa seçimi, hem enerji israfına hem de sistemin sık sık arızalanmasına neden olabilir. Bu rehberde, doğru seçimi yapmanız için gereken tüm teknik detayları ele alıyoruz.</p>
          
          <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
            <h4 class="text-blue-900 font-bold mb-2">Neden Doğru Seçim Önemli?</h4>
            <p class="text-blue-800 text-sm m-0">İstatistiklere göre, pompa arızalarının %60'ı yanlış seçimden kaynaklanmaktadır. Doğru seçilmiş bir pompa, %30'a varan enerji tasarrufu sağlar.</p>
          </div>

          <h2>1. Debi (Q) İhtiyacının Belirlenmesi</h2>
          <p>İlk adım, saatte ne kadar suya ihtiyacınız olduğunu net bir şekilde belirlemektir. Bu değer, kullanım alanına göre değişiklik gösterir:</p>
          <ul>
            <li><strong>Tarımsal Sulama:</strong> Bitki türü, ekilen alanın büyüklüğü ve sulama yöntemi (damlama/yağmurlama) belirleyicidir. Örneğin, mısır sulaması ile buğday sulaması farklı debi ihtiyaçları doğurur.</li>
            <li><strong>Konut ve Bina:</strong> Daire sayısı, kat sayısı ve yaşayan kişi sayısı dikkate alınır.</li>
            <li><strong>Endüstriyel Kullanım:</strong> Üretim prosesinin gerektirdiği anlık su miktarı hesaplanmalıdır.</li>
          </ul>
          
          <h2>2. Basma Yüksekliği (H) Hesabı</h2>
          <p>Suyun ne kadar yükseğe taşınacağı, pompanın gücünü (HP/kW) ve kademe sayısını belirler. Bu hesaplama sadece kuyunun derinliği ile sınırlı değildir. Aşağıdaki faktörlerin toplamı "Manometrik Yükseklik" (Hm) değerini verir:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="bg-slate-50 p-4 rounded-lg">
              <strong class="block text-slate-900 mb-1">Statik Yükseklik</strong>
              <span class="text-sm text-slate-600">Kuyudaki su seviyesi ile suyun boşaltılacağı en yüksek nokta arasındaki dikey mesafe.</span>
            </div>
            <div class="bg-slate-50 p-4 rounded-lg">
              <strong class="block text-slate-900 mb-1">Sürtünme Kayıpları</strong>
              <span class="text-sm text-slate-600">Boruların çapı, uzunluğu, dirsekler ve vanaların oluşturduğu direnç.</span>
            </div>
          </div>

          <h2>3. Kuyu Çapı ve Özellikleri</h2>
          <p>Pompanızın kuyuya fiziksel olarak sığması gerekir. Piyasada en yaygın olarak 4", 6", 8" ve 10" kuyu çaplarına uygun pompalar bulunur. Ancak dikkat edilmesi gereken bir diğer husus da suyun kalitesidir:</p>
          
          <ul>
            <li><strong>Temiz Su:</strong> Standart pompalar kullanılabilir.</li>
            <li><strong>Kumlu Su:</strong> Noryl fanlı (KPN serisi) veya özel tasarımlı paslanmaz pompalar tercih edilmelidir. Kum, standart fanları zımpara gibi aşındırabilir.</li>
            <li><strong>Kireçli/Agresif Su:</strong> AISI 304 veya 316 paslanmaz çelik pompalar korozyona karşı en iyi çözümdür.</li>
          </ul>
          
          <h2>4. Elektrik Bağlantısı ve Pano</h2>
          <p>Pompanızın voltajı (220V Monofaze veya 380V Trifaze) şebekenize uygun olmalıdır. Ayrıca motor koruma panosu kullanımı, voltaj dalgalanmalarına ve susuz çalışmaya karşı pompanızı koruyan en önemli sigortadır.</p>

          <hr class="my-8 border-slate-200" />

          <h3>Uzman Tavsiyesi</h3>
          <p>Kurlar Pompa olarak, sadece ürün satmıyor, mühendislik çözümleri sunuyoruz. İhtiyacınızı tam olarak belirlemek için uzman kadromuzla iletişime geçebilir veya web sitemizdeki <strong>Pompa Seçim Sihirbazı</strong>'nı kullanarak saniyeler içinde size en uygun modeli bulabilirsiniz.</p>
        `,
        tags: ['Pompa Seçimi', 'Rehber', 'Verimlilik', 'Mühendislik']
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
        excerpt: 'Dalgıç pompalarda kullanılan Noryl plastik ve paslanmaz çelik malzemelerin avantajları, dezavantajları ve kullanım alanları hakkında detaylı karşılaştırma.',
        content: `
          <p class="lead">Dalgıç pompalarda malzeme seçimi, pompanın ömrünü ve performansını doğrudan etkiler. "Plastik mi yoksa metal mi?" sorusu müşterilerimizden en sık duyduğumuz sorulardan biridir. Bu yazıda, en yaygın iki seçenek olan Noryl (mühendislik plastiği) ve Paslanmaz Çelik arasındaki farkları teknik detaylarıyla inceliyoruz.</p>

          <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 class="text-xl font-bold text-slate-900 mb-4">Noryl (PPO) Nedir?</h3>
                <p class="text-sm text-slate-600 mb-4">Polifenilen Oksit (PPO) bazlı, yüksek performanslı bir mühendislik plastiğidir. Sıradan plastiklerden çok daha dayanıklı, sert ve ısıya dirençlidir.</p>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-center gap-2"><span class="w-2 h-2 bg-green-500 rounded-full"></span>Kuma karşı mükemmel direnç</li>
                  <li class="flex items-center gap-2"><span class="w-2 h-2 bg-green-500 rounded-full"></span>Hafiflik (Montaj kolaylığı)</li>
                  <li class="flex items-center gap-2"><span class="w-2 h-2 bg-green-500 rounded-full"></span>Düşük maliyet</li>
                </ul>
             </div>
             <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 class="text-xl font-bold text-slate-900 mb-4">Paslanmaz Çelik (AISI 304)</h3>
                <p class="text-sm text-slate-600 mb-4">Krom-nikel alaşımlı çelik. Korozyona karşı üstün direnç sağlar ve endüstriyel standarttır.</p>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-center gap-2"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>Yüksek basınç dayanımı</li>
                  <li class="flex items-center gap-2"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>Sıcak su dayanımı</li>
                  <li class="flex items-center gap-2"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>Uzun mekanik ömür</li>
                </ul>
             </div>
          </div>

          <h2>Hangi Durumda Hangisi Seçilmeli?</h2>
          
          <h3>1. Kumlu Sular için: KPN Serisi (Noryl)</h3>
          <p>Eğer kuyunuzda kum oranı yüksekse (50g/m³ üzeri), Noryl fanlar daha iyi bir seçenektir. Paslanmaz çelik fanlar kumla temas ettiğinde zamanla aşınabilir, ancak Noryl malzemenin esnek yapısı ve pürüzsüz yüzeyi kumun fan üzerinden kayıp gitmesini sağlar. Bu nedenle tarımsal sulamada 4" ve 6" kuyularda sıklıkla tercih edilir.</p>

          <h3>2. Endüstriyel ve Hijyenik Kullanım: KP/KSX Serisi (Paslanmaz)</h3>
          <p>İçme suyu basılacaksa, gıda tesislerinde kullanılacaksa veya suyun basıncı çok yüksek olacaksa Paslanmaz Çelik vazgeçilmezdir. Bakteri barındırmaz, paslanma yapmaz ve çok yüksek basınca dayanabilir.</p>

          <h3>3. Verimlilik Karşılaştırması</h3>
          <p>Noryl fanlar, kalıplama teknolojisi sayesinde çok pürüzsüz bir yüzeye sahiptir. Bu, suyun fan içindeki sürtünmesini azaltarak hidrolik verimliliği artırır. Ancak paslanmaz çelik fanlar da modern lazer kaynak teknolojileri ile çok hassas üretilmektedir. Günümüzde her iki malzeme de A sınıfı enerji verimliliği sunabilmektedir.</p>

          <div class="bg-amber-50 p-6 rounded-xl border border-amber-200 my-8">
            <h4 class="text-amber-900 font-bold mb-2 flex items-center gap-2">⚠️ Önemli Uyarı</h4>
            <p class="text-amber-800 text-sm m-0">Hangi malzemeyi seçerseniz seçin, pompanın "susuz çalıştırılmaması" en önemli kuraldır. Susuz çalışma durumunda Noryl fanlar ısıdan dolayı deforme olabilir, paslanmaz fanlar ise yatakları sarabilir. Mutlaka seviye elektrodu veya koruma rölesi kullanın.</p>
          </div>
        `,
        tags: ['Malzeme Bilgisi', 'Teknoloji', 'Karşılaştırma', 'Mühendislik']
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
          <p class="lead">Dalgıç pompalar, suyun metrelerce altında, gözden uzak ve zorlu koşullar altında çalışırlar. Genellikle arıza yapana kadar unutulurlar, ancak düzenli bakım, plansız duruşların önüne geçer ve ekipman ömrünü yıllarca uzatır.</p>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 my-8">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Periyodik Bakım Takvimi</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left">
                <thead class="bg-slate-50 text-slate-700 font-bold uppercase">
                  <tr>
                    <th class="px-4 py-3 rounded-tl-lg">Kontrol Noktası</th>
                    <th class="px-4 py-3">Sıklık</th>
                    <th class="px-4 py-3 rounded-tr-lg">İşlem</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr>
                    <td class="px-4 py-3 font-medium">Elektrik Değerleri</td>
                    <td class="px-4 py-3 text-slate-500">Aylık</td>
                    <td class="px-4 py-3 text-slate-600">Voltaj ve Amper ölçümü</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-medium">Pano Temizliği</td>
                    <td class="px-4 py-3 text-slate-500">3 Ayda Bir</td>
                    <td class="px-4 py-3 text-slate-600">Toz temizliği ve fan kontrolü</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-medium">İzolasyon Testi</td>
                    <td class="px-4 py-3 text-slate-500">Yıllık</td>
                    <td class="px-4 py-3 text-slate-600">Megger testi ile kaçak kontrolü</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2>1. Elektrik Değerlerinin Kontrolü</h2>
          <p>Voltaj ve amper değerleri pompanızın sağlık karnesidir. Etiket değerinin üzerindeki akım çekimi, mekanik bir zorlanmanın (sıkışma, sürtme) veya motor sargı problemlerinin habercisi olabilir. Ayrıca voltaj dengesizliği (%5'ten fazla) motorun aşırı ısınmasına neden olur.</p>

          <h2>2. Pano ve Kontaktör Kontrolleri</h2>
          <p>Kontrol panosundaki kontaktörler, termikler ve faz koruma röleleri zamanla oksitlenebilir veya gevşeyebilir. Gevşek bağlantılar "ark" yapabilir ve bu durum ani voltaj düşümlerine, dolayısıyla motorun yanmasına neden olabilir. Panonuzun temiz, kuru ve havadar olduğundan emin olun.</p>

          <h2>3. Hidrolik Performans Takibi</h2>
          <p>Pompanızın debisinde veya basıncında zamanla bir düşüş fark ederseniz, bu durumu görmezden gelmeyin. Bu şunların işareti olabilir:</p>
          <ul>
            <li>Fanlarda aşınma</li>
            <li>Emiş ızgarasında tıkanıklık</li>
            <li>Boru hattında kaçak</li>
          </ul>

          <h2>4. İzolasyon (Megger) Testi</h2>
          <p>Bu işlem profesyonel bir cihaz gerektirir ancak motorun ömrü için kritiktir. Motor sargılarının ve kablonun suya karşı izolasyonu ölçülür. Düşük değerler, su sızdırmazlığının bozulduğunu ve motorun kısa devre yapma riskinin olduğunu gösterir.</p>

          <p><strong>Unutmayın:</strong> Kurlar Pompa yetkili servisleri, profesyonel bakım hizmetleri ile ekipmanlarınızın her zaman en yüksek performansta çalışmasını sağlar. Bakım maliyeti, yeni bir pompa maliyetinin yanında önemsiz kalır.</p>
        `,
        tags: ['Bakım', 'Servis', 'İpuçları', 'Güvenlik']
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
