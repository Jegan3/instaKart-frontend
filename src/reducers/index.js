import { combineReducers } from 'redux';
import signup from './Signup';
import login from './Login';

const rootReducer = combineReducers({
  signupState: signup,
  loginState: login,
});

export default rootReducer;
