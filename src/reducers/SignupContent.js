const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_CONTENT_REQUEST':
      return {
        ...state,
        isLoading: true,
        signupContent: false,
        error: false,
      };
    case 'SIGNUP_CONTENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        signupContent: action.signupContent,
      };
    case 'SIGNUP_CONTENT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
