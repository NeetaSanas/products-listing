import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { DialogService } from './global/dialog/dialog.service';
import { AuthService } from './login/auth.service';
import { HomepageService } from './homepage/homepage.service';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './app.state';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ImageComponent } from './story-components/image/image.component';
import { CardComponent } from './story-components/card/card.component';
import { CheckboxComponent } from './story-components/checkbox/checkbox.component';
import { NavbarComponent } from './global/navbar/navbar.component';

export default {
  title: 'App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
        declarations: [
            AppComponent,
            ImageComponent,
            CardComponent,
            CheckboxComponent,
            NavbarComponent
          ],
          imports: [    
            BrowserModule,
            ReactiveFormsModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule,
            ToastrModule.forRoot(),
            StoreModule.forRoot(appReducer),
            EffectsModule.forRoot([]),
            BrowserAnimationsModule,
            
            StoreDevtoolsModule.instrument({
              // maxAge: 25, // Retains last 25 states
              logOnly: environment.production, // Restrict extension to log-only mode
              // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            }),
          ],
          
          providers: [ DialogService, AuthService, HomepageService,
            { provide: APP_BASE_HREF, useValue: "/" }], 
          
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const app = Template.bind({});
app.args = {
  //product: {},
};
