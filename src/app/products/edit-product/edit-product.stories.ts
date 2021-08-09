import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SharedReducer } from 'src/app/store/Shared/shared.reducer';
import { DialogRef } from 'src/app/global/dialog/dialog-ref';
import { HeaderModule } from 'src/app/global/header/header.module';
import { EditProductComponent } from './edit-product.component';
import { DialogConfig } from 'src/app/global/dialog/dialog-config';
import { DialogModule } from 'src/app/global/dialog/dialog.module';

export default {
  title: 'Example/Edit-Product',
  component: EditProductComponent,
  decorators: [
    moduleMetadata({
      declarations: [EditProductComponent],
      imports: [
          DialogModule,
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

const Template: Story<EditProductComponent> = (args: EditProductComponent) => ({
  component: EditProductComponent,
  props: args,
});

export const edit = Template.bind({});
edit.args = {
 //id: '2'
};
