import styled from 'styled-components';

export const CheckoutItemWrapper = styled.div`
  display: flex;
  margin: 1em 0;
  
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  flex: 2;
  
  > * {
    margin-bottom: 0.8em;
  }
`;

export const CheckoutItemImage = styled.img`
  width: 4em;
`;

export const CheckoutTitle = styled.h4`
  font-weight: 300;
  font-size: 1em;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 1em;
`;

export const Quantity = styled.p`
  font-weight: 300;
`;