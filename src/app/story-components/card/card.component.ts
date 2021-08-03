import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title') title:any;
  @Input('subtitle') subtitle:any;
  @Input('content') content = 'Card Content';
  @Output() btnClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  handleBtnClick(){}

}
