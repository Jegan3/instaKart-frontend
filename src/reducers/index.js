import { combineReducers } from 'redux';
import signup from './Signup';
import login from './Login';
import banner from './Banner';

const rootReducer = combineReducers({
  signupState: signup,
  loginState: login,
  bannerState: banner,
});

export default rootReducer;
