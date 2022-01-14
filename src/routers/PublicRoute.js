import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} component={(props) => <Component {...props} />} />
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
