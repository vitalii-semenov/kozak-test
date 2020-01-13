import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loggedIn } from '../../actions/loginActions'

const PublicRoute = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={props => (
          loggedIn() ?
              <Component {...props} />
              : <Redirect to="/login" />
      )} />
  );
};

export default PublicRoute;