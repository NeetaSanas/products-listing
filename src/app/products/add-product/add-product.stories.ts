import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from '../../products/add-product/add-product.component';
import { SharedReducer } from '../../store/Shared/shared.reducer';
import { DialogRef } from '../../global/dialog/dialog-ref';
import { HeaderModule } from '../../global/header/header.module';

export default {
  title: 'Add-Product',
  component: AddProductComponent,
  decorators: [
    moduleMetadata({
      declarations: [AddProductComponent],
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
     providers: [DialogRef]
    }),
  ],
} as Meta;

const Template: Story<AddProductComponent> = (args: AddProductComponent) => ({
  component: AddProductComponent,
  props: args,
});

export const add = Template.bind({});
add.args = {
  //product: {},
};
