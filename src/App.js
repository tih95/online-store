import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/landing/Landing.page';
import Shop from './pages/shop/Shop.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact shop="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
