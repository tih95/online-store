import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { CheckoutWrapper, OrderSummary, CustomerDetails, EditOrderButton } from './Checkout.styles';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import { toggleCart } from '../../redux/cart/cart.actions';

const Checkout = ({ cartItems, toggleCart }) => {
  return (
    <CheckoutWrapper>
      <CustomerDetails>
        <h1>User details</h1>
      </CustomerDetails>
      <OrderSummary>
        <h3>Order Summary</h3>
        {
          cartItems.map(item => <CheckoutItem item={item} key={item.id} />)
        }
        <EditOrderButton onClick={toggleCart}>Edit Order</EditOrderButton>
      </OrderSummary>
      
    </CheckoutWrapper>  
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);