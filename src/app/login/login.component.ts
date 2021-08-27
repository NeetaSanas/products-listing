import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from '../app.state';
import { loginStart } from './auth.actions';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() backgroundColor?: string = "#f3f3f3";
  public form:FormGroup;
  users :any= [];
  currentUser: any;
  submitted = false;
  successFlag = true;
  constructor(public fb: FormBuilder, 
    public authService:AuthService, 
    public router: Router, 
    private toastr: ToastrService,
    private store: Store<AppState>) { 
    
  }
  ngOnInit(){
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  onSubmit(){

    if(this.form.invalid){
      this.form.markAllAsTouched();
    }else{
      this.submitted = true;
      this.currentUser = this.form.value.email;
      this.authService.login().subscribe(
        data => {
          
          if(data){
            this.users = data;
            for(let i=0; i<this.users.length; i++){
              if(this.form.value.email === this.users[i]["email"] && this.form.value.password === this.users[i]["password"]){
                localStorage.setItem('user', this.currentUser);
                localStorage.setItem('firstname', this.users[i].firstname);
                this.successFlag = true;
                this.router.navigate(['/']);
                break;
              }else{
                this.successFlag = false;
              }
            }
            this.getLoginMessage();
          }else{
            this.toastr.info("Users not found");
          }
        },
        error => {
          error='Bad email';
        });
    }
    
  }

  getLoginMessage(){
    if(!this.successFlag){
      this.toastr.error('Invalid email or password');
    }else{
      this.toastr.success('Login Success');
    }
  }


  forgotPassword(){
    this.toastr.info("Not Implemented");
  }
}
