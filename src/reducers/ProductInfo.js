const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'PRODUCT_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        productInfo: action.productInfo,
      };
    case 'PRODUCT_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
