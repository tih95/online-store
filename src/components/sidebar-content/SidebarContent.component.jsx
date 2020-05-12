import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';

import { SidebarContentContainer, TopSection, CartItemsSection, Total, EmptyCartText } from './SidebarContent.styles';
import { toggleCart } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/CartItem.component';

const SidebarContent = ({ cartItems, toggleCart }) => {
  
  const getTotalPrice = () => {
    const sum =  cartItems.reduce((acc, curVal) => {
      return acc + curVal.quantity * curVal.price
    }, 0)

    return sum;
  }

  return (
    <SidebarContentContainer>
      <TopSection>
        <p>Cart</p>
        <AiOutlineClose size={24} onClick={toggleCart} />
      </TopSection>
      
      <hr style={{marginBottom: '1em'}} />
      {
        cartItems.length === 0 && 
        <EmptyCartText>
          Your cart is empty, add some items to get started!
        </EmptyCartText>
      }

      <CartItemsSection>
        {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
      </CartItemsSection>

      <hr style={{margin: '1em 0'}} />
      <Total>Total: ${getTotalPrice().toFixed(0)}</Total>
    </SidebarContentContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(SidebarContent);