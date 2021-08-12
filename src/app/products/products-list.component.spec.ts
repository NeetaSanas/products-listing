import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogConfig } from '../global/dialog/dialog-config';
import { DialogModule } from '../global/dialog/dialog.module';
import { DialogService } from '../global/dialog/dialog.service';
import { FooterComponent } from '../global/footer/footer.component';
import { HeaderModule } from '../global/header/header.module';
import { routes } from '../login/login.module';
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
      // declarations: [ ProductsListComponent ],
      // providers: [DialogService]
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
        providers:[ProductsService, DialogService, { provide: DialogConfig, useValue: DialogConfig }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
