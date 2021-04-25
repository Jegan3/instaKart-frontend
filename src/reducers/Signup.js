import * as INSTAKART from '../actionTypes/Signup';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSTAKART.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        signup: false,
        error: false,
      };
    case INSTAKART.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signup: action.signup,
      };
    case INSTAKART.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
