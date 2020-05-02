import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/landing/Landing.page';
import Shop from './pages/shop/Shop.page';
import Navbar from './components/navbar/Navbar.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
