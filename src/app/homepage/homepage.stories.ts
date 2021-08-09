import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SharedReducer } from 'src/app/store/Shared/shared.reducer';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

export default {
  title: 'Homepage',
  component: HomepageComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(SharedReducer, {}),
          NgxPaginationModule,
          Ng2SearchPipeModule
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [HomepageService]
    }),
  ],
} as Meta;

const Template: Story<HomepageComponent> = (args: HomepageComponent) => ({
  component: HomepageComponent,
  props: args,
});

export const products = Template.bind({});
products.args = {
  //product: {},
};
