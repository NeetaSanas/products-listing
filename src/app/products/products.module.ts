import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsService } from './products.service';
import { ProductsEffects } from './state/products.effects';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DialogModule } from '../global/dialog/dialog.module';
import { DialogService } from '../global/dialog/dialog.service';
import { ProductsListComponent } from './products-list.component';
import { HeaderModule } from '../global/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    children: [
      { path: 'add', component: AddProductComponent },
      {
        path: 'edit/:id',
        component: EditProductComponent,
      },
    ],
  },
];
@NgModule({ 
  declarations: [ProductsListComponent, AddProductComponent, EditProductComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    //StoreModule.forFeature(POST_STATE_NAME, postsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    DialogModule,
  ],
  providers:[ProductsService, DialogService]
})
export class ProductsModule {}
