import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../global/header/header.module';
import { LoginComponent } from './login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { DialogModule } from '../global/dialog/dialog.module';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { DialogService } from '../global/dialog/dialog.service';

export default {
  title: 'Login',
  component: LoginComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    // textColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
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
      HttpClientModule,
      StoreModule.forRoot({}),
      RouterModule.forRoot([]),
      ToastrModule.forRoot({})

    ], 
    providers:[AuthService, DialogService, Store, { provide: APP_BASE_HREF, useValue: "/" }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
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
