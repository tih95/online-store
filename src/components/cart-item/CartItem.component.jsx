import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { ItemContainer, CartImage, RemoveButton, CartContent, QuantitySection, ItemTitle, ItemPrice, Quantity } from './CartItem.styles';
import { removeCartItem, increaseQuantity, decreaseQuantity } from '../../redux/cart/cart.actions';

const CartItem = ({ cartItem, removeCartItem, increaseQuantity, decreaseQuantity }) => {
  
  return (
    <ItemContainer>
      <CartImage src={cartItem.imgUrl} alt={cartItem.title} />
      <CartContent>
        <div 
          css={`
            display: flex; 
            justify-content: space-between;
            align-items: center;
          `}
        >
          <ItemTitle>{cartItem.title}</ItemTitle>
          <ItemPrice>${(cartItem.price * cartItem.quantity).toFixed(2)}</ItemPrice>
        </div>
        <QuantitySection>
          <AiOutlineMinus onClick={() => decreaseQuantity(cartItem)}/>
          <Quantity>{cartItem.quantity}</Quantity>
          <AiOutlinePlus onClick={() => increaseQuantity(cartItem)} />
        </QuantitySection>
        <RemoveButton onClick={() => removeCartItem(cartItem)}>Remove Item</RemoveButton>
      </CartContent>
      
    </ItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeCartItem(item)),
  increaseQuantity: item => dispatch(increaseQuantity(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CartItem);