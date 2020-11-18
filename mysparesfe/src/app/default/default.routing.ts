import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// components
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CONTAINERS } from './common/index';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AuthGuard } from '../core/service/auth.guard';
import { LayoutAuthGuard } from '../core/service/layout_auth.guard';
import { UnderDevelopingComponent } from './pages/layout/under-developing/under-developing.component';
import { GetDirectionsComponent } from './shared/get-directions/get-directions.component';

export const routes: Routes = [
  {
    path: '',
    component: CONTAINERS.LayoutContainerComponent,
    canActivate: [LayoutAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },

      {
        path: 'underdeveloping',
        component: UnderDevelopingComponent,
        data: {
          urls: [{ title: 'UNDER DEVELOPING', url: '' }]
        }
      },
      {
        path: 'getdirections',
        component: GetDirectionsComponent,
        data: {
          urls: [{ title: 'Get Directions', url: '' }]
        }
      },
      {
        path: 'account',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
        data: {
          urls: [{ title: 'Account Settings', url: '' }]
        }
      },
      {
        path: 'cart',
        loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
        data: {
          urls: [{ title: 'Cart', url: '' }]
        }
      },
      {
        path: 'checkout',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule),
        data: {
          urls: [{ title: 'Checkout', url: '' }]
        }
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
        // canActivate: [AuthGuard],
        data: {
          urls: [{ title: 'Contact', url: '' }]
        }
      },
      {
        path: 'auth',
        canActivate: [AuthGuard],
        loadChildren:
          () => import('./pages/Authentication/authentication.module').then(m => m.AuthenticationModule),
        data: {
          urls: [{ title: 'Sign In', url: '' }]
        }
      },
      {
        path: 'page-detail/:id',
        component: DetailPageComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'products/:id',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
        data: {
          urls: [{ title: 'Product Detail ', url: '' }]
        }
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule {}
