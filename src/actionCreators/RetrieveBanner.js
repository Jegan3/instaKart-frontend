import * as INSTAKART from '../actionTypes/RetrieveBanner';

export function getBannerRetrieve(banner) {
  return {
    type: INSTAKART.BANNER_RETRIEVE_REQUEST,
    banner,
  };
}

export function getBannerRetrieveSucccess(banner) {
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
