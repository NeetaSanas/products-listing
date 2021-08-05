import { createReducer, on } from "@ngrx/store";
import { action } from "@storybook/addon-actions";
import { addProductSuccess, deleteProduct, loadProductsSuccess, updateProduct } from "./products.actions";
import { initialState } from "./products.state";

const _productsReducer = createReducer(
    initialState, 
    on(addProductSuccess, (state:any, action)=>{
        let product = {...action.product};
        product.id = (state.products.length +1).toString();
        return{
            ...state, 
            products: [...state.products, product]
        };
    }), 
    // on(updateProduct,(state:any, action)=>{
    //     const updatedProduct = state.products.map(product => {
    //         return action.product.id === product.id ? action.product : product;
    //     })
    //     return {
    //         ...state, 
    //         products: updatedProduct,
    //     }
    // }), 
    // on(deleteProduct, (state, { id })=>{
    //     const updatedProduct = state.products.filter(product =>{
    //         return product.id !== id;
    //     });
    //     return {
    //         ...state,
    //         products: updatedProduct
    //     }
    // }),

    on(loadProductsSuccess, (state:any, action) =>{
        return {
            ...state, products: action.products
        }
    })
);

export function productReducer(state:any, action:any){
    return _productsReducer(state, action);
}