import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1;
  margin-left: 1em;
`;

export const CartImage = styled.img`
  width: 7em;
`;

export const ItemTitle = styled.p`
  font-weight: 700;
  font-size: 1.2em;
`;

export const ItemPrice = styled.p`
  font-weight: 500;

`;

export const RemoveButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: #0984e3;
  cursor: pointer;
  align-self: flex-start;
`;

export const Quantity = styled.p`
  margin: 0 1em;
  font-weight: 600;
  font-size: 1em;
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  border: 2px solid black;
  align-self: flex-start;
  padding: 0.7em;
`;