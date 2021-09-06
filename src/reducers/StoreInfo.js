const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'STORE_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        storeInfo: action.storeInfo,
      };
    case 'STORE_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
