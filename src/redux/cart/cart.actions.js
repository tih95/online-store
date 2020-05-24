export const addCartItem = item => {
  return {
    type: 'ADD_CART_ITEM',
    payload: item
  }
}

export const removeCartItem = item => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: item
  }
}

export const increaseQuantity = item => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: item
  }
}

export const decreaseQuantity = item => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: item
  }
}

export const toggleCart = () => {
  return {
    type: 'TOGGLE_CART'
  }
}