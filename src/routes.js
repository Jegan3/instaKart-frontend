import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/User/Home';
import Dashboard from './pages/Admin/Dashboard';
import SignUp from './pages/User/SignUp';
import TermsConditions from './pages/User/TermsConditions';
import AboutUs from './pages/User/AboutUs';
import VendorInfo from './pages/Vendor/VendorInfo';
import ThriftStore from './pages/User/ThriftStore';
import ComingSoon from './pages/User/ComingSoon';
// import AdsDetails from './pages/AdsDetails';
import ProductList from './pages/Vendor/ProductList';
import AddProduct from './pages/Vendor/AddProduct';
import Profile from './pages/Vendor/StoreInfo';
import UpdatePassword from './pages/User/UpdatePassword';
import MyProfile from './pages/Vendor/MyProfile';
// import StoreCard from './components/StoreCard';
import ProductInfo from './pages/User/ProductInfo';
import ThriftStoreInfo from './pages/User/ThriftStoreInfo';
import Cart from './pages/User/Cart';
import Industry from './pages/Vendor/Industry';
import ListYourAds from './pages/User/ListYourAds';
import PaymentStatus from './pages/User/PaymentStatus';

export const history = createBrowserHistory();

const AuthenticatedRoutes = () => (
  <Router history={history}>
    <div style={{ height: '100%', display: 'flex' }}>
      <Sidebar />
      <Switch>
        <Switch>
          <Route path="/productlist" component={ProductList} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/profile" component={Profile} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/storedetails" component={Industry} />
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
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/termsofcondition" component={TermsConditions} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/vendorinfo" component={VendorInfo} />
        <Route path="/thriftstore" component={ThriftStore} />
        <Route path="/comingsoon" component={ComingSoon} />
        {/* <Route path="/advertisement" component={AdsDetails} /> */}
        {/* <Route path="/productlist" component={ProductList} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/profile" component={Profile} /> */}
        <Route path="/thriftstoreinfo" component={ThriftStoreInfo} />
        {/* <Route path="/myprofile" component={MyProfile} /> */}
        <Route path="/listyourads" component={ListYourAds} />
        <Route path="/productinfo" component={ProductInfo} />
        <Route path="/updatepassword" component={UpdatePassword} />
        <Route path="/cart" component={Cart} />
        <Route path="/paymentstatus" component={PaymentStatus} />
        <Route component={AuthenticatedRoutes} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;

