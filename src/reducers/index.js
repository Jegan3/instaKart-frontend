import { combineReducers } from 'redux';
import signupState from './Signup';
import loginState from './Login';
import otpState from './Otp';
import vendorInfoState from './VendorInfo';
import sidebarState from './Sidebar';
import vendorListState from './VendorList';
import vendorStatusState from './VendorStatus';
import thriftVendorInfoState from './ThriftVendorInfo';
import thriftProfileState from './ThriftProfile';
import thriftAddProductState from './ThriftAddProduct';
import thriftCategoryState from './ThriftCategory';
import thriftDetailsState from './ThriftDetails';
import thriftStoreInfoState from './ThriftStoreInfo ';
import productInfoState from './ProductInfo';
import cartState from './Cart';
import addCartState from './AddCart';

const rootReducer = combineReducers({
  signupState,
  loginState,
  otpState,
  vendorInfoState,
  sidebarState,
  vendorListState,
  vendorStatusState,
  thriftVendorInfoState,
  thriftProfileState,
  thriftAddProductState,
  thriftCategoryState,
  thriftDetailsState,
  thriftStoreInfoState,
  productInfoState,
  cartState,
  addCartState,
});

export default rootReducer;
