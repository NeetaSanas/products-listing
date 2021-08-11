import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../products/products.model';

@Injectable()
export class CartService {

  mycart = new Subject<string>();

  // Local variable which stores 
  // cartItems:any = [];
  // products = new Subject();

  // getProducts(): Observable<any> {
  //   console.log('this.cartItems :', this.cartItems);
  //   console.log(this.products);
  //   return this.products.asObservable();
  // }

  // setProducts(product:Product) {
  //   console.log(product);
  //   this.cartItems.push(product);
  //   this.products.next(product);
  // }

  // // Add single product to the cart
  // addProductToCart(product) {
  //   this.cartItems.push(product);
  //   this.products.next(this.cartItems);
  //   console.log(this.cartItems);
  // }

  // // Remove single product from the cart
  // removeProductFromCart(productId) {
  //   this.cartItems.map((product, index) => {
  //     if (product.id === productId) {
  //       this.cartItems.splice(index, 1);
  //     }
  //   });

  //   // Update Observable value
  //   this.products.next(this.cartItems);
  // }

  // // Remove all the items added to the cart
  // emptyCart() {
  //   this.cartItems.length = 0;
  //   this.products.next(this.cartItems);
  // }

  // // Calculate total price on product added to the cart
  // getTotalPrice() {
  //   let total = 0;
  //   this.cartItems.map(product => {
  //     total += product.price;
  //   });
  //   return total;
  // }

}