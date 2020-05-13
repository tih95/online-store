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

export const editCartItem = (item, newQuantity) => {
  return {
    type: 'EDIT_CART_ITEM',
    payload: {item, newQuantity}
  }
}

export const toggleCart = () => {
  return {
    type: 'TOGGLE_CART'
  }
}