import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  display: flex;
  justify-content: flex-start;
  border: 2px solid #dfe6e9;
  border-radius: 4px;
  cursor: pointer;
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  justify-content: space-between;
  padding: 1em;
`;

export const PreviewImage = styled.div`
  background: ${props => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
  width: 2em;
`;

export const Price = styled.p`
  font-weight: 600;
`;