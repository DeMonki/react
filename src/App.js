import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import  HomePage  from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exacts path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
