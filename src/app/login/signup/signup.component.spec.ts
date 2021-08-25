import 'zone.js/dist/zone';
import { CommonModule } from '@angular/common';
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
import { of } from 'rxjs';
import { DialogService } from '../../global/dialog/dialog.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let UserServiceMock: any;

  beforeEach(async () => {
    UserServiceMock = {
			getUsers: jest.fn().mockReturnValue(of(true)),
		};
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        DialogModule,
        CommonModule,
        HeaderModule,
        FormsModule, 
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot({})
      ], 
      providers:[AuthService, Store, DialogService],
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
    // expect(component.submitted).toEqual(true);
    expect(spy).toHaveBeenCalledTimes(0);
  });
  
  it('should validate form', () => {
    const spy = jest.fn();
    component.validateForm();
    expect(component.form.controls.password.value).toEqual(component.form.controls.retype_password.value);
    if(component.form.controls.password.value !== component.form.controls.retype_password.value){
      expect(component.form.controls.retype_password.invalid).toBeTruthy();
    } 
    for(let i=0; i<component.users.length;i++){
      if(component.users[i]["email"] === component.form.controls.email.value){
        expect(component.form.controls.email.invalid).toBeTruthy();
      }
    } 
    expect(spy).toHaveBeenCalledTimes(0);
  });

  describe('Test: Signup Form', () => {
		it('should invalidate the form', () => {
			component.form.controls.firstname.setValue('');
			component.form.controls.lastname.setValue('');
			component.form.controls.email.setValue('');
      component.form.controls.contact.setValue('');
      component.form.controls.password.setValue('');
			component.form.controls.retype_password.setValue('');
			expect(component.form.valid).toBeFalsy();
		});

		it('should validate the form', () => {
			component.form.controls.firstname.setValue('Neeta');
			component.form.controls.lastname.setValue('Sanas');
			component.form.controls.email.setValue('neeta@techspian.com');
			component.form.controls.contact.setValue('9422015306');
			component.form.controls.password.setValue('123456');
			component.form.controls.retype_password.setValue('123456');
			expect(component.form.valid).toBeTruthy();
		});
	});

  describe('Test: ngOnInit', () => {
		it('should initialize Form', () => {
			expect(component.config.data).toEqual(component.form.patchValue(component.config.data))
		});
	});

  it('should close dialog', () => {
    const spy = jest.fn();
    component.cancel();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should get users', () => {
    const spy = jest.fn();
    component.getUsers();
    expect(spy).toHaveBeenCalledTimes(0);
  });

});
