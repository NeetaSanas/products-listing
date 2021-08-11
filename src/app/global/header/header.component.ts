import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() icon:any;
  @Input() title:any;
  @Input() desc:any;
  @Input() hasBgImage:boolean = false;
  @Input() class:any;
  
  constructor() { }

 

}
