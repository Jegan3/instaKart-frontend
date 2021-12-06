const initialState = {};

export const profileState = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return {
        ...state,
        isLoading: true,
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

export const profileUpdateState = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_UPDATE_REQUEST':
      return {
        ...state,
        isLoading: true,
        // profile: false,
        error: false,
      };
    case 'PROFILE_UPDATE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        profileUpdate: action.profileUpdate,
      };
    case 'PROFILE_UPDATE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
