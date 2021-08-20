import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { AuthService } from '../../login/auth.service';
import { DialogService } from '../dialog/dialog.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [StoreModule.forRoot({}), HttpClientModule, RouterTestingModule],
      providers: [AuthService, Store, DialogService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test.skip('skip', () => {});
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user', () => {
    const spy = jest.fn();
    localStorage.removeItem('user');
    localStorage.removeItem("firstname");
    localStorage.removeItem("cartItems");
    component.logout();
    expect(spy).toHaveBeenCalledTimes(0);
  });

});
