import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HeaderComponent } from '../global/header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { AuthEffects } from './auth.effects';
import { AUTH_STATE_NAME } from './auth.selector';
import { AuthReducer } from './auth.reducer';
import { SignupComponent } from './signup/signup.component';

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
    HeaderComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer)
  ],
  providers:[AuthService, { provide: APP_BASE_HREF, useValue: "/" }]
})
export class LoginModule { }