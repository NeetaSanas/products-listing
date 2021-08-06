import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Product } from './products.model';
import { combineAll, map } from 'rxjs/operators';

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
          let key1 = data[key]['id'];
          products.push({...data[key], id: key1});
        }
        return products;
    })
    );
  }

  addProduct(product: Product): Observable<{name:string}>{
    return this.http.post<{name:string}>(`http://localhost:3000/products`, product);
  }
  updateProduct(product: Product): Observable<{name:string}>{
    const productData = {
        [product.id] : {
            id: product.id,
            name: product.name, 
            description: product.description, 
            price: product.price
        }
    }
    console.log(product.id, productData);
    return this.http.patch<{name:string}>(`http://localhost:3000/products/${product.id}`, productData);
  }
 
  deleteProduct(id: string){
    console.log(id);
    return this.http.delete<{name:string}>(`http://localhost:3000/products/${id}`);
  }

}
