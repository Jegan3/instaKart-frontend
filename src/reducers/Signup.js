const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        isLoading: true,
        signup: false,
        error: false,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        signup: action.signup,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
