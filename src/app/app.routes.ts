import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@nx-test/products').then((m) => m.ProductListComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@nx-test/orders').then((m) => m.OrderListComponent),
  },
];
