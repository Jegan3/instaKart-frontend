const initialState = {};

export const listYourAds = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_YOUR_ADS_REQUEST':
      return {
        ...state,
        isLoading: true,
        // listyourads: false,
        error: false,
      };
    case 'LIST_YOUR_ADS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        advertisement: action.advertiseNow,
      };
    case 'LIST_YOUR_ADS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getYourAds = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_YOUR_ADS_REQUEST':
      return {
        ...state,
        isLoading: true,
        // listyourads: false,
        error: false,
      };
    case 'GET_YOUR_ADS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        advertisement: action.advertiseNow,
      };
    case 'GET_YOUR_ADS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
