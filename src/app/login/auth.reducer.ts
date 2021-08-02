import { initialState } from './auth.state';
import { createReducer } from '@ngrx/store';

const authReducer = createReducer(initialState);

export function AuthReducer(state:any, action:any){
    return authReducer(state, action);
}