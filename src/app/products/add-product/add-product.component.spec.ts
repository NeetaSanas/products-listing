import 'zone.js/dist/zone';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogConfig } from '../../global/dialog/dialog-config';
import { DialogModule } from '../../global/dialog/dialog.module';
import { DialogService } from '../../global/dialog/dialog.service';
import { FooterComponent } from '../../global/footer/footer.component';
import { HeaderModule } from '../../global/header/header.module';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductsListComponent } from '../products-list.component';
import { ProductsService } from '../products.service';
import { ProductsEffects } from '../state/products.effects';
import { AddProductComponent } from './add-product.component';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore } from '@ngrx/store/testing';
import { getProducts } from '../state/products.selector';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let store: MockStore;
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
      providers:[ProductsService, Store, DialogService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test.skip('skip', () => {});
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Required Validation', () => {
    let name = component.productForm.controls['name'];
    expect(name.valid).toBeFalsy();
    name.setValue("");
    expect(name.hasError('required')).toBeTruthy();

    let price = component.productForm.controls['price'];
    expect(price.valid).toBeFalsy();
    price.setValue("");
    expect(price.hasError('required')).toBeTruthy();

    let description = component.productForm.controls['description'];
    expect(description.valid).toBeFalsy();
    description.setValue("");
    expect(description.hasError('required')).toBeTruthy();

    let image = component.productForm.controls['image'];
    expect(image.valid).toBeFalsy();
    image.setValue("");
    expect(image.hasError('required')).toBeTruthy();
  });
  
});
