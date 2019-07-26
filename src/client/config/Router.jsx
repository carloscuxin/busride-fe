import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//Own components
import PrivateRoute from "../components/authentication/PrivateRoute";
import * as views from '../views';
import { AuthProvider } from "../../server/services/authentication";

export default class Router extends Component {
  render() {
    console.log('viene');
    return (
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact component={views.Login} path="/login" />
          <Route component={views.Dashboard} path="/" />
          <PrivateRoute component={views.Vehicles} path="/vehicles" />
          <PrivateRoute component={views.Companies} path="/companies" />
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    )
  }
}
