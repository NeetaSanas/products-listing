import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes = [
  { path: '', component: ProductsListComponent,
    children: [
      { path: 'add', component: AddProductComponent },
      // {
      //   path: 'edit/:id',
      //   component: EditProductComponent,
      // },
    ],
  }
];

@NgModule({
  declarations: [
    ProductsListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports:[CommonModule],
  providers:[]
})
export class ProductsModule { }