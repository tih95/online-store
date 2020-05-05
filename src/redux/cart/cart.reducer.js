const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default cartReducer;