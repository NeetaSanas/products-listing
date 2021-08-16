import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SharedReducer } from '../../store/Shared/shared.reducer';
import { HeaderModule } from '../../global/header/header.module';
import { ToastrService } from 'ngx-toastr';
import { SignupComponent } from './signup.component';
import { DialogConfig } from '../../global/dialog/dialog-config';

export default {
  title: 'Signup',
  component: SignupComponent,
  decorators: [
    moduleMetadata({
      declarations: [SignupComponent],
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
     providers: [{ provide: ToastrService, useValue: ToastrService },
        { provide: DialogConfig, useValue: DialogConfig }]
    }),
  ],
} as Meta;

const Template: Story<SignupComponent> = (args: SignupComponent) => ({
  component: SignupComponent,
  props: args,
});

export const signup = Template.bind({});
signup.args = {
  //product: {},
};
