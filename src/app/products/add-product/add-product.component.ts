import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Products } from '../products.model';
import { addProduct } from '../state/products.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      // id: new FormControl(null),
      title: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, [
        Validators.required
      ]),
    });
  }


  // showDescriptionErrors() {
  //   const descriptionForm = this.form.get('description');
  //   if (descriptionForm.touched && !descriptionForm.valid) {
  //     if (descriptionForm.errors.required) {
  //       return 'Description is required';
  //     }

  //     if (descriptionForm.errors.minlength) {
  //       return 'Description should be of minimum 10 characters length';
  //     }
  //   }
  // }

  onAddProduct() {
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }

    const product: Products = {
      title: this.form.value.title,
      description: this.form.value.description,
    };

    this.store.dispatch(addProduct({ product }));
  }

}
