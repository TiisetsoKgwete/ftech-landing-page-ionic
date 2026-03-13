import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./services/services.page').then((m) => m.ServicesPage),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./testimonials/testimonials.page').then((m) => m.TestimonialsPage),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq.page').then((m) => m.FAQPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.page').then((m) => m.ContactPage),
  },
];
