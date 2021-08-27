import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
  @Input()
  backgroundColor?: string = "#283593";
  @Input()
  textColor?:string = "#fff";
  @Input()
  copyrightText?: string = 'Copyright ©2021 All Rights Reserved';

  constructor() { }

}
