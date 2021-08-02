import {​​​​​​​​ ComponentFixture, TestBed }​​​​​​​​ from'@angular/core/testing';
import {​​​​​​​​ RouterTestingModule }​​​​​​​​ from'@angular/router/testing';
import {​​​​​​​​ CommonModule }​​​​​​​​ from'@angular/common';
import {​​​​​​​​ FormsModule, ReactiveFormsModule }​​​​​​​​ from'@angular/forms';
import { HomepageComponent } from './homepage.component';
 
describe('HomepageComponent', () => {​​​​​​​​
let component: HomepageComponent;
let fixture: ComponentFixture<HomepageComponent>;
 
beforeEach(async () => {​​​​​​​​
    await TestBed.configureTestingModule({​​​​​​​​
    declarations: [HomepageComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    providers: []
        }​​​​​​​​)
          .compileComponents();
  }​​​​​​​​);
 
beforeEach(() => {​​​​​​​​
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }​​​​​​​​);
 
it('should create', () => {​​​​​​​​
    expect(component).toBeTruthy();
  }​​​​​​​​);

}​​​​​​​​);
 



/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/