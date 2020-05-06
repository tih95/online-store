import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4em 2em;
  box-shadow: 0 6px 15px -9px gray;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  margin-right: 0.3em;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 300;

  > * {
    margin-left: 1.6em;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.2em;
`;