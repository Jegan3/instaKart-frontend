const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return {
        ...state,
        isLoading: true,
        // profile: false,
        error: false,
      };
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        profile: action.profile,
      };
    case 'PROFILE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
