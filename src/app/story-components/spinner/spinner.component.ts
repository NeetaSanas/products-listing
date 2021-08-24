import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() size: string = "small";
  @Input() borderColor: string;
  //@Input() border-top: string;
  
  constructor() { }

  // ngOnInit(): void {
  //   //console.log(this.borderColor);
  // }

  // public get classes(): string[] {
  //   const mode = this.border ? 'app-spinner--red' : 'app-spinner--pink';

  //   return ['app-spinner', `app-spinner--${this.border}`, mode];
  // }

}
