import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './login/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer } from './app.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './story-components/image/image.component';
import { CardComponent } from './story-components/card/card.component';
import { CheckboxComponent } from './story-components/checkbox/checkbox.component';
import { HomepageService } from './homepage/homepage.service';
import { NavbarComponent } from './global/navbar/navbar.component';
import { DialogService } from './global/dialog/dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    CardComponent,
    CheckboxComponent,
    NavbarComponent,
    
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
  
  providers: [HomepageService, DialogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
