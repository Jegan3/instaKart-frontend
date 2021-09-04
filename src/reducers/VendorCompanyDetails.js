const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VENDOR_COMPANY_DETAILS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'VENDOR_COMPANY_DETAILS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        vendorCompanyDetails: action.vendorCompanyDetails,
      };
    case 'VENDOR_COMPANY_DETAILS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
