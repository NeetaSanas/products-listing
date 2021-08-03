import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HeaderComponent from 'src/stories/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsModule } from './posts/posts.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

export const routes: Routes = [
  //{ path: '', component: HomepageComponent },
  { path: '', 
    loadChildren: () => import('./homepage/homepage.module').then((m)=>m.HomepageModule)
  },
  //{ path: 'login', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  
  // { path: 'products-list', component: ProductsListComponent },
  // { path: 'products-list', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), 
  //   children:[{path:'add', component: AddProductComponent}]
  // },
  {path: '', component: ProductsListComponent,
    children: [
      {path: '', redirectTo: 'products-list', pathMatch: 'full'},
      { path: 'products-list', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
      
    ]
  },
  { path: 'posts', 
    loadChildren: () => import('./posts/posts.module').then((m)=>m.PostsModule)
  },
  // { path: 'header', component: HeaderComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
