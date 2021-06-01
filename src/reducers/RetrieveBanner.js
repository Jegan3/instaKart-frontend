const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BANNER_RETRIEVE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'BANNER_RETRIEVE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        retreiveBanner: action.banner,
      };
    case 'BANNER_RETRIEVE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
