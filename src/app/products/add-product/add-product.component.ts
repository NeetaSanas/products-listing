import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Product } from '../products.model';
import { addProduct } from '../state/products.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    })
  }

  onAddProduct(){
    console.log(this.productForm);
    if(!this.productForm.valid){
      return;
    }

    const product: Product = {
      id:'',
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price
    }
    //console.log(product);
    this.store.dispatch(addProduct({product}));
  }

}
