import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import SignUp from './containers/SignUp';
import TermsConditions from './containers/TermsConditions';
import AboutUs from './containers/AboutUs';
import VendorInfo from './containers/VendorInfo';
import ThriftStore from './containers/ThriftStore';
import AdsDetails from './containers/AdsDetails';
import ProductList from './containers/ProductList';
import AddProduct from './containers/AddProduct';
import Profile from './containers/Profile';
import UpdatePassword from './containers/UpdatePassword';
import MyProfile from './containers/MyProfile';
// import StoreCard from './components/StoreCard';
import ProductInfo from './containers/ProductInfo';
import ThriftStoreInfo from './containers/ThriftStoreInfo';
import CheckOut from './containers/CheckOut';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/termsofcondition" component={TermsConditions} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/vendorinfo" component={VendorInfo} />
        <Route path="/thriftstore" component={ThriftStore} />
        <Route path="/advertisement" component={AdsDetails} />
        <Route path="/productlist" component={ProductList} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/profile" component={Profile} />
        <Route path="/thriftstoreinfo" component={ThriftStoreInfo} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/productInfo" component={ProductInfo} />
        <Route path="/updatepassword" component={UpdatePassword} />
        <Route path="/checkout" component={CheckOut} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;

