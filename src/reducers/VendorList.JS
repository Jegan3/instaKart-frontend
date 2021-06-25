const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VENDOR_LIST_REQUEST':
      return {
        ...state,
        isLoading: true,
        vendorList: false,
        error: false,
      };
    case 'VENDOR_LIST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        vendorList: action.vendorList,
      };
    case 'VENDOR_LIST_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
