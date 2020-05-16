import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
`;

export const OrderSummary = styled.section`
  flex: 1;
  border-radius: 5px;
  border: 2px solid #dfe6e9;
  padding: 1em;
`;

export const CustomerDetails = styled.section`
  flex: 2;
  padding: 1em;
`;

export const EditOrderButton = styled.button`
  border: 1px solid black;
  padding: 0.5em 1em;
  border-radius: 30px;
  color: white;
  cursor: pointer;

  background: black;
`;