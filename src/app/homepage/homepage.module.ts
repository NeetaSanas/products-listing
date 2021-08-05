import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';
import { FooterComponent } from '../global/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

export const routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  
  providers:[HomepageService]
})
export class HomepageModule { }