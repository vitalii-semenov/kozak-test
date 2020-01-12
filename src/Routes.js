import React from 'react';
import {Route, Switch} from 'react-router';
import App from './containers/App';
import Routes from './constants/routes';
import HomePage from './containers/Home/HomePage';

export default () => (
    <App>
      <Switch>
        <Route exact path={Routes.HOME} component={HomePage}/>
      </Switch>
    </App>
);
