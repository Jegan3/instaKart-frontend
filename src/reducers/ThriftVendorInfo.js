const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THRIFT_VENDOR_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        thriftVendorInfo: '',
        error: false,
      };
    case 'THRIFT_VENDOR_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        thriftVendorInfo: action.thriftVendorInfo,
      };
    case 'THRIFT_VENDOR_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
