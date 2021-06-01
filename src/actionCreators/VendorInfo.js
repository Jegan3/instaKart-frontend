export const getVendorInfo = (vendorInfo) => ({
  type: 'VENDOR_INFO_REQUEST',
  vendorInfo,
});

export const getVendorInfoSuccess = (vendorInfo) => ({
  type: 'VENDOR_INFO_SUCCESS',
  vendorInfo,
});

export const getVendorInfoFailure = (error) => ({
  type: 'VENDOR_INFO_FAILURE',
  error,
});
