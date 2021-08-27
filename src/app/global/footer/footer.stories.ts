import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreFeatureModule, StoreModule, StoreRootModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SharedReducer } from '../../store/Shared/shared.reducer';
import { DialogService } from '../dialog/dialog.service';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HeaderModule } from '../header/header.module';
import { DialogModule } from '../dialog/dialog.module';

export default {
  title: 'Footer',
  component: FooterComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    // figCaptionTxt: {control: 'Copyright ©2021 All Rights Reserved'},
  },
  decorators: [
    moduleMetadata({
      declarations: [FooterComponent],
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

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  component: FooterComponent,
  props: args,
});

// export const footer = Template.bind({});
// footer.args = {
//   //product: {},
// };

export const FooterText = Template.bind({});
FooterText.args = {
  copyrightText: 'Copyright ©2021 All Rights Reserved',
};
