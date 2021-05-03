import { combineReducers } from 'redux';
import signup from './Signup';
import login from './Login';
import uploadBanner from './UploadBanner';
import retreiveBanner from './RetrieveBanner';
import otp from './Otp';
import signupContent from './SignupContent';

const rootReducer = combineReducers({
  signupState: signup,
  loginState: login,
  uploadBannerState: uploadBanner,
  retreiveBannerState: retreiveBanner,
  otpState: otp,
  signupContentState: signupContent,
});

export default rootReducer;
