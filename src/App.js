import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Landing from './pages/landing/Landing.page';
import Shop from './pages/shop/Shop.page';
import About from './pages/about/About.page';
import Navbar from './components/navbar/Navbar.component';
import SidebarContent from './components/sidebar-content/SidebarContent.component';

import { selectCartOpen, selectCartItems } from './redux/cart/cart.selectors';
import { toggleCart } from './redux/cart/cart.actions';

import './App.css';

function App({ cartOpen, toggleCart, cartItems }) {
  return (
    <div id="App">
      <Sidebar 
        pullRight
        sidebar={<SidebarContent cartItems={cartItems} />}
        open={cartOpen}
        onSetOpen={toggleCart}
        styles={{ sidebar: { background: "white", width: '40%' } }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Sidebar>
      
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartOpen: selectCartOpen,
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
