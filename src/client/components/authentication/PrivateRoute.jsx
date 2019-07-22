import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "../../../auth0-wrapper";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  const render = props => isAuthenticated ? <Component {...props} /> : <Redirect to={'/login'} />;
  
  return <Route path={path} render={render} {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
};

export default PrivateRoute;