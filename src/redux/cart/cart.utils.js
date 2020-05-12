export const addItem = (curItems, newItem) => {
  // find item exists
  const copy = [...curItems];

  const foundItem = copy.findIndex(item => newItem.id === item.id);
    // if item exists, update the quantity

  // if item was found
  if (foundItem !== -1) {
    copy[foundItem].quantity++;
  }
  else {
    copy.push({
      id: newItem.id,
      title: newItem.title,
      price: newItem.price,
      imgUrl: newItem.imgUrl,
      quantity: 1
    })
  }

  return copy;
}