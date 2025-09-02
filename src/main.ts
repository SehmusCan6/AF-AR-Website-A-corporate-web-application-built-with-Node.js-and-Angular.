import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { App } from './app/app';


bootstrapApplication(App, {
  ...appConfig, // ✅ appConfig'i yay (spread) ediyoruz
  providers: [
    ...appConfig.providers, // config içindeki diğer provider'ları koru
    provideAnimations()     // ✅ Animasyonları buraya ekliyoruz
  ]
}).catch((err) => console.error(err));
