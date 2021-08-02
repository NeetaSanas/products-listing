import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/app.state';
import { loginStart } from './auth.actions';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  users :any= [];
  constructor(public fb: FormBuilder, 
    public authService:AuthService, 
    public router: Router, 
    private toastr: ToastrService,
    private store: Store<AppState>) { 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ngOnInit(): void {
    console.log("login");
  }

  onSubmit(){
    console.log(this.form.value.email, this.form.value.password);
    // const email = this.form.value.email;
    // const password = this.form.value.password;
    // this.store.dispatch(loginStart({email, password}));

    this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      data => {
        let successFlag = false;
        console.log(data);
        if(data){
          this.users = data;
          for(let i=0; i<this.users.length; i++){
            if(this.form.value.email = this.users[i]["email"] && this.form.value.password == this.users[i]["password"]){
              console.log("if");
              this.authService.setLoginSubscription();
              this.router.navigate(['/']);
              this.toastr.success('Login Success');
              successFlag = true;
            }else{
              successFlag = false;
            }
          }
          console.log(successFlag);
          if(!successFlag){
            console.log(successFlag);
            this.toastr.error('Invalid email or password');
          }
        }else{
          console.log("Users not found");
        }
      },
      error => {
        error='Bad email';
      });
  }


  forgotPassword(){}
}
