export const addItem = (cartItems, newCartItem, quantity) => {

  const existingCartItem = cartItems.find(cartItem => cartItem.id === newCartItem.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => {
       return cartItem.id === newCartItem.id 
        ? {...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem
    })
  }

  return [...cartItems, { ...newCartItem, quantity: quantity}]
}

export const removeItem = (curItems, itemToRemove) => {
  return curItems.filter(item => {
    return item.id !== itemToRemove.id
  })
}

export const increaseItemQuantity = (curItems, itemToEdit) => {
  const foundItem = curItems.find(item => item.id === itemToEdit.id);
  
  return curItems.map(item => {
    const newQuantity = item.quantity + 1;

    return item.id === foundItem.id 
      ? {...foundItem, quantity: newQuantity}
      : item
  })
}

export const decreaseItemQuantity = (curItems, itemToEdit) => {
  const foundItem = curItems.find(item => item.id === itemToEdit.id);

  const editedItems = curItems.map(item => {
    if (item.id === foundItem.id) {
      if (item.quantity - 1 === 0) {
        return null;
      }

      return {...foundItem, quantity: item.quantity - 1}
    }
    else {
      return item;
    }
  })

  return editedItems.filter(item => item !== null);
}