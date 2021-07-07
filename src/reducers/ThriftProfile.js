const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THRIFT_PROFILE_REQUEST':
      return {
        ...state,
        isLoading: true,
        profileInfo: '',
        error: false,
      };
    case 'THRIFT_PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        profileInfo: action.profileInfo,
      };
    case 'THRIFT_PROFILE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
