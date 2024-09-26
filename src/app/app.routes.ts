import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemons-page/pokemons-page.component')
  },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemon-page/pokemon-page.component')
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page.component')
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing-page/pricing-page.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page.component')
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];
