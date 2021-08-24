import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../global/header/header.module';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from '../global/dialog/dialog.module';
import { RouterModule } from '@angular/router';
import { DialogService } from '../global/dialog/dialog.service';
import { CartComponent } from './cart.component';

export default {
  title: 'Cart',
  component: CartComponent,
  decorators: [
    moduleMetadata({
    declarations: [
      CartComponent
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
    providers:[ DialogService, Store, { provide: APP_BASE_HREF, useValue: "/" }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<CartComponent> = (args: CartComponent) => ({
  component: CartComponent,
  props: args,
});

export const cart = Template.bind({});
cart.args = {
  //product: {},
};
