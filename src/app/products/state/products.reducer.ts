import { createReducer, on } from "@ngrx/store";
import { addProduct } from "./products.actions";
import { initialState, productsAdapter } from "./products.state";

export const _productsReducer = createReducer(
    initialState,
  on(addProduct, (state, action) => {
    let product = {...action.product};
    return productsAdapter.addOne(action.product, {
      ...state,
      products: [...state.products, product]
    });
  }),
);

export function productsReducer(state:any, action:any){
    return _productsReducer(state, action);
}