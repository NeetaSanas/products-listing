import { Store } from '@ngrx/store';
import {map,mergeMap, switchMap} from 'rxjs/operators';
import {addProduct, addProductSuccess, deleteProduct, deleteProductSuccess, loadProducts, loadProductsSuccess, updateProduct, updateProductSuccess} from './products.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { AppState } from 'src/app/app.state';
import { Update } from '@ngrx/entity';
import { Product } from '../products.model';

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
        console.log(action.product);
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

  updateProduct$ = createEffect(():any => {
    return this.actions$.pipe(
      ofType(updateProduct),
      switchMap((action) => {
        return this.productsService.updateProduct(action.product).pipe(
          map((data) => {
            const updatedProduct: Update<Product> = {
              id: action.product.id,
              changes: {
                ...action.product,
              },
            };
            return updateProductSuccess({ product: action.product });
          })
        );
      })
    );
  });

  deleteProduct$ = createEffect(():any => {
    return this.actions$.pipe(
      ofType(deleteProduct),
      switchMap((action) => {
        return this.productsService.deleteProduct(action.id).pipe(
          map((data) => {
            return deleteProductSuccess({ id: action.id });
          })
        );
      })
    );
  });

}