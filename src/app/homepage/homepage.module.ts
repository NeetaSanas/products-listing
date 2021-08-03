import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';

export const routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers:[HomepageService]
})
export class HomepageModule { }