import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // NgIf, NgFor gibi şeyler için

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule], // Gerekirse başka componentleri buraya eklersin
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {


  steps = [
    { icon: 'fas fa-comments', title: 'İhtiyaç Analizi', desc: 'Beklentileriniz detaylı şekilde değerlendirilir.' },
    { icon: 'fas fa-drafting-compass', title: 'Tasarım & Planlama', desc: 'Mimari çözümler ve mühendislik hesaplamaları yapılır.' },
    { icon: 'fas fa-industry', title: 'Üretim', desc: 'Prefabrik yapı elemanları fabrikamızda üretilir.' },
    { icon: 'fas fa-truck', title: 'Nakliye', desc: 'Yapı bileşenleri şantiye alanına taşınır.' },
    { icon: 'fas fa-tools', title: 'Kurulum', desc: 'Yapının montajı profesyonel ekibimizce gerçekleştirilir.' },
    { icon: 'fas fa-key', title: 'Teslimat', desc: 'Anahtar teslim olarak yapı size sunulur.' },
  ];
  testimonials = [
    { name: 'Ahmet K.', city: 'İzmir', quote: 'AF-AR ile 6 haftada ev sahibi olduk. Süreç çok profesyoneldi.' },
    { name: 'Meryem Y.', city: 'Ankara', quote: 'Tasarım ve kalite tam hayal ettiğim gibiydi. Tavsiye ederim!' },
    { name: 'Suat E.', city: 'Gaziantep', quote: 'Kısa sürede güvenli ve modern bir yapıya kavuştuk.' }
  ];
  faqs = [
    {
      question: 'Prefabrik evler ne kadar sürede teslim edilir?',
      answer: 'Projeye göre değişmekle birlikte genellikle 6-8 hafta içinde anahtar teslim gerçekleşir.'
    },
    {
      question: 'Prefabrik yapılar kış şartlarına uygun mu?',
      answer: 'Evet. Yüksek yalıtım teknolojisi ve mühendislik sayesinde her mevsime uygundur.'
    },
    {
      question: 'Garanti süresi var mı?',
      answer: 'Tüm yapılarımız 2 yıl montaj + 10 yıl yapı garantilidir.'
    },
    {
      question: 'Kendi tasarımımı getirebilir miyim?',
      answer: 'Evet. Mimari ekibimizle beraber size özel çözümler üretebiliriz.'
    }
  ];

  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }
  stats = [
    { label: 'Tamamlanan Proje', value: 127 },
    { label: 'Aktif Şehir Sayısı', value: 28 },
    { label: 'Yıllık Üretim Kapasitesi', value: '120.000 m²' },
    { label: 'Teslimat Ortalama Süresi', value: '6 Hafta' }
  ];
  services = [
    {
      icon: 'fas fa-home',
      title: 'Prefabrik Yapılar',
      description: 'Hızlı kurulumlu, modern ve dayanıklı yaşam alanları.'
    },
    {
      icon: 'fas fa-industry',
      title: 'Hafif Çelik Sistemler',
      description: 'Depreme dayanıklı ve uzun ömürlü çelik yapılar.'
    },
    {
      icon: 'fas fa-box',
      title: 'Konteyner Çözümleri',
      description: 'Taşınabilir ve fonksiyonel konteyner sistemleri.'
    },
    {
      icon: 'fas fa-drafting-compass',
      title: 'Mimari Tasarım',
      description: 'Size özel mimari proje ve danışmanlık hizmeti.'
    },
    {
      icon: 'fas fa-hammer',
      title: 'Montaj & İnşaat',
      description: 'Profesyonel ekiplerle sahada hızlı uygulama.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Teknik Destek',
      description: 'Proje öncesi ve sonrası destek hizmetleri.'
    }
  ];

}
