import React from 'react';
import { connect } from 'redux';
import styled from 'styled-components/macro';

import CartIcon from '../cart-icon/CartIcon.component';

const Cart = ({ cartItems }) => {
  return (
    <div 
      css={`cursor: pointer;`}
    >
      <CartIcon />
    </div>
  )
}

export default Cart;