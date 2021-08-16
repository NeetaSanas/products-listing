import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
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
  constructor(public fb: FormBuilder, private store: Store<AppState>,
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
    // console.log("In signup");
    //console.log(this.config);
    if(this.config.data){
      this.updateForm();
      this.newUser = false;
      this.title = "Update Profile";
    }else{
      this.newUser = true;
      this.title = "Signup";
    }

    this.authService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  updateForm(){
    this.form = new FormGroup({
      id: new FormControl(this.config.data.id, Validators.required),
      firstname: new FormControl(this.config.data.firstname, Validators.required),
      lastname: new FormControl(this.config.data.lastname, Validators.required),
      email: new FormControl(this.config.data.email, Validators.required),
      contact: new FormControl(this.config.data.contact, Validators.required),
      password: new FormControl(this.config.data.password, Validators.required),
      retype_password: new FormControl(this.config.data.password, Validators.required),
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    // if(!this.form.valid){
    //   return;
    // }
    const firstname= this.form.value.firstname;
    const lastname= this.form.value.lastname;
    const contact= this.form.value.contact;
    const email= this.form.value.email;
    const password= this.form.value.password;
    const retype_password= this.form.value.retype_password;
    
    if(this.form.value.id){
      console.log("Update User");
      this.store.dispatch(updateUser(this.form.value));
    }else{
      this.store.dispatch(signupStart({firstname,lastname,contact,email,password,retype_password}));
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

}
