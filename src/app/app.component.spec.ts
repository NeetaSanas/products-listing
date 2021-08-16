import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.state';
import { DialogService } from './global/dialog/dialog.service';
import { NavbarComponent } from './global/navbar/navbar.component';
import { HomepageService } from './homepage/homepage.service';
import { AuthService } from './login/auth.service';
import { CardComponent } from './story-components/card/card.component';
import { CheckboxComponent } from './story-components/checkbox/checkbox.component';
import { ImageComponent } from './story-components/image/image.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [
      //   RouterTestingModule
      // ],
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
      ],
      
      providers: [HomepageService, DialogService, AuthService],
    }).compileComponents();
  });

  // test.skip('skip', () => {});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('assignment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('assignment app is running!');
  });
});
