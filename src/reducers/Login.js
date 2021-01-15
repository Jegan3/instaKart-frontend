import * as INSTAKART from '../actionTypes/Login';

const initialState = {
  // contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSTAKART.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case INSTAKART.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        login: action.login,
      };
    case INSTAKART.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case INSTAKART.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        login: null,
      };
    default:
      return state;
  }
};
