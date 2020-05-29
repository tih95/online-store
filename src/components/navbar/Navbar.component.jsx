import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import CartIcon from '../cart-icon/CartIcon.component';
import { Header, MenuButton, Logo, NavLinks, NavLink, Wrapper } from './Navbar.styles';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { toggleMenu } from '../../redux/menu/menu.actions';

const Navbar = ({ itemCount, toggleMenu }) => {

  return (
    <Header>
      <Wrapper>
        <Logo to="/">T-City Coffee</Logo>

        <MenuButton size={32} onClick={() => toggleMenu()} />

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          <CartIcon itemCount={itemCount} />
        </NavLinks>


      </Wrapper>
      
    </Header>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);