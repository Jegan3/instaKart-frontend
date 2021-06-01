const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BANNER_UPLOAD_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'BANNER_UPLOAD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        uploadBanner: action.banner,
      };
    case 'BANNER_UPLOAD_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
