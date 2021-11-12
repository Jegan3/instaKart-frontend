const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_YOUR-ADS_REQUEST':
      return {
        ...state,
        isLoading: true,
        listyourads: false,
        error: false,
      };
    case 'LIST_YOUR-ADS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        listyourads: action.listyourads,
      };
    case 'LIST_YOUR-ADS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
