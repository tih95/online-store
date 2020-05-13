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

export const QuantityInput = styled.input`
  width: 30%;
  height: 30px;
  margin-bottom: 0.5em;
`;