import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', 
    loadChildren: () => import('./homepage/homepage.module').then((m)=>m.HomepageModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // {path: '', component: ProductsListComponent,
  //   children: [
  //     {path: '', redirectTo: 'products-list', pathMatch: 'full'},
  //     { path: 'products-list', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  //   ]
  // },
  { path: 'posts', 
    loadChildren: () => import('./posts/posts.module').then((m)=>m.PostsModule)
  },
  { path: 'products', 
    loadChildren: () => import('./products/products.module').then((m)=>m.ProductsModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
