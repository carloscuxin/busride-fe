import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import * as views from '../views';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={views.Dashboard} path="/" />
          <Route exact component={views.Vehicles} path="/vehicles" />
          <Route exact component={views.Companies} path="/companies" />
        </Switch>
      </BrowserRouter>
    )
  }
}
