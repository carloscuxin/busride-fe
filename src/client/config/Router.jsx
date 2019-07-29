import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//Own components
import PrivateRoute from "../components/authentication/PrivateRoute";
import * as views from '../views';
import { useAuth } from '../../server/services/authentication'
import Loading from '../components/datadisplay/Loading';

const Router = () => {
    const { loading } = useAuth();

    if (loading) return <Loading />;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={views.Login} path="/login" />
          <Route exact component={Loading} path="/spinner" />
          <PrivateRoute exact component={views.Dashboard} path="/" />
          <PrivateRoute exact component={views.Vehicles} path="/vehicles" />
          <Route exact component={views.Companies} path="/companies" />
        </Switch>
      </BrowserRouter>
    )
};

export default Router;
