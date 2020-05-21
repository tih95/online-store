import styled from 'styled-components';

export const ProductContainer = styled.div`
  
`;


export const ProductImage = styled.img`
  width: 300px;
`;

export const AddCartButton = styled.button`
  background: #55efc4;
  color: wh;
  padding: 0.5em 1em;
  border: 2px solid #55efc4;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.1s all;

  &:active {
    transform: scale(0.9);
    transition: 0.1s all;
  }
`;