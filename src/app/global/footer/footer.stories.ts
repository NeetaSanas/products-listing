import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SharedReducer } from '../../store/Shared/shared.reducer';
import { DialogService } from '../dialog/dialog.service';
import { FooterComponent } from './footer.component';

export default {
  title: 'Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [FooterComponent],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(SharedReducer, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  component: FooterComponent,
  props: args,
});

export const footer = Template.bind({});
footer.args = {
  //product: {},
};
