import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

export const Header = styled.header`
  
  padding: 1.4em 2em;
  box-shadow: 0 6px 15px -9px gray;
`;

export const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.2em;
  
  @media (max-width: 500px) {
    order: 2;
    
  }
  
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 300;
  order: 3;

  > * {
    margin-left: 1.6em;
  }

  @media (max-width: 500px) {
    > * {
      margin-left: 0;
    }
  }
  

`;

export const MenuButton = styled(AiOutlineMenu)`
  display: none;

  @media (max-width: 500px) {
    order: 1;
    display: block;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.2em;
  
  @media (max-width: 500px) {
    display: none;
  }
`;