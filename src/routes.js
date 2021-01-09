import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import ContactsContainer from './containers/ContactsContainer';
// import RouteConstants from './constants/RouteConstants';
import Welcome from './containers/Welcome';
// import Dashboard from './containers/Dashboard';
// import NewArrivals from './containers/NewArrivals'

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/" component={ContactsContainer} /> */}
        {/* <Route path={RouteConstants.CONTACTS} component={ContactsContainer} /> */}
        <Route path="/" component={Welcome} />
        {/* <Route path="/" component={Dashboard} /> */}
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  </Router >
);

export default Routes;

