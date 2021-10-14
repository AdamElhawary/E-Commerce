import { Action, createAction, props } from '@ngrx/store';
export const setWishList = createAction(
  'SET_WISHLIST',
  props<{ items: []; count: 0 }>()
);
