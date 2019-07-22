import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//Own components
import PrivateRoute from "../components/authentication/PrivateRoute";
import * as views from '../views';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={views.Login} path="/login" />
          <PrivateRoute component={views.Dashboard} path="/" />
          <PrivateRoute component={views.Vehicles} path="/vehicles" />
          <PrivateRoute component={views.Companies} path="/companies" />
        </Switch>
      </BrowserRouter>
    )
  }
}
