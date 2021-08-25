import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DialogRef } from '../../global/dialog/dialog-ref';
import { AppState } from '../../app.state';
import { DialogConfig } from '../../global/dialog/dialog-config';
import { signupStart, updateUser } from '../auth.actions';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  newUser = true;
  submitted = false;
  users: any=[];
  title: string;
  constructor(public fb: FormBuilder, private store: Store<AppState>,public dialogRef: DialogRef,
     public config: DialogConfig, private authService: AuthService) { 
    this.form = this.fb.group({
      'firstname': [null, Validators.compose([Validators.required])],
      'lastname': [null, Validators.compose([Validators.required])],
      'contact': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'retype_password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ngOnInit(): void {
    if(this.config.data){
      //this.updateForm();
      this.form.patchValue(this.config.data);
      this.newUser = false;
      this.title = "View Profile";
      this.form.disable();
    }else{
      this.newUser = true;
      this.title = "Signup";
    }

    this.getUsers();
  }
  getUsers(){
    this.authService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      
    }else{
      this.submitted = true;      
      // if(this.form.value.id){
      //   this.store.dispatch(updateUser(this.form.value));
      // }else{
        this.store.dispatch(signupStart({
          firstname:this.form.value.firstname,
          lastname:this.form.value.lastname,
          contact:this.form.value.contact,
          email:this.form.value.password,
          password:this.form.value.password,
          retype_password:this.form.value.retype_password
        }));
      //}
    }
    
  }

  validateForm(){
    if (this.form.controls.password.value !== this.form.controls.retype_password.value) {
      return this.form.controls.retype_password.setErrors({mismatchedPasswords: true})
    }

    for(let i=0; i<this.users.length;i++){
      if(this.users[i]["email"] == this.form.controls.email.value){
        this.form.controls.email.setErrors({'exist':true})
      }
    }
  }

  cancel(){
    this.dialogRef.close();
  }

}
