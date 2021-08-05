import { createReducer, on } from "@ngrx/store";
import { addProductSuccess, deleteProduct, deleteProductSuccess, loadProductsSuccess, updateProduct, updateProductSuccess } from "./products.actions";
import { initialState } from "./products.state";

const _productsReducer = createReducer(
    initialState, 
    on(addProductSuccess, (state:any, action)=>{
        let product = {...action.product};
        //product.id = (state.products.length +1).toString();
        console.log(product);
        return{
            ...state, 
            products: [...state.products, product]
        };
    }), 
    on(updateProductSuccess,(state:any, action)=>{
        const updatedProduct = state.products.map(product => {
            return action.product.id === product.id ? action.product : product;
        })
        return {
            ...state, 
            products: updatedProduct,
        }
    }), 
    on(deleteProductSuccess, (state, { id }:any)=>{
        const updatedProduct = state.products.filter(product =>{
            console.log(product);
            //return product.id !== id;
        });
        return {
            ...state,
            products: updatedProduct
        }
    }),

    on(loadProductsSuccess, (state:any, action) =>{
        return {
            ...state, products: action.products
        }
    })
);

export function productReducer(state:any, action:any){
    return _productsReducer(state, action);
}