import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCoffee } from 'react-icons/ai';
import styled from 'styled-components/macro';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/CartIcon.component';
import { Header, LogoWrapper, LogoText, NavLinks, NavLink } from './Navbar.styles';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

const Navbar = ({ itemCount }) => {
  return (
    <Header>
      <Link to="/">
        <LogoWrapper>
          <LogoText>Tristan's Coffee</LogoText>
          <AiOutlineCoffee size={24} />
        </LogoWrapper>
      </Link>

      {/*<AiOutlineMenu css={`display: none;`} />*/}

      <NavLinks>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <CartIcon itemCount={itemCount} />
      </NavLinks>

      

    </Header>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})

export default connect(mapStateToProps)(Navbar);