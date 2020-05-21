import React from 'react';
import { connect } from 'react-redux';

import { toggleMenu } from '../../redux/menu/menu.actions';
import { SidebarMenuContainer, SidebarLink } from './SidebarMenu.styles';

const SidebarMenu = ({toggleMenu}) => {

  return (
    <SidebarMenuContainer>
      <h1>Menu</h1>
      <SidebarLink onClick={toggleMenu} to="/about">About</SidebarLink>
      <SidebarLink onClick={toggleMenu} to="/shop">Shop</SidebarLink>
      <SidebarLink onClick={toggleMenu} to="/shop/coffee">Coffee</SidebarLink>
      <SidebarLink onClick={toggleMenu} to="/shop/tea">Tea</SidebarLink>
      <SidebarLink onClick={toggleMenu} to="/shop/pastries">Pastries</SidebarLink>
      <SidebarLink onClick={toggleMenu} to="/shop/toast">Toast</SidebarLink>
    </SidebarMenuContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
})

export default connect(null, mapDispatchToProps)(SidebarMenu);