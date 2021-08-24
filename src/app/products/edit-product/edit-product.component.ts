import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../app.state';
import { DialogConfig } from '../../global/dialog/dialog-config';
import { DialogRef } from '../../global/dialog/dialog-ref';
import { Product } from '../products.model';
import { updateProduct } from '../state/products.actions';
import { getProductById } from '../state/products.selector';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {
  product:Product |any;
  productForm: FormGroup |any ;
  productSubscription : Subscription |any;
  productData: any;
  constructor(private route:ActivatedRoute, private store:Store<AppState>,
    public dialogRef: DialogRef, public config: DialogConfig) {
      this.productForm = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
      });
     }

  ngOnInit(): void {
    this.productData = this.config.data;
    this.route.paramMap.subscribe((params) =>{
      const id = params.get('id');
      this.store.select(getProductById,{id}).subscribe((data) => {
        this.product = data;
        this.productForm.patchValue(this.productData);
      })
    })
  }

  ngOnDestroy(){
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }

  onUpdateProduct(){
    if(!this.productForm.valid){
      // return;
      this.productForm.markAllAsTouched();
    }else{
      const product: Product = {
        id:this.productData.id,
        name:this.productForm.value.name,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        image: this.productForm.value.image
      }
      
      this.store.dispatch(updateProduct({ product }));
      this.dialogRef.close();
    }

    
  }

  cancel(){
    this.dialogRef.close();
  }

}
