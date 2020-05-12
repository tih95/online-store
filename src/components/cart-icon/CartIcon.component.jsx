import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from 'react-redux';

import { CartItemCount, CartIconContainer } from './CartIcon.styles';
import { toggleCart } from '../../redux/cart/cart.actions';

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <CartIconContainer onClick={toggleCart}>
      <AiOutlineShoppingCart size={28} />
      <CartItemCount>{itemCount}</CartItemCount>
    </CartIconContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
})

export default connect(null, mapDispatchToProps)(CartIcon);