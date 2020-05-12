import styled from 'styled-components';

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