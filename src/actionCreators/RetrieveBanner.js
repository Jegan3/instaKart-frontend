import * as INSTAKART from '../actionTypes/RetrieveBanner';

export function getBannerRetrieve(email) {
  return {
    type: INSTAKART.BANNER_RETRIEVE_REQUEST,
    email,
  };
}

export function getBannerRetrieveSuccess(banner) {
  return {
    type: INSTAKART.BANNER_RETRIEVE_SUCCESS,
    banner,
  };
}

export function getBannerRetrieveFailure(error) {
  return {
    type: INSTAKART.BANNER_RETRIEVE_FAILURE,
    error,
  };
}
