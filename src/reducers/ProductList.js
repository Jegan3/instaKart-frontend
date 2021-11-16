const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'PRODUCT_LIST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        productList: action.productList,
      };
    case 'PRODUCT_LIST_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
