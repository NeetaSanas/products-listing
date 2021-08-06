import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Product } from '../products.model';
import { updateProduct } from '../state/products.actions';
import { getProductById } from '../state/products.selector';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product:Product;
  productForm: FormGroup;
  productSubscription : Subscription;
  constructor(private route:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      const id = params.get('id');
      this.store.select(getProductById,{id}).subscribe((data) => {
        this.product = data;
        this.createForm();
      })
    })
  }

  createForm(){
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, Validators.required),
      description: new FormControl(this.product.description, Validators.required),
      price: new FormControl(this.product.price, Validators.required),
    });
  }

  ngOnDestroy(){
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }

  onUpdateProduct(){
    if(!this.productForm.valid){
      return;
    }

    const name = this.productForm.value.name;
    const description = this.productForm.value.description;
    const price = this.productForm.value.price;

    const product: Product = {
      id:this.product.id,
      name,
      description,
      price
    }

    this.store.dispatch(updateProduct({ product }));
  }

}
