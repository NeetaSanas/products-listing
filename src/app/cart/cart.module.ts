import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from '../products/products.module';
import { CartComponent } from './cart.component';
import { FooterComponent } from '../global/footer/footer.component';
import { HeaderModule } from '../global/header/header.module';

export const routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    HeaderModule
  ],
  providers:[]
})
export class CartModule { }