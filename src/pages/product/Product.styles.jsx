import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const ProductContainer = styled.div`
  padding: 2em 1em 0 1em;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const LeftColumn = styled.section`
  width: 60%;
  margin-right: 1em;
  

  @media (max-width: 900px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const RightColumn = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ProductPrice = styled.p`
  margin-top: 0.2em;
  font-weight: 500;
  font-size: 1.6em;
`;

export const AddCartButton = styled.button`
  background: #55efc4;
  padding: 0.5em 1em;
  border: 2px solid #55efc4;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.1s all;
  width: 60%; 
  font-size: 1.3em;
  width: 100%;

  &:active {
    transform: scale(0.9);
    transition: 0.1s all;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2.2em;
`;

export const ProductDescription = styled.p`
  font-size: 1.3em;
  font-weight: 300;
  letter-spacing: 1px;

  margin: 1.6em 0;
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: 500;
`;

export const MinusIcon = styled(AiOutlineMinus)`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const PlusIcon = styled(AiOutlinePlus)`
  cursor: pointer;
`;