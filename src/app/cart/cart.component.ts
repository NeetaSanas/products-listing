import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DialogConfig } from '../global/dialog/dialog-config';
import { DialogRef } from '../global/dialog/dialog-ref';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() values: any;
  myCartItems :any= [];
  cartTotal: number = 0;
  constructor(private cartService: CartService, public dialogRef: DialogRef, 
    public config: DialogConfig) {}

  ngOnInit(){
    this.myCartItems = this.config.data;
    this.getTotalAmount(this.myCartItems);
  }
  
  getTotalAmount(items){
    this.cartTotal = 0;
    for(let i=0; i<items.length;i++){
      this.cartTotal = Number(this.cartTotal) + Number(items[i]["price"]); 
    }
  }

  removeItem(item,index){
    console.log(item);
    this.myCartItems.splice(index,1);
    this.getTotalAmount(this.myCartItems);
  }

  checkout(){
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IudUaSJYmBu1ez60Gerwee2ob0K7dlbbryng5XOeZLehSllKhjcZKC6YIa9mcsjMVD1L4DgU4qPOF30OjhAerny00xeLagm23',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        console.log(token.id);
        this.token = token.id;
      },
    });
    handler.open({
      name: 'Testing payment',
      description: 'Card No: 4242 4242 4242 4242',
      amount: this.cartTotal * 100,
    });
  }

  cancel(){
    this.dialogRef.close();
  }

}
