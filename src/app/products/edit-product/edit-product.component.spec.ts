import 'zone.js/dist/zone';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogConfig } from '../../global/dialog/dialog-config';
import { DialogModule } from '../../global/dialog/dialog.module';
import { DialogService } from '../../global/dialog/dialog.service';
import { FooterComponent } from '../../global/footer/footer.component';
import { HeaderModule } from '../../global/header/header.module';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductsListComponent } from '../products-list.component';
import { ProductsService } from '../products.service';
import { EditProductComponent } from './edit-product.component';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

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
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //test.skip('skip', () => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
