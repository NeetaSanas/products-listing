import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsService } from './products.service';
import { ProductsEffects } from './state/products.effects';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    children: [
      { path: 'add', component: AddProductComponent },
    //   {
    //     path: 'edit/:id',
    //     component: EditPostComponent,
    //   },
    ],
  },
];
@NgModule({ 
  declarations: [ProductsListComponent, AddProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    //StoreModule.forFeature(POST_STATE_NAME, postsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers:[ProductsService]
})
export class ProductsModule {}
