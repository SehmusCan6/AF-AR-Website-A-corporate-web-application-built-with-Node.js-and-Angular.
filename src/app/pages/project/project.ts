import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.html',
  styleUrls: ['./project.scss'],
  imports: [NgIf, NgFor],
  animations: [
    trigger('sidebarSlide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]),
    trigger('fadeBackdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProjectComponent {
  sidebarOpen = false;
  selectedProject: any = null;

  evler = [
    {
      title: 'Modern Prefabrik Ev',
      rate: 68,
      reason: 'Estetik ve hızlı kurulum nedeniyle tercih ediliyor.'
    },
    {
      title: 'Çelik Villa Tasarımı',
      rate: 54,
      reason: 'Dayanıklılık ve modern tasarım sayesinde tercih ediliyor.'
    },
    {
      title: 'Tiny House',
      rate: 38,
      reason: 'Minimal yaşam tarzını benimseyenler için ideal.'
    }
  ];

  projects = [
    {
      title: 'Modern Prefabrik Ev',
      year: '2024',
      description: 'Geniş camlarla çevrili, ahşap detaylara sahip doğayla iç içe modern yaşam alanı.',
      images: ['/assets/bg1.png', '/assets/bg2.png', '/assets/bg3.png'],
      details: {
        width: '120 m²',
        material: 'Hafif Çelik + Ahşap',
        delivery: '6-8 Hafta',
        insulation: 'EPS + Taş Yünü',
        floor: 'Lamine Parke',
      }
    },
    {
      title: 'Çelik Villa Tasarımı',
      year: '2023',
      description: 'Hafif çelik konstrüksiyonla inşa edilen, modüler ve sürdürülebilir villa yapısı.',
      images: ['/assets/bg1.png', '/assets/bg2.png', '/assets/bg3.png'],
      details: {
        width: '150 m²',
        material: 'Çelik + Kompozit',
        delivery: '8 Hafta',
        insulation: 'Cam Yünü',
        floor: 'Seramik + Ahşap',
      }
    },
    {
      title: 'Tiny House',
      year: '2022',
      description: 'Minimalist yaşam sevenler için taşınabilir ve fonksiyonel tiny house tasarımı.',
      images: ['/assets/bg1.png', '/assets/bg2.png', '/assets/bg3.png'],
      details: {
        width: '45 m²',
        material: 'Ahşap + Alüminyum',
        delivery: '4 Hafta',
        insulation: 'EPS',
        floor: 'Vinil Kaplama',
      }
    }
  ];

  cities = [
    { name: 'İstanbul', top: '19%', left: '15%', projectCount: 8, description: 'Mega şehir projelerimiz burada.', images: ['/assets/isntabul.jpeg', '/assets/bg2.png', '/assets/bg3.png'], },
    { name: 'Ankara', top: '32%', left: '35%', projectCount: 5, description: 'Başkentteki kamu ve konut işleri.',images: ['/assets/ankaraimg.jpg', '/assets/bg1.png', '/assets/bg2.png'] },
    { name: 'İzmir', top: '60%', left: '5%', projectCount: 4, description: 'Sahil yaşamına uygun yapılar.',images: ['/assets/izmir.jpeg', '/assets/bg1.png', '/assets/bg2.png'] },
    { name: 'Konya', top: '60%', left: '35%', projectCount: 3, description: 'Geniş arazili yapılar.',images: ['/assets/ankaraimg.jpg', '/assets/bg1.png', '/assets/bg2.png'] },
    { name: 'Diyarbakır', top: '65%', left: '76%', projectCount: 6, description: 'Modern villalar ve ofisler.',images: ['/assets/diyarbakir.jpeg', '/assets/bg1.png', '/assets/bg2.png'] },
    { name: 'Mardin', top: '75%', left: '78%', projectCount: 2, description: 'Tarihi dokuya uygun projeler.',images: ['/assets/mardin.jpeg', '/assets/bg1.png', '/assets/bg2.png'] },
  ];

  hoveredCity: any = null;
  selectedCity: any = null;

  onHoverCity(city: any) {
    this.hoveredCity = city;
  }

  onLeaveCity() {
    this.hoveredCity = null;
  }

  selectCity(city: any) {
    this.selectedCity = city;
  }



  toggleSidebar(project: any) {
    this.selectedProject = project;
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  onContact() {
    alert('İletişime geçme işlemi burada yapılacak.');
  }

  currentIndexes: { [title: string]: number } = {};

  currentImage(project: any): string {
    if (this.currentIndexes[project.title] === undefined) {
      this.currentIndexes[project.title] = 0;
    }
    return project.images[this.currentIndexes[project.title]];
  }

  nextImage(project: any) {
    const index = this.currentIndexes[project.title] || 0;
    this.currentIndexes[project.title] = (index + 1) % project.images.length;
  }

  prevImage(project: any) {
    const index = this.currentIndexes[project.title] || 0;
    this.currentIndexes[project.title] =
      (index - 1 + project.images.length) % project.images.length;
  }

  selectedReasonIndex: number | null = null;

  toggleReason(index: number) {
    this.selectedReasonIndex = this.selectedReasonIndex === index ? null : index;
  }

  currentCityImageIndex: number = 0;

  nextCityImage() {
    if (this.selectedCity?.images) {
      this.currentCityImageIndex =
        (this.currentCityImageIndex + 1) % this.selectedCity.images.length;
    }
  }

  prevCityImage() {
    if (this.selectedCity?.images) {
      this.currentCityImageIndex =
        (this.currentCityImageIndex - 1 + this.selectedCity.images.length) %
        this.selectedCity.images.length;
    }
  }
}
