import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../../global/header/header.module';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { DialogService } from 'src/app/global/dialog/dialog.service';
import { AuthService } from '../auth.service';
import { DialogModule } from 'src/app/global/dialog/dialog.module';

export default {
  title: 'Signup',
  component: SignupComponent,
  decorators: [
    moduleMetadata({
      declarations: [SignupComponent],
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

const Template: Story<SignupComponent> = (args: SignupComponent) => ({
  component: SignupComponent,
  props: args,
});

export const signup = Template.bind({});
signup.args = {
  //product: {},
};
