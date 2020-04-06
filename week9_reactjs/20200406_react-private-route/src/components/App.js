import React, {useState, useEffect  }  from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import VIPFeature from './pages/VIPfeature';
import AdminFeature from './pages/AdminFeature';
import PrivateRoutes from './private-routes/privateRoutes'
import ConfigsRoute from '../configs/roles'

function App() {
  const [role, setRole] = useState('user'); // guest, user, admin


  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/vip" component={VIPFeature}  />
        <Route exact path="/admin" component={AdminFeature} />
        <Redirect to="/" />
      </Switch> */}
      <PrivateRoutes role={role} />
    </div>
  );
}

export default App;
