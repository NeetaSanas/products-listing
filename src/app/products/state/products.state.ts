import { Product } from "../products.model";

export interface ProductsState{
    products: Product[];
}

export const initialState = {
    products : [
        // {id : '1', name: 'Product 1', price: '100$', desc: 'Product1 Description to be enter here.', },
        // {id : '2', name:'title2', price: '200$', description:'description2'},
        // {id : '3', name:'title3', price: '300$', description:'description3'},
        // {id : '4', name:'title4', price: '400$', description:'description4'},
    ]
}