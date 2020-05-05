import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/landing/Landing.page';
import Shop from './pages/shop/Shop.page';
import About from './pages/about/About.page';
import Navbar from './components/navbar/Navbar.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
