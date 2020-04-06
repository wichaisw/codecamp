import React, {useState, useEffect  }  from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import VIPFeature from './pages/VIPfeature';
import AdminFeature from './pages/AdminFeature';
import PrivateRoutes from './private-routes/privateRoutes'
import ConfigsRoute from '../configs/roles'
import Register from './pages/Register';

function App() {
  const [role, setRole] = useState('user'); // guest, user, admin


  return (
    <div className="App">
      {/* <PrivateRoutes role={role} /> */}
      <Register />
    </div>
  );
}

export default App;
