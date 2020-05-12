import React from 'react';
import { connect } from 'react-redux';

import { ItemContainer, CartImage } from './CartItem.styles';
import { removeCartItem } from '../../redux/cart/cart.actions';

const CartItem = ({ cartItem, removeCartItem }) => {
  return (
    <ItemContainer>
      <CartImage src={cartItem.imgUrl} alt={cartItem.title} />
      <p>{cartItem.title}</p>
      <button onClick={() => removeCartItem(cartItem)}>Remove</button>
    </ItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeCartItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);