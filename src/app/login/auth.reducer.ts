import { initialState } from './auth.state';
import { createReducer, on } from '@ngrx/store';
import { updateUserSuccess } from './auth.actions';

const authReducer = createReducer(
    initialState,
    on(updateUserSuccess,(state:any, action)=>{
        const updatedUser = state.products.map(product => {
            return action.user.id === product.id ? action.user : product;
        })
        return {
            ...state, 
            users: updatedUser,
        }
    }), 
    
);

export function AuthReducer(state:any, action:any){
    return authReducer(state, action);
}