import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Vehicles from '../components/Views/Vehicles/Index';
import Companies from '../components/Views/Companies/Index';
import Dashboard from '../components/Views/Dashboard/Index';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Dashboard} path="/" />
          <Route exact component={Vehicles} path="/vehicles" />
          <Route exact component={Companies} path="/companies" />
        </Switch>
      </BrowserRouter>
    )
  }
}
