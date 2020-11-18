import { Map, Record } from 'immutable';

export interface ProductControlState extends Map<string, any> {
  wishlist: any;
  cartList: any;
  cartCount: any;
  totalCartPrice: any;
  checkedOut: any;
  checkoutLoading: any;
  checkoutLoaded: any;
  checkoutFailed: any;
}


export const productControlRecord = Record({
  wishlist: [],
  cartList: [],
  cartCount: [],
  totalCartPrice: [],
  checkedOut: [],

  checkoutLoading: false,
  checkoutLoaded: false,
  checkoutFailed: false
});
