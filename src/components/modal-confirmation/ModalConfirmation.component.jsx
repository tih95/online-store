import React from 'react';
import dayjs from 'dayjs';

import CheckoutItem from '../checkout-item/CheckoutItem.component';
import { ModalContentWrapper } from './ModalConfirmation.styles';
import { Button } from '../../pages/checkout/Checkout.styles';

const ModalConfirmation = ({ toggleModal, cartItems, firstName, email }) => {
  const getSubTotal = () => {
    const sum =  cartItems.reduce((acc, curVal) => {
      return acc + curVal.quantity * curVal.price
    }, 0)

    return sum;
  }

  return (
    <ModalContentWrapper>
      <h1>Thank you for ordering with us, {firstName}!</h1>
      <p>A confirmation email has been sent to <span style={{fontWeight: 600}}>{email}</span></p>
      <h3>Order Summary</h3>
      {
        cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
      }
      <p><span style={{fontWeight: 600}}>Subtotal</span>: ${getSubTotal().toFixed(2)}</p>
      <p><span style={{fontWeight: 600}}>Tax</span>: ${(getSubTotal() * .095).toFixed(2)}</p>
      <p style={{fontWeight: 600, fontSize: '1.3em'}}>Total: ${Number(getSubTotal()) + Number((getSubTotal() * .095).toFixed(2))}</p>
      
      <p>Your order will be ready for pick up today after {dayjs().add(18, 'minute').format('h:mm A')}</p>
      
      <Button onClick={toggleModal}>Close</Button>
    </ModalContentWrapper>
  )
}

export default ModalConfirmation;