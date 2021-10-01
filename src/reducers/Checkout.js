const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'CHECKOUT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        checkout: action.checkout,
      };
    case 'CHECKOUT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
