import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Product } from '../products.model';
import { getProducts } from '../state/products.selector';
import { deleteProduct, loadProducts } from '../state/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]>;
  productList: any;
  NoProducts: boolean=false;
  constructor(private store : Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.products = this.store.select(getProducts);
    this.store.dispatch(loadProducts());
    console.log(this.products);
  }

  deleteProduct(id:any){
    console.log(id);
    if(confirm("Are you sure you want to delete?")){
      console.log(id);
      this.store.dispatch(deleteProduct({id}));
      this.router.navigate(['/products']);
    }
    if(!this.products){
      this.NoProducts = true;
    }
  }

  viewProduct(){

  }

}
