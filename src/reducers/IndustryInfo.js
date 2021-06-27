const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INDUSTRY_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'INDUSTRY_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        industryInfo: action.industryInfo,
      };
    case 'INDUSTRY_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
