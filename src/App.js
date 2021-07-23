import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import  HomePage  from './pages/homepage.component'

import './App.css';



const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exacts path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
