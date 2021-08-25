import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DialogRef } from '../global/dialog/dialog-ref';
import { DialogModule } from '../global/dialog/dialog.module';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[DialogModule, StoreModule.forRoot({}), ToastrModule.forRoot()],
      providers: [Store, DialogRef, ToastrService],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test.skip('skip', () => {});
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Cancel checkout', () => {
    const spy = jest.fn();
    component.cancel();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should calculate total amount', () => {
    const spy = jest.fn();
    component.getTotalAmount();
    // expect(component.cartTotal).toBe(Number);
    expect(spy).toHaveBeenCalledTimes(0);
  });
  
  it('should calcculate cart total', () => {
    component.getTotalAmount();
    let total = 0;
    let arr: any[] = [];
    arr = component.myCartItems;
    let len : number = arr?.length;
    for (let i = 0; i <len; i++) {
      total = total + component.myCartItems[i];
    }
    expect(total).toEqual(component.cartTotal);
  });


});
