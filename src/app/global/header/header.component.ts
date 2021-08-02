import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('icon') icon:any;
  @Input('title') title:any;
  @Input('desc') desc:any;
  @Input('hasBgImage') hasBgImage:boolean = false;
  @Input('class') class:any;
  
  constructor() { }

  ngOnInit(): void {
    // console.log(this.title, this.hasBgImage);
  }

}
