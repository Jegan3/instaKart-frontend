const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THRIFT_DETAILS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'THRIFT_DETAILS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        thriftDetails: action.thriftDetails,
      };
    case 'THRIFT_DETAILS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
