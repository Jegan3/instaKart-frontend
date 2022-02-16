import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Admin/Dashboard';
import User from './pages/Admin/User';
import Vendor from './pages/Admin/Vendor';
import VendorDetails from './pages/Admin/Vendor/VendorDetail';

import AboutUs from './pages/User/AboutUs';
import Cart from './pages/User/Cart';
import CategoryPage from './pages/User/CategoryPage';
import Checkout from './pages/User/Checkout';
import ComingSoon from './pages/User/ComingSoon';
import Home from './pages/User/Home';
import ListYourAds from './pages/User/ListYourAds';
import PaymentStatus from './pages/User/PaymentStatus';
import ProductInfo from './pages/User/ProductInfo';
import SignUp from './pages/User/SignUp';
import TermsConditions from './pages/User/TermsConditions';
import ThriftStore from './pages/User/ThriftStore';
import ThriftStoreInfo from './pages/User/ThriftStoreInfo';
import UpdatePassword from './pages/User/UpdatePassword';

import Profile from './pages/Vendor/Profile';
import Store from './pages/Vendor/Store';
import StoreInfo from './pages/Vendor/StoreInfo';
import VendorInfo from './pages/Vendor/VendorInfo';

// import ErrorPage from './components/ErrorPage';

export const history = createBrowserHistory();

const AuthenticatedRoutes = () => (
  <Router history={history}>
    <div style={{ height: '100%', display: 'flex' }}>
      <Sidebar />
      <Switch>
        <Switch>
          <Route path="/storeinfo" component={StoreInfo} />
          <Route path="/profile" component={Profile} />
          <Route path="/storedetails" component={Store} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/vendor" component={Vendor} />
          <Route path="/vendordetails" component={VendorDetails} />
          <Route path="/user" component={User} />
        </Switch>
      </Switch>
    </div>
  </Router>
);

const Routes = () => (
  <Router history={history}>
    <React.Fragment >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/termsofcondition" component={TermsConditions} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/vendorinfo" component={VendorInfo} />
        <Route path="/thriftstore" component={ThriftStore} />
        <Route path="/comingsoon" component={ComingSoon} />
        <Route path="/thriftstoreinfo" component={ThriftStoreInfo} />
        <Route path="/productinfo" component={ProductInfo} />
        <Route path="/updatepassword" component={UpdatePassword} />
        <Route path="/cart" component={Cart} />
        <Route path="/paymentstatus" component={PaymentStatus} />
        <Route path="/listyourads" component={ListYourAds} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/categorypage" component={CategoryPage} />
        {/* <Route path="*" component={ErrorPage} /> */}
        <Route component={AuthenticatedRoutes} />
        {/* <Route path="*" component={ErrorPage} /> */}
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;
