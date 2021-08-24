import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from '../dialog.module';
import { DialogComponent } from './dialog.component';

export default {
  title: 'Dialog',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [DialogComponent],
      imports: [
        // DialogModule,
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
        ToastrModule.forRoot({})
      ], 
      providers:[ Store, { provide: APP_BASE_HREF, useValue: "/" }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<DialogComponent> = (args: DialogComponent) => ({
  component: DialogComponent,
  props: args,
});

export const dialog = Template.bind({});
dialog.args = {
  //product: {},
};
