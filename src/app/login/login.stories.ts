import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SharedReducer } from '../store/Shared/shared.reducer';
import { DialogRef } from '../global/dialog/dialog-ref';
import { HeaderModule } from '../global/header/header.module';
import { LoginComponent } from './login.component';
import { ToastrService } from 'ngx-toastr';

export default {
  title: 'Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginComponent],
      imports: [
          HeaderModule,
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(SharedReducer, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [{ provide: ToastrService, useValue: ToastrService }]
    }),
  ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});

export const login = Template.bind({});
login.args = {
  //product: {},
};
