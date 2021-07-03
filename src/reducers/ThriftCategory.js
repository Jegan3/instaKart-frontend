const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THRIFT_CATEGORY_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'THRIFT_CATEGORY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        thriftCategory: action.thriftCategory,
      };
    case 'THRIFT_CATEGORY_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
