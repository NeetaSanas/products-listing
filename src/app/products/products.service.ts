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
        console.log(data);
        for(let key in data){
            products.push({...data[key], id: key});
        }
        console.log(products);
        return products;
    })
    );
  }

  addProduct(product: Product): Observable<{name:string}>{
    console.log(product);
    return this.http.post<{name:string}>(`http://localhost:3000/products`, product);
  }
  updateProduct(product: Product): Observable<{name:string}>{
    const productData = {
        [product.id] : {
            name: product.name, 
            description: product.description, 
            price: product.price
        }
    }
    console.log(productData);
    return this.http.patch<{name:string}>(`http://localhost:3000/products`, productData);
  }
 
  deleteProduct(id: string){
    return this.http.delete<{name:string}>(`http://localhost:3000/products/${id}.json`);
  }

}
