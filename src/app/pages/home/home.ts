import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList
} from '@angular/core';
import {NgClass, NgForOf, NgStyle} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [NgForOf, NgStyle, NgClass]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('heroWord') heroWord!: ElementRef;

  @ViewChildren('card') cardElements!: QueryList<ElementRef>;     // Services
  @ViewChildren('metricRef') metricElements!: QueryList<ElementRef>; // Metrics

  images = [
    { url: 'assets/bg1.png', word: 'ESTETİK' },
    { url: 'assets/bg2.png', word: 'MİMARİ' }
  ];
  index = 0;

  sponsorLogos = [
    'assets/logo.png',
    'assets/logo.png',
    'assets/logo.png',
    'assets/logo.png',
    'assets/logo.png',
    'assets/logo.png',
    'assets/logo.png',
    'assets/logo.png'
  ];

  metrics = [
    { value: '9600', label: 'M² PREFABRİK YAPI' },
    { value: '8200', label: 'M² HAFİF ÇELİK YAPI' },
    { value: '150+', label: 'OFİS TASARIMI' },
    { value: '350+', label: 'EV TASARIMI' }
  ];
  visibleMetrics: boolean[] = [false, false, false, false];

  skills = [
    { name: 'MİMARİ', percent: 88 },
    { name: 'MODERN', percent: 85 },
    { name: 'PLANLAMA', percent: 75 }
  ];

  imagesForServices = ['bg3', 'bg4', 'bg5', 'bg6'];
  visibleCards: boolean[] = [false, false, false, false];

  ngAfterViewInit(): void {
    this.changeBackground();
    setInterval(() => this.changeBackground(), 5000);

    this.observeServiceCards();
    setTimeout(() => this.observeMetrics(), 100);
    this.observeMetrics();
  }

  changeBackground() {
    const { url, word } = this.images[this.index];
    this.heroSection.nativeElement.style.backgroundImage = `url('${url}')`;
    this.heroWord.nativeElement.textContent = word;
    this.index = (this.index + 1) % this.images.length;
  }

  observeServiceCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = +entry.target.getAttribute('data-index')!;
          setTimeout(() => {
            this.visibleCards[index] = true;
          }, index * 400); // yavaş ve sırayla
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    this.cardElements.forEach((el, i) => {
      el.nativeElement.setAttribute('data-index', i.toString());
      observer.observe(el.nativeElement);
    });
  }

  observeMetrics() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = +entry.target.getAttribute('data-index')!;
          setTimeout(() => {
            this.visibleMetrics[index] = true;
          }, index * 400); // sırayla ve yavaşça
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    this.metricElements.forEach((el, i) => {
      el.nativeElement.setAttribute('data-index', i.toString());
      observer.observe(el.nativeElement);
    });
  }
}
