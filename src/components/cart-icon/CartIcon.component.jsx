import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components/macro';

import { CartItemCount } from './CartIcon.styles';

const CartIcon = () => {
  return (
    <div css={`position: relative;`}>
      <AiOutlineShoppingCart size={28} />
      <CartItemCount>0</CartItemCount>
    </div>
  )
}

export default CartIcon;