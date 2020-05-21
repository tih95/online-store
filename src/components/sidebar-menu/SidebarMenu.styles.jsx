import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarMenuContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(Link)`
  font-weight: 300;
  font-size: 1.4em;
  margin-top: 1em;
`;