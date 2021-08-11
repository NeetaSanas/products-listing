import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';
import { FooterComponent } from '../global/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductsModule } from '../products/products.module';
import { ProductsService } from '../products/products.service';

export const routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomepageComponent,
    FooterComponent,
  ],
  imports: [
    ProductsModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  
  ],
  providers:[HomepageService, ProductsService]
})
export class HomepageModule { }