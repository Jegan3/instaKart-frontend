const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CART_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'CART_SUCCESS':
      return {
        ...state,
        isLoading: false,
        cart: action.cart,
      };
    case 'CART_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
