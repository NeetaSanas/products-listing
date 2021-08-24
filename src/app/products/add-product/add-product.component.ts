import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { DialogRef } from '../../global/dialog/dialog-ref';
import { Product } from '../products.model';
import { addProduct } from '../state/products.actions';
import { getProducts } from '../state/products.selector';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  products: Observable<Product[]>;
  productForm: FormGroup;

  constructor(private store: Store<AppState>, public dialogRef: DialogRef) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
    })
  }

  onAddProduct(){
    if(!this.productForm.valid){
      // return;
        this.productForm.markAllAsTouched();
    }else{
      const product: Product = {
        id:'',
        name: this.productForm.value.name,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        image: this.productForm.value.image,
      }
      //console.log(product);
      this.store.dispatch(addProduct({product}));
      this.dialogRef.close();
    }

    
  }

  cancel(){
    this.dialogRef.close();
  }

}
