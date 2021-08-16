import { Store } from '@ngrx/store';
import {map,mergeMap, switchMap, tap} from 'rxjs/operators';
import {addProduct, addProductSuccess, deleteProduct, deleteProductSuccess, loadProducts, loadProductsSuccess, updateProduct, updateProductSuccess} from './products.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { AppState } from '../../app.state';
import { Update } from '@ngrx/entity';
import { Product } from '../products.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<AppState>,
    private router: Router,
    private toastr: ToastrService
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

  productRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[deleteProductSuccess]),
        tap((action) => {
          this.router.navigate(['/']);
          this.toastr.success("Success");
        })
      );
    },
    { dispatch: false }
  );
  productRedirect1$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[addProductSuccess],),
        tap((action) => {
          this.toastr.success("Success");
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );
  productRedirect2$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[updateProductSuccess]),
        tap((action) => {
          this.router.navigate(['/']);
          this.toastr.success("Success");
        })
      );
    },
    { dispatch: false }
  );

}