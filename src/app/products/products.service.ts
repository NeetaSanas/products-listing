import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Product } from './products.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/products`)
    .pipe(map(data => {
        const products: Product[] = [];
        for(let key in data){
            products.push({...data[key], id: key});
        }
        return products;
    })
    );
  }

  addProduct(product: Product): Observable<{name:string}>{
    return this.http.post<{name:string}>(`http://localhost:3000/products`, product);
  }
//   signUp(firstname:string,lastname:string,contact:string,email:string,password:string,retype_password:string){
//     const params={
//       firstname: firstname,
//       lastname: lastname, 
//       contact: contact, 
//       email: email, 
//       password: password, 
//       retype_password: retype_password
//     };
//     console.log(params);
//     return this.http.post(`http://localhost:3000/users`, params);
//   }

  

  

}
