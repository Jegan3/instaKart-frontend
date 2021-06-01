import { combineReducers } from 'redux';
import signupState from './Signup';
import loginState from './Login';
import uploadBannerState from './UploadBanner';
import retreiveBannerState from './RetrieveBanner';
import otpState from './Otp';
import signupContentState from './SignupContent';
import vendorInfoState from './VendorInfo';
import sidebarState from './Sidebar';

const rootReducer = combineReducers({
  signupState,
  loginState,
  uploadBannerState,
  retreiveBannerState,
  otpState,
  signupContentState,
  vendorInfoState,
  sidebarState,
});

export default rootReducer;
