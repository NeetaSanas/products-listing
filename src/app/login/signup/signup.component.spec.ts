import 'zone.js/dist/zone';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { DialogModule } from '../../global/dialog/dialog.module';
import { HeaderModule } from '../../global/header/header.module';
import { AuthService } from '../auth.service';
import { SignupComponent } from './signup.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        DialogModule,
        CommonModule,
        HeaderModule,
        FormsModule, 
        ReactiveFormsModule,
        // EffectsModule.forFeature([AuthEffects]),
        // StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        StoreModule.forRoot({}),
        // EffectsModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot({})
      ], 
      providers:[AuthService, Store],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test.skip('skip', () => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Required Validation', () => {
    let firstname = component.form.controls['firstname'];
    expect(firstname.valid).toBeFalsy();
    firstname.setValue("");
    expect(firstname.hasError('required')).toBeTruthy();

    let lastname = component.form.controls['lastname'];
    expect(lastname.valid).toBeFalsy();
    lastname.setValue("");
    expect(lastname.hasError('required')).toBeTruthy();

    let contact = component.form.controls['contact'];
    expect(contact.valid).toBeFalsy();
    contact.setValue("");
    expect(contact.hasError('required')).toBeTruthy();

    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
    email.setValue("");
    expect(email.hasError('required')).toBeTruthy();

    let password = component.form.controls['password'];
    expect(password.valid).toBeFalsy();
    password.setValue("");
    expect(password.hasError('required')).toBeTruthy();

    let retype_password = component.form.controls['retype_password'];
    expect(retype_password.valid).toBeFalsy();
    retype_password.setValue("");
    expect(retype_password.hasError('required')).toBeTruthy();
  });

  it('should onSubmit user', () => {
    const spy = jest.fn();
    component.onSubmit();
    expect(component.submitted).toEqual(true);
    expect(spy).toHaveBeenCalledTimes(0);
  });
  
});
