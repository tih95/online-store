import React from 'react';

import { ItemContainer, CartImage } from './CartItem.styles';

const CartItem = ({ cartItem }) => {
  return (
    <ItemContainer>
      <CartImage src={cartItem.imgUrl} alt={cartItem.title} />
      <p>{cartItem.title}</p>
    </ItemContainer>
  )
}
export default CartItem;