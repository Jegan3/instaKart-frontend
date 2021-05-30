const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return {
        ...state,
        show: true,
      };
    case 'HIDE_SIDEBAR':
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
