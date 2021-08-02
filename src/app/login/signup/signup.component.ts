import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { signupStart } from '../auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private store: Store<AppState>) { 
    this.form = this.fb.group({
      'firstname': [null, Validators.compose([Validators.required])],
      'lastname': [null, Validators.compose([Validators.required])],
      'contact': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'retype_password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ngOnInit(): void {
    console.log("In signup");
  }

  onSubmit(){
    console.log(this.form.value);
    if(!this.form.valid){
      return;
    }
    const firstname= this.form.value.firstname;
    const lastname= this.form.value.lastname;
    const contact= this.form.value.contact;
    const email= this.form.value.email;
    const password= this.form.value.password;
    const retype_password= this.form.value.retype_password;
    this.store.dispatch(signupStart({firstname,lastname,contact,email,password,retype_password}));
    
  }

}
