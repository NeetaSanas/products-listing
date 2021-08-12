// import { SharedState } from './Shared/shared.state';
// import { SHARED_STATE_NAME } from './Shared/shared.selector';
// import { SharedReducer } from './Shared/shared.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { AuthReducer } from './login/auth.reducer';
import { AUTH_STATE_NAME } from './login/auth.selector';
import { AuthState } from './login/auth.state';
import { ProductsState } from './products/state/products.state';
import { productReducer } from './products/state/products.reducer';

export interface AppState {
//   [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  router: RouterReducerState;
  products: ProductsState
}

export const appReducer = {
//   [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
  router: routerReducer,
  products: productReducer
};
