const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORY_PAGE_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
        categoryPage: null,
      };
    case 'CATEGORY_PAGE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        categoryPage: action.categoryPage,
      };
    case 'CATEGORY_PAGE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
