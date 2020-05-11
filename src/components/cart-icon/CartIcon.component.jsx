import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components/macro';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { CartItemCount } from './CartIcon.styles';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ itemCount }) => {
  return (
    <div css={`position: relative;`}>
      <AiOutlineShoppingCart size={28} />
      <CartItemCount>{itemCount}</CartItemCount>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})

export default connect(mapStateToProps)(CartIcon);