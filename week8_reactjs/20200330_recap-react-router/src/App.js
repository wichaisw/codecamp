import React from 'react';
import './App.css';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Map from './Pages/Map';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/map">Map</Link>
      <br />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/error" component={NotFound} />
      <Route exact path="/profile:id" component={Profile} />
      <Redirect to="/error" />
    </Switch>
    </div>
  );
}

export default App;
