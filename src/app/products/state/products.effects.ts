import { Store } from '@ngrx/store';
import {map,mergeMap} from 'rxjs/operators';
import {addProduct, addProductSuccess, loadProducts, loadProductsSuccess} from './products.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { AppState } from 'src/app/app.state';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  loadProducts$ = createEffect(():any => {
    return this.actions$.pipe(
      ofType(loadProducts),
      //withLatestFrom(this.store.select(getProducts)),
      mergeMap(action => {
        //if (!products.length || products.length === 1) {
          return this.productsService.getProducts().pipe(
            map((products) => {
              return loadProductsSuccess({ products });
            })
          );
        //}
        //return of(dummyAction());
      })
    );
  });

  addProduct$ = createEffect(():any => {
    return this.actions$.pipe(
      ofType(addProduct),
      mergeMap((action) => {
        return this.productsService.addProduct(action.product).pipe(
          map((data) => {
              console.log(data);
            const product = { ...action.product, id: data.name };
            return addProductSuccess({ product });
          })
        );
      })
    );
  });

}