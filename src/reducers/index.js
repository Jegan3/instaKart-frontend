import { combineReducers } from 'redux';
import signupState from './Signup';
import loginState from './Login';
import otpState from './Otp';
import signupContentState from './SignupContent';
import vendorInfoState from './VendorInfo';
import sidebarState from './Sidebar';
import vendorListState from './VendorList';
import vendorStatusState from './VendorStatus';
import industryInfoState from './IndustryInfo';

const rootReducer = combineReducers({
  signupState,
  loginState,
  // uploadBannerState,
  otpState,
  signupContentState,
  vendorInfoState,
  sidebarState,
  vendorListState,
  vendorStatusState,
  industryInfoState,
});

export default rootReducer;
