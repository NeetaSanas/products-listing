import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";
import { getCurrentRoute } from "src/app/store/router/router.selector";
import { productsAdapter, ProductsState } from "./products.state";


export const PRODUCT_STATE_NAME = 'products';
const getProductsState = createFeatureSelector<ProductsState>(PRODUCT_STATE_NAME);
export const productsSelectors = productsAdapter.getSelectors();

export const getProducts = createSelector(getProductsState, productsSelectors.selectAll);
export const getPostEntities = createSelector(
    getProductsState,
  productsSelectors.selectEntities
);

export const getPostById = createSelector(
  getPostEntities,
  getCurrentRoute,
  (products, route: RouterStateUrl) => {
    return products ? products[route.params['id']] : null;
  }
);

// export const getCount = createSelector(getProductsState, (state) => state.count);