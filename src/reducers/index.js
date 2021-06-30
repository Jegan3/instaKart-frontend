import { combineReducers } from 'redux';
import signupState from './Signup';
import loginState from './Login';
import otpState from './Otp';
import generalInfoState from './GeneralInfo';
import vendorInfoState from './VendorInfo';
import sidebarState from './Sidebar';
import vendorListState from './VendorList';
import vendorStatusState from './VendorStatus';
import industryInfoState from './IndustryInfo';

const rootReducer = combineReducers({
  signupState,
  loginState,
  otpState,
  vendorInfoState,
  sidebarState,
  vendorListState,
  vendorStatusState,
  industryInfoState,
  generalInfoState,
});

export default rootReducer;
