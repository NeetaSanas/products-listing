import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogConfig } from '../global/dialog/dialog-config';
import { DialogRef } from '../global/dialog/dialog-ref';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() values: any;
  myCartItems :any= [];
  cartTotal: number = 0;
  cartEmty: boolean=false;
  constructor( public dialogRef: DialogRef, 
    public config: DialogConfig, private toastr: ToastrService) {}

  ngOnInit(){
    this.myCartItems = this.config.data;
    if(this.myCartItems){
      this.getTotalAmount();
    }else{
      this.cartEmty = true;
    }
  }
  
  getTotalAmount(){
    this.cartTotal = 0;
    let itemsArray: any[] = [];
    itemsArray = this.myCartItems;
    let itemsLength: number = itemsArray?.length;
    for(let i=0; i<itemsLength; i++){
      this.cartTotal = Number(this.cartTotal) + Number(itemsArray[i]["price"]); 
    }
  }

  removeItem(index){
    let updatedArray = [];
    updatedArray = this.myCartItems.splice(index, 1);
    if(updatedArray){
      localStorage.removeItem('cartItems');
      localStorage.setItem('cartItems', JSON.stringify(updatedArray));
      this.getTotalAmount();
    }else{
      this.myCartItems = [];
    }
  }

  checkout(){
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IudUaSJYmBu1ez60Gerwee2ob0K7dlbbryng5XOeZLehSllKhjcZKC6YIa9mcsjMVD1L4DgU4qPOF30OjhAerny00xeLagm23',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        if(token.id){
          //console.log("payment done");
          localStorage.removeItem("cartItems");
          localStorage.setItem("token",token.id);
        }
        this.token = token.id;
      },
    });
    
    handler.open({
      name: 'Testing payment',
      description: 'Enter Card No: 4242 4242 4242 4242',
      amount: this.cartTotal * 100,
    });

  }

  // onSuccess() {
  //   if(localStorage.getItem("token")){
  //     this.toastr.success("Order Placed Successfully");
  //     this.dialogRef.close();
  //   }
  //   localStorage.removeItem("token");
  // }

  cancel(){
    this.dialogRef.close();
  }

}
