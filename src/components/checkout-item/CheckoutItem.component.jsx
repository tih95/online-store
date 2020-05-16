import React from 'react';
import styled from 'styled-components/macro';

import { capitalize } from '../../helpers';
import { 
  CheckoutItemImage, 
  CheckoutItemWrapper,
  CheckoutTitle, 
  ItemDetails,
  Price,
  Quantity } from './CheckoutItem.styles';

const CheckoutItem = ({ item }) => {
  return (
    <CheckoutItemWrapper>
      <CheckoutItemImage src={item.imgUrl} alt={item.title} />

      <ItemDetails>
        <div css={`
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          width: 100%;
        `}>
          <CheckoutTitle>{capitalize(item.title)}</CheckoutTitle>
          <Price>${(item.price * item.quantity).toFixed(2)}</Price>
        </div>
        
        <Quantity>Quantity: {item.quantity}</Quantity>
      </ItemDetails>
      
      

    </CheckoutItemWrapper>
  )
}

export default CheckoutItem;