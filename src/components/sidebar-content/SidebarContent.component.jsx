import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';

import { SidebarContentContainer, TopSection, CartItemsSection } from './SidebarContent.styles';
import { toggleCart } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/CartItem.component';

const SidebarContent = ({ cartItems, toggleCart }) => {
  
  return (
    <SidebarContentContainer>
      <TopSection>
        <p>Cart</p>
        <AiOutlineClose size={24} onClick={toggleCart} />
      </TopSection>
      
      <hr />

      <CartItemsSection>
        {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
      </CartItemsSection>
    </SidebarContentContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(SidebarContent);