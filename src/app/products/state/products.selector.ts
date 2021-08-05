import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.state";

const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(getProductsState, (state) =>{
    return state.products;
});

export const getProductById = createSelector(getProductsState, (state:any, props:any) =>{
    const product = state.products.find((product:any) => product.id === props.id);
    return product;
})