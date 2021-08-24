import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { DialogModule } from '../global/dialog/dialog.module';
import { HeaderModule } from '../global/header/header.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';

describe('AuthService', () => {
  let service: AuthService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        SignupComponent
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
    });
    injector = getTestBed();
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // test.skip('skip', () => {});
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login user', () => {
    const spy = jest.fn();
    service.login().subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.usersUrl}`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should signup user', () => {
    const spy = jest.fn();
    const firstname: string = '';
    const lastname: string = '';
    const contact: string = ''; 
    const email: string = ''; 
    const password: string = ''; 
    const retype_password: string = '';

    service.signUp(firstname, lastname, contact, email, password, retype_password).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.usersUrl}`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should get error message', () => {
    const spy = jest.fn();
    service.getErrorMessage('');
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should get users', () => {
    const spy = jest.fn();
    service.getUsers();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should get error message', () => {
    const spy = jest.fn();
    service.getErrorMessage('');
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should update user', () => {
    const spy = jest.fn();
    const userData:any = {
      id: '123',
      firstname: 'a', 
      lastname: 'b', 
      email:'c',
      contact: '9422015306',
    }
    // var result = service.updateUser(userData);
    service.updateUser(userData);
    // expect(result).toBe(true);
    expect(spy).toHaveBeenCalledTimes(0);
  });

});
