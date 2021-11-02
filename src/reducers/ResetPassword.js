const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_PASSWORD_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'RESET_PASSWORD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        resetPassword: action.resetPassword,
      };
    case 'RESET_PASSWORD_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
