export const addItem = (cartItems, newCartItem) => {
  // // find item exists
  // const copy = [...curItems];

  // const foundItem = copy.findIndex(item => newItem.id === item.id);
  //   // if item exists, update the quantity

  // // if item was found
  // if (foundItem !== -1) {
  //   copy[foundItem].quantity++;
  // }
  // else {
  //   copy.push({
  //     id: newItem.id,
  //     title: newItem.title,
  //     price: newItem.price,
  //     imgUrl: newItem.imgUrl,
  //     quantity: 1
  //   })
  // }

  // return copy;

  const existingCartItem = cartItems.find(cartItem => cartItem.id === newCartItem.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => {
       return cartItem.id === newCartItem.id 
        ? {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    })
  }

  return [...cartItems, { ...newCartItem, quantity: 1}]
}

export const removeItem = (curItems, itemToRemove) => {
  return curItems.filter(item => {
    return item.id !== itemToRemove.id
  })
}

export const editItem = (curItems, itemToEdit, newQuantity) => {
  const foundItem = curItems.find(item => item.id === itemToEdit.id);

  
  return curItems.map(item => {
    return item.id === foundItem.id 
      ? {...foundItem, quantity: newQuantity}
      : item
  })
}