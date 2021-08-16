import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
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

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, SignupComponent ],
      imports: [
        DialogModule,
        CommonModule,
        HeaderModule,
        RouterModule.forChild(routes),
        FormsModule, 
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
        
      ], 
      providers:[AuthService, { provide: APP_BASE_HREF, useValue: "/" }, DialogService,
      { provide: DialogConfig, useValue: DialogConfig }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test.skip('skip', () => {});
  
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should onSubmit user', () => {
  //   const spy = jest.fn();
  //   component.onSubmit();
  //   expect(component.submitted).toEqual(true);
  //   expect(spy).toHaveBeenCalledTimes(0);
  // });
  
});
