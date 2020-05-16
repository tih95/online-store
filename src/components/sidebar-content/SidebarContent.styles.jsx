import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContentContainer = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  p {
    font-size: 1.4em;
    font-weight: 600;
  }
`;

export const CartItemsSection = styled.div`

`;

export const Total = styled.p`
  font-weight: 700;
  font-size: 1.6em;
`;

export const EmptyCartText = styled.p`
  font-size: 1.4em;
`;

export const CheckoutButton = styled(Link)`
  background: #55efc4;
  padding: 1em;
  border: 2px solid #55efc4;
  border-radius: 20px;
  margin: 1.5em 0;
  width: 50%;
  align-self: center;
  text-align: center;
`;

export const ContinueShopping = styled.p`
  text-align: center;
  color: #00b894;
  cursor: pointer;
`;