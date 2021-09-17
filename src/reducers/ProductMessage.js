const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_MESSAGE_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'PRODUCT_MESSAGE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        productMessage: action.productMessage,
      };
    case 'PRODUCT_MESSAGE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
