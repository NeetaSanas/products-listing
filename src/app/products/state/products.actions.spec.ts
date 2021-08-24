import { provideMockStore } from '@ngrx/store/testing';
import { Product } from "../products.model";
import {
    // ADD_PRODUCT_ACTION,
    // ADD_PRODUCT_SUCCESS,
    // UPDATE_PRODUCT_ACTION,
    // UPDATE_PRODUCT_SUCCESS,
    // DELETE_PRODUCT_ACTION,
    // DELETE_PRODUCT_SUCCESS,
    LOAD_PRODUCTS,
    // LOAD_PRODUCTS_SUCCESS,
    // addProduct,
    // addProductSuccess,
    // updateProduct,
    // deleteProduct,
    loadProducts,
    // loadProductsSuccess,
    // updateProductSuccess,
    // deleteProductSuccess
    
} from './products.actions';

describe('Activity Actions', () => {
    beforeEach(() => {
        provideMockStore({
            initialState: {
                appModel: {
                    data: [],
                    isLoggedIn: false,
                    requestBody: {},
                    id: 1
                }
            }
        });
    });
    it('should create actions', () => {
        expect(loadProducts()).toEqual({
            type: LOAD_PRODUCTS,
        });
    });

});