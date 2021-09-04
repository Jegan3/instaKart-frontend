const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STORE_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'ADD_STORE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        addStore: action.addStore,
      };
    case 'ADD_STORE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
