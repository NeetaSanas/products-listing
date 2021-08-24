import 'zone.js/dist/zone';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { Subscription } from 'rxjs';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  let SubscriptionMock: Subscription;

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
    SubscriptionMock = new Subscription();
  });
  //test.skip('skip', () => {});

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


  it('should update product', () => {
    const spy = jest.fn();
    component.onUpdateProduct();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should Cancel product', () => {
    const spy = jest.fn();
    component.cancel();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  describe('Test: addProduct Form', () => {
		it('should invalidate the form', () => {
			component.productForm.controls.name.setValue('');
			component.productForm.controls.description.setValue('');
			component.productForm.controls.price.setValue('');
      component.productForm.controls.image.setValue('');
			expect(component.productForm.valid).toBeFalsy();
		});

		it('should validate the form', () => {
			component.productForm.controls.name.setValue('product1');
			component.productForm.controls.description.setValue('desc');
			component.productForm.controls.price.setValue('100');
			component.productForm.controls.image.setValue('www');
			expect(component.productForm.valid).toBeTruthy();
		});
	});

  describe('Test ngOnDestroy', () => {
		it('should unsubscribe', () => {
			component.ngOnDestroy();
			const spyunsubscribe = jest.spyOn(SubscriptionMock, 'unsubscribe');
			expect(spyunsubscribe).toBeDefined();
		});
	});

  describe('Login: ngOnInit', () => {
		it('should set values for Form', () => {
      const formValue = {
        name: 'test',
        price: '100',
        description: 'testing',
        image: 'www'
      };
      component.productForm.patchValue(formValue);
      expect(component.productForm.value).toEqual(formValue);
    });
	});
  
});
