import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { DialogConfig } from 'src/app/global/dialog/dialog-config';
import { DialogRef } from 'src/app/global/dialog/dialog-ref';
import { Product } from '../products.model';
import { updateProduct } from '../state/products.actions';
import { getProductById } from '../state/products.selector';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {
  product:Product;
  productForm: FormGroup;
  productSubscription : Subscription;
  productData: any;
  constructor(private route:ActivatedRoute, private store:Store<AppState>,
    public dialogRef: DialogRef, public config: DialogConfig) { }

  ngOnInit(): void {
    this.productData = this.config.data;
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
      name: new FormControl(this.productData.name, Validators.required),
      description: new FormControl(this.productData.description, Validators.required),
      price: new FormControl(this.productData.price, Validators.required),
      image: new FormControl(this.productData.image, Validators.required),
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
    const image = this.productForm.value.image;

    const product: Product = {
      id:this.productData.id,
      name,
      description,
      price,
      image
    }

    this.store.dispatch(updateProduct({ product }));
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
