import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-project1',
  standalone: true,
  templateUrl: './project1.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./project1.scss']
})
export class Project1Component {
  projects = [
    {
      img: 'assets/bg1.png',
      title: 'Villa Hafif Çelik Proje',
      description: 'Doğayla uyumlu, konforlu yaşam alanı sunar. Modern mimarisiyle dikkat çeker.',
      area: '120 m²',
      deliveryTime: '45 gün',
      material: 'Hafif Çelik + Kompozit Kaplama'
    },
    {
      img: 'assets/bg2.png',
      title: 'İş Yeri Hafif Çelik Proje',
      description: 'Geniş iç hacmi, enerji verimliliği ve hızlı montajıyla öne çıkar.',
      area: '300 m²',
      deliveryTime: '60 gün',
      material: 'Çelik Taşıyıcı + Sandviç Panel'
    }
  ];
}
