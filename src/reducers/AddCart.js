const initialState = {
  addCartGlobal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        addCart: null,
      };
    case 'ADD_CART_SUCCESS':
      return {
        ...state,
        isLoading: false,
        addCart: action.addCart,
      };
    case 'ADD_CART_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'ADD_CART_GLOBAL':
      return {
        ...state,
        isLoading: false,
        addCartGlobal: true,
      };
    case 'BUY_NOW':
      return {
        ...state,
        isLoading: false,
        buyNow: action.buyNow,
      };
    default:
      return state;
  }
};
