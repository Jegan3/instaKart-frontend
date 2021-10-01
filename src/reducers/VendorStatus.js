const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VENDOR_STATUS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'VENDOR_STATUS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        status: action.status,
      };
    case 'VENDOR_STATUS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
