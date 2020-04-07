import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import LogInPage from './components/Login/LogInPage.js'

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path='/' component={} /> */}
        <Route exact path='/login' component={LogInPage} />
      </Switch>
    </div>
  );
}

export default App;
