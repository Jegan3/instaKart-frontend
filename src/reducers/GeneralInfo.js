const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GENERAL_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
        generalInfo: false,
        error: false,
      };
    case 'GENERAL_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        generalInfo: action.generalInfo,
      };
    case 'GENERAL_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
