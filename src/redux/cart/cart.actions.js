export const addCartItem = item => {
  return {
    type: 'ADD_CART_ITEM',
    payload: item
  }
}

export const toggleCart = () => {
  return {
    type: 'TOGGLE_CART'
  }
}