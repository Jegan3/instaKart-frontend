const initialState = {};

export const storeInfoState = (state = initialState, action) => {
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

export const storeInfoUpdateState = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_INFO_UPDATE_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'STORE_INFO_UPDATE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        storeInfoUpdate: action.storeUpdate,
      };
    case 'STORE_INFO_UPDATE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
