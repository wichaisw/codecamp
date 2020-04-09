import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import LogInPage from './Login/LogInPage'
import HomePage from './HomePage/HomePage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LogInPage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
