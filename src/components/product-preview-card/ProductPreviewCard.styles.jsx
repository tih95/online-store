import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 2px solid black;
  cursor: pointer;
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const PreviewImage = styled.img`
  flex: 1;
  width: 1em;
`;