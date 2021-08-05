import { createAction, props } from "@ngrx/store";
import { Product } from "../products.model";

export const ADD_PRODUCT_ACTION = '[products page] add product';
export const ADD_PRODUCT_SUCCESS = '[products page] add product success';
export const UPDATE_PRODUCT_ACTION = '[products page] update product';
export const DELETE_PRODUCT_ACTION = '[products page] delete product';
export const LOAD_PRODUCTS = '[products page] load products';
export const LOAD_PRODUCTS_SUCCESS = '[products page] load products success';

export const addProduct = createAction(ADD_PRODUCT_ACTION, props<{product:Product}>());
export const addProductSuccess = createAction(
    ADD_PRODUCT_SUCCESS,
    props<{ product: Product }>()
  );
export const updateProduct = createAction(UPDATE_PRODUCT_ACTION, props<{product:Product}>());
export const deleteProduct = createAction(DELETE_PRODUCT_ACTION, props<{id:string}>());
export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{products: Product[]}>());