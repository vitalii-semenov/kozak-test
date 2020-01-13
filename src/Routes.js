import React from 'react';
import {Route, Switch} from 'react-router';
import App from './containers/App';
import Routes from './constants/routes';
import HomePage from './containers/Home/HomePage';
import LoginPage from './containers/Login/LoginPage';
import PrivateRoute from './components/PrivateRoute';

export default () => (
    <App>
      <Switch>
        <PrivateRoute exact path={Routes.HOME} component={HomePage}/>
        <Route exact path={Routes.LOGIN} component={LoginPage}/>
      </Switch>
    </App>
);
