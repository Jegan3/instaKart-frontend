import * as INSTAKART from '../actionTypes/Banner';

export function getBannerUpload(banner) {
  return {
    type: INSTAKART.BANNER_UPLOAD_REQUEST,
    banner,
  };
}

export function getBannerUploadSucccess(banner) {
  return {
    type: INSTAKART.BANNER_UPLOAD_SUCCESS,
    banner,
  };
}

export function getBannerUploadFailure(error) {
  return {
    type: INSTAKART.BANNER_UPLOAD_FAILURE,
    error,
  };
}
