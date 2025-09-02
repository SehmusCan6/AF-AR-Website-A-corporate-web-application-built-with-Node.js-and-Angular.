import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-project3',
  imports: [
    NgForOf
  ],
  templateUrl: './project3.html',
  standalone: true,
  styleUrl: './project3.scss'
})
export class Project3Component {
  projects = [
    {
      img: 'assets/bg1.png',
      title: 'Prefabrik Konut Projesi',
      description: 'Kısa sürede kurulabilen, ekonomik ve dayanıklı yaşam alanı sunar.',
      area: '85 m²',
      deliveryTime: '30 gün',
      material: 'Galvaniz Çelik + Fibercement Paneller'
    },
    {
      img: 'assets/bg2.png',
      title: 'Prefabrik Okul Binası',
      description: 'Depreme dayanıklı, modüler sınıflar içeren eğitim yapısıdır.',
      area: '240 m²',
      deliveryTime: '40 gün',
      material: 'Çelik Karkas + Panel Sistem'
    }
  ];
}
