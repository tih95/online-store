import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCoffee, AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components/macro';

import Cart from '../cart/Cart.component';
import { Header, LogoWrapper, LogoText, NavLinks, NavLink } from './Navbar.styles';

const Navbar = () => {
  return (
    <Header>
      <Link to="/">
        <LogoWrapper>
          <LogoText>Tristan's Coffee</LogoText>
          <AiOutlineCoffee size={24} />
        </LogoWrapper>
      </Link>

      <AiOutlineMenu css={`display: none;`} />

      <NavLinks>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <Cart css={`display: inline;`} />
      </NavLinks>

      
    </Header>
  )
}

export default Navbar;