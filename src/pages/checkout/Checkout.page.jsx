import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Loader from 'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { 
  CheckoutWrapper, 
  OrderSummary, 
  CustomerDetails, 
  Button, 
  Input, 
  InputLabel, 
  Form,
  Row,
  RowItem,
  StyledModal,
  PricingDiv } from './Checkout.styles';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import { toggleCart, clearCart } from '../../redux/cart/cart.actions';
import ModalConfirmation from '../../components/modal-confirmation/ModalConfirmation.component';

Modal.setAppElement('#root');

const Checkout = ({ cartItems, toggleCart, clearCart }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [ccv, setCcv] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
    setTimeout(() => {
      toggleModal();
      setLoading(false);
    }, 2000)
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const afterModalClose = () => {
    clearCart();
  }

  const getSubTotal = () => {
    const sum =  cartItems.reduce((acc, curVal) => {
      return acc + curVal.quantity * curVal.price
    }, 0)

    return sum;
  }

  if (!cartItems.length) {
    return <Redirect to="/shop" />
  }

  return (
    <CheckoutWrapper>
      <CustomerDetails>
        <Form onSubmit={handleSubmit}>
          <h2>User details</h2>
          <Row>
            <RowItem>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input 
                id="email"
                name="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </RowItem>
            
          </Row>
          <Row>
            <RowItem>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <Input
                name="firstName"
                id="firstName"
                type="name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </RowItem>
            <RowItem>
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <Input
                name="lastName"
                id="lastName"
                type="name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </RowItem>
          </Row>

          <h2>Payment Details</h2>
          <Row>
            <RowItem>
              <InputLabel htmlFor="cardNumber">Card Number</InputLabel>
              <Input
                name="cardNumber"
                id="cardNumber"
                type="tel"
                value={cardNumber}
                placeholder="1234 5678 8765 4321"
                maxLength="16"
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </RowItem>
          </Row>

          <Row>
            <RowItem>
              <InputLabel htmlFor="expiration">Expiration</InputLabel>
              <Input
                name="expiration"
                id="expiration"
                type="tel"
                value={expiration}
                maxLength="5"
                placeholder="01/01"
                onChange={(e) => setExpiration(e.target.value)}
              />
            </RowItem>
            <RowItem>
              <InputLabel htmlFor="ccv">CCV</InputLabel>
              <Input
                name="ccv"
                id="ccv"
                type="tel"
                value={ccv}
                maxLength="3"
                placeholder="123"
                onChange={(e) => setCcv(e.target.value)}
              />
            </RowItem>
          </Row>
          <Row>
            <RowItem>
              <InputLabel htmlFor="zipcode">ZIP</InputLabel>
              <Input
                name="zipcode"
                id="zipcode"
                type="tel"
                value={zipcode}
                maxLength="5"
                placeholder="90000"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </RowItem>
          </Row>
          {loading 
          ? <Loader color="#55efc4" height={50} width={50} type="TailSpin" visible={loading} />
          : <Button>Submit Order</Button>
          }
          
        </Form>
      </CustomerDetails>
      <OrderSummary>
        <h3>Order Summary</h3>
        {
          cartItems.map(item => <CheckoutItem item={item} key={item.id} />)
        }
        <PricingDiv>
          <p><span style={{fontWeight: 600}}>Subtotal</span>: ${getSubTotal().toFixed(2)}</p>
          <p><span style={{fontWeight: 600}}>Tax</span>: ${(getSubTotal() * .095).toFixed(2)}</p>
          <p style={{fontWeight: 600, fontSize: '1.3em'}}>Total: ${Number(getSubTotal()) + Number((getSubTotal() * .095).toFixed(2))}</p>
        </PricingDiv>
        
        <Button onClick={toggleCart}>Edit Order</Button>
      </OrderSummary>
      <StyledModal 
        isOpen={modalOpen}
        onAfterClose={afterModalClose}
      >
        <ModalConfirmation 
          toggleModal={toggleModal}
          cartItems={cartItems}
          firstName={firstName}
          email={email}
        />
      </StyledModal>
    </CheckoutWrapper>  
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
  clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);