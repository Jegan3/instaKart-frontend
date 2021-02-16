import * as INSTAKART from '../actionTypes/UploadBanner';

const initialState = {
  // contacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSTAKART.BANNER_UPLOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case INSTAKART.BANNER_UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        uploadBanner: action.banner,
      };
    case INSTAKART.BANNER_UPLOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
