export const getVendorList = () => ({
  type: 'VENDOR_LIST_REQUEST',
});

export const getVendorListSuccess = (vendorList) => ({
  type: 'VENDOR_LIST_SUCCESS',
  vendorList,
});

export const getVendorListFailure = (error) => ({
  type: 'VENDOR_LIST_FAILURE',
  error,
});
