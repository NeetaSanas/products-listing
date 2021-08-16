import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SharedReducer } from '../../store/Shared/shared.reducer';
import { HeaderModule } from '../../global/header/header.module';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from './navbar.component';
import { DialogService } from '../dialog/dialog.service';

export default {
  title: 'Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(SharedReducer, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [DialogService]
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
});

export const navbar = Template.bind({});
navbar.args = {
  //product: {},
};
