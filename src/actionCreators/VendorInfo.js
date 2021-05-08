import * as INSTAKART from '../actionTypes/VendorInfo';

export function getVendorInfo(vendorInfo) {
  return {
    type: INSTAKART.VENDOR_INFO_REQUEST,
    vendorInfo,
  };
}

export function getVendorInfoSuccess(vendorInfo) {
  return {
    type: INSTAKART.VENDOR_INFO_SUCCESS,
    vendorInfo,
  };
}

export function getVendorInfoFailure(error) {
  return {
    type: INSTAKART.VENDOR_INFO_FAILURE,
    error,
  };
}
