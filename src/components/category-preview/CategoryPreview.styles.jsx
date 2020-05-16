import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  margin-bottom: 1.5em;
`;

export const PreviewCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1em 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
