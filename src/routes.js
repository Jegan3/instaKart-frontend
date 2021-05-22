import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import Dashboard from './containers/Dashboard';
import SignUp from './containers/SignUp';
import TermsConditions from './containers/TermsConditions';
import AboutUs from './containers/AboutUs';
import VendorInfo from './containers/VendorInfo';
import ThriftStore from './containers/ThriftStore';
import AdsDetails from './containers/AdsDetails';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/termsofcondition" component={TermsConditions} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/vendorinfo" component={VendorInfo} />
        <Route path="/thriftstore" component={ThriftStore} />
        <Route path="/advertisement" component={AdsDetails} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;

