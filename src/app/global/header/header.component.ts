import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() icon:any;
  @Input() title:any= "Header";
  @Input() desc:any;
  @Input() hasBgImage:boolean = true;
  @Input() class:any;
  @Input() backgroundColor?: string = "#283593";
  @Input() textColor?:string = "#fff";
  constructor() { }

 

}
