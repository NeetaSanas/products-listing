import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { DialogService } from '../global/dialog/dialog.service';
import { CartComponent } from '../cart/cart.component';
import { NavbarComponent } from '../global/navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Product } from './products.model';
import { addProduct, deleteProduct, loadProducts } from './state/products.actions';
import { getProducts } from './state/products.selector';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]>;
  NoProducts: boolean=false;
  p: any;
  public searchText: any;
  cartProductList = [];
  @Output() comp1Out = new EventEmitter();
  public cartItems:any[]=new Array();
  public cartProductCount: number = 0;
  currentUser: string | null;
  
  constructor(private store : Store<AppState>, private router: Router, 
    public dialog: DialogService) { }

  ngOnInit(): void {
    this.getProducts();
    if(localStorage.getItem("cartItems")){
      let localItems:any = localStorage.getItem("cartItems");
      this.cartItems = JSON.parse(localItems);
      this.cartProductCount = this.cartItems.length;
    }else{
      // console.log("Cart is empty");
    }    
    this.currentUser = localStorage.getItem("user");
  }

  getProducts(){
    this.products = this.store.select(getProducts);
    this.store.dispatch(loadProducts());
  }

  deleteProduct(id:string){
    if(confirm("Are you sure you want to delete?")){
      this.store.dispatch(deleteProduct({id}));
      this.router.navigate(['/products']);
      this.products = this.store.select(getProducts);
      this.store.dispatch(loadProducts());
    }
    if(!this.products){
      this.NoProducts = true;
    }
  }

  viewProduct(){

  }

  openAddDialog(){
    const ref = this.dialog.open(AddProductComponent, {
      data: { message: 'testing' }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);  
      this.products = this.store.select(getProducts);
      this.store.dispatch(loadProducts());
    });
  }

  openUpdateDialog(product){
    // console.log(product);
    const ref = this.dialog.open(EditProductComponent, {
      data: product
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);      
    });
  }

  public addToCart(product): void {
      this.cartItems.push(product);
      console.log(this.cartItems);
      this.cartProductCount = this.cartItems.length;
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  openCartDialog(){
    //this.router.navigate(['/cart']);
    const ref = this.dialog.open(CartComponent, {
      data: this.cartItems
     });
 
     ref.afterClosed.subscribe(result => {
       console.log('Dialog closed', result);
       if(localStorage.getItem("token")){
        this.cartItems = [];
        this.cartProductCount = this.cartItems.length;
        localStorage.removeItem("token");
       }
          
     }); 
  }
  
}
