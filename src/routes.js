import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
// import ContactsContainer from './containers/ContactsContainer';
// import RouteConstants from './constants/RouteConstants';
import Welcome from './containers/Welcome';
import Dashboard from './containers/Dashboard';
import SignUp from './containers/SignUp';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/" component={ContactsContainer} /> */}
        {/* <Route path={RouteConstants.CONTACTS} component={ContactsContainer} /> */}
        <Route exact path="/" component={Welcome} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  </Router >
);

export default Routes;

