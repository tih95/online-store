import { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  cartOpen: false
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload.item, action.payload.quantity)
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
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: increaseItemQuantity(state.cartItems, action.payload)
      }
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;