import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  let addedItem;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      addedItem = state.find(c => c.product.id === action.payload.product.id);
      if (addedItem) {
        var newState = state.map(cartItem => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity++
            });
          }
          return cartItem;
        });
        addedItem = newState;
      } else {
        addedItem = [...state, { ...action.payload }];
      }
      break;

    default:
      addedItem = state;
  }

  return addedItem;
}
