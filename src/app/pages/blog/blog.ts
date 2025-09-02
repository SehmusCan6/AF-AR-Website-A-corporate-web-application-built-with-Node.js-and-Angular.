import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class BlogComponent {
  selectedPostIndex: number | null = null;

  blogPosts = [
    {
      title: 'Prefabrik Yapıların Geleceği',
      summary: 'Yeni nesil yapılar nasıl daha sürdürülebilir hale geliyor?',
      full: '2025 yılında prefabrik yapılar daha çevreci ve enerji verimli olacak...',
      image: 'https://picsum.photos/id/1011/600/400'
    },
    {
      title: 'AF-AR Konteyner Projesi: İzmir',
      summary: 'İzmir’deki konteyner kampımızı nasıl planladık ve tamamladık?',
      full: 'İzmir’de 120 birimlik konteyner kampı kurduk...',
      image: 'https://picsum.photos/id/1015/600/400'
    },
    {
      title: 'Hafif Çelik ile Depreme Dayanıklılık',
      summary: 'Hafif çelik yapılar neden daha çok tercih ediliyor?',
      full: 'Depreme karşı daha dayanıklı ve hızlı inşa edilebilir sistemler sunan hafif çelik yapılar yaygınlaşıyor...',
      image: 'https://picsum.photos/id/1019/600/400'
    }
  ];

  togglePost(index: number): void {
    this.selectedPostIndex = this.selectedPostIndex === index ? null : index;
  }
}
