import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogConfig } from 'src/app/global/dialog/dialog-config';
import { DialogModule } from 'src/app/global/dialog/dialog.module';
import { DialogService } from 'src/app/global/dialog/dialog.service';
import { FooterComponent } from 'src/app/global/footer/footer.component';
import { HeaderModule } from 'src/app/global/header/header.module';
import { routes } from 'src/app/login/login.module';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductsListComponent } from '../products-list.component';
import { ProductsService } from '../products.service';
import { ProductsEffects } from '../state/products.effects';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ AddProductComponent ],
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
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
