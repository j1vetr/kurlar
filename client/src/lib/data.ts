
export interface Product {
  id: string;
  name: string;
  category: 'pump' | 'motor';
  subCategory: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Pumps
  {
    id: 'kp1',
    name: 'Paslanmaz Çelik Dalgıç Pompa KP1',
    category: 'pump',
    subCategory: 'Paslanmaz Çelik',
    image: '/assets/kp1.png',
    description: 'Yüksek korozyon direnci ve üstün dayanıklılık.'
  },
  {
    id: 'kp2',
    name: 'Paslanmaz Çelik Dalgıç Pompa KP2',
    category: 'pump',
    subCategory: 'Paslanmaz Çelik',
    image: '/assets/kp2.png',
    description: 'Zorlu koşullar için maksimum performans.'
  },
  {
    id: 'kp3',
    name: 'Paslanmaz Çelik Dalgıç Pompa KP3',
    category: 'pump',
    subCategory: 'Paslanmaz Çelik',
    image: '/assets/kp3.png',
    description: 'Endüstriyel kullanıma uygun paslanmaz çözüm.'
  },
  {
    id: 'kpn41',
    name: 'Noryl Dalgıç Pompa KPN-41',
    category: 'pump',
    subCategory: 'Noryl',
    image: '/assets/kpn41.png',
    description: 'Hafif ve yüksek verimli noryl fan teknolojisi.'
  },
  {
    id: 'kpn42',
    name: 'Noryl Dalgıç Pompa KPN-42',
    category: 'pump',
    subCategory: 'Noryl',
    image: '/assets/kpn42.png',
    description: 'Ekonomik ve uzun ömürlü su temini.'
  },
  {
    id: 'kpn43',
    name: 'Noryl Dalgıç Pompa KPN-43',
    category: 'pump',
    subCategory: 'Noryl',
    image: '/assets/kpn43.png',
    description: 'Tarımsal sulama için ideal çözüm.'
  },
  {
    id: 'kpd1',
    name: 'Pik Döküm Dalgıç Pompa KPD-1',
    category: 'pump',
    subCategory: 'Pik Döküm',
    image: '/assets/kpd1.png',
    description: 'Ağır hizmet tipi döküm gövde yapısı.'
  },
  {
    id: 'kpd2',
    name: 'Pik Döküm Dalgıç Pompa KPD-2',
    category: 'pump',
    subCategory: 'Pik Döküm',
    image: '/assets/kpd2.png',
    description: 'Derin kuyu uygulamaları için güçlü tasarım.'
  },
  {
    id: 'kpd3',
    name: 'Pik Döküm Dalgıç Pompa KPD-3',
    category: 'pump',
    subCategory: 'Pik Döküm',
    image: '/assets/kpd3.png',
    description: 'Yüksek irtifa basma kapasitesi.'
  },
  {
    id: 'ksx1',
    name: 'Paslanmaz Döküm Dalgıç Pompa KSX-1',
    category: 'pump',
    subCategory: 'Paslanmaz Döküm',
    image: '/assets/ksx1.png',
    description: 'Döküm sağlamlığı ve paslanmaz hijyeni bir arada.'
  },
  {
    id: 'ksx2',
    name: 'Paslanmaz Döküm Dalgıç Pompa KSX-2',
    category: 'pump',
    subCategory: 'Paslanmaz Döküm',
    image: '/assets/ksx2.png',
    description: 'Profesyonel endüstriyel su yönetimi.'
  },

  // Motors
  {
    id: 'km41',
    name: 'Yağlı Tip Dalgıç Motor KM-41',
    category: 'motor',
    subCategory: 'Yağlı Tip',
    image: '/assets/km41.png',
    description: 'Yeniden sarılabilir, çevre dostu yağ soğutmalı.'
  },
  {
    id: 'km2',
    name: 'HI-TEMP Dalgıç Motor KM-2',
    category: 'motor',
    subCategory: 'HI-TEMP',
    image: '/assets/km2.png',
    description: 'Yüksek sıcaklıktaki sularda üstün dayanım.'
  },
  {
    id: 'km1',
    name: 'HI-TEMP Dalgıç Motor KM-1',
    category: 'motor',
    subCategory: 'HI-TEMP',
    image: '/assets/km1.png',
    description: 'Jeotermal uygulamalar için özel tasarım.'
  },
  {
    id: 'km3',
    name: 'HI-TEMP Dalgıç Motor KM-3',
    category: 'motor',
    subCategory: 'HI-TEMP',
    image: '/assets/km3.png',
    description: 'Zorlu termal koşullarda kesintisiz güç.'
  },
  {
    id: 'kms11',
    name: 'S-Type Dalgıç Motor KMS-11',
    category: 'motor',
    subCategory: 'S-Type',
    image: '/assets/kms11.png',
    description: 'İnce gövde yapısıyla dar kuyular için ideal.'
  },
];

export const categories = [
  {
    id: 'pumps',
    category: 'pump',
    title: 'Dalgıç Pompalar',
    description: 'Paslanmaz, Noryl ve Döküm seçenekleriyle her ihtiyaca uygun.',
    image: '/assets/kp1.png',
    subCategories: ['Paslanmaz Çelik', 'Noryl', 'Pik Döküm', 'Paslanmaz Döküm']
  },
  {
    id: 'motors',
    category: 'motor',
    title: 'Dalgıç Motorlar',
    description: 'Yüksek verimli, uzun ömürlü ve güçlü motor teknolojileri.',
    image: '/assets/km1.png',
    subCategories: ['Yağlı Tip', 'HI-TEMP', 'S-Type']
  }
];
