import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from './AuthResponseDate.model';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  timeoutInterval: any;

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  signUp(firstname:string,lastname:string,contact:string,email:string,password:string,retype_password:string){
    const params={
      firstname: firstname,
      lastname: lastname, 
      contact: contact, 
      email: email, 
      password: password, 
      retype_password: retype_password
    };
    //console.log(params);
    return this.http.post(`http://localhost:3000/users`, params);
  }

  updateUser(user: User): Observable<{name:string}>{
    const userData = {
        [user.id] : {
            id: user.id,
            firstname: user.firstname, 
            lastname: user.lastname, 
            email: user.email,
            contact: user.contact,
        }
    }
    console.log(userData);
    return this.http.patch<{name:string}>(`http://localhost:3000/users/${user.id}`, userData);
  }

  login(){
    // return this.http.post<AuthResponseData>(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
    //   { email, password, returnSecureToken: true }
    // );
    return this.http.get(`http://localhost:3000/users`);
  }

  getUsers(){
    return this.http.get(`http://localhost:3000/users`);
  }

  formatUser(data: AuthResponseData) {
    
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    return user;
  }
  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));

    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime();
    const timeInterval = expirationDate - todaysDate;

    this.timeoutInterval = setTimeout(() => {
      //this.store.dispatch(autoLogout());
      //logout functionality or get the refresh token
    }, timeInterval);
  }

}
