import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Products } from "../products.model";

export interface ProductsState extends EntityState<Products>{
    products: Products[]
    //count: 0
}
export const productsAdapter = createEntityAdapter<Products>({
    sortComparer: sortByName,
  });

  // export const initialState: ProductsState = productsAdapter.getInitialState({
  //   count: 0,
  // });

export const initialState: ProductsState = productsAdapter.getInitialState({
  products : [
    {id: 1, title:'title1', description: 'description1'},
    {id: 2, title:'title2', description: 'description2'}
  ]
});

export function sortByName(a: Products, b: Products): number {
  const compare = a.title.localeCompare(b.title);
  if (compare > 0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}