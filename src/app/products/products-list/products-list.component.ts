import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Products } from '../products.model';
import { getProducts } from '../state/products.selector';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 
  constructor(private store: Store<AppState>) { }
  products: Observable<Products[]>;
 
  
  ngOnInit(): void {
    console.log("In Products");
    this.products = this.store.select(getProducts);
    console.log(this.products);
  }

}
