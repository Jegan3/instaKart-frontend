const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THRIFT_STORE_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'THRIFT_STORE_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        thriftStoreInfo: action.thriftStoreInfo,
      };
    case 'THRIFT_STORE_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
