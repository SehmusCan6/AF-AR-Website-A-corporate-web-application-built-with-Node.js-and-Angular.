import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { LoadingComponent } from './components/loading/loading';
import { NgIf } from '@angular/common'; // 👈 EKLENDİ!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    NgIf // 👈 EKLENMESİ GEREKEN DİREKTİF!
  ],
  templateUrl: './app.html'
})
export class App implements OnInit {
  loading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
