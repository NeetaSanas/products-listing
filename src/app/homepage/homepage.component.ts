import { Component, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  products :any = [];
  p: any;
  constructor(private homepageService: HomepageService) { }
  ngOnInit(): void {
    console.log("homepage");
    this.products = this.homepageService.getProducts();
    console.log(this.products);
  }

  viewProduct(){}

}
