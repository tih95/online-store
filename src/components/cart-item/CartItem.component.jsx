import React from 'react';
import { connect } from 'react-redux';

import { ItemContainer, CartImage, RemoveButton, CartContent } from './CartItem.styles';
import { removeCartItem, editCartItem } from '../../redux/cart/cart.actions';

const CartItem = ({ cartItem, removeCartItem, editCartItem }) => {
  //TODO: make cart item look better
  return (
    <ItemContainer>
      <CartImage src={cartItem.imgUrl} alt={cartItem.title} />
      <CartContent>
        <div>
          <p>{cartItem.title}</p>
          <p>{cartItem.quantity}</p>
          <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
        </div>
        <input type="text" value={cartItem.quantity} onChange={(e) => editCartItem(cartItem, Number(e.target.value))} />
        <RemoveButton onClick={() => removeCartItem(cartItem)}>Remove Item</RemoveButton>
      </CartContent>
      
    </ItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeCartItem(item)),
  editCartItem: (item, quantity) => dispatch(editCartItem(item, quantity))
})

export default connect(null, mapDispatchToProps)(CartItem);