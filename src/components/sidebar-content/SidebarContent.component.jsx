import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SidebarContentContainer, TopSection, CartItemsSection, Total, EmptyCartText } from './SidebarContent.styles';
import { toggleCart } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/CartItem.component';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

const SidebarContent = ({ cartItems, toggleCart, cartItemCount }) => {
  
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
        <p>{cartItemCount} items</p>
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

      <Total>Total: ${getTotalPrice().toFixed(2)}</Total>
    </SidebarContentContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContent);