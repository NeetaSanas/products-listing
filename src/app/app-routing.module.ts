import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  // { path: '', 
  //   loadChildren: () => import('./homepage/homepage.module').then((m)=>m.HomepageModule)
  // },
  { path: '', loadChildren: () => import('./products/products.module').then((m)=>m.ProductsModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // {path: '', component: ProductsListComponent,
  //   children: [
  //     {path: '', redirectTo: 'products-list', pathMatch: 'full'},
  //     { path: 'products-list', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  //   ]
  // },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then((m)=>m.CartModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
