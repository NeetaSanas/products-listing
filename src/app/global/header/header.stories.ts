import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from '../dialog/dialog.service';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from '../dialog/dialog.module';
import { HeaderComponent } from './header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [
        DialogModule,
        CommonModule,
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

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const header = Template.bind({});
header.args = {
  //product: {},
};
