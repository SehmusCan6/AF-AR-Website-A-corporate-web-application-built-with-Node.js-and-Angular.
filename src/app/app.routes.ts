import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', loadComponent: () => import('./pages/project/project').then(m => m.ProjectComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent) },
  {path : 'blog',loadComponent:()=>import('./pages/blog/blog').then(m => m.BlogComponent) },
  { path: 'project1', loadComponent:()=> import('./projects/project1/project1').then(m => m.Project1Component) },
  { path: 'project2', loadComponent:()=> import('./projects/project2/project2').then(m => m.Project2Component) },
  { path: 'project3', loadComponent:()=> import('./projects/project3/project3').then(m => m.Project3Component) },
  { path: 'project4', loadComponent:()=> import('./projects/project4/project4').then(m => m.Project4Component) }
];

