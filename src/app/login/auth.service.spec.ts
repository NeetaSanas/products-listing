import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule, StoreRootModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { DialogConfig } from '../global/dialog/dialog-config';
import { DialogModule } from '../global/dialog/dialog.module';
import { DialogService } from '../global/dialog/dialog.service';
import { HeaderModule } from '../global/header/header.module';
import { AuthEffects } from './auth.effects';
import { AuthReducer } from './auth.reducer';
import { AUTH_STATE_NAME } from './auth.selector';

import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { routes } from './login.module';
import { SignupComponent } from './signup/signup.component';

describe('AuthService', () => {
  let service: AuthService;

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
    });
    service = TestBed.inject(AuthService);
  });

  // test.skip('skip', () => {});
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
