import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

import { ItemContainer, CartImage, RemoveButton, CartContent, QuantityInput, ItemTitle, ItemPrice } from './CartItem.styles';
import { removeCartItem, editCartItem } from '../../redux/cart/cart.actions';

const CartItem = ({ cartItem, removeCartItem, editCartItem }) => {
  //TODO: make cart item look better
  return (
    <ItemContainer>
      <CartImage src={cartItem.imgUrl} alt={cartItem.title} />
      <CartContent>
        <div 
          css={`
            display: flex; 
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5em;
          `}
        >
          <ItemTitle>{cartItem.title}</ItemTitle>
          <ItemPrice>${(cartItem.price * cartItem.quantity).toFixed(2)}</ItemPrice>
        </div>
        <label>Quantity</label>
        <QuantityInput type="text" value={cartItem.quantity} onChange={(e) => editCartItem(cartItem, Number(e.target.value))} />
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