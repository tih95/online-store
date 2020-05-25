export const addCartItem = (item, quantity) => {
  return {
    type: 'ADD_CART_ITEM',
    payload: {item, quantity}
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