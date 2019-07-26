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
          <Route exact component={views.Dashboard} path="/" />
          <PrivateRoute exact component={views.Vehicles} path="/vehicles" />
          <PrivateRoute exact component={views.Companies} path="/companies" />
        </Switch>
      </BrowserRouter>
    )
  }
}
