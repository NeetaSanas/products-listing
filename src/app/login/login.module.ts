import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { AuthEffects } from './auth.effects';
import { AUTH_STATE_NAME } from './auth.selector';
import { AuthReducer } from './auth.reducer';
import { SignupComponent } from './signup/signup.component';
import { HeaderModule } from '../global/header/header.module';
import { DialogService } from '../global/dialog/dialog.service';
import { DialogModule } from '../global/dialog/dialog.module';
import { DialogConfig } from '../global/dialog/dialog-config';

export const routes = [
  {
    path:'',
    children:[
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
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
  providers:[AuthService, { provide: APP_BASE_HREF, useValue: "/" },DialogService,
  { provide: DialogConfig, useValue: DialogConfig }]
})
export class LoginModule { }