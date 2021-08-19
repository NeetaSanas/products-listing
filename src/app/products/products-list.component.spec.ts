import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogConfig } from '../global/dialog/dialog-config';
import { DialogModule } from '../global/dialog/dialog.module';
import { DialogService } from '../global/dialog/dialog.service';
import { FooterComponent } from '../global/footer/footer.component';
import { HeaderModule } from '../global/header/header.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { ProductsListComponent } from './products-list.component';
import { ProductsService } from './products.service';
import { ProductsEffects } from './state/products.effects';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, AddProductComponent, EditProductComponent,
        FooterComponent],
        imports: [
          CommonModule,
          FormsModule,
          HeaderModule,
          ReactiveFormsModule,
          DialogModule,
          NgxPaginationModule,
          Ng2SearchPipeModule,
          // EffectsModule.forRoot([]),
          StoreModule.forRoot({}),
          HttpClientModule,
          RouterTestingModule,
        ],
        providers:[ProductsService, Store],
        schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test.skip('skip', () => {});
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
