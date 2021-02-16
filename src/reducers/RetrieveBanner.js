import * as INSTAKART from '../actionTypes/RetrieveBanner';

const initialState = {
  // contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSTAKART.BANNER_RETRIEVE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case INSTAKART.BANNER_RETRIEVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        retreiveBanner: action.banner,
      };
    case INSTAKART.BANNER_RETRIEVE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
