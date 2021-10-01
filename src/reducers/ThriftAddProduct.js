const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THRIFT_ADD_PRODUCT_REQUEST':
      return {
        ...state,
        isLoading: true,
        thriftAddProduct: false,
        error: false,
      };
    case 'THRIFT_ADD_PRODUCT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        thriftAddProduct: action.thriftAddProduct,
      };
    case 'THRIFT_ADD_PRODUCT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
