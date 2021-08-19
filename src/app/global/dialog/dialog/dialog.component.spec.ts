import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { DialogRef } from '../dialog-ref';
import { DialogModule } from '../dialog.module';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    return await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      imports: [StoreModule.forRoot({})],
      providers: [Store, DialogRef],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  test.skip('skip', () => {});
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
