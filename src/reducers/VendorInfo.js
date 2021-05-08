import * as INSTAKART from '../actionTypes/VendorInfo';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSTAKART.VENDOR_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        vendorInfo: false,
        error: false,
      };
    case INSTAKART.VENDOR_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        vendorInfo: action.vendorInfo,
      };
    case INSTAKART.VENDOR_INFO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
