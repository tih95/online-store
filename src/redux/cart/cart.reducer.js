import { addItem, removeItem } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  cartOpen: false
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        cartOpen: !state.cartOpen
      }
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;