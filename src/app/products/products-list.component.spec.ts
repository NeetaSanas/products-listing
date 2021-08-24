import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogModule } from '../global/dialog/dialog.module';
import { FooterComponent } from '../global/footer/footer.component';
import { HeaderModule } from '../global/header/header.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsListComponent } from './products-list.component';
import { ProductsService } from './products.service';

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

  it('should get products', () => {
    const spy = jest.fn();
    component.getProducts();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should Delete product', () => {
    const spy = jest.fn();
    component.deleteProduct('1');
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should open add dialog', () => {
    const spy = jest.fn();
    component.openAddDialog();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should open update dialog', () => {
    const spy = jest.fn();
    component.openUpdateDialog([]);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should add to cart', () => {
    const spy = jest.fn();
    component.addToCart([]);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should open cart dialog', () => {
    const spy = jest.fn();
    component.openCartDialog();
    expect(spy).toHaveBeenCalledTimes(0);
  });

});
