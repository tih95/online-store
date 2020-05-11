import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  padding: 0 2em;
  margin-bottom: 1.5em;
`;

export const PreviewCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 1 1 30%;
    margin: 1em;
  }
`;

export const SeeAllContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;