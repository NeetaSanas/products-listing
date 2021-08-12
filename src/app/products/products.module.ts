import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsService } from './products.service';
import { ProductsEffects } from './state/products.effects';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DialogModule } from '../global/dialog/dialog.module';
import { DialogService } from '../global/dialog/dialog.service';
import { ProductsListComponent } from './products-list.component';
import { HeaderModule } from '../global/header/header.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from '../global/footer/footer.component';

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
  FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ProductsEffects]),
    DialogModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers:[ProductsService, DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule {}
