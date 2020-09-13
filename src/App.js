import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component'

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
      </Switch>

    )
  }
}

export default App;
