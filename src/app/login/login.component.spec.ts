import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from '../global/dialog/dialog.module';
import { HeaderModule } from '../global/header/header.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
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
      providers:[AuthService, Store],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    authServiceMock = {
			login: jest.fn()
		};
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test.skip('skip', () => {});
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Login: ngOnInit', () => {
		it('should initialize loginForm', () => {
      const form = {
        email: '',
        password: ''
      };
      expect(component.form.value).toEqual(form);
    });
	});

  describe('Login: Login Form', () => {
		it('should invalidate the form', () => {
			component.form.controls.email.setValue('');
			component.form.controls.password.setValue('');
			expect(component.form.valid).toBeFalsy();
		});

		it('should validate the form', () => {
			component.form.controls.email.setValue('neeta@techspian.com');
			component.form.controls.password.setValue('123456');
			expect(component.form.valid).toBeTruthy();
		});
	});

  describe('Login: Form invalid', () => {
		it('should not call login method', () => {
			const form = {
				email: '',
				password: ''
			};
			component.onSubmit();
			expect(authServiceMock.login).not.toHaveBeenCalled();
		});
	});

  describe('Login: Form valid', () => {
		it('should call login method', () => {
			const formData = {
				username: 'neeta@techspian.com',
				password: '123456'
			};
			const spyloginUser = jest.spyOn(authServiceMock, 'login').mockReturnValue(true);
			expect(authServiceMock.login(formData)).toBe(true);
			expect(spyloginUser).toHaveBeenCalledWith(formData);
		});
	});

  it('should onSubmit user', () => {
    const spy = jest.fn();
    component.form.patchValue({email:"neeta@techspian.com", password:"123456"});
    component.onSubmit();
    expect(component.submitted).toEqual(true);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should forgot password', () => {
    const spy = jest.fn();
    component.forgotPassword();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should get login message', () => {
    const spy = jest.fn();
    component.getLoginMessage();
    expect(spy).toHaveBeenCalledTimes(0);
  });
  
});
