import React, { Component } from 'react'
import configsRoute from '../../configs/roles'
import { Route, Switch, Redirect } from 'react-router-dom';

export default class privateRoutes extends Component {
  state = {
    allowedRoutes: configsRoute[this.props.role].route,
    redirectRoute: configsRoute[this.props.role].redirect,
  }

  // componentDidMount() {
  //   const role = this.props.role || 'guest';
  //   this.setState({
  //     allowRoutes: configsRoute[role].routes,
  //     redirectRoutes: configsRoute[role].redirect,
  //   })
  // }

  render() {
    return (
      <div>
        <Switch>
          {this.state.allowedRoutes.map(route => {
            console.log(route)
            return (
                <Route 
                  exact path={route.url}
                  component={route.component}
                  key={route.url}
                />
              )
            
          })}
          <Redirect to={this.state.redirectRoute} />

        </Switch>
        
      </div>
    )
  }
}
