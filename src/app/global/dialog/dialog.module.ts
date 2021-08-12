import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertionDirective } from './insertion.directive';
import { DialogComponent } from './dialog/dialog.component';
import { DialogConfig } from './dialog-config';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, InsertionDirective],
  entryComponents: [DialogComponent],
  providers:[{ provide: DialogConfig, useValue: DialogConfig }, DialogService]
})
export class DialogModule { }
