import { Action, createReducer, on, State } from '@ngrx/store';
import { setWishList } from './WishList.action';

const initialValues: any = { items: [], count: 0 };

const WishListReducer = createReducer(
  initialValues,
  on(setWishList, (state, { items, count }) => ({ ...state, items, count }))
);

export function reducer(state: any, action: Action) {
  return WishListReducer(state, action);
}
