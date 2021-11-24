const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LIST_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'USER_LIST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        userList: action.userList,
      };
    case 'USER_LIST_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
