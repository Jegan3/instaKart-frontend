const initialState = {
  submit: true,
};

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
        submit: true,
      };
    case 'STORE_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
        submit: true,
      };
    case 'STORE_INFO_CHECK':
      return {
        ...state,
        submit: false,
      };
    case 'STORE_INFO_SUBMIT':
      return {
        ...state,
        submit: true,
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
        submit: true,
      };
    case 'STORE_INFO_UPDATE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
        submit: true,
      };
    case 'STORE_INFO_CHECK':
      return {
        ...state,
        submit: false,
      };
    case 'STORE_INFO_SUBMIT':
      return {
        ...state,
        submit: true,
      };
    default:
      return state;
  }
};
