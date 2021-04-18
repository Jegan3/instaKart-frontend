import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import Dashboard from './containers/Dashboard';
import SignUp from './containers/SignUp';
import TermsConditions from './containers/TermsConditions/termsofconditions';
import AboutUs from './containers/AboutUs/aboutus';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/termsofcondition" component={TermsConditions} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </React.Fragment>
  </Router >
);

export default Routes;

